import { spawn } from "node:child_process";
import { mkdir, mkdtemp, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

const root = process.cwd();
const outputDirectory = path.join(root, "docs", "site-rebuild", "screenshots", "final");
const formExpectation = process.env["QA_FORM_EXPECT"];
const reportName =
  formExpectation === "success" || formExpectation === "error"
    ? `browser-qa-${formExpectation}.json`
    : "browser-qa.json";
const reportPath = path.join(root, "docs", "site-rebuild", reportName);
const chromePath =
  process.env["CHROME_PATH"] ??
  (process.platform === "win32"
    ? "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    : "google-chrome");
const baseUrl = process.env["QA_BASE_URL"] ?? "http://127.0.0.1:8080";

const viewports = [
  { name: "desktop", width: 1440, height: 1000, mobile: false },
  { name: "tablet", width: 820, height: 1180, mobile: true },
  { name: "mobile", width: 390, height: 844, mobile: true },
];

const sectionIds = ["hero", "model", "proof", "delivery", "team", "faq", "contact"];

const localRoutes = [
  "/",
  "/realisations",
  "/cas-usage",
  "/methode",
  "/a-propos",
  "/contact",
  "/journal",
  "/mentions-legales",
  "/confidentialite",
];

function wait(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

async function launchChrome() {
  const profileDirectory = await mkdtemp(path.join(os.tmpdir(), "sway-ops-qa-"));
  const chrome = spawn(
    chromePath,
    [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--no-first-run",
      "--no-default-browser-check",
      "--remote-debugging-port=0",
      `--user-data-dir=${profileDirectory}`,
      "about:blank",
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );

  const browserWebSocketUrl = await new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error("Chrome DevTools did not start.")), 15_000);
    let stderr = "";

    chrome.stderr.setEncoding("utf8");
    chrome.stderr.on("data", (chunk) => {
      stderr += chunk;
      const match = stderr.match(/DevTools listening on (ws:\/\/[^\s]+)/u);
      if (match?.[1]) {
        clearTimeout(timeout);
        resolve(match[1]);
      }
    });
    chrome.once("exit", (code) => {
      clearTimeout(timeout);
      reject(new Error(`Chrome exited before DevTools was ready (code ${code ?? "unknown"}).`));
    });
  });

  return { chrome, profileDirectory, browserWebSocketUrl };
}

async function getPageWebSocketUrl(browserWebSocketUrl) {
  const endpoint = new URL(browserWebSocketUrl);
  const listUrl = `http://${endpoint.host}/json/list`;

  for (let attempt = 0; attempt < 20; attempt += 1) {
    const targets = await fetch(listUrl).then((response) => response.json());
    const page = targets.find((target) => target.type === "page");
    if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    await wait(100);
  }

  throw new Error("No debuggable page target was found.");
}

function createClient(webSocketUrl) {
  const socket = new WebSocket(webSocketUrl);
  const pending = new Map();
  const listeners = new Map();
  let nextId = 1;

  socket.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const { resolve, reject } = pending.get(message.id);
      pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result);
      return;
    }

    const methodListeners = listeners.get(message.method) ?? [];
    for (const listener of methodListeners) listener(message.params);
  });

  return {
    ready: new Promise((resolve, reject) => {
      socket.addEventListener("open", resolve, { once: true });
      socket.addEventListener("error", reject, { once: true });
    }),
    close: () => socket.close(),
    send(method, params = {}) {
      const id = nextId;
      nextId += 1;
      return new Promise((resolve, reject) => {
        pending.set(id, { resolve, reject });
        socket.send(JSON.stringify({ id, method, params }));
      });
    },
    once(method) {
      return new Promise((resolve) => {
        const listener = (params) => {
          listeners.set(
            method,
            (listeners.get(method) ?? []).filter((candidate) => candidate !== listener),
          );
          resolve(params);
        };
        listeners.set(method, [...(listeners.get(method) ?? []), listener]);
      });
    },
  };
}

async function evaluate(client, expression) {
  const result = await client.send("Runtime.evaluate", {
    expression,
    returnByValue: true,
    awaitPromise: true,
  });
  return result.result.value;
}

async function navigate(client, url) {
  const loaded = client.once("Page.loadEventFired");
  await client.send("Page.navigate", { url });
  await loaded;
  await wait(500);
  await evaluate(
    client,
    "document.fonts && document.fonts.ready ? document.fonts.ready.then(() => true) : true",
  );
}

async function capture(client, fileName, clip) {
  const result = await client.send("Page.captureScreenshot", {
    format: "png",
    captureBeyondViewport: Boolean(clip),
    fromSurface: true,
    ...(clip ? { clip } : {}),
  });
  await writeFile(path.join(outputDirectory, fileName), Buffer.from(result.data, "base64"));
}

async function runViewport(client, viewport) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: viewport.width,
    height: viewport.height,
    deviceScaleFactor: 1,
    mobile: viewport.mobile,
  });
  await client.send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
  await navigate(client, `${baseUrl}/`);

  const diagnostics = await evaluate(
    client,
    `(() => {
      const overflowingElements = [...document.querySelectorAll("body *")]
        .filter((element) => {
          if (element.closest('[aria-hidden="true"], [data-qa-horizontal-scroll="true"]')) {
            return false;
          }
          const rect = element.getBoundingClientRect();
          return rect.right > document.documentElement.clientWidth + 1 || rect.left < -1;
        })
        .slice(0, 20)
        .map((element) => ({
          tag: element.tagName.toLowerCase(),
          id: element.id || null,
          className: typeof element.className === "string" ? element.className : null,
          text: (element.textContent || "").trim().replace(/\\s+/g, " ").slice(0, 90),
          left: Math.round(element.getBoundingClientRect().left),
          right: Math.round(element.getBoundingClientRect().right),
        }));

      return {
        viewport: { width: innerWidth, height: innerHeight },
        document: {
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          scrollHeight: document.documentElement.scrollHeight,
        },
        h1Count: document.querySelectorAll("h1").length,
        mainCount: document.querySelectorAll("main").length,
        structuredDataCount: document.querySelectorAll('script[type="application/ld+json"]').length,
        missingAltCount: [...document.images].filter((image) => !image.hasAttribute("alt")).length,
        emptyLinks: [...document.querySelectorAll("a")].filter((link) => !link.textContent.trim() && !link.getAttribute("aria-label")).length,
        unlabelledFormControls: [...document.querySelectorAll("input, textarea, select")].filter((control) => {
          if (control.closest('[aria-hidden="true"]')) return false;
          if (control.getAttribute("aria-label") || control.getAttribute("aria-labelledby")) return false;
          if (control.closest("label")) return false;
          return !control.id || !document.querySelector('label[for="' + CSS.escape(control.id) + '"]');
        }).length,
        reducedMotionEmulated: matchMedia("(prefers-reduced-motion: reduce)").matches,
        reducedMotionAnimationDuration: document.querySelector(".signal-dot")
          ? getComputedStyle(document.querySelector(".signal-dot")).animationDuration
          : "not-present",
        typeScale: {
          hero: getComputedStyle(document.querySelector("#hero h1")).fontSize,
          section: getComputedStyle(document.querySelector("#proof h2")).fontSize,
          feature: getComputedStyle(document.querySelector("#proof article h3")).fontSize,
          body: getComputedStyle(document.querySelector("#hero [data-hero-body]")).fontSize,
        },
        sectionHeights: Object.fromEntries(
          ${JSON.stringify(sectionIds)}.map((id) => {
            const element = document.getElementById(id);
            return [id, element ? Math.round(element.getBoundingClientRect().height) : null];
          }),
        ),
        overflowingElements,
      };
    })()`,
  );

  await evaluate(client, "scrollTo(0, 0)");
  await capture(client, `home-${viewport.name}-top.png`);
  await client.send("Input.dispatchKeyEvent", {
    type: "keyDown",
    key: "Tab",
    code: "Tab",
    windowsVirtualKeyCode: 9,
  });
  await client.send("Input.dispatchKeyEvent", {
    type: "keyUp",
    key: "Tab",
    code: "Tab",
    windowsVirtualKeyCode: 9,
  });
  diagnostics.firstTabTarget = await evaluate(
    client,
    `(() => {
      const element = document.activeElement;
      return {
        tag: element?.tagName.toLowerCase() || null,
        text: (element?.textContent || "").trim(),
        href: element?.getAttribute?.("href") || null,
      };
    })()`,
  );
  await evaluate(client, "document.activeElement?.blur() || true");

  for (const sectionId of sectionIds) {
    if (viewport.name === "desktop") {
      await evaluate(
        client,
        `(() => {
          const element = document.getElementById(${JSON.stringify(sectionId)});
          if (!element) return false;
          element.scrollIntoView({ block: "start" });
          return new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(() => resolve(true))));
        })()`,
      );
      const rect = await evaluate(
        client,
        `(() => {
          const element = document.getElementById(${JSON.stringify(sectionId)});
          if (!element) return null;
          const bounds = element.getBoundingClientRect();
          return {
            x: Math.max(0, bounds.left),
            y: Math.max(0, bounds.top + scrollY),
            width: Math.min(document.documentElement.clientWidth, bounds.width),
            height: Math.min(4000, bounds.height),
            scale: 1,
          };
        })()`,
      );
      if (rect) await capture(client, `section-${sectionId}.png`, rect);
    } else {
      await evaluate(
        client,
        `document.getElementById(${JSON.stringify(sectionId)})?.scrollIntoView({ block: "start" })`,
      );
      await wait(50);
      await capture(client, `section-${sectionId}-mobile.png`);
    }
  }

  if (
    diagnostics.overflowingElements.length ||
    diagnostics.missingAltCount ||
    diagnostics.emptyLinks
  ) {
    throw new Error(
      `Layout/accessibility failure on ${viewport.name}: ${JSON.stringify(diagnostics)}`,
    );
  }
  return diagnostics;
}

async function runInteractionChecks(client) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: 1440,
    height: 1000,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await navigate(client, `${baseUrl}/`);
  await evaluate(client, `document.querySelector('[role="tab"]').focus()`);
  await client.send("Input.dispatchKeyEvent", {
    type: "keyDown",
    key: "ArrowRight",
    code: "ArrowRight",
    windowsVirtualKeyCode: 39,
  });
  await client.send("Input.dispatchKeyEvent", {
    type: "keyUp",
    key: "ArrowRight",
    code: "ArrowRight",
    windowsVirtualKeyCode: 39,
  });
  await wait(150);
  const keyboardSelected = await evaluate(
    client,
    `document.querySelector('[role="tab"][aria-selected="true"]')?.textContent.trim()`,
  );
  if (keyboardSelected !== "Reporting")
    throw new Error(`Keyboard navigation failed: ${keyboardSelected}`);

  const panels = [];
  for (const index of [0, 1, 2]) {
    const point = await evaluate(
      client,
      `(() => {
      const tab = document.querySelectorAll('[role="tab"]')[${index}];
      tab.scrollIntoView({ block: "center" });
      const rect = tab.getBoundingClientRect();
      return { x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 };
    })()`,
    );
    await client.send("Input.dispatchMouseEvent", {
      type: "mousePressed",
      ...point,
      button: "left",
      clickCount: 1,
    });
    await client.send("Input.dispatchMouseEvent", {
      type: "mouseReleased",
      ...point,
      button: "left",
      clickCount: 1,
    });
    await wait(100);
    const panel = await evaluate(
      client,
      `(() => {
      const panel = document.querySelector('[role="tabpanel"][data-state="active"]');
      return {
        selected: document.querySelector('[role="tab"][aria-selected="true"]')?.textContent.trim(),
        stages: panel?.querySelectorAll('.operation-sequence li').length,
        outcome: panel?.querySelector('.operation-outcome')?.textContent.trim(),
        humanControl: panel?.querySelector('.operation-result > div:last-child')?.textContent.trim(),
      };
    })()`,
    );
    if (panel.stages !== 3 || !panel.outcome || !panel.humanControl) {
      throw new Error(`Incomplete operational example: ${JSON.stringify(panel)}`);
    }
    panels.push(panel);
  }
  if (new Set(panels.map((panel) => panel.outcome)).size !== 3) {
    throw new Error("Scenario controls did not change the operational outcome.");
  }

  await navigate(client, `${baseUrl}/cas-usage`);
  await capture(client, "use-cases-desktop.png");
  await evaluate(client, `document.querySelectorAll('.use-case-row > summary')[1].click()`);
  const disclosure = await evaluate(
    client,
    `({
    total: document.querySelectorAll('.use-case-row').length,
    open: document.querySelectorAll('.use-case-row[open]').length,
    secondOpen: document.querySelectorAll('.use-case-row')[1].open,
  })`,
  );
  if (disclosure.total !== 6 || disclosure.open !== 1 || !disclosure.secondOpen) {
    throw new Error(`Use-case disclosure failed: ${JSON.stringify(disclosure)}`);
  }
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: 390,
    height: 844,
    deviceScaleFactor: 1,
    mobile: true,
  });
  await navigate(client, `${baseUrl}/cas-usage`);
  await evaluate(client, `document.querySelector('.use-case-row').open = false`);
  await capture(client, "use-cases-mobile.png");
  const casesFit = await evaluate(
    client,
    `document.documentElement.scrollWidth === document.documentElement.clientWidth`,
  );
  if (!casesFit) throw new Error("Use cases overflow on mobile.");
  const detailLayouts = [];
  for (const route of ["realisations", "methode", "a-propos"]) {
    for (const width of [1440, 390]) {
      await client.send("Emulation.setDeviceMetricsOverride", {
        width,
        height: 1000,
        deviceScaleFactor: 1,
        mobile: width === 390,
      });
      await navigate(client, `${baseUrl}/${route}`);
      const size = await evaluate(
        client,
        `({
        width: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth,
        height: document.documentElement.scrollHeight,
      })`,
      );
      if (size.scrollWidth > size.width) throw new Error(`${route} overflows at ${width}px.`);
      detailLayouts.push({ route, ...size });
      await capture(client, `${route}-${width}.png`, {
        x: 0,
        y: 0,
        width,
        height: Math.min(5000, size.height),
        scale: 1,
      });
    }
  }
  return { keyboardSelected, panels, disclosure, casesFit, detailLayouts };
}

async function runFormCheck(client, expectation) {
  await client.send("Emulation.setDeviceMetricsOverride", {
    width: 1200,
    height: 900,
    deviceScaleFactor: 1,
    mobile: false,
  });
  await navigate(client, `${baseUrl}/contact`);
  await wait(2_700);

  await evaluate(
    client,
    `(() => {
      const values = {
        name: "Codex QA",
        email: "qa@example.test",
        company: "Organisation de test",
        role: "Responsable opérations",
        process: "Un reporting de test dépend encore de plusieurs copier-coller manuels.",
        tools: "Tableur et outil métier de test",
        impact: "Le cycle de validation prend du retard.",
      };
      for (const [name, value] of Object.entries(values)) {
        const field = document.querySelector('[name="' + name + '"]');
        if (!field) throw new Error("Missing form field: " + name);
        field.value = value;
        field.dispatchEvent(new Event("input", { bubbles: true }));
        field.dispatchEvent(new Event("change", { bubbles: true }));
      }
      const consent = document.querySelector('[name="consent"]');
      if (!consent) throw new Error("Missing consent field.");
      consent.checked = true;
      consent.dispatchEvent(new Event("change", { bubbles: true }));
      document.querySelector("form").requestSubmit();
      return true;
    })()`,
  );

  let message = "";
  for (let attempt = 0; attempt < 60; attempt += 1) {
    message = await evaluate(
      client,
      `(document.querySelector('[aria-live="polite"]')?.textContent || "").trim()`,
    );
    if (message) break;
    await wait(250);
  }

  const observed = message.includes("Référence :") ? "success" : "error";
  const passed = Boolean(message) && observed === expectation;
  await evaluate(
    client,
    `document.querySelector('[aria-live="polite"]')?.scrollIntoView({ block: "center" })`,
  );
  await wait(100);
  await capture(client, `form-${expectation}.png`);

  if (!passed) {
    throw new Error(
      `Form check failed: expected ${expectation}, observed ${observed}, message ${JSON.stringify(message)}.`,
    );
  }

  return { expectation, observed, message, passed };
}

async function checkLocalRoutes() {
  const results = [];
  for (const route of localRoutes) {
    const response = await fetch(`${baseUrl}${route}`, { redirect: "manual" });
    if (response.status !== 200) {
      throw new Error(`Route check failed for ${route}: HTTP ${response.status}.`);
    }
    const html = await response.text();
    const h1Count = html.match(/<h1\b/gu)?.length ?? 0;
    const title = html.match(/<title>(.*?)<\/title>/u)?.[1] ?? null;
    const hasDescription = /<meta[^>]+name="description"[^>]+content="[^"]+"/u.test(html);
    if (h1Count !== 1 || !title || !hasDescription) {
      throw new Error(
        `Document check failed for ${route}: h1=${h1Count}, title=${title}, description=${hasDescription}.`,
      );
    }
    results.push({ route, status: response.status, h1Count, title, hasDescription });
  }

  for (const [route, destination] of [
    ["/services/agentic", "/methode"],
    ["/services/automatisation", "/methode"],
    ["/services/crm", "/methode"],
  ]) {
    const response = await fetch(`${baseUrl}${route}`, { redirect: "manual" });
    const location = response.headers.get("location");
    if (![301, 302, 307, 308].includes(response.status) || location !== destination) {
      throw new Error(
        `Redirect check failed for ${route}: HTTP ${response.status}, location ${location}.`,
      );
    }
    results.push({
      route,
      status: response.status,
      location,
      expectedLocation: destination,
    });
  }

  return results;
}

await mkdir(outputDirectory, { recursive: true });
const browser = await launchChrome();
let client;

try {
  const pageWebSocketUrl = await getPageWebSocketUrl(browser.browserWebSocketUrl);
  client = createClient(pageWebSocketUrl);
  await client.ready;
  await client.send("Page.enable");
  await client.send("Runtime.enable");

  const results = {};
  for (const viewport of viewports) {
    results[viewport.name] = await runViewport(client, viewport);
  }
  results.routes = await checkLocalRoutes();
  results.interactions = await runInteractionChecks(client);

  if (formExpectation === "success" || formExpectation === "error") {
    results.form = await runFormCheck(client, formExpectation);
  }

  await writeFile(reportPath, `${JSON.stringify({ baseUrl, results }, null, 2)}\n`);
  process.stdout.write(`${JSON.stringify(results, null, 2)}\n`);
} finally {
  client?.close();
  browser.chrome.kill();
  await wait(250);
  await rm(browser.profileDirectory, { recursive: true, force: true });
}

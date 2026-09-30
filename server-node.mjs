import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import { dirname, extname, resolve, sep } from "node:path";
import { fileURLToPath } from "node:url";

import application from "./.output/server/index.mjs";

const port = Number(process.env.PORT ?? 3020);
const publicRoot = resolve(dirname(fileURLToPath(import.meta.url)), ".output/public");

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function requestHeaders(incomingHeaders) {
  const headers = new Headers();

  for (const [name, value] of Object.entries(incomingHeaders)) {
    if (value !== undefined) {
      headers.set(name, Array.isArray(value) ? value.join(", ") : value);
    }
  }

  return headers;
}

function readBody(request) {
  return new Promise((resolve, reject) => {
    const chunks = [];

    request.on("data", (chunk) => chunks.push(chunk));
    request.on("end", () => resolve(Buffer.concat(chunks)));
    request.on("error", reject);
  });
}

async function servePublicAsset(request, response) {
  if (!["GET", "HEAD"].includes(request.method ?? "GET")) return false;

  const host = request.headers.host || `127.0.0.1:${port}`;
  const pathname = new URL(request.url || "/", `http://${host}`).pathname;
  let relativePath;

  try {
    relativePath = decodeURIComponent(pathname).replace(/^\/+/, "");
  } catch {
    return false;
  }

  const filePath = resolve(publicRoot, relativePath);
  if (filePath !== publicRoot && !filePath.startsWith(`${publicRoot}${sep}`)) return false;

  try {
    const metadata = await stat(filePath);
    if (!metadata.isFile()) return false;

    const body = request.method === "HEAD" ? undefined : await readFile(filePath);
    const headers = {
      "cache-control": pathname.startsWith("/assets/")
        ? "public, max-age=31536000, immutable"
        : "public, max-age=3600",
      "content-length": String(metadata.size),
      "content-type": contentTypes[extname(filePath).toLowerCase()] || "application/octet-stream",
    };

    response.writeHead(200, headers);
    response.end(body);
    return true;
  } catch {
    return false;
  }
}

const server = createServer(async (request, response) => {
  try {
    if (await servePublicAsset(request, response)) return;

    const forwardedProtocol = request.headers["x-forwarded-proto"]?.split(",")[0]?.trim();
    const protocol = forwardedProtocol || "http";
    const host = request.headers.host || `127.0.0.1:${port}`;
    const body = ["GET", "HEAD"].includes(request.method ?? "GET")
      ? undefined
      : await readBody(request);
    const webRequest = new Request(`${protocol}://${host}${request.url || "/"}`, {
      method: request.method,
      headers: requestHeaders(request.headers),
      body: body && body.length > 0 ? body : undefined,
    });
    const webResponse = await application.fetch(webRequest, process.env, {
      waitUntil(promise) {
        void Promise.resolve(promise).catch((error) => console.error(error));
      },
    });

    for (const [name, value] of webResponse.headers) {
      response.setHeader(name, value);
    }

    response.writeHead(webResponse.status);

    if (request.method !== "HEAD") {
      response.end(Buffer.from(await webResponse.arrayBuffer()));
    } else {
      response.end();
    }
  } catch (error) {
    console.error(error);
    response.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    response.end("Internal Server Error");
  }
});

server.listen(port, "127.0.0.1", () => {
  console.log(`cararaios site listening on 127.0.0.1:${port}`);
});

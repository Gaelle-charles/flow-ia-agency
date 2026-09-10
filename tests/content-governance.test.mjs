import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";

const testsDirectory = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(testsDirectory, "..");

async function filesBelow(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const target = path.join(directory, entry.name);
      return entry.isDirectory() ? filesBelow(target) : [target];
    }),
  );
  return files.flat();
}

async function publicSource() {
  const candidates = [
    ...(await filesBelow(path.join(projectRoot, "src"))),
    ...(await filesBelow(path.join(projectRoot, "public"))),
  ].filter((file) => /\.(?:ts|tsx|css|json|svg|txt)$/u.test(file));

  const chunks = await Promise.all(
    candidates.map(async (file) => ({ file, content: await readFile(file, "utf8") })),
  );
  return chunks;
}

async function readBrand() {
  return JSON.parse(
    await readFile(path.join(projectRoot, "src", "content", "brand.config.json"), "utf8"),
  );
}

async function readLocalizedContent() {
  return readFile(path.join(projectRoot, "src", "content", "localized-content.ts"), "utf8");
}

test("le nom commercial reste piloté par la configuration", async () => {
  const brand = await readBrand();
  assert.equal(brand.name, "Sway Ops");

  // Le chrome et les pages lisent brand.config.json ; seuls les contenus
  // rédactionnels (citations clients) peuvent écrire le nom en toutes lettres.
  const layoutFiles = (await publicSource()).filter(({ file }) =>
    /src[/\\](?:components|routes)[/\\]/u.test(file),
  );
  const occurrences = layoutFiles.filter(({ content }) => content.includes(brand.name));
  assert.deepEqual(
    occurrences.map(({ file }) => path.relative(projectRoot, file)),
    [],
    "Le nom de marque ne doit pas être codé en dur dans les composants ou les routes",
  );
});

test("le positionnement Intelligent Operations est la colonne vertébrale", async () => {
  const brand = await readBrand();
  const content = await readLocalizedContent();

  assert.equal(brand.category, "Systèmes opérationnels intelligents");
  assert.equal(brand.territory, "Intelligent Operations");
  assert.equal(brand.promise, "From disconnected tools to intelligent operations.");
  assert.match(content, /brandCategory: "Systèmes opérationnels intelligents"/u);
  assert.match(content, /brandCategory: "Intelligent operational systems"/u);
});

test("les anciennes promesses et le mailto ont quitté la surface publique", async () => {
  const source = (await publicSource()).map(({ content }) => content).join("\n");
  const forbidden = [
    "FLOW",
    "Agence IA",
    "agence d'intelligence artificielle",
    "agence d’intelligence artificielle",
    "Agent autonome 24/7",
    "Exécuter 24/7",
    "Zéro ressaisie",
    "CRM qui prévoit",
    "Transformation digitale",
    "collectif de freelances",
    "mise à disposition d’un expert",
    "85 %",
    "20 heures",
    "2 minutes",
    "hello@flow.agency",
    "flow.agency",
    "mailto:",
  ];

  for (const phrase of forbidden) {
    assert.equal(source.includes(phrase), false, `Contenu interdit détecté : ${phrase}`);
  }
});

test("les métriques QBR sous gate ne sont pas publiées", async () => {
  const source = (await publicSource()).map(({ content }) => content).join("\n");
  const gatedMetrics = ["11/11", "33/33", "285/285", "< 5 min", "moins de cinq minutes"];

  for (const metric of gatedMetrics) {
    assert.equal(source.includes(metric), false, `Métrique QBR encore publiée : ${metric}`);
  }
});

test("les routes des maquettes existent", async () => {
  const routeFiles = [
    "index.tsx",
    "work.tsx",
    "realisations.tsx",
    "methode.tsx",
    "a-propos.tsx",
    "contact.tsx",
    "journal.tsx",
    "mentions-legales.tsx",
    "confidentialite.tsx",
  ];

  const available = await readdir(path.join(projectRoot, "src", "routes"));
  for (const route of routeFiles)
    assert.equal(available.includes(route), true, `Route absente : ${route}`);
});

test("la navigation des maquettes est identique dans les deux langues", async () => {
  const content = await readLocalizedContent();
  const navigationBlocks = content.match(/navigation: \[[\s\S]*?\n {4}\]/gu) ?? [];
  assert.equal(navigationBlocks.length, 2, "Une navigation doit être définie par langue");

  const targets = navigationBlocks.map((block) => (block.match(/to: "[^"]+"/gu) ?? []).join(","));
  assert.deepEqual(
    targets[0],
    'to: "/work",to: "/realisations",to: "/methode",to: "/a-propos",to: "/journal"',
  );
  assert.equal(targets[0], targets[1], "FR et EN doivent pointer vers les mêmes routes");
});

test("chaque réalisation publiée porte son secteur et son périmètre", async () => {
  const content = await readLocalizedContent();
  const caseBlocks = content.match(/cases: \[[\s\S]*?\n {4}\]/gu) ?? [];
  assert.equal(caseBlocks.length, 2, "Une liste de réalisations doit être définie par langue");

  for (const block of caseBlocks) {
    const ids = block.match(/\bid: "/gu) ?? [];
    assert.ok(ids.length > 0, "Aucune réalisation publiée");
    for (const field of ["sector", "sectorLabel", "shortTitle", "title", "tags", "image", "alt"]) {
      const occurrences = block.match(new RegExp(`\\b${field}:`, "gu")) ?? [];
      assert.equal(occurrences.length, ids.length, `Champ manquant sur une réalisation : ${field}`);
    }
  }
});

test("les anciennes routes convergent vers les pages des maquettes", async () => {
  for (const route of ["services.crm.tsx", "services.automatisation.tsx", "services.agentic.tsx"]) {
    const source = await readFile(path.join(projectRoot, "src", "routes", route), "utf8");
    assert.match(source, /to: "\/work"/u);
  }
  const legacyUseCases = await readFile(
    path.join(projectRoot, "src", "routes", "cas-usage.tsx"),
    "utf8",
  );
  assert.match(legacyUseCases, /to: "\/realisations"/u);
});

test("le formulaire dépend d’une destination configurable", async () => {
  const envExample = await readFile(path.join(projectRoot, ".env.example"), "utf8");
  const serverSource = await readFile(path.join(projectRoot, "src", "lib", "contact.ts"), "utf8");
  assert.match(envExample, /CONTACT_WEBHOOK_URL=/u);
  assert.match(serverSource, /delivery confirmed/u);
  assert.match(serverSource, /not_configured/u);
  assert.doesNotMatch(
    serverSource,
    /console\.(?:info|warn|error)\([^\n]*(?:email|process|impact)/u,
  );
});

test("le collectif remplace le dirigeant dans la présentation commerciale", async () => {
  const chunks = await publicSource();
  const brand = await readBrand();
  assert.equal(brand.teamModel, "Collectif d’exécution");
  assert.equal("founder" in brand, false);
  for (const { file, content } of chunks) {
    if (path.basename(file) === "legal.config.json") continue;
    assert.doesNotMatch(content, /Dorian|Labry|est dirigé par|brand\.founder/u);
  }
  const credentials = await readFile(path.join(projectRoot, "src/content/credentials.ts"), "utf8");
  assert.match(credentials, /Certification individuelle obtenue par un membre du collectif/u);
  const badge = await readFile(
    path.join(projectRoot, "public/images/credentials/claude-certified-developer-foundations.png"),
  );
  assert.equal(badge.subarray(1, 4).toString(), "PNG");
});

test("chaque bloc de contenu existe dans les deux langues", async () => {
  const content = await readLocalizedContent();
  const [french, english] = content.split(/\n {2}en: \{/u);
  assert.ok(english, "Le bloc anglais est introuvable");

  const topLevelKeys = (block) =>
    (block.match(/^ {4}[a-zA-Z]+:/gmu) ?? []).map((key) => key.trim());
  assert.deepEqual(
    topLevelKeys(french),
    topLevelKeys(english),
    "FR et EN doivent exposer les mêmes blocs de contenu",
  );
});

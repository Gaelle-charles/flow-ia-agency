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

test("le nom commercial est centralisé dans la configuration", async () => {
  const brandPath = path.join(projectRoot, "src", "content", "brand.config.json");
  const brand = JSON.parse(await readFile(brandPath, "utf8"));
  assert.equal(brand.name, "Sway Ops");

  const occurrences = (await publicSource()).filter(
    ({ file, content }) => file !== brandPath && content.includes(brand.name),
  );
  assert.deepEqual(
    occurrences.map(({ file }) => path.relative(projectRoot, file)),
    [],
    "Le nom de marque ne doit pas être dupliqué hors de brand.config.json",
  );
});

test("le positionnement Intelligent Operations est la colonne vertébrale", async () => {
  const brandPath = path.join(projectRoot, "src", "content", "brand.config.json");
  const brand = JSON.parse(await readFile(brandPath, "utf8"));
  const siteContent = await readFile(
    path.join(projectRoot, "src", "content", "site-content.ts"),
    "utf8",
  );

  assert.equal(brand.category, "Systèmes opérationnels intelligents");
  assert.equal(brand.territory, "Intelligent Operations");
  assert.equal(brand.promise, "From disconnected tools to intelligent operations.");
  assert.match(siteContent, /AI is only as useful as the operation it can act on\./u);
  assert.match(siteContent, /stage: "Context"/u);
  assert.match(siteContent, /stage: "Execution"/u);
  assert.match(siteContent, /stage: "Intelligence"/u);
  assert.match(siteContent, /stage: "Embed"/u);
  assert.match(siteContent, /stage: "Build"/u);
  assert.match(siteContent, /stage: "Run"/u);
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

test("les statuts du produit public sont émis comme des statuts explicites", async () => {
  const projectSource = await readFile(
    path.join(projectRoot, "src", "content", "projects.ts"),
    "utf8",
  );
  const cardSource = await readFile(
    path.join(projectRoot, "src", "components", "site", "ProjectCard.tsx"),
    "utf8",
  );
  assert.match(
    projectSource,
    /statuses:\s*\["PRODUIT PROPRIÉTAIRE EN LIGNE", "VALIDATION MARCHÉ"\]/u,
  );
  assert.match(cardSource, /project\.statuses\.map/u);
});

test("les routes éditoriales demandées existent", async () => {
  const routeFiles = [
    "realisations.tsx",
    "cas-usage.tsx",
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

test("les six situations restent identifiées comme illustratives", async () => {
  const source = await readFile(path.join(projectRoot, "src", "content", "use-cases.ts"), "utf8");
  const ids = source.match(/\bid:\s*"/gu) ?? [];
  assert.equal(ids.length, 6);
  assert.match(source, /CAS D’USAGE ILLUSTRATIF/u);
  for (const field of [
    "before",
    "context",
    "execution",
    "intelligence",
    "humanControl",
    "outcome",
  ]) {
    const occurrences = source.match(new RegExp(`\\b${field}:`, "gu")) ?? [];
    assert.equal(occurrences.length, 6, `Champ de narration incomplet : ${field}`);
  }
});

test("les anciennes routes de capabilities convergent vers un même modèle", async () => {
  for (const route of ["services.crm.tsx", "services.automatisation.tsx", "services.agentic.tsx"]) {
    const source = await readFile(path.join(projectRoot, "src", "routes", route), "utf8");
    assert.match(source, /to: "\/methode"/u);
  }
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
  const brand = JSON.parse(
    await readFile(path.join(projectRoot, "src/content/brand.config.json"), "utf8"),
  );
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

test("les chiffres de contexte ont une source et un périmètre distincts des résultats clients", async () => {
  const evidence = JSON.parse(
    await readFile(path.join(projectRoot, "src/content/operational-evidence.json"), "utf8"),
  );
  assert.match(evidence.disclaimer, /pas des résultats clients ni des gains promis/u);
  assert.deepEqual(
    evidence.metrics.map(({ value }) => value),
    ["62", "95", "80"],
  );
  for (const metric of evidence.metrics) {
    const source = evidence.sources.find(({ id }) => id === metric.sourceId);
    assert.ok(source, `Source absente : ${metric.id}`);
    assert.equal(new URL(source.url).protocol, "https:");
    assert.ok(source.scope.length > 50);
  }
  assert.match(
    evidence.sources.find(({ id }) => id === "mulesoft-2025").scope,
    /au moins 1 000 salariés/u,
  );
});

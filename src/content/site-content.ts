import brand from "./brand.config.json";

export const navigation = [
  { label: "Réalisations", to: "/realisations" },
  { label: "Cas d’usage", to: "/cas-usage" },
  { label: "Approche", to: "/methode" },
  { label: "À propos", to: "/a-propos" },
] as const;

export const hero = {
  eyebrow: "Intelligent Operations",
  title: "Des outils fragmentés aux opérations intelligentes.",
  body: "Nous concevons des systèmes opérationnels qui comprennent le contexte, font avancer le travail et savent quand solliciter un jugement humain.",
  principle: "AI is only as useful as the operation it can act on.",
  primaryCta: "Parler d’un problème opérationnel",
  secondaryCta: "Voir un système construit",
  microcopy: "Nous partons d’une opération réelle, pas d’une technologie à placer.",
} as const;

export const trustItems = [
  "Contexte structuré",
  "Exécution connectée",
  "Intelligence ciblée",
  "Contrôle humain explicite",
] as const;

export const problem = {
  eyebrow: "Le problème",
  title: "Les entreprises ont accumulé des outils. Le travail entre eux reste fragmenté.",
  body: "L’information se disperse, les équipes compensent les ruptures et les décisions ne déclenchent pas toujours la bonne action.",
} as const;

export const thesis = {
  eyebrow: "Notre thèse",
  title: "AI is only as useful as the operation it can act on.",
  body: "Une IA performante ne crée pas de valeur si le contexte est incomplet, si le workflow n’est pas exécutable ou si personne ne sait ce que le système est autorisé à faire. Nous commençons donc par l’opération.",
  principles: [
    "Comprendre ce qui se passe",
    "Déclencher la bonne action",
    "Savoir quand passer la main",
  ],
} as const;

export const expertise = {
  eyebrow: "Notre expertise",
  title: "Nous concevons des systèmes opérationnels intelligents.",
  body: "Un même système relie la mémoire de l’opération, l’exécution du travail et les étapes qui demandent de l’interprétation.",
} as const;

export const operatingLayers = [
  {
    index: "01",
    stage: "Context",
    capability: "CRM",
    statement: "CRM donne du contexte à l’opération.",
    body: "Nous structurons les personnes, les données, l’historique, les statuts, les responsabilités et les règles qui permettent au système de comprendre la situation.",
    outputs: [
      "Architecture de l’information",
      "Données clients et métier",
      "Historique et statuts",
      "Source de vérité",
    ],
  },
  {
    index: "02",
    stage: "Execution",
    capability: "Automation",
    statement: "L’automatisation donne de l’exécution à l’opération.",
    body: "Nous connectons les outils et faisons circuler le travail avec des workflows, des intégrations, des déclencheurs, des règles et des contrôles explicites.",
    outputs: [
      "Workflows et intégrations",
      "Synchronisations",
      "Règles métier et contrôles",
      "Documents et mises à jour",
    ],
  },
  {
    index: "03",
    stage: "Intelligence",
    capability: "Agentic Systems",
    statement: "Les systèmes agentiques ajoutent intelligence et autonomie.",
    body: "Lorsque les règles ne suffisent plus, le système peut interpréter, rechercher, synthétiser, préparer une décision ou choisir parmi des actions autorisées.",
    outputs: [
      "Interprétation et recherche",
      "Qualification et synthèse",
      "Actions autorisées",
      "Escalade vers un humain",
    ],
  },
] as const;

export const deliverySteps = [
  {
    index: "01",
    stage: "Embed",
    title: "Comprendre l’opération dans son environnement réel",
    body: "Nous travaillons avec les personnes qui vivent le workflow pour comprendre les outils, les données, les exceptions et les responsabilités.",
    deliverable: "Carte du système réel et première boucle à construire",
  },
  {
    index: "02",
    stage: "Build",
    title: "Construire le système, pas seulement la recommandation",
    body: "Nous concevons et réalisons une boucle complète dans les outils et contraintes du client.",
    deliverable: "Système fonctionnel relié aux données nécessaires",
  },
  {
    index: "03",
    stage: "Run",
    title: "Atteindre le fonctionnement réel",
    body: "Nous testons, observons, corrigeons et mesurons avant de préparer l’industrialisation, le transfert ou le passage à l’échelle.",
    deliverable: "Système exploitable, mesuré et transmissible",
  },
] as const;

export const engagements = [
  {
    index: "01",
    title: "Cadrage d’un système opérationnel",
    body: "Pour choisir une opération, structurer son contexte et définir la première boucle utile.",
    outputs: [
      "Carte de l’opération",
      "Points de rupture et exceptions",
      "Périmètre du système",
      "Critères d’acceptation",
    ],
  },
  {
    index: "02",
    title: "Construction et mise en production",
    body: "Pour construire dans l’environnement réel et atteindre un usage opérationnel observable.",
    outputs: [
      "Context, execution et intelligence",
      "Intégrations et contrôles",
      "Tests en conditions réelles",
      "Mise en production",
    ],
  },
  {
    index: "03",
    title: "Run et passage à l’échelle",
    body: "Pour suivre le système, corriger les ruptures et préparer sa reprise ou son extension.",
    outputs: [
      "Mesure opérationnelle",
      "Supervision et corrections",
      "Documentation",
      "Trajectoire d’industrialisation",
    ],
  },
] as const;

export const featuredCase = {
  statuses: ["Déployé chez un client", "Résultats en revue interne"],
  title: "Un reporting partenaire mis à jour sans perdre son historique.",
  summary:
    "Un moteur commun relie les données aux présentations, conserve les zones manuelles et traite chaque période de façon traçable.",
  before:
    "Plusieurs sources, des présentations distinctes et des contrôles manuels à répéter chaque mois.",
  context:
    "Les partenaires, périodes, sources, graphiques et zones manuelles sont identifiés dans une même structure.",
  execution:
    "Le moteur récupère les données, actualise les présentations et reconstruit l’historique.",
  intelligence:
    "Aucune couche agentique n’a été ajoutée : des règles explicites suffisaient pour cette opération.",
  humanControl: "Les équipes conservent les zones manuelles et vérifient les cas signalés.",
  outcome: "Une boucle déployée, reproductible et testée sans imposer un nouvel outil aux équipes.",
  proofNote: "Les résultats chiffrés restent confidentiels pendant leur revue contractuelle.",
  disclaimer: "Cette recette technique ne constitue pas une mesure de ROI financier.",
} as const;

export const governancePrinciples = [
  {
    title: "Contrôle humain explicite",
    body: "Le système indique ce qu’il exécute, prépare, recommande ou refuse, et qui valide.",
  },
  {
    title: "Moindre privilège",
    body: "Chaque composant et chaque personne reçoit uniquement les accès nécessaires.",
  },
  {
    title: "Minimisation des données",
    body: "Seules les données utiles à l’opération sont collectées, transmises et conservées.",
  },
  {
    title: "Traçabilité",
    body: "Une sortie importante revient à ses sources, règles, paramètres et validations.",
  },
  {
    title: "Évaluation",
    body: "Les règles et modèles sont testés sur des situations représentatives, y compris les échecs.",
  },
  {
    title: "Reprise",
    body: "Le système prévoit ce qui se passe lorsqu’une source, une API ou une personne manque.",
  },
] as const;

export const crew = {
  eyebrow: "Senior expertise, embedded by design",
  title: "Un AI crew, du terrain à la production.",
  intro:
    "Business, produit et technologie travaillent sur le même système. Les personnes qui comprennent le problème participent à sa résolution.",
  responsibilities: [
    "Diagnostic opérationnel",
    "Architecture du système",
    "Construction et arbitrages",
    "Mise en production",
  ],
  team: "Nous réunissons les expertises seniors utiles au problème : architecture de l’information, intégrations et systèmes agentiques. Chaque projet garde une responsabilité claire, jusqu’à son fonctionnement réel.",
} as const;

export const finalCta = {
  eyebrow: "Un workflow à débloquer ?",
  title: "Parlons d’une opération qui dépend encore trop de passages manuels.",
  body: "Décrivez le contexte, les outils, les exceptions et le résultat attendu. Nous identifierons la première boucle utile à construire.",
  cta: "Décrire le problème opérationnel",
  microcopy: "La conversation commence par l’opération, pas par l’IA.",
} as const;

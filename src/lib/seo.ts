import brand from "@/content/brand.config.json";
import type { Locale } from "@/lib/locale";

const seoCopy = {
  "/": {
    fr: {
      title: "Systèmes IA, CRM et automatisation",
      description:
        "Caraaios conçoit des systèmes opérationnels qui relient CRM, workflows et agents IA. Diagnostic, intégration, automatisation et contrôle humain.",
    },
    en: {
      title: "AI operations, CRM and automation",
      description:
        "Caraaios designs operational systems that connect CRM, workflows and AI agents, from diagnosis and integration to automation and human oversight.",
    },
  },
  "/work": {
    fr: {
      title: "Expertise CRM, automatisation et agents IA",
      description:
        "Découvrez l’expertise Caraaios en CRM, automatisation et systèmes agentiques : données, workflows, intégrations et supervision humaine.",
    },
    en: {
      title: "CRM, automation and AI agent expertise",
      description:
        "Explore Caraaios expertise in CRM, automation and agentic systems: data, workflows, integrations and human oversight.",
    },
  },
  "/realisations": {
    fr: {
      title: "Réalisations en automatisation et systèmes IA",
      description:
        "Études de cas et exemples de systèmes opérationnels : contexte initial, workflows automatisés, intervention humaine et résultats observés.",
    },
    en: {
      title: "Automation and AI systems work",
      description:
        "Case studies and examples of operational systems: the initial context, automated workflows, human oversight and observed results.",
    },
  },
  "/methode": {
    fr: {
      title: "Méthode de déploiement de systèmes IA",
      description:
        "La méthode Caraaios : diagnostic de l’opération, première boucle dans vos outils, mesure des résultats et amélioration continue.",
    },
    en: {
      title: "Our method for deploying AI systems",
      description:
        "The Caraaios method: diagnose the operation, build a first working loop in your tools, measure results and improve continuously.",
    },
  },
  "/a-propos": {
    fr: {
      title: "À propos",
      description:
        "Découvrez Caraaios, marque portée par OptiQuant IA : un interlocuteur identifié et un collectif d’exécution pour vos projets CRM, automatisation et IA.",
    },
    en: {
      title: "About",
      description:
        "Meet Caraaios, a brand of OptiQuant IA: one accountable contact and an execution team for CRM, automation and AI projects.",
    },
  },
  "/journal": {
    fr: {
      title: "Journal des systèmes opérationnels et de l’IA",
      description:
        "Retours de terrain sur les systèmes opérationnels, l’automatisation et l’IA : décisions, limites, mesures et apprentissages.",
    },
    en: {
      title: "Operational systems and AI journal",
      description:
        "Field notes on operational systems, automation and AI: decisions, limitations, measurements and lessons learned.",
    },
  },
  "/contact": {
    fr: {
      title: "Contact",
      description:
        "Présentez à Caraaios une opération à améliorer. Nous examinerons vos outils, données, processus et objectifs pour cadrer une première étape.",
    },
    en: {
      title: "Contact",
      description:
        "Tell Caraaios about an operation to improve. We will review your tools, data, processes and goals to define a first step.",
    },
  },
  "/mentions-legales": {
    fr: {
      title: "Mentions légales",
      description: "Informations légales sur Caraaios et OptiQuant IA.",
    },
    en: {
      title: "Legal notice",
      description: "Legal information about Caraaios and OptiQuant IA.",
    },
  },
  "/confidentialite": {
    fr: { title: "Confidentialité", description: "Politique de confidentialité de Caraaios." },
    en: { title: "Privacy", description: "Caraaios privacy policy." },
  },
} as const;

export type SeoPath = keyof typeof seoCopy;

export function pageHead(path: SeoPath, locale: Locale, index = true) {
  const { title, description } = seoCopy[path][locale];
  const canonical = `${brand.siteUrl}${path === "/" ? "/" : path}`;
  const fullTitle = `${title} | ${brand.name}`;

  return {
    meta: [
      { title: fullTitle },
      { name: "description", content: description },
      { name: "robots", content: index ? "index, follow" : "noindex, follow" },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: canonical },
      { property: "og:site_name", content: brand.name },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: fullTitle },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: canonical }],
  };
}

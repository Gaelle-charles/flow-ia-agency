import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/crm")({
  head: () => ({
    meta: [
      { title: "CRM intelligent piloté par l'IA — FLOW" },
      {
        name: "description",
        content:
          "FLOW déploie un CRM qui qualifie vos leads par IA, relance automatiquement et prévoit vos ventes.",
      },
      { property: "og:title", content: "CRM intelligent — FLOW" },
      {
        property: "og:description",
        content:
          "Scoring des leads, relances automatiques et prévisions de ventes en temps réel.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      content={{
        eyebrow: "CRM intelligent",
        title: "CRM",
        intro:
          "Un CRM qui pense pour vous : qualification des leads par IA, relances automatiques et prévisions de ventes en temps réel.",
        description: [
          "Un CRM intelligent, c'est un outil commercial qui ne se contente plus de stocker vos contacts : il les analyse. Chaque lead reçoit un score calculé par l'IA à partir de vos historiques de vente, pour que vos équipes se concentrent sur les bons prospects.",
          "Les relances partent automatiquement au bon moment, personnalisées selon le contexte du contact : secteur, interactions passées, signaux d'intérêt. Fini les opportunités oubliées dans un coin du pipeline.",
          "Et côté pilotage, vos prévisions de chiffre d'affaires se mettent à jour en continu à partir des données réelles du pipeline, pour des décisions fondées sur des faits, pas sur des intuitions.",
        ],
        tags: ["Scoring", "Pipeline", "Data", "Reporting"],
        offers: [
          {
            title: "Scoring IA",
            text: "Chaque lead noté selon son potentiel réel, à partir de vos historiques de vente.",
          },
          {
            title: "Relances automatiques",
            text: "Séquences déclenchées au bon moment, personnalisées selon le contexte du contact.",
          },
          {
            title: "Prévisions",
            text: "Un pipeline lisible et des prévisions de chiffre fiables, mises à jour en continu.",
          },
        ],
        steps: [
          { title: "Process", text: "Cartographie de vos processus actuels et identification des leviers d’IA." },
          { title: "Audit", text: "Analyse technique et métier de vos données, outils et contraintes." },
          { title: "Phase de cadrage", text: "Définition du périmètre, des objectifs et du plan de déploiement." },
          { title: "Production", text: "Développement et paramétrage de la solution en itérations courtes." },
          { title: "Livraison", text: "Mise en production, tests et validation avec garde-fous et monitoring." },
          { title: "Formation", text: "Montée en compétence de vos équipes et transfert des bonnes pratiques." },
        ],
      }}
    />
  ),
});

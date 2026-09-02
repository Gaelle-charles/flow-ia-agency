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
          { title: "Diagnostic", text: "Analyse de votre pipeline actuel et de la qualité de vos données." },
          { title: "Structuration", text: "Nettoyage, unification et modèle de données adapté à votre cycle." },
          { title: "Déploiement", text: "Configuration du CRM, automatisations et formation des équipes." },
          { title: "Pilotage", text: "Tableaux de bord et revues régulières pour affiner le scoring." },
        ],
      }}
    />
  ),
});

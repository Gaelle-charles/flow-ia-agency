import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/automatisation")({
  head: () => ({
    meta: [
      { title: "Automatisation no-code des process — FLOW" },
      {
        name: "description",
        content:
          "FLOW connecte et orchestre vos outils pour supprimer les tâches répétitives de votre agenda.",
      },
      { property: "og:title", content: "Automatisation no-code — FLOW" },
      {
        property: "og:description",
        content:
          "Vos tâches répétitives connectées, orchestrées et automatisées de bout en bout.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      content={{
        eyebrow: "Processus",
        title: "Automatisation",
        intro:
          "Vos tâches répétitives connectées, orchestrées et supprimées de votre agenda, sans une ligne de code à maintenir.",
        tags: ["No-code", "Intégrations", "Scénarios", "Monitoring"],
        offers: [
          {
            title: "Audit des process",
            text: "Cartographie de vos flux et chiffrage du temps récupérable par équipe.",
          },
          {
            title: "Scénarios connectés",
            text: "Vos outils reliés entre eux : CRM, facturation, messagerie, tableurs, back-office.",
          },
          {
            title: "Fiabilité",
            text: "Alertes, reprises sur erreur et documentation pour que rien ne casse en silence.",
          },
        ],
        steps: [
          { title: "Audit", text: "Observation de vos process réels et priorisation par impact." },
          { title: "Conception", text: "Schéma des scénarios et choix des connecteurs adaptés." },
          { title: "Mise en place", text: "Construction, tests et bascule progressive en production." },
          { title: "Suivi", text: "Monitoring mensuel et ajustements au fil de vos évolutions." },
        ],
      }}
    />
  ),
});

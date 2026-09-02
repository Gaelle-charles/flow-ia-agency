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

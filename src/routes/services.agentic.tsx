import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";

export const Route = createFileRoute("/services/agentic")({
  head: () => ({
    meta: [
      { title: "Agents IA autonomes — FLOW" },
      {
        name: "description",
        content:
          "FLOW conçoit des agents IA autonomes qui exécutent vos processus métier de bout en bout, 24h/24.",
      },
      { property: "og:title", content: "Agents IA autonomes — FLOW" },
      {
        property: "og:description",
        content:
          "Des agents IA qui traitent vos demandes, vos données et vos workflows sans intervention humaine.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <ServicePage
      content={{
        eyebrow: "Agents autonomes",
        title: "Agentic",
        intro:
          "Des agents IA qui exécutent vos processus de bout en bout, 24h/24, connectés à vos outils et à vos données.",
        tags: ["Agents", "Workflows", "RAG", "Intégrations"],
        offers: [
          {
            title: "Agent support",
            text: "Traitement des demandes clients, qualification et réponse contextualisée sur vos contenus internes.",
          },
          {
            title: "Agent opérations",
            text: "Extraction de documents, mise à jour des systèmes et déclenchement des actions métier.",
          },
          {
            title: "Agent commercial",
            text: "Recherche de prospects, enrichissement et séquences personnalisées à grande échelle.",
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

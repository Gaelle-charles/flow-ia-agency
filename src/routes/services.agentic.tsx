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
        description: [
          "Un agent autonome est un logiciel capable de comprendre une demande, de raisonner sur vos données et d'exécuter des actions dans vos outils (CRM, messagerie, facturation, back-office) sans intervention humaine.",
          "Concrètement, il peut lire un e-mail entrant, en extraire l'information utile, consulter vos bases de données pour vérifier un contexte, puis déclencher la bonne action : répondre au client, créer un ticket, mettre à jour une fiche ou alerter un collaborateur.",
          "Chaque agent est encadré par des garde-fous : validation humaine sur les actions sensibles, journalisation complète de ses décisions et supervision en continu. Vous gardez le contrôle, l'agent fait le travail répétitif.",
        ],
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
        useCases: [
          {
            title: "E-commerce",
            context:
              "Une boutique en ligne recevait 400 demandes SAV par semaine : suivi de commande, retours, remboursements. L'équipe passait 70% de son temps sur des questions répétitives.",
            result:
              "Un agent connecté au transporteur et au CRM traite 85% des demandes en autonomie, le reste est qualifié et routé vers le bon expert.",
          },
          {
            title: "Cabinet comptable",
            context:
              "Des centaines de factures et pièces justificatives arrivaient par e-mail chaque mois, saisies manuellement dans l'outil de comptabilité.",
            result:
              "L'agent extrait, classe et saisit chaque document automatiquement, avec contrôle humain uniquement sur les montants inhabituels. 20h gagnées par semaine.",
          },
          {
            title: "Scale-up B2B",
            context:
              "L'équipe commerciale perdait du temps à rechercher et enrichir manuellement chaque prospect avant de lancer ses campagnes.",
            result:
              "Un agent de prospection identifie, enrichit et personnalise 500 contacts par semaine, prêts à être contactés dans le CRM.",
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

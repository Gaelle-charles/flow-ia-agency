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
        description: [
          "L'automatisation consiste à connecter vos outils entre eux (CRM, facturation, e-mails, tableurs, agenda) pour que l'information circule toute seule, au lieu d'être copiée-collée à la main.",
          "Par exemple : un formulaire rempli sur votre site crée automatiquement le contact dans le CRM, génère le devis, envoie l'e-mail de bienvenue et notifie le bon commercial. Zéro ressaisie, zéro oubli.",
          "Nous utilisons des plateformes no-code éprouvées et documentons chaque scénario : vos équipes restent autonomes pour les faire évoluer, et nos systèmes d'alerte vous préviennent immédiatement en cas d'erreur.",
        ],
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
        useCases: [
          {
            title: "Agence immobilière",
            context:
              "Chaque nouveau mandat déclenchait une dizaine de tâches manuelles : annonce sur les portails, mise à jour du CRM, e-mails aux acquéreurs en attente.",
            result:
              "Une chaîne automatisée publie les annonces, synchronise le CRM et alerte les acquéreurs correspondants en moins de 2 minutes.",
          },
          {
            title: "SaaS B2B",
            context:
              "Les inscriptions à l'essai gratuit n'étaient jamais retranscrites dans le CRM, et l'équipe commerciale découvrait les prospects avec plusieurs jours de retard.",
            result:
              "Chaque inscription crée la fiche contact, notifie le commercial sur Slack et déclenche la séquence d'onboarding. Zéro lead perdu.",
          },
          {
            title: "Association",
            context:
              "La gestion des adhésions se faisait sur des tableurs croisés à la main, avec des erreurs de facturation récurrentes.",
            result:
              "Paiements, relances d'échéance et attestations sont désormais générés automatiquement. 12h d'administratif économisées chaque mois.",
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

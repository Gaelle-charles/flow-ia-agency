export const journalEntries = [
  {
    id: "gen-lead-us",
    title: "Mesurer le dernier résultat utile, pas le volume intermédiaire.",
    statuses: ["PILOTE INTERNE SUPERVISÉ", "AUDIT LIVE"],
    statusLabels: ["Pilote interne supervisé", "Audit en cours"],
    intro:
      "Un pipeline interne collecte des offres d’emploi, extrait des signaux, qualifie des entreprises et recherche les personnes pertinentes.",
    metrics: [
      { value: "14 337", label: "offres brutes" },
      { value: "9 982", label: "signaux" },
      { value: "261", label: "contacts" },
      { value: "25", label: "emails marqués valides" },
      { value: "10/38", label: "exécutions complètes" },
    ],
    lesson:
      "L’audit a montré que le maillon utile restait le contact vérifié. La priorité a donc été déplacée du volume collecté vers la qualité commerciale et la complétude des exécutions.",
    disclaimer:
      "Ce pilote n’est pas présenté comme un pipeline autonome, ni comme une réalisation commerciale.",
  },
] as const;

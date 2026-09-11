// Illustrative workflows: these are explanations, not deployed client claims.
export const operationExamples = [
  {
    id: "request",
    label: "Demande client",
    before:
      "Un email arrive. Il faut retrouver le dossier, comprendre la demande et relancer la bonne personne.",
    steps: [
      {
        title: "Retrouver le dossier",
        body: "Le CRM réunit le client, son historique, les pièces et le responsable.",
      },
      {
        title: "Faire suivre le travail",
        body: "Le système crée la tâche, synchronise le statut et transmet les pièces.",
      },
      {
        title: "Comprendre la demande",
        body: "Un agent qualifie le message et prépare la prochaine action autorisée.",
      },
    ],
    humanControl: "Une demande hors périmètre revient au responsable avec son contexte.",
    outcome: "Une demande suivie jusqu’à sa résolution.",
  },
  {
    id: "reporting",
    label: "Reporting",
    before:
      "Chaque mois, les mêmes données passent d’un fichier à l’autre, puis il faut tout revérifier.",
    steps: [
      {
        title: "Fixer la bonne source",
        body: "Périodes, versions et règles de calcul sont rattachées au même référentiel.",
      },
      {
        title: "Produire et contrôler",
        body: "Les données sont collectées, les écarts vérifiés et le rapport actualisé.",
      },
      {
        title: "Expliquer un écart",
        body: "Si nécessaire, un agent recherche les causes possibles d’une anomalie.",
      },
    ],
    humanControl: "Le responsable valide les exceptions avant la diffusion du rapport.",
    outcome: "Un reporting reproductible, avec des écarts expliqués.",
  },
  {
    id: "decision",
    label: "Décision métier",
    before:
      "Les chiffres existent, mais chaque équipe reconstruit son analyse avant de pouvoir décider.",
    steps: [
      {
        title: "Partager le contexte",
        body: "Sources, indicateurs et niveaux de confiance sont réunis et accessibles.",
      },
      {
        title: "Déclencher la revue",
        body: "Un seuil franchi ouvre une revue et rassemble les éléments nécessaires.",
      },
      {
        title: "Préparer les options",
        body: "Un agent synthétise la situation et documente les actions possibles.",
      },
    ],
    humanControl: "Le décideur garde la main sur l’arbitrage et ses conséquences.",
    outcome: "Une décision reliée à ses sources et à sa prochaine action.",
  },
] as const;

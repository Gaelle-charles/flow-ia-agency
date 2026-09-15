import { useI18n } from "@/lib/i18n-context";

import { claudeCertification as certificationFr } from "./credentials";
import { faqItems as faqItemsFr } from "./faq";
import { operationExamples as operationExamplesFr } from "./operation-examples";
import evidenceFr from "./operational-evidence.json";
import { journalEntries as journalEntriesFr } from "./projects";
import {
  crew as crewFr,
  deliverySteps as deliveryStepsFr,
  engagements as engagementsFr,
  expertise as expertiseFr,
  featuredCase as featuredCaseFr,
  finalCta as finalCtaFr,
  governancePrinciples as governancePrinciplesFr,
  hero as heroSource,
  operatingLayers as operatingLayersFr,
  problem as problemFr,
  thesis as thesisFr,
  trustItems as trustItemsFr,
} from "./site-content";
import { illustrativeStatus, useCases as useCasesFr } from "./use-cases";

/** Photos attached to the three illustrative operations and the three delivery stages. */
const exampleImages = {
  request: "/images/editorial/laptop-focus.webp",
  reporting: "/images/editorial/chart-review.webp",
  decision: "/images/editorial/office-desk.webp",
} as const;

const deliveryImages = [
  "/images/editorial/facade-garden.webp",
  "/images/editorial/forest-road.webp",
  "/images/editorial/operations-room-v2.webp",
] as const;

const layerIcons = ["chart", "database", "zap"] as const;

/**
 * Every string the site renders, in both languages. The French editorial
 * modules are the source of truth; the English block mirrors them.
 * Pages read this through useLocalizedContent(); the router loaders read it
 * through getLocalizedContent() to build <head>.
 */
const content = {
  fr: {
    common: {
      skipToContent: "Aller au contenu",
      homeLabel: "accueil",
      mainNavigation: "Navigation principale",
      mobileNavigation: "Navigation mobile",
      footerNavigation: "Navigation de pied de page",
      menu: "Menu",
      contactCta: "Parler de votre opération",
      journal: "Journal",
      contact: "Contact",
      legal: "Mentions légales",
      privacy: "Confidentialité",
      brandCategory: "Systèmes opérationnels intelligents",
      legalLine: "est une marque de travail portée par",
      rightsReserved: "Tous droits réservés.",
      languageLabel: "Choisir la langue",
      socialLabel: "Réseaux sociaux",
    },
    navigation: [
      { label: "Expertise", to: "/work" },
      { label: "Réalisations", to: "/realisations" },
      { label: "Approche", to: "/methode" },
      { label: "À propos", to: "/a-propos" },
      { label: "Journal", to: "/journal" },
    ],
    hero: {
      eyebrow: heroSource.eyebrow,
      title: "Accélérez vos opérations avec des systèmes conçus pour l’IA",
      body: "Nous repensons et connectons vos workflows, votre CRM et vos outils métier pour créer le socle sur lequel l’automatisation et les agents IA peuvent agir de façon fiable.",
      primaryCta: "Parler de votre opération",
      secondaryCta: "Explorer un exemple",
      keywords: trustItemsFr,
      mediaTopLabel: ["Contexte", "Exécution", "Intelligence"],
      mediaBottomLabel: ["Embed", "Build", "Run"],
      mediaAlt: "Des tours de bureaux vues en contre-plongée.",
      mediaCta: "Explorer un exemple",
    },
    home: {
      expertise: {
        eyebrow: expertiseFr.eyebrow,
        title: expertiseFr.title,
        body: expertiseFr.body,
      },
      work: {
        eyebrow: "Notre expertise, en pratique",
        title: ["Le travail entre vos outils.", "Enfin relié."],
        intro:
          "Un email à traiter, un rapport à produire, une décision à préparer. Voici comment l’opération peut avancer.",
        link: "Voir les six cas d’usage",
        illustrative: "Exemples illustratifs",
      },
      human: {
        label: thesisFr.principles,
        eyebrow: thesisFr.eyebrow,
        title: "Une IA ne vaut que par l’opération sur laquelle elle peut agir.",
        body: thesisFr.body,
        alt: "Une personne relit des documents à son bureau.",
        cta: "Voir l’approche",
      },
      evidence: {
        eyebrow: "Pourquoi commencer par l’opération",
        title: "Le problème se voit dans les chiffres.",
        intro:
          "Trouver l’information, relier les outils, rendre l’IA utile : le même besoin de continuité opérationnelle.",
        disclaimer: evidenceFr.disclaimer,
        studyScope: "Périmètre des études",
        sources: evidenceFr.sources,
        metrics: evidenceFr.metrics,
      },
      faq: {
        eyebrow: "Avant de démarrer",
        title: ["Les questions utiles."],
        previous: "Question précédente",
        next: "Question suivante",
        items: faqItemsFr,
      },
      delivery: {
        eyebrow: "Notre façon de livrer",
        title: ["Du terrain", "à la production."],
        link: "Voir l’approche et les livrables",
        deliverable: "Livrable",
        items: deliveryStepsFr.map((step, index) => ({
          ...step,
          image: deliveryImages[index] ?? deliveryImages[0],
        })),
      },
      cta: {
        eyebrow: finalCtaFr.eyebrow,
        title: ["Parlons d’une opération qui dépend", "encore trop de passages manuels."],
        body: finalCtaFr.body,
        action: finalCtaFr.cta,
        microcopy: finalCtaFr.microcopy,
      },
    },
    expertise: operatingLayersFr.map((layer, index) => ({
      id: layer.stage.toLowerCase(),
      icon: layerIcons[index] ?? "zap",
      index: layer.index,
      stage: layer.stage,
      capability: layer.capability,
      title: layer.statement,
      body: layer.body,
      outputs: layer.outputs,
    })),
    examples: operationExamplesFr.map((example) => ({
      ...example,
      image: exampleImages[example.id],
    })),
    workPage: {
      eyebrow: expertiseFr.eyebrow,
      title: "Nous concevons des systèmes opérationnels intelligents",
      body: expertiseFr.body,
      mediaLabel: ["Contexte", "Exécution", "Intelligence"],
      mediaAlt: "Un espace de travail partagé, postes et documents prêts.",
      problem: problemFr,
      layersTitle: "Trois couches d’un même système.",
      layersIntro:
        "Le CRM apporte la mémoire et le contexte. L’automatisation exécute les passages déterministes. La couche agentique intervient sur les étapes qui demandent interprétation ou raisonnement.",
      outputsLabel: "Ce que nous livrons",
    },
    casesPage: {
      eyebrow: "Réalisations",
      title: ["Voir les systèmes,", "pas seulement les technologies."],
      body: "Chaque réalisation montre l’opération de départ, le système construit, le contrôle humain et le résultat observé.",
      mediaAlt: "Plusieurs mains examinent des graphiques imprimés.",
      clientEyebrow: "Réalisation client",
      featuredCase: featuredCaseFr,
      labels: {
        before: "Avant",
        context: "Contexte",
        execution: "Exécution",
        intelligence: "Intelligence",
        humanControl: "Contrôle humain",
        outcome: "Résultat observé",
        targetOutcome: "Résultat visé",
        examples: "Exemples",
        steps: "Comment l’opération avance",
      },
      examplesEyebrow: "Exemples illustratifs",
      examplesTitle: ["Le travail entre vos outils.", "Enfin relié."],
      examplesIntro:
        "Un email à traiter, un rapport à produire, une décision à préparer. Voici comment l’opération peut avancer.",
      situationsEyebrow: "Situations fréquentes",
      situationsTitle: ["Les situations où nous intervenons."],
      situationsBody:
        "Derrière chacune, nous cherchons la rupture entre les outils, les données, les personnes et les décisions. Ouvrez celle qui ressemble à votre quotidien.",
      situationsDisclaimer: "Cas d’usage illustratifs · les résultats décrits sont des objectifs.",
      illustrativeStatus,
      publicationEyebrow: "Publication des résultats",
      publicationTitle: "Des preuves documentées, publiées avec accord.",
      publicationBody:
        "Nous ne publions que les métriques validées et anonymisées. Les données sensibles restent confidentielles.",
      bannerTitle: "Quelle opération ralentit votre équipe ?",
      bannerCta: "Décrire une opération",
    },
    cases: useCasesFr,
    methodPage: {
      eyebrow: "Approche",
      title: ["Une première boucle qui fonctionne", "dans votre environnement."],
      body: "Nous partons du travail réel, construisons dans vos outils et accompagnons le système jusqu’à ce que son résultat soit observable.",
      methodEyebrow: "Notre méthode",
      methodTitle: "Diagnostic → Pilote → Industrialisation",
      aside:
        "Trois temps — Embed, Build, Run — pour passer d’une rupture observée à un système que vos équipes peuvent suivre et reprendre.",
      mediaLabel: ["Embed", "Build", "Run"],
      mediaAlt: "Végétation luxuriante devant une façade vitrée.",
      steps: engagementsFr.map((step) => ({ id: step.index, ...step })),
      scopeEyebrow: "Ce que nous construisons avec vous",
      scopeTitle: "Un périmètre qui évolue avec la preuve.",
      scopeBody:
        "Le résultat reste le même : une opération comprise, une boucle construite et un chemin clair pour la faire durer.",
      governanceEyebrow: "Gouvernance",
      governanceTitle: "L’autonomie se définit avant de se déployer.",
      governanceBody:
        "Données, permissions, validations, traces et reprise sont traitées comme des choix de produit, pas comme des détails techniques.",
      governancePrinciples: governancePrinciplesFr,
    },
    about: {
      eyebrow: "Le collectif",
      title: ["Un responsable identifié,", "un collectif mobilisé."],
      body: "Chaque mission garde un interlocuteur clair. Les expertises nécessaires sont mobilisées au moment où l’opération les exige.",
      mediaLabel: crewFr.responsibilities,
      mediaAlt: "Deux personnes cartographient une opération sur des documents imprimés.",
      modelEyebrow: "Le modèle",
      modelTitle: "Un interlocuteur clair, les expertises utiles au bon moment.",
      roles: [
        {
          id: "client",
          title: "Le client",
          body: "Il apporte le contexte, les priorités, les règles métier et la validation du résultat.",
        },
        {
          id: "lead",
          title: "Le responsable de mission",
          body: "Il porte la relation, le périmètre, la coordination et le résultat tout au long de la mission.",
        },
        {
          id: "collectif",
          title: "Le collectif",
          body: "Nous mobilisons les compétences utiles au moment où le workflow les exige, sans imposer une équipe standardisée.",
        },
      ],
      team: crewFr.team,
      credential: {
        eyebrow: "Une expertise certifiée au sein du collectif",
        title: `${certificationFr.title} — ${certificationFr.level}`,
        body: certificationFr.scope,
        alt: "Badge Claude Certified Developer — Foundations",
      },
      legalTitle: "Cadre juridique",
      legalText: "est porté par",
      publicRecord: "Consulter la fiche publique",
      publicRecordUrl: "https://annuaire-entreprises.data.gouv.fr/entreprise/943812297",
    },
    contactPage: {
      introEyebrow: "Premier échange",
      introAlt: "Une route sinueuse traverse une forêt, vue du ciel.",
      introTitle: "Décrivez une opération qui ralentit votre équipe.",
      introBody:
        "Nous regarderons ce qui se passe réellement : les étapes, les outils, les personnes, les décisions, les exceptions et les conséquences. Si le sujet s’y prête, nous définirons un premier périmètre et une preuve de résultat.",
      sectionEyebrow: "Avant de parler de solution",
      sectionTitle: "Partons du travail réel.",
      bullets: [
        "Ce qui déclenche l’opération et ce qui la bloque",
        "Les outils, données, personnes et décisions qui y participent",
        "Les exceptions et le moment où le contrôle humain est nécessaire",
        "Le résultat que vous voulez rendre observable",
      ],
    },
    journalPage: {
      introEyebrow: "Journal d’ingénierie",
      introAlt: "Une personne concentrée travaille sur son ordinateur portable.",
      introTitle: "Observer le système avant de lui donner plus d’autonomie.",
      introBody:
        "Des retours de terrain sur les ruptures, les actions réellement exécutées et les corrections nécessaires avant de passer à l’échelle.",
      lesson: "Ce que le pilote a montré",
      limitation: "Limite",
    },
    legalPage: {
      introEyebrow: "Informations légales",
      introTitle: "Mentions légales",
      introBody:
        "Cette page rassemble les informations vérifiées disponibles pour la version de travail du site.",
      publisher: "Éditeur",
      publisherBody: "est une marque de travail au statut provisoire.",
      publicationDirector: "Responsable de publication",
      contactHosting: "Coordonnées et hébergement",
      contactHostingBody:
        "L’adresse légale à afficher et l’identité de l’hébergeur doivent être validées avant la publication définitive. Aucune adresse personnelle n’est inventée ou exposée dans cette version de travail.",
      contents: "Contenus",
      contentsBody:
        "Les cas d’usage illustratifs sont identifiés comme tels. Les expériences professionnelles des membres du collectif ne constituent pas une liste de clients de la structure.",
    },
    privacyPage: {
      introEyebrow: "Confidentialité",
      introTitle: "Limiter les données dès le premier échange.",
      introBody:
        "Le formulaire demande uniquement les informations nécessaires pour comprendre un processus et préparer une prise de contact.",
      controller: "Responsable du traitement",
      requested: "Informations demandées",
      requestedBody:
        "Nom, fonction, organisation, email professionnel, description du processus, outils concernés et conséquence du dysfonctionnement.",
      purpose: "Finalité",
      purposeBody:
        "Examiner la demande, préparer l’échange et répondre à la personne qui l’a transmise. Les contenus ne doivent inclure aucune donnée client, pièce sensible, identifiant ou secret d’affaires.",
      retention: "Formulaire et conservation",
      retentionBody:
        "Le formulaire ne confirme une réception qu’après réponse positive de la destination configurée. La destination, la durée de conservation et le canal d’exercice des droits doivent être validés avant son activation publique.",
      analytics: "Mesure d’audience",
      analyticsBody:
        "Aucun outil d’analytics ou traceur marketing non nécessaire n’est intégré à cette version.",
    },
    component: {
      readCase: "Voir la réalisation",
      readArticle: "Lire l’article",
      credentialAlt: "Badge Claude Certified Developer — Foundations",
    },
    form: {
      genericError: "Vérifiez les champs.",
      deliveryError:
        "La réception n’a pas pu être confirmée. Votre demande n’est pas considérée comme envoyée.",
      name: "Prénom et nom",
      namePlaceholder: "Votre nom",
      email: "Email professionnel",
      emailPlaceholder: "vous@entreprise.fr",
      company: "Entreprise",
      companyPlaceholder: "Votre organisation",
      role: "Fonction",
      rolePlaceholder: "Votre rôle",
      process: "Quelle opération ralentit votre équipe aujourd’hui ?",
      processPlaceholder:
        "Décrivez le déclencheur, les étapes, les outils, les exceptions et le résultat à obtenir.",
      tools: "Quels outils ou données sont concernés ?",
      toolsPlaceholder: "Excel, Google Workspace, CRM, ERP, base métier…",
      impact: "Quelles conséquences cette situation a-t-elle aujourd’hui ?",
      impactPlaceholder: "Retard, erreur, travail manuel, manque de visibilité…",
      honeypot: "Ne pas remplir ce champ",
      consent:
        "J’accepte que ces informations soient utilisées uniquement pour examiner ma demande et préparer un échange.",
      privacy:
        "N’envoyez aucune donnée client, pièce comptable, information personnelle sensible, identifiant ou secret d’affaires dans ce formulaire.",
      submitting: "Envoi en cours",
      submit: "Décrire cette opération",
      reference: "Référence",
      success:
        "Votre demande a bien été reçue. Nous revenons vers vous après lecture du processus.",
      serverErrors: {
        rejected: "La demande n’a pas pu être vérifiée. Rechargez la page puis réessayez.",
        not_configured:
          "Le formulaire n’est pas encore relié à sa destination. Votre demande n’a pas été envoyée.",
        configuration_error:
          "Le formulaire est momentanément indisponible. Votre demande n’a pas été envoyée.",
        delivery_failed:
          "La destination n’a pas confirmé la réception. Votre demande n’est pas considérée comme envoyée.",
        delivery_error:
          "La réception n’a pas pu être confirmée. Votre demande n’est pas considérée comme envoyée.",
      },
    },
    journalEntries: journalEntriesFr,
    certification: certificationFr,
  },
  en: {
    common: {
      skipToContent: "Skip to content",
      homeLabel: "home",
      mainNavigation: "Main navigation",
      mobileNavigation: "Mobile navigation",
      footerNavigation: "Footer navigation",
      menu: "Menu",
      contactCta: "Discuss your operation",
      journal: "Journal",
      contact: "Contact",
      legal: "Legal notice",
      privacy: "Privacy",
      brandCategory: "Intelligent operational systems",
      legalLine: "is a working brand operated by",
      rightsReserved: "All rights reserved.",
      languageLabel: "Choose language",
      socialLabel: "Social networks",
    },
    navigation: [
      { label: "Expertise", to: "/work" },
      { label: "Work", to: "/realisations" },
      { label: "Approach", to: "/methode" },
      { label: "About", to: "/a-propos" },
      { label: "Journal", to: "/journal" },
    ],
    hero: {
      eyebrow: heroSource.eyebrow,
      title: "Accelerate your operations with systems built for AI",
      body: heroSource.body,
      primaryCta: "Discuss your operation",
      secondaryCta: "Explore an example",
      keywords: [
        "Structured context",
        "Connected execution",
        "Targeted intelligence",
        "Explicit human control",
      ],
      mediaTopLabel: ["Context", "Execution", "Intelligence"],
      mediaBottomLabel: ["Embed", "Build", "Run"],
      mediaAlt: "Office towers seen from below.",
      mediaCta: "Explore an example",
    },
    home: {
      expertise: {
        eyebrow: "Our expertise",
        title: "We design intelligent operational systems.",
        body: "One system connects the memory of the operation, the execution of the work and the steps that require interpretation.",
      },
      work: {
        eyebrow: "Our expertise, in practice",
        title: ["The work between your tools.", "Finally connected."],
        intro:
          "An email to process, a report to produce, a decision to prepare. Here is how the operation can move forward.",
        link: "See all six use cases",
        illustrative: "Illustrative examples",
      },
      human: {
        label: [
          "Understand what is happening",
          "Trigger the right action",
          "Know when to hand over",
        ],
        eyebrow: "Our thesis",
        title: "AI is only as useful as the operation it can act on.",
        body: "High-performing AI creates no value when context is incomplete, the workflow cannot execute or nobody knows what the system is allowed to do. We therefore start with the operation.",
        alt: "A person reviewing documents at a desk.",
        cta: "See our approach",
      },
      evidence: {
        eyebrow: "Why start with the operation",
        title: "The problem shows up in the numbers.",
        intro:
          "Finding information, connecting tools and making AI useful all require the same operational continuity.",
        disclaimer: "External studies, not client results or promised gains.",
        studyScope: "Study scope",
        sources: [
          {
            ...evidenceFr.sources[0],
            scope:
              "31,000 full-time workers across 31 markets, surveyed in February–March 2023. The figure covers their reported difficulty with spending too much time searching for information.",
          },
          {
            ...evidenceFr.sources[1],
            scope:
              "2025 Connectivity Benchmark: 1,050 IT leaders across nine countries, surveyed in October–November 2024. Organizations have at least 1,000 employees; these results do not specifically describe small and medium-sized businesses.",
          },
        ],
        metrics: [
          {
            ...evidenceFr.metrics[0],
            title: "Information still takes too long to find.",
            description:
              "of surveyed workers say they spend too much time searching for information.",
          },
          {
            ...evidenceFr.metrics[1],
            title: "Systems remain difficult to connect.",
            description:
              "of surveyed IT leaders report challenges integrating data across systems.",
          },
          {
            ...evidenceFr.metrics[2],
            title: "AI depends on this foundation.",
            description:
              "of surveyed organizations cite data integration as a major barrier to AI adoption.",
          },
        ],
      },
      faq: {
        eyebrow: "Before we begin",
        title: ["Useful questions."],
        previous: "Previous question",
        next: "Next question",
        items: [
          {
            question: "Do you sell artificial intelligence?",
            answer:
              "No. We design intelligent operational systems. AI is used only when a step requires interpretation, research, synthesis or a choice between authorized actions.",
          },
          {
            question: "Do we need to replace our existing tools?",
            answer:
              "Usually not. We start by structuring context and connecting the systems already in use. Replacement is proposed only when a tool genuinely prevents the operation from moving forward.",
          },
          {
            question: "How do CRM, automation and agentic systems work together?",
            answer:
              "CRM provides memory and context. Automation executes deterministic handoffs. The agentic layer handles steps that require interpretation or reasoning. They are three layers of one system, not three separate offers.",
          },
          {
            question: "Can the system act on its own?",
            answer:
              "Only within the boundaries defined with you. It can prepare an action, execute an authorized task, request approval or hand the case to a person. Sensitive decisions retain a clearly identified owner.",
          },
          {
            question: "How do you measure value?",
            answer:
              "We define an operational baseline: lead time, errors, production time, follow-up rate, usable records or an observable business outcome.",
          },
          {
            question: "Do you work with internal IT teams?",
            answer:
              "Yes. We build a path that IT can challenge, integrate and take over. A pilot should not become another black box or isolated technical debt.",
          },
          {
            question: "What happens after production deployment?",
            answer:
              "We observe the system, correct breaks and document how it works. We then prepare industrialization, handover to your teams or scaling.",
          },
        ],
      },
      delivery: {
        eyebrow: "How we deliver",
        title: ["From the field", "to production."],
        link: "See our approach and deliverables",
        deliverable: "Deliverable",
        items: [
          {
            index: "01",
            phase: "Diagnose",
            stage: "Embed",
            title: "Understand the work as it really exists",
            body: "We map the trigger, data, tools, manipulations, decisions and exceptions.",
            deliverable: "One priority break, a clear scope and a baseline measure",
            image: deliveryImages[0],
          },
          {
            index: "02",
            phase: "Pilot",
            stage: "Build",
            title: "Build the first complete working loop",
            body: "We deliver the smallest complete loop within the tools, rules and constraints of your environment.",
            deliverable: "A tested loop with explicit rules, controls and responsibilities",
            image: deliveryImages[1],
          },
          {
            index: "03",
            phase: "Industrialize",
            stage: "Run",
            title: "Make what works last",
            body: "We strengthen permissions, tests, traces, monitoring and recovery to prepare handover or scaling.",
            deliverable: "A measured, monitored and transferable system",
            image: deliveryImages[2],
          },
        ],
      },
      cta: {
        eyebrow: "A workflow to unblock?",
        title: ["Let’s talk about an operation that still", "depends on too many manual handoffs."],
        body: "Describe the context, the tools, the exceptions and the expected outcome. We will identify the first useful loop to build.",
        action: "Describe the operational problem",
        microcopy: "The conversation starts with the operation, not with AI.",
      },
    },
    expertise: [
      {
        id: "context",
        icon: layerIcons[0],
        index: "01",
        stage: "Context",
        capability: "CRM",
        title: "CRM gives the operation context.",
        body: "We structure people, data, history, statuses, responsibilities and rules so the system can understand the situation.",
        outputs: [
          "Information architecture",
          "Customer and business data",
          "History and statuses",
          "Source of truth",
        ],
      },
      {
        id: "execution",
        icon: layerIcons[1],
        index: "02",
        stage: "Execution",
        capability: "Automation",
        title: "Automation gives the operation execution.",
        body: "We connect tools and move work through workflows, integrations, triggers, rules and explicit controls.",
        outputs: [
          "Workflows and integrations",
          "Synchronizations",
          "Business rules and controls",
          "Documents and updates",
        ],
      },
      {
        id: "intelligence",
        icon: layerIcons[2],
        index: "03",
        stage: "Intelligence",
        capability: "Agentic Systems",
        title: "Agentic systems add intelligence and autonomy.",
        body: "When rules are no longer enough, the system can interpret, search, summarize, prepare a decision or choose from authorized actions.",
        outputs: [
          "Interpretation and research",
          "Qualification and synthesis",
          "Authorized actions",
          "Escalation to a human",
        ],
      },
    ],
    examples: [
      {
        id: "request",
        label: "Client request",
        before:
          "An email arrives. The team must find the record, understand the request and follow up with the right person.",
        steps: [
          {
            title: "Find the record",
            body: "CRM brings together the client, history, documents and owner.",
          },
          {
            title: "Move the work forward",
            body: "The system creates the task, synchronizes status and passes on the documents.",
          },
          {
            title: "Understand the request",
            body: "An agent qualifies the message and prepares the next authorized action.",
          },
        ],
        humanControl: "An out-of-scope request returns to the owner with its context.",
        outcome: "A request tracked through to resolution.",
        image: exampleImages.request,
      },
      {
        id: "reporting",
        label: "Reporting",
        before:
          "Every month, the same data moves from file to file and everything must be checked again.",
        steps: [
          {
            title: "Set the source of truth",
            body: "Periods, versions and calculation rules are attached to the same reference.",
          },
          {
            title: "Produce and control",
            body: "Data is collected, variances checked and the report updated.",
          },
          {
            title: "Explain a variance",
            body: "When needed, an agent investigates possible causes of an anomaly.",
          },
        ],
        humanControl: "The owner approves exceptions before the report is distributed.",
        outcome: "Repeatable reporting with explained variances.",
        image: exampleImages.reporting,
      },
      {
        id: "decision",
        label: "Business decision",
        before:
          "The numbers exist, but every team rebuilds its analysis before a decision can be made.",
        steps: [
          {
            title: "Share the context",
            body: "Sources, indicators and confidence levels are brought together and made accessible.",
          },
          {
            title: "Trigger the review",
            body: "Crossing a threshold opens a review and gathers the required evidence.",
          },
          {
            title: "Prepare the options",
            body: "An agent summarizes the situation and documents possible actions.",
          },
        ],
        humanControl: "The decision-maker retains control over the trade-off and its consequences.",
        outcome: "A decision connected to its sources and next action.",
        image: exampleImages.decision,
      },
    ],
    workPage: {
      eyebrow: "Our expertise",
      title: "We design intelligent operational systems",
      body: "One system connects the memory of the operation, the execution of the work and the steps that require interpretation.",
      mediaLabel: ["Context", "Execution", "Intelligence"],
      mediaAlt: "A shared workspace with desks and documents ready.",
      problem: {
        eyebrow: "The problem",
        title: "Companies have accumulated tools. The work between them remains fragmented.",
        body: "Information scatters, teams compensate for the breaks and decisions do not always trigger the right action.",
      },
      layersTitle: "Three layers of one system.",
      layersIntro:
        "CRM provides memory and context. Automation executes deterministic handoffs. The agentic layer handles the steps that require interpretation or reasoning.",
      outputsLabel: "What we deliver",
    },
    casesPage: {
      eyebrow: "Work",
      title: ["See the systems,", "not just the technologies."],
      body: "Each project shows the initial operation, the system built, human control and the observed outcome.",
      mediaAlt: "Several hands reviewing printed charts.",
      clientEyebrow: "Client work",
      featuredCase: {
        statuses: ["Deployed for a client", "Results under internal review"],
        title: "Partner reporting updated without losing its history.",
        summary:
          "A common engine connects data to presentations, preserves manual areas and processes every period with traceability.",
        before: "Multiple sources, separate presentations and manual checks repeated every month.",
        context:
          "Partners, periods, sources, charts and manual areas are identified in one structure.",
        execution:
          "The engine retrieves data, updates presentations and rebuilds the historical record.",
        intelligence:
          "No agentic layer was added: explicit rules were sufficient for this operation.",
        humanControl: "Teams retain manual areas and review flagged cases.",
        outcome: "A deployed, repeatable and tested loop without forcing teams into a new tool.",
        proofNote: "Quantified results remain confidential during contractual review.",
        disclaimer: "This technical implementation is not a measure of financial ROI.",
      },
      labels: {
        before: "Before",
        context: "Context",
        execution: "Execution",
        intelligence: "Intelligence",
        humanControl: "Human control",
        outcome: "Observed outcome",
        targetOutcome: "Target outcome",
        examples: "Examples",
        steps: "How the operation moves forward",
      },
      examplesEyebrow: "Illustrative examples",
      examplesTitle: ["The work between your tools.", "Finally connected."],
      examplesIntro:
        "An email to process, a report to produce, a decision to prepare. Here is how the operation can move forward.",
      situationsEyebrow: "Common situations",
      situationsTitle: ["Where we step in."],
      situationsBody:
        "In each case, we look for the break between tools, data, people and decisions. Open the situation that resembles your day-to-day work.",
      situationsDisclaimer: "Illustrative use cases · the outcomes described are objectives.",
      illustrativeStatus: "ILLUSTRATIVE USE CASE",
      publicationEyebrow: "Publishing results",
      publicationTitle: "Documented evidence, published with consent.",
      publicationBody:
        "We only publish validated, anonymized metrics. Sensitive data remains confidential.",
      bannerTitle: "Which operation is slowing your team down?",
      bannerCta: "Describe an operation",
    },
    cases: [
      {
        id: "critical-reporting",
        title: "Reporting depends on one person or a fragile file",
        shortTitle: "Fragile reporting",
        before: "Multiple sources, copy-paste work and a risk of error in every cycle.",
        context: "Structure sources, periods, versions, owners and control rules.",
        execution: "Collect data, check variances and produce the report.",
        intelligence: "Interpret anomalies only when deterministic rules are insufficient.",
        humanControl: "Require approval for exceptions and sensitive changes.",
        outcome: "Repeatable, traceable reporting that depends less on one person.",
        examples: ["Partner QBR", "Executive pack", "Multi-site reporting"],
      },
      {
        id: "decision-data",
        title: "Data exists but does not reach the right decision",
        shortTitle: "Decision without context",
        before: "Useful data is scattered and every team defends its own version.",
        context: "Bring together sources, definitions, responsibilities and confidence levels.",
        execution: "Calculate indicators and trigger the planned reviews or actions.",
        intelligence: "Qualify variances, summarize the situation and prepare options.",
        humanControl: "Leave consequential trade-offs to designated owners.",
        outcome: "A decision connected to its data, rules and next action.",
        examples: ["Cash management", "Cost anomalies", "Sales prioritization"],
      },
      {
        id: "workflow-tools",
        title: "A workflow crosses too many tools and people",
        shortTitle: "Manual handoffs",
        before: "A request moves through a form, email, spreadsheet, CRM and manual follow-ups.",
        context: "Identify the record, status, owner and expected next step.",
        execution: "Synchronize systems and create deterministic actions automatically.",
        intelligence:
          "Read or classify ambiguous requests before proposing an authorized next step.",
        humanControl: "Hand off out-of-rule cases with their full context.",
        outcome: "A visible workflow that moves forward without losing exceptions.",
        examples: ["Onboarding", "Quote follow-up", "Document processing"],
      },
      {
        id: "expertise-product",
        title: "Strong expertise remains difficult to apply at scale",
        shortTitle: "Unstructured expertise",
        before: "The method depends on a few people and varies across tools or cases.",
        context: "Formalize concepts, data, rules, edge cases and responsibilities.",
        execution:
          "Turn the method into repeatable journeys, calculations, controls and deliverables.",
        intelligence:
          "Support research, interpretation or preparation of a contextualized recommendation.",
        humanControl: "Keep expert approval where judgment affects the outcome.",
        outcome: "Expertise made accessible through a system without reducing it to a chatbot.",
        examples: ["Financial diagnosis", "Pricing", "Business control"],
      },
      {
        id: "ai-pilot",
        title: "An AI pilot works in a demo, not in the operation",
        shortTitle: "Blocked AI pilot",
        before: "The model can answer, but data, permissions and actions remain unclear.",
        context: "Define sources, record state, permissions and success criteria.",
        execution: "Connect the pilot to real steps and log its actions.",
        intelligence: "Restrict the system to explicitly authorized decisions or actions.",
        humanControl: "Define approval, refusal and escalation thresholds.",
        outcome:
          "An evaluable system that can be industrialized, corrected or stopped based on evidence.",
        examples: ["Document analysis", "Qualification", "Operations assistant"],
      },
      {
        id: "regulated",
        title: "A sensitive operation requires stronger control",
        shortTitle: "Sensitive operation",
        before:
          "Confidential data, closed systems and responsibilities that are difficult to delegate.",
        context: "Map access, required data and decision responsibilities.",
        execution: "Automate only the handoffs compatible with organizational rules.",
        intelligence: "Use models evaluated on an explicit, observable scope.",
        humanControl: "Provide approval, traceability, least privilege and manual recovery.",
        outcome: "A progressive path to greater autonomy without creating a black box.",
        examples: ["Finance", "Insurance", "Public sector"],
      },
    ],
    methodPage: {
      eyebrow: "Approach",
      title: ["A first working loop", "in your environment."],
      body: "We start from the real work, build within your tools and support the system until its outcome becomes observable.",
      methodEyebrow: "Our method",
      methodTitle: "Diagnose → Pilot → Industrialize",
      aside:
        "Three stages — Embed, Build, Run — to move from an observed break to a system your teams can monitor and take over.",
      mediaLabel: ["Embed", "Build", "Run"],
      mediaAlt: "Lush plants in front of a glass facade.",
      steps: [
        {
          id: "01",
          index: "01",
          title: "Diagnose",
          body: "We identify the break, workflow, scope and baseline measure.",
          outputs: [
            "An understood operation",
            "Priority breaks and exceptions",
            "An initial working scope",
            "A target outcome to prove",
          ],
        },
        {
          id: "02",
          index: "02",
          title: "Pilot",
          body: "We build the smallest complete loop in your real environment.",
          outputs: [
            "A loop connected to your tools",
            "Explicit rules and responsibilities",
            "Controls and human validation",
            "Evidence that it works",
          ],
        },
        {
          id: "03",
          index: "03",
          title: "Industrialize",
          body: "We strengthen the system so it can be owned, monitored and extended over time.",
          outputs: [
            "Permissions, security and traceability",
            "Tests, traces and supervision",
            "Documentation and clear accountability",
            "An industrialization path",
          ],
        },
      ],
      scopeEyebrow: "What we build with you",
      scopeTitle: "A scope that evolves with the evidence.",
      scopeBody:
        "The goal stays the same: understand the operation, build the loop and create a clear path for long-term ownership.",
      governanceEyebrow: "Governance",
      governanceTitle: "Autonomy is defined before it is deployed.",
      governanceBody:
        "Data, permissions, approvals, traces and recovery are treated as product decisions, not technical details.",
      governancePrinciples: [
        {
          title: "Explicit human control",
          body: "The system states what it executes, prepares, recommends or refuses, and who approves it.",
        },
        {
          title: "Least privilege",
          body: "Every component and person receives only the access they need.",
        },
        {
          title: "Data minimization",
          body: "Only data required by the operation is collected, transmitted and retained.",
        },
        {
          title: "Traceability",
          body: "Important outputs can be traced back to their sources, rules, parameters and approvals.",
        },
        {
          title: "Evaluation",
          body: "Rules and models are tested on representative situations, including failures.",
        },
        {
          title: "Recovery",
          body: "The system defines what happens when a source, API or person is unavailable.",
        },
      ],
    },
    about: {
      eyebrow: "The collective",
      title: ["One accountable lead,", "a collective mobilized."],
      body: "Every engagement has one clear point of contact. The right expertise is brought in when the operation requires it.",
      mediaLabel: [
        "Operational diagnosis",
        "System architecture",
        "Delivery and trade-offs",
        "Production deployment",
      ],
      mediaAlt: "Two people mapping an operation across printed documents.",
      modelEyebrow: "The model",
      modelTitle: "One clear point of contact, the right expertise at the right time.",
      roles: [
        {
          id: "client",
          title: "The client",
          body: "Provides the context, priorities, business rules and validation of the outcome.",
        },
        {
          id: "lead",
          title: "The engagement lead",
          body: "Owns the relationship, scope, coordination and outcome throughout the engagement.",
        },
        {
          id: "collectif",
          title: "The collective",
          body: "We mobilize the skills required by the workflow, without imposing a standardized team.",
        },
      ],
      team: "Around that accountability, we mobilize the expertise required — operations, CRM, data, integration, automation, agentic systems, security and change management — when the workflow needs it.",
      credential: {
        eyebrow: "Certified expertise within the collective",
        title: `${certificationFr.title} — ${certificationFr.level}`,
        body: "Individual certification earned by a member of the collective.",
        alt: "Claude Certified Developer — Foundations badge",
      },
      legalTitle: "Legal structure",
      legalText: "is operated by",
      publicRecord: "View the public company record",
      publicRecordUrl: "https://annuaire-entreprises.data.gouv.fr/entreprise/943812297",
    },
    contactPage: {
      introEyebrow: "First conversation",
      introAlt: "A winding road through a forest, seen from above.",
      introTitle: "Describe an operation that slows your team down.",
      introBody:
        "We will examine what really happens: the steps, tools, people, decisions, exceptions and consequences. If the topic is a fit, we will define an initial scope and a measurable outcome.",
      sectionEyebrow: "Before discussing a solution",
      sectionTitle: "Start with the real work.",
      bullets: [
        "What triggers the operation and what blocks it",
        "The tools, data, people and decisions involved",
        "The exceptions and where human control is required",
        "The outcome you want to make observable",
      ],
    },
    journalPage: {
      introEyebrow: "Engineering journal",
      introAlt: "A focused person working on a laptop.",
      introTitle: "Observe the system before granting it more autonomy.",
      introBody:
        "Field notes on breakdowns, the actions actually executed and the corrections required before scaling.",
      lesson: "What the pilot showed",
      limitation: "Limitation",
    },
    legalPage: {
      introEyebrow: "Legal information",
      introTitle: "Legal notice",
      introBody:
        "This page gathers the verified information available for the working version of the site.",
      publisher: "Publisher",
      publisherBody: "is a working brand with provisional status.",
      publicationDirector: "Publication director",
      contactHosting: "Contact details and hosting",
      contactHostingBody:
        "The legal address to display and the identity of the hosting provider must be validated before final publication. No personal address is invented or exposed in this working version.",
      contents: "Contents",
      contentsBody:
        "Illustrative use cases are identified as such. The professional experience of collective members does not constitute a client list for the company.",
    },
    privacyPage: {
      introEyebrow: "Privacy",
      introTitle: "Limit data from the first exchange.",
      introBody:
        "The form only requests the information needed to understand a process and prepare a conversation.",
      controller: "Data controller",
      requested: "Information requested",
      requestedBody:
        "Name, role, organisation, professional email, process description, tools involved and the consequence of the malfunction.",
      purpose: "Purpose",
      purposeBody:
        "Review the request, prepare the conversation and reply to the person who submitted it. Content must not include any client data, sensitive documents, credentials or trade secrets.",
      retention: "Form and retention",
      retentionBody:
        "The form only confirms receipt after a positive response from the configured destination. The destination, retention period and channel for exercising rights must be validated before public activation.",
      analytics: "Audience measurement",
      analyticsBody:
        "No analytics tool or non-essential marketing tracker is included in this version.",
    },
    component: {
      readCase: "View the case",
      readArticle: "Read the article",
      credentialAlt: "Claude Certified Developer — Foundations badge",
    },
    form: {
      genericError: "Check the fields.",
      deliveryError: "Receipt could not be confirmed. Your request is not considered sent.",
      name: "First and last name",
      namePlaceholder: "Your name",
      email: "Professional email",
      emailPlaceholder: "you@company.com",
      company: "Company",
      companyPlaceholder: "Your organisation",
      role: "Role",
      rolePlaceholder: "Your role",
      process: "Which operation slows your team down today?",
      processPlaceholder:
        "Describe the trigger, the steps, the tools, the exceptions and the outcome you want.",
      tools: "Which tools or data are involved?",
      toolsPlaceholder: "Excel, Google Workspace, CRM, ERP, business database…",
      impact: "What consequences does this situation have today?",
      impactPlaceholder: "Delay, error, manual work, lack of visibility…",
      honeypot: "Do not fill in this field",
      consent:
        "I agree that this information will be used only to review my request and prepare a conversation.",
      privacy:
        "Do not send any client data, accounting documents, sensitive personal information, credentials or trade secrets in this form.",
      submitting: "Sending",
      submit: "Describe this operation",
      reference: "Reference",
      success: "Your request has been received. We will get back to you after reading the process.",
      serverErrors: {
        rejected: "The request could not be verified. Reload the page and try again.",
        not_configured:
          "The form is not yet connected to its destination. Your request was not sent.",
        configuration_error: "The form is temporarily unavailable. Your request was not sent.",
        delivery_failed:
          "The destination did not confirm receipt. Your request is not considered sent.",
        delivery_error: "Receipt could not be confirmed. Your request is not considered sent.",
      },
    },
    journalEntries: [
      {
        id: "gen-lead-us",
        title: "Measure the final useful outcome, not the intermediate volume.",
        statuses: ["SUPERVISED INTERNAL PILOT", "LIVE AUDIT"],
        statusLabels: ["Supervised internal pilot", "Audit in progress"],
        intro:
          "An internal pipeline collects job postings, extracts signals, qualifies companies and researches relevant contacts.",
        metrics: [
          { value: "14,337", label: "raw job postings" },
          { value: "9,982", label: "signals" },
          { value: "261", label: "contacts" },
          { value: "25", label: "emails marked valid" },
          { value: "10/38", label: "complete runs" },
        ],
        lesson:
          "The audit showed that the useful link remained the verified contact. Priority therefore shifted from collected volume to sales quality and execution completeness.",
        disclaimer:
          "This pilot is not presented as an autonomous pipeline or a commercial client engagement.",
      },
    ],
    certification: {
      ...certificationFr,
      scope: "Individual certification earned by a member of the collective.",
    },
  },
} as const;

export type LocalizedContent = (typeof content)[keyof typeof content];

export function getLocalizedContent(locale: "fr" | "en"): LocalizedContent {
  return content[locale];
}

export function useLocalizedContent(): LocalizedContent {
  const { locale } = useI18n();
  return getLocalizedContent(locale);
}

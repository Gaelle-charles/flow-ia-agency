import { useI18n } from "@/lib/i18n-context";

import { claudeCertification as certificationFr } from "./credentials";
import { journalEntries as journalEntriesFr } from "./projects";

/**
 * Every string the site renders, in both languages, mirroring the approved
 * design mockups. Pages read this through useLocalizedContent(); the router
 * loaders read it through getLocalizedContent() to build <head>.
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
      contactCta: "Discuter de votre projet",
      journal: "Journal",
      contact: "Contact",
      legal: "Mentions légales",
      privacy: "Confidentialité",
      brandCategory: "Systèmes opérationnels intelligents",
      legalLine: "est une marque opérée par",
      rightsReserved: "Tous droits réservés.",
      languageLabel: "Choisir la langue",
      socialLabel: "Réseaux sociaux",
    },
    navigation: [
      { label: "Work", to: "/work" },
      { label: "Réalisations", to: "/realisations" },
      { label: "Approche", to: "/methode" },
      { label: "À propos", to: "/a-propos" },
      { label: "Journal", to: "/journal" },
    ],
    hero: {
      eyebrow: "Opérations agentiques",
      title: "De l’ambition à l’exécution",
      body: "Nous aidons les marques ambitieuses à accélérer leurs initiatives digitales en construisant leur infrastructure agentique.",
      primaryCta: "Discuter de votre projet",
      secondaryCta: "Voir nos réalisations",
      keywords: ["Agents", "Automatisation", "CRM", "Systèmes intelligents"],
      mediaTopLabel: ["Humains", "Processus", "IA"],
      mediaBottomLabel: ["Conçu", "pour la suite"],
      mediaAlt: "Deux personnes cartographient une opération sur des documents imprimés.",
      mediaCta: "Voir nos réalisations",
    },
    home: {
      expertise: {
        eyebrow: "Notre expertise",
        title: "Trois leviers pour un impact réel.",
        body: "Stratégie, technologie et exécution pour faire de vos opérations un avantage concurrentiel.",
      },
      work: {
        eyebrow: "Réalisations",
        title: ["Des opérations réelles.", "Des résultats tangibles."],
        intro:
          "De l’efficacité interne aux nouveaux relais de croissance, nous concevons et livrons des solutions adaptées au contexte de chaque client.",
        link: "Voir toutes les réalisations",
      },
      human: {
        label: ["Humain", "au centre", "par nature"],
        title: "La technologie est plus puissante quand elle sert les humains",
        body: "Nous concevons des systèmes qui augmentent vos équipes, pas qui les remplacent.",
        alt: "Une personne relit des documents à son bureau.",
        cta: "Découvrir notre approche",
      },
      stats: [
        {
          value: "3",
          unit: "×",
          label: "exécution plus rapide",
          detail: "Time-to-value moyen chez nos clients",
        },
        {
          value: "90",
          unit: "%",
          label: "des processus automatisés",
          detail: "sur les cas d’usage qualifiés",
        },
        {
          value: "100",
          unit: "%",
          label: "des projets livrés",
          detail: "avec un impact mesurable",
        },
      ],
      testimonials: {
        eyebrow: "Ils nous font confiance",
        title: ["Des équipes ambitieuses.", "Des histoires vraies."],
        intro:
          "Nous travaillons avec des entreprises qui veulent aller plus vite, opérer plus intelligemment et construire la suite.",
        previous: "Témoignage précédent",
        next: "Témoignage suivant",
        items: [
          {
            id: "retail",
            quote:
              "Sway Ops nous a aidés à structurer et automatiser un processus complexe. L’impact a été immédiat.",
            name: "Marie L.",
            role: "COO, Retail Group",
          },
          {
            id: "finance",
            quote:
              "Un vrai partenaire, de la stratégie à l’exécution. Leur expertise des systèmes agentiques fait la différence.",
            name: "Thomas B.",
            role: "CTO, Financial Services",
          },
          {
            id: "services",
            quote:
              "Professionnels, rapides et concentrés sur les résultats. Nous avons gagné du temps, de la clarté et du contrôle.",
            name: "Sophie R.",
            role: "Fondatrice, Services",
          },
        ],
      },
      insights: {
        eyebrow: "Insights",
        title: ["Des idées pour", "un futur plus opérationnel."],
        link: "Voir tous les articles",
        items: [
          {
            id: "automatisation",
            category: "Automatisation",
            title: "5 processus que toute entreprise devrait automatiser en 2026",
            image: "/images/editorial/facade-garden.webp",
            alt: "Végétation luxuriante devant une façade vitrée.",
          },
          {
            id: "agents",
            category: "Agents IA",
            title: "Des copilotes à l’autonomie : et ensuite ?",
            image: "/images/editorial/forest-road.webp",
            alt: "Une route sinueuse traverse une forêt, vue du ciel.",
          },
          {
            id: "strategie",
            category: "Stratégie",
            title: "Construire une infrastructure agentique étape par étape",
            image: "/images/editorial/towers.webp",
            alt: "Des tours de bureaux vues en contre-plongée.",
          },
        ],
      },
      cta: {
        eyebrow: "Parlons-en",
        title: ["Prêt à accélérer", "vos opérations ?"],
        body: "Partagez votre contexte, nous explorerons ensemble comment vous aider.",
        action: "Discuter de votre projet",
      },
    },
    expertise: [
      {
        id: "agentic",
        icon: "zap",
        title: "Systèmes agentiques",
        body: "Concevoir et déployer des agents IA qui travaillent dans vos opérations réelles.",
      },
      {
        id: "automation",
        icon: "database",
        title: "Automatisation & intégrations",
        body: "Connecter vos outils, fluidifier les workflows, supprimer le travail manuel.",
      },
      {
        id: "crm",
        icon: "chart",
        title: "CRM & systèmes business",
        body: "Structurer vos données, vos processus et vos parcours clients pour une croissance scalable.",
      },
    ],
    cases: [
      {
        id: "retail-data",
        sector: "retail",
        sectorLabel: "Retail",
        shortTitle: "Centraliser les données clients",
        title: "Centraliser les données clients de 12 pays.",
        tags: "CRM, automatisation, agents IA",
        image: "/images/editorial/office-desk.webp",
        alt: "Un espace de travail partagé, postes et documents prêts.",
      },
      {
        id: "finance-reporting",
        sector: "finance",
        sectorLabel: "Finance",
        shortTitle: "Automatiser le reporting",
        title: "Automatiser le reporting pour décider plus vite.",
        tags: "Pipelines de données, workflows agentiques",
        image: "/images/editorial/chart-review.webp",
        alt: "Plusieurs mains examinent des graphiques imprimés.",
      },
      {
        id: "services-ops",
        sector: "services",
        sectorLabel: "Services",
        shortTitle: "Des processus plus fluides",
        title: "Des processus manuels aux opérations autonomes.",
        tags: "Automatisation, agents IA",
        image: "/images/editorial/laptop-focus.webp",
        alt: "Une personne concentrée travaille sur son ordinateur portable.",
      },
    ],
    workPage: {
      eyebrow: "Work",
      title: "Des idées aux résultats",
      body: "Nous concevons des systèmes agentiques qui font avancer votre business.",
      mediaLabel: ["Des systèmes", "pour un vrai impact"],
      mediaAlt: "Un espace de travail partagé, postes et documents prêts.",
      stats: [
        { value: "+30", label: "projets accompagnés" },
        { value: "3", label: "pôles d’expertise" },
        { value: "100%", label: "orienté résultats" },
      ],
      expertiseTitle: "Nos expertises",
    },
    casesPage: {
      eyebrow: "Réalisations",
      title: ["Des cas concrets.", "Des opérations qui avancent."],
      body: "Découvrez comment nous transformons des problématiques métiers en systèmes opérationnels.",
      filterLabel: "Filtrer par secteur",
      filterAll: "Tous",
      empty: "Aucune réalisation publiée dans ce secteur pour le moment.",
      bannerTitle: "Un cas ressemble à votre situation ?",
      bannerCta: "Discuter de votre projet",
    },
    methodPage: {
      eyebrow: "Notre approche",
      title: ["Une méthode claire.", "Des résultats mesurables."],
      body: "Nous partons du terrain pour construire des systèmes utiles, adoptés et durables.",
      aside: "Une approche pragmatique pour passer de l’idée à l’impact.",
      mediaLabel: ["Des systèmes", "qui durent"],
      mediaAlt: "Végétation luxuriante devant une façade vitrée.",
      steps: [
        {
          id: "diagnostiquer",
          title: "Diagnostiquer",
          body: "Comprendre l’existant et identifier le point de blocage.",
        },
        {
          id: "piloter",
          title: "Piloter",
          body: "Construire une première boucle complète dans votre environnement.",
        },
        {
          id: "industrialiser",
          title: "Industrialiser",
          body: "Étendre, sécuriser et rendre autonome.",
        },
      ],
    },
    about: {
      eyebrow: "Le collectif",
      title: ["Un lead responsable,", "un collectif mobilisé."],
      body: "Chaque mission est portée par une personne qui en assume la relation, le périmètre et le résultat.",
      mediaLabel: ["Expertise", "opérationnelle", "impact durable"],
      mediaAlt: "Deux personnes cartographient une opération sur des documents imprimés.",
      roles: [
        {
          id: "client",
          title: "Le client",
          body: "Le contexte, les règles métier et la validation du résultat.",
        },
        {
          id: "lead",
          title: "Le lead",
          body: "La coordination, le périmètre et l’outcome.",
        },
        {
          id: "collectif",
          title: "Le collectif",
          body: "L’expertise mobilisée au bon moment.",
        },
      ],
      credential: {
        title: "Une expertise certifiée dans le collectif.",
        body: "Certifications individuelles obtenues par les membres de l’équipe.",
        alt: "Badge Claude Certified Developer — Foundations",
      },
    },
    contactPage: {
      introEyebrow: "Premier échange",
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
      credentialEyebrow: "Une expertise certifiée au sein du collectif",
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
      contactCta: "Discuss your project",
      journal: "Journal",
      contact: "Contact",
      legal: "Legal notice",
      privacy: "Privacy",
      brandCategory: "Intelligent operational systems",
      legalLine: "is a brand operated by",
      rightsReserved: "All rights reserved.",
      languageLabel: "Choose language",
      socialLabel: "Social networks",
    },
    navigation: [
      { label: "Work", to: "/work" },
      { label: "Use cases", to: "/realisations" },
      { label: "Approach", to: "/methode" },
      { label: "About", to: "/a-propos" },
      { label: "Journal", to: "/journal" },
    ],
    hero: {
      eyebrow: "Agentic operations",
      title: "From ambition to execution",
      body: "We help leading brands accelerate their digital development initiatives by building their agentic infrastructure.",
      primaryCta: "Discuss your project",
      secondaryCta: "See our work",
      keywords: ["Agents", "Automation", "CRM", "Intelligent systems"],
      mediaTopLabel: ["People", "Processes", "AI"],
      mediaBottomLabel: ["Built", "for what’s next"],
      mediaAlt: "Two people mapping an operation across printed documents.",
      mediaCta: "See our work",
    },
    home: {
      expertise: {
        eyebrow: "Our expertise",
        title: "Three levers for real impact.",
        body: "Strategy, technology and execution to turn your operations into a competitive advantage.",
      },
      work: {
        eyebrow: "Featured work",
        title: ["Real operations.", "Tangible results."],
        intro:
          "From internal efficiency to new revenue streams, we design and deliver solutions tailored to each client’s context.",
        link: "See all use cases",
      },
      human: {
        label: ["Human", "centric", "by design"],
        title: "Technology is more powerful when it serves people",
        body: "We design systems that augment your teams, not replace them.",
        alt: "A person reviewing documents at a desk.",
        cta: "See our approach",
      },
      stats: [
        {
          value: "3",
          unit: "×",
          label: "faster execution",
          detail: "Average time to value for our clients",
        },
        {
          value: "90",
          unit: "%",
          label: "of processes automated",
          detail: "on qualified use cases",
        },
        {
          value: "100",
          unit: "%",
          label: "projects delivered",
          detail: "with measurable impact",
        },
      ],
      testimonials: {
        eyebrow: "They trust us",
        title: ["Ambitious teams.", "Real stories."],
        intro:
          "We work with companies that want to move faster, operate smarter and build what’s next.",
        previous: "Previous testimonial",
        next: "Next testimonial",
        items: [
          {
            id: "retail",
            quote:
              "Sway Ops helped us structure and automate a complex process. The impact was immediate.",
            name: "Marie L.",
            role: "COO, Retail Group",
          },
          {
            id: "finance",
            quote:
              "A true partner, from strategy to execution. Their expertise in agentic systems makes a real difference.",
            name: "Thomas B.",
            role: "CTO, Financial Services",
          },
          {
            id: "services",
            quote:
              "Professional, fast and focused on outcomes. We gained time, clarity and control.",
            name: "Sophie R.",
            role: "Founder, Services",
          },
        ],
      },
      insights: {
        eyebrow: "Insights",
        title: ["Ideas for", "a more operational future."],
        link: "See all articles",
        items: [
          {
            id: "automatisation",
            category: "Automation",
            title: "5 processes every company should automate in 2026",
            image: "/images/editorial/facade-garden.webp",
            alt: "Lush plants in front of a glass facade.",
          },
          {
            id: "agents",
            category: "AI agents",
            title: "From copilots to autonomy: what’s next?",
            image: "/images/editorial/forest-road.webp",
            alt: "A winding road through a forest, seen from above.",
          },
          {
            id: "strategie",
            category: "Strategy",
            title: "Building an agentic infrastructure step by step",
            image: "/images/editorial/towers.webp",
            alt: "Office towers seen from below.",
          },
        ],
      },
      cta: {
        eyebrow: "Let’s talk",
        title: ["Ready to accelerate", "your operations?"],
        body: "Share your context and we’ll explore how we can help.",
        action: "Discuss your project",
      },
    },
    expertise: [
      {
        id: "agentic",
        icon: "zap",
        title: "Agentic systems",
        body: "Design and deploy AI agents that work in your real operations.",
      },
      {
        id: "automation",
        icon: "database",
        title: "Automation & integrations",
        body: "Connect your tools, streamline workflows, remove manual work.",
      },
      {
        id: "crm",
        icon: "chart",
        title: "CRM & business systems",
        body: "Structure your data, processes and customer journeys for scalable growth.",
      },
    ],
    cases: [
      {
        id: "retail-data",
        sector: "retail",
        sectorLabel: "Retail",
        shortTitle: "Unified customer data",
        title: "Unifying customer data across 12 countries.",
        tags: "CRM, automation, AI agents",
        image: "/images/editorial/office-desk.webp",
        alt: "A shared workspace with desks and documents ready.",
      },
      {
        id: "finance-reporting",
        sector: "finance",
        sectorLabel: "Finance",
        shortTitle: "Automated reporting",
        title: "Automating reporting for faster decisions.",
        tags: "Data pipelines, agentic workflows",
        image: "/images/editorial/chart-review.webp",
        alt: "Several hands reviewing printed charts.",
      },
      {
        id: "services-ops",
        sector: "services",
        sectorLabel: "Services",
        shortTitle: "Smoother operations",
        title: "From manual processes to autonomous operations.",
        tags: "Automation, AI agents",
        image: "/images/editorial/laptop-focus.webp",
        alt: "A focused person working on a laptop.",
      },
    ],
    workPage: {
      eyebrow: "Work",
      title: "From ideas to impact",
      body: "We design agentic systems that move your business forward.",
      mediaLabel: ["Systems", "for real impact"],
      mediaAlt: "A shared workspace with desks and documents ready.",
      stats: [
        { value: "+30", label: "projects delivered" },
        { value: "3", label: "areas of expertise" },
        { value: "100%", label: "outcome-driven" },
      ],
      expertiseTitle: "Our expertise",
    },
    casesPage: {
      eyebrow: "Use cases",
      title: ["Real use cases.", "Real outcomes."],
      body: "See how we turn business challenges into operational systems.",
      filterLabel: "Filter by sector",
      filterAll: "All",
      empty: "No published work in this sector yet.",
      bannerTitle: "A use case similar to your situation?",
      bannerCta: "Discuss your project",
    },
    methodPage: {
      eyebrow: "Our approach",
      title: ["A clear method.", "Measurable results."],
      body: "We start from the real work to build useful, adopted and sustainable systems.",
      aside: "A pragmatic approach to go from idea to impact.",
      mediaLabel: ["Built", "to last"],
      mediaAlt: "Lush plants in front of a glass facade.",
      steps: [
        {
          id: "diagnostiquer",
          title: "Diagnose",
          body: "Understand the existing situation and identify the bottleneck.",
        },
        {
          id: "piloter",
          title: "Pilot",
          body: "Build the first complete loop in your environment.",
        },
        {
          id: "industrialiser",
          title: "Industrialize",
          body: "Extend, secure and make it autonomous.",
        },
      ],
    },
    about: {
      eyebrow: "The collective",
      title: ["One accountable lead,", "a collective mobilized."],
      body: "Each project is led by one person who owns the relationship, scope and outcome.",
      mediaLabel: ["Operational", "expertise", "lasting impact"],
      mediaAlt: "Two people mapping an operation across printed documents.",
      roles: [
        {
          id: "client",
          title: "The client",
          body: "Context, business rules and validation of the outcome.",
        },
        {
          id: "lead",
          title: "The lead",
          body: "Coordination, scope and results.",
        },
        {
          id: "collectif",
          title: "The collective",
          body: "The right expertise, at the right time.",
        },
      ],
      credential: {
        title: "Certified expertise within the collective.",
        body: "Individual certification earned by a member of the team.",
        alt: "Claude Certified Developer — Foundations badge",
      },
    },
    contactPage: {
      introEyebrow: "First conversation",
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
      credentialEyebrow: "Certified expertise within the collective",
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

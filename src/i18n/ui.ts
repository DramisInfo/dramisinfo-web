export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export const social = {
  linkedin: 'https://www.linkedin.com/in/frederic-morais-simard-a334796/',
} as const;

export const ui = {
  fr: {
    nav: {
      about: 'Profil',
      services: 'Services',
      parcours: 'Expérience',
      realisations: 'Réalisations',
      certifications: 'Certifications',
      cta: 'Me contacter',
      ctaShort: 'Contact',
    },
    hero: {
      badge: 'Disponible pour mandats contractuels',
      titleLine1: 'Architecture infonuagique,',
      titleHighlight: 'entreprise autonome',
      subtitle:
        "Plus de 20 ans d'expertise en stratégie et exécution — de la vision architecturale à la livraison concrète. Modernisation de l'infrastructure infonuagique, plateformes internes fiables et réduction des tâches opérationnelles pénibles grâce à l'automatisation et à l'IA.",
      imageAlt: 'Salle de serveurs — infrastructure infonuagique',
      ctaPrimary: 'Me contacter',
      ctaSecondary: "Voir l'expérience",
      reassurance:
        "Bilingue (français/anglais) · Basé à L'Assomption, Québec · Ouvert aux mandats à distance ou hybrides.",
    },
    about: {
      eyebrow: 'Profil',
      heading: 'Stratège et praticien',
      imageAlt: 'Rack de serveurs dans un centre de données',
      p1: "Définition et livraison de feuilles de route d'infrastructure infonuagique — de la vision architecturale jusqu'à l'exécution sur le terrain. L'architecture cible n'est pas seulement dessinée : elle est construite, à plusieurs reprises, à grande échelle.",
      p2: "Plateformes, zones d'atterrissage et cadres d'automatisation ayant propulsé certaines des plus grandes transformations infonuagiques en Amérique du Nord — dont une reconnaissance parmi les 10 plus grandes migrations AWS sur le continent.",
      p3: "Présentations régulières de plans d'investissement techniques et de décisions d'architecture aux VP et comités d'architecture. Un intérêt marqué pour l'entreprise autonome, l'AIOps agentique et l'élimination des tâches opérationnelles pénibles par l'automatisation intelligente.",
      values: [
        {
          title: 'Échelle prouvée',
          description:
            "Une zone d'atterrissage AWS multi-région parmi les 10 plus grandes migrations en Amérique du Nord — plus de 4 000 serveurs migrés dans les délais.",
        },
        {
          title: 'Vision et exécution',
          description:
            "De la feuille de route pluriannuelle à la mise en œuvre concrète — livraison de ce qui est architecturé, pas seulement des diagrammes.",
        },
        {
          title: 'Bilingue, habitué aux VP et ARB',
          description:
            "20+ ans d'expérience à présenter des décisions techniques aux comités d'architecture et à la haute direction, en français comme en anglais.",
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      heading: 'Ce qui est livré',
      subheading:
        "Six offres de mandat pour faire avancer vos projets d'architecture infonuagique et de transformation.",
      items: [
        {
          icon: 'globe',
          title: 'Stratégie & feuille de route infonuagique',
          description:
            "Évaluation de l'existant, définition d'une feuille de route pluriannuelle et rationalisation des charges de travail (héberger, replatformer, réusiner, SaaS).",
          image: '/images/service-strategy.jpg',
          deliverables: [
            'Feuille de route pluriannuelle',
            "Rapport d'évaluation de l'existant",
            "Présentation aux VP et comités d'architecture",
          ],
        },
        {
          icon: 'compass',
          title: 'Architecture & migration infonuagique',
          description:
            "Conception et livraison de zones d'atterrissage multi-région et de migrations à grande échelle, incluant les sorties complètes de centres de données.",
          image: '/images/service-architecture.jpg',
          deliverables: [
            "Architecture cible et zone d'atterrissage",
            'Plan de migration détaillé',
            "Exécution et suivi jusqu'à la mise en service",
          ],
        },
        {
          icon: 'layers',
          title: 'Plateforme interne développeurs & DevSecOps',
          description:
            'Conception de plateformes en libre-service avec chemins dorés, alignées sur les principes DevSecOps et GitOps.',
          image: '/images/service-platform.jpg',
          deliverables: [
            'Plateforme IDP en libre-service',
            'Pipelines CI/CD et GitOps',
            'Standards de sécurité et de conformité intégrés',
          ],
        },
        {
          icon: 'shield',
          title: 'Sécurité zéro confiance & gouvernance',
          description:
            "Mise en place de contrôles de sécurité intégrés dès la conception et de la gouvernance de la chaîne d'approvisionnement logicielle.",
          image: '/images/service-security.jpg',
          deliverables: [
            "Cadre de gouvernance et standards d'architecture",
            'Contrôles de sécurité zéro confiance',
            'Gouvernance du cycle de vie des artefacts',
          ],
        },
        {
          icon: 'bolt',
          title: 'Entreprise autonome & AIOps',
          description:
            'Automatisation intelligente des opérations pour éliminer les tâches pénibles et permettre la remédiation prédictive des incidents.',
          image: '/images/service-aiops.jpg',
          deliverables: [
            "Flux d'IA agentique pour l'automatisation des opérations",
            'Observabilité intégrée dès la conception',
            'Remédiation automatisée des incidents',
          ],
        },
        {
          icon: 'idea',
          title: 'Mentorat & transfert de connaissances',
          description:
            'Encadrement des architectes séniors et transfert de connaissances aux équipes de plateforme, de sécurité et opérations en place.',
          image: '/images/service-mentoring.jpg',
          deliverables: [
            "Encadrement d'architectes séniors",
            'Transfert de connaissances structuré',
            'Alignement des équipes sur des pratiques cohérentes',
          ],
        },
      ],
    },
    how: {
      eyebrow: 'Déroulement',
      heading: "Intégration à un mandat",
      subheading:
        "Que ce soit via une agence de placement ou directement avec votre entreprise, voici comment un mandat démarre.",
      steps: [
        {
          title: 'Prise de contact',
          description:
            'Une agence de placement ou une entreprise cliente présente un mandat — contexte, enjeux techniques et échéancier.',
        },
        {
          title: 'Cadrage',
          description:
            'Validation de la portée du mandat, des compétences requises, de la disponibilité et des modalités contractuelles.',
        },
        {
          title: 'Livraison et mentorat',
          description:
            "Feuille de route claire, livraison de l'architecture et transfert des connaissances aux équipes en place.",
        },
      ],
    },
    framework: {
      eyebrow: 'Expérience',
      heading: "Domaines d'expérience",
      subheading:
        "Plus de 20 ans d'expertise en infrastructure T.I., du développement à l'architecture principale.",
      domains: [
        {
          icon: 'layers',
          title: "Architecture d'entreprise à grande échelle",
          description:
            "Stratégie d'infrastructure de bout en bout, zones d'atterrissage multi-région et migrations de plusieurs milliers de serveurs, avec gouvernance et présentations aux VP et comités d'architecture (ARB).",
        },
        {
          icon: 'tools',
          title: "Livraison de solutions d'entreprise & DevOps",
          description:
            "Direction d'équipes de déploiement, automatisation des livraisons (CI/CD), conception d'architectures SSO et amélioration continue des processus de livraison.",
        },
        {
          icon: 'scan',
          title: 'Conversion & qualité des données',
          description:
            "Conception de solutions automatisées de conversion de données et de systèmes de diagnostic de qualité pour des plateformes d'envergure.",
        },
        {
          icon: 'idea',
          title: 'Systèmes critiques à prestations déterminées',
          description:
            "Conception de systèmes de calcul et d'administration pour des régimes de retraite complexes, à haute fiabilité.",
        },
      ],
      note: "20+ ans d'expérience continue en infrastructure T.I., sur des environnements de tailles et de secteurs variés.",
    },
    useCases: {
      eyebrow: 'Impact',
      heading: 'Réalisations clés',
      subheading: 'Quelques exemples concrets livrés au cours des dernières années.',
      items: [
        {
          icon: 'compass',
          title: 'Zone d\'atterrissage AWS multi-région',
          description:
            'Une des 10 plus grandes migrations AWS en Amérique du Nord — plus de 4 000 serveurs migrés, sortie complète de centre de données livrée dans les délais.',
        },
        {
          icon: 'layers',
          title: 'Plateforme interne développeurs (IDP)',
          description:
            "Chemins dorés en libre-service imposant les standards de sécurité et de conformité, réduisant les frictions à l'intégration des équipes produit.",
        },
        {
          icon: 'shield',
          title: 'Plateforme de conteneurs zero-trust',
          description:
            'Architecture alignée sur les principes DevSecOps — Kubernetes, GitOps et maillage de services.',
        },
        {
          icon: 'bolt',
          title: 'Observabilité & AIOps',
          description:
            'Observabilité intégrée dès la conception, permettant la capacité prédictive et la remédiation automatisée des incidents.',
        },
        {
          icon: 'check',
          title: "Gouvernance de la chaîne d'approvisionnement logicielle",
          description:
            'Architecture de gouvernance du cycle de vie des artefacts, imposant les contrôles de sécurité et de conformité.',
        },
        {
          icon: 'tools',
          title: "Modernisation de l'infrastructure",
          description:
            'Modernisation du calcul, du stockage et du réseau axée sur la résilience, l\'automatisation et la sécurité zéro confiance.',
        },
      ],
    },
    certifications: {
      eyebrow: 'Crédibilité',
      heading: 'Certifications & reconnaissances',
      subheading: 'Formation continue et reconnaissance par les pairs.',
      awardsLabel: 'Reconnaissances',
      items: [
        { icon: 'check', title: 'AWS Solution Architect Associate', subtitle: '2024' },
        { icon: 'check', title: 'Azure Administrator Associate', subtitle: '2022' },
        { icon: 'check', title: 'Azure Fundamentals', subtitle: '2021' },
        {
          icon: 'idea',
          title: 'Baccalauréat en Informatique de génie',
          subtitle: 'Université Laval, 1997–1999',
        },
      ],
      awards: [
        {
          title: 'CAE – Exceptional Architect Lead',
          subtitle: '2023',
          description:
            "Décerné pour avoir dirigé l'architecture du plus grand projet de fusion-acquisition de CAE, incluant l'une des 10 plus grandes migrations AWS en Amérique du Nord.",
        },
        {
          title: 'MorneauShepell – Innovation',
          subtitle: '2017',
          description:
            "Lauréat de la catégorie « Innovation » pour sa recherche de meilleures pratiques et sa contribution à l'amélioration de l'efficacité.",
        },
        {
          title: 'EDS Awards – Innovation (finaliste)',
          subtitle: '2006',
          description:
            "Parmi les cinq finalistes en innovation technologique pour la conception d'un système d'administration de régimes de retraite.",
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: 'Discutons de votre mandat',
      subtitle:
        'Agence de placement ou entreprise cliente ? Décrivez le mandat ci-dessous pour une réponse rapide.',
      name: 'Nom complet',
      namePh: 'Votre nom',
      email: 'Courriel',
      emailPh: 'vous@exemple.com',
      company: 'Agence ou entreprise',
      companyPh: 'Ex. : Agence XYZ',
      mandateType: 'Type de mandat',
      mandateTypePh: 'Choisir un type',
      mandateOpts: [
        'Mandat contractuel (via une agence)',
        'Mandat contractuel direct',
        'Conseil ponctuel / mandat court terme',
        'Autre',
      ],
      message: 'Message',
      messagePh: 'Décrivez le mandat, le contexte ou vos questions…',
      submit: 'Envoyer',
      prefer: 'Vous préférez écrire directement ?',
    },
    footer: {
      rights: 'Tous droits réservés.',
      made: 'Conçu et développé au Québec',
    },
    meta: {
      title: 'DramisInfo — Frédéric Morais-Simard, architecte infonuagique',
      description:
        "Architecte principal en infrastructure infonuagique et entreprise autonome — plus de 20 ans d'expérience en stratégie multi-nuage, DevSecOps et modernisation infonuagique. Disponible pour mandats contractuels.",
    },
  },
  en: {
    nav: {
      about: 'Profile',
      services: 'Services',
      parcours: 'Experience',
      realisations: 'Achievements',
      certifications: 'Certifications',
      cta: 'Get in touch',
      ctaShort: 'Contact',
    },
    hero: {
      badge: 'Available for contract engagements',
      titleLine1: 'Cloud architecture,',
      titleHighlight: 'autonomous enterprise',
      subtitle:
        "20+ years of expertise in strategy and execution — from architectural vision to hands-on delivery. Cloud infrastructure modernization, reliable internal platforms, and reduced operational toil through automation and AI.",
      imageAlt: 'Server room — cloud infrastructure',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See the experience',
      reassurance:
        "Bilingual (French/English) · Based in L'Assomption, Québec · Open to remote or hybrid engagements.",
    },
    about: {
      eyebrow: 'Profile',
      heading: 'Strategist and practitioner',
      imageAlt: 'Server rack in a data center',
      p1: "Definition and delivery of infrastructure roadmaps — from architectural vision through to hands-on execution. The target architecture isn't just drawn: it's built, repeatedly, at scale.",
      p2: "Platforms, landing zones and automation frameworks that have powered some of the largest cloud transformations in North America — including recognition among the 10 largest AWS migrations on the continent.",
      p3: "Regular presentations of technical investment plans and architecture decisions to VPs and architecture review boards. A strong focus on the autonomous enterprise, agentic AIOps, and eliminating operational toil through intelligent automation.",
      values: [
        {
          title: 'Proven scale',
          description:
            'A multi-region AWS landing zone recognized among the 10 largest migrations in North America — 4,000+ servers migrated on time.',
        },
        {
          title: 'Vision and execution',
          description:
            "From multi-year roadmap to hands-on delivery — what's architected gets delivered, not just diagrammed.",
        },
        {
          title: 'Bilingual, VP and ARB-ready',
          description:
            '20+ years presenting technical decisions to architecture review boards and senior leadership, in both French and English.',
        },
      ],
    },
    services: {
      eyebrow: 'Services',
      heading: 'What gets delivered',
      subheading:
        'Six engagement offerings to move your cloud architecture and transformation projects forward.',
      items: [
        {
          icon: 'globe',
          title: 'Cloud strategy & roadmap',
          description:
            'Assessment of the current state, definition of a multi-year roadmap, and workload rationalization (rehost, replatform, refactor, SaaS).',
          image: '/images/service-strategy.jpg',
          deliverables: [
            'Multi-year infrastructure roadmap',
            'Current-state assessment report',
            'Presentation to VPs and architecture review boards',
          ],
        },
        {
          icon: 'compass',
          title: 'Cloud architecture & migration',
          description:
            'Design and delivery of multi-region landing zones and large-scale migrations, including full data-center exits.',
          image: '/images/service-architecture.jpg',
          deliverables: [
            'Target architecture and landing zone',
            'Detailed migration plan',
            'Execution and tracking through to go-live',
          ],
        },
        {
          icon: 'layers',
          title: 'Internal Developer Platform & DevSecOps',
          description:
            'Design of self-service platforms with golden paths, aligned with DevSecOps and GitOps principles.',
          image: '/images/service-platform.jpg',
          deliverables: [
            'Self-service IDP platform',
            'CI/CD and GitOps pipelines',
            'Built-in security and compliance standards',
          ],
        },
        {
          icon: 'shield',
          title: 'Zero-trust security & governance',
          description:
            'Security controls built in by design, and governance of the software supply chain.',
          image: '/images/service-security.jpg',
          deliverables: [
            'Governance framework and architecture standards',
            'Zero-trust security controls',
            'Artifact lifecycle governance',
          ],
        },
        {
          icon: 'bolt',
          title: 'Autonomous enterprise & AIOps',
          description:
            'Intelligent automation of operations to eliminate toil and enable predictive incident remediation.',
          image: '/images/service-aiops.jpg',
          deliverables: [
            'Agentic AI workflows for operations automation',
            'Observability built in by design',
            'Automated incident remediation',
          ],
        },
        {
          icon: 'idea',
          title: 'Mentoring & knowledge transfer',
          description:
            'Mentoring senior architects and transferring knowledge to existing platform, security and operations teams.',
          image: '/images/service-mentoring.jpg',
          deliverables: [
            'Senior architect mentoring',
            'Structured knowledge transfer',
            'Alignment of teams on consistent practices',
          ],
        },
      ],
    },
    how: {
      eyebrow: 'Process',
      heading: 'Fitting into an engagement',
      subheading:
        "Whether through a staffing agency or directly with your organization, here's how an engagement typically starts.",
      steps: [
        {
          title: 'Initial contact',
          description:
            'A staffing agency or a client organization presents an engagement — context, technical challenges and timeline.',
        },
        {
          title: 'Scoping',
          description:
            'Alignment on the scope of the engagement, the skills required, availability and contractual terms.',
        },
        {
          title: 'Delivery and mentoring',
          description:
            'A clear roadmap, delivery of the architecture, and knowledge transfer to existing teams.',
        },
      ],
    },
    framework: {
      eyebrow: 'Experience',
      heading: 'Domains of experience',
      subheading:
        '20+ years of IT infrastructure expertise, from hands-on development to principal architecture.',
      domains: [
        {
          icon: 'layers',
          title: 'Enterprise architecture at scale',
          description:
            'End-to-end infrastructure strategy, multi-region landing zones and migrations spanning thousands of servers, with governance and presentations to VPs and architecture review boards (ARB).',
        },
        {
          icon: 'tools',
          title: 'Enterprise solution delivery & DevOps',
          description:
            'Leading deployment teams, delivery automation (CI/CD), SSO architecture design, and continuous improvement of delivery processes.',
        },
        {
          icon: 'scan',
          title: 'Data conversion & quality',
          description:
            'Design of automated data conversion solutions and data quality diagnostic systems for large-scale platforms.',
        },
        {
          icon: 'idea',
          title: 'Critical defined-benefit systems',
          description:
            'Design of calculation and administration systems for complex, high-reliability pension plans.',
        },
      ],
      note: '20+ years of continuous IT infrastructure experience, across environments of varying scale and industry.',
    },
    useCases: {
      eyebrow: 'Impact',
      heading: 'Key achievements',
      subheading: 'A few concrete examples delivered in recent years.',
      items: [
        {
          icon: 'compass',
          title: 'Multi-region AWS landing zone',
          description:
            'One of the 10 largest AWS migrations in North America — 4,000+ servers migrated, a full data-center exit delivered on time.',
        },
        {
          icon: 'layers',
          title: 'Internal Developer Platform (IDP)',
          description:
            'Self-service golden paths enforcing security and compliance standards, reducing friction for product teams onboarding.',
        },
        {
          icon: 'shield',
          title: 'Zero-trust container platform',
          description:
            'Architecture aligned with DevSecOps principles — Kubernetes, GitOps and service mesh.',
        },
        {
          icon: 'bolt',
          title: 'Observability & AIOps',
          description:
            'Observability built in by design, enabling predictive capacity planning and automated incident remediation.',
        },
        {
          icon: 'check',
          title: 'Software supply-chain governance',
          description:
            'Governance architecture for artifact lifecycle, enforcing security and compliance controls.',
        },
        {
          icon: 'tools',
          title: 'Infrastructure modernization',
          description:
            'Modernized compute, storage and network focused on resilience, automation and zero-trust security.',
        },
      ],
    },
    certifications: {
      eyebrow: 'Credentials',
      heading: 'Certifications & recognition',
      subheading: 'Continuous learning and peer recognition.',
      awardsLabel: 'Recognition',
      items: [
        { icon: 'check', title: 'AWS Solution Architect Associate', subtitle: '2024' },
        { icon: 'check', title: 'Azure Administrator Associate', subtitle: '2022' },
        { icon: 'check', title: 'Azure Fundamentals', subtitle: '2021' },
        {
          icon: 'idea',
          title: 'Bachelor of Engineering, Computer Engineering',
          subtitle: 'Université Laval, 1997–1999',
        },
      ],
      awards: [
        {
          title: 'CAE – Exceptional Architect Lead',
          subtitle: '2023',
          description:
            "Awarded for leading the architecture of CAE's largest merger-and-acquisition project, including one of the 10 largest AWS migrations in North America.",
        },
        {
          title: 'MorneauShepell – Innovation',
          subtitle: '2017',
          description:
            'Winner of the "Innovation" category for research into best practices and contributions to improving efficiency.',
        },
        {
          title: 'EDS Awards – Innovation (finalist)',
          subtitle: '2006',
          description:
            'Among the five finalists for technology innovation for the design of a pension plan administration system.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact',
      heading: "Let's talk about your engagement",
      subtitle: 'Staffing agency or client organization? Describe the engagement below for a quick response.',
      name: 'Full name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'you@example.com',
      company: 'Agency or company',
      companyPh: 'e.g. XYZ Agency',
      mandateType: 'Engagement type',
      mandateTypePh: 'Choose a type',
      mandateOpts: [
        'Contract engagement (through an agency)',
        'Direct contract engagement',
        'One-off / short-term advisory',
        'Other',
      ],
      message: 'Message',
      messagePh: 'Describe the engagement, the context, or your questions…',
      submit: 'Send',
      prefer: 'Prefer to write directly?',
    },
    footer: {
      rights: 'All rights reserved.',
      made: 'Designed and built in Québec',
    },
    meta: {
      title: 'DramisInfo — Frédéric Morais-Simard, Cloud Architect',
      description:
        '20+ years of experience in multi-cloud strategy, DevSecOps and cloud modernization. Available for contract engagements.',
    },
  },
} as const;

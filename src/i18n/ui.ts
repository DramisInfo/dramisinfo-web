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
      parcours: 'Parcours',
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
        "Plus de 20 ans d'expérience comme stratège et praticien — de la vision architecturale à la livraison concrète. J'aide les entreprises à moderniser leur infrastructure infonuagique, à bâtir des plateformes internes fiables et à réduire les tâches opérationnelles pénibles grâce à l'automatisation et à l'IA.",
      imageAlt: 'Salle de serveurs — infrastructure infonuagique',
      ctaPrimary: 'Me contacter',
      ctaSecondary: 'Voir mon parcours',
      reassurance:
        "Bilingue (français/anglais) · Basé à L'Assomption, Québec · Ouvert aux mandats à distance ou hybrides.",
    },
    about: {
      eyebrow: 'Profil',
      heading: 'Stratège et praticien',
      imageAlt: 'Rack de serveurs dans un centre de données',
      p1: "J'aide les entreprises à définir et à livrer leurs feuilles de route d'infrastructure infonuagique — de la vision architecturale jusqu'à l'exécution sur le terrain. Je ne me contente pas de dessiner l'architecture cible : je l'ai personnellement construite, à plusieurs reprises, à grande échelle.",
      p2: "J'ai architecturé des plateformes, des zones d'atterrissage et des cadres d'automatisation qui ont propulsé certaines des plus grandes transformations infonuagiques en Amérique du Nord — dont une reconnaissance parmi les 10 plus grandes migrations AWS sur le continent.",
      p3: "Habitué à présenter des plans d'investissement techniques et des décisions d'architecture aux VP et aux comités d'architecture, je m'intéresse aujourd'hui particulièrement à l'entreprise autonome, à l'AIOps agentique et à l'élimination des tâches opérationnelles pénibles par l'automatisation intelligente.",
      values: [
        {
          title: 'Échelle prouvée',
          description:
            "Une zone d'atterrissage AWS multi-région parmi les 10 plus grandes migrations en Amérique du Nord — plus de 4 000 serveurs migrés dans les délais.",
        },
        {
          title: 'Vision et exécution',
          description:
            "De la feuille de route pluriannuelle à la mise en œuvre concrète — je livre ce que j'architecture, pas seulement des diagrammes.",
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
      heading: 'Ce que je livre',
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
      heading: "Comment je m'intègre à un mandat",
      subheading:
        "Que ce soit via une agence de placement ou directement avec votre entreprise, voici comment un mandat démarre.",
      steps: [
        {
          title: 'Prise de contact',
          description:
            'Une agence de placement ou une entreprise cliente me présente un mandat — contexte, enjeux techniques et échéancier.',
        },
        {
          title: 'Cadrage',
          description:
            'On valide ensemble la portée du mandat, les compétences requises, la disponibilité et les modalités contractuelles.',
        },
        {
          title: 'Livraison et mentorat',
          description:
            "J'arrive avec une feuille de route claire, je livre l'architecture et je transfère les connaissances aux équipes en place.",
        },
      ],
    },
    framework: {
      eyebrow: 'Expérience',
      heading: 'Parcours professionnel',
      subheading:
        "Plus de 20 ans d'expérience en infrastructure T.I., de développeur à architecte principal.",
      levelLabel: 'Rôle',
      prevLabel: 'Rôle précédent',
      nextLabel: 'Rôle suivant',
      stages: [
        {
          icon: 'layers',
          title: 'Architecte de plateforme sénior — CAE Inc.',
          description:
            "Octobre 2020 – présent. Stratégie d'infrastructure de bout en bout (nuage, IDP, observabilité, automatisation). Zone d'atterrissage AWS multi-région parmi les 10 plus grandes migrations en Amérique du Nord (4 000+ serveurs). Standards de gouvernance et présentations aux VP et comités d'architecture (ARB).",
        },
        {
          icon: 'clarity',
          title: 'Directeur de projets T.I. — Morneau Shepell',
          description:
            'Décembre 2019 – octobre 2020. Amélioration des processus de livraison de solutions intégrées et des initiatives de support de niveau 2. Mise en place d’une stratégie DevOps / CI-CD.',
        },
        {
          icon: 'tools',
          title: 'Conseiller principal en T.I. — Morneau Shepell',
          description:
            "2012 – 2019. Direction de l'équipe de déploiement d'une grande solution intégrée. Automatisation des déploiements avec PowerShell et Octopus Deploy. Conception d'une architecture SSO (SAML 2.0, WS-Fed).",
        },
        {
          icon: 'scan',
          title: 'Conseiller en T.I. — Mercer',
          description:
            "2010 – 2012 (Mercer, acquis par Morneau Shepell en 2012). Architecte et développeur d'une solution automatisée de conversion de données. Chef de livraison produit.",
        },
        {
          icon: 'idea',
          title: 'Spécialiste en T.I. — Towers Perrin / EDS',
          description:
            "2002 – 2010 (fusion en 2005). Architecte et développeur principal d'un système de calcul de régime de retraite à prestation déterminée et d'un système de diagnostic de qualité des données.",
        },
        {
          icon: 'globe',
          title: 'Développeur Web — Alligacom',
          description:
            "2000 – 2002. Développement d'une application web de gestion de formulaires et participation à une plateforme d'échange de documents selon la norme EDI.",
        },
      ],
      note: "20+ ans d'expérience continue en infrastructure T.I. — de développeur à architecte principal.",
    },
    useCases: {
      eyebrow: 'Impact',
      heading: 'Réalisations clés',
      subheading: "Quelques exemples concrets de ce que j'ai livré au cours des dernières années.",
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
        'Agence de placement ou entreprise cliente ? Écrivez-moi et je vous réponds rapidement.',
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
      parcours: 'Career',
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
        "20+ years of experience as both strategist and practitioner — from architectural vision to hands-on delivery. I help organizations modernize their cloud infrastructure, build reliable internal platforms, and eliminate operational toil through automation and AI.",
      imageAlt: 'Server room — cloud infrastructure',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See my career',
      reassurance:
        "Bilingual (French/English) · Based in L'Assomption, Québec · Open to remote or hybrid engagements.",
    },
    about: {
      eyebrow: 'Profile',
      heading: 'Strategist and practitioner',
      imageAlt: 'Server rack in a data center',
      p1: "I help organizations define and deliver their infrastructure roadmaps — from architectural vision through to hands-on execution. I don't just draw the target architecture: I've personally built it, repeatedly, at scale.",
      p2: "I've architected platforms, landing zones and automation frameworks that powered some of the largest cloud transformations in North America — including recognition among the 10 largest AWS migrations on the continent.",
      p3: "Comfortable presenting technical investment plans and architecture decisions to VPs and architecture review boards, I'm now especially focused on the autonomous enterprise, agentic AIOps, and eliminating operational toil through intelligent automation.",
      values: [
        {
          title: 'Proven scale',
          description:
            'A multi-region AWS landing zone recognized among the 10 largest migrations in North America — 4,000+ servers migrated on time.',
        },
        {
          title: 'Vision and execution',
          description:
            "From multi-year roadmap to hands-on delivery — I deliver what I architect, not just diagrams.",
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
      heading: 'What I deliver',
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
      heading: 'How I fit into an engagement',
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
            'We align on the scope of the engagement, the skills required, availability and contractual terms.',
        },
        {
          title: 'Delivery and mentoring',
          description:
            'I arrive with a clear roadmap, deliver the architecture and transfer knowledge to your existing teams.',
        },
      ],
    },
    framework: {
      eyebrow: 'Experience',
      heading: 'Career',
      subheading: '20+ years of IT infrastructure experience, from developer to principal architect.',
      levelLabel: 'Role',
      prevLabel: 'Previous role',
      nextLabel: 'Next role',
      stages: [
        {
          icon: 'layers',
          title: 'Senior Platform Architect — CAE Inc.',
          description:
            'October 2020 – present. End-to-end infrastructure strategy (cloud, IDP, observability, automation). Multi-region AWS landing zone recognized among the 10 largest migrations in North America (4,000+ servers). Governance standards and presentations to VPs and architecture review boards (ARB).',
        },
        {
          icon: 'clarity',
          title: 'IT Project Director — Morneau Shepell',
          description:
            'December 2019 – October 2020. Improved delivery processes for integrated solutions and led level-2 support initiatives. Established a DevOps / CI-CD strategy.',
        },
        {
          icon: 'tools',
          title: 'Senior IT Consultant — Morneau Shepell',
          description:
            "2012 – 2019. Led the deployment team for a major integrated solution. Automated deployments with PowerShell and Octopus Deploy. Designed an SSO architecture (SAML 2.0, WS-Fed).",
        },
        {
          icon: 'scan',
          title: 'IT Consultant — Mercer',
          description:
            '2010 – 2012 (Mercer, acquired by Morneau Shepell in 2012). Architected and developed an automated data conversion solution. Product delivery lead.',
        },
        {
          icon: 'idea',
          title: 'IT Specialist — Towers Perrin / EDS',
          description:
            '2002 – 2010 (merged in 2005). Lead architect and developer of a defined-benefit pension calculation system and a data quality diagnostics system.',
        },
        {
          icon: 'globe',
          title: 'Web Developer — Alligacom',
          description:
            '2000 – 2002. Developed a web-based form management application and contributed to a document exchange platform based on the EDI standard.',
        },
      ],
      note: '20+ years of continuous IT infrastructure experience — from developer to principal architect.',
    },
    useCases: {
      eyebrow: 'Impact',
      heading: 'Key achievements',
      subheading: "A few concrete examples of what I've delivered in recent years.",
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
      subtitle: "Staffing agency or client organization? Reach out and I'll get back to you quickly.",
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

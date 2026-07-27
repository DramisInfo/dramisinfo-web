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
      expertise: 'Expertise',
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
      ctaPrimary: 'Me contacter',
      ctaSecondary: 'Voir mon parcours',
      reassurance:
        "Bilingue (français/anglais) · Basé à L'Assomption, Québec · Ouvert aux mandats à distance ou hybrides.",
    },
    about: {
      heading: 'Stratège et praticien',
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
      heading: 'Expertise',
      subheading:
        "Sept domaines où j'apporte une valeur concrète aux mandats d'architecture infonuagique et de transformation.",
      items: [
        {
          title: 'Stratégie multi-nuage',
          description:
            'Feuilles de route pluriannuelles sur AWS et Azure, rationalisation des charges de travail (héberger, replatformer, réusiner, SaaS).',
        },
        {
          title: 'Entreprise autonome & AIOps',
          description:
            "Flux d'IA agentique pour automatiser la remédiation, les opérations et la documentation d'architecture.",
        },
        {
          title: 'DevSecOps & GitOps',
          description:
            'Architecture de plateformes de conteneurs alignées sur les principes DevSecOps, avec Kubernetes, GitOps et maillage de services.',
        },
        {
          title: 'Plateforme interne développeurs (IDP)',
          description:
            "Chemins dorés en libre-service qui imposent les standards de sécurité et de conformité, tout en réduisant les frictions à l'intégration.",
        },
        {
          title: 'Sécurité zéro confiance',
          description:
            "Gouvernance de la chaîne d'approvisionnement logicielle et du cycle de vie des artefacts, contrôles de sécurité intégrés dès la conception.",
        },
        {
          title: 'Modernisation infonuagique',
          description:
            "Modernisation du calcul, du stockage et du réseau, avec un focus sur la résilience, l'automatisation et la réduction des coûts.",
        },
        {
          title: 'Gouvernance & standards',
          description:
            "Standards d'architecture, garde-fous et modèles de gouvernance à l'échelle de l'entreprise, présentés aux comités d'architecture (ARB) et aux VP.",
        },
      ],
    },
    how: {
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
      heading: 'Certifications & reconnaissances',
      subheading: 'Formation continue et reconnaissance par les pairs.',
      items: [
        { icon: 'check', title: 'AWS Solution Architect Associate', subtitle: '2024' },
        { icon: 'check', title: 'Azure Administrator Associate', subtitle: '2022' },
        { icon: 'check', title: 'Azure Fundamentals', subtitle: '2021' },
        {
          icon: 'idea',
          title: 'Baccalauréat en Informatique de génie',
          subtitle: 'Université Laval, 1997–1999',
        },
        {
          icon: 'bolt',
          title: 'CAE – Exceptional Architect Lead',
          subtitle: '2023 — plus grand projet de fusion-acquisition de CAE',
        },
        { icon: 'bolt', title: 'MorneauShepell – Innovation', subtitle: '2017' },
        { icon: 'bolt', title: 'EDS Awards – Innovation (finaliste)', subtitle: '2006' },
      ],
    },
    contact: {
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
      expertise: 'Expertise',
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
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'See my career',
      reassurance:
        "Bilingual (French/English) · Based in L'Assomption, Québec · Open to remote or hybrid engagements.",
    },
    about: {
      heading: 'Strategist and practitioner',
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
      heading: 'Expertise',
      subheading:
        'Seven areas where I bring concrete value to cloud architecture and transformation engagements.',
      items: [
        {
          title: 'Multi-cloud strategy',
          description:
            'Multi-year roadmaps across AWS and Azure, workload rationalization (rehost, replatform, refactor, SaaS).',
        },
        {
          title: 'Autonomous enterprise & AIOps',
          description:
            'Agentic AI workflows to automate remediation, operations and architecture documentation.',
        },
        {
          title: 'DevSecOps & GitOps',
          description:
            'Container platform architecture aligned with DevSecOps principles, using Kubernetes, GitOps and service mesh.',
        },
        {
          title: 'Internal Developer Platform (IDP)',
          description:
            'Self-service golden paths that enforce security and compliance standards while reducing friction for product teams.',
        },
        {
          title: 'Zero-trust security',
          description:
            'Software supply-chain and artifact lifecycle governance, with security controls built in from the start.',
        },
        {
          title: 'Cloud modernization',
          description:
            'Modernizing compute, storage and network with a focus on resilience, automation and cost reduction.',
        },
        {
          title: 'Governance & standards',
          description:
            'Enterprise-wide architecture standards, guardrails and governance models, presented to architecture review boards (ARB) and VPs.',
        },
      ],
    },
    how: {
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
      heading: 'Certifications & recognition',
      subheading: 'Continuous learning and peer recognition.',
      items: [
        { icon: 'check', title: 'AWS Solution Architect Associate', subtitle: '2024' },
        { icon: 'check', title: 'Azure Administrator Associate', subtitle: '2022' },
        { icon: 'check', title: 'Azure Fundamentals', subtitle: '2021' },
        {
          icon: 'idea',
          title: 'Bachelor of Engineering, Computer Engineering',
          subtitle: 'Université Laval, 1997–1999',
        },
        {
          icon: 'bolt',
          title: 'CAE – Exceptional Architect Lead',
          subtitle: "2023 — CAE's largest merger-and-acquisition project",
        },
        { icon: 'bolt', title: 'MorneauShepell – Innovation', subtitle: '2017' },
        { icon: 'bolt', title: 'EDS Awards – Innovation (finalist)', subtitle: '2006' },
      ],
    },
    contact: {
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

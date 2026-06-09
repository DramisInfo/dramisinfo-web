export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

export const ui = {
  fr: {
    nav: {
      approach: 'Notre démarche',
      services: 'Services',
      useCases: 'Cas d\'usage',
      about: 'À propos',
      blog: 'Blog',
      cta: 'Discutons-en',
    },
    hero: {
      badge: "L'automatisation au service de votre temps",
      titleLine1: 'Votre temps fait',
      titleHighlight: 'toute la différence',
      subtitle:
        'Chaque heure passée sur des tâches administratives répétitives est une heure de moins pour vos clients, vos projets et ce qui vous distingue. DramisInfo automatise ces tâches pour vous redonner ce temps — et toute sa valeur.',
      ctaPrimary: 'Évaluer mon potentiel',
      ctaSecondary: 'Comment ça fonctionne',
      reassurance: "Pas de jargon. Pas d'engagement. Première rencontre gratuite.",
    },
    value: {
      heading: 'Récupérez la valeur de votre temps',
      intro:
        "Votre temps est votre ressource la plus précieuse — c'est lui qui vous distingue sur le marché. Pourtant, une grande partie est engloutie par des tâches administratives répétitives. Notre rôle : vous le redonner, pour que vous puissiez le consacrer à ce que vous faites de mieux.",
      before: {
        label: 'Sans automatisation',
        items: [
          'Saisie de données et copier-coller entre vos outils',
          'Relances et suivis qui passent entre les mailles',
          'Recherche d\'informations éparpillées',
          'Des tâches administratives qui s\'accumulent',
        ],
        note: 'Des heures perdues chaque semaine, qui ne reviennent pas.',
      },
      after: {
        label: 'Avec DramisInfo',
        items: [
          'Du temps pour vos clients et vos projets à forte valeur',
          'De l\'énergie pour innover et vous démarquer',
          'Des équipes concentrées sur ce qu\'elles font de mieux',
          'Moins d\'erreurs, plus de sérénité',
        ],
        note: 'Le temps récupéré, réinvesti dans ce qui fait votre différence.',
      },
    },
    how: {
      heading: 'Notre démarche, en toute simplicité',
      subheading:
        "Pas besoin de s'y connaître en technologie. On s'occupe du « comment », vous profitez du résultat.",
      steps: [
        {
          title: 'On vous écoute',
          description:
            'On prend le temps de comprendre votre quotidien, vos tâches qui prennent trop de temps et ce qui vous freine. Aucune question technique.',
        },
        {
          title: 'On vous propose',
          description:
            'On revient avec une solution simple et concrète, expliquée clairement, sans jargon. Vous savez exactement ce que ça change pour vous.',
        },
        {
          title: 'On vous accompagne',
          description:
            "On met la solution en place, on forme votre équipe et on reste disponible. Vous n'êtes jamais laissé seul avec la technologie.",
        },
      ],
    },
    services: {
      heading: 'Comment on peut vous aider',
      subheading:
        'Des solutions concrètes pour vous faire gagner du temps et simplifier votre quotidien.',
      items: [
        {
          title: 'Automatiser les tâches répétitives',
          description:
            "Saisie de données, courriels, rapports, suivis… On automatise les tâches manuelles qui grugent votre temps pour que vous puissiez vous concentrer sur l'essentiel.",
        },
        {
          title: 'Simplifier vos processus',
          description:
            'On revoit vos façons de faire avec vous pour éliminer les étapes inutiles, les pertes de temps et les erreurs. Des processus plus clairs, plus fluides.',
        },
        {
          title: 'Des outils sur mesure',
          description:
            'Des applications et des outils pensés pour votre entreprise, faciles à utiliser au quotidien par toute votre équipe.',
        },
        {
          title: "L'IA, quand c'est utile",
          description:
            "Pas de technologie pour la technologie. On utilise l'intelligence artificielle seulement lorsqu'elle apporte une vraie valeur à votre entreprise.",
        },
        {
          title: 'Accompagnement et formation',
          description:
            'On vous explique tout simplement et on forme vos équipes. Vous gardez le contrôle et la confiance face aux nouveaux outils.',
        },
        {
          title: 'Y voir plus clair',
          description:
            'Des tableaux de bord simples qui rassemblent vos informations importantes au même endroit, pour prendre de meilleures décisions.',
        },
      ],
    },
    framework: {
      heading: "Votre parcours d'adoption",
      subheading:
        "On vous fait progresser à votre rythme, une étape à la fois. Pas besoin de tout transformer d'un coup — chaque niveau apporte des gains concrets.",
      levelLabel: 'Niveau',
      prevLabel: 'Niveau précédent',
      nextLabel: 'Niveau suivant',
      stages: [
        {
          icon: 'compass',
          title: 'Diagnostic',
          description:
            'On cartographie vos tâches et vos processus pour repérer où vous perdez du temps et où se cachent les meilleures opportunités.',
        },
        {
          icon: 'bolt',
          title: 'Gains rapides',
          description:
            'On automatise quelques tâches simples à fort impact. Vous constatez des résultats concrets en quelques semaines, sans bouleversement.',
        },
        {
          icon: 'layers',
          title: 'Processus optimisés',
          description:
            'On connecte et on automatise des processus complets entre vos outils. Votre équipe travaille plus efficacement, avec moins d\'erreurs.',
        },
        {
          icon: 'idea',
          title: 'Amélioration continue',
          description:
            "On affine, on mesure et on ajoute l'intelligence artificielle là où elle apporte une vraie valeur. Votre entreprise s'améliore en continu.",
        },
      ],
      note: "Vous pouvez commencer à n'importe quel niveau — on s'adapte à votre situation.",
    },
    useCases: {
      heading: 'Des exemples concrets',
      subheading:
        "Voici quelques façons dont on peut vous faire gagner du temps dès aujourd'hui.",
      items: [
        {
          icon: 'mail',
          title: 'Catégorisation automatisée des courriels',
          description:
            'Vos courriels entrants sont triés, étiquetés et dirigés vers la bonne personne automatiquement. Fini le tri manuel de la boîte de réception.',
        },
        {
          icon: 'crm',
          title: 'Intégration avec votre CRM',
          description:
            'Vos contacts, clients et suivis se synchronisent automatiquement entre vos outils. Plus de double saisie, des informations toujours à jour.',
        },
        {
          icon: 'invoice',
          title: 'Intégration avec votre facturation',
          description:
            "Vos factures sont générées, envoyées et suivies automatiquement. Vous êtes payé plus vite, avec moins d'oublis.",
        },
        {
          icon: 'calendar',
          title: 'Planification et rendez-vous',
          description:
            'La prise de rendez-vous, les confirmations et les rappels se font tout seuls. Moins de va-et-vient, moins de rendez-vous manqués.',
        },
        {
          icon: 'bell',
          title: 'Relances et rappels automatiques',
          description:
            'Paiements en retard, suivis de vente, échéances… les bonnes relances partent au bon moment, sans que vous y pensiez.',
        },
        {
          icon: 'scan',
          title: 'Extraction de données',
          description:
            'Les informations de vos factures, formulaires et documents PDF sont extraites et enregistrées automatiquement dans vos systèmes.',
        },
      ],
    },
    about: {
      heading: 'La technologie, sans la complexité',
      p1: "Beaucoup d'entreprises savent qu'elles pourraient gagner du temps et travailler plus efficacement, mais ne savent pas par où commencer. C'est exactement là qu'on intervient.",
      p2: "Chez DramisInfo, on ne cherche pas à vous vendre la dernière technologie à la mode. On cherche à régler vos vrais problèmes du quotidien, avec des solutions simples qui font une réelle différence.",
      p3: "Notre rôle, c'est de rendre la technologie accessible et utile pour votre entreprise — pas l'inverse.",
      values: [
        {
          title: 'On parle votre langage',
          description:
            'Pas de jargon technique. On explique tout simplement, dans des mots que tout le monde comprend.',
        },
        {
          title: 'Des solutions à votre rythme',
          description:
            'On avance étape par étape, sans tout bouleverser. Vous adoptez les changements en confiance.',
        },
        {
          title: 'Un partenaire de proximité',
          description:
            'Basés au Québec, on reste disponibles et à votre écoute, bien après la mise en place.',
        },
      ],
    },
    contact: {
      heading: 'Évaluez votre potentiel d\'automatisation',
      subtitle:
        'Répondez à quelques questions — on vous revient avec des pistes concrètes adaptées à votre réalité.',
      sec1: 'Votre entreprise',
      sec2: 'Votre quotidien',
      sec3: 'Votre situation',
      name: 'Nom complet',
      namePh: 'Votre nom',
      email: 'Courriel',
      emailPh: 'vous@exemple.com',
      company: 'Nom de l\'entreprise',
      companyPh: 'Ex. : Entreprise ABC',
      region: 'Région ou ville',
      regionPh: 'Ex. : Montréal, Québec, Laval…',
      industry: 'Secteur d\'activité',
      industryPh: 'Choisir un secteur',
      industryOpts: [
        'Commerce / Détail',
        'Services professionnels (comptable, avocat, consultant…)',
        'Santé et services médicaux',
        'Construction / Immobilier',
        'Fabrication et production',
        'Autre',
      ],
      size: 'Taille de l\'équipe',
      sizePh: 'Choisir une taille',
      sizeOpts: [
        '1 à 5 personnes',
        '6 à 20 personnes',
        '21 à 50 personnes',
        'Plus de 50 personnes',
      ],
      timeSpent: 'Heures par semaine sur des tâches répétitives',
      timeSpentPh: 'Choisir une réponse',
      timeOpts: [
        'Moins de 2 heures',
        '2 à 5 heures',
        '5 à 10 heures',
        'Plus de 10 heures',
        'Je ne sais pas',
      ],
      maturity: 'Niveau de maturité numérique actuel',
      maturityOpts: [
        'Principalement sur papier ou fichiers non connectés',
        'Quelques outils numériques (courriel, Excel, logiciel comptable)',
        'Outils bien implantés, mais peu ou pas automatisés',
        'Déjà automatisé en partie — je veux aller plus loin',
      ],
      readiness: 'Où en êtes-vous dans votre démarche ?',
      readinessOpts: [
        'Je veux m\'informer',
        'J\'explore des options pour les prochains mois',
        'J\'ai un projet concret en tête',
        'Je cherche à démarrer rapidement',
      ],
      comments: 'Autre chose à nous dire ? (optionnel)',
      commentsPh: 'Un contexte particulier, une contrainte, ou simplement bonjour…',
      submit: 'Envoyer le sondage',
      prefer: 'Vous préférez écrire directement ?',
    },
    footer: {
      rights: 'Tous droits réservés.',
      made: 'Conçu et développé au Québec',
    },
    meta: {
      title: 'DramisInfo — Automatisation et productivité pour les entreprises',
      description:
        "DramisInfo aide les entreprises à gagner du temps en simplifiant et automatisant leurs tâches du quotidien. Des solutions simples et concrètes, avec ou sans intelligence artificielle.",
    },
    blog: {
      metaTitle: 'Blog — DramisInfo',
      metaDescription:
        "Analyses concrètes et chiffrées sur l'automatisation, la productivité et l'intelligence artificielle pour les PME.",
      heading: 'Le blog',
      subheading:
        "Des analyses concrètes, appuyées sur des données réelles, pour vous aider à récupérer du temps et à tirer parti de l'automatisation.",
      readTime: 'min de lecture',
      published: 'Publié le',
      back: 'Tous les articles',
      cta: {
        heading: 'Envie de savoir ce qu\'on pourrait automatiser chez vous ?',
        text: 'Remplissez notre sondage en 2 minutes — on vous revient avec des pistes concrètes adaptées à votre réalité.',
        button: 'Remplir le sondage',
      },
    },
  },
  en: {
    nav: {
      approach: 'How we work',
      services: 'Services',
      useCases: 'Use cases',
      about: 'About',
      blog: 'Blog',
      cta: "Let's talk",
    },
    hero: {
      badge: 'Automation that gives you time back',
      titleLine1: 'Your time is',
      titleHighlight: 'your advantage',
      subtitle:
        'Every hour spent on repetitive administrative tasks is an hour less for your clients, your projects and what sets you apart. DramisInfo automates those tasks to give that time back — and all its value.',
      ctaPrimary: 'Assess my potential',
      ctaSecondary: 'How it works',
      reassurance: 'No jargon. No commitment. First meeting is free.',
    },
    value: {
      heading: 'Reclaim the value of your time',
      intro:
        "Your time is your most valuable resource — it's what sets you apart in the market. Yet much of it is swallowed up by repetitive administrative tasks. Our job: give it back, so you can spend it on what you do best.",
      before: {
        label: 'Without automation',
        items: [
          'Data entry and copy-pasting between your tools',
          'Follow-ups that slip through the cracks',
          'Hunting for scattered information',
          'Administrative tasks that pile up',
        ],
        note: "Hours lost every week — and they don't come back.",
      },
      after: {
        label: 'With DramisInfo',
        items: [
          'Time for your clients and your high-value projects',
          'Energy to innovate and stand out',
          'Teams focused on what they do best',
          'Fewer errors, more peace of mind',
        ],
        note: 'Time reclaimed, reinvested in what makes you different.',
      },
    },
    how: {
      heading: 'How we work, made simple',
      subheading:
        "You don't need to know anything about technology. We handle the “how”, you enjoy the results.",
      steps: [
        {
          title: 'We listen',
          description:
            'We take the time to understand your day-to-day, the tasks that take too long and what holds you back. No technical questions.',
        },
        {
          title: 'We propose',
          description:
            'We come back with a simple, concrete solution, explained clearly and without jargon. You know exactly what it changes for you.',
        },
        {
          title: 'We support you',
          description:
            'We put the solution in place, train your team and stay available. You are never left alone with the technology.',
        },
      ],
    },
    services: {
      heading: 'How we can help',
      subheading:
        'Concrete solutions to save you time and simplify your everyday work.',
      items: [
        {
          title: 'Automate repetitive tasks',
          description:
            'Data entry, emails, reports, follow-ups… We automate the manual tasks that eat up your time so you can focus on what matters.',
        },
        {
          title: 'Simplify your processes',
          description:
            'We review the way you work with you to eliminate unnecessary steps, wasted time and errors. Clearer, smoother processes.',
        },
        {
          title: 'Custom-built tools',
          description:
            'Applications and tools designed for your business, easy for your whole team to use every day.',
        },
        {
          title: 'AI, when it adds value',
          description:
            'No technology for the sake of it. We use artificial intelligence only when it brings real value to your business.',
        },
        {
          title: 'Guidance and training',
          description:
            'We explain everything simply and train your teams. You stay in control and confident with the new tools.',
        },
        {
          title: 'See things clearly',
          description:
            'Simple dashboards that bring your important information together in one place, so you can make better decisions.',
        },
      ],
    },
    framework: {
      heading: 'Your adoption journey',
      subheading:
        "We help you progress at your own pace, one step at a time. No need to transform everything at once — each stage brings concrete gains.",
      levelLabel: 'Stage',
      prevLabel: 'Previous stage',
      nextLabel: 'Next stage',
      stages: [
        {
          icon: 'compass',
          title: 'Assessment',
          description:
            'We map your tasks and processes to pinpoint where you lose time and where the best opportunities are hiding.',
        },
        {
          icon: 'bolt',
          title: 'Quick wins',
          description:
            'We automate a few simple, high-impact tasks. You see concrete results within weeks, with no upheaval.',
        },
        {
          icon: 'layers',
          title: 'Optimized processes',
          description:
            'We connect and automate complete processes across your tools. Your team works more efficiently, with fewer errors.',
        },
        {
          icon: 'idea',
          title: 'Continuous improvement',
          description:
            'We refine, measure and add artificial intelligence where it brings real value. Your business keeps getting better.',
        },
      ],
      note: 'You can start at any stage — we adapt to your situation.',
    },
    useCases: {
      heading: 'Concrete examples',
      subheading: 'Here are a few ways we can start saving you time today.',
      items: [
        {
          icon: 'mail',
          title: 'Automated email categorization',
          description:
            'Incoming emails are sorted, labelled and routed to the right person automatically. No more manual inbox triage.',
        },
        {
          icon: 'crm',
          title: 'CRM integration',
          description:
            'Your contacts, customers and follow-ups sync automatically across your tools. No more double entry, always up-to-date information.',
        },
        {
          icon: 'invoice',
          title: 'Billing integration',
          description:
            'Your invoices are generated, sent and tracked automatically. You get paid faster, with fewer oversights.',
        },
        {
          icon: 'calendar',
          title: 'Scheduling and appointments',
          description:
            'Booking, confirmations and reminders happen on their own. Less back-and-forth, fewer missed appointments.',
        },
        {
          icon: 'bell',
          title: 'Automatic follow-ups and reminders',
          description:
            'Overdue payments, sales follow-ups, deadlines… the right reminders go out at the right time, without you thinking about it.',
        },
        {
          icon: 'scan',
          title: 'Data extraction',
          description:
            'Information from your invoices, forms and PDF documents is extracted and saved automatically into your systems.',
        },
      ],
    },
    about: {
      heading: 'Technology, without the complexity',
      p1: "Many businesses know they could save time and work more efficiently, but don't know where to start. That's exactly where we come in.",
      p2: "At DramisInfo, we're not here to sell you the latest trendy technology. We're here to solve your real, everyday problems with simple solutions that make a genuine difference.",
      p3: 'Our role is to make technology accessible and useful for your business — not the other way around.',
      values: [
        {
          title: 'We speak your language',
          description:
            'No technical jargon. We explain everything simply, in words everyone understands.',
        },
        {
          title: 'Solutions at your pace',
          description:
            'We move forward step by step, without turning everything upside down. You adopt changes with confidence.',
        },
        {
          title: 'A partner close to you',
          description:
            'Based in Québec, we stay available and attentive, well after the solution is in place.',
        },
      ],
    },
    contact: {
      heading: 'Assess your automation potential',
      subtitle:
        'Answer a few questions — we\'ll get back to you with concrete ideas tailored to your reality.',
      sec1: 'Your company',
      sec2: 'Your day-to-day',
      sec3: 'Your situation',
      name: 'Full name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'you@example.com',
      company: 'Company name',
      companyPh: 'e.g. ABC Company',
      region: 'Region or city',
      regionPh: 'e.g. Montreal, Quebec City, Laval…',
      industry: 'Industry',
      industryPh: 'Choose an industry',
      industryOpts: [
        'Retail / Commerce',
        'Professional services (accountant, lawyer, consultant…)',
        'Health & medical services',
        'Construction / Real estate',
        'Manufacturing & production',
        'Other',
      ],
      size: 'Team size',
      sizePh: 'Choose a size',
      sizeOpts: [
        '1 to 5 people',
        '6 to 20 people',
        '21 to 50 people',
        'More than 50 people',
      ],
      timeSpent: 'Hours per week spent on repetitive tasks',
      timeSpentPh: 'Choose an answer',
      timeOpts: [
        'Less than 2 hours',
        '2 to 5 hours',
        '5 to 10 hours',
        'More than 10 hours',
        'I\'m not sure',
      ],
      maturity: 'Current digital maturity level',
      maturityOpts: [
        'Mostly on paper or disconnected files',
        'Some digital tools (email, Excel, accounting software)',
        'Tools in place, but little to no automation',
        'Already partially automated — looking to go further',
      ],
      readiness: 'Where are you in your thinking?',
      readinessOpts: [
        'I just want to learn more',
        'I\'m exploring options for the next few months',
        'I have a specific project in mind',
        'I\'m looking to get started quickly',
      ],
      comments: 'Anything else to tell us? (optional)',
      commentsPh: 'A particular context, a constraint, or just saying hello…',
      submit: 'Send survey',
      prefer: 'Prefer to write directly?',
    },
    footer: {
      rights: 'All rights reserved.',
      made: 'Designed and built in Québec',
    },
    meta: {
      title: 'DramisInfo — Automation and productivity for businesses',
      description:
        'DramisInfo helps businesses save time by simplifying and automating their everyday tasks. Simple, concrete solutions, with or without artificial intelligence.',
    },
    blog: {
      metaTitle: 'Blog — DramisInfo',
      metaDescription:
        'Practical, data-backed insights on automation, productivity and artificial intelligence for small and mid-sized businesses.',
      heading: 'The blog',
      subheading:
        'Practical, data-backed insights to help you reclaim time and make the most of automation.',
      readTime: 'min read',
      published: 'Published on',
      back: 'All articles',
      cta: {
        heading: 'Curious what we could automate for you?',
        text: 'Fill out our short survey — takes 2 minutes. We\'ll come back with concrete ideas tailored to your situation.',
        button: 'Take the survey',
      },
    },
  },
} as const;

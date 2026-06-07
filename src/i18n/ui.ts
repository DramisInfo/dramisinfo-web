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
      about: 'À propos',
      cta: 'Discutons-en',
    },
    hero: {
      badge: 'Automatisation & productivité pour les entreprises',
      titleLine1: 'Gagnez du temps sur',
      titleHighlight: 'ce qui vous ralentit',
      subtitle:
        'DramisInfo aide les entreprises à simplifier et automatiser leurs tâches du quotidien. Avec ou sans intelligence artificielle — toujours avec des solutions simples, concrètes et adaptées à votre réalité.',
      ctaPrimary: 'Discutons de vos besoins',
      ctaSecondary: 'Comment ça fonctionne',
      reassurance: "Pas de jargon. Pas d'engagement. Première rencontre gratuite.",
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
      heading: 'Parlons de votre quotidien',
      subtitle:
        'Première rencontre gratuite et sans engagement. Racontez-nous ce qui vous prend trop de temps, on verra ensemble comment vous aider.',
      name: 'Nom',
      namePh: 'Votre nom',
      email: 'Courriel',
      emailPh: 'vous@exemple.com',
      company: 'Entreprise',
      companyPh: 'Nom de votre organisation',
      message: 'Votre besoin',
      messagePh:
        "Décrivez-nous ce qui vous prend du temps ou ce que vous aimeriez améliorer...",
      submit: 'Envoyer',
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
  },
  en: {
    nav: {
      approach: 'How we work',
      services: 'Services',
      about: 'About',
      cta: "Let's talk",
    },
    hero: {
      badge: 'Automation & productivity for businesses',
      titleLine1: 'Save time on',
      titleHighlight: 'what slows you down',
      subtitle:
        'DramisInfo helps businesses simplify and automate their everyday tasks. With or without artificial intelligence — always with simple, concrete solutions tailored to your reality.',
      ctaPrimary: 'Tell us what you need',
      ctaSecondary: 'How it works',
      reassurance: 'No jargon. No commitment. First meeting is free.',
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
      heading: "Let's talk about your day-to-day",
      subtitle:
        'A free, no-commitment first meeting. Tell us what takes up too much of your time, and we\'ll figure out together how to help.',
      name: 'Name',
      namePh: 'Your name',
      email: 'Email',
      emailPh: 'you@example.com',
      company: 'Company',
      companyPh: 'Your organization name',
      message: 'What you need',
      messagePh: 'Tell us what takes up your time or what you would like to improve...',
      submit: 'Send',
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
  },
} as const;

export const languages = {
  fr: 'Français',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'fr';

/** Coordonnées — identiques dans toutes les langues. */
export const coords = {
  // Ligne d'affaires seulement — ne jamais remettre un numéro personnel ici.
  // Laisser vide masque le téléphone partout sur le site.
  phone: '',
  phoneHref: '',
  emailUser: 'fsimard',
  emailDomain: 'dramisinfo.com',
  city: "L'Assomption, Québec",
  linkedin: 'https://www.linkedin.com/in/frederic-morais-simard-a334796/',
} as const;

export const ui = {
  /* ------------------------------------------------------------------ FR */
  fr: {
    meta: {
      title: 'DramisInfo — Systèmes sur mesure pour les PME du Québec',
      description:
        "Suivi de production, gestion documentaire, planification, soumissions : des systèmes taillés pour votre façon de travailler, livrés en semaines et à prix fixe. L'Assomption, Lanaudière.",
    },

    nav: {
      items: [
        { label: 'Vos irritants', href: '#irritants' },
        { label: 'Ce que je construis', href: '#solutions' },
        { label: 'La démarche', href: '#demarche' },
        { label: 'Profil', href: '#profil' },
      ],
      cta: 'Parlons-en',
      menu: 'Menu',
    },

    hero: {
      label: "L'Assomption · Lanaudière et couronne nord",
      titleA: 'Le logiciel sur mesure',
      titleAccent: "n'est plus réservé",
      titleB: 'aux grandes entreprises.',
      lead: "Vos opérations tiennent dans des tableurs, des classeurs et la mémoire de deux personnes. J'ai passé vingt-cinq ans à bâtir des plateformes pour des organisations de milliers d'employés. Je construis aujourd'hui les mêmes outils pour des entreprises d'ici — en semaines, et pour une fraction du prix d'autrefois.",
      ctaPrimary: 'Parlons 45 minutes',
      ctaSecondary: 'Voir la démarche',
      note: 'Première rencontre gratuite, chez vous, sans engagement.',
      statLabel: 'Repères',
      stats: [
        { value: '25', unit: 'ans', caption: "en architecture de systèmes d'entreprise" },
        { value: '10-100', unit: 'employés', caption: 'la taille des entreprises avec qui je travaille' },
        { value: '0', unit: '$ / mois', caption: 'aucune licence récurrente : vous payez une fois, le système vous appartient' },
      ],
    },

    problem: {
      num: '01',
      label: 'Le quotidien',
      title: 'Ce qui vous coûte du temps sans jamais paraître urgent',
      lead: "Aucun de ces irritants n'arrête l'entreprise. Ensemble, ils avalent plusieurs heures par semaine — et l'employé que vous cherchez depuis six mois ne viendra pas les régler.",
      items: [
        {
          title: 'Le tableur qui ne suffit plus',
          body: "Il a bien servi quand vous étiez quinze. À quarante, il se dédouble, il se corrompt, et deux personnes travaillent sur des versions différentes sans le savoir.",
        },
        {
          title: "Tout dans la tête d'une seule personne",
          body: "Si elle part demain matin, plus personne ne sait où en sont les dossiers. C'est le risque dont on ne parle jamais à voix haute.",
        },
        {
          title: 'Le papier entre deux étapes',
          body: "Bons de travail, feuilles de temps, bons de livraison. Ils se perdent, on les ressaisit, et la facturation attend deux semaines de plus.",
        },
        {
          title: 'Les soumissions refaites trois fois',
          body: "Chaque devis repart d'une page blanche, alors que quatre-vingts pour cent du contenu existe déjà quelque part dans vos fichiers.",
        },
        {
          title: 'Les logiciels qui s’ignorent',
          body: "La comptabilité ne parle pas à la production, qui ne parle pas aux ventes. Quelqu'un recopie, chaque semaine, les mêmes chiffres.",
        },
        {
          title: 'Le poste que vous ne comblez pas',
          body: "Six mois d'affichage, aucun candidat sérieux. Le travail, lui, ne s'est pas arrêté d'attendre.",
        },
      ],
    },

    build: {
      num: '02',
      label: 'Ce que je construis',
      title: 'Un outil qui règle un problème précis',
      lead: "Pas un progiciel à configurer pendant un an. Pas d'abonnement mensuel qui grimpe chaque année. Un système taillé pour votre façon de travailler — et qui vous appartient.",
      items: [
        {
          title: 'Suivi de production et bons de travail',
          body: "Ce qui est en cours, où c'est rendu, qui s'en occupe. Consultable sur le plancher comme au bureau, sur téléphone comme sur ordinateur.",
          points: ['Tableau de production à jour', 'Bons de travail numériques', 'Historique complet par commande'],
        },
        {
          title: 'Gestion documentaire et dossiers',
          body: "Les documents classés, retrouvables en quelques secondes, rattachés au bon dossier — avec les délais de conservation respectés.",
          points: ['Classement automatique', 'Recherche dans le contenu', 'Rétention et traçabilité'],
        },
        {
          title: 'Planification et répartition',
          body: "Horaires, routes, rendez-vous, affectations. Construits en quelques minutes plutôt qu'en soirées de fin de semaine.",
          points: ['Planification assistée', "Vue d'ensemble des ressources", 'Ajustements en cours de journée'],
        },
        {
          title: 'Soumissions et devis',
          body: "Un devis monté à partir de ce que vous avez déjà vendu, plutôt qu'à partir de rien. Le même prix pour le même travail, à chaque fois.",
          points: ['Bibliothèque de prix et de contenus', 'Génération du document final', 'Suivi des devis envoyés'],
        },
        {
          title: 'Ponts entre vos logiciels',
          body: "Votre comptabilité, votre système de vente et vos fichiers cessent de s'ignorer. Plus personne ne recopie quoi que ce soit.",
          points: ['Connexion des systèmes en place', 'Synchronisation automatique', 'Fin de la double saisie'],
        },
        {
          title: 'Conformité et registres',
          body: "Les preuves qu'exigent un ordre professionnel, un ministère ou votre assureur — tenues à jour sans que personne n'y pense.",
          points: ['Registres tenus automatiquement', 'Pistes de vérification', 'Rapports sur demande'],
        },
      ],
    },

    process: {
      num: '03',
      label: 'La démarche',
      title: "Trois étapes, et rien à signer avant la troisième",
      lead: "Je ne vends pas de licence et je ne facture pas à l'heure. Vous payez un prix convenu d'avance pour un résultat convenu d'avance.",
      steps: [
        {
          title: 'Une conversation de 45 minutes',
          body: "Je me déplace chez vous. Vous me racontez comment ça fonctionne et où ça coince. Je ne propose rien ce jour-là — je veux d'abord comprendre. C'est gratuit et sans suite obligée.",
        },
        {
          title: 'Un croquis, en quelques jours',
          body: "Je reviens avec une maquette qui fonctionne, bâtie à partir de ce que j'ai compris. Vous voyez concrètement de quoi on parle, au lieu d'un devis de douze pages. Toujours sans engagement.",
        },
        {
          title: 'Une livraison à prix fixe',
          body: "Si on continue, le prix et la date sont fixés avant qu'une ligne soit écrite. À la fin, le système vous appartient et il peut être hébergé où vous voulez, y compris chez vous.",
        },
      ],
    },

    why: {
      num: '04',
      label: 'Pourquoi maintenant',
      title: "L'économie du logiciel sur mesure a changé",
      lead: "Un outil taillé sur mesure coûtait six chiffres et douze mois. C'est ce qui l'a tenu hors de portée des PME pendant vingt ans. Ce n'est plus vrai, et voici pourquoi.",
      figures: [
        { source: 'Mon laboratoire', value: '16', unit: 'jours', caption: "pour bâtir une plateforme complète, conteneurisée, testée et déployée" },
        { source: 'Donnée de marché', value: '61', unit: '%', caption: "des PME québécoises nomment la main-d'œuvre comme premier frein à leur croissance" },
        { source: 'Donnée de marché', value: '12,7', unit: '%', caption: "des entreprises du Québec avaient intégré l'IA à leur production en 2025" },
      ],
      figuresNote: "Le banc d'essai n'était pas un mandat client, et chaque projet a sa propre durée : ce chiffre montre ce qui est devenu possible, pas un délai promis.",
      points: [
        {
          title: "Ce qui ne change pas, c'est la rigueur",
          body: "Vingt-cinq ans à bâtir des plateformes d'entreprise m'ont appris ce qui casse en production, six mois après la livraison. Livrer vite ne sert à rien si personne ne peut entretenir le résultat.",
        },
        {
          title: "Ce qui change, c'est qui écrit le code",
          body: "Je ne l'écris plus ligne par ligne : je dirige des agents spécialisés qui rédigent, testent et vérifient le travail les uns des autres. C'est ce qui rend un système sur mesure réalisable pour une entreprise de quarante personnes.",
        },
        {
          title: "Et vous n'êtes prisonnier de personne",
          body: "Le code vous appartient, documenté et lisible. Pas de licence mensuelle, pas de fournisseur unique, pas de données captives. Le système peut vivre sur vos serveurs si votre secteur l'exige.",
        },
      ],
    },

    profile: {
      num: '05',
      label: 'Qui je suis',
      title: 'Frédéric Morais-Simard',
      role: 'Architecte de systèmes · fondateur de DramisInfo',
      paragraphs: [
        "Vingt-cinq ans en architecture de systèmes dans de grandes organisations : plateformes infonuagiques, gouvernance, et accélération de la livraison logicielle. J'ai passé ma carrière à faire livrer plus vite des équipes de plusieurs centaines de personnes.",
        "Je fais aujourd'hui le même travail à une autre échelle — pour des entreprises de dix à cent employés, qui n'ont jamais eu accès à ce genre d'outillage parce qu'il coûtait trop cher pour elles.",
        "Je vis à L'Assomption. Je travaille avec des entreprises de Lanaudière et de la couronne nord, en personne, parce qu'on ne comprend pas des opérations par visioconférence.",
      ],
      pathLabel: 'Parcours',
      path: [
        { role: 'Architecte de plateforme sénior', org: 'Grande organisation privée', period: 'depuis 2020' },
        { role: 'Directeur de projets T.I.', org: 'Firme nationale de services aux régimes de retraite', period: '2019 – 2020' },
        { role: 'Conseiller principal T.I.', org: 'Firme nationale de services aux régimes de retraite', period: '2012 – 2019' },
        { role: 'Conseiller en T.I.', org: 'Firme mondiale de conseil en avantages sociaux', period: '2010 – 2012' },
        { role: 'Architecte et développeur principal', org: "Firme mondiale d'administration de régimes de retraite", period: '2002 – 2010' },
      ],
      pathNote: 'Le détail nominatif des employeurs est sur LinkedIn.',
      proofLabel: 'Vérifications',
      proof: [
        { title: 'AWS Solution Architect Associate', sub: '2024' },
        { title: 'Azure Administrator Associate', sub: '2022' },
        { title: "Baccalauréat en informatique de génie", sub: 'Université Laval' },
        { title: "Prix d'architecte de l'année", sub: '2023' },
      ],
    },

    contact: {
      num: '06',
      label: 'Contact',
      title: 'Parlons 45 minutes',
      lead: "Je me déplace chez vous, vous me racontez comment ça fonctionne, et je ne vous vends rien ce jour-là. C'est gratuit et ça n'engage à rien.",
      name: 'Votre nom',
      namePh: 'Prénom et nom',
      email: 'Courriel',
      emailPh: 'vous@entreprise.com',
      phone: 'Téléphone',
      phonePh: 'Facultatif',
      company: 'Entreprise',
      companyPh: "Nom de l'entreprise",
      sector: 'Votre secteur',
      sectorPh: 'Choisir',
      sectorOpts: [
        'Fabrication',
        'Construction et métiers spécialisés',
        'Transport et distribution',
        'Services professionnels',
        'Santé et résidences pour aînés',
        'Agroalimentaire',
        'Autre',
      ],
      message: 'Ce qui vous fait perdre du temps',
      messagePh: "Quelques lignes suffisent. Pas besoin d'être précis à ce stade.",
      submit: 'Envoyer',
      direct: 'Ou joignez-moi directement',
      thanksTitle: 'Message reçu.',
      thanksBody: 'Je vous reviens en moins de deux jours ouvrables.',
      thanksBack: "Retour à l'accueil",
    },

    blog: {
      num: '07',
      label: 'Écrits',
      slug: 'blogue',
      nav: 'Écrits',
      title: 'Notes de terrain',
      lead: "Ce que j'apprends en construisant des systèmes pour des entreprises d'ici. Sans jargon, et sans prétendre que tout fonctionne du premier coup.",
      metaTitle: 'Notes de terrain — DramisInfo',
      metaDescription: "Articles sur l'automatisation des opérations en PME, l'IA appliquée au développement logiciel et ce que vingt-cinq ans d'architecture d'entreprise apprennent.",
      empty: "Le premier article s'en vient.",
      readMore: 'Lire',
      backToList: 'Tous les articles',
      published: 'Publié le',
      updated: 'Mis à jour le',
      readingTime: 'min de lecture',
      rss: 'Fil RSS',
    },

    footer: {
      tagline: 'Systèmes sur mesure pour les PME du Québec',
      rights: 'Tous droits réservés.',
      made: "Conçu et développé à L'Assomption",
    },
  },

  /* ------------------------------------------------------------------ EN */
  en: {
    meta: {
      title: 'DramisInfo — Custom systems for Québec small businesses',
      description:
        'Production tracking, document management, scheduling, quoting: systems built around the way you actually work, delivered in weeks at a fixed price. Based in Lanaudière, Québec.',
    },

    nav: {
      items: [
        { label: 'The friction', href: '#irritants' },
        { label: 'What I build', href: '#solutions' },
        { label: 'How it works', href: '#demarche' },
        { label: 'Profile', href: '#profil' },
      ],
      cta: 'Get in touch',
      menu: 'Menu',
    },

    hero: {
      label: "L'Assomption · Lanaudière, Québec",
      titleA: 'Custom software is no',
      titleAccent: 'longer reserved',
      titleB: 'for large companies.',
      lead: "Your operations live in spreadsheets, binders, and the memory of two people. I spent twenty-five years building platforms for organizations of several thousand employees. I now build the same tools for businesses here — in weeks, and for a fraction of what it used to cost.",
      ctaPrimary: "Let's talk for 45 minutes",
      ctaSecondary: 'See how it works',
      note: 'First meeting is free, at your place, no strings attached.',
      statLabel: 'At a glance',
      stats: [
        { value: '25', unit: 'years', caption: 'in enterprise systems architecture' },
        { value: '10-100', unit: 'employees', caption: 'the size of the companies I work with' },
        { value: '0', unit: '$ / month', caption: 'no recurring licence: you pay once, the system is yours' },
      ],
    },

    problem: {
      num: '01',
      label: 'Day to day',
      title: 'What costs you time without ever looking urgent',
      lead: "None of this stops the business. Together it eats several hours a week — and the employee you have been trying to hire for six months is not coming to fix it.",
      items: [
        { title: 'The spreadsheet that no longer holds', body: 'It served you well at fifteen people. At forty it duplicates, it corrupts, and two people are working on different versions without knowing it.' },
        { title: 'Everything in one person’s head', body: 'If they leave tomorrow morning, nobody knows where the files stand. That is the risk nobody says out loud.' },
        { title: 'Paper between two steps', body: 'Work orders, timesheets, delivery slips. They get lost, they get retyped, and invoicing waits another two weeks.' },
        { title: 'Quotes rebuilt three times over', body: 'Every estimate starts from a blank page, even though eighty percent of the content already exists somewhere in your files.' },
        { title: 'Software that ignores itself', body: 'Accounting does not talk to production, which does not talk to sales. Someone retypes the same numbers every week.' },
        { title: 'The role you cannot fill', body: 'Six months of postings, no serious candidate. The work did not stop waiting.' },
      ],
    },

    build: {
      num: '02',
      label: 'What I build',
      title: 'A tool that solves one specific problem',
      lead: 'Not an off-the-shelf suite you configure for a year. No monthly subscription that climbs every renewal. A system shaped around how you work — and one that belongs to you.',
      items: [
        { title: 'Production tracking and work orders', body: 'What is running, where it stands, who owns it. Readable on the floor and in the office, on a phone and on a desktop.', points: ['Live production board', 'Digital work orders', 'Full history per order'] },
        { title: 'Documents and case files', body: 'Documents filed, findable in seconds, attached to the right file — with retention rules respected.', points: ['Automatic filing', 'Full-text search', 'Retention and audit trail'] },
        { title: 'Scheduling and dispatch', body: 'Shifts, routes, appointments, assignments. Built in minutes instead of weekend evenings.', points: ['Assisted scheduling', 'Resource overview', 'Mid-day adjustments'] },
        { title: 'Quotes and estimates', body: 'An estimate assembled from what you have already sold, rather than from nothing. The same price for the same work, every time.', points: ['Price and content library', 'Final document generation', 'Follow-up on sent quotes'] },
        { title: 'Bridges between your systems', body: 'Your accounting, your sales system and your files stop ignoring each other. Nobody retypes anything.', points: ['Connect existing systems', 'Automatic synchronization', 'End of double entry'] },
        { title: 'Compliance and records', body: 'The evidence a regulator, a ministry or your insurer requires — kept current without anyone thinking about it.', points: ['Records kept automatically', 'Audit trails', 'Reports on demand'] },
      ],
    },

    process: {
      num: '03',
      label: 'How it works',
      title: 'Three steps, and nothing to sign before the third',
      lead: 'I do not sell licences and I do not bill by the hour. You pay an agreed price for an agreed result.',
      steps: [
        { title: 'A 45-minute conversation', body: 'I come to you. You tell me how things run and where they jam. I propose nothing that day — I want to understand first. Free, with no obligation to continue.' },
        { title: 'A sketch, within days', body: 'I come back with a working mock-up built from what I understood. You see concretely what we are talking about, instead of a twelve-page proposal. Still no commitment.' },
        { title: 'Fixed-price delivery', body: 'If we go ahead, price and date are set before a line is written. At the end, the system is yours and can be hosted wherever you want, including on your own servers.' },
      ],
    },

    why: {
      num: '04',
      label: 'Why now',
      title: 'The economics of custom software have changed',
      lead: 'A purpose-built tool used to cost six figures and twelve months. That is what kept it out of reach of small businesses for twenty years. It is no longer true, and here is why.',
      figures: [
        { source: 'My own lab', value: '16', unit: 'days', caption: 'to build a complete platform, containerized, tested and deployed' },
        { source: 'Market data', value: '61', unit: '%', caption: 'of Québec small businesses name labour as their top brake on growth' },
        { source: 'Market data', value: '12.7', unit: '%', caption: 'of Québec companies had AI in production in 2025' },
      ],
      figuresNote: 'The test bench was not a client engagement, and every project has its own timeline: this number shows what became possible, not a promised delivery date.',
      points: [
        { title: 'What does not change is the rigour', body: 'Twenty-five years of enterprise platforms taught me what breaks in production six months after delivery. Delivering fast is worthless if nobody can maintain the result.' },
        { title: 'What changes is who writes the code', body: 'I no longer write it line by line: I direct specialized agents that write, test and review each other’s work. That is what makes a custom system feasible for a forty-person company.' },
        { title: 'And you are locked into nothing', body: 'The code is yours, documented and readable. No monthly licence, no single vendor, no captive data. The system can live on your own servers if your sector demands it.' },
      ],
    },

    profile: {
      num: '05',
      label: 'Who I am',
      title: 'Frédéric Morais-Simard',
      role: 'Systems architect · founder of DramisInfo',
      paragraphs: [
        'Twenty-five years in systems architecture inside large organizations: cloud platforms, governance, and accelerating software delivery. I spent my career helping teams of several hundred people ship faster.',
        'I now do the same work at a different scale — for companies of ten to a hundred employees, who never had access to this kind of tooling because it cost too much.',
        "I live in L'Assomption. I work with businesses across Lanaudière and Montréal's north shore, in person, because you do not understand operations over a video call.",
      ],
      pathLabel: 'Track record',
      path: [
        { role: 'Senior platform architect', org: 'Large private organization', period: 'since 2020' },
        { role: 'IT project director', org: 'National pension services firm', period: '2019 – 2020' },
        { role: 'Senior IT consultant', org: 'National pension services firm', period: '2012 – 2019' },
        { role: 'IT consultant', org: 'Global benefits consulting firm', period: '2010 – 2012' },
        { role: 'Lead architect and developer', org: 'Global pension administration firm', period: '2002 – 2010' },
      ],
      pathNote: 'Named employers are listed on LinkedIn.',
      proofLabel: 'Credentials',
      proof: [
        { title: 'AWS Solution Architect Associate', sub: '2024' },
        { title: 'Azure Administrator Associate', sub: '2022' },
        { title: 'B.Sc. Computer Engineering', sub: 'Université Laval' },
        { title: 'Architect of the year', sub: '2023' },
      ],
    },

    contact: {
      num: '06',
      label: 'Contact',
      title: "Let's talk for 45 minutes",
      lead: 'I come to you, you tell me how things run, and I sell you nothing that day. It is free and commits you to nothing.',
      name: 'Your name',
      namePh: 'First and last name',
      email: 'Email',
      emailPh: 'you@company.com',
      phone: 'Phone',
      phonePh: 'Optional',
      company: 'Company',
      companyPh: 'Company name',
      sector: 'Your sector',
      sectorPh: 'Select',
      sectorOpts: [
        'Manufacturing',
        'Construction and trades',
        'Transport and distribution',
        'Professional services',
        'Health and seniors residences',
        'Food and agriculture',
        'Other',
      ],
      message: 'What is costing you time',
      messagePh: 'A few lines is enough. No need to be precise at this stage.',
      submit: 'Send',
      direct: 'Or reach me directly',
      thanksTitle: 'Message received.',
      thanksBody: 'I will get back to you within two business days.',
      thanksBack: 'Back to home',
    },

    blog: {
      num: '07',
      label: 'Writing',
      slug: 'blog',
      nav: 'Writing',
      title: 'Field notes',
      lead: 'What I learn building systems for businesses here. No jargon, and no pretending everything works on the first try.',
      metaTitle: 'Field notes — DramisInfo',
      metaDescription: 'Articles on automating small-business operations, AI applied to software delivery, and what twenty-five years of enterprise architecture teaches.',
      empty: 'The first article is coming.',
      readMore: 'Read',
      backToList: 'All articles',
      published: 'Published',
      updated: 'Updated',
      readingTime: 'min read',
      rss: 'RSS feed',
    },

    footer: {
      tagline: 'Custom systems for Québec small businesses',
      rights: 'All rights reserved.',
      made: "Designed and built in L'Assomption, Québec",
    },
  },
} as const;

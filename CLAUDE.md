# DramisInfo Web — site vitrine

Site public de **DramisInfo**, l'entreprise de **Frédéric Morais-Simard** (incorporée en juillet 2026).
Astro 5 · Tailwind 3 · TypeScript strict · hébergé sur **Netlify**, déploiement automatique sur push vers `main`.

---

## À qui ce site s'adresse

**Un seul lecteur : le propriétaire-exploitant d'une PME québécoise de 10 à 100 employés.**

Il a entre 45 et 60 ans, il n'est pas technique, il s'est probablement déjà fait décevoir par un
fournisseur de logiciel, et il arrive ici après avoir rencontré Frédéric ou s'être fait référer.
Il est sur son téléphone ou sur un poste de travail dans un bureau de plancher.

Le seul travail de la page : lui faire penser *« il comprend mon problème, il est sérieux, et je
peux l'appeler sans risque »*.

Secteurs visés : fabrication, construction et métiers spécialisés, transport et distribution,
services professionnels réglementés, résidences privées pour aînés, agroalimentaire.
Territoire : Lanaudière et couronne nord de Montréal.

### Ce que le site n'est plus

Jusqu'en août 2026, ce site était un CV en ligne destiné aux **agences de placement** et aux
grandes entreprises cherchant un architecte infonuagique en régie. Ce positionnement est
**abandonné**. Ne le réintroduis pas : pas de « disponible pour mandats contractuels », pas de
formulaire demandant un « type de mandat », pas de section taillée pour un recruteur.

### Règles de contenu

- **Aucun jargon technique.** Bannis : zone d'atterrissage, IDP, GitOps, DevSecOps, zéro confiance,
  AIOps, ARB, multi-région, remédiation, chemins dorés. Chacun de ces mots dit au lecteur
  « tu n'es pas assez gros pour moi ».
- **Nommer la douleur avant de parler de soi.** La section 01 décrit son quotidien, pas le parcours
  de Frédéric. Le profil vient en 05, comme réassurance.
- **Le « comment » se mentionne, ne se vend pas.** Les agents d'IA expliquent *pourquoi c'est
  devenu possible*. Ils ne sont jamais l'argument de vente.
- **Ne nommer aucun employeur, ni actuel ni passé.** Frédéric est encore salarié à temps plein et
  les codes de conduite interdisent couramment d'utiliser l'affiliation à un employeur pour
  promouvoir une activité externe. Le parcours décrit donc le **type** d'organisation
  (« firme nationale de services aux régimes de retraite ») plutôt que sa raison sociale, et le
  site renvoie à LinkedIn pour le détail nominatif — discrétion, pas dissimulation.
- **Aucun détail de projet interne.** Volumes migrés, noms de programmes, acquisitions : rien de
  tout cela n'appartient à Frédéric, et c'est assez précis pour identifier l'employeur même sans
  le nommer. Ça vaut aussi pour les descriptions de prix et de distinctions.
- **Ne pas révéler ses coûts d'intrant.** Un chiffre comme « 40 $ de calcul » devient l'ancrage de
  prix du lecteur et sabote la soumission qui suivra. On compare au prix de l'alternative que le
  client connaît, jamais à son propre coût de revient.
- **Exactitude factuelle obligatoire.** Chiffres, certifications, dates et parcours viennent de son
  CV. Toute modification doit être validée avec lui avant d'être publiée.

---

## Identité visuelle — « le registre »

L'univers du sujet est le carnet de commandes, le bon de travail, la feuille de route : ce que le
produit remplace. La page en emprunte la grammaire.

- **Grille réglée.** Des filets horizontaux séparent les rangées. **Aucune carte flottante, aucune
  ombre portée, aucun dégradé, aucun coin très arrondi.**
- **Numérotation en mono.** Chaque section porte un numéro (`01`…`06`) et une étiquette en
  majuscules espacées, dans la colonne de gauche.
- **Chiffres en tabulaire.** Classe `.tnum` partout où des nombres s'alignent.
- **Un seul accent**, le minium `#b3401c` — rouge-orangé des structures d'acier. Il sert au numéro
  de section, à un mot du titre, aux puces et au bouton principal. Nulle part ailleurs.
- **Aucune photographie.** Les images de banque d'un centre de données ont été supprimées : elles
  parlaient à un acheteur d'infonuagique, pas à un propriétaire d'atelier.

### Typographie

| Rôle | Fonte | Usage |
|---|---|---|
| Display | **Archivo** 500/600/700 | Titres, chiffres, boutons |
| Corps | **Public Sans** 400/500/600 | Texte courant |
| Mono | **IBM Plex Mono** 400/500 | Étiquettes, numéros, coordonnées, notes |

Chargées depuis Google Fonts dans `BaseLayout.astro`.

### Jetons de design

`design-tokens.mjs` à la racine est la **source unique de vérité** pour les couleurs, les fontes et
les rayons. C'est un préréglage Tailwind autonome, importé par `tailwind.config.mjs`.

Il est volontairement sans dépendance au site : le jour où un portail client existe — probablement
sur `portail.dramisinfo.com`, dans un dépôt distinct — il importe ce fichier et hérite de la même
identité, sans duplication. **Modifie les couleurs ici, jamais dans les composants.**

---

## Structure

```
src/
├── i18n/ui.ts              ← TOUT le contenu rédactionnel, fr + en
├── layouts/
│   ├── BaseLayout.astro    ← <head>, SEO, JSON-LD, révélation au défilement
│   ├── Page.astro          ← assemblage de la page d'accueil
│   └── Thanks.astro        ← page de confirmation du formulaire
├── components/
│   ├── SectionHead.astro   ← numéro + étiquette + titre + chapeau
│   ├── Header · Hero · Problem · Build · Process · WhyNow · Profile · Contact · Footer
│   └── Logo · LanguageSwitcher
└── pages/
    ├── index.astro         → /          (fr)
    ├── merci/              → /merci/    (fr)
    └── en/                 → /en/, /en/merci/
```

**Le contenu ne vit jamais dans les composants.** Toute chaîne de caractères visible se trouve dans
`src/i18n/ui.ts`, sous `fr` puis `en`. Les deux objets doivent garder exactement la même forme —
ajouter une clé d'un côté sans l'autre casse la compilation TypeScript.

Ordre des sections : Hero → 01 Irritants → 02 Ce que je construis → 03 La démarche →
04 Pourquoi maintenant (fond sombre) → 05 Profil → 06 Contact.

---

## Multilingue

`astro.config.mjs` déclare `fr` (défaut, sans préfixe) et `en` (`/en/`). `netlify.toml` redirige les
visiteurs anglophones de `/` vers `/en/` en lisant `Accept-Language` au niveau du CDN — sans
JavaScript.

Pour ajouter une langue : ajouter la clé dans `languages` et l'objet correspondant dans `ui`,
ajouter le code dans `astro.config.mjs`, créer `src/pages/<code>/index.astro` et
`src/pages/<code>/merci/index.astro` qui délèguent aux layouts partagés.

Le français est la langue de référence. L'anglais existe pour ne pas servir de page périmée ; il
mérite une relecture par un locuteur natif avant toute campagne.

---

## Formulaire de contact

Netlify Forms, entièrement déclaratif : `data-netlify="true"` plus un honeypot `bot-field`.
Aucune clé d'API, aucun service tiers. Le formulaire redirige vers `/merci/` (ou `/en/merci/`).

Les soumissions arrivent dans le tableau de bord Netlify — **penser à y activer la notification par
courriel**, sinon elles restent invisibles.

## Coordonnées et moissonnage

Le site est public : tout ce qui y figure en clair sera moissonné.

- **Aucun numéro personnel, nulle part.** `coords.phone` est volontairement vide, ce qui masque le
  téléphone partout (contact et pied de page, affichage conditionnel). Ne remplir ce champ que le
  jour où une **ligne d'affaires distincte** existe — jamais le cellulaire personnel.
- **Rien de sensible dans le JSON-LD.** Les données structurées sont conçues pour être lues par des
  machines : y mettre un numéro, c'est le servir sur un plateau. La ville et la région restent, elles
  servent le référencement local.
- **Le courriel n'apparaît jamais en clair dans le HTML** : il est reconstruit côté client depuis les
  attributs `data-eu` / `data-ed`. Ça arrête les moissonneurs simples, pas un navigateur sans
  interface — c'est un ralentisseur, pas un mur.
- Le formulaire reste le canal principal. Honeypot `bot-field` toujours actif.

### reCAPTCHA

Netlify le supporte **nativement** : ce n'est pas une option du tableau de bord mais deux attributs
de balisage — `data-netlify-recaptcha="true"` sur le `<form>` et un `<div data-netlify-recaptcha="true">`
à l'endroit du widget. Netlify injecte le script au déploiement et valide la réponse côté serveur.
Ses propres clés servent par défaut ; pour en fournir d'autres, définir `SITE_RECAPTCHA_KEY` et
`SITE_RECAPTCHA_SECRET`.

Une bascule `RECAPTCHA` en haut de `Contact.astro` l'active ou le désactive. **Elle est à `false`.**

Raison : à ce stade, une soumission perdue coûte infiniment plus cher qu'un pourriel à supprimer.
Chaque formulaire rempli peut valoir un mandat de plusieurs milliers de dollars ; le honeypot
arrête déjà les robots simples. On active reCAPTCHA le jour où le pourriel devient réellement
gênant — pas avant. Note : le widget ne s'affiche pas en développement local, seulement une fois
déployé sur Netlify.

---

## Blogue

Un fichier Markdown dans `src/content/blog/` = un article. Le nom du fichier devient l'adresse.
Schéma et règles dans `src/content.config.ts` ; gabarit commenté dans `gabarit.md`.

Les articles **ne sont pas appariés** entre les langues : chacun déclare son `lang` et
n'apparaît que dans l'index de cette langue. Traduire est un choix, jamais une obligation.

Le lien « Écrits » du menu n'apparaît que s'il existe au moins un article publié — une
étagère vide fait plus de tort que pas d'étagère du tout.

### Piège : le HTML brut dans le Markdown

**Une ligne vide à l'intérieur d'un bloc HTML referme ce bloc.** Un SVG écrit sur plusieurs
lignes aérées se retrouve donc tronqué : la balise fermante est insérée à la première ligne
vide, et tout le reste s'affiche en texte brut sous une boîte vide.

Tout bloc `<figure>`, `<svg>` ou autre HTML brut doit être **contigu, sans aucune ligne
vide**, du premier au dernier caractère. Après coup, vérifier dans le HTML généré que
`</svg>` se trouve bien après ses enfants et non avant.

### Illustrations

Pas de photos de banque. Les visuels sont des **SVG dessinés à la main**, avec les couleurs
des jetons de design : ils portent de l'information plutôt que de meubler, et ils restent
dans l'identité du registre. Une illustration donne le ton, un schéma explique un
mécanisme — ce ne sont pas les mêmes outils.

Pour ajouter une vraie image : la déposer dans `public/images/blog/` et l'appeler en
Markdown. Le style `.prose img` lui donne la pleine largeur et un filet.

## Commandes

```bash
npm install
npm run dev       # http://localhost:4321
npm run build
npm run preview
npm run lint      # tsc --noEmit
npm run favicons  # régénère les PNG depuis public/favicon.svg
npm run og        # régénère l'image de partage social (1200×630)
```

---

## Avant de publier

- `npm run lint` et `npm run build` passent.
- Aucun défilement horizontal à 375 px de large.
- Les chiffres avancés sont exacts et vérifiables.
- Aucun mot de la liste de jargon interdite n'est réapparu.
- L'employeur actuel n'est pas nommé.

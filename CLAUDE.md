# DramisInfo Web — Site vitrine

Site vitrine de l'agence **DramisInfo**, spécialisée en automatisation et intégration IA pour les PME.  
Hébergé sur **Netlify**, déploiement automatique depuis GitHub sur push vers `main`.

---

## Contexte de l'agence

### Mission

DramisInfo aide les petites et moyennes entreprises à **récupérer la valeur de leur temps** en automatisant les tâches administratives répétitives — avec ou sans intelligence artificielle. L'objectif n'est pas la technologie pour la technologie, mais des processus plus simples, plus fiables, et du temps libéré pour ce qui compte vraiment.

### Clientèle cible

PME québécoises **non familières avec l'IA ou la technologie** : commerçants, cabinets, firmes de services professionnels, entreprises manufacturières légères. Ces clients ont peur d'être pris pour des naïfs, de se faire vendre quelque chose de trop complexe, ou de perdre le contrôle de leurs processus. Le site doit les **rassurer**, pas les impressionner.

### Positionnement

- **Pas un prestataire techno** — un partenaire d'affaires qui parle le langage du client
- **Automatisation d'abord, IA quand elle mérite sa place** — la complexité s'ajoute seulement si elle apporte une valeur réelle
- **Pragmatique et mesurable** — chaque solution doit pouvoir se justifier par du temps gagné ou des erreurs évitées

### Messages clés

1. Vos équipes perdent des heures chaque semaine sur des tâches répétitives qui pourraient être automatisées.
2. Récupérer ce temps, c'est vous redonner l'avantage concurrentiel que vous avez déjà — mais qui vous échappe.
3. L'IA n'est pas une baguette magique : bien placée dans un flux fiable, elle fait toute la différence.
4. On ne commence pas grand. On commence juste, on mesure, on étend.

### Services offerts

- Automatisation de processus (déterministe + IA hybride)
- Intégration d'outils (CRM, facturation, courriel, formulaires)
- Ingénierie des flux de travail
- Conseil en adoption de l'IA

### État actuel du site (juin 2026)

La page d'accueil est en ligne avec toutes ses sections. Le **blog est le principal outil de croissance** : les articles sont partagés sur LinkedIn pour attirer des visiteurs qualifiés et établir la crédibilité de l'agence. La page d'accueil évoluera à mesure que l'offre se concrétise.

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | [Astro](https://astro.build) 5 — site statique (SSG) |
| Styles | [Tailwind CSS](https://tailwindcss.com) 3 |
| Déploiement | Netlify (CI/CD via GitHub) |
| Langage | TypeScript strict |

---

## Commandes de développement

```bash
npm install          # Installer les dépendances
npm run dev          # Serveur de développement (http://localhost:4321)
npm run build        # Build de production
npm run preview      # Prévisualiser le build
npm run lint         # Vérification TypeScript (tsc --noEmit)
npm run favicons     # Régénérer les PNG de favicon depuis public/favicon.svg
npm run banners      # Régénérer les bannières JPG de blog (1200×630)
```

---

## Structure du projet

```
/
├── public/
│   ├── images/blog/         # Bannières d'articles (1200×630 JPG)
│   ├── favicon.svg          # Source favicon (SVG)
│   └── logo.svg             # Logo lockup complet
├── scripts/
│   ├── generate-favicons.mjs
│   └── generate-blog-banners.mjs
├── src/
│   ├── components/          # Composants Astro (Header, Footer, sections, Blog…)
│   ├── content/blog/
│   │   ├── fr/              # Articles en français
│   │   └── en/              # Articles en anglais
│   ├── i18n/ui.ts           # Dictionnaire de traductions FR/EN
│   ├── layouts/BaseLayout.astro
│   ├── pages/               # Routes Astro (index, blog/[slug], en/…)
│   └── styles/global.css    # CSS global (animations, prose, visuels d'articles)
├── astro.config.mjs         # i18n : FR par défaut, EN sous /en/
├── netlify.toml             # Build + redirect langue (Accept-Language: en → /en/)
└── tailwind.config.mjs      # Palette brand (teal) + warm (neutrals chauds)
```

---

## Logo et favicon

**Logo de l'en-tête** : remplacer `public/logo.svg` par le logo définitif.
- Format SVG, lockup horizontal, fond transparent, lisible sur fond clair
- Affiché à 32 px de haut (`src/components/Logo.astro`)

**Favicon** : remplacer `public/favicon.svg` puis :

```bash
npm run favicons
```

Génère : `favicon-16/32.png`, `apple-touch-icon.png` (180×180), `icon-192/512.png`.

---

## Blog — Guide complet de rédaction

### Principes éditoriaux

| Règle | Explication |
|---|---|
| **Données réelles uniquement** | Chaque statistique doit provenir d'une source citée et vérifiable. Pas de chiffres inventés ou approximatifs sans source. |
| **Sources de confiance** | Préférer : McKinsey, Gartner, Forrester, Réserve fédérale, SBA, Salesforce, IBM, Anthropic, publications académiques peer-reviewed. Éviter les blogs sans référence ou les communiqués de presse d'une seule entreprise. |
| **Ton accessible, pas vulgarisateur** | Parler à un propriétaire de PME intelligent mais non-technique. Pas de jargon (« LLM », « tokens », « vector DB ») sans explication. Pas de condescendance non plus. |
| **Concret avant abstrait** | Toujours illustrer un concept avec un exemple métier réel avant d'expliquer le « pourquoi » théorique. |
| **Honnêteté sur les limites** | Ne pas survendre. Si l'IA n'est pas nécessaire pour un cas, le dire. La crédibilité vient de la nuance. |
| **Message central** | Chaque article doit ramener à l'un des messages clés de l'agence : récupérer du temps, fiabiliser les processus, adopter progressivement. |

### Sujets pertinents

Exemples de thèmes alignés avec le positionnement de DramisInfo :
- Tâches répétitives coûteuses dans un secteur précis (RH, comptabilité, logistique…)
- Comparaisons automatisation simple vs IA (quand choisir quoi)
- Intégrations entre outils populaires (CRM, facturation, courriel)
- Études de cas de gains de temps mesurables
- Démystification de l'IA pour les non-techniques
- Ingénierie des processus : comment cartographier un flux avant de l'automatiser

### Structure type d'un article

```
1. Accroche — une situation que le lecteur reconnaît immédiatement (douleur réelle)
2. Les données — 1 à 2 statistiques clés qui valident le problème (avec visuels)
3. L'analyse — pourquoi ça arrive, quelle est la vraie cause
4. La solution — approche concrète, étapes, exemple
5. L'appel à l'action implicite — conclusion qui renvoie à la philosophie DramisInfo
6. Séparateur --- + mention italique de DramisInfo
7. Sources — liste avec liens
```

### Frontmatter obligatoire

```yaml
---
title: "Titre accrocheur — sous-titre si nécessaire"
description: "Une phrase (150-160 caractères) qui résume l'article et donne envie de cliquer. Utilisée pour le SEO et les aperçus LinkedIn."
pubDate: YYYY-MM-DD
lang: fr          # ou 'en' pour la version anglaise
permalink: nom-du-fichier-sans-extension   # MÊME valeur en FR et EN
icon: automate    # voir liste des icônes disponibles ci-dessous
tags: ["Tag1", "Tag2"]   # 2 tags maximum, cohérents avec les autres articles
coverImage: /images/blog/nom-de-la-banniere.jpg
---
```

**Icônes disponibles :** `automate`, `simplify`, `tools`, `idea`, `support`, `clarity`, `compass`, `bolt`, `layers`, `mail`, `crm`, `invoice`, `calendar`, `bell`, `scan`, `check`, `globe`

### Bannière (coverImage)

Chaque article doit avoir une bannière 1200×630 px générée par le script :

1. Ajouter un bloc SVG dans `scripts/generate-blog-banners.mjs` (copier un bloc existant comme modèle)
2. Choisir une palette et un motif qui reflètent le sujet (voir les 4 exemples existants)
3. Lancer `npm run banners`
4. Le fichier apparaît dans `public/images/blog/`
5. Référencer dans le frontmatter : `coverImage: /images/blog/nom.jpg`

La bannière sert aussi d'`og:image` pour LinkedIn — elle doit avoir un design soigné (fond sombre, formes géométriques de la marque, barre sarcelle en bas).

### Visuels de données dans le contenu

**Règle : chaque article doit contenir au minimum :**
- ✅ Une grille de cartes de stats (`div.stats`)
- ✅ Un graphique en barres (`figure.chart`)

Ces éléments s'animent à l'apparition et respectent `prefers-reduced-motion`.

> ⚠️ Contrainte Markdown : un bloc HTML ne doit contenir **aucune ligne vide** à l'intérieur — sinon Astro le scinde et le rendu casse. Échapper `<` en `&lt;` (ex. `&lt;30%`).

**Cartes de stats :**
```html
<div class="stats" data-reveal-group>
<div class="stat" data-reveal><span class="stat-num">40<span class="stat-unit">%+</span></span><span class="stat-label">Libellé court et précis</span></div>
<div class="stat" data-reveal><span class="stat-num">2,8<span class="stat-unit">×</span></span><span class="stat-label">Autre métrique clé</span></div>
</div>
```

**Graphique en barres :**
```html
<figure class="chart" data-reveal>
<figcaption class="chart-title">Titre du graphique — source entre parenthèses si besoin</figcaption>
<div class="bar-row"><span class="bar-label">Libellé</span><span class="bar-track"><span class="bar-fill" style="--w:55%"></span></span><span class="bar-val">55%</span></div>
<div class="bar-row"><span class="bar-label">Comparaison</span><span class="bar-track"><span class="bar-fill bar-fill--muted" style="--w:20%"></span></span><span class="bar-val bar-val--muted">20%</span></div>
<p class="chart-note">Note explicative facultative sous le graphique.</p>
</figure>
```

### Longueur cible

- **600–900 mots** (hors frontmatter et sources) : assez pour être substantiel, assez court pour être lu en entier sur LinkedIn
- Temps de lecture affiché automatiquement (200 mots/min) → viser 3–5 min

### Bilinguisme obligatoire

Chaque article doit exister en **deux fichiers** :
- `src/content/blog/fr/nom-du-fichier.md` → `lang: fr`
- `src/content/blog/en/nom-du-fichier.md` → `lang: en`
- Le champ `permalink` doit être **identique** dans les deux fichiers

La version anglaise n'est pas une traduction mot-à-mot : adapter les tournures, les références culturelles si nécessaire. Les données et la structure restent les mêmes.

### Checklist avant publication

```
[ ] Frontmatter complet (title, description, pubDate, lang, permalink, icon, tags, coverImage)
[ ] Même permalink en FR et EN
[ ] Au moins une grille de stats ET un graphique en barres
[ ] Toutes les statistiques ont une source citée
[ ] Section Sources en fin d'article avec liens cliquables
[ ] Mention DramisInfo en italique avant les Sources
[ ] Bannière générée (npm run banners) et référencée dans coverImage
[ ] npm run build passe sans erreur
[ ] npm run lint passe sans erreur
[ ] Les visuels s'affichent correctement dans le navigateur (npm run preview)
```

---

## Sécurité du formulaire & courriel

Le formulaire de contact (`src/components/Contact.astro`) est protégé en couches :
- **Honeypot** (`bot-field`) — champ caché que seuls les robots remplissent
- **Akismet** — filtrage anti-spam automatique de Netlify (aucune config)
- **reCAPTCHA** — `data-netlify-recaptcha` + le `<div data-netlify-recaptcha>` ;
  Netlify injecte le widget au déploiement (clés gérées par Netlify)

Le **courriel** n'apparaît jamais en clair dans le HTML : il est stocké en deux
attributs (`data-eu`, `data-ed`) et reconstruit côté navigateur par un petit script.
Pour le changer, modifier ces attributs dans `Contact.astro`.

**Configuration Netlify requise après déploiement :**
1. Forms → Enable form detection
2. Trigger deploy → Clear cache and deploy site
3. Configuration → Notifications → Form submission notifications → `info@dramisinfo.com`
4. Forms → Spam filters → Activer reCAPTCHA 2

> Le reCAPTCHA ne s'affiche qu'une fois déployé sur Netlify (pas en `npm run dev`).

---

## Netlify

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

- **Détection de langue** : `netlify.toml` redirige `Accept-Language: en` vers `/en/` (règle avant le catch-all).
- Variables d'environnement sensibles : dashboard Netlify uniquement, jamais dans le repo.

---

## Conventions de code

- **TypeScript strict** — pas de `any` implicite
- **Composants Astro** pour tout ce qui est UI (`.astro`)
- **Tailwind utility-first** — éviter le CSS custom sauf pour les animations complexes
- Pas de commentaires sauf pour les contraintes non évidentes
- Commits en français, messages clairs et descriptifs
- Branche de développement active → merge vers `main` déclenche le déploiement Netlify

---

## Design & identité visuelle

- **Palette** : sarcelle (`brand`, #0d9488) + neutres chauds (`warm`)
- **Typographie** : Inter (Google Fonts), weights 400/500/600/700
- **Ton visuel** : professionnel, moderne, sobre — pas de couleurs criardes, pas d'effets tape-à-l'œil
- **Animations** : subtiles, fonctionnelles (révèlent du contenu), toujours avec `prefers-reduced-motion`
- **Icônes** : SVG maison, style trait 1.5 px + accent teal signature (`src/components/Icon.astro`)

---

## Qualité

- **Accessibilité** : `alt` sur toutes les images, structure HTML sémantique, contraste WCAG AA
- **Performance** : images optimisées, lazy loading, bundle minimal (pas de dépendances inutiles)
- **SEO** : balises meta, `og:tags`, `hreflang`, `canonical` sur chaque page
- **i18n** : toute chaîne visible doit passer par `src/i18n/ui.ts` — aucun texte en dur dans les composants

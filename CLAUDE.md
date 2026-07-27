# DramisInfo Web — Site vitrine personnel

Site vitrine professionnel de **Frédéric Morais-Simard**, architecte principal en infrastructure infonuagique et entreprise autonome, opérant sous la marque **DramisInfo** comme travailleur autonome.
Hébergé sur **Netlify**, déploiement automatique depuis GitHub sur push vers `main`.

---

## Contexte professionnel

### Mission

Frédéric offre son expertise en architecture infonuagique et en transformation d'entreprise à des organisations qui ont besoin d'un architecte principal expérimenté pour des mandats contractuels — que ce soit par l'entremise d'agences de placement ou directement auprès d'entreprises clientes.

### Clientèle cible

**Agences de placement / recrutement T.I.** évaluant son profil pour des mandats contractuels, et **entreprises clientes** (grandes organisations, comités d'architecture, VP T.I.) cherchant un architecte principal capable de livrer, pas seulement de conseiller. Cette clientèle est technique et exigeante — le site doit démontrer la crédibilité par l'échelle des réalisations concrètes, les certifications et le parcours, pas par un argumentaire de vente.

### Positionnement

- **Stratège et praticien** — pas seulement des recommandations, une feuille de route livrée sur le terrain
- **Échelle prouvée** — zones d'atterrissage AWS multi-région, migrations de plusieurs milliers de serveurs, plateformes internes développeurs à l'échelle de l'entreprise
- **Bilingue et habitué aux instances de gouvernance** — présentations aux VP et comités d'architecture (ARB) en français comme en anglais

### Messages clés

1. Plus de 20 ans d'expérience comme stratège et praticien — de la vision architecturale à la livraison concrète.
2. Échelle prouvée : une des 10 plus grandes migrations AWS en Amérique du Nord, plus de 4 000 serveurs migrés dans les délais.
3. Expertise couvrant la stratégie multi-nuage, le DevSecOps/GitOps, les plateformes internes développeurs (IDP), la sécurité zéro confiance et l'entreprise autonome/AIOps.
4. Disponible pour mandats contractuels via agences de placement ou directement auprès d'entreprises clientes.

### Expertise offerte

- Stratégie multi-nuage (AWS, Azure)
- Entreprise autonome & AIOps
- DevSecOps / GitOps
- Plateforme interne développeurs (IDP)
- Sécurité zéro confiance
- Modernisation infonuagique
- Gouvernance & standards d'architecture

### État actuel du site (juillet 2026)

La page d'accueil est en ligne avec toutes ses sections (profil, expertise, parcours professionnel, réalisations, certifications, contact). Le contenu provient du CV de Frédéric et doit rester factuellement exact — toute mise à jour de parcours ou de certifications doit d'abord être vérifiée avec lui. Il n'y a pas de blog actuellement.

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
```

---

## Structure du projet

```
/
├── public/
│   ├── favicon.svg          # Source favicon (SVG)
│   └── logo.svg             # Logo lockup complet
├── scripts/
│   └── generate-favicons.mjs
├── src/
│   ├── components/          # Composants Astro (Header, Footer, sections de la page d'accueil)
│   ├── i18n/ui.ts           # Dictionnaire de traductions FR/EN
│   ├── layouts/BaseLayout.astro
│   ├── pages/               # Routes Astro (index, en/)
│   └── styles/global.css    # CSS global (animations)
├── astro.config.mjs         # i18n : FR par défaut, EN sous /en/
├── netlify.toml             # Build + redirect langue (Accept-Language: en → /en/)
└── tailwind.config.mjs      # Palette brand (teal) + warm (neutrals chauds)
```

---

## Logo et favicon

**Logo de l'en-tête** : `public/logo.svg` — la marque DramisInfo est conservée.
- Format SVG, lockup horizontal, fond transparent, lisible sur fond clair
- Affiché à 32 px de haut (`src/components/Logo.astro`)

**Favicon** : remplacer `public/favicon.svg` puis :

```bash
npm run favicons
```

Génère : `favicon-16/32.png`, `apple-touch-icon.png` (180×180), `icon-192/512.png`.

---

## Sections de la page d'accueil

Ordre actuel : Hero → Profil (About) → Expertise (Services) → Comment je m'intègre à un mandat (HowItWorks) → Parcours professionnel (AdoptionFramework, carrousel) → Réalisations clés (UseCases) → Certifications & reconnaissances → Contact.

Tout le contenu passe par `src/i18n/ui.ts` (voir section i18n ci-dessous). Les noms de fichiers de composants reflètent encore leur rôle d'origine (ex. `UseCases.astro` affiche maintenant les réalisations, `AdoptionFramework.astro` affiche le parcours professionnel) — le contenu et les identifiants d'ancrage (`#apropos`, `#expertise`, `#demarche`, `#parcours`, `#realisations`, `#certifications`, `#contact`) sont à jour.

Toute donnée factuelle (dates, titres de poste, employeurs, certifications, réalisations chiffrées) doit rester fidèle au CV de Frédéric — ne pas inventer ou arrondir des chiffres.

---

## Sécurité du formulaire & courriel

Le formulaire de contact (`src/components/Contact.astro`) est protégé en couches :
- **Honeypot** (`bot-field`) — champ caché que seuls les robots remplissent
- **Akismet** — filtrage anti-spam automatique de Netlify (aucune config)
- **reCAPTCHA** — `data-netlify-recaptcha` + le `<div data-netlify-recaptcha>` ;
  Netlify injecte le widget au déploiement (clés gérées par Netlify)

Le **courriel** n'apparaît jamais en clair dans le HTML : il est stocké en deux
attributs (`data-eu`, `data-ed`) et reconstruit côté navigateur par un petit script.
Adresse actuelle : `fsimard@dramisinfo.com`. Pour la changer, modifier ces attributs dans `Contact.astro`.

**Configuration Netlify requise après déploiement :**
1. Forms → Enable form detection
2. Trigger deploy → Clear cache and deploy site
3. Configuration → Notifications → Form submission notifications → `fsimard@dramisinfo.com`
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

- **Palette** : sarcelle (`brand`, #0d9488) + neutres chauds (`warm`) + navy (sections sombres)
- **Typographie** : Inter (Google Fonts), weights 400/500/600/700
- **Ton visuel** : professionnel, sobre, crédible — pas de couleurs criardes, pas d'effets tape-à-l'œil
- **Animations** : subtiles, fonctionnelles (révèlent du contenu), toujours avec `prefers-reduced-motion`
- **Icônes** : SVG maison, style trait 1.5 px + accent teal signature (`src/components/Icon.astro`)

---

## Qualité

- **Accessibilité** : `alt` sur toutes les images, structure HTML sémantique, contraste WCAG AA
- **Performance** : images optimisées, lazy loading, bundle minimal (pas de dépendances inutiles)
- **SEO** : balises meta, `og:tags`, `hreflang`, `canonical` sur chaque page, schéma `Person` JSON-LD dans `BaseLayout.astro`
- **i18n** : toute chaîne visible doit passer par `src/i18n/ui.ts` — aucun texte en dur dans les composants

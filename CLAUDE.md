# DramisInfo Web — Landing Page

Site vitrine de l'agence d'intelligence artificielle **DramisInfo**.  
Hébergé sur **Netlify**, intégré directement depuis GitHub (déploiement automatique sur push vers `main`).

---

## Stack technique

| Couche | Technologie |
|---|---|
| Framework | [Astro](https://astro.build) — site statique, SSG |
| Styles | [Tailwind CSS](https://tailwindcss.com) |
| Déploiement | Netlify (CI/CD via GitHub) |
| Langage | TypeScript (strict) |

---

## Commandes de développement

```bash
# Installer les dépendances
npm install

# Serveur de développement (http://localhost:4321)
npm run dev

# Build de production
npm run build

# Prévisualiser le build
npm run preview

# Vérification TypeScript
npx tsc --noEmit

# Lint
npm run lint
```

---

## Structure du projet

```
/
├── public/              # Assets statiques (images, fonts, favicon)
├── src/
│   ├── components/      # Composants Astro réutilisables
│   ├── layouts/         # Layouts de page (BaseLayout, etc.)
│   ├── pages/           # Pages (index.astro = page d'accueil)
│   └── styles/          # CSS global si nécessaire
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── netlify.toml
```

---

## Netlify

Le fichier `netlify.toml` à la racine configure le build :

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Variables d'environnement sensibles : configurer dans le dashboard Netlify, jamais dans le repo.

---

## Conventions de code

- **TypeScript strict** — pas de `any` implicite
- **Composants Astro** pour tout ce qui est UI (`.astro`)
- **Tailwind utility-first** — éviter le CSS custom sauf pour les animations complexes
- Pas de commentaires sauf pour les contraintes non évidentes
- Commits en français, messages clairs et descriptifs
- Branche de développement : `claude/compassionate-gates-K7t8Z` → merge vers `main` déclenche le déploiement Netlify

---

## Design & contenu

L'agence DramisInfo propose des services d'intelligence artificielle (automatisation, conseil, intégration IA).

Page d'accueil : section héro, services, à propos, contact.  
Ton : professionnel, moderne, sobre. Pas de couleurs criardes.

---

## Qualité

- Accessibilité : alt sur toutes les images, structure HTML sémantique, contraste WCAG AA
- Performance : images optimisées via Astro (`<Image />`), lazy loading
- SEO : balises meta, og:tags, titre/description sur chaque page
- Pas de dépendances inutiles — garder le bundle minimal

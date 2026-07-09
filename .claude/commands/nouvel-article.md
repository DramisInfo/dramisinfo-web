# Skill : Nouvel article de blog DramisInfo

Crée un nouvel article de blog complet (FR + EN) à partir d'un sujet, en effectuant de vraies recherches pour trouver des statistiques vérifiables.

**Sujet reçu :** $ARGUMENTS

---

## Étape -1 — Sujet non précisé : recherche de tendances avant de proposer

Si `$ARGUMENTS` est vide ou trop vague pour identifier un angle précis, **ne propose pas d'options à partir de ta seule mémoire**. Fais d'abord de vraies recherches web sur les tendances récentes (derniers mois) en automatisation, IA appliquée aux PME et gestion de processus — secteurs pertinents pour la clientèle de DramisInfo (cabinets, commerçants, PME manufacturières légères, firmes de services professionnels au Québec/Amérique du Nord).

1. Dresse d'abord l'inventaire des articles déjà publiés (voir Étape 0 ci-dessous) pour connaître le terrain déjà couvert.
2. Cherche sur le web des tendances, études ou sujets d'actualité qui pourraient nourrir un article — pas seulement des mots-clés, mais de vraies pistes avec un début de donnée chiffrée derrière.
3. Élimine toute piste qui chevauche l'angle réel d'un article existant (même logique que l'Étape 0).
4. Présente à l'utilisateur **2 à 4 options concrètes et distinctes**, chacune avec : un titre de travail, une phrase expliquant l'angle, et la piste de recherche/donnée déjà repérée qui la rend crédible (pas une simple étiquette de sujet).
5. Attends la confirmation de l'utilisateur avant de poursuivre à l'Étape 1.

Si `$ARGUMENTS` contient déjà un sujet précis, passe directement à l'Étape 0.

---

## Étape 0 — Vérification de non-redondance

Avant toute recherche, dresse l'inventaire des articles déjà publiés : lis le `title`, la `description` et le **corps complet** de chaque fichier dans `src/content/blog/fr/` — pas seulement le frontmatter. Un chevauchement peut se cacher dans une section interne d'un article dont le sujet principal semble différent (ex. un article sur le courriel peut déjà couvrir en profondeur, dans une sous-section, les statistiques de délai de réponse aux formulaires web).

Compare le sujet reçu à l'**angle réel** de chaque article existant — pas seulement au mot-clé de surface ni au titre. Deux sujets peuvent sembler différents en apparence tout en couvrant le même terrain (ex. « répondre plus vite aux formulaires de soumission » recoupe l'angle déjà traité par l'article sur la boîte courriel, même sans le mot « courriel »).

- **Si le sujet chevauche fortement un article existant** : ne pas foncer dans la recherche ni l'écriture. Le signaler clairement à l'utilisateur en nommant le ou les articles concernés, expliquer en une phrase pourquoi l'angle se recoupe, puis proposer 1 à 3 angles alternatifs clairement distincts (avec une piste de recherche pour chacun). Attendre la confirmation de l'utilisateur avant de poursuivre.
- **Si un sujet précis a été explicitement donné par l'utilisateur** (et non proposé par toi) et qu'il chevauche un article existant, signale le chevauchement mais demande confirmation avant d'abandonner — l'utilisateur peut vouloir un angle complémentaire assumé.
- **Si le sujet est clairement distinct**, poursuivre normalement à l'étape 1.

---

## Étape 1 — Recherche web

Effectue des recherches web approfondies sur le sujet pour trouver :

- 3 à 5 statistiques récentes (≤ 3 ans), chiffrées et attribuées à une source crédible (McKinsey, Gartner, Forrester, Réserve fédérale, SBA, Salesforce, IBM, Anthropic, publications académiques)
- Les sources complètes avec URL réel et vérifiable (titre de l'étude + lien)
- 1 à 2 exemples concrets ou cas d'usage métier liés au sujet

**Règle absolue :** aucune statistique inventée ou approximative. Si tu ne trouves pas de chiffre vérifiable pour un point, ne l'inclus pas.

---

## Étape 2 — Planification de l'article

Avant d'écrire, définis :

1. **`permalink`** : slug kebab-case français court et descriptif (ex. `cout-cache-taches-administratives`)
2. **`icon`** : choix parmi `automate`, `simplify`, `tools`, `idea`, `support`, `clarity`, `compass`, `bolt`, `layers`, `mail`, `crm`, `invoice`, `calendar`, `bell`, `scan`, `check`, `globe`
3. **`tags`** : exactement 2 tags cohérents avec les articles existants — consulte `src/content/blog/fr/` pour la liste des tags déjà utilisés
4. **Nom de la bannière** : slug anglais court (ex. `admin-tasks`, `ai-smb`) — ce sera le nom du fichier JPG
5. **`pubDate`** : date du jour (2026-06-08)

---

## Étape 3 — Écriture de l'article français

Crée `src/content/blog/fr/<permalink>.md` avec la structure suivante :

### Frontmatter obligatoire

```yaml
---
title: "Titre accrocheur — sous-titre si nécessaire"
description: "Une phrase (150-160 caractères) pour le SEO et les aperçus LinkedIn."
pubDate: 2026-06-08
lang: fr
permalink: <permalink>
icon: <icon>
tags: ["Tag1", "Tag2"]
coverImage: /images/blog/<nom-banniere>.jpg
---
```

### Structure du corps (1200–1800 mots — articles approfondis, pas de survol)

1. **Accroche** : une douleur réelle que le lecteur reconnaît immédiatement
2. **Les données** : 1–2 statistiques clés avec source inline en gras
3. **Grille de stats** (obligatoire — voir gabarit ci-dessous)
4. **Graphique en barres** (obligatoire — voir gabarit ci-dessous)
5. **L'analyse** : pourquoi ça arrive, la vraie cause — développer avec nuance, pas juste l'affirmer
6. **La solution** : approche concrète, étapes ou exemple métier, développée en détail
7. **Honnêteté sur les limites** : ce que l'automatisation/l'IA ne doit pas faire dans ce contexte
8. **Conclusion** : ramène à la philosophie DramisInfo (récupérer du temps, progressivité)
9. Séparateur `---` puis mention italique de DramisInfo
10. **Section Sources** avec liens cliquables

**Liens internes obligatoires** : chaque fois que le texte fait référence à un autre article déjà publié du blog (« comme on l'a vu dans notre article sur… »), ce doit être un **lien cliquable** vers cet article — jamais juste une mention en texte. FR → `/blog/<permalink>/`, EN → `/en/blog/<permalink>/`. Repère les articles existants dans `src/content/blog/fr/` pour trouver des occasions pertinentes de faire ce lien (pas besoin d'en forcer si aucun n'est pertinent).

### Gabarit grille de stats

```html
<div class="stats" data-reveal-group>
<div class="stat" data-reveal><span class="stat-num">XX<span class="stat-unit">%</span></span><span class="stat-label">Libellé court et précis</span></div>
<div class="stat" data-reveal><span class="stat-num">X,X<span class="stat-unit">×</span></span><span class="stat-label">Autre métrique clé</span></div>
</div>
```

⚠️ Contrainte critique : **aucune ligne vide à l'intérieur d'un bloc HTML** — sinon Astro scinde le bloc et le rendu casse. Utiliser `&lt;` pour échapper `<` dans les valeurs (ex. `&lt;30%`).

### Gabarit graphique en barres

```html
<figure class="chart" data-reveal>
<figcaption class="chart-title">Titre du graphique (source)</figcaption>
<div class="bar-row"><span class="bar-label">Libellé A</span><span class="bar-track"><span class="bar-fill" style="--w:55%"></span></span><span class="bar-val">55%</span></div>
<div class="bar-row"><span class="bar-label">Libellé B</span><span class="bar-track"><span class="bar-fill bar-fill--muted" style="--w:20%"></span></span><span class="bar-val bar-val--muted">20%</span></div>
<p class="chart-note">Note explicative facultative.</p>
</figure>
```

---

## Étape 4 — Écriture de l'article anglais

Crée `src/content/blog/en/<permalink>.md` — **même `permalink`** que la version française.

Le frontmatter doit être identique sauf `lang: en`, le `title` et la `description` traduits/adaptés en anglais.

Le corps n'est **pas une traduction mot-à-mot** : adapter les tournures et références culturelles pour un lecteur anglophone, mais conserver les mêmes données, statistiques et structure.

---

## Étape 5 — Bannière SVG

Ouvre `scripts/generate-blog-banners.mjs` et ajoute un nouveau bloc `await generate(...)` à la fin, avant la dernière ligne.

**Modèle à adapter** (copie l'un des 4 blocs existants et change) :
- `name` : le nom de la bannière (ex. `'email-automation'`)
- Commentaire d'en-tête : sujet, palette, motif géométrique
- Couleurs du dégradé : varier parmi `#0f172a`, `#134e4a`, `#0c2340`, `#0f3b3a`, `#0d9488`
- Motif SVG : choisir un motif différent des 4 existants (cercles concentriques, nœuds connectés, circuit imprimé, pipeline+réseau sont déjà pris)
- La barre d'accent sarcelle `<rect x="0" y="${H - 6}" width="${W}" height="6" fill="#0d9488"/>` est **toujours obligatoire**

Exemples de nouveaux motifs : grille de points, ondes, hexagones, spirale, code à barres abstrait, engrenages, etc.

---

## Étape 6 — Génération et validation

Exécute dans l'ordre :

```bash
npm run banners        # Génère le JPG de bannière
npm run lint           # Vérifie TypeScript (doit passer sans erreur)
npm run build          # Build complet (doit passer sans erreur)
```

Si `lint` ou `build` échoue, corrige les erreurs avant de continuer.

---

## Étape 7 — Checklist finale

Vérifie chaque point avant de déclarer l'article prêt :

- [ ] Frontmatter complet sur les deux fichiers (FR + EN)
- [ ] Même `permalink` en FR et EN
- [ ] Au moins une grille de stats ET un graphique en barres dans chaque version
- [ ] Toutes les statistiques ont une source citée dans le texte
- [ ] Toute référence à un autre article du blog est un lien cliquable vers cet article
- [ ] Section Sources en fin d'article avec liens cliquables
- [ ] Mention DramisInfo en italique avant les Sources
- [ ] Bannière générée et référencée dans `coverImage`
- [ ] `npm run lint` passe sans erreur
- [ ] `npm run build` passe sans erreur

---

## Ton et positionnement

- Parler à un **propriétaire de PME intelligent mais non-technique** — pas de jargon sans explication
- **Concret avant abstrait** : illustrer avec un exemple métier réel avant d'expliquer la théorie
- **Honnêteté sur les limites** : ne pas survendre, mentionner quand l'IA n'est pas nécessaire
- Ramener à l'un des messages clés DramisInfo : récupérer du temps, fiabiliser les processus, adopter progressivement
- Longueur cible : **1200–1800 mots** (hors frontmatter et sources)

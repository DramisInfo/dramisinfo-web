---
title: "Titre de l'article"
description: "Une ou deux phrases qui donnent envie de lire. C'est ce qui s'affiche dans la liste des articles et dans les résultats de recherche."
pubDate: 2026-08-23
lang: fr
draft: true
tags: []
---

Ce fichier est un gabarit. Il ne sera **jamais publié** tant que `draft: true` reste dans
l'en-tête — il n'apparaît qu'en développement local. Duplique-le, renomme-le, et écris.

Le nom du fichier devient l'adresse de l'article : `pourquoi-jai-tue-ma-plateforme.md`
donne `dramisinfo.com/blogue/pourquoi-jai-tue-ma-plateforme/`. Des minuscules, des traits
d'union, pas d'accents.

## Ce que l'en-tête accepte

| Champ | Obligatoire | Ce que ça fait |
|---|---|---|
| `title` | oui | Titre de l'article et titre de l'onglet |
| `description` | oui | Résumé dans la liste, dans le fil RSS et pour Google |
| `pubDate` | oui | Date de publication, format `AAAA-MM-JJ` |
| `updatedDate` | non | Affichée en marge si l'article est révisé plus tard |
| `lang` | non | `fr` par défaut. Un article `en` n'apparaît que sur `/en/blog/` |
| `draft` | non | `true` garde l'article invisible en production |
| `tags` | non | Liste facultative, affichée en marge |

## Sur les langues

Les articles ne sont pas appariés entre le français et l'anglais. Tu écris en français ;
si un texte mérite d'exister en anglais, tu en crées un deuxième avec `lang: en`. Rien ne
t'oblige à tout traduire.

## Ce qui est mis en forme

Les titres de niveau deux ouvrent une section avec un filet, comme ici. Le **gras** sert à
appuyer, les [liens](https://dramisinfo.com) sont en minium souligné.

> Les citations prennent un filet vertical dans la marge.

- Les listes à puces ont des puces couleur accent
- Les tableaux, le code et les images sont gérés

Le temps de lecture est calculé automatiquement — inutile de l'écrire.

## Une suggestion pour le premier vrai article

Raconte pourquoi tu as construit une plateforme complète en seize jours, puis pourquoi tu
l'as arrêtée. C'est une histoire que personne d'autre ne peut écrire, elle démontre à la
fois ta capacité et ton jugement, et elle est infiniment plus crédible qu'une page de
services. Un dirigeant qui la lit comprend en trois minutes à qui il a affaire.

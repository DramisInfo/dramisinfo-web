---
title: "J'ai bâti deux fois l'étage que le marché allait démolir"
description: "Deux plateformes arrêtées en trois ans, et une qui tourne encore. La différence n'était pas dans la qualité du travail — elle était visible avant même de commencer, et je ne savais pas la voir."
pubDate: 2026-08-24
lang: fr
draft: false
tags:
  - Agents
  - Jugement
  - Livraison logicielle
---

Le 17 juin 2025, en une seule journée, j'ai versé dans un dépôt neuf : un document
d'architecture, la liste complète des chantiers, les recettes d'installation, un module de
stockage avec sa batterie de tests, la gestion des usagers et l'authentification.

En une journée. Comme quelqu'un qui aurait une équipe derrière lui.

Trois mois plus tard, il y avait trente-huit mille lignes, cinq services, une interface
web, et quatre-vingt-sept demandes de révision approuvées une par une. Ce n'était pas un
bricolage de fin de semaine. C'était mené comme un vrai projet.

Aujourd'hui, ce dépôt ne sert à rien. Et c'est correct.

## Ce que je cherchais

Je ne bâtissais pas un produit. Je voulais comprendre comment des agents d'intelligence
artificielle fonctionnent quand on les fait travailler ensemble — comment on leur donne des
rôles, comment ils se passent de l'information, ce qui casse quand l'un d'eux se trompe.

La seule façon honnête de comprendre ça, c'était d'en construire.

Alors j'ai construit un moteur capable de faire tourner des équipes d'agents. Puis, le
lendemain, j'en ai commencé un deuxième.

<figure>
<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
<svg viewBox="0 0 700 296" role="img" aria-labelledby="ttl-run desc-run" style="width:100%;min-width:660px;height:auto;background:#fbfaf7;border:1px solid #e6e6e6">
<title id="ttl-run">Durée de vie des deux moteurs d'agents, août et septembre 2025</title>
<desc id="desc-run">Le premier moteur, bâti sur Semantic Kernel, vit du 1er au 12 août 2025 : onze jours et 1 203 lignes. Le second, bâti sur Agno et commencé un jour après le premier, vit du 2 août au 14 septembre et atteint 12 964 lignes.</desc>
<text x="30" y="30" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#6e6e6e">CE QUE J'AI BÂTI DEUX FOIS</text>
<text x="670" y="30" text-anchor="end" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#9a9a9a">AOÛT – SEPTEMBRE 2025</text>
<line x1="30" y1="44" x2="670" y2="44" stroke="#101010" stroke-width="1.5"/>
<text x="30" y="82" font-family="ui-monospace,monospace" font-size="12.5" fill="#6e6e6e">Premier moteur</text>
<text x="30" y="99" font-family="ui-monospace,monospace" font-size="11" fill="#9a9a9a">Semantic Kernel</text>
<rect x="190" y="70" width="125" height="22" fill="#0b6a63"/>
<text x="325" y="86" font-family="ui-monospace,monospace" font-size="12" fill="#0b6a63">11 jours &#183; 1 203 lignes</text>
<text x="30" y="152" font-family="ui-monospace,monospace" font-size="12.5" fill="#6e6e6e">Second moteur</text>
<text x="30" y="169" font-family="ui-monospace,monospace" font-size="11" fill="#9a9a9a">Agno</text>
<rect x="201" y="140" width="449" height="22" fill="#6e6e6e"/>
<text x="211" y="156" font-family="ui-monospace,monospace" font-size="12" fill="#fbfaf7">44 jours &#183; 12 964 lignes</text>
<line x1="190" y1="192" x2="670" y2="192" stroke="#e6e6e6" stroke-width="1"/>
<text x="190" y="210" font-family="ui-monospace,monospace" font-size="11" fill="#9a9a9a">1er août</text>
<text x="430" y="210" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#9a9a9a">24 août</text>
<text x="650" y="210" text-anchor="end" font-family="ui-monospace,monospace" font-size="11" fill="#9a9a9a">14 septembre</text>
<line x1="30" y1="238" x2="670" y2="238" stroke="#101010" stroke-width="1.5"/>
<text x="30" y="264" font-family="ui-monospace,monospace" font-size="12.5" fill="#6e6e6e">Un jour d'intervalle entre les deux. Onze jours pour que le premier meure.</text>
</svg>
</div>
</figure>

Le premier a vécu onze jours.

Ce n'est pas de l'indécision. C'est le sol qui bougeait pendant que je bâtissais dessus.
Les outils sur lesquels je m'appuyais changeaient plus vite que ma capacité à écrire du
code par-dessus. J'ai changé de fondation en cours de route, et j'ai recommencé.

Le second a grossi jusqu'à treize mille lignes — un tiers de tout le projet.

## Puis les agents sont devenus gratuits

Pendant que je bâtissais le mien, plusieurs projets sont sortis coup sur coup. Des agents
complets, ouverts, gratuits, meilleurs que le mien, maintenus par des gens dont c'est le
métier à temps plein.

Il n'y avait plus une seule raison de continuer à écrire un moteur d'agents. Le problème
que je réglais venait de cesser d'être un problème.

J'ai arrêté en septembre.

**Je ne l'avais pas vu venir.** C'est la partie qu'il faut dire, parce qu'elle change le
sens de tout le reste. Je n'ai rien prédit. Je m'en suis aperçu, avec quelques mois de
retard, en regardant ce que d'autres publiaient. Le mérite, s'il y en a un, n'est pas dans
la prévision — il est seulement dans le fait d'avoir arrêté au lieu de finir par orgueil.

## Onze mois plus tard, j'ai recommencé

Puisque les agents existaient désormais gratuitement, le vrai problème me semblait s'être
déplacé : il ne s'agissait plus d'en construire, mais de les faire **collaborer**.

Alors j'ai bâti ça. Seize jours en août 2026, vingt-huit mille lignes, et je l'ai arrêté
avant la mise en production — [j'ai raconté ailleurs pourquoi](/blogue/tout-etait-vert/).

J'y écrivais avoir fait rechausser une roue qui existait déjà, éprouvée et gratuite : pour
mon usage réel, des outils que j'avais sous la main faisaient le travail en cent cinquante
lignes de configuration.

Je présentais ça comme un accident de parcours.

Ce n'en était pas un. C'était la deuxième fois, au même étage, à onze mois d'intervalle. Et
il a fallu que ça m'arrive deux fois pour que j'arrête de voir deux accidents et que je
commence à voir un motif.

## Le motif

<figure>
<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
<svg viewBox="0 0 700 352" role="img" aria-labelledby="ttl-mot desc-mot" style="width:100%;min-width:660px;height:auto;background:#fbfaf7;border:1px solid #e6e6e6">
<title id="ttl-mot">Trois projets, ce que chacun bâtissait et ce qu'il est devenu</title>
<desc id="desc-mot">En 2025, une plateforme pour bâtir des agents, arrêtée après trois mois et 38 153 lignes. En 2026, une plateforme pour faire collaborer des agents, arrêtée après seize jours et 28 000 lignes. Depuis 2024, la fondation personnelle du laboratoire, toujours vivante après deux ans.</desc>
<text x="30" y="30" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#6e6e6e">TROIS PROJETS</text>
<line x1="30" y1="44" x2="670" y2="44" stroke="#101010" stroke-width="1.5"/>
<text x="30" y="78" font-family="ui-monospace,monospace" font-size="12" fill="#9a9a9a">2025</text>
<text x="110" y="78" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="16" fill="#101010">Bâtir des agents</text>
<text x="110" y="98" font-family="ui-monospace,monospace" font-size="12" fill="#9a9a9a">juin → septembre &#183; 38 153 lignes</text>
<text x="670" y="82" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="17" fill="#6e6e6e">Arrêté</text>
<line x1="30" y1="120" x2="670" y2="120" stroke="#efefef" stroke-width="1"/>
<text x="30" y="154" font-family="ui-monospace,monospace" font-size="12" fill="#9a9a9a">2026</text>
<text x="110" y="154" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="16" fill="#101010">Les faire collaborer</text>
<text x="110" y="174" font-family="ui-monospace,monospace" font-size="12" fill="#9a9a9a">seize jours &#183; 28 000 lignes</text>
<text x="670" y="158" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="17" fill="#6e6e6e">Arrêté</text>
<line x1="30" y1="196" x2="670" y2="196" stroke="#efefef" stroke-width="1"/>
<text x="30" y="230" font-family="ui-monospace,monospace" font-size="12" fill="#0b6a63">2024</text>
<text x="110" y="230" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="16" fill="#0b6a63">Ma fondation à moi</text>
<text x="110" y="250" font-family="ui-monospace,monospace" font-size="12" fill="#9a9a9a">août → aujourd'hui &#183; deux ans</text>
<text x="670" y="236" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="700" font-size="22" fill="#0b6a63">Vivant</text>
<line x1="30" y1="278" x2="670" y2="278" stroke="#101010" stroke-width="1.5"/>
<text x="30" y="306" font-family="ui-monospace,monospace" font-size="12.5" fill="#6e6e6e">Les deux que j'ai arrêtées, quelqu'un d'autre les bâtissait déjà,</text>
<text x="30" y="326" font-family="ui-monospace,monospace" font-size="12.5" fill="#6e6e6e">mieux financé que moi. La troisième, personne ne la bâtira jamais.</text>
</svg>
</div>
</figure>

Pendant ces trois années, un troisième projet avançait en parallèle : mon laboratoire. Les
serveurs, les composantes communes, la chaîne qui monte un environnement complet à partir
d'un fichier de dix lignes. [Deux ans de nuits éparses](/blogue/un-probleme-que-personne-navait-encore/).

Il tourne encore aujourd'hui.

Trois projets, deux arrêts, une survivante. Longtemps j'ai lu ça comme un défaut de
caractère — la preuve que je commence des choses sans les finir.

C'est la mauvaise lecture, et il a fallu la deuxième mort pour que je la corrige.

Les deux plateformes que j'ai arrêtées avaient une chose en commun : **elles réglaient un
problème que tout le monde avait.** Or un problème que tout le monde a, c'est un marché.
Quelqu'un de mieux financé que moi était déjà en train de le régler, et il allait finir par
le donner gratuitement. Ce n'était qu'une question de mois.

Celle qui a survécu réglait un problème que personne d'autre n'avait exactement : le mien.
Mon matériel, mes contraintes, ma façon de travailler, mes trois boîtiers au sous-sol.
Aucun éditeur ne construira jamais ça, parce qu'il n'y a pas de marché pour un client.

## Le test, en une question

J'en ai déjà proposé un autre, qui sert à décider si une chose **mérite d'exister**.
Celui-ci répond à une question différente : est-ce qu'elle va **durer** ?

Il m'a coûté deux plateformes. Le voici gratuitement.

Avant de bâtir quoi que ce soit, demandez-vous : **est-ce que le problème que je règle est
le mien, ou est-ce que c'est celui de tout le monde ?**

Si c'est celui de tout le monde, quelqu'un le règle en ce moment, avec plus d'argent et
plus de monde que vous. Vous pouvez attendre. Ça deviendra gratuit, et probablement
meilleur.

Si c'est le vôtre — vos machines, vos clients, la façon dont votre atelier fonctionne
depuis vingt ans — personne ne viendra. Jamais. C'est là que le travail compte, et c'est là
qu'il dure.

## Ce que ça veut dire quand on vous vend de l'intelligence artificielle

Cette année, quelqu'un vous a probablement proposé un outil d'IA pour votre entreprise. Il
y en aura d'autres. La plupart sont bons.

Posez-leur la question : **est-ce que ce que vous me vendez règle mon problème, ou celui de
tout le monde ?**

Si c'est celui de tout le monde — écrire des courriels, résumer des documents, répondre au
téléphone — attendez. Ça s'en vient dans un outil que vous payez déjà, et ça ne coûtera
rien de plus.

Si c'est le vôtre — la façon dont vos commandes entrent, ce que votre inventaire a de
particulier, le chemin qu'un dossier parcourt chez vous — alors ça vaut la peine d'y mettre
de l'argent, parce que personne d'autre ne le fera.

C'est la seule ligne que je connaisse entre une dépense et un investissement, et je l'ai
achetée deux fois plein prix.

## Ce que j'en fais

J'ai arrêté deux plateformes en trois ans. Je ne le raconte pas par humilité de façade : je
le raconte parce que c'est exactement pour ça que je ne vous vendrai jamais de produit.

Un produit règle le problème de tout le monde. Il a une date d'expiration, et elle n'est
pas écrite dessus.

Ce que je construis pour une entreprise règle son problème à elle. Ça n'a pas de marché, ça
ne deviendra jamais gratuit, et c'est encore là dans trois ans.

Comme mon laboratoire — deux ans, et il tourne toujours.

---
title: "Tout était vert. Rien ne fonctionnait."
description: "Seize jours, 478 commits, 28 000 lignes que je n'ai pas écrites, et un backlog rédigé d'avance. Tout a fonctionné exactement comme prévu, et le résultat était inutilisable."
pubDate: 2026-08-23
lang: fr
draft: false
tags:
  - Agents
  - Livraison logicielle
---

Entre le 2 et le 18 août, j'ai fait construire une plateforme complète. Un système
d'orchestration d'agents : répartition des tâches, moteur de politiques, journal
d'audit, persistance, file d'attente pour les échecs, console d'opérateur.

<figure>
<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
<svg viewBox="0 0 700 304" role="img" aria-labelledby="ttl-inv desc-inv" style="width:100%;min-width:660px;height:auto;background:#fbfaf7;border:1px solid #d8d5ce">
<title id="ttl-inv">Inventaire de ce qui a été construit du 2 au 18 août 2026</title>
<desc id="desc-inv">Seize jours, 478 commits, 28 000 lignes de code, neuf programmes, cinq dépôts, quatorze chaînes de vérification automatique. Et zéro ligne écrite par moi.</desc>
<text x="30" y="30" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#5a6068">INVENTAIRE</text>
<text x="670" y="30" text-anchor="end" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#8b9098">2 – 18 AOÛT 2026</text>
<line x1="30" y1="44" x2="670" y2="44" stroke="#14161a" stroke-width="1.5"/>
<text x="30" y="74" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Jours</text><text x="670" y="74" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="17" fill="#14161a" style="font-variant-numeric:tabular-nums">16</text><line x1="30" y1="84" x2="670" y2="84" stroke="#e7e4dd" stroke-width="1"/><text x="30" y="103" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Commits</text><text x="670" y="103" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="17" fill="#14161a" style="font-variant-numeric:tabular-nums">478</text><line x1="30" y1="113" x2="670" y2="113" stroke="#e7e4dd" stroke-width="1"/><text x="30" y="132" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Lignes de code</text><text x="670" y="132" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="17" fill="#14161a" style="font-variant-numeric:tabular-nums">28 000</text><line x1="30" y1="142" x2="670" y2="142" stroke="#e7e4dd" stroke-width="1"/><text x="30" y="161" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Programmes</text><text x="670" y="161" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="17" fill="#14161a" style="font-variant-numeric:tabular-nums">9</text><line x1="30" y1="171" x2="670" y2="171" stroke="#e7e4dd" stroke-width="1"/><text x="30" y="190" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Dépôts</text><text x="670" y="190" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="17" fill="#14161a" style="font-variant-numeric:tabular-nums">5</text><line x1="30" y1="200" x2="670" y2="200" stroke="#e7e4dd" stroke-width="1"/><text x="30" y="219" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Chaînes de vérification automatique</text><text x="670" y="219" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="17" fill="#14161a" style="font-variant-numeric:tabular-nums">14</text><line x1="30" y1="229" x2="670" y2="229" stroke="#e7e4dd" stroke-width="1"/>
<line x1="30" y1="250" x2="670" y2="250" stroke="#14161a" stroke-width="1.5"/>
<text x="30" y="278" font-family="ui-monospace,monospace" font-size="13" fill="#b3401c">Lignes que j'ai écrites moi-même</text>
<text x="670" y="282" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="700" font-size="30" fill="#b3401c">0</text>
</svg>
</div>
</figure>

Je n'ai pas écrit une seule de ces lignes.

## Le rythme

Toujours le même. En soirée, une fois les enfants couchés, je donnais une direction aux
agents. Puis j'allais me coucher.

Le matin, je découvrais le résultat. Quarante commits, parfois plus. Des fonctionnalités
entières apparues pendant la nuit. Des tests. De la documentation.

C'était grisant, et je vais être honnête sur ce point : c'était grisant précisément parce
que je ne regardais pas de près. Je regardais si c'était vert.

## Et il y avait un plan

C'est la partie que j'ai mis le plus de temps à comprendre, parce qu'elle contredisait
l'explication facile.

Je n'étais pas parti à l'aveugle. Avant de commencer, un agent m'avait posé une série de
questions, et il en avait tiré un inventaire complet : des épiques, des user stories, le
tout rangé dans Jira. Un vrai backlog, structuré, cohérent.

Je l'ai survolé. Les titres se tenaient, l'ensemble avait l'air sérieux, et j'ai lancé la
construction.

Trois choses m'ont échappé ce jour-là.

**Les questions portaient sur le comment.** Quelle architecture, quels composants, quel
découpage, quelles technologies. Pas une seule ne portait sur le problème que ce système
devait faire disparaître, ni sur la personne qui s'en servirait. Or une question qui
commence par « comment » a déjà tranché la question « faut-il ». Je répondais avec
application à un questionnaire dont la première prémisse n'avait jamais été examinée.

**Le backlog a ensuite grossi tout seul.** Un premier jet, puis des ajouts au fil des
jours. Sauf que ces ajouts ne venaient de nulle part d'extérieur : construire le
répartiteur faisait apparaître le besoin d'un moteur de politiques, qui faisait apparaître
le besoin d'un journal d'audit, qui justifiait une console pour le consulter. Chaque
nouvelle story était parfaitement légitime *compte tenu de la précédente*. Aucune ne
remontait à un besoin humain. Le backlog se nourrissait de lui-même.

<figure>
<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
<svg viewBox="0 0 700 366" role="img" aria-labelledby="t-loop d-loop" style="width:100%;min-width:660px;height:auto;background:#fbfaf7;border:1px solid #d8d5ce">
<title id="t-loop">Le backlog se nourrit de lui-même</title>
<desc id="d-loop">Chaque composant construit fait apparaître le besoin du suivant, et le dernier relance le premier. Aucune de ces demandes ne remonte à un besoin humain.</desc>
<rect x="30" y="20" width="260" height="34" fill="none" stroke="#d8d5ce" stroke-dasharray="4 4"/>
<text x="46" y="42" font-family="ui-monospace,monospace" font-size="12" letter-spacing="1.2" fill="#8b9098">UN BESOIN HUMAIN</text>
<line x1="90" y1="58" x2="90" y2="70" stroke="#c9c5bd" stroke-width="1" stroke-dasharray="3 3"/>
<line x1="83" y1="76" x2="97" y2="88" stroke="#b3401c" stroke-width="1.5"/>
<line x1="97" y1="76" x2="83" y2="88" stroke="#b3401c" stroke-width="1.5"/>
<text x="112" y="86" font-family="ui-monospace,monospace" font-size="12" fill="#b3401c">aucun lien</text>
<rect x="30" y="96" width="500" height="38" fill="#f4f2ed" stroke="#d8d5ce"/><rect x="30" y="96" width="3" height="38" fill="#b3401c"/><text x="48" y="120" font-family="ui-monospace,monospace" font-size="12" fill="#b3401c">01</text><text x="80" y="120" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#14161a">Répartiteur de tâches</text><line x1="90" y1="138" x2="90" y2="152" stroke="#5a6068" stroke-width="1"/><path d="M86 148 L90 154 L94 148" fill="#5a6068"/><text x="106" y="153" font-family="ui-monospace,monospace" font-size="12" fill="#5a6068">fait apparaître le besoin de…</text><rect x="30" y="158" width="500" height="38" fill="#f4f2ed" stroke="#d8d5ce"/><rect x="30" y="158" width="3" height="38" fill="#b3401c"/><text x="48" y="182" font-family="ui-monospace,monospace" font-size="12" fill="#b3401c">02</text><text x="80" y="182" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#14161a">Moteur de politiques</text><line x1="90" y1="200" x2="90" y2="214" stroke="#5a6068" stroke-width="1"/><path d="M86 210 L90 216 L94 210" fill="#5a6068"/><text x="106" y="215" font-family="ui-monospace,monospace" font-size="12" fill="#5a6068">fait apparaître le besoin de…</text><rect x="30" y="220" width="500" height="38" fill="#f4f2ed" stroke="#d8d5ce"/><rect x="30" y="220" width="3" height="38" fill="#b3401c"/><text x="48" y="244" font-family="ui-monospace,monospace" font-size="12" fill="#b3401c">03</text><text x="80" y="244" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#14161a">Journal d'audit</text><line x1="90" y1="262" x2="90" y2="276" stroke="#5a6068" stroke-width="1"/><path d="M86 272 L90 278 L94 272" fill="#5a6068"/><text x="106" y="277" font-family="ui-monospace,monospace" font-size="12" fill="#5a6068">fait apparaître le besoin de…</text><rect x="30" y="282" width="500" height="38" fill="#f4f2ed" stroke="#d8d5ce"/><rect x="30" y="282" width="3" height="38" fill="#b3401c"/><text x="48" y="306" font-family="ui-monospace,monospace" font-size="12" fill="#b3401c">04</text><text x="80" y="306" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#14161a">Console d'opérateur</text>
<path d="M530 301 L576 301 L576 115 L536 115" fill="none" stroke="#5a6068" stroke-width="1" stroke-dasharray="4 3"/>
<path d="M542 111 L534 115 L542 119" fill="#5a6068"/>
<text x="586" y="211.0" font-family="ui-monospace,monospace" font-size="12" fill="#5a6068">et ainsi</text>
<text x="586" y="227.0" font-family="ui-monospace,monospace" font-size="12" fill="#5a6068">de suite</text>
</svg>
</div>
<figcaption style="font-family:ui-monospace,monospace;font-size:12.5px;color:#5a6068;line-height:1.6;margin-top:10px">Chaque étage justifiait le suivant. Aucun ne remontait jusqu'en haut.</figcaption>
</figure>

**Et il avait l'air d'une réflexion.** C'est le piège, et c'est celui que je signalerais en
premier à quiconque démarre aujourd'hui : un backlog bien formé qui décrit la mauvaise
chose est rigoureusement indiscernable d'un backlog bien formé qui décrit la bonne. La
cohérence n'est pas la justesse. Rien, dans la mise en forme, ne trahit la différence.

## Tout était vert

<figure>
<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
<svg viewBox="0 0 698 128" role="img" aria-labelledby="ttl-vert desc-vert" style="width:100%;min-width:660px;height:auto;background:#fbfaf7;border:1px solid #d8d5ce">
<title id="ttl-vert">Seize jours de chaînes d'intégration au vert, puis le premier usage réel</title>
<desc id="desc-vert">Du 2 au 18 août 2026, chaque journée affiche une chaîne d'intégration réussie. Le 21 août, la première utilisation réelle du système échoue.</desc>
<text x="30" y="26" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#5a6068">AOÛT 2026 — CHAÎNES D'INTÉGRATION</text>
<rect x="30" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="45.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="64" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="79.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="98" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="113.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="132" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="147.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="166" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="181.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="200" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="215.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="234" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="249.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="268" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="283.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="302" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="317.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="336" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="351.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="370" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="385.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="404" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="419.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="438" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="453.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="472" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="487.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="506" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="521.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text><rect x="540" y="46" width="30" height="30" fill="#eef3ef" stroke="#c8d6cd"/><text x="555.0" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#1f5d3f">&#10003;</text>
<text x="30" y="92" font-family="ui-monospace,monospace" font-size="11" fill="#8b9098">2 août</text>
<text x="570" y="92" text-anchor="end" font-family="ui-monospace,monospace" font-size="11" fill="#8b9098">18 août</text>
<line x1="582" y1="48" x2="582" y2="74" stroke="#d8d5ce" stroke-width="1" stroke-dasharray="3 3"/>
<rect x="606" y="46" width="62" height="30" fill="#f8e9e9" stroke="#e0b8b8"/>
<text x="637" y="66.0" text-anchor="middle" font-family="ui-monospace,monospace" font-size="15" fill="#b3401c">&#10007;</text>
<text x="637" y="92" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#b3401c">21 août</text>
</svg>
</div>
<figcaption style="font-family:ui-monospace,monospace;font-size:12.5px;color:#5a6068;line-height:1.6;margin-top:10px">Seize jours où tout passait. Le seul essai qui comptait est venu après.</figcaption>
</figure>

Et ça l'était. Systématiquement.

Les tests passaient. Les quatorze chaînes d'intégration se terminaient sans erreur. Les
images se construisaient et se poussaient. Chaque demande de fusion provoquait la création
d'un environnement éphémère dans mon cluster Kubernetes, et cet environnement démarrait.
ArgoCD affichait tout en bonne santé.

Du point de vue de tous les instruments que j'avais mis en place — et j'en ai mis
beaucoup, c'est mon métier depuis vingt-cinq ans — le projet était en excellente santé.

Puis, le 21 août, j'ai voulu m'en servir pour la première fois.

Rien ne fonctionnait vraiment.

Pas au sens où ça plantait. Les processus démarraient, les points d'entrée répondaient, les
tableaux de bord se remplissaient. Mais l'enchaînement complet, celui pour lequel tout ça
existait, ne tenait pas debout. Chaque pièce avait été vérifiée. L'ensemble, jamais.

## Ce que le bilan a révélé

En faisant l'inventaire, j'ai trouvé des choses que je n'avais pas vues passer.

Quatre modules pour brancher le système à différents outils d'exécution. Deux d'entre eux étaient
des quasi-jumeaux : environ 3 500 lignes qui faisaient essentiellement la même chose, à
quelques détails près. Je ne l'avais pas remarqué. Comment l'aurais-je remarqué — chacun
était arrivé une nuit différente, chacun avait ses tests, chacun était vert.

Un fichier de configuration de 1 010 lignes.

Et surtout : une tour de contrôle complète — le morceau qui distribue le travail, surveille
son avancement et garde la trace de tout — reconstruite avec application alors que les
outils d'automatisation courants le font déjà. J'avais fait rechausser une roue qui existe,
qui est éprouvée, et qui est gratuite.

Pour mon besoin réel — un seul environnement d'exécution, dans mon laboratoire — GitHub
Actions et un agent de codage couvraient tout, en à peu près cent cinquante lignes de
configuration.

## Personne n'a échoué

Voilà ce qui m'a pris le plus de temps à admettre.

Les agents ont construit fidèlement ce que le backlog demandait. Le code est correct. Les
tests testent les bonnes choses. L'architecture correspond au plan. À aucun moment quelque
chose n'a mal tourné.

**Chaque couche a vérifié la conformité. Aucune n'a vérifié la finalité.**

Un test vérifie que le code fait ce que la story demandait. Une revue vérifie que le code
est propre. Une chaîne d'intégration vérifie que l'ensemble compile et se déploie. Ces
instruments répondent tous à la même question — *est-ce conforme ?* — et pas un seul ne
répond à l'autre : *est-ce que ça devait exister ?*

<figure>
<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
<svg viewBox="0 0 700 332" role="img" aria-labelledby="t-pile d-pile" style="width:100%;min-width:660px;height:auto;background:#fbfaf7;border:1px solid #d8d5ce">
<title id="t-pile">Quatre couches de vérification répondent toutes à la même question</title>
<desc id="d-pile">Les tests, la revue de code, la chaîne de vérification et le déploiement vérifient tous la conformité. Aucun dispositif ne vérifie si la chose devait exister.</desc>
<text x="30" y="26" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#5a6068">CE QUI ÉTAIT VÉRIFIÉ</text>
<text x="245" y="58" text-anchor="end" font-family="ui-monospace,monospace" font-size="12.5" fill="#14161a">Tests automatisés</text><line x1="261" y1="54" x2="316" y2="54" stroke="#5a6068" stroke-width="1"/><path d="M312 50 L320 54 L312 58" fill="#5a6068"/><text x="245" y="98" text-anchor="end" font-family="ui-monospace,monospace" font-size="12.5" fill="#14161a">Revue de code</text><line x1="261" y1="94" x2="316" y2="94" stroke="#5a6068" stroke-width="1"/><path d="M312 90 L320 94 L312 98" fill="#5a6068"/><text x="245" y="138" text-anchor="end" font-family="ui-monospace,monospace" font-size="12.5" fill="#14161a">Chaîne de vérification</text><line x1="261" y1="134" x2="316" y2="134" stroke="#5a6068" stroke-width="1"/><path d="M312 130 L320 134 L312 138" fill="#5a6068"/><text x="245" y="178" text-anchor="end" font-family="ui-monospace,monospace" font-size="12.5" fill="#14161a">Déploiement</text><line x1="261" y1="174" x2="316" y2="174" stroke="#5a6068" stroke-width="1"/><path d="M312 170 L320 174 L312 178" fill="#5a6068"/>
<rect x="330" y="28" width="340" height="164" fill="#f4f2ed" stroke="#d8d5ce"/>
<text x="500.0" y="116.0" text-anchor="middle" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="17" fill="#14161a">Est-ce conforme ?</text>
<line x1="30" y1="240" x2="670" y2="240" stroke="#d8d5ce" stroke-width="1" stroke-dasharray="4 4"/>
<text x="245" y="286" text-anchor="end" font-family="ui-monospace,monospace" font-size="12.5" fill="#b8b4ac">(rien)</text>
<line x1="261" y1="282" x2="316" y2="282" stroke="#d8d5ce" stroke-width="1" stroke-dasharray="3 3"/>
<rect x="330" y="260" width="340" height="44" fill="none" stroke="#b3401c" stroke-width="1.5"/>
<text x="500.0" y="288" text-anchor="middle" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="17" fill="#b3401c">Est-ce que ça devait exister ?</text>
</svg>
</div>
<figcaption style="font-family:ui-monospace,monospace;font-size:12.5px;color:#5a6068;line-height:1.6;margin-top:10px">Quatre dispositifs pour la première question. Aucun pour la seconde.</figcaption>
</figure>

J'avais bâti une chaîne de vérification impeccable au-dessus d'une prémisse que personne
n'avait jamais examinée.

## Le goulot d'étranglement a changé de place

C'est ce que je retiens, et c'est plus optimiste que ça en a l'air.

Un flux de développement entièrement automatisé, ça fonctionne. Ce n'est plus une promesse
de conférence : j'ai vu des agents produire en seize jours ce qu'une petite équipe aurait
mis des mois à livrer, avec une qualité de code défendable.

Mais l'exécution n'est plus la contrainte. **La définition l'est devenue.**

Avec un cadre clairement posé au départ — quel problème disparaît, pour qui, et à quoi
ressemble « fini » — l'exécution est d'une rapidité qui déroute. Sans ce cadre, la même
vitesse vous emmène simplement plus loin dans la mauvaise direction, et plus vite.

Le réflexe qu'on a tous — *commençons, on verra bien en chemin* — était viable quand
commencer coûtait cher. Le prix du départ nous obligeait à réfléchir avant. Ce prix a
disparu, et rien ne l'a remplacé.

## Ce que je fais différemment

**Je n'automatise plus la question du pourquoi.** C'est la leçon la plus coûteuse et la
plus simple. On peut déléguer l'écriture du code. On peut même déléguer le découpage
technique. Mais la question de savoir si la chose mérite d'exister, celle-là s'écrit à la
main, avant de parler à quoi que ce soit.

Trois réponses écrites avant de lancer le moindre agent :

1. Quel problème précis disparaît quand ceci existe ?
2. Qui s'en sert, et à quel moment de sa journée ?
3. Qu'est-ce qui doit être vrai pour dire que c'est terminé — et qu'est-ce qui, s'il se
   révèle faux, doit nous faire arrêter ?

La troisième est celle qui manquait en août.

**Et j'exécute le parcours complet dès le premier jour**, même bancal, même avec la moitié
des pièces absentes. Le 21 août, la première utilisation réelle a détruit seize jours de
vert en une minute. Elle aurait pu le faire le troisième jour.

## Est-ce que je le referais ?

Oui. Sans hésiter, et sans les seize jours.

Je n'ai pas perdu ce temps-là : j'ai payé pour une leçon que je n'aurais pas comprise en la
lisant. Trois pièces en sont sorties qui tiennent la route : la façon dont les messages circulent
entre les agents, les règles qui décident qui a le droit de faire quoi, et la liste des
états par lesquels une tâche peut passer. Elles resserviront.

Mais je sais maintenant que la partie difficile n'a jamais été de construire. Elle a
seulement changé de place — elle est passée en amont, là où personne ne regarde, parce que
c'est la seule étape qui n'affiche jamais de voyant vert.

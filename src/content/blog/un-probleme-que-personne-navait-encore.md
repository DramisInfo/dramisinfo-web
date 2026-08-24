---
title: "J'ai passé deux ans à régler un problème que personne n'avait encore"
description: "Un vendredi soir d'août 2024, je tournais un bouton dans mon sous-sol sans savoir pourquoi. Deux ans plus tard, les agents écrivent une application en une nuit — et c'est exactement là que le vrai problème commence."
pubDate: 2026-08-24
lang: fr
draft: false
tags:
  - Plateforme
  - Agents
  - Livraison logicielle
---

Le vendredi 2 août 2024, entre 20 h et 21 h, j'ai poussé vingt-huit fois le même projet.

<figure>
<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
<svg viewBox="0 0 700 514" role="img" aria-labelledby="ttl-log desc-log" style="width:100%;min-width:660px;height:auto;background:#fbfaf7;border:1px solid #d8d5ce">
<title id="ttl-log">Ce que changeait chacun des essais du vendredi 2 août 2024, de 20 h 02 à 21 h 02</title>
<desc id="desc-log">Première demi-heure : une machine écrite à la main devient un gabarit paramétrable capable de se répéter. Seconde demi-heure : recherche du nombre maximal de machines créées d'un seul coup, de 6 à 20, avec une réduction de la mémoire par machine de 4 Go à 1 Go pour y arriver.</desc>
<text x="30" y="30" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#5a6068">CE QUE CHAQUE ESSAI CHANGEAIT</text>
<text x="670" y="30" text-anchor="end" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#8b9098">VENDREDI 2 AOÛT 2024</text>
<line x1="30" y1="44" x2="670" y2="44" stroke="#14161a" stroke-width="1.5"/>
<text x="30" y="70" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:02</text><text x="118" y="70" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Un disque écrit à la main dans le fichier</text>
<text x="30" y="89" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:03</text><text x="118" y="89" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Ce n'était pas un disque : un lecteur d'amorçage</text>
<text x="30" y="108" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:06</text><text x="118" y="108" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">La machine sort du fichier et devient un gabarit</text>
<text x="30" y="127" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:14</text><text x="118" y="127" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Chaque valeur figée devient un paramètre</text>
<text x="30" y="146" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:17</text><text x="118" y="146" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Une faute de frappe dans un nom de paramètre</text>
<text x="30" y="165" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:22</text><text x="118" y="165" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Le gabarit apprend à se répéter</text>
<text x="30" y="184" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:27</text><text x="118" y="184" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Chaque copie reçoit un identifiant unique</text>
<text x="30" y="203" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:29</text><text x="118" y="203" font-family="ui-monospace,monospace" font-size="13" fill="#5a6068">Tout est détruit</text>
<line x1="30" y1="220" x2="670" y2="220" stroke="#e7e4dd" stroke-width="1"/>
<text x="30" y="244" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#b3401c">COMBIEN DE MACHINES D'UN SEUL COUP ?</text>
<text x="30" y="270" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:35</text><text x="118" y="270" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#b3401c" style="font-variant-numeric:tabular-nums">6</text>
<text x="30" y="289" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:38</text><text x="118" y="289" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#b3401c" style="font-variant-numeric:tabular-nums">0</text>
<text x="30" y="308" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:39</text><text x="118" y="308" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#b3401c" style="font-variant-numeric:tabular-nums">3</text>
<text x="30" y="327" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:46</text><text x="118" y="327" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#b3401c" style="font-variant-numeric:tabular-nums">1</text>
<text x="30" y="346" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:47</text><text x="118" y="346" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#b3401c" style="font-variant-numeric:tabular-nums">4</text>
<text x="30" y="365" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:49</text><text x="118" y="365" font-family="ui-monospace,monospace" font-size="12.5" fill="#5a6068">mémoire par machine : 4 Go &#8594; 1 Go</text>
<text x="30" y="384" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:51</text><text x="118" y="384" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#b3401c" style="font-variant-numeric:tabular-nums">10</text>
<text x="30" y="403" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:54</text><text x="118" y="403" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="700" font-size="19" fill="#b3401c" style="font-variant-numeric:tabular-nums">20</text>
<text x="30" y="422" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">20:59</text><text x="118" y="422" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#b3401c" style="font-variant-numeric:tabular-nums">4</text>
<text x="30" y="441" font-family="ui-monospace,monospace" font-size="13" fill="#8b9098">21:02</text><text x="118" y="441" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="600" font-size="15" fill="#b3401c" style="font-variant-numeric:tabular-nums">10</text>
<line x1="30" y1="462" x2="670" y2="462" stroke="#14161a" stroke-width="1.5"/>
<text x="30" y="488" font-family="ui-monospace,monospace" font-size="12.5" fill="#5a6068">Une demi-heure à bâtir le gabarit. Une demi-heure à chercher jusqu'où il tient.</text>
</svg>
</div>
</figure>

Cette heure-là contient deux histoires.

Dans la première demi-heure, j'apprends à un serveur à se recopier lui-même. Dans la
seconde, je cherche combien de copies mes trois boîtiers peuvent porter avant de plier.
Six. Puis dix. Puis vingt.

Vingt serveurs sur trois ordinateurs de la taille d'un livre. Je ne cherchais pas à en
faire vingt — je cherchais à savoir où ça cassait.

Personne ne m'avait demandé ça. Je n'avais pas de client. J'avais trois petits ordinateurs
dans mon sous-sol et une idée fixe : je voulais que des serveurs se construisent tout
seuls, sans moi.

À minuit j'y étais encore. Je me suis relevé à quatre heures.

## Les deux factures

Quand une entreprise fait développer un logiciel, il y a deux factures. Il y a le
logiciel — et il y a l'endroit où il vit.

La deuxième, personne n'en parle avant de la recevoir. Il faut des serveurs. Il faut une
adresse, des certificats, une base de données, des copies de sauvegarde. Il faut une façon
de mettre à jour sans tout casser, et une façon de revenir en arrière quand on a tout
cassé quand même. Il faut que quelqu'un s'en occupe encore dans trois ans.

C'est cette deuxième facture qui tue les projets des petites entreprises. Le développement,
on peut le budgéter : il commence et il finit. L'hébergement, lui, saigne tous les mois, et
il exige quelqu'un.

Ce vendredi soir de 2024, sans savoir que c'était ça que je faisais, je m'attaquais à la
deuxième facture.

## Cinq jours

Le mardi 6 août à 14 h 58, ça a marché pour la première fois. Trois ensembles de serveurs
se sont construits d'affilée, sans que je touche à rien.

Le mercredi matin, j'étais debout à cinq heures. Entre 5 h 09 et 7 h 44, tout s'est
reconstruit une trentaine de fois pendant que je déjeunais.

À midi, j'ai ajouté la pièce qui manquait : un surveillant qui compare en permanence ce qui
tourne à ce qui devrait tourner, et qui corrige l'écart sans me demander la permission.

À 13 h 42, j'ai écrit noir sur blanc ce que « devrait tourner » voulait dire.

Cinq jours et dix-sept heures après ce vendredi soir.

C'est la seule partie de cette histoire qui est allée vite. Le reste a pris deux ans.

## Puis il ne s'est rien passé pendant dix-sept mois

<figure>
<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
<svg viewBox="0 0 700 372" role="img" aria-labelledby="ttl-hist desc-hist" style="width:100%;min-width:660px;height:auto;background:#fbfaf7;border:1px solid #d8d5ce">
<title id="ttl-hist">Activité mensuelle sur le projet d'infrastructure, d'août 2024 à août 2026</title>
<desc id="desc-hist">Un pic de 1 397 changements au premier mois, puis dix-sept mois de très faible activité incluant un mois complet à zéro, puis un second pic en février et mars 2026, puis un retour au calme.</desc>
<text x="30" y="30" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#5a6068">CHANGEMENTS PAR MOIS</text>
<text x="670" y="30" text-anchor="end" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#8b9098">AOÛT 2024 – AOÛT 2026</text>
<line x1="30" y1="44" x2="670" y2="44" stroke="#14161a" stroke-width="1.5"/>
<rect x="42" y="112" width="15" height="180" fill="#b3401c"/>
<line x1="38" y1="128" x2="61" y2="121" stroke="#fbfaf7" stroke-width="3"/>
<line x1="38" y1="136" x2="61" y2="129" stroke="#fbfaf7" stroke-width="3"/>
<text x="49" y="104" text-anchor="middle" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="700" font-size="14" fill="#b3401c" style="font-variant-numeric:tabular-nums">1 397</text>
<rect x="67" y="170" width="15" height="122" fill="#5a6068"/>
<rect x="92" y="283" width="15" height="9" fill="#5a6068"/>
<rect x="117" y="282" width="15" height="10" fill="#5a6068"/>
<rect x="142" y="268" width="15" height="24" fill="#5a6068"/>
<rect x="167" y="268" width="15" height="24" fill="#5a6068"/>
<rect x="192" y="287" width="15" height="5" fill="#5a6068"/>
<rect x="217" y="256" width="15" height="36" fill="#5a6068"/>
<rect x="242" y="241" width="15" height="51" fill="#5a6068"/>
<rect x="267" y="286" width="15" height="6" fill="#5a6068"/>
<rect x="292" y="233" width="15" height="59" fill="#5a6068"/>
<rect x="317" y="202" width="15" height="90" fill="#5a6068"/>
<rect x="342" y="283" width="15" height="9" fill="#5a6068"/>
<rect x="367" y="276" width="15" height="16" fill="#5a6068"/>
<rect x="392" y="289" width="15" height="3" fill="#b3401c"/>
<rect x="417" y="285" width="15" height="7" fill="#5a6068"/>
<rect x="442" y="277" width="15" height="15" fill="#5a6068"/>
<rect x="467" y="256" width="15" height="36" fill="#5a6068"/>
<rect x="492" y="121" width="15" height="171" fill="#5a6068"/>
<rect x="517" y="154" width="15" height="138" fill="#5a6068"/>
<rect x="542" y="286" width="15" height="6" fill="#5a6068"/>
<rect x="567" y="290" width="15" height="2" fill="#5a6068"/>
<rect x="592" y="288" width="15" height="4" fill="#5a6068"/>
<rect x="617" y="289" width="15" height="3" fill="#b3401c"/>
<rect x="642" y="279" width="15" height="13" fill="#5a6068"/>
<line x1="30" y1="292" x2="670" y2="292" stroke="#14161a" stroke-width="1.5"/>
<text x="49" y="312" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#8b9098">2024</text>
<text x="242" y="312" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#8b9098">2025</text>
<text x="492" y="312" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#8b9098">2026</text>
<text x="399" y="330" text-anchor="middle" font-family="ui-monospace,monospace" font-size="11" fill="#b3401c">zéro</text>
<line x1="30" y1="344" x2="670" y2="344" stroke="#e7e4dd" stroke-width="1"/>
<text x="30" y="364" font-family="ui-monospace,monospace" font-size="12.5" fill="#5a6068">115 jours actifs sur 730. Le reste du temps, la machine a tourné seule.</text>
</svg>
</div>
</figure>

Voilà la partie que je ne raconterais pas si je cherchais à impressionner quelqu'un.

Sur les sept cent trente jours qu'a duré cette histoire, j'ai touché à ce projet **cent
quinze fois**. Un jour sur six. Huit changements dans tout le mois de février 2025. Un mois
complet à zéro en octobre suivant. Cinq pauses de plus de trente-cinq jours, dont une de
cinquante-quatre.

Il y a une job à temps plein derrière ces creux, et cinq enfants.

Et pendant ces cinquante-quatre jours où je n'ai pas ouvert le projet une seule fois, le
système a continué de tourner. C'est le seul test de fiabilité qui compte vraiment, et je
ne l'ai pas conçu : il m'est arrivé.

## Août 2026 : le code devient gratuit

Deux ans plus tard, presque jour pour jour, j'ai fait construire une plateforme complète
par des agents. Seize jours, vingt-huit mille lignes, aucune écrite par moi.

Je l'ai arrêtée avant la mise en production, et j'ai déjà raconté pourquoi
[dans un autre texte](/blogue/tout-etait-vert/) : elle réglait des problèmes que je n'avais
pas encore. Ce n'est pas l'objet ici. Ce qui compte, c'est ce que ces seize jours m'ont
montré sans que je le cherche.

Écrire le logiciel n'était plus le travail.

## La lenteur faisait trois métiers

On a longtemps cru que le logiciel coûtait cher parce qu'il était difficile à écrire. C'est
vrai. Mais cette lenteur faisait trois choses que personne ne lui a jamais créditées.

**Elle rationnait.** On ne construisait pas une fonctionnalité à moins d'en avoir vraiment
besoin, parce que ça coûtait trois mois. Le prix était le filtre.

**Elle cadençait.** Le logiciel arrivait au rythme où l'entreprise pouvait l'absorber :
former le monde, ajuster les façons de faire, corriger le tir.

**Elle forçait à réfléchir.** Il fallait savoir ce qu'on voulait avant de payer pour
l'obtenir.

Les agents ont supprimé le prix. Les trois métiers sont restés vacants.

Ce n'est donc pas que la difficulté a changé de place. Elle a **disparu à un endroit
précis**, et son absence se paie ailleurs. On peut maintenant produire en une fin de
semaine plus de logiciel qu'on ne peut en héberger, en sécuriser et en entretenir dans une
année.

Le goulot d'étranglement n'a pas glissé d'un cran. Il s'est dédoublé. En amont : savoir ce
qui mérite d'exister. En aval : être capable de le faire vivre.

Le laboratoire règle l'aval. Les seize jours d'août m'ont enseigné l'amont, à mes dépens.

## Les trois choses qui séparent une idée d'un écran

<figure>
<div style="overflow-x:auto;-webkit-overflow-scrolling:touch">
<svg viewBox="0 0 700 358" role="img" aria-labelledby="ttl-lay desc-lay" style="width:100%;min-width:660px;height:auto;background:#fbfaf7;border:1px solid #d8d5ce">
<title id="ttl-lay">Les trois couches automatisées et la question d'affaires que chacune règle</title>
<desc id="desc-lay">De l'idée à l'environnement : dix lignes. L'entretien des composantes : tous les vendredis à 17 h. Le droit de se tromper sur la machine elle-même : plus de six cents reconstructions.</desc>
<text x="30" y="30" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#5a6068">TROIS COUCHES, TROIS QUESTIONS</text>
<line x1="30" y1="44" x2="670" y2="44" stroke="#14161a" stroke-width="1.5"/>
<text x="30" y="76" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#b3401c">DE L'IDÉE À L'ENVIRONNEMENT</text>
<text x="30" y="100" font-family="ui-monospace,monospace" font-size="12.5" fill="#5a6068">Combien de temps avant le premier écran ?</text>
<text x="670" y="94" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="700" font-size="26" fill="#14161a">10 lignes</text>
<line x1="30" y1="124" x2="670" y2="124" stroke="#e7e4dd" stroke-width="1"/>
<text x="30" y="164" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#b3401c">CE QUI TOURNE DESSUS</text>
<text x="30" y="188" font-family="ui-monospace,monospace" font-size="12.5" fill="#5a6068">Qu'arrive-t-il quand une composante vieillit ?</text>
<text x="670" y="182" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="700" font-size="26" fill="#14161a">Vendredi 17 h</text>
<line x1="30" y1="212" x2="670" y2="212" stroke="#e7e4dd" stroke-width="1"/>
<text x="30" y="252" font-family="ui-monospace,monospace" font-size="11" letter-spacing="1.6" fill="#b3401c">LA MACHINE ELLE-MÊME</text>
<text x="30" y="276" font-family="ui-monospace,monospace" font-size="12.5" fill="#5a6068">Combien de fois ai-je le droit de me tromper ?</text>
<text x="670" y="270" text-anchor="end" font-family="Archivo,Helvetica,Arial,sans-serif" font-weight="700" font-size="26" fill="#14161a">600 fois</text>
<line x1="30" y1="300" x2="670" y2="300" stroke="#14161a" stroke-width="1.5"/>
<text x="30" y="330" font-family="ui-monospace,monospace" font-size="12.5" fill="#5a6068">Aucune des trois questions ne porte sur le code.</text>
</svg>
</div>
</figure>

**La machine elle-même.** Elle se reconstruit d'une commande. Je l'ai refaite plus de six
cents fois en deux ans — et c'est précisément ce qui me donne le droit de me tromper. Une
équipe qui ne peut pas tout recommencer n'essaie rien.

**Ce qui tourne dessus.** Une vingtaine de composantes communes que toute application finit
par exiger : base de données, certificats, surveillance, gestion des mots de passe,
contrôle des accès. Elles sont montées une fois, pas à chaque projet. Et tous les vendredis
à 17 h, un agent vérifie si l'une d'elles a vieilli, lit ce que ses auteurs ont publié
depuis, et me propose la mise à jour avec un résumé de ce qui risque de casser. Le 21 mars,
il en a monté dix-neuf d'un coup.

**De l'idée à l'environnement.** Un fichier de dix lignes : le nom du produit, le
responsable, le code de facturation. Le reste apparaît tout seul — l'environnement,
l'adresse, les certificats, la chaîne de déploiement.

Ces mêmes dix lignes ont servi à monter l'environnement d'une plateforme d'orchestration
d'agents. Et celui d'une petite application pour suivre l'apprentissage de la propreté de
mon garçon.

C'est le meilleur argument que j'aie. Le coût d'accueillir une nouvelle idée est devenu
indépendant de la taille de l'idée.

## « Ça existe déjà, ça s'appelle Vercel »

C'est l'objection juste, et il faut y répondre.

Oui. Pour une application web neuve, sans passé, qui ne parle à rien d'autre qu'à
elle-même, ces services sont excellents et ma pile est démesurée. Je le dirai moi-même à
quiconque se trouve dans cette situation.

Ils cessent de répondre le jour où le logiciel doit toucher à quelque chose. Lire le
système comptable installé au sous-sol. Parler à une machine sur le plancher de production.
Interroger une base de données que plus personne n'ose migrer. Garder les données au
Québec. Survivre à un audit.

C'est-à-dire : le jour où on parle d'une vraie PME, avec vingt ans d'histoire derrière
elle.

Je ne compétitionne pas avec ces services. Je sers les entreprises qu'ils ne peuvent pas
servir.

## Ce que ça change pour vous

Si vous dirigez une entreprise de trente ou de cent personnes, on vous a probablement déjà
dit qu'un logiciel sur mesure était hors de prix. C'était vrai. Ça ne l'est plus tout à
fait — mais pas pour la raison qu'on vous donne.

Ce n'est pas parce que l'intelligence artificielle écrit du code. C'est parce que tout ce
qu'il y a autour du code peut maintenant être monté une seule fois et servir indéfiniment.

Ce qui coûte cher, aujourd'hui, ce n'est plus de construire. C'est de savoir quoi
construire, et d'être encore là dans trois ans pour l'entretenir.

Je n'ai pas de leçon à donner sur le premier point : j'ai perdu seize jours cet été à
construire quelque chose dont je n'avais pas besoin.

Sur le deuxième, j'ai deux ans de preuves et cinquante-quatre jours de silence.

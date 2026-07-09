// Génère les images de bannière pour les articles du blog (1200×630 px, JPG).
// Ces images servent à la fois de fond visuel dans l'en-tête de l'article et
// de og:image pour les aperçus LinkedIn / réseaux sociaux.
//   npm run banners
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const outDir = join(dirname(fileURLToPath(import.meta.url)), '..', 'public', 'images', 'blog');
mkdirSync(outDir, { recursive: true });

const W = 1200, H = 630;

async function generate(name, svgContent) {
  await sharp(Buffer.from(svgContent))
    .jpeg({ quality: 88 })
    .toFile(join(outDir, `${name}.jpg`));
  console.log(`✓ ${name}.jpg (${W}×${H})`);
}

// ──────────────────────────────────────────────────────
// Banner 1 : Tâches administratives / Productivity
// Palette : ardoise foncée → sarcelle
// Motif   : grands cercles concentriques (thème horloge/temps)
// ──────────────────────────────────────────────────────
await generate('admin-tasks', `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#0f766e"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- Cercles concentriques (coin supérieur droit) -->
  <circle cx="1000" cy="80" r="380" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.07"/>
  <circle cx="1000" cy="80" r="300" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.09"/>
  <circle cx="1000" cy="80" r="220" fill="none" stroke="#99f6e4" stroke-width="1.5" opacity="0.12"/>
  <circle cx="1000" cy="80" r="140" fill="none" stroke="#99f6e4" stroke-width="1.5" opacity="0.14"/>
  <circle cx="1000" cy="80" r="60"  fill="none" stroke="#99f6e4" stroke-width="2"   opacity="0.18"/>
  <!-- Cercle discret coin inférieur gauche -->
  <circle cx="60" cy="580" r="220" fill="none" stroke="#ffffff" stroke-width="1" opacity="0.06"/>
  <!-- Lignes horizontales à gauche (tableau de bord) -->
  <rect x="60"  y="340" width="320" height="2" rx="1" fill="#99f6e4" opacity="0.20"/>
  <rect x="60"  y="366" width="240" height="2" rx="1" fill="#99f6e4" opacity="0.14"/>
  <rect x="60"  y="392" width="180" height="2" rx="1" fill="#99f6e4" opacity="0.10"/>
  <rect x="60"  y="418" width="120" height="2" rx="1" fill="#99f6e4" opacity="0.07"/>
  <!-- Barre d'accent sarcelle en bas -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#0d9488"/>
</svg>`);

// ──────────────────────────────────────────────────────
// Banner 2 : CRM / Double saisie / Sales
// Palette : sarcelle profond → ardoise nuit
// Motif   : nœuds connectés (réseau/données)
// ──────────────────────────────────────────────────────
await generate('crm-sales', `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#134e4a"/>
      <stop offset="100%" stop-color="#0f172a"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- Connexions entre nœuds -->
  <line x1="820" y1="110" x2="1020" y2="230" stroke="#99f6e4" stroke-width="1.5" opacity="0.22"/>
  <line x1="1020" y1="230" x2="1080" y2="430" stroke="#99f6e4" stroke-width="1.5" opacity="0.18"/>
  <line x1="1080" y1="430" x2="870"  y2="510" stroke="#99f6e4" stroke-width="1.5" opacity="0.22"/>
  <line x1="870"  y1="510" x2="700"  y2="320" stroke="#99f6e4" stroke-width="1.5" opacity="0.18"/>
  <line x1="700"  y1="320" x2="820"  y2="110" stroke="#99f6e4" stroke-width="1.5" opacity="0.22"/>
  <line x1="700"  y1="320" x2="1020" y2="230" stroke="#99f6e4" stroke-width="1"   opacity="0.12"/>
  <line x1="820"  y1="110" x2="870"  y2="510" stroke="#99f6e4" stroke-width="1"   opacity="0.10"/>
  <!-- Nœuds -->
  <circle cx="820"  cy="110" r="9"  fill="#0d9488" opacity="0.90"/>
  <circle cx="1020" cy="230" r="14" fill="#14b8a6" opacity="0.90"/>
  <circle cx="1080" cy="430" r="9"  fill="#0d9488" opacity="0.85"/>
  <circle cx="870"  cy="510" r="11" fill="#0d9488" opacity="0.85"/>
  <circle cx="700"  cy="320" r="16" fill="#0d9488" opacity="0.90"/>
  <!-- Halos sur les nœuds principaux -->
  <circle cx="1020" cy="230" r="28" fill="#14b8a6" opacity="0.12"/>
  <circle cx="700"  cy="320" r="32" fill="#0d9488" opacity="0.12"/>
  <!-- Grand cercle de fond (coin bas droit) -->
  <circle cx="1100" cy="680" r="320" fill="#0d9488" opacity="0.07"/>
  <!-- Petits marqueurs verticaux côté gauche -->
  <rect x="0" y="160" width="4" height="70" rx="2" fill="#99f6e4" opacity="0.35"/>
  <rect x="12" y="180" width="4" height="50" rx="2" fill="#99f6e4" opacity="0.22"/>
  <!-- Barre d'accent -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#0d9488"/>
</svg>`);

// ──────────────────────────────────────────────────────
// Banner 3 : IA pour les PME / AI for SMBs
// Palette : bleu nuit → sarcelle lumineux
// Motif   : tracés de circuit imprimé
// ──────────────────────────────────────────────────────
await generate('ai-smb', `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0f172a"/>
      <stop offset="65%"  stop-color="#0c2340"/>
      <stop offset="100%" stop-color="#0d9488"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- Halo lumineux coin supérieur droit -->
  <circle cx="1100" cy="60"  r="260" fill="#0d9488" opacity="0.14"/>
  <circle cx="1100" cy="60"  r="160" fill="#0d9488" opacity="0.10"/>
  <circle cx="1100" cy="60"  r="80"  fill="#14b8a6" opacity="0.14"/>
  <!-- Tracés de circuit (chemin principal) -->
  <polyline points="680,50 680,160 800,160 800,290 990,290 990,190 1090,190"
    fill="none" stroke="#0d9488" stroke-width="2" opacity="0.55"/>
  <!-- Tracé secondaire -->
  <polyline points="760,380 860,380 860,470 1040,470 1040,400 1140,400"
    fill="none" stroke="#0d9488" stroke-width="2" opacity="0.40"/>
  <!-- Tracé tertiaire -->
  <polyline points="730,520 730,570 840,570 840,610 940,610"
    fill="none" stroke="#14b8a6" stroke-width="1.5" opacity="0.28"/>
  <!-- Composants / nœuds de circuit -->
  <rect x="793" y="153" width="14" height="14" rx="2" fill="#0d9488" opacity="0.85"/>
  <rect x="983" y="283" width="14" height="14" rx="2" fill="#14b8a6" opacity="0.80"/>
  <rect x="853" y="373" width="14" height="14" rx="2" fill="#0d9488" opacity="0.80"/>
  <rect x="1033" y="463" width="14" height="14" rx="2" fill="#0d9488" opacity="0.75"/>
  <!-- Points décoratifs coin inférieur gauche -->
  <circle cx="90"  cy="230" r="3" fill="#99f6e4" opacity="0.28"/>
  <circle cx="140" cy="275" r="3" fill="#99f6e4" opacity="0.22"/>
  <circle cx="75"  cy="320" r="3" fill="#99f6e4" opacity="0.25"/>
  <circle cx="195" cy="210" r="3" fill="#99f6e4" opacity="0.20"/>
  <circle cx="125" cy="365" r="3" fill="#99f6e4" opacity="0.20"/>
  <circle cx="55"  cy="405" r="3" fill="#99f6e4" opacity="0.15"/>
  <circle cx="170" cy="340" r="3" fill="#99f6e4" opacity="0.15"/>
  <!-- Barre d'accent -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#0d9488"/>
</svg>`);

// ──────────────────────────────────────────────────────
// Banner 4 : Ingénierie des flux de travail (déterministe + IA)
// Palette : ardoise nuit → sarcelle
// Motif   : à gauche un pipeline structuré (rails déterministes),
//           à droite un réseau organique (IA) ; flux qui converge
// ──────────────────────────────────────────────────────
await generate('workflow-engineering', `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0f172a"/>
      <stop offset="55%"  stop-color="#0f3b3a"/>
      <stop offset="100%" stop-color="#0d9488"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- CÔTÉ GAUCHE : pipeline déterministe (rails + étapes carrées) -->
  <g opacity="0.9">
    <line x1="120" y1="315" x2="560" y2="315" stroke="#99f6e4" stroke-width="2" opacity="0.30"/>
    <rect x="120" y="287" width="56" height="56" rx="8" fill="none" stroke="#99f6e4" stroke-width="2.5" opacity="0.45"/>
    <rect x="268" y="287" width="56" height="56" rx="8" fill="none" stroke="#99f6e4" stroke-width="2.5" opacity="0.45"/>
    <rect x="416" y="287" width="56" height="56" rx="8" fill="none" stroke="#99f6e4" stroke-width="2.5" opacity="0.45"/>
    <polyline points="135,315 146,327 163,303" fill="none" stroke="#14b8a6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
    <polyline points="283,315 294,327 311,303" fill="none" stroke="#14b8a6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
    <polyline points="431,315 442,327 459,303" fill="none" stroke="#14b8a6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.7"/>
  </g>

  <!-- POINT DE JONCTION (l'orchestration) -->
  <circle cx="600" cy="315" r="22" fill="#14b8a6" opacity="0.9"/>
  <circle cx="600" cy="315" r="40" fill="#14b8a6" opacity="0.14"/>
  <line x1="472" y1="315" x2="578" y2="315" stroke="#99f6e4" stroke-width="2" opacity="0.30"/>

  <!-- CÔTÉ DROIT : réseau organique (IA) -->
  <g opacity="0.95">
    <line x1="622" y1="315" x2="760" y2="200" stroke="#5eead4" stroke-width="1.5" opacity="0.30"/>
    <line x1="622" y1="315" x2="800" y2="380" stroke="#5eead4" stroke-width="1.5" opacity="0.30"/>
    <line x1="760" y1="200" x2="930" y2="150" stroke="#5eead4" stroke-width="1.5" opacity="0.26"/>
    <line x1="760" y1="200" x2="940" y2="300" stroke="#5eead4" stroke-width="1.5" opacity="0.22"/>
    <line x1="800" y1="380" x2="940" y2="300" stroke="#5eead4" stroke-width="1.5" opacity="0.26"/>
    <line x1="800" y1="380" x2="900" y2="490" stroke="#5eead4" stroke-width="1.5" opacity="0.22"/>
    <line x1="940" y1="300" x2="1080" y2="240" stroke="#5eead4" stroke-width="1.5" opacity="0.22"/>
    <line x1="940" y1="300" x2="1090" y2="400" stroke="#5eead4" stroke-width="1.5" opacity="0.20"/>
    <circle cx="760"  cy="200" r="11" fill="#ffffff" opacity="0.85"/>
    <circle cx="800"  cy="380" r="9"  fill="#ffffff" opacity="0.80"/>
    <circle cx="930"  cy="150" r="8"  fill="#5eead4" opacity="0.85"/>
    <circle cx="940"  cy="300" r="13" fill="#ffffff" opacity="0.85"/>
    <circle cx="900"  cy="490" r="8"  fill="#5eead4" opacity="0.75"/>
    <circle cx="1080" cy="240" r="9"  fill="#5eead4" opacity="0.80"/>
    <circle cx="1090" cy="400" r="7"  fill="#5eead4" opacity="0.70"/>
    <circle cx="940" cy="300" r="30" fill="#ffffff" opacity="0.08"/>
    <circle cx="760" cy="200" r="26" fill="#ffffff" opacity="0.08"/>
  </g>

  <!-- Barre d'accent -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#0d9488"/>
</svg>`);

// ──────────────────────────────────────────────────────
// Banner 5 : Traitement des factures fournisseurs
// Palette : bleu nuit foncé → sarcelle profond
// Motif   : documents empilés (gauche) + faisceau de scan + données structurées extraites (droite)
// ──────────────────────────────────────────────────────
await generate('invoice-automation', `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0c2340"/>
      <stop offset="60%"  stop-color="#0f2d3d"/>
      <stop offset="100%" stop-color="#0f3b3a"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- Documents empilés côté gauche -->
  <rect x="75"  y="185" width="290" height="370" rx="10" fill="none" stroke="#99f6e4" stroke-width="1"   opacity="0.12"/>
  <rect x="95"  y="165" width="290" height="370" rx="10" fill="none" stroke="#99f6e4" stroke-width="1.5" opacity="0.20"/>
  <rect x="115" y="145" width="290" height="370" rx="10" fill="#0d9488" fill-opacity="0.05" stroke="#99f6e4" stroke-width="2" opacity="0.45"/>
  <!-- Contenu simulé du document avant (facture) -->
  <rect x="150" y="195" width="180" height="10" rx="3" fill="#99f6e4" opacity="0.30"/>
  <rect x="150" y="220" width="100" height="7"  rx="2" fill="#99f6e4" opacity="0.18"/>
  <rect x="140" y="248" width="230" height="1.5"      fill="#99f6e4" opacity="0.15"/>
  <rect x="150" y="265" width="200" height="6"  rx="2" fill="#99f6e4" opacity="0.16"/>
  <rect x="150" y="283" width="150" height="6"  rx="2" fill="#99f6e4" opacity="0.14"/>
  <rect x="150" y="301" width="220" height="6"  rx="2" fill="#99f6e4" opacity="0.14"/>
  <rect x="150" y="319" width="130" height="6"  rx="2" fill="#99f6e4" opacity="0.12"/>
  <rect x="150" y="360" width="170" height="6"  rx="2" fill="#99f6e4" opacity="0.15"/>
  <rect x="150" y="378" width="120" height="6"  rx="2" fill="#99f6e4" opacity="0.14"/>
  <rect x="240" y="408" width="120" height="16" rx="4" fill="#0d9488" opacity="0.35"/>
  <!-- Faisceau de scan (ligne lumineuse + halo) -->
  <rect x="110" y="337" width="300" height="2.5" rx="1.5" fill="#14b8a6" opacity="0.75"/>
  <rect x="110" y="330" width="300" height="17"  rx="5"   fill="#14b8a6" opacity="0.07"/>
  <!-- Flèche de flux vers la droite -->
  <line x1="410" y1="338" x2="590" y2="338" stroke="#99f6e4" stroke-width="2" opacity="0.28"/>
  <polygon points="590,330 608,338 590,346" fill="#99f6e4" opacity="0.32"/>
  <!-- Données structurées extraites côté droit -->
  <rect x="635" y="175" width="90"  height="7" rx="2" fill="#5eead4" opacity="0.25"/>
  <rect x="740" y="175" width="140" height="7" rx="2" fill="#99f6e4" opacity="0.35"/>
  <rect x="635" y="205" width="90"  height="7" rx="2" fill="#5eead4" opacity="0.22"/>
  <rect x="740" y="205" width="100" height="7" rx="2" fill="#99f6e4" opacity="0.30"/>
  <rect x="635" y="235" width="90"  height="7" rx="2" fill="#5eead4" opacity="0.22"/>
  <rect x="740" y="235" width="160" height="7" rx="2" fill="#99f6e4" opacity="0.28"/>
  <rect x="625" y="260" width="490" height="1"       fill="#99f6e4" opacity="0.12"/>
  <rect x="635" y="280" width="90"  height="7" rx="2" fill="#5eead4" opacity="0.20"/>
  <rect x="740" y="280" width="120" height="7" rx="2" fill="#99f6e4" opacity="0.28"/>
  <rect x="635" y="308" width="90"  height="7" rx="2" fill="#5eead4" opacity="0.20"/>
  <rect x="740" y="308" width="80"  height="7" rx="2" fill="#99f6e4" opacity="0.28"/>
  <rect x="635" y="336" width="90"  height="7" rx="2" fill="#5eead4" opacity="0.20"/>
  <rect x="740" y="336" width="140" height="7" rx="2" fill="#14b8a6" opacity="0.40"/>
  <rect x="635" y="366" width="90"  height="7" rx="2" fill="#5eead4" opacity="0.18"/>
  <rect x="740" y="366" width="100" height="7" rx="2" fill="#99f6e4" opacity="0.25"/>
  <rect x="625" y="400" width="490" height="1"       fill="#99f6e4" opacity="0.12"/>
  <rect x="635" y="418" width="90"  height="9"  rx="2" fill="#0d9488" opacity="0.50"/>
  <rect x="740" y="416" width="120" height="13" rx="3" fill="#0d9488" opacity="0.60"/>
  <!-- Icônes de validation (checkmarks) -->
  <circle cx="1010" cy="179" r="8" fill="#0d9488" opacity="0.55"/>
  <polyline points="1006,179 1009,183 1015,175" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.90"/>
  <circle cx="1010" cy="209" r="8" fill="#0d9488" opacity="0.50"/>
  <polyline points="1006,209 1009,213 1015,205" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.90"/>
  <circle cx="1010" cy="239" r="8" fill="#0d9488" opacity="0.50"/>
  <polyline points="1006,239 1009,243 1015,235" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.90"/>
  <!-- Cercle décoratif coin bas gauche -->
  <circle cx="60" cy="590" r="200" fill="none" stroke="#99f6e4" stroke-width="1" opacity="0.05"/>
  <!-- Barre d'accent sarcelle -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#0d9488"/>
</svg>`);

// ──────────────────────────────────────────────────────
// Banner 6 : Boîte courriel / Email triage
// Palette : bleu nuit → sarcelle profond (diagonale)
// Motif   : enveloppes entrantes qui se séparent en deux flux —
//           un flux rapide automatisé (droite haute) et un flux
//           humain plus lent (droite basse)
// ──────────────────────────────────────────────────────
await generate('email-triage', `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0c2340"/>
      <stop offset="55%"  stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#134e4a"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- Enveloppes entrantes empilées (gauche) -->
  <g opacity="0.9">
    <rect x="70"  y="230" width="150" height="104" rx="8" fill="none" stroke="#99f6e4" stroke-width="1.5" opacity="0.20"/>
    <polyline points="70,238 145,290 220,238" fill="none" stroke="#99f6e4" stroke-width="1.5" opacity="0.20"/>
    <rect x="100" y="270" width="150" height="104" rx="8" fill="none" stroke="#99f6e4" stroke-width="1.5" opacity="0.30"/>
    <polyline points="100,278 175,330 250,278" fill="none" stroke="#99f6e4" stroke-width="1.5" opacity="0.30"/>
    <rect x="130" y="310" width="150" height="104" rx="8" fill="#0d9488" fill-opacity="0.06" stroke="#99f6e4" stroke-width="2" opacity="0.55"/>
    <polyline points="130,318 205,370 280,318" fill="none" stroke="#99f6e4" stroke-width="2" opacity="0.55"/>
  </g>
  <!-- Point de tri central -->
  <circle cx="430" cy="365" r="20" fill="#14b8a6" opacity="0.85"/>
  <circle cx="430" cy="365" r="36" fill="#14b8a6" opacity="0.12"/>
  <line x1="280" y1="362" x2="410" y2="365" stroke="#99f6e4" stroke-width="2" opacity="0.35"/>
  <!-- Flux rapide automatisé (vers le haut-droit) -->
  <line x1="448" y1="352" x2="640" y2="200" stroke="#5eead4" stroke-width="2" opacity="0.45"/>
  <line x1="640" y1="200" x2="900" y2="150" stroke="#5eead4" stroke-width="2" opacity="0.40"/>
  <polygon points="900,142 922,150 900,160" fill="#5eead4" opacity="0.55"/>
  <circle cx="640" cy="200" r="8" fill="#5eead4" opacity="0.75"/>
  <rect x="960" y="120" width="150" height="8" rx="4" fill="#5eead4" opacity="0.30"/>
  <rect x="960" y="142" width="110" height="8" rx="4" fill="#5eead4" opacity="0.20"/>
  <!-- Flux humain, plus lent (vers le bas-droit) -->
  <line x1="448" y1="378" x2="640" y2="480" stroke="#ffffff" stroke-width="1.5" opacity="0.30"/>
  <line x1="640" y1="480" x2="900" y2="520" stroke="#ffffff" stroke-width="1.5" opacity="0.26"/>
  <circle cx="640" cy="480" r="9" fill="#ffffff" opacity="0.55"/>
  <circle cx="900" cy="520" r="12" fill="#ffffff" opacity="0.65"/>
  <circle cx="900" cy="520" r="24" fill="#ffffff" opacity="0.08"/>
  <!-- Petits marqueurs décoratifs -->
  <circle cx="1090" cy="420" r="3" fill="#99f6e4" opacity="0.22"/>
  <circle cx="1130" cy="460" r="3" fill="#99f6e4" opacity="0.18"/>
  <circle cx="1060" cy="470" r="3" fill="#99f6e4" opacity="0.16"/>
  <!-- Barre d'accent sarcelle -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#0d9488"/>
</svg>`);

// ──────────────────────────────────────────────────────
// Banner 7 : RH / Accueil des nouveaux employés + congés
// Palette : ardoise nuit → bleu profond → sarcelle
// Motif   : liste de vérification (accueil) à gauche, se prolongeant
//           en grille de calendrier (congés) à droite, reliées par
//           une coche de validation centrale
// ──────────────────────────────────────────────────────
await generate('hr-onboarding', `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%"   stop-color="#0f172a"/>
      <stop offset="55%"  stop-color="#0c2340"/>
      <stop offset="100%" stop-color="#134e4a"/>
    </linearGradient>
  </defs>
  <rect width="${W}" height="${H}" fill="url(#bg)"/>
  <!-- Liste de vérification (accueil) côté gauche -->
  <g opacity="0.9">
    <rect x="90"  y="150" width="300" height="330" rx="12" fill="none" stroke="#99f6e4" stroke-width="1.5" opacity="0.22"/>
    <rect x="120" y="190" width="20" height="20" rx="5" fill="none" stroke="#5eead4" stroke-width="2" opacity="0.55"/>
    <polyline points="124,200 132,208 144,188" fill="none" stroke="#5eead4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
    <rect x="155" y="196" width="190" height="8" rx="3" fill="#99f6e4" opacity="0.25"/>
    <rect x="120" y="240" width="20" height="20" rx="5" fill="none" stroke="#5eead4" stroke-width="2" opacity="0.55"/>
    <polyline points="124,250 132,258 144,238" fill="none" stroke="#5eead4" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" opacity="0.85"/>
    <rect x="155" y="246" width="160" height="8" rx="3" fill="#99f6e4" opacity="0.20"/>
    <rect x="120" y="290" width="20" height="20" rx="5" fill="none" stroke="#99f6e4" stroke-width="2" opacity="0.35"/>
    <rect x="155" y="296" width="200" height="8" rx="3" fill="#99f6e4" opacity="0.16"/>
    <rect x="120" y="340" width="20" height="20" rx="5" fill="none" stroke="#99f6e4" stroke-width="2" opacity="0.30"/>
    <rect x="155" y="346" width="140" height="8" rx="3" fill="#99f6e4" opacity="0.14"/>
    <rect x="120" y="390" width="20" height="20" rx="5" fill="none" stroke="#99f6e4" stroke-width="2" opacity="0.25"/>
    <rect x="155" y="396" width="175" height="8" rx="3" fill="#99f6e4" opacity="0.12"/>
  </g>
  <!-- Point de jonction central -->
  <circle cx="600" cy="315" r="24" fill="#14b8a6" opacity="0.9"/>
  <circle cx="600" cy="315" r="44" fill="#14b8a6" opacity="0.14"/>
  <polyline points="590,315 598,323 613,305" fill="none" stroke="#ffffff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" opacity="0.95"/>
  <line x1="390" y1="315" x2="576" y2="315" stroke="#99f6e4" stroke-width="2" opacity="0.28"/>
  <line x1="624" y1="315" x2="770" y2="315" stroke="#99f6e4" stroke-width="2" opacity="0.28"/>
  <!-- Grille de calendrier (congés) côté droit -->
  <g opacity="0.92">
    <rect x="770" y="165" width="340" height="300" rx="12" fill="none" stroke="#99f6e4" stroke-width="1.5" opacity="0.24"/>
    <line x1="770" y1="225" x2="1110" y2="225" stroke="#99f6e4" stroke-width="1.5" opacity="0.22"/>
    <line x1="855" y1="165" x2="855" y2="465" stroke="#99f6e4" stroke-width="1"   opacity="0.14"/>
    <line x1="940" y1="165" x2="940" y2="465" stroke="#99f6e4" stroke-width="1"   opacity="0.14"/>
    <line x1="1025" y1="165" x2="1025" y2="465" stroke="#99f6e4" stroke-width="1" opacity="0.14"/>
    <line x1="770" y1="285" x2="1110" y2="285" stroke="#99f6e4" stroke-width="1" opacity="0.12"/>
    <line x1="770" y1="345" x2="1110" y2="345" stroke="#99f6e4" stroke-width="1" opacity="0.12"/>
    <line x1="770" y1="405" x2="1110" y2="405" stroke="#99f6e4" stroke-width="1" opacity="0.12"/>
    <!-- Journées de congé marquées -->
    <rect x="862" y="292" width="70" height="45" rx="6" fill="#0d9488" opacity="0.45"/>
    <rect x="947" y="352" width="70" height="45" rx="6" fill="#0d9488" opacity="0.32"/>
    <circle cx="1060" cy="245" r="7" fill="#5eead4" opacity="0.55"/>
  </g>
  <!-- Marqueurs décoratifs -->
  <circle cx="1150" cy="540" r="3" fill="#99f6e4" opacity="0.22"/>
  <circle cx="1110" cy="565" r="3" fill="#99f6e4" opacity="0.18"/>
  <circle cx="1170" cy="580" r="3" fill="#99f6e4" opacity="0.15"/>
  <!-- Barre d'accent sarcelle -->
  <rect x="0" y="${H - 6}" width="${W}" height="6" fill="#0d9488"/>
</svg>`);

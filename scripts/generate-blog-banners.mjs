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

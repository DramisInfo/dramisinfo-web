// Génère l'image de partage social (Open Graph) à partir d'un SVG dessiné ici.
// À relancer si la promesse d'accueil change :  npm run og
//
// Format 1200×630, l'attendu de LinkedIn, Facebook et X. Les polices de marque
// (Archivo, Public Sans) ne sont pas installées sur toutes les machines de
// construction : on s'en tient à une grotesque système, la mise en page portant
// l'identité plutôt que la fonte.
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const PAPER = '#fbfaf7';
const INK = '#14161a';
const MUTED = '#5a6068';
const RULE = '#d8d5ce';
const ACCENT = '#b3401c';
const SANS = 'Arial, Helvetica, sans-serif';
const MONO = 'Consolas, monospace';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${PAPER}"/>
  <rect x="40" y="40" width="1120" height="550" fill="none" stroke="${RULE}" stroke-width="2"/>

  <text x="88" y="122" font-family="${MONO}" font-size="20" letter-spacing="4" fill="${MUTED}">DRAMISINFO</text>
  <text x="1112" y="122" text-anchor="end" font-family="${MONO}" font-size="20" letter-spacing="4" fill="#8b9098">L'ASSOMPTION &#183; LANAUDIÈRE</text>
  <line x1="88" y1="152" x2="1112" y2="152" stroke="${INK}" stroke-width="2"/>

  <text x="88" y="272" font-family="${SANS}" font-weight="bold" font-size="66" fill="${INK}">Le logiciel sur mesure</text>
  <text x="88" y="352" font-family="${SANS}" font-weight="bold" font-size="66" fill="${ACCENT}">n'est plus réservé</text>
  <text x="88" y="432" font-family="${SANS}" font-weight="bold" font-size="66" fill="${INK}">aux grandes entreprises.</text>

  <line x1="88" y1="492" x2="1112" y2="492" stroke="${RULE}" stroke-width="2"/>
  <text x="88" y="536" font-family="${MONO}" font-size="22" fill="${MUTED}">Systèmes sur mesure pour les PME du Québec</text>
</svg>`;

writeFileSync(join(pub, 'og.svg'), svg);
await sharp(Buffer.from(svg)).png().toFile(join(pub, 'og.png'));
console.log('✓ og.png (1200×630)');

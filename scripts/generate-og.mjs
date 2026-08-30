// Génère l'image de partage social (Open Graph) à partir d'un SVG dessiné ici.
// À relancer si l'identité change :  npm run og
//
// Format 1200×630, l'attendu de LinkedIn, Facebook et X. Le guide de marque
// décrit cette tuile : verrouillage A sur fond encre, accent en sarcelle clair
// (obligatoire sur encre), et la signature — jamais la promesse d'accueil, qui
// change plus souvent que la marque.
//
// Les polices de marque ne sont pas installées sur toutes les machines de
// construction : on s'en tient à une grotesque système, la mise en page portant
// l'identité plutôt que la fonte.
import sharp from 'sharp';
import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { tokens } from '../design-tokens.mjs';

const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');

const PAPER = tokens.color.paper;
const INK = tokens.color.ink;
const ACCENT = tokens.color.accentInv;
const SANS = 'Arial, Helvetica, sans-serif';
const MONO = 'Consolas, monospace';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <rect width="1200" height="630" fill="${INK}"/>

  <rect x="88" y="80" width="34" height="34" fill="${PAPER}"/>
  <rect x="122" y="80" width="34" height="34" fill="${ACCENT}"/>
  <rect x="88" y="114" width="34" height="34" fill="${ACCENT}"/>
  <rect x="122" y="114" width="34" height="34" fill="${PAPER}"/>
  <text x="180" y="122" font-family="${SANS}" font-size="32" letter-spacing="3">
    <tspan font-weight="bold" fill="${PAPER}">DRAMIS</tspan><tspan fill="${PAPER}" fill-opacity="0.7"> INFO</tspan>
  </text>

  <line x1="88" y1="196" x2="1112" y2="196" stroke="${PAPER}" stroke-opacity="0.25" stroke-width="2"/>

  <text x="88" y="366" font-family="${SANS}" font-weight="bold" font-size="78" fill="${PAPER}">Le système</text>
  <text x="88" y="456" font-family="${SANS}" font-weight="bold" font-size="78" fill="${ACCENT}">vous appartient.</text>

  <line x1="88" y1="516" x2="1112" y2="516" stroke="${PAPER}" stroke-opacity="0.25" stroke-width="2"/>
  <text x="88" y="560" font-family="${MONO}" font-size="22" letter-spacing="3" fill="${PAPER}" fill-opacity="0.7">L'ASSOMPTION &#183; LANAUDIÈRE</text>
</svg>`;

writeFileSync(join(pub, 'og.svg'), svg);
await sharp(Buffer.from(svg)).png().toFile(join(pub, 'og.png'));
console.log('✓ og.png (1200×630)');

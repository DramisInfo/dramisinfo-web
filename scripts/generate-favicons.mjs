// Génère les favicons PNG (Apple/Android ne supportent pas le SVG) à partir
// de public/favicon.svg. À relancer après avoir remplacé le favicon source :
//   npm run favicons
import sharp from 'sharp';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const source = readFileSync(join(pub, 'favicon.svg'));

const targets = [
  ['favicon-16.png', 16],
  ['favicon-32.png', 32],
  ['apple-touch-icon.png', 180],
  ['icon-192.png', 192],
  ['icon-512.png', 512],
];

for (const [name, size] of targets) {
  await sharp(source, { density: 384 })
    .resize(size, size)
    .flatten({ background: '#ffffff' })
    .png()
    .toFile(join(pub, name));
  console.log(`✓ ${name} (${size}×${size})`);
}

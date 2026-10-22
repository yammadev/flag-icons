// Renders png/CODE.png, CODE@2x.png and CODE@3x.png from svg/CODE.svg.
// By default only missing files are created; `npm run png -- --all` re-renders everything.
import { existsSync } from 'node:fs';
import sharp from 'sharp';
import { allFlags, path, PNG_SCALES } from './lib.mjs';

const all = process.argv.includes('--all');
let count = 0;

for (const { code } of allFlags) {
  const svg = path('svg', `${code}.svg`);
  const { width, height } = await sharp(svg).metadata();
  for (const [i, suffix] of PNG_SCALES.entries()) {
    const out = path('png', `${code}${suffix}.png`);
    if (!all && existsSync(out)) continue;
    const scale = i + 1;
    await sharp(svg, { density: 72 * scale * 4 })
      .resize(width * scale, height * scale)
      .png({ compressionLevel: 9 })
      .toFile(out);
    count++;
  }
}
console.log(`png: ${count} file(s) written`);

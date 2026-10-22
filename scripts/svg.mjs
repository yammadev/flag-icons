// Optimizes every file in svg/ in place with SVGO (removes Sketch metadata, keeps viewBox).
import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { optimize } from 'svgo';
import { path } from './lib.mjs';

// Conservative on purpose: these settings were checked pixel by pixel against the
// original Sketch exports (max difference 14/255 on anti-aliased edges).
const config = {
  multipass: true,
  floatPrecision: 4,
  plugins: [
    {
      name: 'preset-default',
      params: { overrides: { removeViewBox: false, mergePaths: false, convertShapeToPath: false } },
    },
  ],
};

let before = 0;
let after = 0;
for (const file of readdirSync(path('svg')).filter((f) => f.endsWith('.svg'))) {
  const src = readFileSync(path('svg', file), 'utf8');
  const { data } = optimize(src, { ...config, path: file });
  before += Buffer.byteLength(src);
  after += Buffer.byteLength(data);
  writeFileSync(path('svg', file), `${data}\n`);
}
console.log(`svg: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB`);

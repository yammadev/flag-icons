// Compiles sass/flag-icons.scss into css/flag-icons.css (+ .map) and css/flag-icons.min.css
import { writeFileSync, mkdirSync } from 'node:fs';
import * as sass from 'sass';
import { banner, path } from './lib.mjs';

mkdirSync(path('css'), { recursive: true });
const entry = path('sass/flag-icons.scss');

const expanded = sass.compile(entry, { style: 'expanded', sourceMap: true, charset: false });
const map = { ...expanded.sourceMap, file: 'flag-icons.css', sources: expanded.sourceMap.sources.map((s) => s.replace(/^.*\/sass\//, '../sass/')) };
// The banner adds lines on top, so shift the map the same amount.
map.mappings = ';'.repeat(banner.split('\n').length - 1) + map.mappings;

writeFileSync(path('css/flag-icons.css'), `${banner}${expanded.css}\n\n/*# sourceMappingURL=flag-icons.css.map */\n`);
writeFileSync(path('css/flag-icons.css.map'), JSON.stringify(map));

const compressed = sass.compile(entry, { style: 'compressed', charset: false });
writeFileSync(path('css/flag-icons.min.css'), `${banner}${compressed.css}\n`);

console.log('build: css/flag-icons.css, css/flag-icons.min.css');

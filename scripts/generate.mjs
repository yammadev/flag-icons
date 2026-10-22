// Generates every file derived from flags.json:
//   sass/_extras.scss, sass/_countries.scss and the "Reference" section of README.md
import { readFileSync, writeFileSync } from 'node:fs';
import { flags, path } from './lib.mjs';

const header = '// Generated from flags.json by `npm run generate`. Do not edit by hand.\n';

const sassList = (name, list) =>
  `${header}${name}: (\n${list.map((f) => `  '${f.code}'`).join('\n')}\n) !default;\n`;

writeFileSync(path('sass/_extras.scss'), sassList('$flag-icons-extras', flags.extras));
writeFileSync(path('sass/_countries.scss'), sassList('$flag-icons-countries', flags.countries));

// README reference tables, between the markers.
const table = (list) =>
  [
    '| Flag | Code | Name |',
    '| :---: | :---: | --- |',
    ...list.map((f) => `| <img src="png/${f.code}@2x.png" width="21" height="15" alt="${f.code}"> | \`${f.code}\` | ${f.name} |`),
  ].join('\n');

const reference = `<!-- reference:start -->
### Extras

*${flags.extras.length}* flags:

${table(flags.extras)}

### Countries

*${flags.countries.length}* flags:

${table(flags.countries)}
<!-- reference:end -->`;

const readme = readFileSync(path('README.md'), 'utf8');
const updated = readme
  .replace(/<!-- reference:start -->[\s\S]*<!-- reference:end -->/, reference)
  .replace(/<!-- count -->\d+<!-- \/count -->/g, `<!-- count -->${flags.extras.length + flags.countries.length}<!-- /count -->`);
if (!readme.includes('<!-- reference:start -->')) throw new Error('README.md is missing the reference markers');
writeFileSync(path('README.md'), updated);

console.log(`generate: ${flags.extras.length} extras + ${flags.countries.length} countries`);

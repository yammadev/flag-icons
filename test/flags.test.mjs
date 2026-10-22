import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readdirSync, readFileSync } from 'node:fs';
import * as sass from 'sass';
import { JSDOM } from 'jsdom';
import { allFlags, flags, path, PNG_SCALES } from '../scripts/lib.mjs';

const css = readFileSync(path('css/flag-icons.css'), 'utf8');
// jsdom's CSS parser drops the rule right after `@charset` (browsers don't), so remove it there.
const domCss = css.replace('@charset "UTF-8";', '');
const minCss = readFileSync(path('css/flag-icons.min.css'), 'utf8');
const codes = allFlags.map((f) => f.code);
const compile = (source) =>
  sass.compileString(source, { loadPaths: [path()], url: new URL(`file://${path('test/entry.scss')}`) }).css;

// --- Data & assets ---------------------------------------------------------

test('flags.json has unique codes and names', () => {
  assert.equal(new Set(codes).size, codes.length, 'duplicated code');
  for (const f of allFlags) assert.ok(f.name?.trim(), `missing name for ${f.code}`);
});

test('every flag has an svg and png at 1x, 2x and 3x', () => {
  for (const code of codes) {
    assert.ok(existsSync(path('svg', `${code}.svg`)), `svg/${code}.svg`);
    for (const s of PNG_SCALES) assert.ok(existsSync(path('png', `${code}${s}.png`)), `png/${code}${s}.png`);
  }
});

test('no orphan files in svg/ or png/', () => {
  const known = new Set(codes);
  for (const f of readdirSync(path('svg'))) assert.ok(known.has(f.replace(/\.svg$/, '')), `svg/${f} not in flags.json`);
  for (const f of readdirSync(path('png'))) assert.ok(known.has(f.replace(/(@\dx)?\.png$/, '')), `png/${f} not in flags.json`);
});

test('svg files keep their viewBox (needed to scale)', () => {
  for (const code of codes) assert.match(readFileSync(path('svg', `${code}.svg`), 'utf8'), /viewBox="0 0 \d+ \d+"/, code);
});

// --- Compiled CSS ----------------------------------------------------------

test('css is up to date with the Sass sources (run `npm run build`)', () => {
  const fresh = sass.compile(path('sass/flag-icons.scss'), { style: 'compressed', charset: false }).css;
  assert.ok(minCss.includes(fresh), 'css/flag-icons.min.css is stale');
});

test('every flag has a class pointing to an existing svg', () => {
  for (const code of codes) {
    const rule = new RegExp(`\\.flag-icons\\.${code} \\{\\s*background-image: url\\("\\.\\./svg/${code}\\.svg"\\);`);
    assert.match(css, rule, code);
  }
});

test('css is valid: @charset first, no BOM in the middle', () => {
  for (const file of [css, minCss]) {
    assert.ok(file.startsWith('@charset "UTF-8";'));
    assert.ok(!file.includes('﻿'));
  }
});

// --- Backwards compatibility with 3.0.0 ------------------------------------

test('3.0.0 classes still exist', () => {
  const old = readFileSync(path('test/fixtures/v3.0.0-classes.txt'), 'utf8').trim().split(/\r?\n/);
  for (const cls of old) assert.ok(css.includes(`.flag-icons.${cls}`), `.flag-icons.${cls} was removed`);
});

test('3.0.0 markup renders the same in the browser cascade', () => {
  const dom = new JSDOM(`<style>${domCss}</style>
    <i id="i" class="flag-icons CO"></i>
    <span id="span" class="flag-icons square CO"></span>
    <div id="div" class="flag-icons GB-ENG"></div>`);
  const { document, getComputedStyle } = dom.window;
  const style = (id) => getComputedStyle(document.getElementById(id));

  assert.match(style('i').backgroundImage, /\.\.\/svg\/CO\.svg/);
  assert.equal(style('i').width, '1.3333333333em');
  assert.equal(style('i').height, '1em');
  assert.equal(style('i').display, 'inline-block');
  assert.equal(style('span').width, '1em');
  assert.match(style('span').backgroundImage, /CO\.svg/);
  // New: any element works, not only <i> and <span>.
  assert.match(style('div').backgroundImage, /GB-ENG\.svg/);
});

test('3.0.0 README size overrides still apply', () => {
  const custom = `.flag-icons, .rectangle { height: 2em !important; width: 2.66667em !important; }`;
  const dom = new JSDOM(`<style>${domCss}</style><style>${custom}</style><i id="f" class="flag-icons CO"></i>`);
  const s = dom.window.getComputedStyle(dom.window.document.getElementById('f'));
  assert.equal(s.height, '2em');
  assert.equal(s.width, '2.66667em');
});

// --- Sass APIs -------------------------------------------------------------

test('Sass @use with() configures path, subset and class', () => {
  const out = compile(`@use "sass/flag-icons" with (
    $flag-icons-path: "/img/flags",
    $flag-icons-flags: ("CO", "MX"),
    $flag-icons-class: "fi"
  );`);
  assert.match(out, /\.fi\.CO \{\s*background-image: url\("\/img\/flags\/CO\.svg"\)/);
  assert.match(out, /\.fi\.MX/);
  assert.doesNotMatch(out, /\.fi\.ES/);
});

test('legacy Sass @import with global overrides still works', () => {
  const out = sass.compileString(
    `$flag-icons-path: "/legacy";\n$flag-icons-flags: ("JP");\n@import "sass/flag-icons";`,
    { loadPaths: [path()], silenceDeprecations: ['import'] },
  ).css;
  assert.match(out, /\.flag-icons\.JP \{\s*background-image: url\("\/legacy\/JP\.svg"\)/);
  assert.doesNotMatch(out, /\.flag-icons\.CO/);
});

test('Sass lists can be extended (pre-3.1 variable names)', () => {
  const out = compile(`@use "sass/flag-icons" with ($flag-icons-extras: ("WW"));`);
  assert.match(out, /\.flag-icons\.WW/);
  assert.doesNotMatch(out, /\.flag-icons\.EU/);
  assert.match(out, /\.flag-icons\.CO/);
});

test('mixins produce a standalone flag', () => {
  const out = compile(`@use "sass/mixins" as fi;\n.lang-es::before { @include fi.flag("ES", 2em); }`);
  assert.match(out, /\.lang-es::before \{[^}]*height: 2em;[^}]*width: 2\.6666666667em;[^}]*url\("\.\.\/svg\/ES\.svg"\)/s);
});

test('README reference lists every flag', () => {
  const readme = readFileSync(path('README.md'), 'utf8');
  for (const code of codes) assert.ok(readme.includes(`| \`${code}\` |`), code);
  assert.ok(readme.includes(`<!-- count -->${flags.extras.length + flags.countries.length}<!-- /count -->`));
});

// Shared helpers for the build scripts.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

export const root = join(dirname(fileURLToPath(import.meta.url)), '..');
export const path = (...p) => join(root, ...p);

export const pkg = JSON.parse(readFileSync(path('package.json'), 'utf8'));
export const flags = JSON.parse(readFileSync(path('flags.json'), 'utf8'));

// Every flag, extras first (same order as the Sass list).
export const allFlags = [...flags.extras, ...flags.countries];

export const PNG_SCALES = ['', '@2x', '@3x'];

// @charset must be the very first thing in the file, so it goes before the banner
// (the banner contains non-ASCII characters, e.g. the author's name).
export const banner = `@charset "UTF-8";
/*!
 * ${pkg.name} v${pkg.version}
 * ${pkg.description}
 * ${pkg.homepage}
 * (c) ${pkg.author.name} · MIT License · Flag artwork based on FlagKit (MIT)
 */
`;

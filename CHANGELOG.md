# Changelog

All notable changes to this project are documented here. The format is based on
[Keep a Changelog](https://keepachangelog.com/) and the project follows
[Semantic Versioning](https://semver.org/).

## [3.1.0] - 2026-10-22

Fully backwards compatible with 3.0.0: same files, paths and classes.

### Added
- `AQ` (Antarctica), `BQ` (Caribbean Netherlands) and `EH` (Western Sahara): every ISO 3166-1 alpha-2 code is now covered. Closes #5.
- Missing `@2x` and `@3x` png for `CAF`, `CAS`, `CNA`, `COC`, `CSA` and `WW`. Closes #4.
- `.fill` modifier to make the flag cover its box (e.g. `square fill`).
- `flags.json` with every code and name; it is the single source for the Sass lists and the README tables.
- Sass mixins (`sass/_mixins.scss`): `flag()`, `base()` and `image()`.
- Sass variables `$flag-icons-class`, `$flag-icons-height` and `$flag-icons-ratio`.
- Sass module system support (`@use ... with (...)`), keeping the legacy `@import`.
- npm package `@yammadev/flag-icons` and jsDelivr CDN instructions.
- Tests, including a 3.0.0 compatibility suite, and GitHub Actions for CI and releases.
- Demo page with search (GitHub Pages).

### Changed
- The CSS selector is now `.flag-icons` instead of `span.flag-icons, i.flag-icons`: it works on any element and is easier to override.
- SVG files optimized with SVGO (829 KB → 409 KB) with no visible change.
- Build moved from Grunt + Ruby Sass (discontinued) to Dart Sass with npm scripts.
- Country names updated: North Macedonia, Eswatini, Czechia, Türkiye, Cabo Verde.
- README rewritten; it now matches the actual Sass file and variable names.

### Fixed
- `css/` was compiled from an older version of the sources.
- Minified CSS had `@charset` after the banner, where browsers ignore it.

### Removed
- `Gruntfile.js` and its dependencies.

## [3.0.0] - 2020-04-14

### Added
- More flags (`svg` and `png`).

### Changed
- `sass` files, code cleaning and better instructions in the README.
- Title and description in `_config.yml`.
- Table rendering fix for GitHub Pages.

### Security
- Removed packages with vulnerabilities.

## [2.0.0] - 2020-03-16

### Added
- GitHub page using `jekyll-theme-cayman`.

### Changed
- README tables and dependencies updated.

### Security
- Security issues solved.

## [1.2.0] - 2017-06-27

### Added
- `grunt` build.
- `png` flags.

## [1.1.0] - 2017-06-26

### Changed
- Better `sass` approach and instructions.

## [1.0.0] - 2017-06-26

### Added
- `svg` flags, `sass` boilerplate and `css` libraries.

[3.1.0]: https://github.com/yammadev/flag-icons/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/yammadev/flag-icons/releases/tag/v3.0.0

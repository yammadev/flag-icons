# flag-icons <img src="png/CO@2x.png" width="21" height="15" alt="CO">

A beautiful `svg` + `png` + `sass` + `css` collection of <!-- count -->264<!-- /count --> flags by [Yefferson Marín](https://github.com/yammadev).

[![CI](https://github.com/yammadev/flag-icons/actions/workflows/ci.yml/badge.svg)](https://github.com/yammadev/flag-icons/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/@yammadev/flag-icons)](https://www.npmjs.com/package/@yammadev/flag-icons)
[![jsDelivr](https://data.jsdelivr.com/v1/package/gh/yammadev/flag-icons/badge)](https://www.jsdelivr.com/package/gh/yammadev/flag-icons)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

**[Live demo & search →](https://yammadev.github.io/flag-icons/)**

- Every [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) country, plus England, Scotland, Wales, Northern Ireland, Shetland, California and 8 extras (continents, EU, World, Pride).
- Optimized `svg`, and `png` at `1x`, `2x` and `3x`.
- Plain CSS, or Sass with variables and mixins to ship only the flags you need.
- `flags.json` with every code and name, for selects and pickers.

## Install

**CDN** (no install):

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/yammadev/flag-icons@3.1.0/css/flag-icons.min.css">
```

**npm**:

```sh
npm install @yammadev/flag-icons
```

```js
import '@yammadev/flag-icons/css/flag-icons.min.css';
```

**Manual**: download the repository and copy the `css` and `svg` folders side by side into your project (the CSS loads the images from `../svg/`).

```html
<link rel="stylesheet" href="/css/flag-icons.min.css">
```

## Usage

Add the class `flag-icons` followed by the flag code. Works on any element (`<i>`, `<span>`, `<div>`, …):

```html
<i class="flag-icons CO"></i>              <!-- 4:3 rectangle -->
<i class="flag-icons square CO"></i>       <!-- square box, flag keeps its proportions -->
<i class="flag-icons square fill CO"></i>  <!-- square box, flag fills it (crops the sides) -->
```

Codes are uppercase, as listed in the [Reference](#reference).

### Size

Flags are `1em` high, so they follow the `font-size` of their parent:

```html
<i class="flag-icons CO" style="font-size: 2rem"></i>
```

Or set the size directly:

```css
.flag-icons        { height: 2em; width: 2.6667em; line-height: 2em; }
.flag-icons.square { width: 2em; }
```

## Sass

Configure the library with the module system:

```scss
@use "@yammadev/flag-icons/sass/flag-icons" with (
  $flag-icons-path: "/assets/flags",     // where the .svg files are served from
  $flag-icons-flags: ("CO", "MX", "ES"), // only generate these classes
  $flag-icons-height: 1.25em
);
```

Use a flag on your own selectors without the generated classes:

```scss
@use "@yammadev/flag-icons/sass/mixins" as fi;

.lang-es::before { @include fi.flag("ES"); }               // box + image
.country[data-code="MX"] { @include fi.image("MX"); }      // image only
```

| Variable | Default | Description |
| --- | --- | --- |
| `$flag-icons-path` | `"../svg"` | Folder of the `.svg` files, relative to the compiled CSS. |
| `$flag-icons-flags` | all | List of codes that get a class. |
| `$flag-icons-class` | `"flag-icons"` | Base class name. |
| `$flag-icons-height` | `1em` | Default height. |
| `$flag-icons-ratio` | `4/3` | Width / height of the rectangle. |

The classic `@import` keeps working (variables first, then the import):

```scss
$flag-icons-path: "/assets/flags";
@import "flag-icons/sass/flag-icons";
```

## JavaScript data

`flags.json` (the package `main`) lists every flag:

```js
import flags from '@yammadev/flag-icons' with { type: 'json' };
// { extras: [{ code: 'CAF', name: 'Africa' }, …], countries: [{ code: 'AD', name: 'Andorra' }, …] }
```

## Upgrading from 3.0

Nothing to change: same files, same paths and same classes. The CSS now also works on elements other than `<i>` and `<span>`, and it no longer uses an element in the selector, so your own `.flag-icons { … }` rules override it without `!important`.

## Development

Requires [Node.js](https://nodejs.org/) 18 or newer.

```sh
npm install
npm run build    # flags.json -> Sass lists + README reference, then Sass -> css/
npm test         # checks files, classes, Sass APIs and backwards compatibility
```

To add a flag:

1. Put `CODE.svg` in `svg/` (21×15, same style as the others).
2. Add `{ "code": "CODE", "name": "…" }` to `flags.json`.
3. Run `npm run assets` (optimizes the svg and renders the missing png) and `npm run build`.

Issues and pull requests are more than welcome.

## Credits & license

Flag artwork is based on [madebybowtie/FlagKit](https://github.com/madebybowtie/FlagKit) (MIT). `AQ` and `EH` were drawn for this project in the same style.

Released under the [MIT license](LICENSE). See the [changelog](CHANGELOG.md) for release notes.

Looking for brand icons? Check out [yammadev/brand-icons](https://github.com/yammadev/brand-icons).

## Reference

<!-- reference:start -->
### Extras

*8* flags:

| Flag | Code | Name |
| :---: | :---: | --- |
| <img src="png/CAF@2x.png" width="21" height="15" alt="CAF"> | `CAF` | Africa |
| <img src="png/CAS@2x.png" width="21" height="15" alt="CAS"> | `CAS` | Asia |
| <img src="png/CNA@2x.png" width="21" height="15" alt="CNA"> | `CNA` | North America |
| <img src="png/COC@2x.png" width="21" height="15" alt="COC"> | `COC` | Oceania |
| <img src="png/CSA@2x.png" width="21" height="15" alt="CSA"> | `CSA` | South America |
| <img src="png/EU@2x.png" width="21" height="15" alt="EU"> | `EU` | European Union |
| <img src="png/WW@2x.png" width="21" height="15" alt="WW"> | `WW` | World |
| <img src="png/LGBT@2x.png" width="21" height="15" alt="LGBT"> | `LGBT` | Pride |

### Countries

*256* flags:

| Flag | Code | Name |
| :---: | :---: | --- |
| <img src="png/AD@2x.png" width="21" height="15" alt="AD"> | `AD` | Andorra |
| <img src="png/AE@2x.png" width="21" height="15" alt="AE"> | `AE` | United Arab Emirates |
| <img src="png/AF@2x.png" width="21" height="15" alt="AF"> | `AF` | Afghanistan |
| <img src="png/AG@2x.png" width="21" height="15" alt="AG"> | `AG` | Antigua & Barbuda |
| <img src="png/AI@2x.png" width="21" height="15" alt="AI"> | `AI` | Anguilla |
| <img src="png/AL@2x.png" width="21" height="15" alt="AL"> | `AL` | Albania |
| <img src="png/AM@2x.png" width="21" height="15" alt="AM"> | `AM` | Armenia |
| <img src="png/AO@2x.png" width="21" height="15" alt="AO"> | `AO` | Angola |
| <img src="png/AQ@2x.png" width="21" height="15" alt="AQ"> | `AQ` | Antarctica |
| <img src="png/AR@2x.png" width="21" height="15" alt="AR"> | `AR` | Argentina |
| <img src="png/AS@2x.png" width="21" height="15" alt="AS"> | `AS` | American Samoa |
| <img src="png/AT@2x.png" width="21" height="15" alt="AT"> | `AT` | Austria |
| <img src="png/AU@2x.png" width="21" height="15" alt="AU"> | `AU` | Australia |
| <img src="png/AW@2x.png" width="21" height="15" alt="AW"> | `AW` | Aruba |
| <img src="png/AX@2x.png" width="21" height="15" alt="AX"> | `AX` | Åland Islands |
| <img src="png/AZ@2x.png" width="21" height="15" alt="AZ"> | `AZ` | Azerbaijan |
| <img src="png/BA@2x.png" width="21" height="15" alt="BA"> | `BA` | Bosnia & Herzegovina |
| <img src="png/BB@2x.png" width="21" height="15" alt="BB"> | `BB` | Barbados |
| <img src="png/BD@2x.png" width="21" height="15" alt="BD"> | `BD` | Bangladesh |
| <img src="png/BE@2x.png" width="21" height="15" alt="BE"> | `BE` | Belgium |
| <img src="png/BF@2x.png" width="21" height="15" alt="BF"> | `BF` | Burkina Faso |
| <img src="png/BG@2x.png" width="21" height="15" alt="BG"> | `BG` | Bulgaria |
| <img src="png/BH@2x.png" width="21" height="15" alt="BH"> | `BH` | Bahrain |
| <img src="png/BI@2x.png" width="21" height="15" alt="BI"> | `BI` | Burundi |
| <img src="png/BJ@2x.png" width="21" height="15" alt="BJ"> | `BJ` | Benin |
| <img src="png/BL@2x.png" width="21" height="15" alt="BL"> | `BL` | St. Barthélemy |
| <img src="png/BM@2x.png" width="21" height="15" alt="BM"> | `BM` | Bermuda |
| <img src="png/BN@2x.png" width="21" height="15" alt="BN"> | `BN` | Brunei |
| <img src="png/BO@2x.png" width="21" height="15" alt="BO"> | `BO` | Bolivia |
| <img src="png/BQ@2x.png" width="21" height="15" alt="BQ"> | `BQ` | Caribbean Netherlands |
| <img src="png/BR@2x.png" width="21" height="15" alt="BR"> | `BR` | Brazil |
| <img src="png/BS@2x.png" width="21" height="15" alt="BS"> | `BS` | Bahamas |
| <img src="png/BT@2x.png" width="21" height="15" alt="BT"> | `BT` | Bhutan |
| <img src="png/BV@2x.png" width="21" height="15" alt="BV"> | `BV` | Bouvet Island |
| <img src="png/BW@2x.png" width="21" height="15" alt="BW"> | `BW` | Botswana |
| <img src="png/BY@2x.png" width="21" height="15" alt="BY"> | `BY` | Belarus |
| <img src="png/BZ@2x.png" width="21" height="15" alt="BZ"> | `BZ` | Belize |
| <img src="png/CA@2x.png" width="21" height="15" alt="CA"> | `CA` | Canada |
| <img src="png/CC@2x.png" width="21" height="15" alt="CC"> | `CC` | Cocos (Keeling) Islands |
| <img src="png/CD@2x.png" width="21" height="15" alt="CD"> | `CD` | Congo - Kinshasa |
| <img src="png/CF@2x.png" width="21" height="15" alt="CF"> | `CF` | Central African Republic |
| <img src="png/CG@2x.png" width="21" height="15" alt="CG"> | `CG` | Congo - Brazzaville |
| <img src="png/CH@2x.png" width="21" height="15" alt="CH"> | `CH` | Switzerland |
| <img src="png/CI@2x.png" width="21" height="15" alt="CI"> | `CI` | Côte d’Ivoire |
| <img src="png/CK@2x.png" width="21" height="15" alt="CK"> | `CK` | Cook Islands |
| <img src="png/CL@2x.png" width="21" height="15" alt="CL"> | `CL` | Chile |
| <img src="png/CM@2x.png" width="21" height="15" alt="CM"> | `CM` | Cameroon |
| <img src="png/CN@2x.png" width="21" height="15" alt="CN"> | `CN` | China |
| <img src="png/CO@2x.png" width="21" height="15" alt="CO"> | `CO` | Colombia |
| <img src="png/CR@2x.png" width="21" height="15" alt="CR"> | `CR` | Costa Rica |
| <img src="png/CU@2x.png" width="21" height="15" alt="CU"> | `CU` | Cuba |
| <img src="png/CV@2x.png" width="21" height="15" alt="CV"> | `CV` | Cabo Verde |
| <img src="png/CW@2x.png" width="21" height="15" alt="CW"> | `CW` | Curaçao |
| <img src="png/CX@2x.png" width="21" height="15" alt="CX"> | `CX` | Christmas Island |
| <img src="png/CY@2x.png" width="21" height="15" alt="CY"> | `CY` | Cyprus |
| <img src="png/CZ@2x.png" width="21" height="15" alt="CZ"> | `CZ` | Czechia |
| <img src="png/DE@2x.png" width="21" height="15" alt="DE"> | `DE` | Germany |
| <img src="png/DJ@2x.png" width="21" height="15" alt="DJ"> | `DJ` | Djibouti |
| <img src="png/DK@2x.png" width="21" height="15" alt="DK"> | `DK` | Denmark |
| <img src="png/DM@2x.png" width="21" height="15" alt="DM"> | `DM` | Dominica |
| <img src="png/DO@2x.png" width="21" height="15" alt="DO"> | `DO` | Dominican Republic |
| <img src="png/DZ@2x.png" width="21" height="15" alt="DZ"> | `DZ` | Algeria |
| <img src="png/EC@2x.png" width="21" height="15" alt="EC"> | `EC` | Ecuador |
| <img src="png/EE@2x.png" width="21" height="15" alt="EE"> | `EE` | Estonia |
| <img src="png/EG@2x.png" width="21" height="15" alt="EG"> | `EG` | Egypt |
| <img src="png/EH@2x.png" width="21" height="15" alt="EH"> | `EH` | Western Sahara |
| <img src="png/ER@2x.png" width="21" height="15" alt="ER"> | `ER` | Eritrea |
| <img src="png/ES@2x.png" width="21" height="15" alt="ES"> | `ES` | Spain |
| <img src="png/ET@2x.png" width="21" height="15" alt="ET"> | `ET` | Ethiopia |
| <img src="png/FI@2x.png" width="21" height="15" alt="FI"> | `FI` | Finland |
| <img src="png/FJ@2x.png" width="21" height="15" alt="FJ"> | `FJ` | Fiji |
| <img src="png/FK@2x.png" width="21" height="15" alt="FK"> | `FK` | Falkland Islands |
| <img src="png/FM@2x.png" width="21" height="15" alt="FM"> | `FM` | Micronesia |
| <img src="png/FO@2x.png" width="21" height="15" alt="FO"> | `FO` | Faroe Islands |
| <img src="png/FR@2x.png" width="21" height="15" alt="FR"> | `FR` | France |
| <img src="png/GA@2x.png" width="21" height="15" alt="GA"> | `GA` | Gabon |
| <img src="png/GB@2x.png" width="21" height="15" alt="GB"> | `GB` | United Kingdom |
| <img src="png/GB-ENG@2x.png" width="21" height="15" alt="GB-ENG"> | `GB-ENG` | England |
| <img src="png/GB-NIR@2x.png" width="21" height="15" alt="GB-NIR"> | `GB-NIR` | Northern Ireland |
| <img src="png/GB-SCT@2x.png" width="21" height="15" alt="GB-SCT"> | `GB-SCT` | Scotland |
| <img src="png/GB-WLS@2x.png" width="21" height="15" alt="GB-WLS"> | `GB-WLS` | Wales |
| <img src="png/GB-ZET@2x.png" width="21" height="15" alt="GB-ZET"> | `GB-ZET` | Shetland |
| <img src="png/GD@2x.png" width="21" height="15" alt="GD"> | `GD` | Grenada |
| <img src="png/GE@2x.png" width="21" height="15" alt="GE"> | `GE` | Georgia |
| <img src="png/GF@2x.png" width="21" height="15" alt="GF"> | `GF` | French Guiana |
| <img src="png/GG@2x.png" width="21" height="15" alt="GG"> | `GG` | Guernsey |
| <img src="png/GH@2x.png" width="21" height="15" alt="GH"> | `GH` | Ghana |
| <img src="png/GI@2x.png" width="21" height="15" alt="GI"> | `GI` | Gibraltar |
| <img src="png/GL@2x.png" width="21" height="15" alt="GL"> | `GL` | Greenland |
| <img src="png/GM@2x.png" width="21" height="15" alt="GM"> | `GM` | Gambia |
| <img src="png/GN@2x.png" width="21" height="15" alt="GN"> | `GN` | Guinea |
| <img src="png/GP@2x.png" width="21" height="15" alt="GP"> | `GP` | Guadeloupe |
| <img src="png/GQ@2x.png" width="21" height="15" alt="GQ"> | `GQ` | Equatorial Guinea |
| <img src="png/GR@2x.png" width="21" height="15" alt="GR"> | `GR` | Greece |
| <img src="png/GS@2x.png" width="21" height="15" alt="GS"> | `GS` | So. Georgia & So. Sandwich Isl. |
| <img src="png/GT@2x.png" width="21" height="15" alt="GT"> | `GT` | Guatemala |
| <img src="png/GU@2x.png" width="21" height="15" alt="GU"> | `GU` | Guam |
| <img src="png/GW@2x.png" width="21" height="15" alt="GW"> | `GW` | Guinea-Bissau |
| <img src="png/GY@2x.png" width="21" height="15" alt="GY"> | `GY` | Guyana |
| <img src="png/HK@2x.png" width="21" height="15" alt="HK"> | `HK` | Hong Kong (China) |
| <img src="png/HM@2x.png" width="21" height="15" alt="HM"> | `HM` | Heard & McDonald Islands |
| <img src="png/HN@2x.png" width="21" height="15" alt="HN"> | `HN` | Honduras |
| <img src="png/HR@2x.png" width="21" height="15" alt="HR"> | `HR` | Croatia |
| <img src="png/HT@2x.png" width="21" height="15" alt="HT"> | `HT` | Haiti |
| <img src="png/HU@2x.png" width="21" height="15" alt="HU"> | `HU` | Hungary |
| <img src="png/ID@2x.png" width="21" height="15" alt="ID"> | `ID` | Indonesia |
| <img src="png/IE@2x.png" width="21" height="15" alt="IE"> | `IE` | Ireland |
| <img src="png/IL@2x.png" width="21" height="15" alt="IL"> | `IL` | Israel |
| <img src="png/IM@2x.png" width="21" height="15" alt="IM"> | `IM` | Isle of Man |
| <img src="png/IN@2x.png" width="21" height="15" alt="IN"> | `IN` | India |
| <img src="png/IO@2x.png" width="21" height="15" alt="IO"> | `IO` | British Indian Ocean Territory |
| <img src="png/IQ@2x.png" width="21" height="15" alt="IQ"> | `IQ` | Iraq |
| <img src="png/IR@2x.png" width="21" height="15" alt="IR"> | `IR` | Iran |
| <img src="png/IS@2x.png" width="21" height="15" alt="IS"> | `IS` | Iceland |
| <img src="png/IT@2x.png" width="21" height="15" alt="IT"> | `IT` | Italy |
| <img src="png/JE@2x.png" width="21" height="15" alt="JE"> | `JE` | Jersey |
| <img src="png/JM@2x.png" width="21" height="15" alt="JM"> | `JM` | Jamaica |
| <img src="png/JO@2x.png" width="21" height="15" alt="JO"> | `JO` | Jordan |
| <img src="png/JP@2x.png" width="21" height="15" alt="JP"> | `JP` | Japan |
| <img src="png/KE@2x.png" width="21" height="15" alt="KE"> | `KE` | Kenya |
| <img src="png/KG@2x.png" width="21" height="15" alt="KG"> | `KG` | Kyrgyzstan |
| <img src="png/KH@2x.png" width="21" height="15" alt="KH"> | `KH` | Cambodia |
| <img src="png/KI@2x.png" width="21" height="15" alt="KI"> | `KI` | Kiribati |
| <img src="png/KM@2x.png" width="21" height="15" alt="KM"> | `KM` | Comoros |
| <img src="png/KN@2x.png" width="21" height="15" alt="KN"> | `KN` | St. Kitts & Nevis |
| <img src="png/KP@2x.png" width="21" height="15" alt="KP"> | `KP` | North Korea |
| <img src="png/KR@2x.png" width="21" height="15" alt="KR"> | `KR` | South Korea |
| <img src="png/KW@2x.png" width="21" height="15" alt="KW"> | `KW` | Kuwait |
| <img src="png/KY@2x.png" width="21" height="15" alt="KY"> | `KY` | Cayman Islands |
| <img src="png/KZ@2x.png" width="21" height="15" alt="KZ"> | `KZ` | Kazakhstan |
| <img src="png/LA@2x.png" width="21" height="15" alt="LA"> | `LA` | Laos |
| <img src="png/LB@2x.png" width="21" height="15" alt="LB"> | `LB` | Lebanon |
| <img src="png/LC@2x.png" width="21" height="15" alt="LC"> | `LC` | St. Lucia |
| <img src="png/LI@2x.png" width="21" height="15" alt="LI"> | `LI` | Liechtenstein |
| <img src="png/LK@2x.png" width="21" height="15" alt="LK"> | `LK` | Sri Lanka |
| <img src="png/LR@2x.png" width="21" height="15" alt="LR"> | `LR` | Liberia |
| <img src="png/LS@2x.png" width="21" height="15" alt="LS"> | `LS` | Lesotho |
| <img src="png/LT@2x.png" width="21" height="15" alt="LT"> | `LT` | Lithuania |
| <img src="png/LU@2x.png" width="21" height="15" alt="LU"> | `LU` | Luxembourg |
| <img src="png/LV@2x.png" width="21" height="15" alt="LV"> | `LV` | Latvia |
| <img src="png/LY@2x.png" width="21" height="15" alt="LY"> | `LY` | Libya |
| <img src="png/MA@2x.png" width="21" height="15" alt="MA"> | `MA` | Morocco |
| <img src="png/MC@2x.png" width="21" height="15" alt="MC"> | `MC` | Monaco |
| <img src="png/MD@2x.png" width="21" height="15" alt="MD"> | `MD` | Moldova |
| <img src="png/ME@2x.png" width="21" height="15" alt="ME"> | `ME` | Montenegro |
| <img src="png/MF@2x.png" width="21" height="15" alt="MF"> | `MF` | St. Martin |
| <img src="png/MG@2x.png" width="21" height="15" alt="MG"> | `MG` | Madagascar |
| <img src="png/MH@2x.png" width="21" height="15" alt="MH"> | `MH` | Marshall Islands |
| <img src="png/MK@2x.png" width="21" height="15" alt="MK"> | `MK` | North Macedonia |
| <img src="png/ML@2x.png" width="21" height="15" alt="ML"> | `ML` | Mali |
| <img src="png/MM@2x.png" width="21" height="15" alt="MM"> | `MM` | Myanmar (Burma) |
| <img src="png/MN@2x.png" width="21" height="15" alt="MN"> | `MN` | Mongolia |
| <img src="png/MO@2x.png" width="21" height="15" alt="MO"> | `MO` | Macau (China) |
| <img src="png/MP@2x.png" width="21" height="15" alt="MP"> | `MP` | Northern Mariana Islands |
| <img src="png/MQ@2x.png" width="21" height="15" alt="MQ"> | `MQ` | Martinique |
| <img src="png/MR@2x.png" width="21" height="15" alt="MR"> | `MR` | Mauritania |
| <img src="png/MS@2x.png" width="21" height="15" alt="MS"> | `MS` | Montserrat |
| <img src="png/MT@2x.png" width="21" height="15" alt="MT"> | `MT` | Malta |
| <img src="png/MU@2x.png" width="21" height="15" alt="MU"> | `MU` | Mauritius |
| <img src="png/MV@2x.png" width="21" height="15" alt="MV"> | `MV` | Maldives |
| <img src="png/MW@2x.png" width="21" height="15" alt="MW"> | `MW` | Malawi |
| <img src="png/MX@2x.png" width="21" height="15" alt="MX"> | `MX` | Mexico |
| <img src="png/MY@2x.png" width="21" height="15" alt="MY"> | `MY` | Malaysia |
| <img src="png/MZ@2x.png" width="21" height="15" alt="MZ"> | `MZ` | Mozambique |
| <img src="png/NA@2x.png" width="21" height="15" alt="NA"> | `NA` | Namibia |
| <img src="png/NC@2x.png" width="21" height="15" alt="NC"> | `NC` | New Caledonia |
| <img src="png/NE@2x.png" width="21" height="15" alt="NE"> | `NE` | Niger |
| <img src="png/NF@2x.png" width="21" height="15" alt="NF"> | `NF` | Norfolk Island |
| <img src="png/NG@2x.png" width="21" height="15" alt="NG"> | `NG` | Nigeria |
| <img src="png/NI@2x.png" width="21" height="15" alt="NI"> | `NI` | Nicaragua |
| <img src="png/NL@2x.png" width="21" height="15" alt="NL"> | `NL` | Netherlands |
| <img src="png/NO@2x.png" width="21" height="15" alt="NO"> | `NO` | Norway |
| <img src="png/NP@2x.png" width="21" height="15" alt="NP"> | `NP` | Nepal |
| <img src="png/NR@2x.png" width="21" height="15" alt="NR"> | `NR` | Nauru |
| <img src="png/NU@2x.png" width="21" height="15" alt="NU"> | `NU` | Niue |
| <img src="png/NZ@2x.png" width="21" height="15" alt="NZ"> | `NZ` | New Zealand |
| <img src="png/OM@2x.png" width="21" height="15" alt="OM"> | `OM` | Oman |
| <img src="png/PA@2x.png" width="21" height="15" alt="PA"> | `PA` | Panama |
| <img src="png/PE@2x.png" width="21" height="15" alt="PE"> | `PE` | Peru |
| <img src="png/PF@2x.png" width="21" height="15" alt="PF"> | `PF` | French Polynesia |
| <img src="png/PG@2x.png" width="21" height="15" alt="PG"> | `PG` | Papua New Guinea |
| <img src="png/PH@2x.png" width="21" height="15" alt="PH"> | `PH` | Philippines |
| <img src="png/PK@2x.png" width="21" height="15" alt="PK"> | `PK` | Pakistan |
| <img src="png/PL@2x.png" width="21" height="15" alt="PL"> | `PL` | Poland |
| <img src="png/PM@2x.png" width="21" height="15" alt="PM"> | `PM` | St. Pierre & Miquelon |
| <img src="png/PN@2x.png" width="21" height="15" alt="PN"> | `PN` | Pitcairn Islands |
| <img src="png/PR@2x.png" width="21" height="15" alt="PR"> | `PR` | Puerto Rico |
| <img src="png/PS@2x.png" width="21" height="15" alt="PS"> | `PS` | Palestinian Territories |
| <img src="png/PT@2x.png" width="21" height="15" alt="PT"> | `PT` | Portugal |
| <img src="png/PW@2x.png" width="21" height="15" alt="PW"> | `PW` | Palau |
| <img src="png/PY@2x.png" width="21" height="15" alt="PY"> | `PY` | Paraguay |
| <img src="png/QA@2x.png" width="21" height="15" alt="QA"> | `QA` | Qatar |
| <img src="png/RE@2x.png" width="21" height="15" alt="RE"> | `RE` | Réunion |
| <img src="png/RO@2x.png" width="21" height="15" alt="RO"> | `RO` | Romania |
| <img src="png/RS@2x.png" width="21" height="15" alt="RS"> | `RS` | Serbia |
| <img src="png/RU@2x.png" width="21" height="15" alt="RU"> | `RU` | Russia |
| <img src="png/RW@2x.png" width="21" height="15" alt="RW"> | `RW` | Rwanda |
| <img src="png/SA@2x.png" width="21" height="15" alt="SA"> | `SA` | Saudi Arabia |
| <img src="png/SB@2x.png" width="21" height="15" alt="SB"> | `SB` | Solomon Islands |
| <img src="png/SC@2x.png" width="21" height="15" alt="SC"> | `SC` | Seychelles |
| <img src="png/SD@2x.png" width="21" height="15" alt="SD"> | `SD` | Sudan |
| <img src="png/SE@2x.png" width="21" height="15" alt="SE"> | `SE` | Sweden |
| <img src="png/SG@2x.png" width="21" height="15" alt="SG"> | `SG` | Singapore |
| <img src="png/SH@2x.png" width="21" height="15" alt="SH"> | `SH` | St. Helena |
| <img src="png/SI@2x.png" width="21" height="15" alt="SI"> | `SI` | Slovenia |
| <img src="png/SJ@2x.png" width="21" height="15" alt="SJ"> | `SJ` | Svalbard & Jan Mayen |
| <img src="png/SK@2x.png" width="21" height="15" alt="SK"> | `SK` | Slovakia |
| <img src="png/SL@2x.png" width="21" height="15" alt="SL"> | `SL` | Sierra Leone |
| <img src="png/SM@2x.png" width="21" height="15" alt="SM"> | `SM` | San Marino |
| <img src="png/SN@2x.png" width="21" height="15" alt="SN"> | `SN` | Senegal |
| <img src="png/SO@2x.png" width="21" height="15" alt="SO"> | `SO` | Somalia |
| <img src="png/SR@2x.png" width="21" height="15" alt="SR"> | `SR` | Suriname |
| <img src="png/SS@2x.png" width="21" height="15" alt="SS"> | `SS` | South Sudan |
| <img src="png/ST@2x.png" width="21" height="15" alt="ST"> | `ST` | São Tomé & Príncipe |
| <img src="png/SV@2x.png" width="21" height="15" alt="SV"> | `SV` | El Salvador |
| <img src="png/SX@2x.png" width="21" height="15" alt="SX"> | `SX` | Sint Maarten |
| <img src="png/SY@2x.png" width="21" height="15" alt="SY"> | `SY` | Syria |
| <img src="png/SZ@2x.png" width="21" height="15" alt="SZ"> | `SZ` | Eswatini |
| <img src="png/TC@2x.png" width="21" height="15" alt="TC"> | `TC` | Turks & Caicos Islands |
| <img src="png/TD@2x.png" width="21" height="15" alt="TD"> | `TD` | Chad |
| <img src="png/TF@2x.png" width="21" height="15" alt="TF"> | `TF` | French Southern Territories |
| <img src="png/TG@2x.png" width="21" height="15" alt="TG"> | `TG` | Togo |
| <img src="png/TH@2x.png" width="21" height="15" alt="TH"> | `TH` | Thailand |
| <img src="png/TJ@2x.png" width="21" height="15" alt="TJ"> | `TJ` | Tajikistan |
| <img src="png/TK@2x.png" width="21" height="15" alt="TK"> | `TK` | Tokelau |
| <img src="png/TL@2x.png" width="21" height="15" alt="TL"> | `TL` | Timor-Leste |
| <img src="png/TM@2x.png" width="21" height="15" alt="TM"> | `TM` | Turkmenistan |
| <img src="png/TN@2x.png" width="21" height="15" alt="TN"> | `TN` | Tunisia |
| <img src="png/TO@2x.png" width="21" height="15" alt="TO"> | `TO` | Tonga |
| <img src="png/TR@2x.png" width="21" height="15" alt="TR"> | `TR` | Türkiye |
| <img src="png/TT@2x.png" width="21" height="15" alt="TT"> | `TT` | Trinidad & Tobago |
| <img src="png/TV@2x.png" width="21" height="15" alt="TV"> | `TV` | Tuvalu |
| <img src="png/TW@2x.png" width="21" height="15" alt="TW"> | `TW` | Taiwan |
| <img src="png/TZ@2x.png" width="21" height="15" alt="TZ"> | `TZ` | Tanzania |
| <img src="png/UA@2x.png" width="21" height="15" alt="UA"> | `UA` | Ukraine |
| <img src="png/UG@2x.png" width="21" height="15" alt="UG"> | `UG` | Uganda |
| <img src="png/UM@2x.png" width="21" height="15" alt="UM"> | `UM` | U.S. Outlying Islands |
| <img src="png/US@2x.png" width="21" height="15" alt="US"> | `US` | United States |
| <img src="png/US-CA@2x.png" width="21" height="15" alt="US-CA"> | `US-CA` | California |
| <img src="png/UY@2x.png" width="21" height="15" alt="UY"> | `UY` | Uruguay |
| <img src="png/UZ@2x.png" width="21" height="15" alt="UZ"> | `UZ` | Uzbekistan |
| <img src="png/VA@2x.png" width="21" height="15" alt="VA"> | `VA` | Vatican City |
| <img src="png/VC@2x.png" width="21" height="15" alt="VC"> | `VC` | St. Vincent & Grenadines |
| <img src="png/VE@2x.png" width="21" height="15" alt="VE"> | `VE` | Venezuela |
| <img src="png/VG@2x.png" width="21" height="15" alt="VG"> | `VG` | British Virgin Islands |
| <img src="png/VI@2x.png" width="21" height="15" alt="VI"> | `VI` | U.S. Virgin Islands |
| <img src="png/VN@2x.png" width="21" height="15" alt="VN"> | `VN` | Vietnam |
| <img src="png/VU@2x.png" width="21" height="15" alt="VU"> | `VU` | Vanuatu |
| <img src="png/WF@2x.png" width="21" height="15" alt="WF"> | `WF` | Wallis & Futuna |
| <img src="png/WS@2x.png" width="21" height="15" alt="WS"> | `WS` | Samoa |
| <img src="png/XK@2x.png" width="21" height="15" alt="XK"> | `XK` | Kosovo |
| <img src="png/YE@2x.png" width="21" height="15" alt="YE"> | `YE` | Yemen |
| <img src="png/YT@2x.png" width="21" height="15" alt="YT"> | `YT` | Mayotte |
| <img src="png/ZA@2x.png" width="21" height="15" alt="ZA"> | `ZA` | South Africa |
| <img src="png/ZM@2x.png" width="21" height="15" alt="ZM"> | `ZM` | Zambia |
| <img src="png/ZW@2x.png" width="21" height="15" alt="ZW"> | `ZW` | Zimbabwe |
<!-- reference:end -->

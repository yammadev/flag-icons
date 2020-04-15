# flag-icons ![CO](png/CO.png)
A beautiful `svg` + `png` + `sass` + `css` collection of 261 flags by [Yefferson Marín](https://github.com/yammadev).

### Icons
All `sketch` files were pulled from [madebybowtie/FlagKit](https://github.com/madebybowtie/FlagKit).

### Looking for brand icons?
Check out [yammadev/brand-icons](https://github.com/yammadev/brand-icons).

### Author
Yefferson Marín - ([@yammadev](https://github.com/yammadev))

## Instructions
**1.** Add the compiled `css` file to your `html`.

```html
  <!-- Use generated lib -->
  <link rel="stylesheet" href="/css/flag-icons.css">

  <!-- Or compressed -->
  <link rel="stylesheet" href="/css/flag-icons.min.css">
```

**2.** Download the `svg` (folder) icons in your path.

**3.** Use `<i>` or `<span>` tags adding the class `flag-icons` followed of the flag `code` (look **Reference** bellow for details) which is the [ISO 3166-1-alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for each one. The result is a `rectangular` flag, however, the `square` class can be used if a squared one is required:

```html
  <!-- Using <i> -->
  <i class="flag-icons CO"></i>
  <i class="flag-icons square CO"></i>

  <!-- Using <span> -->
  <span class="flag-icons CO"></span>
  <span class="flag-icons square CO"></span>
```

**4.** You can also format the default size of the flag in a custom `css` file:

```css
  .flag-icons,    /* Format default wrapper */
  .rectangle {    /* Or use as new class */
    height: 2em !important;
    width: 2.66667em !important;
    line-height: 2em !important;
  }

  .flag-icons,    /* Format default wrapper */
  .square,        /* Format default square class */
  .squared {      /* Or use as new class */
    height: 2em !important;
    width: 2em !important;
    line-height: 2em !important;
  }
```

```html
  <!-- Rectangle -->
  <i class="flag-icons CO"></i>
  <i class="flag-icons rectangle CO"></i>

  <!-- Square -->
  <i class="flag-icons CO"></i>
  <i class="flag-icons square CO"></i>
  <i class="flag-icons squared CO"></i>
```

### Use a portion
#### Simple
**1.** From `svg` folder get just the flags you need

**2** Edit the library `css/flag-icons.css` by just leaving the classes for the selected flags.

**3.** Use as explained before.

#### Building your own
##### Requirements
- [NPM](https://www.npmjs.com/)
- [SASS](http://sass-lang.com/)

**1.** In `svg` folder put just the files you need, and then edit `sass/_variables.sass`, where `'code'` represents the name(s) of the desired flag(s).

```sass
  // ...
  $flags: (
    'code'
    ...
    'code'
  )
```

**2.** Run in terminal:
```bash
  # Install dependencies
  $ npm install

  # Build!
  $ grunt build
```

**3.** It will generate:

```
  /css    <-- .css, .min.css
```

**4.** Use as usual.

## Contribute
Issues and pull requests are most than welcome.

## License
Released under the MIT license.

## Reference
### Extras
*8* flags:

| Flag | Code | Region |
| :-------------: | :-------------: | ------------- |
| <img src='png/CAF.png?raw=true' width='21' height='15'> | CAF | Africa
| <img src='png/CAS.png?raw=true' width='21' height='15'> | CAS | Asia
| <img src='png/CNA.png?raw=true' width='21' height='15'> | CNA | North America
| <img src='png/COC.png?raw=true' width='21' height='15'> | COC | Oceania
| <img src='png/CSA.png?raw=true' width='21' height='15'> | CSA | South America
| <img src='png/EU.png?raw=true' width='21' height='15'> | EU | European Union
| <img src='png/WW.png?raw=true' width='21' height='15'> | WW | World
| <img src='png/LGBT@2x.png?raw=true' width='21' height='15'> | LGBT | Pride

### Countries
*253* flags:

| Flag | Code | Region |
| :-------------: | :-------------: | ------------- |
| <img src='png/AD@2x.png?raw=true' width='21' height='15'> | AD | Andorra
| <img src='png/AE@2x.png?raw=true' width='21' height='15'> | AE | United Arab Emirates
| <img src='png/AF@2x.png?raw=true' width='21' height='15'> | AF | Afghanistan
| <img src='png/AG@2x.png?raw=true' width='21' height='15'> | AG | Antigua & Barbuda
| <img src='png/AI@2x.png?raw=true' width='21' height='15'> | AI | Anguilla
| <img src='png/AL@2x.png?raw=true' width='21' height='15'> | AL | Albania
| <img src='png/AM@2x.png?raw=true' width='21' height='15'> | AM | Armenia
| <img src='png/AO@2x.png?raw=true' width='21' height='15'> | AO | Angola
| <img src='png/AR@2x.png?raw=true' width='21' height='15'> | AR | Argentina
| <img src='png/AS@2x.png?raw=true' width='21' height='15'> | AS | American Samoa
| <img src='png/AT@2x.png?raw=true' width='21' height='15'> | AT | Austria
| <img src='png/AU@2x.png?raw=true' width='21' height='15'> | AU | Australia
| <img src='png/AW@2x.png?raw=true' width='21' height='15'> | AW | Aruba
| <img src='png/AX@2x.png?raw=true' width='21' height='15'> | AX | Åland Islands
| <img src='png/AZ@2x.png?raw=true' width='21' height='15'> | AZ | Azerbaijan
| <img src='png/BA@2x.png?raw=true' width='21' height='15'> | BA | Bosnia & Herzegovina
| <img src='png/BB@2x.png?raw=true' width='21' height='15'> | BB | Barbados
| <img src='png/BD@2x.png?raw=true' width='21' height='15'> | BD | Bangladesh
| <img src='png/BE@2x.png?raw=true' width='21' height='15'> | BE | Belgium
| <img src='png/BF@2x.png?raw=true' width='21' height='15'> | BF | Burkina Faso
| <img src='png/BG@2x.png?raw=true' width='21' height='15'> | BG | Bulgaria
| <img src='png/BH@2x.png?raw=true' width='21' height='15'> | BH | Bahrain
| <img src='png/BI@2x.png?raw=true' width='21' height='15'> | BI | Burundi
| <img src='png/BJ@2x.png?raw=true' width='21' height='15'> | BJ | Benin
| <img src='png/BL@2x.png?raw=true' width='21' height='15'> | BL | St. Barthélemy
| <img src='png/BM@2x.png?raw=true' width='21' height='15'> | BM | Bermuda
| <img src='png/BN@2x.png?raw=true' width='21' height='15'> | BN | Brunei
| <img src='png/BO@2x.png?raw=true' width='21' height='15'> | BO | Bolivia
| <img src='png/BR@2x.png?raw=true' width='21' height='15'> | BR | Brazil
| <img src='png/BS@2x.png?raw=true' width='21' height='15'> | BS | Bahamas
| <img src='png/BT@2x.png?raw=true' width='21' height='15'> | BT | Bhutan
| <img src='png/BV@2x.png?raw=true' width='21' height='15'> | BV | Bouvet Island
| <img src='png/BW@2x.png?raw=true' width='21' height='15'> | BW | Botswana
| <img src='png/BY@2x.png?raw=true' width='21' height='15'> | BY | Belarus
| <img src='png/BZ@2x.png?raw=true' width='21' height='15'> | BZ | Belize
| <img src='png/CA@2x.png?raw=true' width='21' height='15'> | CA | Canada
| <img src='png/CC@2x.png?raw=true' width='21' height='15'> | CC | Cocos (Keeling) Islands
| <img src='png/CD@2x.png?raw=true' width='21' height='15'> | CD | Congo - Kinshasa
| <img src='png/CF@2x.png?raw=true' width='21' height='15'> | CF | Central African Republic
| <img src='png/CG@2x.png?raw=true' width='21' height='15'> | CG | Congo - Brazzaville
| <img src='png/CH@2x.png?raw=true' width='21' height='15'> | CH | Switzerland
| <img src='png/CI@2x.png?raw=true' width='21' height='15'> | CI | Côte d’Ivoire
| <img src='png/CK@2x.png?raw=true' width='21' height='15'> | CK | Cook Islands
| <img src='png/CL@2x.png?raw=true' width='21' height='15'> | CL | Chile
| <img src='png/CM@2x.png?raw=true' width='21' height='15'> | CM | Cameroon
| <img src='png/CN@2x.png?raw=true' width='21' height='15'> | CN | China
| <img src='png/CO@2x.png?raw=true' width='21' height='15'> | CO | Colombia
| <img src='png/CR@2x.png?raw=true' width='21' height='15'> | CR | Costa Rica
| <img src='png/CU@2x.png?raw=true' width='21' height='15'> | CU | Cuba
| <img src='png/CV@2x.png?raw=true' width='21' height='15'> | CV | Cape Verde
| <img src='png/CW@2x.png?raw=true' width='21' height='15'> | CW | Curaçao
| <img src='png/CX@2x.png?raw=true' width='21' height='15'> | CX | Christmas Island
| <img src='png/CY@2x.png?raw=true' width='21' height='15'> | CY | Cyprus
| <img src='png/CZ@2x.png?raw=true' width='21' height='15'> | CZ | Czech Republic
| <img src='png/DE@2x.png?raw=true' width='21' height='15'> | DE | Germany
| <img src='png/DJ@2x.png?raw=true' width='21' height='15'> | DJ | Djibouti
| <img src='png/DK@2x.png?raw=true' width='21' height='15'> | DK | Denmark
| <img src='png/DM@2x.png?raw=true' width='21' height='15'> | DM | Dominica
| <img src='png/DO@2x.png?raw=true' width='21' height='15'> | DO | Dominican Republic
| <img src='png/DZ@2x.png?raw=true' width='21' height='15'> | DZ | Algeria
| <img src='png/EC@2x.png?raw=true' width='21' height='15'> | EC | Ecuador
| <img src='png/EE@2x.png?raw=true' width='21' height='15'> | EE | Estonia
| <img src='png/EG@2x.png?raw=true' width='21' height='15'> | EG | Egypt
| <img src='png/ER@2x.png?raw=true' width='21' height='15'> | ER | Eritrea
| <img src='png/ES@2x.png?raw=true' width='21' height='15'> | ES | Spain
| <img src='png/ET@2x.png?raw=true' width='21' height='15'> | ET | Ethiopia
| <img src='png/FI@2x.png?raw=true' width='21' height='15'> | FI | Finland
| <img src='png/FJ@2x.png?raw=true' width='21' height='15'> | FJ | Fiji
| <img src='png/FK@2x.png?raw=true' width='21' height='15'> | FK | Falkland Islands
| <img src='png/FM@2x.png?raw=true' width='21' height='15'> | FM | Micronesia
| <img src='png/FO@2x.png?raw=true' width='21' height='15'> | FO | Faroe Islands
| <img src='png/FR@2x.png?raw=true' width='21' height='15'> | FR | France
| <img src='png/GA@2x.png?raw=true' width='21' height='15'> | GA | Gabon
| <img src='png/GB@2x.png?raw=true' width='21' height='15'> | GB | United Kingdom
| <img src='png/GB-ENG@2x.png?raw=true' width='21' height='15'> | GB-ENG | England
| <img src='png/GB-NIR@2x.png?raw=true' width='21' height='15'> | GB-NIR | Northern Ireland
| <img src='png/GB-SCT@2x.png?raw=true' width='21' height='15'> | GB-SCT | Scotland
| <img src='png/GB-WLS@2x.png?raw=true' width='21' height='15'> | GB-WLS | Wales
| <img src='png/GB-ZET@2x.png?raw=true' width='21' height='15'> | GB-ZET | Shetland
| <img src='png/GD@2x.png?raw=true' width='21' height='15'> | GD | Grenada
| <img src='png/GE@2x.png?raw=true' width='21' height='15'> | GE | Georgia
| <img src='png/GF@2x.png?raw=true' width='21' height='15'> | GF | French Guiana
| <img src='png/GG@2x.png?raw=true' width='21' height='15'> | GG | Guernsey
| <img src='png/GH@2x.png?raw=true' width='21' height='15'> | GH | Ghana
| <img src='png/GI@2x.png?raw=true' width='21' height='15'> | GI | Gibraltar
| <img src='png/GL@2x.png?raw=true' width='21' height='15'> | GL | Greenland
| <img src='png/GM@2x.png?raw=true' width='21' height='15'> | GM | Gambia
| <img src='png/GN@2x.png?raw=true' width='21' height='15'> | GN | Guinea
| <img src='png/GP@2x.png?raw=true' width='21' height='15'> | GP | Guadeloupe
| <img src='png/GQ@2x.png?raw=true' width='21' height='15'> | GQ | Equatorial Guinea
| <img src='png/GR@2x.png?raw=true' width='21' height='15'> | GR | Greece
| <img src='png/GS@2x.png?raw=true' width='21' height='15'> | GS | So. Georgia & So. Sandwich Isl.
| <img src='png/GT@2x.png?raw=true' width='21' height='15'> | GT | Guatemala
| <img src='png/GU@2x.png?raw=true' width='21' height='15'> | GU | Guam
| <img src='png/GW@2x.png?raw=true' width='21' height='15'> | GW | Guinea-Bissau
| <img src='png/GY@2x.png?raw=true' width='21' height='15'> | GY | Guyana
| <img src='png/HK@2x.png?raw=true' width='21' height='15'> | HK | Hong Kong (China)
| <img src='png/HM@2x.png?raw=true' width='21' height='15'> | HM | Heard & McDonald Islands
| <img src='png/HN@2x.png?raw=true' width='21' height='15'> | HN | Honduras
| <img src='png/HR@2x.png?raw=true' width='21' height='15'> | HR | Croatia
| <img src='png/HT@2x.png?raw=true' width='21' height='15'> | HT | Haiti
| <img src='png/HU@2x.png?raw=true' width='21' height='15'> | HU | Hungary
| <img src='png/ID@2x.png?raw=true' width='21' height='15'> | ID | Indonesia
| <img src='png/IE@2x.png?raw=true' width='21' height='15'> | IE | Ireland
| <img src='png/IL@2x.png?raw=true' width='21' height='15'> | IL | Israel
| <img src='png/IM@2x.png?raw=true' width='21' height='15'> | IM | Isle of Man
| <img src='png/IN@2x.png?raw=true' width='21' height='15'> | IN | India
| <img src='png/IO@2x.png?raw=true' width='21' height='15'> | IO | British Indian Ocean Territory
| <img src='png/IQ@2x.png?raw=true' width='21' height='15'> | IQ | Iraq
| <img src='png/IR@2x.png?raw=true' width='21' height='15'> | IR | Iran
| <img src='png/IS@2x.png?raw=true' width='21' height='15'> | IS | Iceland
| <img src='png/IT@2x.png?raw=true' width='21' height='15'> | IT | Italy
| <img src='png/JE@2x.png?raw=true' width='21' height='15'> | JE | Jersey
| <img src='png/JM@2x.png?raw=true' width='21' height='15'> | JM | Jamaica
| <img src='png/JO@2x.png?raw=true' width='21' height='15'> | JO | Jordan
| <img src='png/JP@2x.png?raw=true' width='21' height='15'> | JP | Japan
| <img src='png/KE@2x.png?raw=true' width='21' height='15'> | KE | Kenya
| <img src='png/KG@2x.png?raw=true' width='21' height='15'> | KG | Kyrgyzstan
| <img src='png/KH@2x.png?raw=true' width='21' height='15'> | KH | Cambodia
| <img src='png/KI@2x.png?raw=true' width='21' height='15'> | KI | Kiribati
| <img src='png/KM@2x.png?raw=true' width='21' height='15'> | KM | Comoros
| <img src='png/KN@2x.png?raw=true' width='21' height='15'> | KN | St. Kitts & Nevis
| <img src='png/KP@2x.png?raw=true' width='21' height='15'> | KP | North Korea
| <img src='png/KR@2x.png?raw=true' width='21' height='15'> | KR | South Korea
| <img src='png/KW@2x.png?raw=true' width='21' height='15'> | KW | Kuwait
| <img src='png/KY@2x.png?raw=true' width='21' height='15'> | KY | Cayman Islands
| <img src='png/KZ@2x.png?raw=true' width='21' height='15'> | KZ | Kazakhstan
| <img src='png/LA@2x.png?raw=true' width='21' height='15'> | LA | Laos
| <img src='png/LB@2x.png?raw=true' width='21' height='15'> | LB | Lebanon
| <img src='png/LC@2x.png?raw=true' width='21' height='15'> | LC | St. Lucia
| <img src='png/LI@2x.png?raw=true' width='21' height='15'> | LI | Liechtenstein
| <img src='png/LK@2x.png?raw=true' width='21' height='15'> | LK | Sri Lanka
| <img src='png/LR@2x.png?raw=true' width='21' height='15'> | LR | Liberia
| <img src='png/LS@2x.png?raw=true' width='21' height='15'> | LS | Lesotho
| <img src='png/LT@2x.png?raw=true' width='21' height='15'> | LT | Lithuania
| <img src='png/LU@2x.png?raw=true' width='21' height='15'> | LU | Luxembourg
| <img src='png/LV@2x.png?raw=true' width='21' height='15'> | LV | Latvia
| <img src='png/LY@2x.png?raw=true' width='21' height='15'> | LY | Libya
| <img src='png/MA@2x.png?raw=true' width='21' height='15'> | MA | Morocco
| <img src='png/MC@2x.png?raw=true' width='21' height='15'> | MC | Monaco
| <img src='png/MD@2x.png?raw=true' width='21' height='15'> | MD | Moldova
| <img src='png/ME@2x.png?raw=true' width='21' height='15'> | ME | Montenegro
| <img src='png/MF@2x.png?raw=true' width='21' height='15'> | MF | St. Martin
| <img src='png/MG@2x.png?raw=true' width='21' height='15'> | MG | Madagascar
| <img src='png/MH@2x.png?raw=true' width='21' height='15'> | MH | Marshall Islands
| <img src='png/MK@2x.png?raw=true' width='21' height='15'> | MK | Macedonia
| <img src='png/ML@2x.png?raw=true' width='21' height='15'> | ML | Mali
| <img src='png/MM@2x.png?raw=true' width='21' height='15'> | MM | Myanmar (Burma)
| <img src='png/MN@2x.png?raw=true' width='21' height='15'> | MN | Mongolia
| <img src='png/MO@2x.png?raw=true' width='21' height='15'> | MO | Macau (China)
| <img src='png/MP@2x.png?raw=true' width='21' height='15'> | MP | Northern Mariana Islands
| <img src='png/MQ@2x.png?raw=true' width='21' height='15'> | MQ | Martinique
| <img src='png/MR@2x.png?raw=true' width='21' height='15'> | MR | Mauritania
| <img src='png/MS@2x.png?raw=true' width='21' height='15'> | MS | Montserrat
| <img src='png/MT@2x.png?raw=true' width='21' height='15'> | MT | Malta
| <img src='png/MU@2x.png?raw=true' width='21' height='15'> | MU | Mauritius
| <img src='png/MV@2x.png?raw=true' width='21' height='15'> | MV | Maldives
| <img src='png/MW@2x.png?raw=true' width='21' height='15'> | MW | Malawi
| <img src='png/MX@2x.png?raw=true' width='21' height='15'> | MX | Mexico
| <img src='png/MY@2x.png?raw=true' width='21' height='15'> | MY | Malaysia
| <img src='png/MZ@2x.png?raw=true' width='21' height='15'> | MZ | Mozambique
| <img src='png/NA@2x.png?raw=true' width='21' height='15'> | NA | Namibia
| <img src='png/NC@2x.png?raw=true' width='21' height='15'> | NC | New Caledonia
| <img src='png/NE@2x.png?raw=true' width='21' height='15'> | NE | Niger
| <img src='png/NF@2x.png?raw=true' width='21' height='15'> | NF | Norfolk Island
| <img src='png/NG@2x.png?raw=true' width='21' height='15'> | NG | Nigeria
| <img src='png/NI@2x.png?raw=true' width='21' height='15'> | NI | Nicaragua
| <img src='png/NL@2x.png?raw=true' width='21' height='15'> | NL | Netherlands
| <img src='png/NO@2x.png?raw=true' width='21' height='15'> | NO | Norway
| <img src='png/NP@2x.png?raw=true' width='21' height='15'> | NP | Nepal
| <img src='png/NR@2x.png?raw=true' width='21' height='15'> | NR | Nauru
| <img src='png/NU@2x.png?raw=true' width='21' height='15'> | NU | Niue
| <img src='png/NZ@2x.png?raw=true' width='21' height='15'> | NZ | New Zealand
| <img src='png/OM@2x.png?raw=true' width='21' height='15'> | OM | Oman
| <img src='png/PA@2x.png?raw=true' width='21' height='15'> | PA | Panama
| <img src='png/PE@2x.png?raw=true' width='21' height='15'> | PE | Peru
| <img src='png/PF@2x.png?raw=true' width='21' height='15'> | PF | French Polynesia
| <img src='png/PG@2x.png?raw=true' width='21' height='15'> | PG | Papua New Guinea
| <img src='png/PH@2x.png?raw=true' width='21' height='15'> | PH | Philippines
| <img src='png/PK@2x.png?raw=true' width='21' height='15'> | PK | Pakistan
| <img src='png/PL@2x.png?raw=true' width='21' height='15'> | PL | Poland
| <img src='png/PM@2x.png?raw=true' width='21' height='15'> | PM | St. Pierre & Miquelon
| <img src='png/PN@2x.png?raw=true' width='21' height='15'> | PN | Pitcairn Islands
| <img src='png/PR@2x.png?raw=true' width='21' height='15'> | PR | Puerto Rico
| <img src='png/PS@2x.png?raw=true' width='21' height='15'> | PS | Palestinian Territories
| <img src='png/PT@2x.png?raw=true' width='21' height='15'> | PT | Portugal
| <img src='png/PW@2x.png?raw=true' width='21' height='15'> | PW | Palau
| <img src='png/PY@2x.png?raw=true' width='21' height='15'> | PY | Paraguay
| <img src='png/QA@2x.png?raw=true' width='21' height='15'> | QA | Qatar
| <img src='png/RE@2x.png?raw=true' width='21' height='15'> | RE | Réunion
| <img src='png/RO@2x.png?raw=true' width='21' height='15'> | RO | Romania
| <img src='png/RS@2x.png?raw=true' width='21' height='15'> | RS | Serbia
| <img src='png/RU@2x.png?raw=true' width='21' height='15'> | RU | Russia
| <img src='png/RW@2x.png?raw=true' width='21' height='15'> | RW | Rwanda
| <img src='png/SA@2x.png?raw=true' width='21' height='15'> | SA | Saudi Arabia
| <img src='png/SB@2x.png?raw=true' width='21' height='15'> | SB | Solomon Islands
| <img src='png/SC@2x.png?raw=true' width='21' height='15'> | SC | Seychelles
| <img src='png/SD@2x.png?raw=true' width='21' height='15'> | SD | Sudan
| <img src='png/SE@2x.png?raw=true' width='21' height='15'> | SE | Sweden
| <img src='png/SG@2x.png?raw=true' width='21' height='15'> | SG | Singapore
| <img src='png/SH@2x.png?raw=true' width='21' height='15'> | SH | St. Helena
| <img src='png/SI@2x.png?raw=true' width='21' height='15'> | SI | Slovenia
| <img src='png/SJ@2x.png?raw=true' width='21' height='15'> | SJ | Svalbard & Jan Mayen
| <img src='png/SK@2x.png?raw=true' width='21' height='15'> | SK | Slovakia
| <img src='png/SL@2x.png?raw=true' width='21' height='15'> | SL | Sierra Leone
| <img src='png/SM@2x.png?raw=true' width='21' height='15'> | SM | San Marino
| <img src='png/SN@2x.png?raw=true' width='21' height='15'> | SN | Senegal
| <img src='png/SO@2x.png?raw=true' width='21' height='15'> | SO | Somalia
| <img src='png/SR@2x.png?raw=true' width='21' height='15'> | SR | Suriname
| <img src='png/SS@2x.png?raw=true' width='21' height='15'> | SS | South Sudan
| <img src='png/ST@2x.png?raw=true' width='21' height='15'> | ST | São Tomé & Príncipe
| <img src='png/SV@2x.png?raw=true' width='21' height='15'> | SV | El Salvador
| <img src='png/SX@2x.png?raw=true' width='21' height='15'> | SX | Sint Maarten
| <img src='png/SY@2x.png?raw=true' width='21' height='15'> | SY | Syria
| <img src='png/SZ@2x.png?raw=true' width='21' height='15'> | SZ | Swaziland
| <img src='png/TC@2x.png?raw=true' width='21' height='15'> | TC | Turks & Caicos Islands
| <img src='png/TD@2x.png?raw=true' width='21' height='15'> | TD | Chad
| <img src='png/TF@2x.png?raw=true' width='21' height='15'> | TF | French Southern Territories
| <img src='png/TG@2x.png?raw=true' width='21' height='15'> | TG | Togo
| <img src='png/TH@2x.png?raw=true' width='21' height='15'> | TH | Thailand
| <img src='png/TJ@2x.png?raw=true' width='21' height='15'> | TJ | Tajikistan
| <img src='png/TK@2x.png?raw=true' width='21' height='15'> | TK | Tokelau
| <img src='png/TL@2x.png?raw=true' width='21' height='15'> | TL | Timor-Leste
| <img src='png/TM@2x.png?raw=true' width='21' height='15'> | TM | Turkmenistan
| <img src='png/TN@2x.png?raw=true' width='21' height='15'> | TN | Tunisia
| <img src='png/TO@2x.png?raw=true' width='21' height='15'> | TO | Tonga
| <img src='png/TR@2x.png?raw=true' width='21' height='15'> | TR | Turkey
| <img src='png/TT@2x.png?raw=true' width='21' height='15'> | TT | Trinidad & Tobago
| <img src='png/TV@2x.png?raw=true' width='21' height='15'> | TV | Tuvalu
| <img src='png/TW@2x.png?raw=true' width='21' height='15'> | TW | Taiwan
| <img src='png/TZ@2x.png?raw=true' width='21' height='15'> | TZ | Tanzania
| <img src='png/UA@2x.png?raw=true' width='21' height='15'> | UA | Ukraine
| <img src='png/UG@2x.png?raw=true' width='21' height='15'> | UG | Uganda
| <img src='png/UM@2x.png?raw=true' width='21' height='15'> | UM | U.S. Outlying Islands
| <img src='png/US@2x.png?raw=true' width='21' height='15'> | US | United States
| <img src='png/US-CA@2x.png?raw=true' width='21' height='15'> | US-CA | California
| <img src='png/UY@2x.png?raw=true' width='21' height='15'> | UY | Uruguay
| <img src='png/UZ@2x.png?raw=true' width='21' height='15'> | UZ | Uzbekistan
| <img src='png/VA@2x.png?raw=true' width='21' height='15'> | VA | Vatican City
| <img src='png/VC@2x.png?raw=true' width='21' height='15'> | VC | St. Vincent & Grenadines
| <img src='png/VE@2x.png?raw=true' width='21' height='15'> | VE | Venezuela
| <img src='png/VG@2x.png?raw=true' width='21' height='15'> | VG | British Virgin Islands
| <img src='png/VI@2x.png?raw=true' width='21' height='15'> | VI | U.S. Virgin Islands
| <img src='png/VN@2x.png?raw=true' width='21' height='15'> | VN | Vietnam
| <img src='png/VU@2x.png?raw=true' width='21' height='15'> | VU | Vanuatu
| <img src='png/WF@2x.png?raw=true' width='21' height='15'> | WF | Wallis & Futuna
| <img src='png/WS@2x.png?raw=true' width='21' height='15'> | WS | Samoa
| <img src='png/XK@2x.png?raw=true' width='21' height='15'> | XK | Kosovo
| <img src='png/YE@2x.png?raw=true' width='21' height='15'> | YE | Yemen
| <img src='png/YT@2x.png?raw=true' width='21' height='15'> | YT | Mayotte
| <img src='png/ZA@2x.png?raw=true' width='21' height='15'> | ZA | South Africa
| <img src='png/ZM@2x.png?raw=true' width='21' height='15'> | ZM | Zambia
| <img src='png/ZW@2x.png?raw=true' width='21' height='15'> | ZW | Zimbabwe

## Changelog
All notable changes to this project are documented in this part of the file. The format is based on [Keep a Changelog](http://keepachangelog.com/).

#### [x.y.z] - YYYY-MM-DD
- **x** for major release related to major additions or changes.
- **y** for minor release related to minor additions or changes in current major release.
- **z** for minor release related to minor additions or changes in current minor release.

#### Extras
- **Added** for new features.
- **Modified** for changes in existing functionality.
- **Deprecated** for soon-to-be removed features.
- **Removed** for removed features.
- **Fixed for** any bug fixes.
- **Security** in case of vulnerabilities.

### [3.0.0] - 2020-04-14
#### Added
- More flags! (`svg` and `png`)

#### Modified
- `sass` files.
- Better instructions in `readme`.
- Tables rendering problem in `readme` based on this [issue](https://github.com/pages-themes/cayman/issues/82) / in `_config.yml`.
- Code cleaning.
- `readme` edited.

#### Security
- Removed some packages with vulnerabilities.

### [2.3.1] - 2020-03-16
#### Modified
- Still trying to solve tables problem in `github` page view.

### [2.0.2] - 2020-03-16
#### Modified
- Trying to solve tables problem in `github` page view.

### [2.0.1] - 2020-03-16
#### Modified
- Minimal changes.

### [2.0.0] - 2020-03-16
#### Added
- `Github` page added using `jekyll-theme-cayman`.

#### Modified
- Tables modified in `readme`.
- Dependencies updated.

#### Security
- Security issues solved.

### [1.2.4] - 2017-07-09
#### Modified
- Code cleaning.
- `readme` edited.

## [1.2.3] - 2017-06-27
#### Modified
- `readme` edited.

### [1.2.3] - 2017-06-27
#### Modified
- `readme` edited.

### [1.2.2] - 2017-06-27
#### Modified
- Link to *ISO 3166-1-alpha-2 code* updated.
- `readme` edited.

### [1.2.1] - 2017-06-27
#### Modified
- `readme` edited.

### [1.2.0] - 2017-06-27
#### Added
- `grunt` integrated for better and cleaner approach.
- `png` flags.

#### Modified
- `readme` edited.

### [1.1.0] - 2017-06-26
#### Modified
- `sass` better approach.
- Better instructions in `readme`.

### [1.0.0] - 2017-06-26
#### Added
- `svg` flags.
- `sass` boilerplate.
- `css` libraries.

### [0.0.0] - 2017-06-26
#### Added
- Initial commit.
- `readme` + license.

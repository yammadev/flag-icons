# flag-icons ![CO](png/CO.png)
A beautiful `svg` + `png` + `sass` + `css` collection of countries flags by [Yefferson Marín](https://github.com/yammadev).

# Icons
All `sketch` files are in [madebybowtie/FlagKit](https://github.com/madebybowtie/FlagKit). Currently `svg` is just supported in [this](https://github.com/lucidlemon/FlagKit) fork, and it's still pending for integration.

# Looking for brand icons?
Check out [yammadev/brand-icons](https://github.com/yammadev/brand-icons).

# How to?
## Use it
**1.** Add the compiled `css` file to your `html`.

```html
  <!-- Use generated lib -->
  <link rel="stylesheet" href="/css/flag-icons.css">

  <!-- Compressed -->
  <link rel="stylesheet" href="/css/flag-icons.min.css">
```

**2.** Download the `svg` icons in your path and use `<i>` or `<span>` tags adding the class `flag-icons` followed of the flag `code` (look **Reference** for details) which is the [ISO 3166-1-alpha-2 code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) for each one. The result is a rectangular flag, however, the `square` class can be used if a squared one is required.

```html
  <!-- Using <i> -->
  <i class="flag-icons CO"></i>
  <i class="flag-icons square CO"></i>

  <!-- Using <span> -->
  <span class="flag-icons CO"></span>
  <span class="flag-icons square CO"></span>
```

**3.** You can also format the default size of the flag in a custom `css` file:

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

## Auto generate
**1.** In `svg` folder let just the files you need or desire. then edit `sass/_variables.scss` as followed:

```scss
  // ...
  $flags: (
    'code'
    ...
    'code'
  );
```

Where `'code'` represents the names of the flags desired.

**2.** Run in terminal:

```bash
  # Install dependencies
  $ npm install

  # Build!  
  $ grunt build
```

**3.** It will generate automatically:

```
  /css    <-- .css, .min.css
  /sass   <-- .scss
```

**4.** Use as usual.

# Reference
## Extras
| Flag  | Code  | Region |
| :---: | :---: | :----- |
|![AD](png/EU.png)   | EU    | European Union |
|![AE](png/WW.png)   | WW    | World |
|![CNA](png/CNA.png) | CNA   | North America |
|![CSA](png/CSA.png) | CSA   | South America |
|![CEU](png/CEU.png) | CEU   | Europe |
|![CAF](png/CAF.png) | CAF   | Africa |
|![CAS](png/CAS.png) | CAS   | Asia |
|![COC](png/COC.png) | COC   | Oceania |

## Countries
| Flag  | Code  | Country |
| :---: | :---: | :----- |
| ![AD](png/AD.png) | AD | Andorra |
| ![AE](png/AE.png) | AE | United Arab Emirates |
| ![AF](png/AF.png) | AF | Afghanistan |
| ![AG](png/AG.png) | AG | Antigua & Barbuda |
| ![AI](png/AI.png) | AI | Anguilla |
| ![AL](png/AL.png) | AL | Albania |
| ![AM](png/AM.png) | AM | Armenia |
| ![AO](png/AO.png) | AO | Angola |
| ![AR](png/AR.png) | AR | Argentina |
| ![AT](png/AT.png) | AT | Austria |
| ![AU](png/AU.png) | AU | Australia |
| ![AX](png/AX.png) | AX | Åland Islands |
| ![AZ](png/AZ.png) | AZ | Azerbaijan |
| ![BA](png/BA.png) | BA | Bosnia & Herzegovina |
| ![BB](png/BB.png) | BB | Barbados |
| ![BD](png/BD.png) | BD | Bangladesh |
| ![BE](png/BE.png) | BE | Belgium |
| ![BF](png/BF.png) | BF | Burkina Faso |
| ![BG](png/BG.png) | BG | Bulgaria |
| ![BH](png/BH.png) | BH | Bahrain |
| ![BI](png/BI.png) | BI | Burundi |
| ![BJ](png/BJ.png) | BJ | Benin |
| ![BM](png/BM.png) | BM | Bermuda |
| ![BN](png/BN.png) | BN | Brunei |
| ![BO](png/BO.png) | BO | Bolivia |
| ![BR](png/BR.png) | BR | Brazil |
| ![BS](png/BS.png) | BS | Bahamas |
| ![BT](png/BT.png) | BT | Bhutan |
| ![BW](png/BW.png) | BW | Botswana |
| ![BY](png/BY.png) | BY | Belarus |
| ![BZ](png/BZ.png) | BZ | Belize |
| ![CA](png/CA.png) | CA | Canada |
| ![CD](png/CD.png) | CD | Congo - Kinshasa |
| ![CF](png/CF.png) | CF | Central African Republic |
| ![CG](png/CG.png) | CG | Congo - Brazzaville |
| ![CH](png/CH.png) | CH | Switzerland |
| ![CI](png/CI.png) | CI | Côte d’Ivoire |
| ![CL](png/CL.png) | CL | Chile |
| ![CM](png/CM.png) | CM | Cameroon |
| ![CN](png/CN.png) | CN | China |
| ![CO](png/CO.png) | CO | Colombia |
| ![CR](png/CR.png) | CR | Costa Rica |
| ![CU](png/CU.png) | CU | Cuba |
| ![CV](png/CV.png) | CV | Cape Verde |
| ![CY](png/CY.png) | CY | Cyprus |
| ![CZ](png/CZ.png) | CZ | Czech Republic |
| ![DE](png/DE.png) | DE | Germany |
| ![DJ](png/DJ.png) | DJ | Djibouti |
| ![DK](png/DK.png) | DK | Denmark |
| ![DM](png/DM.png) | DM | Dominica |
| ![DO](png/DO.png) | DO | Dominican Republic |
| ![DZ](png/DZ.png) | DZ | Algeria |
| ![EC](png/EC.png) | EC | Ecuador |
| ![EE](png/EE.png) | EE | Estonia |
| ![EG](png/EG.png) | EG | Egypt |
| ![ER](png/ER.png) | ER | Eritrea |
| ![ES](png/ES.png) | ES | Spain |
| ![ET](png/ET.png) | ET | Ethiopia |
| ![FI](png/FI.png) | FI | Finland |
| ![FJ](png/FJ.png) | FJ | Fiji |
| ![FM](png/FM.png) | FM | Micronesia |
| ![FR](png/FR.png) | FR | France |
| ![GA](png/GA.png) | GA | Gabon |
| ![GB](png/GB.png) | GB | United Kingdom |
| ![GD](png/GD.png) | GD | Grenada |
| ![GE](png/GE.png) | GE | Georgia |
| ![GH](png/GH.png) | GH | Ghana |
| ![GM](png/GM.png) | GM | Gambia |
| ![GN](png/GN.png) | GN | Guinea |
| ![GQ](png/GQ.png) | GQ | Equatorial Guinea |
| ![GR](png/GR.png) | GR | Greece |
| ![GT](png/GT.png) | GT | Guatemala |
| ![GW](png/GW.png) | GW | Guinea-Bissau |
| ![GY](png/GY.png) | GY | Guyana |
| ![HK](png/HK.png) | HK | Hong Kong SAR China |
| ![HN](png/HN.png) | HN | Honduras |
| ![HR](png/HR.png) | HR | Croatia |
| ![HT](png/HT.png) | HT | Haiti |
| ![HU](png/HU.png) | HU | Hungary |
| ![ID](png/ID.png) | ID | Indonesia |
| ![IE](png/IE.png) | IE | Ireland |
| ![IL](png/IL.png) | IL | Israel |
| ![IN](png/IN.png) | IN | India |
| ![IQ](png/IQ.png) | IQ | Iraq |
| ![IR](png/IR.png) | IR | Iran |
| ![IS](png/IS.png) | IS | Iceland |
| ![IT](png/IT.png) | IT | Italy |
| ![JM](png/JM.png) | JM | Jamaica |
| ![JO](png/JO.png) | JO | Jordan |
| ![JP](png/JP.png) | JP | Japan |
| ![KE](png/KE.png) | KE | Kenya |
| ![KG](png/KG.png) | KG | Kyrgyzstan |
| ![KH](png/KH.png) | KH | Cambodia |
| ![KM](png/KM.png) | KM | Comoros |
| ![KN](png/KN.png) | KN | St. Kitts & Nevis |
| ![KP](png/KP.png) | KP | North Korea |
| ![KR](png/KR.png) | KR | South Korea |
| ![KW](png/KW.png) | KW | Kuwait |
| ![KY](png/KY.png) | KY | Cayman Islands |
| ![KZ](png/KZ.png) | KZ | Kazakhstan |
| ![LA](png/LA.png) | LA | Laos |
| ![LB](png/LB.png) | LB | Lebanon |
| ![LC](png/LC.png) | LC | St. Lucia |
| ![LI](png/LI.png) | LI | Liechtenstein |
| ![LK](png/LK.png) | LK | Sri Lanka |
| ![LR](png/LR.png) | LR | Liberia |
| ![LS](png/LS.png) | LS | Lesotho |
| ![LT](png/LT.png) | LT | Lithuania |
| ![LU](png/LU.png) | LU | Luxembourg |
| ![LV](png/LV.png) | LV | Latvia |
| ![LY](png/LY.png) | LY | Libya |
| ![MA](png/MA.png) | MA | Morocco |
| ![MC](png/MC.png) | MC | Monaco |
| ![MD](png/MD.png) | MD | Moldova |
| ![ME](png/ME.png) | ME | Montenegro |
| ![MG](png/MG.png) | MG | Madagascar |
| ![MK](png/MK.png) | MK | Macedonia |
| ![ML](png/ML.png) | ML | Mali |
| ![MM](png/MM.png) | MM | Myanmar (Burma) |
| ![MN](png/MN.png) | MN | Mongolia |
| ![MO](png/MO.png) | MO | Macau SAR China |
| ![MR](png/MR.png) | MR | Mauritania |
| ![MS](png/MS.png) | MS | Montserrat |
| ![MT](png/MT.png) | MT | Malta |
| ![MU](png/MU.png) | MU | Mauritius |
| ![MV](png/MV.png) | MV | Maldives |
| ![MW](png/MW.png) | MW | Malawi |
| ![MX](png/MX.png) | MX | Mexico |
| ![MY](png/MY.png) | MY | Malaysia |
| ![MZ](png/MZ.png) | MZ | Mozambique |
| ![NA](png/NA.png) | NA | Namibia |
| ![NE](png/NE.png) | NE | Niger |
| ![NG](png/NG.png) | NG | Nigeria |
| ![NI](png/NI.png) | NI | Nicaragua |
| ![NL](png/NL.png) | NL | Netherlands |
| ![NO](png/NO.png) | NO | Norway |
| ![NP](png/NP.png) | NP | Nepal |
| ![NZ](png/NZ.png) | NZ | New Zealand |
| ![OM](png/OM.png) | OM | Oman |
| ![PA](png/PA.png) | PA | Panama |
| ![PE](png/PE.png) | PE | Peru |
| ![PG](png/PG.png) | PG | Papua New Guinea |
| ![PH](png/PH.png) | PH | Philippines |
| ![PK](png/PK.png) | PK | Pakistan |
| ![PL](png/PL.png) | PL | Poland |
| ![PR](png/PR.png) | PR | Puerto Rico |
| ![PT](png/PT.png) | PT | Portugal |
| ![PW](png/PW.png) | PW | Palau |
| ![PY](png/PY.png) | PY | Paraguay |
| ![QA](png/QA.png) | QA | Qatar |
| ![RO](png/RO.png) | RO | Romania |
| ![RS](png/RS.png) | RS | Serbia |
| ![RU](png/RU.png) | RU | Russia |
| ![RW](png/RW.png) | RW | Rwanda |
| ![SA](png/SA.png) | SA | Saudi Arabia |
| ![SB](png/SB.png) | SB | Solomon Islands |
| ![SC](png/SC.png) | SC | Seychelles |
| ![SD](png/SD.png) | SD | Sudan |
| ![SE](png/SE.png) | SE | Sweden |
| ![SG](png/SG.png) | SG | Singapore |
| ![SI](png/SI.png) | SI | Slovenia |
| ![SK](png/SK.png) | SK | Slovakia |
| ![SL](png/SL.png) | SL | Sierra Leone |
| ![SM](png/SM.png) | SM | San Marino |
| ![SN](png/SN.png) | SN | Senegal |
| ![SO](png/SO.png) | SO | Somalia |
| ![SR](png/SR.png) | SR | Suriname |
| ![ST](png/ST.png) | ST | São Tomé & Príncipe |
| ![SV](png/SV.png) | SV | El Salvador |
| ![SY](png/SY.png) | SY | Syria |
| ![SZ](png/SZ.png) | SZ | Swaziland |
| ![TC](png/TC.png) | TC | Turks & Caicos Islands |
| ![TD](png/TD.png) | TD | Chad |
| ![TG](png/TG.png) | TG | Togo |
| ![TH](png/TH.png) | TH | Thailand |
| ![TJ](png/TJ.png) | TJ | Tajikistan |
| ![TL](png/TL.png) | TL | Timor-Leste |
| ![TM](png/TM.png) | TM | Turkmenistan |
| ![TN](png/TN.png) | TN | Tunisia |
| ![TO](png/TO.png) | TO | Tonga |
| ![TR](png/TR.png) | TR | Turkey |
| ![TT](png/TT.png) | TT | Trinidad & Tobago |
| ![TW](png/TW.png) | TW | Taiwan |
| ![TZ](png/TZ.png) | TZ | Tanzania |
| ![UA](png/UA.png) | UA | Ukraine |
| ![UG](png/UG.png) | UG | Uganda |
| ![US](png/US.png) | US | United States |
| ![UY](png/UY.png) | UY | Uruguay |
| ![UZ](png/UZ.png) | UZ | Uzbekistan |
| ![VC](png/VC.png) | VC | St. Vincent & Grenadines |
| ![VE](png/VE.png) | VE | Venezuela |
| ![VG](png/VG.png) | VG | British Virgin Islands |
| ![VN](png/VN.png) | VN | Vietnam |
| ![WS](png/WS.png) | WS | Samoa |
| ![YE](png/YE.png) | YE | Yemen |
| ![ZA](png/ZA.png) | ZA | South Africa |
| ![ZW](png/ZW.png) | ZW | Zimbabwe |

# Todo
- Maybe an index website (?).
- Pull `sketch` files from original source [madebybowtie/FlagKit](https://github.com/madebybowtie/FlagKit) using `grunt-git` instead.
- After pull, convert them in `svg` and `png` format automatically.

# Contribute
Pull requests are most than welcome.

# License
Released under the MIT license.

# Change Log
## [1.2.4] - 2017-07-09
- Code cleaning.
- Readme edited.

## [1.2.3] - 2017-06-27
- Readme edited.

## [1.2.3] - 2017-06-27
- Readme edited.

## [1.2.2] - 2017-06-27
- Link to **ISO 3166-1-alpha-2 code** updated.
- Readme edited.

## [1.2.1] - 2017-06-27
- Readme edited.

## [1.2.0] - 2017-06-27
- `grunt` integrated for better and cleaner approach.
- `png` flags.
- Readme edited.

## [1.1.0] - 2017-06-26
- `sass` better approach.
- Better instructions in Readme.

## [1.0.0] - 2017-06-26
- `svg` flags.
- `sass` boilerplate.
- `css` libraries.

## [0.0.0] - 2017-06-26
- Initial commit.
- Readme + license.

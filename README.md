# Flag icons ![CO](/svg/CO.svg)
A beautiful `svg` collection of countries flags + `sass` + `css` implementation.

# Icons
All `sketch` + `png` files are in [madebybowtie/FlagKit](https://github.com/madebybowtie/FlagKit). Currently `svg` is just supported in [this](https://github.com/lucidlemon/FlagKit) fork, and it's still pending for integration.

# Instructions
Use `<i>` or `<span>` tags and add the class `flag-icons` followed by the flag `code` (look **Reference** for details) which is the [ISO 3166-1-alpha-2 code](https://www.iso.org/obp/ui/#search/code/) for each one. The result is a rectangular flag, however, the `square` class can be used if a square flag is required.

```html
<!-- Using <i> -->
<i class="flag-icons CO"></i>
<i class="flag-icons square CO"></i>

<!-- Using <span> -->
<span class="flag-icons CO"></span>
<span class="flag-icons square CO"></span>
```

You can also format the default size of the flag in your `css` file:

```css
.flag-icons,    /* Formatting default */
.rectangle {    /* Or use as new class */
  height: 2em !important;
  width: 2.66667em !important;
  line-height: 2em !important;
}

.flag-icons,    /* Formatting default */
.square {       /* Or formatting default square class */
  height: 2em !important;
  width: 2em !important;
  line-height: 2em !important;
}
```

Then,

```html
<!-- Rectangle -->
<i class="flag-icons CO"></i>
<i class="flag-icons rectangle CO"></i>

<!-- Square -->
<i class="flag-icons CO"></i>
<i class="flag-icons square CO"></i>
```

# Reference
## Extras
| Flag | Code | Region |
| :-------------: | :-------------: | :-------------: |
| ![AD](svg/EU.svg) | EU | European Union |
| ![AE](svg/WW.svg) | WW | World |
| ![CNA](svg/CNA.svg) | CNA | North America |
| ![CSA](svg/CSA.svg) | CSA | South America |
| ![CEU](svg/CEU.svg) | CEU | Europe |
| ![CAF](svg/CAF.svg) | CAF | Africa |
| ![CAS](svg/CAS.svg) | CAS | Asia |
| ![COC](svg/COC.svg) | COC | Oceania |

## Countries
| Flag | Code | Country |
| :-------------: | :-------------: | :-------------: |
| ![AD](svg/AD.svg) | AD | Andorra |
| ![AE](svg/AE.svg) | AE | United Arab Emirates |
| ![AF](svg/AF.svg) | AF | Afghanistan |
| ![AG](svg/AG.svg) | AG | Antigua & Barbuda |
| ![AI](svg/AI.svg) | AI | Anguilla |
| ![AL](svg/AL.svg) | AL | Albania |
| ![AM](svg/AM.svg) | AM | Armenia |
| ![AO](svg/AO.svg) | AO | Angola |
| ![AR](svg/AR.svg) | AR | Argentina |
| ![AT](svg/AT.svg) | AT | Austria |
| ![AU](svg/AU.svg) | AU | Australia |
| ![AX](svg/AX.svg) | AX | Åland Islands |
| ![AZ](svg/AZ.svg) | AZ | Azerbaijan |
| ![BA](svg/BA.svg) | BA | Bosnia & Herzegovina |
| ![BB](svg/BB.svg) | BB | Barbados |
| ![BD](svg/BD.svg) | BD | Bangladesh |
| ![BE](svg/BE.svg) | BE | Belgium |
| ![BF](svg/BF.svg) | BF | Burkina Faso |
| ![BG](svg/BG.svg) | BG | Bulgaria |
| ![BH](svg/BH.svg) | BH | Bahrain |
| ![BI](svg/BI.svg) | BI | Burundi |
| ![BJ](svg/BJ.svg) | BJ | Benin |
| ![BM](svg/BM.svg) | BM | Bermuda |
| ![BN](svg/BN.svg) | BN | Brunei |
| ![BO](svg/BO.svg) | BO | Bolivia |
| ![BR](svg/BR.svg) | BR | Brazil |
| ![BS](svg/BS.svg) | BS | Bahamas |
| ![BT](svg/BT.svg) | BT | Bhutan |
| ![BW](svg/BW.svg) | BW | Botswana |
| ![BY](svg/BY.svg) | BY | Belarus |
| ![BZ](svg/BZ.svg) | BZ | Belize |
| ![CA](svg/CA.svg) | CA | Canada |
| ![CD](svg/CD.svg) | CD | Congo - Kinshasa |
| ![CF](svg/CF.svg) | CF | Central African Republic |
| ![CG](svg/CG.svg) | CG | Congo - Brazzaville |
| ![CH](svg/CH.svg) | CH | Switzerland |
| ![CI](svg/CI.svg) | CI | Côte d’Ivoire |
| ![CL](svg/CL.svg) | CL | Chile |
| ![CM](svg/CM.svg) | CM | Cameroon |
| ![CN](svg/CN.svg) | CN | China |
| ![CO](svg/CO.svg) | CO | Colombia |
| ![CR](svg/CR.svg) | CR | Costa Rica |
| ![CU](svg/CU.svg) | CU | Cuba |
| ![CV](svg/CV.svg) | CV | Cape Verde |
| ![CY](svg/CY.svg) | CY | Cyprus |
| ![CZ](svg/CZ.svg) | CZ | Czech Republic |
| ![DE](svg/DE.svg) | DE | Germany |
| ![DJ](svg/DJ.svg) | DJ | Djibouti |
| ![DK](svg/DK.svg) | DK | Denmark |
| ![DM](svg/DM.svg) | DM | Dominica |
| ![DO](svg/DO.svg) | DO | Dominican Republic |
| ![DZ](svg/DZ.svg) | DZ | Algeria |
| ![EC](svg/EC.svg) | EC | Ecuador |
| ![EE](svg/EE.svg) | EE | Estonia |
| ![EG](svg/EG.svg) | EG | Egypt |
| ![ER](svg/ER.svg) | ER | Eritrea |
| ![ES](svg/ES.svg) | ES | Spain |
| ![ET](svg/ET.svg) | ET | Ethiopia |
| ![FI](svg/FI.svg) | FI | Finland |
| ![FJ](svg/FJ.svg) | FJ | Fiji |
| ![FM](svg/FM.svg) | FM | Micronesia |
| ![FR](svg/FR.svg) | FR | France |
| ![GA](svg/GA.svg) | GA | Gabon |
| ![GB](svg/GB.svg) | GB | United Kingdom |
| ![GD](svg/GD.svg) | GD | Grenada |
| ![GE](svg/GE.svg) | GE | Georgia |
| ![GH](svg/GH.svg) | GH | Ghana |
| ![GM](svg/GM.svg) | GM | Gambia |
| ![GN](svg/GN.svg) | GN | Guinea |
| ![GQ](svg/GQ.svg) | GQ | Equatorial Guinea |
| ![GR](svg/GR.svg) | GR | Greece |
| ![GT](svg/GT.svg) | GT | Guatemala |
| ![GW](svg/GW.svg) | GW | Guinea-Bissau |
| ![GY](svg/GY.svg) | GY | Guyana |
| ![HK](svg/HK.svg) | HK | Hong Kong SAR China |
| ![HN](svg/HN.svg) | HN | Honduras |
| ![HR](svg/HR.svg) | HR | Croatia |
| ![HT](svg/HT.svg) | HT | Haiti |
| ![HU](svg/HU.svg) | HU | Hungary |
| ![ID](svg/ID.svg) | ID | Indonesia |
| ![IE](svg/IE.svg) | IE | Ireland |
| ![IL](svg/IL.svg) | IL | Israel |
| ![IN](svg/IN.svg) | IN | India |
| ![IQ](svg/IQ.svg) | IQ | Iraq |
| ![IR](svg/IR.svg) | IR | Iran |
| ![IS](svg/IS.svg) | IS | Iceland |
| ![IT](svg/IT.svg) | IT | Italy |
| ![JM](svg/JM.svg) | JM | Jamaica |
| ![JO](svg/JO.svg) | JO | Jordan |
| ![JP](svg/JP.svg) | JP | Japan |
| ![KE](svg/KE.svg) | KE | Kenya |
| ![KG](svg/KG.svg) | KG | Kyrgyzstan |
| ![KH](svg/KH.svg) | KH | Cambodia |
| ![KM](svg/KM.svg) | KM | Comoros |
| ![KN](svg/KN.svg) | KN | St. Kitts & Nevis |
| ![KP](svg/KP.svg) | KP | North Korea |
| ![KR](svg/KR.svg) | KR | South Korea |
| ![KW](svg/KW.svg) | KW | Kuwait |
| ![KY](svg/KY.svg) | KY | Cayman Islands |
| ![KZ](svg/KZ.svg) | KZ | Kazakhstan |
| ![LA](svg/LA.svg) | LA | Laos |
| ![LB](svg/LB.svg) | LB | Lebanon |
| ![LC](svg/LC.svg) | LC | St. Lucia |
| ![LI](svg/LI.svg) | LI | Liechtenstein |
| ![LK](svg/LK.svg) | LK | Sri Lanka |
| ![LR](svg/LR.svg) | LR | Liberia |
| ![LS](svg/LS.svg) | LS | Lesotho |
| ![LT](svg/LT.svg) | LT | Lithuania |
| ![LU](svg/LU.svg) | LU | Luxembourg |
| ![LV](svg/LV.svg) | LV | Latvia |
| ![LY](svg/LY.svg) | LY | Libya |
| ![MA](svg/MA.svg) | MA | Morocco |
| ![MC](svg/MC.svg) | MC | Monaco |
| ![MD](svg/MD.svg) | MD | Moldova |
| ![ME](svg/ME.svg) | ME | Montenegro |
| ![MG](svg/MG.svg) | MG | Madagascar |
| ![MK](svg/MK.svg) | MK | Macedonia |
| ![ML](svg/ML.svg) | ML | Mali |
| ![MM](svg/MM.svg) | MM | Myanmar (Burma) |
| ![MN](svg/MN.svg) | MN | Mongolia |
| ![MO](svg/MO.svg) | MO | Macau SAR China |
| ![MR](svg/MR.svg) | MR | Mauritania |
| ![MS](svg/MS.svg) | MS | Montserrat |
| ![MT](svg/MT.svg) | MT | Malta |
| ![MU](svg/MU.svg) | MU | Mauritius |
| ![MV](svg/MV.svg) | MV | Maldives |
| ![MW](svg/MW.svg) | MW | Malawi |
| ![MX](svg/MX.svg) | MX | Mexico |
| ![MY](svg/MY.svg) | MY | Malaysia |
| ![MZ](svg/MZ.svg) | MZ | Mozambique |
| ![NA](svg/NA.svg) | NA | Namibia |
| ![NE](svg/NE.svg) | NE | Niger |
| ![NG](svg/NG.svg) | NG | Nigeria |
| ![NI](svg/NI.svg) | NI | Nicaragua |
| ![NL](svg/NL.svg) | NL | Netherlands |
| ![NO](svg/NO.svg) | NO | Norway |
| ![NP](svg/NP.svg) | NP | Nepal |
| ![NZ](svg/NZ.svg) | NZ | New Zealand |
| ![OM](svg/OM.svg) | OM | Oman |
| ![PA](svg/PA.svg) | PA | Panama |
| ![PE](svg/PE.svg) | PE | Peru |
| ![PG](svg/PG.svg) | PG | Papua New Guinea |
| ![PH](svg/PH.svg) | PH | Philippines |
| ![PK](svg/PK.svg) | PK | Pakistan |
| ![PL](svg/PL.svg) | PL | Poland |
| ![PR](svg/PR.svg) | PR | Puerto Rico |
| ![PT](svg/PT.svg) | PT | Portugal |
| ![PW](svg/PW.svg) | PW | Palau |
| ![PY](svg/PY.svg) | PY | Paraguay |
| ![QA](svg/QA.svg) | QA | Qatar |
| ![RO](svg/RO.svg) | RO | Romania |
| ![RS](svg/RS.svg) | RS | Serbia |
| ![RU](svg/RU.svg) | RU | Russia |
| ![RW](svg/RW.svg) | RW | Rwanda |
| ![SA](svg/SA.svg) | SA | Saudi Arabia |
| ![SB](svg/SB.svg) | SB | Solomon Islands |
| ![SC](svg/SC.svg) | SC | Seychelles |
| ![SD](svg/SD.svg) | SD | Sudan |
| ![SE](svg/SE.svg) | SE | Sweden |
| ![SG](svg/SG.svg) | SG | Singapore |
| ![SI](svg/SI.svg) | SI | Slovenia |
| ![SK](svg/SK.svg) | SK | Slovakia |
| ![SL](svg/SL.svg) | SL | Sierra Leone |
| ![SM](svg/SM.svg) | SM | San Marino |
| ![SN](svg/SN.svg) | SN | Senegal |
| ![SO](svg/SO.svg) | SO | Somalia |
| ![SR](svg/SR.svg) | SR | Suriname |
| ![ST](svg/ST.svg) | ST | São Tomé & Príncipe |
| ![SV](svg/SV.svg) | SV | El Salvador |
| ![SY](svg/SY.svg) | SY | Syria |
| ![SZ](svg/SZ.svg) | SZ | Swaziland |
| ![TC](svg/TC.svg) | TC | Turks & Caicos Islands |
| ![TD](svg/TD.svg) | TD | Chad |
| ![TG](svg/TG.svg) | TG | Togo |
| ![TH](svg/TH.svg) | TH | Thailand |
| ![TJ](svg/TJ.svg) | TJ | Tajikistan |
| ![TL](svg/TL.svg) | TL | Timor-Leste |
| ![TM](svg/TM.svg) | TM | Turkmenistan |
| ![TN](svg/TN.svg) | TN | Tunisia |
| ![TO](svg/TO.svg) | TO | Tonga |
| ![TR](svg/TR.svg) | TR | Turkey |
| ![TT](svg/TT.svg) | TT | Trinidad & Tobago |
| ![TW](svg/TW.svg) | TW | Taiwan |
| ![TZ](svg/TZ.svg) | TZ | Tanzania |
| ![UA](svg/UA.svg) | UA | Ukraine |
| ![UG](svg/UG.svg) | UG | Uganda |
| ![US](svg/US.svg) | US | United States |
| ![UY](svg/UY.svg) | UY | Uruguay |
| ![UZ](svg/UZ.svg) | UZ | Uzbekistan |
| ![VC](svg/VC.svg) | VC | St. Vincent & Grenadines |
| ![VE](svg/VE.svg) | VE | Venezuela |
| ![VG](svg/VG.svg) | VG | British Virgin Islands |
| ![VN](svg/VN.svg) | VN | Vietnam |
| ![WS](svg/WS.svg) | WS | Samoa |
| ![YE](svg/YE.svg) | YE | Yemen |
| ![ZA](svg/ZA.svg) | ZA | South Africa |
| ![ZW](svg/ZW.svg) | ZW | Zimbabwe |

# Contribute
Pull requests are most than welcome.

# License
Released under the MIT license.

# Change Log
## [1.1.0] - 2017-06-26
- *sass* better approach.
- Better instructions in *readme*.

## [1.0.0] - 2017-06-26
- *svg* flags.
- *sass* boilerplate.
- *css* libraries.

## [0.0.0] - 2017-06-26
- Initial commit.
- *readme* + *license*.

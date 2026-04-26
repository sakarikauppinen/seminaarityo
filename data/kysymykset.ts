import type { Kysymys } from "@/types/kysymys";

export const kysymykset: Kysymys[] = [
  {
    id: 1,
    kysymys: "Kuinka monta viivaa on tavallisessa nuottiviivastossa?",
    vaihtoehdot: ["4", "5", "6", "7"],
    oikeaVastaus: "5",
  },
  {
    id: 2,
    kysymys: "Kuinka monta puolisävelaskelta on oktaavissa länsimaisessa musiikissa?",
    vaihtoehdot: ["6", "8", "10", "12"],
    oikeaVastaus: "12",
  },
  {
    id: 3,
    kysymys: "Mikä näistä tarkoittaa musiikin nopeutta?",
    vaihtoehdot: ["Dynamiikka", "Tempo", "Sointiväri", "Muotorakenne"],
    oikeaVastaus: "Tempo",
  },
  {
    id: 4,
    kysymys: "Mikä sana tarkoittaa musiikissa voimakkuutta?",
    vaihtoehdot: ["Harmonia", "Dynamiikka", "Artikulaatio", "Intervalli"],
    oikeaVastaus: "Dynamiikka",
  },
  {
    id: 5,
    kysymys: "Mitä sana 'forte' tarkoittaa musiikissa?",
    vaihtoehdot: ["Hiljaa", "Voimakkaasti", "Hitaasti", "Kiihdyttäen"],
    oikeaVastaus: "Voimakkaasti",
  },
  {
    id: 6,
    kysymys: "Mitä sana 'piano' tarkoittaa dynamiikkamerkintänä?",
    vaihtoehdot: ["Hiljaa", "Voimakkaasti", "Nopeasti", "Tasaisesti"],
    oikeaVastaus: "Hiljaa",
  },
  {
    id: 7,
    kysymys: "Mikä tahtilaji tarkoittaa neljää neljäsosaa tahdissa?",
    vaihtoehdot: ["2/4", "3/4", "4/4", "6/8"],
    oikeaVastaus: "4/4",
  },
  {
    id: 8,
    kysymys: "Mikä tahtilaji yhdistetään usein valssiin?",
    vaihtoehdot: ["2/4", "3/4", "4/4", "5/4"],
    oikeaVastaus: "3/4",
  },
  {
    id: 9,
    kysymys: "Mikä näistä on C-duuriasteikon sävelet oikein alusta loppuun?",
    vaihtoehdot: [
      "C–D–E–F–G–A–H",
      "C–D–Es–F–G–A–B",
      "C–Des–E–F–G–As–H",
      "C–D–E–Fis–G–A–H",
    ],
    oikeaVastaus: "C–D–E–F–G–A–H",
  },
  {
    id: 10,
    kysymys: "Mikä on C-duurin rinnakkaismolli?",
    vaihtoehdot: ["c-molli", "a-molli", "g-molli", "e-molli"],
    oikeaVastaus: "a-molli",
  },
  {
    id: 11,
    kysymys: "Mikä on a-mollin rinnakkaisduuri?",
    vaihtoehdot: ["A-duuri", "C-duuri", "E-duuri", "G-duuri"],
    oikeaVastaus: "C-duuri",
  },
  {
    id: 12,
    kysymys: "Mikä intervalli on etäisyys sävelestä C säveleen G?",
    vaihtoehdot: ["Kvarti", "Kvintti", "Seksti", "Oktaavi"],
    oikeaVastaus: "Kvintti",
  },
  {
    id: 13,
    kysymys: "Mikä intervalli on etäisyys sävelestä C säveleen F?",
    vaihtoehdot: ["Terssi", "Kvarti", "Kvintti", "Septimi"],
    oikeaVastaus: "Kvarti",
  },
  {
    id: 14,
    kysymys: "Mikä intervalli on etäisyys sävelestä C säveleen E?",
    vaihtoehdot: ["Sekunti", "Terssi", "Kvarti", "Seksti"],
    oikeaVastaus: "Terssi",
  },
  {
    id: 15,
    kysymys: "Mistä sävelistä muodostuu C-duurisointu?",
    vaihtoehdot: ["C–E–G", "C–D–G", "C–F–A", "C–E–A"],
    oikeaVastaus: "C–E–G",
  },
  {
    id: 16,
    kysymys: "Mistä sävelistä muodostuu a-mollisointu?",
    vaihtoehdot: ["A–C–E", "A–D–E", "A–Cis–E", "A–H–E"],
    oikeaVastaus: "A–C–E",
  },
  {
    id: 17,
    kysymys: "Mikä näistä kuvaa duurisointua parhaiten?",
    vaihtoehdot: [
      "Pohjasävel, pieni terssi, puhdas kvintti",
      "Pohjasävel, suuri terssi, puhdas kvintti",
      "Pohjasävel, suuri sekunti, kvarti",
      "Pohjasävel, pieni sekunti, tritonus",
    ],
    oikeaVastaus: "Pohjasävel, suuri terssi, puhdas kvintti",
  },
  {
    id: 18,
    kysymys: "Mikä näistä kuvaa mollisointua parhaiten?",
    vaihtoehdot: [
      "Pohjasävel, suuri terssi, puhdas kvintti",
      "Pohjasävel, pieni terssi, puhdas kvintti",
      "Pohjasävel, suuri seksti, oktaavi",
      "Pohjasävel, kvarti, septimi",
    ],
    oikeaVastaus: "Pohjasävel, pieni terssi, puhdas kvintti",
  },
  {
    id: 19,
    kysymys: "Mitä ylennysmerkki tekee sävelelle?",
    vaihtoehdot: [
      "Laskee säveltä puolisävelaskeleen",
      "Nostaa säveltä puolisävelaskeleen",
      "Poistaa etumerkin vaikutuksen",
      "Pidentää sävelen kestoa",
    ],
    oikeaVastaus: "Nostaa säveltä puolisävelaskeleen",
  },
  {
    id: 20,
    kysymys: "Mitä alennusmerkki tekee sävelelle?",
    vaihtoehdot: [
      "Nostaa säveltä puolisävelaskeleen",
      "Laskee säveltä puolisävelaskeleen",
      "Nopeuttaa tempoa",
      "Tekee sävelestä staccaton",
    ],
    oikeaVastaus: "Laskee säveltä puolisävelaskeleen",
  },
  {
    id: 21,
    kysymys: "Mikä merkki kumoaa aiemman ylennyksen tai alennuksen tahdin sisällä?",
    vaihtoehdot: ["Taukoviiva", "Palautusmerkki", "Fermata", "Sidoskaari"],
    oikeaVastaus: "Palautusmerkki",
  },
  {
    id: 22,
    kysymys: "Kuinka monta ylennystä on G-duurin etumerkinnässä?",
    vaihtoehdot: ["0", "1", "2", "3"],
    oikeaVastaus: "1",
  },
  {
    id: 23,
    kysymys: "Kuinka monta alennusta on F-duurin etumerkinnässä?",
    vaihtoehdot: ["0", "1", "2", "3"],
    oikeaVastaus: "1",
  },
  {
    id: 24,
    kysymys: "Mikä näistä on luonnollisen molliasteikon peruspiirre duuriasteikkoon verrattuna?",
    vaihtoehdot: [
      "Kolmas sävel on alempi",
      "Ensimmäinen sävel puuttuu",
      "Siinä ei ole puolisävelaskeleita",
      "Se sisältää aina yhden ylennyksen",
    ],
    oikeaVastaus: "Kolmas sävel on alempi",
  },
  {
    id: 25,
    kysymys: "Mitä tarkoittaa legato?",
    vaihtoehdot: [
      "Sävelet soitetaan irtonaisesti",
      "Sävelet soitetaan sidotusti",
      "Sävelet soitetaan hyvin hiljaa",
      "Sävelet soitetaan oktaavia ylempää",
    ],
    oikeaVastaus: "Sävelet soitetaan sidotusti",
  },
  {
    id: 26,
    kysymys: "Mitä tarkoittaa staccato?",
    vaihtoehdot: [
      "Sävelet soitetaan sidotusti",
      "Sävelet soitetaan irtonaisesti",
      "Sävelet soitetaan hitaasti",
      "Sävelet lauletaan ilman sanoja",
    ],
    oikeaVastaus: "Sävelet soitetaan irtonaisesti",
  },
  {
    id: 27,
    kysymys: "Mikä on intervalli sävelestä C seuraavaan samannimiseen C:hen?",
    vaihtoehdot: ["Seksti", "Septimi", "Oktaavi", "Noni"],
    oikeaVastaus: "Oktaavi",
  },
  {
    id: 28,
    kysymys: "Mikä seuraavista liittyy rytmiin?",
    vaihtoehdot: [
      "Sävelten ajallinen jäsentely",
      "Sävelten korkeusjärjestys",
      "Sävelten voimakkuusmerkinnät",
      "Etumerkkien määrä",
    ],
    oikeaVastaus: "Sävelten ajallinen jäsentely",
  },
];

/*
Lähteet:
TypeScript Documentation / Everyday Types:
  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html
Kysymykset on laadittu tätä harjoitustyötä varten tekoälyä hyödyntäen ja painotettu musiikinteorian peruskäsitteisiin.
*/
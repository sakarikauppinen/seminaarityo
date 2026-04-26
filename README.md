# Seminaarityö: Selainpohjainen tietovisasovellus Next.js:llä ja TypeScriptillä

## 0. Esittelyvideo

Latasin seminaarityön esittelyvideon YouTubeen piilotettuna. Videon voi katsoa tästä linkistä:(https://youtu.be/sD9m0Sd3qXo)

---

## 1. Työn aihe

Tässä seminaarityössä toteutin selainpohjaisen tietovisasovelluksen käyttäen **Next.js:ää**, **Reactia** ja **TypeScriptiä**. Sovellus näyttää käyttäjälle musiikinteorian monivalintakysymyksiä yksi kerrallaan, tarkistaa vastaukset ja laskee pisteitä.

Työn tarkoituksena oli perehtyä käytännössä siihen, miten **Next.js:n App Router**, **route handlerit** ja **client-komponentit** toimivat yhdessä pienessä mutta toimivassa sovelluksessa. Samalla harjoittelin TypeScriptin käyttöä React-pohjaisessa projektissa.

Valitsin aiheen, koska halusin tehdä teknisesti melko pienen mutta käytännössä hyödyllisen sovelluksen, jossa pääsen yhdistämään käyttöliittymän, tyypitetyn datan, API-reitin ja pienen määrän sovelluslogiikkaa.

---

## 2. Työn tavoitteet

Työn tavoitteena oli:

- toteuttaa toimiva selainpohjainen tietovisasovellus
- käyttää Next.js:n **App Router** -rakennetta
- hakea kysymysdata **route handlerin** kautta
- toteuttaa käyttöliittymä **client-komponenttina**
- hyödyntää TypeScriptiä datan tyypityksessä ja komponenttien toteutuksessa
- rakentaa selkeä ja helposti ymmärrettävä projektirakenne
- toteuttaa kierros, jossa käyttäjälle näytetään satunnaisesti valitut 10 kysymystä

Lisäksi tavoitteena oli ymmärtää paremmin, miten Next.js eroaa tavallisesta React-sovelluksesta silloin, kun samassa projektissa toteutetaan sekä käyttöliittymä että yksinkertainen API-reitti.

---

## 3. Rajaus

Työ rajattiin tarkoituksella melko pieneksi aikataulullisista syistä ja oman osaamistason huomioiden.

### Työhön kuuluu


- kysymysten näyttäminen yksi kerrallaan
- monivalintavaihtoehdot
- vastauksen tarkistaminen
- pisteiden laskeminen
- lopputuloksen näyttäminen
- uuden kierroksen aloittaminen
- kysymysdatan haku route handlerin kautta

### Työhön ei kuulu

- kirjautuminen
- tietokanta
- tulostaulukko
- vaikeustasot
- muut laajemmat lisäominaisuudet

---

## 4. Käytetyt teknologiat

Työssä käytettiin seuraavia teknologioita:

- **Next.js** – sovelluksen runko ja reititys
- **React** – käyttöliittymäkomponentit
- **TypeScript** – tyypitys ja virheiden ennaltaehkäisy
- **CSS** – käyttöliittymän perusmuotoilu
- **Route Handler** – kysymysdatan tarjoaminen käyttöliittymälle JSON-muodossa

### Miksi valitsin nämä teknologiat?

Valitsin Next.js:n, koska halusin opetella Reactia ja samalla nähdä käytännössä, miten frontend ja kevyt backend-rajapinta toteutetaan. TypeScript valikoitui, koska se tekee datan rakenteesta selkeän ja auttaa virheiden havaitsemisessa jo kehitysvaiheessa.

---

## 5. Sovelluksen toiminta

Sovellus toimii seuraavasti:

1. käyttäjä avaa sovelluksen selaimessa
2. käyttöliittymä hakee kysymykset route handlerin kautta
3. kaikki kysymykset sekoitetaan satunnaiseen järjestykseen
4. sovellus valitsee niistä 10 kysymystä yhtä kierrosta varten
5. käyttäjälle näytetään yksi kysymys kerrallaan
6. käyttäjä valitsee yhden vastausvaihtoehdon
7. sovellus tarkistaa, onko vastaus oikein
8. pistemäärä päivittyy
9. siirrytään seuraavaan kysymykseen
10. lopuksi näytetään käyttäjän pistemäärä
11. käyttäjä voi aloittaa uuden kierroksen, jolloin kysymykset arvotaan uudelleen

---

## 6. Datan rakenne

Kysymykset tallennetaan rakenteiseen muotoon. Jokaisella kysymyksellä on seuraavat tiedot:

- `id`
- `kysymys`
- `vaihtoehdot`
- `oikeaVastaus`

## 7.0 Toteutus

### 7.1 Huomio tekoälyn käytöstä

Koodin muotoiluun ja ulkoasun hiomiseen on käytetty m365 GPT 5.4 Think tekoälymallia. Raportin tekstin rakenteen muotoiluun ja joihinkin lauseisiin on hyödynnetty tekoälyä. Työn idea, rajaus, sisältö, tekniset ratkaisut ja toteutettu koodi ovat kuitenkin tehty oppiminen edellä omien valintojen pohjalta.

### 7.2 Projektin rakenne
Projektin rakenne on seuraava:

seminaarityo/
├─ app/
│  ├─ api/
│  │  └─ questions/
│  │     └─ route.ts
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ Kysymyskortti.tsx
│  ├─ Tietovisa.tsx
│  └─ Tulosnakyma.tsx
├─ data/
│  └─ kysymykset.ts
├─ types/
│  └─ kysymys.ts
├─ public/
├─ README.md
├─ package.json
└─ tsconfig.json

### 7.3 Keskeiset tiedostot
types/kysymys.ts
Määrittelee sovelluksen käyttämän Kysymys-tyypin.

data/kysymykset.ts
Sisältää tietovisan kysymysdatan.

app/api/questions/route.ts
Route handler, joka palauttaa kysymysdatan JSON-muodossa

components/Kysymyskortti.tsx
Näyttää yhden kysymyksen ja sen vastausvaihtoehdot.

components/Tulosnakyma.tsx
Näyttää lopputuloksen ja painikkeen uuden kierroksen aloittamiseen.

components/Tietovisa.tsx
Tietovisan pääkomponentti, joka:

- hakee kysymykset API-reitiltä
- sekoittaa kysymyslistan
- valitsee 10 satunnaista kysymystä yhtä kierrosta varten
- kontrolloi kysymyksiä
- tarkistaa vastaukset
- laskee pisteet
- näyttää lopputuloksen

app/page.tsx
Sovelluksen etusivu, joka renderöi Tietovisa-komponentin.

app/globals.css
Sisältää sovelluksen perusulkoasun.

### 7.4 flowchart
Miten sovellus etenee:
    A[Käyttäjä avaa sovelluksen] --> B[page.tsx latautuu]
     -> [Tietovisa client-komponentti käynnistyy]
     -> [Fetch /api/questions]
     -> [Route handler palauttaa kysymykset]
     -> [Kysymykset sekoitetaan]
     -> [Valitaan 10 kysymystä]
     -> [Näytetään yksi kysymys]
     -> [Käyttäjä valitsee vastauksen]
     -> [Tarkistetaan vastaus]
     -> [Päivitetään pisteet]
        -> {Onko kysymyksiä jäljellä?}
        - Kyllä -> [Näytetään yksi kysymys]
                    -> [Käyttäjä valitsee vastauksen]
                    -> [Tarkistetaan vastaus]
                    -> [Päivitetään pisteet]
        - Ei -> [Näytetään lopputulos]

## 8. Mitä opin työn aikana
Työn aikana opin erityisesti seuraavia asioita:

- miten Next.js:n App Router -rakenne toimii käytännössä?
- miten route handler toteutetaan
- milloin komponentti tehdään client-komponenttina
- miten TypeScript auttaa datan käsittelyssä
- miten sovellus jaetaan selkeisiin komponentteihin
- miten satunnainen kysymys voidaan toteuttaa

Opin myös, että kun Kysymys-tyyppi oli määritelty heti alussa, käyttöliittymälogiikka oli ehkä helpompi rakentaa sen päälle.
Toinen hyödyllinen asia oli se, että projekti kannattaa toteuttaa jotenkin loogisissa vaiheissa. Aloitin nyt datan rakenteesta ja API-reitistä, minkä jälkeen rakensin käyttöliittymän osat ja lopuksi viimeistelin visuaalisesti

Haasteita ei ollut paljoa, mutta projektirakenteen saaminen oikeaan muotoon App Routeria varten tuotti hieman aluksi haasteita. Toisena ehkä client- ja server-puolen eron hahmottaminen ja satunnaisen kysymysjoukon toteuttaminen ilman että sama kysymys toistuu saman kierroksen aikana.

Lopuksi voin todeta, että toteutus vastaa hyvin tavoitetta ja opin Nextiasta ja TS:n käytöstä taas lisää.

## 9. Käynnistäminen
Projekti käynnistyy:
- `npm install`
- `npm run dev`

## 10. Lähteet

Lähdemerkinnät ovat tehty aina tiedostojen loppuu. Tässä aakkostettu koonti lähteistä:

- MDN Web Docs – CSS `max-width`  
  https://developer.mozilla.org/en-US/docs/Web/CSS/max-width

- MDN Web Docs – JavaScript `Math.random()`  
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

- Next.js Documentation – App Router  
  https://nextjs.org/docs/app

- Next.js Documentation – Layouts and Pages  
  https://nextjs.org/docs/app/getting-started/layouts-and-pages

- Next.js Documentation – Route Handlers  
  https://nextjs.org/docs/app/getting-started/route-handlers

- Next.js Documentation – `use client`  
  https://nextjs.org/docs/app/api-reference/directives/use-client

- React Documentation  
  https://react.dev/

- React Documentation – `useEffect`  
  https://react.dev/reference/react/useEffect

- TypeScript Documentation  
  https://www.typescriptlang.org/docs/

- TypeScript Documentation – Everyday Types  
  https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

- W3Schools – CSS Buttons  
  https://www.w3schools.com/css/css3_buttons.asp

- W3Schools – CSS Margin  
  https://www.w3schools.com/css/css_margin.asp
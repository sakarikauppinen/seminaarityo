

# Seminaarityö: Selainpohjainen tietovisasovellus Next.js:llä ja TypeScriptillä

## 1. Työn aihe

Tässä seminaarityössä toteutan selainpohjaisen tietovisasovelluksen käyttäen **Next.js:ää**, **Reactia** ja **TypeScriptiä**. Sovellus näyttää käyttäjälle monivalintakysymyksiä, tarkistaa vastaukset ja laskee pisteitä.

Työn tarkoituksena on perehtyä käytännössä siihen, miten **Next.js:n App Router**, **route handlerit** ja **client-komponentit** toimivat yhdessä pienessä sovelluksessa. Samalla harjoittelen TypeScriptin käyttöä React-pohjaisessa projektissa.

## 2. Työn tavoitteet

Työn tavoitteena on:

- toteuttaa toimiva selainpohjainen tietovisasovellus
- käyttää Next.js:n **App Router** -rakennetta
- hakea kysymysdata **route handlerin** kautta
- toteuttaa käyttöliittymä **client-komponenttina**
- hyödyntää TypeScriptiä datan tyypityksessä ja komponenttien toteutuksessa
- rakentaa selkeä ja helposti ymmärrettävä projektirakenne

## 3. Rajaus

Työ on tarkoituksella rajattu melko pieneksi aikataulullisista syistä ja oman osaamistason huomioiden.

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
- käyttäjäkohtaiset tulokset
- tulostaulukko
- moninpeli
- vaikeustasot
- muut laajemmat lisäominaisuudet

Tekstin jäsentelyyn ja muotoiluun on käytetty m365 GPT 5.4 Think tekoälymallia. Ideat, sisältö ja logiikka ovat omiani.



This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

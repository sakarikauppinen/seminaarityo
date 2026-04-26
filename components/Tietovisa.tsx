"use client";

import { useEffect, useState } from "react";
import type { Kysymys } from "@/types/kysymys";
import Kysymyskortti from "@/components/Kysymyskortti";
import Tulosnakyma from "@/components/Tulosnakyma";

const KYSYMYSTEN_MAARA = 10;

function randomTaulukko<T>(taulukko: T[]): T[] {
  const kopio = [...taulukko];

  for (let i = kopio.length - 1; i > 0; i--) {
    const randomIndeksi = Math.floor(Math.random() * (i + 1));
    [kopio[i], kopio[randomIndeksi]] = [
      kopio[randomIndeksi],
      kopio[i],
    ];
  }

  return kopio;
}

export default function Tietovisa() {
  const [kysymykset, setKysymykset] = useState<Kysymys[]>([]);
  const [nykyinenKysymysIndeksi, setNykyinenKysymysIndeksi] = useState(0);
  const [pisteet, setPisteet] = useState(0);
  const [ladataan, setLadataan] = useState(true);
  const [virhe, setVirhe] = useState("");
  const [onPaattynyt, setOnPaattynyt] = useState(false);

  useEffect(() => {
    haeJaValitseKysymykset();
  }, []);

  async function haeJaValitseKysymykset() {
    try {
      setLadataan(true);
      setVirhe("");

      const vastaus = await fetch("/api/questions");

      if (!vastaus.ok) {
        throw new Error("Kysymysten haku epäonnistui.");
      }

      const kaikkiKysymykset: Kysymys[] = await vastaus.json();

      const sekoitetutKysymykset = randomTaulukko(kaikkiKysymykset);
      const valitutKysymykset = sekoitetutKysymykset.slice(
        0,
        KYSYMYSTEN_MAARA
      );

      setKysymykset(valitutKysymykset);
    } catch (error) {
      setVirhe("Kysymysten lataaminen epäonnistui.");
      console.error(error);
    } finally {
      setLadataan(false);
    }
  }

  function kasitteleVastaus(valittuVastaus: string) {
    const nykyinenKysymys = kysymykset[nykyinenKysymysIndeksi];

    if (valittuVastaus === nykyinenKysymys.oikeaVastaus) {
      setPisteet((edellisetPisteet) => edellisetPisteet + 1);
    }

    const seuraavaIndeksi = nykyinenKysymysIndeksi + 1;

    if (seuraavaIndeksi < kysymykset.length) {
      setNykyinenKysymysIndeksi(seuraavaIndeksi);
    } else {
      setOnPaattynyt(true);
    }
  }

  async function aloitaUudelleen() {
    setNykyinenKysymysIndeksi(0);
    setPisteet(0);
    setOnPaattynyt(false);
    await haeJaValitseKysymykset();
  }

  if (ladataan) {
    return <p>Ladataan kysymyksiä...</p>;
  }

  if (virhe) {
    return <p>{virhe}</p>;
  }

  if (kysymykset.length === 0) {
    return <p>Kysymyksiä ei löytynyt.</p>;
  }

  if (onPaattynyt) {
    return (
      <Tulosnakyma
        pisteet={pisteet}
        kysymyksiaYhteensa={kysymykset.length}
        onAloitaUudelleen={aloitaUudelleen}
      />
    );
  }

  return (
    <Kysymyskortti
      kysymysData={kysymykset[nykyinenKysymysIndeksi]}
      kysymysNumero={nykyinenKysymysIndeksi + 1}
      kysymyksiaYhteensa={kysymykset.length}
      onVastausValittu={kasitteleVastaus}
    />
  );
}

/*
Next.js Documentation / use client:
  https://nextjs.org/docs/app/api-reference/directives/use-client
  Note: Komponentti tarvitsee client-puolta,
  joten tiedoston alkuun lisätään "use client".
React Documentation: https://react.dev/
React Documentation / useEffect:
  https://react.dev/reference/react/useEffect
Next.js Documentation / Route Handlers:
  https://nextjs.org/docs/app/getting-started/route-handlers
MDN / Math.random():
  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
Note: Tietovisa näyttää kysymyksiä yksi kerrallaan, tarkistaa vastaukset,
  laskee pisteet ja näyttää lopputuloksen.
*/
"use client";

import { useEffect, useState } from "react";
import type { Kysymys } from "@/types/kysymys";
import Kysymyskortti from "@/components/Kysymyskortti";
import Tulosnakyma from "@/components/Tulosnakyma";

export default function Tietovisa() {
  const [kysymykset, setKysymykset] = useState<Kysymys[]>([]);
  const [nykyinenKysymysIndeksi, setNykyinenKysymysIndeksi] = useState(0);
  const [pisteet, setPisteet] = useState(0);
  const [ladataan, setLadataan] = useState(true);
  const [virhe, setVirhe] = useState("");
  const [onPaattynyt, setOnPaattynyt] = useState(false);

  useEffect(() => {
    async function haeKysymykset() {
      try {
        setLadataan(true);
        setVirhe("");

        const vastaus = await fetch("/api/questions");

        if (!vastaus.ok) {
          throw new Error("Kysymysten haku epäonnistui.");
        }

        const data: Kysymys[] = await vastaus.json();
        setKysymykset(data);
      } catch (error) {
        setVirhe("Kysymysten lataaminen epäonnistui.");
        console.error(error);
      } finally {
        setLadataan(false);
      }
    }

    haeKysymykset();
  }, []);

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

  function aloitaUudelleen() {
    setNykyinenKysymysIndeksi(0);
    setPisteet(0);
    setOnPaattynyt(false);
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
Lähteet:
- Next.js Documentation / use client:
  https://nextjs.org/docs/app/api-reference/directives/use-client
  Note: Komponentti tarvitsee client-puolta,
  joten tiedoston alkuun lisätään "use client".
- React Documentation: https://react.dev/
- Next.js Documentation / Route Handlers:
  https://nextjs.org/docs/app/getting-started/route-handlers
Note: Tietovisa näyttää kysymyksiä yksi kerrallaan, tarkistaa vastaukset,
  laskee pisteet ja näyttää lopputuloksen.
*/
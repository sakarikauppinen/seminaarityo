import type { Kysymys } from "@/types/kysymys";

type KysymyskorttiProps = {
  kysymysData: Kysymys;
  kysymysNumero: number;
  kysymyksiaYhteensa: number;
  onVastausValittu: (vastaus: string) => void;
};

export default function Kysymyskortti({
  kysymysData,
  kysymysNumero,
  kysymyksiaYhteensa,
  onVastausValittu,
}: KysymyskorttiProps) {
  return (
    <section>
      <p>
        Kysymys {kysymysNumero} / {kysymyksiaYhteensa}
      </p>

      <h2>{kysymysData.kysymys}</h2>

      <div>
        {kysymysData.vaihtoehdot.map((vaihtoehto) => (
          <button
            key={vaihtoehto}
            type="button"
            onClick={() => onVastausValittu(vaihtoehto)}
          >
            {vaihtoehto}
          </button>
        ))}
      </div>
    </section>
  );
}

/*
React Documentation: https://react.dev/
 
 Note: Kysymyskortti näyttää yhden Kysymys-tyyppisen olion sekä sen vastausvaihtoehdot.
*/
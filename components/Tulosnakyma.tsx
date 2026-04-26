type TulosnakymaProps = {
    pisteet: number;
    kysymyksiaYhteensa: number;
    onAloitaUudelleen: () => void;
  };
  
  export default function Tulosnakyma({
    pisteet,
    kysymyksiaYhteensa,
    onAloitaUudelleen,
  }: TulosnakymaProps) {
    return (
      <section>
        <h2>Tietovisa päättyi</h2>
        <p>
          Sait {pisteet} / {kysymyksiaYhteensa} pistettä.
        </p>
  
        <button type="button" onClick={onAloitaUudelleen}>
          Aloita uudelleen
        </button>
      </section>
    );
  }
  
  /*
  React Documentation: https://react.dev/
  // TypeScript Documentation: https://www.typescriptlang.org/docs/
  */
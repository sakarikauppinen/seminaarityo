import Tietovisa from "@/components/Tietovisa";

export default function HomePage() {
  return (
    <main className="sivu">
      <div className="sisalto">
        <header className="otsikkoalue">
          <p className="ylateksti">Seminaarityö: Ohjelmistokehityksen teknologioita</p>
          <h1>Musavisa-sovellus</h1>
          <p className="kuvaus">
            Tietovisa Next.js:llä ja TypeScriptillä. Kysymykset musiikin teoriasta. Kuuntelitko musiikintunnilla?
          </p>
        </header>

        <Tietovisa />
      </div>
    </main>
  );
}

/*
Next.js Documentation / Layouts and Pages:
  https://nextjs.org/docs/app/getting-started/layouts-and-pages
React Documentation:
  https://react.dev/
*/
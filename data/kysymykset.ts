import type { Kysymys } from "@/types/kysymys";

export const kysymykset: Kysymys[] = [
  {
    id: 1,
    kysymys: "Mikä HTML-elementti määrittää sivun pääotsikon?",
    vaihtoehdot: ["<header>", "<h1>", "<title>", "<main>"],
    oikeaVastaus: "<h1>",
  },
  {
    id: 2,
    kysymys: "Mikä CSS-ominaisuus muuttaa tekstin värin?",
    vaihtoehdot: ["font-style", "background-color", "color", "text-align"],
    oikeaVastaus: "color",
  },
  {
    id: 3,
    kysymys: "Mikä JavaScript-metodi muuntaa merkkijonon kokonaisluvuksi?",
    vaihtoehdot: ["Number.parse", "parseInt", "toFixed", "String"],
    oikeaVastaus: "parseInt",
  },
  {
    id: 4,
    kysymys: "Mikä React-hook sopii komponentin tilan hallintaan?",
    vaihtoehdot: ["useEffect", "useMemo", "useState", "useRef"],
    oikeaVastaus: "useState",
  },
  {
    id: 5,
    kysymys: "Mikä kansio sisältää Next.js App Router -reitit?",
    vaihtoehdot: ["pages", "routes", "app", "public"],
    oikeaVastaus: "app",
  },
];

// https://www.typescriptlang.org/docs/

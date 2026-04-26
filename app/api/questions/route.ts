import { kysymykset } from "@/data/kysymykset";

export async function GET() {
  return Response.json(kysymykset);
}

/*
Next.js Documentation / Route Handlers:
  https://nextjs.org/docs/app/getting-started/route-handlers
Next.js Documentation / App Router:
  https://nextjs.org/docs/app
  Käytetään App Router -rakennetta, jossa API-reitit toteutetaan osana projektia
*/
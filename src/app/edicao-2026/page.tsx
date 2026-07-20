import type { Metadata } from "next";
import { Edicao2026Hero } from "@/components/sections/edicao-2026/Edicao2026Hero";
import { Edicao2026Stats } from "@/components/sections/edicao-2026/Edicao2026Stats";
import { Edicao2026Highlights } from "@/components/sections/edicao-2026/Edicao2026Highlights";
import { Edicao2026Moments } from "@/components/sections/edicao-2026/Edicao2026Moments";
import { Edicao2026Presencas } from "@/components/sections/edicao-2026/Edicao2026Presencas";
import { Edicao2026Programacao } from "@/components/sections/edicao-2026/Edicao2026Programacao";
import { Edicao2026Quotes } from "@/components/sections/edicao-2026/Edicao2026Quotes";
import { Edicao2026CTA } from "@/components/sections/edicao-2026/Edicao2026CTA";

export const metadata: Metadata = {
  title: "PANIFAIR 2026 — Como foi a edição",
  description:
    "Reviva a PANIFAIR 2026: números, destaques, galeria e depoimentos da maior feira internacional de panificação da América Latina.",
  openGraph: {
    title: "PANIFAIR 2026 — Como foi a edição",
    description:
      "Confira os resultados, momentos e destaques da edição 2026 da feira internacional de panificação.",
  },
};

export default function Edicao2026Page() {
  return (
    <>
      <Edicao2026Hero />
      <Edicao2026Stats />
      <Edicao2026Presencas />
      <Edicao2026Highlights />
      <Edicao2026Quotes />
      <Edicao2026Moments />
      <Edicao2026Programacao />
      <Edicao2026CTA />
    </>
  );
}

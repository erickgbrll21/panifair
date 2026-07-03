"use client";

import { Marquee } from "@/components/magicui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PARTICIPATING_COMPANIES } from "@/lib/constants";

export function Companies() {
  return (
    <section id="empresas" className="section-dark section-padding overflow-hidden">
      <SectionHeading
        eyebrow="Autoridade de mercado"
        title="Empresas participantes"
        description="Marcas líderes nacionais e internacionais já confirmaram presença. Sua empresa não pode ficar de fora."
      />

      <Reveal>
        <Marquee pauseOnHover className="[--duration:30s]">
          {PARTICIPATING_COMPANIES.map((company) => (
            <div
              key={company}
              className="mx-4 flex h-20 w-44 shrink-0 items-center justify-center rounded-xl border border-[rgba(166,124,82,0.15)] bg-[rgba(166,124,82,0.04)] px-6 transition-all duration-300 hover:border-[#a67c52] hover:bg-[rgba(166,124,82,0.08)]"
            >
              <span className="text-lg font-bold tracking-wide text-[#c4966a]/80">{company}</span>
            </div>
          ))}
        </Marquee>
      </Reveal>
    </section>
  );
}

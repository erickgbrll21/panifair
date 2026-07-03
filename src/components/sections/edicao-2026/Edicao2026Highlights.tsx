"use client";

import { Sparkles } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { EDICAO_2026_HIGHLIGHTS } from "@/lib/edicao-2026";

export function Edicao2026Highlights() {
  return (
    <section className="section-warm-mid section-padding overflow-hidden">
      <div className="container-panifair">
        <SectionHeading
          eyebrow="Destaques"
          title="O que marcou a edição"
          description="Programação, inovação e negócios que fizeram da PANIFAIR 2026 um marco para o setor."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {EDICAO_2026_HIGHLIGHTS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05}>
              <MagicCard className="h-full p-7">
                <div className="icon-badge mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Sparkles className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-lg font-semibold text-[#f5f0eb]">{item.title}</h3>
                <p className="text-sm leading-relaxed text-[#9a8b7a]">{item.description}</p>
              </MagicCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

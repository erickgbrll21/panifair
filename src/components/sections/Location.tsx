"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { NumberTicker } from "@/components/magicui/number-ticker";

const VENUE_STATS = [
  { value: 57, suffix: " mil m²", label: "Área total do evento" },
  { value: 14, suffix: " metros", label: "Pé-direito máximo" },
  { value: 210, suffix: " m²", label: "Padaria modelo" },
] as const;

export function Location() {
  return (
    <section id="local" className="section-warm-mid section-padding overflow-hidden">
      <SectionHeading
        eyebrow="Onde acontece"
        title="Local do evento"
        description="Infraestrutura de classe mundial no coração econômico de Minas Gerais."
      />

      <div className="container-panifair grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-[rgba(166,124,82,0.2)] lg:aspect-[4/3]">
            <Image
              src="/hero-bg.jpg"
              alt="Centerminas Expo — Local do evento PANIFAIR"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6">
              <p className="text-lg font-bold text-[#f5f0eb]">Centerminas Expo</p>
              <p className="text-sm text-[#c4b8a8]">Belo Horizonte, MG</p>
            </div>
          </div>
        </Reveal>

        <div className="space-y-8">
          <Reveal delay={0.05}>
            <div>
              <h3 className="text-2xl font-bold leading-tight text-[#452816] md:text-3xl">
                Centerminas Expo: palco do futuro da panificação
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#5c4d3e] md:text-lg">
                Com 57 mil m², pé-direito de até 14 metros e acesso privilegiado a
                aeroportos, metrô e rede hoteleira, o Centerminas Expo garante toda a
                infraestrutura necessária para um evento de nível internacional.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-3">
            {VENUE_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 + i * 0.08}>
                <div className="glass-card rounded-xl p-5 text-center">
                  <p className="text-2xl font-bold text-[#c4966a] md:text-3xl">
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-2 text-xs leading-snug text-[#5c4d3e] md:text-sm">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

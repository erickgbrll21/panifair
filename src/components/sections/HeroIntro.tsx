"use client";

import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ShimmerLink } from "@/components/magicui/shimmer-button";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Reveal } from "@/components/ui/reveal";
import { HERO_STATS } from "@/lib/constants";

export function HeroIntro() {
  return (
    <section className="section-warm section-hero-intro relative overflow-hidden pt-10 md:pt-14">
      <div className="container-panifair relative z-10">
        <Reveal>
          <span className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[rgba(122,85,50,0.28)] bg-[rgba(176,132,80,0.12)] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#7a5532]">
            <span className="pulse-glow-bronze h-1.5 w-1.5 rounded-full bg-[#b08450]" />
            Reservas abertas · Edição 2027
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.02em] md:text-[4.5rem] lg:text-7xl xl:text-8xl">
            <span className="text-gradient-bronze">PANIFAIR 2027</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#a3733e] md:text-xl">
            A maior oportunidade para sua empresa{" "}
            <strong className="font-semibold text-[#a3733e]">vender, conectar e crescer</strong>{" "}
            no mercado da panificação. Onde decisores de compra encontram os líderes do setor.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap gap-3">
            <ShimmerLink href="/contato">
              Reservar meu estande
              <ArrowRight className="h-4 w-4" />
            </ShimmerLink>

            <Button
              variant="outline"
              size="lg"
              className="border-[rgba(122,85,50,0.35)] text-[#160f08] hover:border-[rgba(122,85,50,0.55)] hover:bg-[rgba(176,132,80,0.12)] hover:text-[#160f08]"
              asChild
            >
              <Link href="/contato">
                <FileText className="h-4 w-4" />
                Solicitar proposta
              </Link>
            </Button>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {HERO_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={0.2 + i * 0.05} className="h-full [&>div]:h-full">
              <div className="glass-card flex h-full min-h-[7.5rem] flex-col rounded-2xl p-5 md:min-h-[8.5rem] md:p-6">
                <p className="text-2xl font-extrabold md:text-3xl" style={{ color: "#d4a870" }}>
                  <NumberTicker value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-auto pt-2 text-xs leading-snug fg-muted md:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

    </section>
  );
}

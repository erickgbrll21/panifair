"use client";

import { NumberTicker } from "@/components/magicui/number-ticker";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { MARKET_INDICATORS } from "@/lib/constants";
import { TrendingUp } from "lucide-react";

export function MarketIndicators() {
  return (
    <section id="mercado" className="section-cream section-padding relative overflow-hidden">
      <SectionSideDecor />
      <DotPattern className="opacity-20" />

      <SectionHeading
        eyebrow="Dados do setor"
        title="Indicadores de mercado"
        description="O setor de panificação brasileiro cresce consistentemente. Posicione sua empresa onde o mercado está."
      />

      <div className="container-panifair grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {MARKET_INDICATORS.map((item, i) => (
          <Reveal key={item.label} delay={i * 0.1}>
            <div className="glass-card relative overflow-hidden rounded-2xl p-7">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[rgba(166,124,82,0.08)] blur-2xl" />
              <p className="fg-accent text-3xl font-bold md:text-4xl">
                <NumberTicker
                  value={item.value}
                  prefix={item.prefix}
                  suffix={item.suffix}
                  decimalPlaces={"decimal" in item ? item.decimal : 0}
                />
              </p>
              <p className="fg-muted mt-3 text-sm leading-relaxed">{item.label}</p>
              <div className="fg-bronze mt-4 flex items-center gap-1.5 text-xs font-medium">
                <TrendingUp className="h-3.5 w-3.5" />
                {item.growth}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

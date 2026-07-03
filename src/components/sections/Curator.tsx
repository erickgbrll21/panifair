"use client";

import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { DotPattern } from "@/components/magicui/dot-pattern";

export function Curator() {
  return (
    <section
      id="idealizador"
      className="section-dark relative overflow-hidden pt-10 pb-[clamp(4rem,10vw,8rem)] md:pt-14"
    >
      <DotPattern className="opacity-[0.14]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[480px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(176,132,80,0.05)] blur-[120px]"
      />

      <SectionHeading
        eyebrow="Quem idealiza"
        title="Idealizador e Curador: Junior Maffille"
        description="A visão por trás da PANIFAIR — conectando tradição, inovação e o futuro da panificação em um evento de alcance nacional e internacional."
      />

      <div className="container-panifair grid gap-10 lg:grid-cols-2 lg:items-end lg:gap-16">
        <Reveal delay={0.2} className="order-2 flex items-end justify-center lg:order-1 lg:justify-start">
          <div className="relative aspect-[4/5] w-full max-w-md overflow-visible lg:max-w-none">
            <div aria-hidden className="curator-portrait-glow pointer-events-none absolute -inset-x-[10%] bottom-[-2%] top-[8%] z-0" />
            <Image
              src="/junior-maffille.png"
              alt="Junior Maffille — Idealizador e Curador da PANIFAIR"
              width={1200}
              height={1500}
              className="relative z-10 h-full w-full object-contain object-bottom"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
        </Reveal>

        <div className="order-1 space-y-6 lg:order-2">
          <Reveal delay={0.05}>
            <p className="fg-primary text-lg leading-relaxed md:text-xl">
              Junior Maffille é o idealizador e curador da PANIFAIR, responsável por
              moldar a identidade, a programação e a experiência de um dos principais
              encontros do setor de panificação no Brasil.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="fg-muted text-base leading-relaxed md:text-lg">
              Com olhar estratégico e profundo conhecimento do mercado, conduz a feira
              como um espaço de negócios, tendências e conexões de alto valor para
              expositores, visitantes e parceiros do ecossistema panificador.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="inline-flex items-center gap-3 rounded-full border border-[rgba(232,200,122,0.25)] bg-[rgba(176,132,80,0.08)] px-5 py-2.5">
              <span className="pulse-glow-bronze h-1.5 w-1.5 rounded-full bg-[#e8c87a]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d4a870]">
                Idealizador e Curador · PANIFAIR
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

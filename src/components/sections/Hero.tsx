import dynamic from "next/dynamic";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { LightRays } from "@/components/magicui/light-rays";
import { ShimmerLink } from "@/components/magicui/shimmer-button";
import { NumberTicker } from "@/components/magicui/number-ticker";
import { Reveal } from "@/components/ui/reveal";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { Curator } from "@/components/sections/Curator";
import { SectionBackgroundCharacters } from "@/components/sections/SectionBackgroundCharacters";
import { EVENT_DATES_LABEL, HERO_STATS } from "@/lib/constants";

const Countdown = dynamic(
  () => import("@/components/ui/countdown").then((mod) => mod.Countdown),
  {
    loading: () => (
      <div className="flex flex-wrap justify-center gap-2 md:gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="glass-card flex min-w-[58px] flex-col items-center rounded-xl px-2.5 py-2 md:min-w-[88px] md:rounded-2xl md:px-5 md:py-4"
          >
            <span className="text-lg font-bold tabular-nums text-[#7a5532] md:text-3xl">--</span>
            <span className="mt-0.5 h-2.5 w-6 rounded bg-[rgba(176,132,80,0.15)] md:mt-1 md:h-3 md:w-8" />
          </div>
        ))}
      </div>
    ),
  },
);

export function Hero() {
  return (
    <section
      id="idealizador"
      className="hero relative scroll-mt-24 overflow-x-hidden pb-[var(--section-spacing-y)] pt-[calc(4.5rem+env(safe-area-inset-top,0px)+0.5rem)] md:pt-28"
    >
      <SectionSideDecor />
      <div aria-hidden className="hero__effects pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <SectionBackgroundCharacters variant="hero" />
        <DotPattern className="z-0 opacity-[0.12]" />
        <LightRays count={8} blur={40} length="130vh" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 z-[1] h-[680px] w-[680px] rounded-full bg-[rgba(176,132,80,0.14)] blur-[120px]"
      />

      <div className="relative z-[2] flex w-full flex-col items-center px-6">
        <div className="w-full max-w-[min(82vw,340px)] sm:max-w-[min(78vw,360px)] md:max-w-[min(42vw,400px)] lg:max-w-[min(36vw,440px)]">
          <Image
            src="/hero-logo.png"
            alt="Panifair — Feira Internacional da Panificação"
            width={1080}
            height={1080}
            className="hero__logo mx-auto h-auto w-full max-h-[min(62vw,280px)] object-contain object-bottom sm:max-h-[min(58vw,300px)] md:max-h-none"
            priority
            draggable={false}
          />
        </div>

        <div className="-mt-5 w-full max-w-xl text-center sm:-mt-7 md:-mt-14">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#5c4d3e]">
            Contagem regressiva para o evento
          </p>
          <div className="flex justify-center">
            <Countdown />
          </div>
        </div>
      </div>

      <div className="container-panifair relative z-[2] mt-9 md:mt-14">
        <Reveal>
          <span className="mb-4 inline-flex max-w-full items-center gap-1.5 rounded-full border border-[rgba(122,85,50,0.28)] bg-[rgba(176,132,80,0.12)] px-3 py-1.5 text-[9px] font-bold uppercase leading-tight tracking-[0.16em] text-[#7a5532] md:mb-7 md:gap-2.5 md:px-5 md:py-2 md:text-[11px] md:tracking-[0.25em]">
            <span className="pulse-glow-bronze h-1 w-1 shrink-0 rounded-full bg-[#b08450] md:h-1.5 md:w-1.5" />
            {EVENT_DATES_LABEL} · Reservas abertas
          </span>
        </Reveal>

        <Reveal delay={0.05}>
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.02] tracking-[-0.02em] md:text-[4.5rem] lg:text-7xl xl:text-8xl">
            <span className="text-gradient-bronze">PANIFAIR 2027</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#7a5532] md:mt-6 md:text-xl">
            A maior oportunidade para sua empresa{" "}
            <strong className="font-semibold text-[#452816]">vender, conectar e crescer</strong>{" "}
            no mercado da panificação. Onde decisores de compra encontram os líderes do setor.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 flex flex-wrap gap-3 md:mt-10">
            <ShimmerLink href="/contato">
              Reservar meu estande
              <ArrowRight className="h-4 w-4" />
            </ShimmerLink>
          </div>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {HERO_STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={0.2 + i * 0.05}>
              <div className="glass-card flex min-h-[7.5rem] flex-col rounded-2xl p-5 shadow-[0_10px_36px_rgba(69,40,22,0.1)] md:min-h-[8.5rem] md:p-6">
                <p className="text-2xl font-extrabold text-[#7a5532] md:text-3xl">
                  <NumberTicker value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-auto pt-2 text-xs leading-snug text-[#5c4d3e] md:text-sm">
                  {stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div aria-hidden className="mt-10 flex items-center gap-4 md:mt-12 md:gap-6">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[rgba(176,132,80,0.4)] to-[rgba(176,132,80,0.15)]" />
          <span className="h-1.5 w-1.5 shrink-0 rotate-45 border border-[rgba(176,132,80,0.6)]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[rgba(176,132,80,0.4)] to-[rgba(176,132,80,0.15)]" />
        </div>

        <Curator />
      </div>
    </section>
  );
}

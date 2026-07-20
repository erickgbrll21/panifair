"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import { Reveal } from "@/components/ui/reveal";
import { SectionBackgroundCharacters } from "@/components/sections/SectionBackgroundCharacters";

const TRAILER_SRC = "/trailer-panifair.mp4";

const MARQUEE_ITEMS = [
  "Trailer oficial",
  "Panifair 2027",
  "O futuro da panificação",
  "Assista agora",
];

export function TrailerReel() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      id="trailer"
      className="relative scroll-mt-24 overflow-hidden bg-[#160b04] text-[#f5ead8]"
    >
      <SectionBackgroundCharacters seed={0} />
      {/* atmosfera: brilhos bronze */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-0 h-[480px] w-[480px] rounded-full bg-[rgba(176,132,80,0.14)] blur-[120px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[rgba(176,132,80,0.1)] blur-[110px]"
      />

      {/* faixa superior estilo letreiro de cinema */}
      <div className="border-y border-[rgba(176,132,80,0.25)] bg-[rgba(176,132,80,0.06)]">
        <Marquee className="py-1 [--duration:28s]" repeat={6}>
          {MARQUEE_ITEMS.map((item) => (
            <span
              key={item}
              className="flex items-center gap-4 text-[11px] font-bold uppercase tracking-[0.3em] text-[#c9a06a]"
            >
              {item}
              <span aria-hidden className="text-[rgba(176,132,80,0.5)]">
                ✦
              </span>
            </span>
          ))}
        </Marquee>
      </div>

      <div className="container-panifair relative z-10 py-[var(--section-spacing-y)]">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-[rgba(176,132,80,0.35)] bg-[rgba(176,132,80,0.1)] px-5 py-2 text-[11px] font-bold uppercase tracking-[0.25em] text-[#c9a06a]">
              <span className="pulse-glow-bronze h-1.5 w-1.5 rounded-full bg-[#b08450]" />
              Trailer oficial
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-6xl">
              Já sentiu o cheiro{" "}
              <span className="text-gradient-gold">do que vem por aí?</span>
            </h2>
          </Reveal>
        </div>

        {/* moldura cinematográfica do vídeo */}
        <Reveal delay={0.15} className="mt-12 flex justify-center md:mt-16">
          <div className="relative w-full max-w-5xl">
            {/* brilho atrás do frame */}
            <div
              aria-hidden
              className="absolute -inset-8 rounded-[3rem] bg-[radial-gradient(ellipse_at_center,rgba(176,132,80,0.22),transparent_70%)] blur-2xl"
            />

            <div className="glow-bronze-lg relative aspect-[5/3] overflow-hidden rounded-2xl border border-[rgba(176,132,80,0.4)] bg-[#0d0602] md:rounded-[1.75rem]">
              {playing ? (
                <video
                  src={TRAILER_SRC}
                  className="h-full w-full object-cover"
                  autoPlay
                  controls
                  playsInline
                  preload="auto"
                />
              ) : (
                <button
                  type="button"
                  onClick={() => setPlaying(true)}
                  aria-label="Reproduzir o trailer da PANIFAIR 2027"
                  className="group relative flex h-full w-full flex-col items-center justify-center"
                >
                  {/* poster: gradiente + logo */}
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(176,132,80,0.22),transparent_65%),linear-gradient(180deg,#1d0f06_0%,#0d0602_100%)]"
                  />
                  <Image
                    src="/trailer-logo.svg"
                    alt=""
                    width={400}
                    height={100}
                    className="absolute top-[22%] w-1/2 max-w-[320px] opacity-90 transition-opacity group-hover:opacity-100"
                    draggable={false}
                  />

                  {/* botão de play com anéis pulsantes */}
                  <span className="relative mt-20 flex h-20 w-20 items-center justify-center md:mt-28 md:h-24 md:w-24">
                    <span
                      aria-hidden
                      className="absolute inset-0 animate-ping rounded-full bg-[rgba(176,132,80,0.35)] [animation-duration:2s]"
                    />
                    <span
                      aria-hidden
                      className="absolute -inset-3 rounded-full border border-[rgba(176,132,80,0.3)]"
                    />
                    <span className="relative flex h-full w-full items-center justify-center rounded-full bg-[#b08450] text-[#160b04] shadow-[0_0_36px_rgba(176,132,80,0.55)] transition-transform group-hover:scale-110">
                      <Play className="ml-1 h-8 w-8 fill-current md:h-10 md:w-10" />
                    </span>
                  </span>

                  <span className="relative mt-6 text-[11px] font-bold uppercase tracking-[0.3em] text-[#c9a06a]">
                    Dê o play
                  </span>
                </button>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

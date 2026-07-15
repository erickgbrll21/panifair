"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  MapPin,
  Maximize2,
  Plane,
  Sparkles,
  TrainFront,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { SectionBackgroundCharacters } from "@/components/sections/SectionBackgroundCharacters";
import { Button } from "@/components/ui/button";
import { PANIFAIR_ADDRESS } from "@/lib/constants";

const MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(PANIFAIR_ADDRESS.mapsQuery)}`;

const TRANSPORT = [
  {
    icon: Plane,
    time: "31 min",
    title: "Aeroporto Internacional de Confins",
    description: "Tancredo Neves International Airport — Belo Horizonte / Confins.",
  },
  {
    icon: TrainFront,
    time: "1 min",
    title: "Estação de metrô",
    description: "Minas Shopping — São Paulo, Belo Horizonte – MG, 31910-000.",
  },
];

export function Location() {
  return (
    <section id="local" className="section-warm-mid section-padding relative overflow-hidden">
      <SectionBackgroundCharacters seed={9} />
      <SectionSideDecor />

      <SectionHeading
        eyebrow="Onde acontece"
        title="Um palco à altura do futuro da panificação"
        description="Vista aérea do complexo que sediará a PANIFAIR em Belo Horizonte — infraestrutura de classe mundial no coração econômico de Minas Gerais."
      />

      <div className="container-panifair relative z-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-[rgba(176,132,80,0.14)] blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-[rgba(232,200,122,0.12)] blur-[120px]"
        />
        {/* Cinematic video showcase */}
        <Reveal>
          <div className="group relative overflow-hidden rounded-[2rem] border border-[rgba(122,85,50,0.28)] bg-[#160f08] shadow-[0_40px_100px_-30px_rgba(69,40,22,0.55)]">
            <div className="relative overflow-hidden">
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03] sm:aspect-[16/9] md:aspect-[21/8]"
                aria-label="Vídeo aéreo do local do evento PANIFAIR em Belo Horizonte"
              >
                <source src="/panifair-local.mp4" type="video/mp4" />
              </video>

              {/* Gradients */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0d0906] via-[#0d0906]/40 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0d0906]/70 via-transparent to-transparent" />
            </div>

            {/* Top badges */}
            <div className="absolute left-5 right-5 top-5 z-10 flex flex-wrap items-center justify-between gap-3 md:left-8 md:right-8 md:top-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,200,122,0.35)] bg-[rgba(22,15,8,0.6)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8c87a] backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e8c87a] opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e8c87a]" />
                </span>
                Vista aérea · Drone
              </div>
              <div className="hidden items-center gap-2 rounded-full border border-[rgba(232,200,122,0.25)] bg-[rgba(22,15,8,0.55)] px-3.5 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-[#ddcfaa] backdrop-blur-md md:inline-flex">
                <Sparkles className="h-3 w-3" />
                Belo Horizonte · MG
              </div>
            </div>

            {/* Bottom overlay content — desktop only */}
            <div className="absolute inset-x-0 bottom-0 z-10 hidden p-6 sm:block md:p-10">
              <div className="grid items-end gap-6 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-7">
                  <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,200,122,0.3)] bg-[rgba(22,15,8,0.55)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8c87a] backdrop-blur-sm">
                    <Maximize2 className="h-3 w-3" />
                    Espaço do evento
                  </div>
                </div>

                <div className="md:col-span-5 md:justify-self-end">
                  <Button
                    asChild
                    className="w-full bg-[#e8c87a] text-[#160f08] shadow-[0_10px_30px_rgba(232,200,122,0.35)] hover:bg-[#f0d287] sm:w-auto"
                  >
                    <Link href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                      Abrir no Google Maps
                      <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Solid panel content — mobile only */}
            <div className="border-t border-[rgba(232,200,122,0.15)] bg-[#160f08] p-5 sm:hidden">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(232,200,122,0.3)] bg-[rgba(22,15,8,0.55)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-[#e8c87a]">
                <Maximize2 className="h-3 w-3" />
                Espaço do evento
              </div>
              <Button
                asChild
                className="mt-4 w-full bg-[#e8c87a] text-[#160f08] shadow-[0_10px_30px_rgba(232,200,122,0.35)] hover:bg-[#f0d287]"
              >
                <Link href={MAPS_URL} target="_blank" rel="noopener noreferrer">
                  Abrir no Google Maps
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Two-column info + highlights */}
        <div className="mt-10">
          <Reveal delay={0.05}>
            <div className="glass-card h-full rounded-[1.75rem] border border-[rgba(122,85,50,0.2)] p-7 md:p-9">
              <div className="flex items-start gap-4">
                <div className="icon-badge flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#7a5532]">
                    Endereço completo
                  </p>
                  <h3 className="mt-2 text-2xl font-bold leading-tight text-[#452816] md:text-[1.75rem]">
                    Belo Horizonte, o novo centro da panificação
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-[#5c4d3e]">
                    {PANIFAIR_ADDRESS.street}
                    <br />
                    Bairro {PANIFAIR_ADDRESS.neighborhood} · {PANIFAIR_ADDRESS.cityState}
                    <br />
                    CEP {PANIFAIR_ADDRESS.cep}
                  </p>
                </div>
              </div>

              <div className="my-7 h-px w-full bg-gradient-to-r from-transparent via-[rgba(122,85,50,0.25)] to-transparent" />

              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#7a5532]">
                Locomoção
              </p>
              <div className="space-y-3">
                {TRANSPORT.map(({ icon: Icon, time, title, description }) => (
                  <div
                    key={title}
                    className="group/transport flex items-center gap-4 rounded-2xl border border-[rgba(122,85,50,0.16)] bg-[rgba(255,252,245,0.6)] p-4 transition-colors duration-300 hover:border-[rgba(122,85,50,0.35)]"
                  >
                    <div className="icon-badge flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover/transport:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-bold text-[#452816]">{title}</p>
                      <p className="mt-0.5 text-xs leading-relaxed text-[#7a6b5c]">{description}</p>
                    </div>
                    <div className="flex shrink-0 flex-col items-center rounded-xl bg-[rgba(166,124,82,0.12)] px-3 py-1.5 text-center">
                      <span className="text-base font-extrabold leading-none text-[#7a5532]">
                        {time.split(" ")[0]}
                      </span>
                      <span className="mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-[#7a6b5c]">
                        {time.split(" ")[1]}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Reveal } from "@/components/ui/reveal";
import { EDICAO_2026 } from "@/lib/edicao-2026";

export function Edicao2026Hero() {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden bg-[#ddcfaa] pb-16 pt-32 md:min-h-[75vh] md:pb-24">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1556912173-46c5c23b8a79?w=1920&q=80"
          alt="PANIFAIR 2026 — feira de panificação"
          fill
          className="object-cover opacity-40"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60" />
      </div>

      <DotPattern className="opacity-15" />

      <div className="container-panifair relative z-10">
        <Reveal>
          <Button variant="ghost" size="sm" className="mb-8 -ml-2" asChild>
            <Link href="/">
              <ArrowLeft />
              Voltar ao site 2027
            </Link>
          </Button>
        </Reveal>

        <Reveal delay={0.05}>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgba(166,124,82,0.35)] bg-[rgba(166,124,82,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#c4966a]">
            Edição encerrada · Sucesso total
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.05] tracking-tight text-[#f5f0eb] md:text-5xl lg:text-6xl">
            <span className="text-gradient-bronze">PANIFAIR 2026</span>
            <br />
            Como foi a feira
          </h1>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#c4b8a8] md:text-xl">
            {EDICAO_2026.tagline} Relembre os números, destaques e momentos que
            marcaram {EDICAO_2026.dates} no {EDICAO_2026.venue}.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap gap-6 text-sm text-[#9a8b7a]">
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4 text-[#a67c52]" />
              {EDICAO_2026.dates}
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[#a67c52]" />
              {EDICAO_2026.venue} · {EDICAO_2026.city}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, Mail, Phone, Sparkles } from "lucide-react";
import { ShimmerLink } from "@/components/magicui/shimmer-button";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section
      id="contato"
      className="section-dark relative overflow-hidden py-28 md:py-36"
    >
      <DotPattern className="opacity-15" />

      {/* Radial ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgba(176,132,80,0.06)] blur-[120px]" />

      <div className="container-panifair relative z-10 text-center">
        <Reveal>
          <div className="border-glow-animate relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-[rgba(221,207,170,0.25)] bg-[rgba(255,252,245,0.06)] p-12 md:p-20">
            {/* Inner top glow line */}
            <div className="absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(232,200,122,0.5)] to-transparent" />

            <div className="mb-7 flex items-center justify-center gap-3">
              <Sparkles className="h-4 w-4 text-[#b08450]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#b08450]">
                Vagas limitadas · Early bird até Dez/2026
              </span>
              <Sparkles className="h-4 w-4 text-[#b08450]" />
            </div>

            <h2 className="text-3xl font-extrabold leading-tight text-[#f8f3ee] md:text-5xl lg:text-[3.5rem]">
              Sua concorrência já está{" "}
              <span className="text-gradient-bronze">reservando estande</span>
            </h2>

            <p className="fg-muted mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg">
              Cada dia sem confirmar presença é uma oportunidade de negócio entregue aos
              concorrentes. Garanta posicionamento premium na PANIFAIR 2027.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ShimmerLink href="/contato">
                Quero ser expositor
                <ArrowRight className="h-4 w-4" />
              </ShimmerLink>

              <Button variant="outline" size="lg" asChild>
                <Link href="mailto:expositores@panifair.com.br">
                  <Mail className="h-4 w-4" />
                  expositores@panifair.com.br
                </Link>
              </Button>
            </div>

            <div className="fg-muted mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
              <a
                href="tel:+551140028922"
                className="flex items-center gap-2 transition-colors hover:text-[#d4a870]"
              >
                <Phone className="h-4 w-4 text-[#b08450]" />
                +55 (11) 4002-8922
              </a>
              <span className="hidden h-4 w-px bg-[rgba(176,132,80,0.3)] sm:block" />
              <span>Resposta em até 24 horas úteis</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

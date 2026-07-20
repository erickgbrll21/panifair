import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { SectionBackgroundCharacters } from "@/components/sections/SectionBackgroundCharacters";
import { Button } from "@/components/ui/button";
import { BENEFITS } from "@/lib/constants";

export function Benefits() {
  return (
    <section id="beneficios" className="section-cream section-padding relative overflow-hidden">
      <SectionBackgroundCharacters seed={4} />
      <SectionSideDecor />

      <div className="container-panifair grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Coluna editorial */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-eyebrow text-[11px] font-bold uppercase tracking-[0.3em]">
                Vantagens exclusivas
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-[var(--color-bronze)] to-transparent" />
            </div>

            <h2 className="section-title text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Benefícios para
              <br />
              <span className="text-gradient-bronze">expositores</span>
            </h2>

            <p className="section-desc mt-5 max-w-md text-base leading-relaxed md:text-lg">
              Cada detalhe pensado para maximizar retorno comercial e
              posicionamento de marca.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 border-y border-[rgba(122,85,50,0.18)] py-6">
              <p className="text-4xl font-extrabold text-[#7a5532] md:text-5xl">6</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#5c4d3e]">
                Vantagens incluídas em todos os planos de exposição, sem custo
                adicional.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/contato">
                Quero ser expositor
                <ArrowRight />
              </Link>
            </Button>
          </Reveal>
        </div>

        {/* Grade de benefícios */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {BENEFITS.map((benefit, i) => (
            <article
              key={benefit.title}
              className="glass-card group relative flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-[#a67c52]"
            >
                <span
                  aria-hidden
                  className="absolute right-5 top-5 text-xs font-bold tabular-nums tracking-[0.2em] text-[rgba(122,85,50,0.35)]"
                >
                  0{i + 1}
                </span>

                <div className="icon-badge mb-4 flex h-10 w-10 items-center justify-center rounded-full">
                  <Check className="h-5 w-5" aria-hidden="true" />
                </div>

                <h3 className="fg-primary text-base font-semibold">{benefit.title}</h3>
                <p className="fg-muted mt-1.5 text-sm leading-relaxed">{benefit.description}</p>
              </article>
          ))}
        </div>
      </div>
    </section>
  );
}

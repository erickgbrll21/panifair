import {
  TrendingUp,
  Users,
  Target,
  Award,
  Globe,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { SectionBackgroundCharacters } from "@/components/sections/SectionBackgroundCharacters";
import { Button } from "@/components/ui/button";
import { WHY_EXHIBIT } from "@/lib/constants";
import Link from "next/link";

const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp,
  Users,
  Target,
  Award,
  Globe,
};

export function WhyExhibit() {
  return (
    <section id="por-que-expor" className="section-cream section-padding relative overflow-hidden">
      <SectionBackgroundCharacters seed={1} />
      <SectionSideDecor />

      <div className="container-panifair grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Coluna editorial */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-eyebrow text-[11px] font-bold uppercase tracking-[0.3em]">
                Oportunidade estratégica
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-[var(--color-bronze)] to-transparent" />
            </div>

            <h2 className="section-title text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Por que expor na
              <br />
              <span className="text-gradient-bronze">PANIFAIR 2027?</span>
            </h2>

            <p className="section-desc mt-5 max-w-md text-base leading-relaxed md:text-lg">
              Três dias concentram o que sua equipe comercial levaria meses
              para alcançar.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-10 border-y border-[rgba(122,85,50,0.18)] py-6">
              <p className="text-4xl font-extrabold text-[#7a5532] md:text-5xl">4,2x</p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#5c4d3e]">
                Retorno médio sobre o investimento em estande nos primeiros 6
                meses pós-feira.
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

        {/* Lista de motivos */}
        <div className="lg:col-span-7">
          <div className="divide-y divide-[rgba(122,85,50,0.15)] border-y border-[rgba(122,85,50,0.15)]">
            {WHY_EXHIBIT.map((item, i) => {
              const Icon = ICON_MAP[item.icon];
              return (
                <div
                  key={item.title}
                  className="hover-row group flex items-center gap-5 px-2 py-5 transition-colors duration-300 md:gap-6 md:py-6"
                >
                    <span
                      aria-hidden
                      className="text-xs font-bold tabular-nums tracking-[0.2em] text-[rgba(122,85,50,0.4)]"
                    >
                      0{i + 1}
                    </span>

                    <div className="icon-badge flex h-11 w-11 shrink-0 items-center justify-center rounded-xl">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="fg-primary text-base font-semibold md:text-lg">
                        {item.title}
                      </h3>
                      <p className="fg-muted mt-0.5 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Check, Star, ArrowRight } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { BOOTH_TYPES } from "@/lib/constants";

export function BoothTypes() {
  return (
    <section id="estandes" className="section-dark section-padding overflow-hidden">
      <SectionHeading
        eyebrow="Invista com inteligência"
        title="Tipos de estandes"
        description="Escolha o formato ideal para seus objetivos comerciais. Vagas premium são limitadas — garanta posicionamento estratégico."
      />

      <div className="container-panifair grid items-stretch gap-8 lg:grid-cols-3">
        {BOOTH_TYPES.map((booth, i) => (
          <Reveal key={booth.name} delay={i * 0.08} className="h-full">
            <div className="relative h-full">
              {booth.highlight && (
                <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[rgba(176,132,80,0.06)] blur-sm" />
              )}
              <MagicCard
                className={`relative flex h-full flex-col p-8 ${
                  booth.highlight
                    ? "border-[rgba(232,200,122,0.5)] shadow-[0_0_40px_rgba(176,132,80,0.2)]"
                    : ""
                }`}
              >
                {booth.highlight && (
                  <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[rgba(232,200,122,0.6)] to-transparent" />
                )}
                <div className="mb-5 flex min-h-5 items-center">
                  {booth.highlight && (
                    <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#d4a870]">
                      <Star className="h-3.5 w-3.5 fill-[#d4a870]" />
                      Mais popular
                    </div>
                  )}
                </div>
                <h3 className="fg-primary text-xl font-bold">{booth.name}</h3>
                <p className="fg-muted mt-1 text-sm">{booth.size}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {booth.features.map((feature) => (
                    <li key={feature} className="fg-muted flex items-start gap-2.5 text-sm">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#b08450]" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button className="mt-8 w-full" variant="default" asChild>
                  <Link href="/contato">
                    Reservar estande
                    <ArrowRight />
                  </Link>
                </Button>
              </MagicCard>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

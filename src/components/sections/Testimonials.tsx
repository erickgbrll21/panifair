import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { SectionBackgroundCharacters } from "@/components/sections/SectionBackgroundCharacters";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-cream section-padding relative overflow-hidden">
      <SectionBackgroundCharacters seed={7} />
      <SectionSideDecor />
      <SectionHeading
        eyebrow="Prova social"
        title="Depoimentos de expositores"
        description="Empresas que transformaram participação em resultados reais de negócios."
      />

      <Reveal className="container-panifair">
        <div
          className="snap-carousel"
          role="region"
          aria-label="Depoimentos de expositores"
          tabIndex={0}
        >
          {TESTIMONIALS.map((item) => (
            <div key={`${item.company}-${item.author}`} className="glass-card flex flex-col rounded-2xl p-8">
              <Quote className="fg-bronze mb-4 h-8 w-8 opacity-50" aria-hidden="true" />
              <p className="fg-muted flex-1 text-sm leading-relaxed italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="divider-bronze mt-6 border-t pt-6">
                <p className="fg-primary font-semibold">{item.company}</p>
                <p className="fg-muted text-xs">
                  {item.author} · {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { EDICAO_2026_QUOTES } from "@/lib/edicao-2026";

export function Edicao2026Quotes() {
  return (
    <section className="section-cream section-padding relative overflow-hidden">
      <SectionSideDecor />

      <SectionHeading
        eyebrow="Depoimentos"
        title="Quem esteve lá, recomenda"
        description="Expositores que viveram a PANIFAIR 2026 e já confirmaram interesse na próxima edição."
      />

      <div className="container-panifair grid gap-8 md:grid-cols-2">
        {EDICAO_2026_QUOTES.map((item, i) => (
          <Reveal key={item.author} delay={i * 0.1}>
            <blockquote className="glass-card flex h-full flex-col rounded-2xl p-8">
              <Quote className="mb-4 h-8 w-8 text-[#a67c52] opacity-60" />
              <p className="fg-primary flex-1 text-lg leading-relaxed">&ldquo;{item.quote}&rdquo;</p>
              <footer className="mt-6 border-t border-[rgba(122,85,50,0.15)] pt-6">
                <p className="fg-primary font-semibold">{item.author}</p>
                <p className="fg-muted text-sm">
                  {item.role} · {item.company}
                </p>
              </footer>
            </blockquote>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

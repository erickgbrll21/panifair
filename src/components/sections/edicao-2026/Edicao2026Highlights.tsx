import { Sparkles } from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { SectionHeading } from "@/components/ui/section-heading";
import { EDICAO_2026_HIGHLIGHTS } from "@/lib/edicao-2026";

export function Edicao2026Highlights() {
  return (
    <section className="section-warm-mid section-padding overflow-hidden">
      <SectionHeading
        eyebrow="Destaques"
        title="O que marcou a edição"
        description="Programação, inovação e negócios que fizeram da PANIFAIR 2026 um marco para o setor."
      />

      <div className="container-panifair grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {EDICAO_2026_HIGHLIGHTS.map((item) => (
          <MagicCard key={item.title} className="h-full p-7">
            <div className="icon-badge mb-5 flex h-12 w-12 items-center justify-center rounded-xl">
              <Sparkles className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="fg-primary mb-3 text-lg font-semibold">{item.title}</h3>
            <p className="fg-muted text-sm leading-relaxed">{item.description}</p>
          </MagicCard>
        ))}
      </div>
    </section>
  );
}

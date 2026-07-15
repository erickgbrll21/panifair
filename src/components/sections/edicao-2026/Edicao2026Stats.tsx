import { NumberTicker } from "@/components/magicui/number-ticker";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { EDICAO_2026_STATS } from "@/lib/edicao-2026";

export function Edicao2026Stats() {
  return (
    <section className="section-cream section-padding relative overflow-hidden">
      <SectionSideDecor />

      <SectionHeading
        eyebrow="Resultados oficiais"
        title="Números da edição 2026"
        description="Indicadores consolidados ao final dos três dias de feira — a base que impulsiona a PANIFAIR 2027."
      />

      <div className="container-panifair grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EDICAO_2026_STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.05}>
            <div className="glass-card rounded-2xl p-7 text-center md:text-left">
              <p className="fg-accent text-3xl font-bold md:text-4xl">
                <NumberTicker value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="fg-muted mt-3 text-sm leading-relaxed">{stat.label}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

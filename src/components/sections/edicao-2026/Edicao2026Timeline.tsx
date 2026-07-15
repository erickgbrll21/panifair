import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { EDICAO_2026_TIMELINE } from "@/lib/edicao-2026";

export function Edicao2026Timeline() {
  return (
    <section className="section-warm-mid section-padding overflow-hidden">
      <SectionHeading
        eyebrow="Cronograma"
        title="Dia a dia da feira"
        description="A programação que movimentou três dias intensos de negócios e conteúdo."
      />

      <div className="container-panifair mx-auto grid max-w-4xl gap-6">
        {EDICAO_2026_TIMELINE.map((day, i) => (
          <Reveal key={day.day} delay={i * 0.08}>
            <div className="relative rounded-2xl border border-[rgba(166,124,82,0.2)] bg-[rgba(166,124,82,0.04)] p-6 md:p-8">
              <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
                <span className="fg-accent text-sm font-semibold uppercase tracking-wider">
                  {day.day}
                </span>
                <span className="fg-primary text-lg font-semibold">{day.theme}</span>
              </div>
              <ul className="flex flex-wrap gap-2">
                {day.items.map((item) => (
                  <li
                    key={item}
                    className="fg-muted rounded-full border border-[rgba(122,85,50,0.25)] bg-[rgba(176,132,80,0.08)] px-4 py-1.5 text-xs"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

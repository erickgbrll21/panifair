import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { FloorPlanZoom } from "@/components/sections/FloorPlanZoom";

const LEGEND = [
  { color: "#f39100", label: "ESTANDES “AA”" },
  { color: "#ffe000", label: "ESTANDES “A”" },
  { color: "#1f9d4d", label: "ESTANDES “B”" },
  { color: "#b8b8b8", label: "ESTANDES “C”" },
  { color: "#2f52c9", label: "ESTANDES SEDE" },
] as const;

export function FloorPlan() {
  return (
    <section id="planta" className="section-cream section-padding relative overflow-hidden">
      <SectionSideDecor />
      <SectionHeading
        eyebrow="Layout estratégico"
        title="Planta da feira"
        description="Mais de 28.000 m² de área expositiva com estandes segmentados por categoria e fluxo otimizado para maximizar visitas qualificadas ao seu negócio."
      />

      <div className="container-panifair">
        <Reveal>
          <div className="panel-dark overflow-hidden rounded-3xl border p-4 sm:p-6 md:p-8">
            <div className="mb-6">
              <p className="mb-3 text-sm font-bold uppercase tracking-wide text-[#3a2716] underline decoration-[#3a2716] underline-offset-4">
                LEGENDA:
              </p>
              <ul className="space-y-2">
                {LEGEND.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <span
                      className="h-5 w-5 shrink-0 rounded-[2px] ring-1 ring-black/15"
                      style={{ backgroundColor: item.color }}
                      aria-hidden
                    />
                    <span className="text-sm font-medium uppercase tracking-wide text-[#3a2716]">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <FloorPlanZoom />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

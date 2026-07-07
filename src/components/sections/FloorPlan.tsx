import { Map, Maximize2, Users, Zap } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";

const ZONES = [
  { name: "Pavilhão A", area: "12.000 m²", focus: "Equipamentos & Automação", color: "rgba(196,150,106,0.3)" },
  { name: "Pavilhão B", area: "8.500 m²", focus: "Ingredientes & Insumos", color: "rgba(166,124,82,0.25)" },
  { name: "Pavilhão C", area: "6.000 m²", focus: "Embalagens & Food Service", color: "rgba(122,85,50,0.3)" },
  { name: "Área Premium", area: "2.500 m²", focus: "Ilhas & Marcas Líderes", color: "rgba(196,150,106,0.4)" },
];

export function FloorPlan() {
  return (
    <section id="planta" className="section-cream section-padding relative overflow-hidden">
      <SectionSideDecor />
      <SectionHeading
        eyebrow="Layout estratégico"
        title="Planta da feira"
        description="Mais de 28.000 m² de área expositiva com fluxo otimizado para maximizar visitas qualificadas ao seu estande."
      />

      <div className="container-panifair">
        <Reveal>
          <div className="panel-dark overflow-hidden rounded-3xl border p-8 md:p-12">
            <div className="grid gap-4 md:grid-cols-2">
              {ZONES.map((zone, i) => (
                <div
                  key={zone.name}
                  className="zone-card relative flex min-h-[140px] flex-col justify-between rounded-2xl border p-6 transition-colors duration-300"
                  style={{ background: zone.color }}
                >
                  <div>
                    <h3 className="fg-primary text-lg font-bold">{zone.name}</h3>
                    <p className="fg-muted mt-1 text-sm">{zone.focus}</p>
                  </div>
                  <p className="fg-bronze text-xs font-semibold uppercase tracking-wider">
                    {zone.area}
                  </p>
                  {i === 3 && (
                    <span className="absolute right-4 top-4 rounded-full bg-[#a67c52] px-3 py-1 text-[10px] font-bold uppercase text-black">
                      Premium
                    </span>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { icon: Maximize2, label: "28.000 m²", desc: "Área expositiva" },
                { icon: Users, label: "450+", desc: "Estandes" },
                { icon: Map, label: "4", desc: "Pavilhões" },
                { icon: Zap, label: "360°", desc: "Fluxo otimizado" },
              ].map(({ icon: Icon, label, desc }) => (
                <div key={desc} className="text-center">
                  <Icon className="fg-bronze mx-auto mb-2 h-5 w-5" />
                  <p className="fg-accent text-lg font-bold">{label}</p>
                  <p className="fg-muted text-xs">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

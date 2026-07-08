import {
  Factory,
  Truck,
  Cpu,
  Package,
  Thermometer,
  Coffee,
  Store,
  Wheat,
  ChefHat,
  Building2,
  Cog,
  Briefcase,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionBackgroundCharacters } from "@/components/sections/SectionBackgroundCharacters";
import { VISITOR_PROFILES } from "@/lib/constants";

const PROFILE_ICONS = [
  Factory,
  Wheat,
  Truck,
  Cog,
  Package,
  Cpu,
  Thermometer,
  Coffee,
  Store,
  ChefHat,
  Building2,
  Briefcase,
];

export function Visitors() {
  return (
    <section id="visitantes" className="section-dark section-padding relative overflow-hidden">
      <SectionBackgroundCharacters seed={2} />
      <SectionHeading
        eyebrow="Público qualificado"
        title="Quem visita a feira?"
        description="Decisores de compra, proprietários de redes, chefs executivos e profissionais que movimentam o mercado B2B de panificação e confeitaria."
      />

      <div className="container-panifair grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {VISITOR_PROFILES.map((profile, i) => {
          const Icon = PROFILE_ICONS[i % PROFILE_ICONS.length];
          return (
            <Reveal key={profile} delay={i * 0.03}>
              <div className="glass-card group flex flex-col items-center rounded-2xl p-6 text-center transition-colors duration-300 hover:border-[#a67c52] hover:bg-[rgba(166,124,82,0.06)]">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(166,124,82,0.1)] text-[#a67c52]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="fg-primary text-sm font-medium">{profile}</span>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

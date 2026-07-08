import {
  TrendingUp,
  Users,
  Target,
  Award,
  Globe,
  Zap,
  ArrowRight,
  type LucideIcon,
} from "lucide-react";
import { MagicCard } from "@/components/magicui/magic-card";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
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
  Zap,
};

export function WhyExhibit() {
  return (
    <section id="por-que-expor" className="section-cream section-padding relative overflow-hidden">
      <SectionBackgroundCharacters seed={1} />
      <SectionSideDecor />
      <SectionHeading
        eyebrow="Oportunidade estratégica"
        title="Por que expor na PANIFAIR 2027?"
        description="Não participar significa ceder espaço aos concorrentes. A feira concentra em três dias o que sua equipe comercial levaria meses para alcançar."
      />

      <div className="container-panifair grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {WHY_EXHIBIT.map((item, i) => {
          const Icon = ICON_MAP[item.icon];
          return (
            <Reveal key={item.title} delay={i * 0.05}>
              <MagicCard className="h-full p-7">
                <div className="icon-badge mb-5 flex h-14 w-14 items-center justify-center rounded-xl">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="fg-primary mb-3 text-lg font-semibold">{item.title}</h3>
                <p className="fg-muted text-sm leading-relaxed">{item.description}</p>
              </MagicCard>
            </Reveal>
          );
        })}
      </div>

      <Reveal className="container-panifair mt-12 text-center">
        <Button size="lg" asChild>
          <Link href="/contato">
            Quero ser expositor
            <ArrowRight />
          </Link>
        </Button>
      </Reveal>
    </section>
  );
}

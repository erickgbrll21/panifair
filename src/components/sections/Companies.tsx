import { LogoLoop } from "@/components/LogoLoop";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { APOIADORES } from "@/lib/constants";

export function Companies() {
  return (
    <section id="apoiadores" className="section-dark section-padding overflow-hidden">
      <SectionHeading
        eyebrow="Parcerias estratégicas"
        title="Apoiadores"
        description="Empresas que apoiam a PANIFAIR 2027 e fortalecem o ecossistema da panificação no Brasil."
      />

      <Reveal>
        <LogoLoop
          logos={APOIADORES.map((a) => ({ src: a.logo, alt: a.name }))}
          speed={80}
          logoHeight={72}
          gap={56}
          pauseOnHover
          fadeOut
          fadeOutColor="#452816"
          ariaLabel="Logos dos apoiadores da PANIFAIR 2027"
        />
      </Reveal>
    </section>
  );
}

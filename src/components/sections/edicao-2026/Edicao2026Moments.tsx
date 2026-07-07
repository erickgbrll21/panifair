import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { EDICAO_2026_MOMENTS } from "@/lib/edicao-2026";

export function Edicao2026Moments() {
  return (
    <section className="section-cream section-padding relative overflow-hidden">
      <SectionSideDecor />

      <SectionHeading
        eyebrow="Galeria"
        title="Momentos inesquecíveis"
        description="Imagens que registram a energia, o networking e a vitrine tecnológica da PANIFAIR 2026."
      />

      <div className="container-panifair grid gap-8 md:grid-cols-2">
        {EDICAO_2026_MOMENTS.map((moment, i) => (
          <Reveal key={moment.title} delay={i * 0.08}>
            <article className="group overflow-hidden rounded-2xl border border-[rgba(122,85,50,0.2)] bg-white/40">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={moment.image}
                  alt={moment.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/70 via-transparent to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="fg-primary text-lg font-semibold">{moment.title}</h3>
                <p className="fg-muted mt-2 text-sm leading-relaxed">{moment.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

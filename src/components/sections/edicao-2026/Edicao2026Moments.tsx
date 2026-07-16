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

      <div className="container-panifair grid gap-6 md:grid-cols-2 lg:gap-8">
        {EDICAO_2026_MOMENTS.map((image, i) => (
          <Reveal
            key={image}
            delay={i * 0.08}
            className={i === 0 ? "md:col-span-2" : undefined}
          >
            <article className="group overflow-hidden rounded-2xl border border-[rgba(122,85,50,0.2)] bg-white/40">
              <div
                className={`relative overflow-hidden ${i === 0 ? "aspect-[21/9]" : "aspect-[16/10]"}`}
              >
                <Image
                  src={image}
                  alt={`PANIFAIR 2026 — foto ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes={
                    i === 0
                      ? "(max-width: 768px) 100vw, 1200px"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

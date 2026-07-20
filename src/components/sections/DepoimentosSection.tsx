import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { SectionBackgroundCharacters } from "@/components/sections/SectionBackgroundCharacters";
import { DEPOIMENTO_VIDEOS } from "@/lib/depoimentos";

type DepoimentosSectionProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  backgroundSeed?: number;
};

export function DepoimentosSection({
  id,
  eyebrow,
  title,
  description,
  backgroundSeed,
}: DepoimentosSectionProps) {
  return (
    <section
      id={id}
      className="section-cream section-padding relative overflow-hidden"
    >
      {backgroundSeed !== undefined ? (
        <SectionBackgroundCharacters seed={backgroundSeed} />
      ) : null}
      <SectionSideDecor />

      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <Reveal className="container-panifair">
        <div
          className="snap-carousel"
          role="region"
          aria-label={title}
          tabIndex={0}
        >
          {DEPOIMENTO_VIDEOS.map((item) => (
            <article
              key={item.src}
              className="glass-card flex flex-col overflow-hidden rounded-2xl"
            >
              <div className="relative aspect-[9/16] max-h-[min(72vh,640px)] overflow-hidden bg-[#160f08] sm:aspect-[3/4]">
                <video
                  src={item.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-cover"
                  aria-label={`Depoimento em vídeo — ${item.title}`}
                />
              </div>
              <div className="border-t border-[rgba(122,85,50,0.15)] px-5 py-4">
                <p className="font-semibold text-[#452816]">{item.title}</p>
                <p className="mt-1 text-xs text-[#5c4d3e]">{item.label}</p>
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

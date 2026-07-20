import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionBackgroundCharacters } from "@/components/sections/SectionBackgroundCharacters";
import { BOOTH_TYPES } from "@/lib/constants";

export function BoothTypes() {
  return (
    <section id="estandes" className="section-cream section-padding relative overflow-hidden">
      <SectionBackgroundCharacters seed={6} />
      <SectionHeading title="Tipos de Estandes" align="center" className="max-w-none" />

      <div className="container-panifair">
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {BOOTH_TYPES.map((booth) => (
            <article
              key={booth.name}
              className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_30px_rgba(122,85,50,0.08)] ring-1 ring-[rgba(122,85,50,0.08)]"
            >
                <div
                  className="px-4 py-5 text-center text-sm font-bold uppercase tracking-wide text-white sm:text-[13px]"
                  style={{ backgroundColor: booth.color }}
                >
                  {booth.name}
                </div>

                <div className="flex flex-1 flex-col px-5 py-6 sm:px-6">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#b89a5b]">
                    Incluso:
                  </p>

                  <ul className="mt-3 flex-1 space-y-2.5">
                    {booth.inclusions.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm leading-relaxed text-[#3a2716]"
                      >
                        <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#3a2716]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm italic leading-relaxed text-[#7a5532]">
            Os valores são calculados por m² e variam conforme a localização no mapa oficial da
            Panifair 2027.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

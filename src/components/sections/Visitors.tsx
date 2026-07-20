import { Factory, Wheat, Cpu, Store, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionBackgroundCharacters } from "@/components/sections/SectionBackgroundCharacters";
import { VISITOR_GROUPS } from "@/lib/constants";

const GROUP_ICONS: Record<string, LucideIcon> = {
  Factory,
  Wheat,
  Cpu,
  Store,
};

const QUICK_FACTS = [
  { value: "12", label: "segmentos do setor" },
  { value: "3", label: "dias de negócios" },
  { value: "100%", label: "público B2B" },
] as const;

export function Visitors() {
  return (
    <section id="visitantes" className="section-dark section-padding relative overflow-hidden">
      <SectionBackgroundCharacters seed={2} />

      <div className="container-panifair grid gap-12 lg:grid-cols-12 lg:gap-16">
        {/* Coluna editorial */}
        <div className="lg:col-span-5">
          <Reveal>
            <div className="mb-5 flex items-center gap-3">
              <span className="section-eyebrow text-[11px] font-bold uppercase tracking-[0.3em]">
                Público qualificado
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-[#d4a870] to-transparent" />
            </div>

            <h2 className="section-title text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Quem visita
              <br />
              <span className="text-gradient-gold">a feira?</span>
            </h2>

            <p className="section-desc mt-5 max-w-md text-base leading-relaxed md:text-lg">
              Decisores de compra com orçamento aprovado e agenda aberta para
              negociar — do dono da padaria à grande indústria.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-10 flex items-stretch divide-x divide-[rgba(221,207,170,0.18)] border-y border-[rgba(221,207,170,0.18)]">
              {QUICK_FACTS.map((fact) => (
                <div key={fact.label} className="flex-1 px-4 py-5 first:pl-0 lg:px-6">
                  <dt className="sr-only">{fact.label}</dt>
                  <dd>
                    <span className="block text-2xl font-extrabold text-[#d4a870] md:text-3xl">
                      {fact.value}
                    </span>
                    <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#9a8b7a]">
                      {fact.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Grupos de visitantes */}
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
          {VISITOR_GROUPS.map((group, i) => {
            const Icon = GROUP_ICONS[group.icon];
            return (
              <article
                key={group.title}
                className="glass-card group relative flex h-full flex-col rounded-2xl p-6 transition-colors duration-300 hover:border-[#a67c52]"
              >
                  <span
                    aria-hidden
                    className="absolute right-5 top-5 text-xs font-bold tabular-nums tracking-[0.2em] text-[rgba(221,207,170,0.35)]"
                  >
                    0{i + 1}
                  </span>

                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(212,168,112,0.12)] text-[#d4a870] transition-colors duration-300 group-hover:bg-[rgba(212,168,112,0.2)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <h3 className="fg-primary text-base font-semibold">{group.title}</h3>

                  <ul className="mt-3 flex flex-wrap gap-1.5">
                    {group.profiles.map((profile) => (
                      <li
                        key={profile}
                        className="rounded-full border border-[rgba(221,207,170,0.2)] px-2.5 py-1 text-[11px] font-medium leading-none text-[#c4b8a8]"
                      >
                        {profile}
                      </li>
                    ))}
                  </ul>
                </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

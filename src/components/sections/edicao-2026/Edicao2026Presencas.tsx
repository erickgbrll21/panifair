import Image from "next/image";
import { Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { EDICAO_2026_PRESENCAS } from "@/lib/edicao-2026";

export function Edicao2026Presencas() {
  const [featured, ...others] = EDICAO_2026_PRESENCAS;

  return (
    <section className="section-cream section-padding relative overflow-hidden">
      <SectionSideDecor />

      <div className="container-panifair">
        <Reveal>
          <div className="mb-10 max-w-3xl">
            <div className="mb-5 flex items-center gap-3">
              <span className="section-eyebrow text-[11px] font-bold uppercase tracking-[0.3em]">
                Presenças especiais
              </span>
              <span className="h-px w-10 bg-gradient-to-r from-[var(--color-bronze)] to-transparent" />
            </div>
            <h2 className="section-title text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              Grandes nomes que marcarão a{" "}
              <span className="text-gradient-bronze">PANIFAIR 2026</span>
            </h2>
            <p className="section-desc mt-5 text-base leading-relaxed md:text-lg">
              Personalidades que inspiraram, conectaram e movimentaram o setor —
              com programação que reuniu visão de mercado, gestão e futuro da
              panificação.
            </p>
          </div>
        </Reveal>

        {/* Destaque — Martin Puricelli */}
        <Reveal delay={0.05}>
          <article className="relative overflow-hidden rounded-[1.75rem] border border-[rgba(122,85,50,0.25)] bg-gradient-to-br from-[#452816] via-[#5a3520] to-[#3a2010] px-8 pt-8 text-[#f8f3ee] shadow-[0_20px_50px_rgba(69,40,22,0.25)] md:px-10 md:pt-10 pb-0">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[rgba(232,200,122,0.18)] blur-3xl"
            />
            <div className="relative grid gap-8 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-7 pb-8 md:pb-10">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(232,200,122,0.3)] bg-[rgba(22,15,8,0.35)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-[#e8c87a]">
                  <Star className="h-3 w-3" aria-hidden="true" />
                  {featured.badge}
                </span>
                <h3 className="mt-4 text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.5rem]">
                  {featured.name}
                </h3>
                <p className="mt-3 max-w-xl text-lg font-semibold leading-snug text-[#e8c87a] md:text-xl md:leading-snug">
                  {featured.title}
                </p>
                <p className="mt-5 max-w-xl text-[15px] leading-[1.75] text-[#e8dcc4] md:text-base md:leading-[1.8]">
                  {featured.bio}
                </p>
              </div>

              {"image" in featured && featured.image ? (
                <div className="relative mx-auto aspect-[3/4] w-full max-w-[300px] sm:max-w-sm lg:col-span-5 lg:mx-0 lg:ml-auto lg:aspect-auto lg:h-[min(480px,58vw)] lg:max-w-none lg:w-full xl:h-[520px]">
                  <Image
                    src={featured.image}
                    alt={`${featured.name} — presença especial PANIFAIR 2026`}
                    fill
                    className="origin-bottom object-contain object-bottom lg:scale-[1.12]"
                    sizes="(max-width: 1024px) 320px, 420px"
                  />
                </div>
              ) : null}
            </div>
          </article>
        </Reveal>

        {/* Demais presenças */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((person) => (
            <article
              key={person.name}
              className="glass-card group flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-[#a67c52]"
            >
                {"image" in person && person.image ? (
                  <div className="relative flex min-h-[260px] items-end justify-center bg-[#0a0a0a] px-4 pb-0 pt-5 sm:min-h-[300px]">
                    <Image
                      src={person.image}
                      alt={`${person.name} — presença especial PANIFAIR 2026`}
                      width={400}
                      height={520}
                      className="h-auto w-full max-w-[240px] object-contain object-bottom sm:max-w-[270px]"
                      sizes="(max-width: 768px) 240px, 270px"
                      draggable={false}
                    />
                  </div>
                ) : null}

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="fg-primary text-xl font-extrabold tracking-tight md:text-2xl">
                    {person.name}
                  </h3>

                  <p className="fg-accent mt-2 text-sm font-semibold leading-snug">
                    {person.title}
                  </p>

                  {person.bio ? (
                    <p className="fg-muted mt-3 flex-1 text-sm leading-relaxed">{person.bio}</p>
                  ) : null}
                </div>
              </article>
          ))}
        </div>
      </div>
    </section>
  );
}

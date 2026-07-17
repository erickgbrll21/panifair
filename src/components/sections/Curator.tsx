import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { CuratorPillars } from "@/components/sections/CuratorPillars";

export function Curator() {
  return (
    <div className="mt-12 grid items-start gap-12 md:mt-16 lg:grid-cols-12 lg:items-stretch lg:gap-10 xl:gap-14">
      {/* Retrato */}
      <Reveal delay={0.1} className="order-2 lg:order-1 lg:col-span-5 lg:flex lg:h-full lg:min-h-0">
        <div className="relative mx-auto w-full max-w-md pb-10 sm:max-w-lg lg:mx-0 lg:flex lg:min-h-0 lg:flex-1 lg:flex-col lg:pb-12">
          <div className="relative min-h-[22rem] flex-1 overflow-visible pt-2.5 pl-2.5 sm:min-h-[26rem] lg:flex lg:min-h-0 lg:flex-col">
            <div
              aria-hidden
              className="pointer-events-none absolute top-0 left-0 z-0 h-[calc(100%-0.625rem)] w-[calc(100%-0.625rem)] rounded-[1.75rem] border border-[rgba(176,132,80,0.3)]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute bottom-0 left-2.5 z-[5] h-24 w-24 rounded-bl-[2rem] border-b-2 border-l-2 border-[#b08450]"
            />

            <div className="relative z-10 h-full min-h-[22rem] flex-1 overflow-hidden rounded-[1.75rem] border border-[rgba(176,132,80,0.35)] sm:min-h-[26rem] lg:min-h-0">
              <div
                aria-hidden
                className="curator-portrait-glow pointer-events-none absolute -inset-x-[8%] bottom-[-2%] top-[6%] z-0 opacity-40"
              />
              <Image
                src="/junior-maffille-curador.png"
                alt="Júnior Maffille — Idealizador e Curador da PANIFAIR"
                width={800}
                height={1000}
                className="relative z-10 h-full w-full object-cover object-[center_8%]"
                sizes="(max-width: 1024px) 90vw, 38vw"
              />
            </div>
          </div>

          <div className="glass-card absolute bottom-0 left-1/2 z-20 w-[calc(100%-2.5rem)] -translate-x-1/2 rounded-2xl px-6 py-5 text-center shadow-[0_16px_48px_rgba(69,40,22,0.18)]">
            <p className="fg-primary text-xl font-extrabold tracking-tight">
              Júnior Maffille
            </p>
            <p className="mt-1.5 text-[10px] font-bold uppercase tracking-[0.22em] text-[#7a5532] md:text-[11px]">
              Idealizador e Curador
            </p>
            <p className="mt-1 flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-[0.3em] text-[#b08450]">
              <span className="h-px w-4 bg-[rgba(176,132,80,0.5)]" />
              Panifair
              <span className="h-px w-4 bg-[rgba(176,132,80,0.5)]" />
            </p>
          </div>
        </div>
      </Reveal>

      {/* Conteúdo */}
      <div className="order-1 lg:order-2 lg:col-span-7">
        <Reveal delay={0.05}>
          <div className="mb-3 flex items-center gap-3">
            <span className="inline-flex items-center gap-2.5 rounded-full border border-[rgba(122,85,50,0.28)] bg-[rgba(176,132,80,0.1)] px-5 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#7a5532] md:text-[11px]">
              Quem está por trás
              <span className="h-1 w-1 rotate-45 bg-[#b08450]" />
            </span>
          </div>
          <h3 className="text-4xl font-extrabold uppercase tracking-[0.04em] text-[#a3733f] md:text-5xl lg:text-[3.4rem] lg:leading-none">
            da Panifair
          </h3>
        </Reveal>

        <CuratorPillars />

        <Reveal delay={0.3}>
          <div className="mt-10 border-t border-[rgba(176,132,80,0.25)] pt-7 md:mt-12">
            <p
              className="inline-flex items-center gap-3 text-3xl text-[#a67c52] md:text-4xl"
              style={{
                fontFamily:
                  '"Brush Script MT", "Segoe Script", "Lucida Handwriting", cursive',
              }}
            >
              Júnior Maffille
              <span
                aria-label="Itália"
                title="Itália"
                className="inline-flex h-5 w-7 shrink-0 overflow-hidden rounded-[3px] border border-[rgba(69,40,22,0.15)] shadow-[0_1px_2px_rgba(69,40,22,0.12)] md:h-6 md:w-8"
              >
                <span className="h-full w-1/3 bg-[#009246]" />
                <span className="h-full w-1/3 bg-white" />
                <span className="h-full w-1/3 bg-[#ce2b37]" />
              </span>
            </p>
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.24em] text-[#5c4d3e]">
              Idealizador e Curador
              <span className="ml-2 text-[#b08450]">· Panifair</span>
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

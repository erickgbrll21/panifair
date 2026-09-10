import { Reveal } from "@/components/ui/reveal";
import { CuratorPillars } from "@/components/sections/CuratorPillars";

export function Curator() {
  return (
    <div className="mt-12 md:mt-16">
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

      <Reveal delay={0.1}>
        <div className="mb-8 mt-6 md:mb-10">
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

      <CuratorPillars />
    </div>
  );
}

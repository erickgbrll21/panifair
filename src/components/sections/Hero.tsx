import dynamic from "next/dynamic";
import Image from "next/image";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { LightRays } from "@/components/magicui/light-rays";

const Countdown = dynamic(
  () => import("@/components/ui/countdown").then((mod) => mod.Countdown),
  {
    loading: () => (
      <div className="flex flex-wrap justify-center gap-3 md:gap-4">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            key={index}
            className="glass-card flex min-w-[72px] flex-col items-center rounded-2xl px-4 py-3 md:min-w-[88px] md:px-5 md:py-4"
          >
            <span className="text-2xl font-bold tabular-nums text-[#7a5532] md:text-3xl">--</span>
            <span className="mt-1 h-3 w-8 rounded bg-[rgba(176,132,80,0.15)]" />
          </div>
        ))}
      </div>
    ),
  },
);

export function Hero() {
  return (
    <section className="hero relative flex min-h-[100dvh] flex-col items-center justify-end overflow-x-hidden pb-0 pt-24 md:pt-28">
      <div aria-hidden className="hero__effects pointer-events-none absolute inset-0 z-[1] overflow-hidden">
        <DotPattern className="z-0 opacity-[0.12]" />

        <LightRays count={6} blur={32} length="88vh" />
      </div>

      <div className="relative z-[2] mb-8 flex w-full -translate-y-4 flex-col items-center px-6 md:mb-12 md:-translate-y-6">
        <div className="aspect-square w-full max-w-[min(74vw,520px)] md:max-w-[min(56vw,560px)]">
          <Image
            src="/hero-logo.png"
            alt="Panifair — Feira Internacional da Panificação"
            width={1080}
            height={1080}
            className="hero__logo h-auto w-full select-none"
            priority
            draggable={false}
          />
        </div>

        <div className="-mt-12 w-full max-w-xl text-center md:-mt-16">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.3em] text-[#5c4d3e]">
            Contagem regressiva para o evento
          </p>
          <div className="flex justify-center">
            <Countdown />
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Crown, Sprout, Star } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const CURATOR_PILLARS = [
  {
    icon: Sprout,
    title: "Uma história de origem e propósito",
    description:
      "Criado na zona rural de Viçosa, em Minas Gerais, Júnior Maffille iniciou sua trajetória no empreendedorismo ainda muito jovem, aos 10 anos. Desde então, construiu uma história marcada pelo trabalho, pela perseverança e pela capacidade de transformar desafios em oportunidades.",
  },
  {
    icon: Crown,
    title: "Liderança que transforma",
    description:
      "Com mais de 26 anos de experiência no setor de panificação, Júnior consolidou-se como uma das principais referências do segmento. Hoje lidera uma rede de padarias, restaurantes e empresas correlatas, além de atuar como mentor e assessor estratégico de mais de 56 CNPJs.",
  },
  {
    icon: Star,
    title: "Um legado que inspira",
    description:
      "Sua atuação vai além da gestão empresarial. Júnior Maffille acredita no empreendedorismo como ferramenta de transformação social, geração de empregos e construção de legado. Sua visão une fé, disciplina, conhecimento prático e profundo respeito pelas pessoas que constroem o negócio diariamente.",
  },
] as const;

export function CuratorPillars() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const pillars = gsap.utils.toArray<HTMLElement>(".curator-pillar", containerRef.current);
      if (!pillars.length) return;

      const prefersReducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const isMobile = window.matchMedia("(max-width: 767px)").matches;

      if (prefersReducedMotion || isMobile) {
        gsap.set(pillars, { clearProps: "all" });
        if (lineRef.current) gsap.set(lineRef.current, { clearProps: "all" });
        return;
      }

      gsap.set(pillars, { opacity: 0, y: 32 });
      if (lineRef.current) {
        gsap.set(lineRef.current, { scaleY: 0, transformOrigin: "top center" });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "bottom 50%",
          scrub: 0.55,
        },
      });

      if (lineRef.current) {
        tl.to(
          lineRef.current,
          { scaleY: 1, duration: 1.2, ease: "none" },
          0,
        );
      }

      pillars.forEach((pillar, index) => {
        tl.to(
          pillar,
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: "power2.out",
          },
          index * 0.45,
        );
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="relative mt-9 space-y-8 md:mt-11">
      <span
        ref={lineRef}
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-[1.375rem] top-6 z-0 w-px bg-gradient-to-b from-[rgba(176,132,80,0.4)] via-[rgba(176,132,80,0.2)] to-transparent"
      />
      {CURATOR_PILLARS.map((pillar) => (
        <div
          key={pillar.title}
          className="curator-pillar flex flex-row gap-4 md:gap-5"
        >
          <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[rgba(176,132,80,0.5)] bg-[#fdf8ee] text-[#a67c52] shadow-[0_4px_16px_rgba(122,85,50,0.12)]">
            <pillar.icon className="h-5 w-5" strokeWidth={1.75} />
          </span>
          <div>
            <h4 className="flex items-center gap-2.5 text-sm font-extrabold uppercase tracking-[0.16em] text-[#452816] md:text-[15px]">
              {pillar.title}
              <span className="hidden h-1 w-1 shrink-0 rotate-45 bg-[#b08450] sm:inline-block" />
            </h4>
            <p className="fg-muted mt-2.5 text-[15px] leading-relaxed md:text-base">
              {pillar.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

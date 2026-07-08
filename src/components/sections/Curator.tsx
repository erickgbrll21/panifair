import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";

export function Curator() {
  return (
    <div className="mt-12 grid items-center gap-12 md:mt-16 lg:grid-cols-12 lg:gap-16">
        <Reveal delay={0.1} className="order-2 lg:order-1 lg:col-span-5">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-4 top-2 z-0 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[1.75rem] border border-[rgba(176,132,80,0.35)] md:top-3"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-3 -left-3 z-0 h-24 w-24 rounded-br-[2rem] border-b-2 border-l-2 border-[#b08450]"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem]">
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
                sizes="(max-width: 1024px) 85vw, 38vw"
              />
            </div>

            <div className="glass-card absolute -bottom-5 left-6 right-6 z-20 rounded-2xl px-6 py-5 shadow-[0_16px_48px_rgba(69,40,22,0.18)] md:left-8 md:right-auto md:min-w-[16rem]">
              <p className="fg-primary text-xl font-extrabold tracking-tight">
                Júnior Maffille
              </p>
              <p className="mt-1.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#7a5532] md:text-[11px]">
                <span className="pulse-glow-bronze h-1.5 w-1.5 shrink-0 rounded-full bg-[#b08450]" />
                Idealizador e Curador · PANIFAIR
              </p>
            </div>
          </div>
        </Reveal>

        <div className="order-1 lg:order-2 lg:col-span-7">
          <Reveal delay={0.05}>
            <div className="space-y-4">
              <p className="fg-muted text-base leading-relaxed md:text-lg">
                Criado na zona rural de Viçosa, em Minas Gerais, Júnior Maffille
                iniciou sua trajetória no empreendedorismo ainda muito jovem, aos
                10 anos. Desde então, construiu uma história marcada pelo
                trabalho, pela perseverança e pela capacidade de transformar
                desafios em oportunidades.
              </p>
              <p className="fg-muted text-base leading-relaxed md:text-lg">
                Com mais de 26 anos de experiência no setor de panificação,
                Júnior consolidou-se como uma das principais referências do
                segmento. Atualmente, comanda uma rede de padarias, restaurantes
                e empresas correlatas, além de atuar como mentor e assessor
                estratégico de mais de 56 CNPJs. Sob sua liderança, esses
                negócios empregam cerca de 1.300 colaboradores e movimentam,
                anualmente, dezenas de milhões de reais.
              </p>
              <p className="fg-muted text-base leading-relaxed md:text-lg">
                Sua atuação vai além da gestão empresarial. Júnior Maffille
                acredita no empreendedorismo como ferramenta de transformação
                social, geração de empregos e construção de legado. Sua visão une
                fé, disciplina, conhecimento prático e profundo respeito pelas
                pessoas que constroem o negócio diariamente.
              </p>
            </div>
          </Reveal>
        </div>
    </div>
  );
}

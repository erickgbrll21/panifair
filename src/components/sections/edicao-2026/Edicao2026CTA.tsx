import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { Button } from "@/components/ui/button";
import { DotPattern } from "@/components/magicui/dot-pattern";

export function Edicao2026CTA() {
  return (
    <section className="section-warm section-padding relative overflow-hidden">
      <DotPattern className="opacity-20" />

      <div className="container-panifair relative z-10 text-center">
        <Reveal>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl border border-[rgba(122,85,50,0.25)] bg-[rgba(255,252,245,0.55)] p-10 md:p-14">
            <Sparkles className="mx-auto mb-6 h-10 w-10 text-[#a3733e]" />
            <h2 className="text-3xl font-bold tracking-tight text-[#452816] md:text-4xl">
              A próxima edição já está confirmada
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-[#5c4d3e]">
              Garanta sua presença na PANIFAIR 2027 e faça parte do crescimento
              que começou em 2026. Reservas de estande abertas.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contato">
                  Quero ser expositor 2027
                  <ArrowRight />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/">Conhecer a edição 2027</Link>
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

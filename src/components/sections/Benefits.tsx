import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { Button } from "@/components/ui/button";
import { BENEFITS } from "@/lib/constants";

export function Benefits() {
  return (
    <section id="beneficios" className="section-cream section-padding relative overflow-hidden">
      <SectionSideDecor />
      <div className="container-panifair relative z-10">
        <SectionHeading
          eyebrow="Vantagens exclusivas"
          title="Benefícios para expositores"
          description="Cada detalhe foi pensado para maximizar seu retorno comercial e posicionamento de marca."
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80"
                alt="Networking em feira de negócios"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </Reveal>

          <div className="space-y-5">
            {BENEFITS.map((benefit, i) => (
              <Reveal key={benefit.title} delay={i * 0.05}>
                <div className="hover-row group flex gap-4 rounded-xl border border-transparent p-4 transition-colors duration-300">
                  <div className="icon-badge flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <Check className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="fg-primary font-semibold">{benefit.title}</h3>
                    <p className="fg-muted mt-1 text-sm leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}

            <Button size="lg" className="mt-4" asChild>
              <Link href="/contato">
                Quero ser expositor
                <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { ContactForm } from "@/components/sections/ContactForm";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { PANIFAIR_WHATSAPP_NUMBER } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactSection() {
  const whatsappDisplay = "+55 (11) 4002-8922";

  return (
    <section className="section-warm-mid relative overflow-hidden pb-[clamp(4rem,10vw,8rem)] pt-28 md:pt-32">
      <DotPattern className="opacity-[0.12]" />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[640px] -translate-x-1/2 rounded-full bg-[rgba(176,132,80,0.06)] blur-[120px]"
      />

      <SectionHeading
        eyebrow="Fale conosco"
        title="Quero ser expositor na PANIFAIR 2027"
        description="Preencha o formulário abaixo. Ao enviar, você será direcionado ao WhatsApp comercial da PANIFAIR com todos os dados já organizados para agilizar seu atendimento."
      />

      <div className="container-panifair relative z-10 grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:items-start lg:gap-12">
        <Reveal>
          <ContactForm />
        </Reveal>

        <div className="space-y-5">
          <Reveal delay={0.05}>
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-[#452816]">Atendimento comercial</h3>
              <p className="mt-3 text-sm leading-relaxed text-[#5c4d3e]">
                Nossa equipe responde em até 24 horas úteis. Para propostas de estande,
                montagem e patrocínio, o WhatsApp é o canal mais rápido.
              </p>

              <ul className="mt-6 space-y-4 text-sm text-[#5c4d3e]">
                <li>
                  <a
                    href={buildWhatsAppUrl("Olá! Gostaria de informações sobre a PANIFAIR 2027.")}
                    className="flex items-center gap-3 transition-colors hover:text-[#d4a870]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-[#b08450]" />
                    WhatsApp · {whatsappDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#b08450]" />
                  <a href="mailto:expositores@panifair.com.br" className="hover:text-[#d4a870]">
                    expositores@panifair.com.br
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#b08450]" />
                  <a href={`tel:+${PANIFAIR_WHATSAPP_NUMBER}`} className="hover:text-[#d4a870]">
                    {whatsappDisplay}
                  </a>
                </li>
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-[rgba(176,132,80,0.18)] bg-[rgba(176,132,80,0.04)] p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#d4a870]">
                O que preparar
              </p>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-[#5c4d3e]">
                <li>Porte desejado do estande</li>
                <li>Segmento e principais produtos</li>
                <li>Objetivo na feira (vendas, parcerias, lançamentos)</li>
              </ul>
              <Link
                href="/#estandes"
                className="mt-5 inline-flex text-sm font-medium text-[#d4a870] transition-colors hover:text-[#e8c87a]"
              >
                Ver tipos de estande →
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

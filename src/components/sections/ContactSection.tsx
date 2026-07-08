import Link from "next/link";
import { CalendarDays, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { ContactForm } from "@/components/sections/ContactForm";
import {
  EVENT_DATES_LABEL,
  PANIFAIR_ADDRESS,
  PANIFAIR_EMAIL,
  PANIFAIR_PHONE_DISPLAY,
  PANIFAIR_PHONE_TEL,
} from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export function ContactSection() {
  return (
    <section
      id="contato"
      className="section-warm relative overflow-hidden pt-[calc(4.25rem+env(safe-area-inset-top,0px))] pb-12 sm:pt-16 sm:pb-16"
    >
      <DotPattern className="opacity-[0.08]" />

      <div className="container-panifair relative z-10 py-6 md:py-8">
        <header className="mb-8 max-w-2xl">
          <p className="section-eyebrow text-[11px] font-bold uppercase tracking-[0.3em]">
            Fale conosco
          </p>
          <h1 className="section-title mt-3 text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
            Quero ser expositor na PANIFAIR 2027
          </h1>
          <p className="section-desc mt-3 text-sm leading-relaxed md:text-base">
            Preencha o formulário abaixo. Ao enviar, você será direcionado ao WhatsApp
            comercial com seus dados já organizados.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:items-start lg:gap-10">
          <ContactForm />

          <aside className="space-y-5">
            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-[#452816]">Atendimento comercial</h2>
              <p className="mt-2 text-sm leading-relaxed text-[#5c4d3e]">
                Resposta em até 24 horas úteis. Para propostas de estande, o WhatsApp é o
                canal mais rápido.
              </p>

              <ul className="mt-5 space-y-3 text-sm text-[#5c4d3e]">
                <li>
                  <a
                    href={buildWhatsAppUrl("Olá! Gostaria de informações sobre a PANIFAIR 2027.")}
                    className="flex items-center gap-3 transition-colors hover:text-[#7a5532]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="h-4 w-4 shrink-0 text-[#b08450]" aria-hidden="true" />
                    WhatsApp · {PANIFAIR_PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-[#b08450]" aria-hidden="true" />
                  <a href={`mailto:${PANIFAIR_EMAIL}`} className="hover:text-[#7a5532]">
                    {PANIFAIR_EMAIL}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-[#b08450]" aria-hidden="true" />
                  <a href={`tel:${PANIFAIR_PHONE_TEL}`} className="hover:text-[#7a5532]">
                    {PANIFAIR_PHONE_DISPLAY}
                  </a>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-2xl p-6">
              <h2 className="text-lg font-semibold text-[#452816]">O evento</h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-[#5c4d3e]">
                <li className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 h-4 w-4 shrink-0 text-[#b08450]" aria-hidden="true" />
                  <span>{EVENT_DATES_LABEL}</span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#b08450]" aria-hidden="true" />
                  <span>{PANIFAIR_ADDRESS.line}</span>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-[rgba(176,132,80,0.18)] bg-[rgba(176,132,80,0.04)] p-6">
              <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#7a5532]">
                O que preparar
              </p>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#5c4d3e]">
                <li>Porte desejado do estande</li>
                <li>Segmento e principais produtos</li>
                <li>Objetivo na feira (vendas, parcerias, lançamentos)</li>
              </ul>
              <Link
                href="/#estandes"
                className="mt-4 inline-flex text-sm font-medium text-[#7a5532] transition-colors hover:text-[#452816]"
              >
                Ver tipos de estande →
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

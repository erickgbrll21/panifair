import Image from "next/image";
import { CalendarDays, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { ContactForm } from "@/components/sections/ContactForm";
import { InstagramIcon } from "@/components/ui/instagram-icon";
import {
  EVENT_DATES_LABEL,
  PANIFAIR_ADDRESS,
  PANIFAIR_EMAIL,
  PANIFAIR_INSTAGRAM_HANDLE,
  PANIFAIR_INSTAGRAM_URL,
  PANIFAIR_PHONE_DISPLAY,
  PANIFAIR_PHONE_TEL,
} from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const CONTACT_BONECOS = [
  "/bonecos/boneco-panifair-padeiro.svg",
  "/bonecos/boneco-panifair-2.svg",
  "/bonecos/boneco-panifair-3.svg",
  "/bonecos/boneco-panifair-4.svg",
] as const;

export function ContactSection() {
  return (
    <section
      id="contato"
      className="section-warm relative overflow-hidden pt-[calc(4.25rem+env(safe-area-inset-top,0px))] pb-0 sm:pt-16"
    >
      <DotPattern className="opacity-[0.08]" />

      <div className="container-panifair relative z-10 py-6 md:py-8 md:pb-0">
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

        <div className="grid gap-8 pb-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,0.9fr)] lg:items-start lg:gap-10 lg:pb-0">
          <ContactForm />

          <aside className="flex flex-col gap-5">
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
                <li>
                  <a
                    href={PANIFAIR_INSTAGRAM_URL}
                    className="flex items-center gap-3 transition-colors hover:text-[#7a5532]"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <InstagramIcon className="shrink-0 text-[#b08450]" />
                    Instagram · {PANIFAIR_INSTAGRAM_HANDLE}
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

            <div
              aria-hidden
              className="relative mt-auto flex w-full items-end justify-center gap-1 pb-0 pt-2 sm:gap-2"
            >
              {CONTACT_BONECOS.map((src) => (
                <Image
                  key={src}
                  src={src}
                  alt=""
                  width={160}
                  height={200}
                  className="pointer-events-none h-auto w-full max-w-[72px] flex-1 object-contain object-bottom opacity-40 sm:max-w-[88px] lg:max-w-[100px]"
                  sizes="100px"
                  draggable={false}
                />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

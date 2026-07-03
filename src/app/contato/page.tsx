import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contato — Seja Expositor",
  description:
    "Solicite proposta e reserve seu estande na PANIFAIR 2027. Preencha o formulário e fale com nossa equipe comercial pelo WhatsApp.",
  openGraph: {
    title: "Contato — PANIFAIR 2027",
    description:
      "Formulário para expositores interessados em reservar estande na PANIFAIR 2027.",
  },
};

export default function ContatoPage() {
  return <ContactSection />;
}

"use client";

import { useState, type FormEvent } from "react";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BOOTH_INTEREST_OPTIONS } from "@/lib/constants";
import {
  buildExhibitorWhatsAppMessage,
  buildWhatsAppUrl,
  type ExhibitorContactPayload,
} from "@/lib/whatsapp";

const fieldClassName =
  "w-full rounded-xl border border-[rgba(122,85,50,0.25)] bg-[rgba(255,252,245,0.6)] px-4 py-3 text-sm text-[#452816] outline-none transition-colors placeholder:text-[#9a8b7a] focus:border-[rgba(176,132,80,0.6)] focus:ring-2 focus:ring-[rgba(176,132,80,0.2)]";

const labelClassName = "mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5532]";

const initialForm: ExhibitorContactPayload = {
  name: "",
  company: "",
  email: "",
  phone: "",
  boothInterest: BOOTH_INTEREST_OPTIONS[0],
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState(initialForm);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = buildExhibitorWhatsAppMessage(form);
    window.location.href = buildWhatsAppUrl(message);
  };

  const updateField = <K extends keyof ExhibitorContactPayload>(key: K, value: ExhibitorContactPayload[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  return (
    <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 md:p-8">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={labelClassName}>
            Nome completo
          </label>
          <input
            id="contact-name"
            type="text"
            required
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            className={fieldClassName}
            placeholder="Seu nome"
          />
        </div>

        <div>
          <label htmlFor="contact-company" className={labelClassName}>
            Empresa
          </label>
          <input
            id="contact-company"
            type="text"
            required
            autoComplete="organization"
            value={form.company}
            onChange={(event) => updateField("company", event.target.value)}
            className={fieldClassName}
            placeholder="Nome da empresa"
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={labelClassName}>
            E-mail
          </label>
          <input
            id="contact-email"
            type="email"
            required
            autoComplete="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className={fieldClassName}
            placeholder="seu@email.com"
          />
        </div>

        <div>
          <label htmlFor="contact-phone" className={labelClassName}>
            Telefone / WhatsApp
          </label>
          <input
            id="contact-phone"
            type="tel"
            required
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            className={fieldClassName}
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-booth" className={labelClassName}>
          Interesse em estande
        </label>
        <select
          id="contact-booth"
          required
          value={form.boothInterest}
          onChange={(event) => updateField("boothInterest", event.target.value)}
          className={fieldClassName}
        >
          {BOOTH_INTEREST_OPTIONS.map((option) => (
            <option key={option} value={option} className="bg-[#f5eedc] text-[#452816]">
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className={labelClassName}>
          Mensagem <span className="normal-case tracking-normal text-[#6b5f52]">(opcional)</span>
        </label>
        <textarea
          id="contact-message"
          rows={4}
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          className={`${fieldClassName} resize-y min-h-[120px]`}
          placeholder="Conte um pouco sobre sua empresa e o que busca na feira..."
        />
      </div>

      <Button type="submit" size="lg" className="mt-8 w-full sm:w-auto">
        <MessageCircle className="h-4 w-4" />
        Enviar pelo WhatsApp
        <Send className="h-4 w-4" />
      </Button>

      <p className="mt-4 text-xs leading-relaxed text-[#6b5f52]">
        Ao enviar, você será redirecionado para o WhatsApp da PANIFAIR com sua mensagem
        preenchida automaticamente.
      </p>
    </form>
  );
}

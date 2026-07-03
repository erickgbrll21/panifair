import { PANIFAIR_WHATSAPP_NUMBER } from "@/lib/constants";

export interface ExhibitorContactPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  boothInterest: string;
  message: string;
}

export function buildExhibitorWhatsAppMessage({
  name,
  company,
  email,
  phone,
  boothInterest,
  message,
}: ExhibitorContactPayload) {
  const lines = [
    "Olá! Gostaria de informações sobre exposição na *PANIFAIR 2027*.",
    "",
    `*Nome:* ${name}`,
    `*Empresa:* ${company}`,
    `*E-mail:* ${email}`,
    `*Telefone:* ${phone}`,
    `*Interesse em estande:* ${boothInterest}`,
  ];

  if (message.trim()) {
    lines.push("", `*Mensagem:* ${message.trim()}`);
  }

  return lines.join("\n");
}

export function buildWhatsAppUrl(message: string) {
  return `https://wa.me/${PANIFAIR_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

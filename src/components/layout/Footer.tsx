import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone, Share2, Globe, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, EDICAO_2026_LINK } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-[rgba(122,85,50,0.2)] bg-[#e5d8ba]">
      <div className="container-panifair section-padding pb-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Image
              src="/logo.svg"
              alt="PANIFAIR"
              width={549}
              height={203}
              className="mb-6 h-12 w-auto"
            />
            <p className="text-sm leading-relaxed text-[#5c4d3e]">
              A maior feira internacional de panificação da América Latina.
              Conectando indústrias, fornecedores e tomadores de decisão.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#a3733e]">
              Navegação
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5c4d3e] transition-colors hover:text-[#a3733e]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={EDICAO_2026_LINK.href}
                  className="text-sm text-[#9a8b7a] transition-colors hover:text-[#c4966a]"
                >
                  {EDICAO_2026_LINK.label}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#a3733e]">
              Contato Comercial
            </h3>
            <ul className="space-y-3 text-sm text-[#5c4d3e]">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#a67c52]" />
                <a href="mailto:expositores@panifair.com.br" className="hover:text-[#a3733e]">
                  expositores@panifair.com.br
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#a67c52]" />
                <a href="tel:+551140028922" className="hover:text-[#a3733e]">
                  +55 (11) 4002-8922
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#a67c52]" />
                <span>São Paulo Expo — São Paulo, SP</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#a3733e]">
              Redes Sociais
            </h3>
            <div className="flex gap-3">
              {[Share2, Globe, MessageCircle].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[rgba(166,124,82,0.25)] text-[#a67c52] transition-all hover:border-[#a67c52] hover:bg-[rgba(166,124,82,0.1)] hover:text-[#c4966a]"
                  aria-label="Rede social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
            <Button className="mt-6 w-full" asChild>
              <Link href="/contato">Quero ser expositor</Link>
            </Button>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-[rgba(122,85,50,0.15)] pt-8 text-xs text-[#5c4d3e] md:flex-row">
          <p>© 2027 PANIFAIR — Feira Internacional da Panificação. Todos os direitos reservados.</p>
          <p>18 a 21 de Agosto de 2027 · São Paulo Expo</p>
        </div>
      </div>
    </footer>
  );
}

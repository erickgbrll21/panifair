"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, EDICAO_2026_LINK } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const isEdicao2026 = pathname.startsWith("/edicao-2026");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const solidHeader = scrolled || isEdicao2026;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "site-header fixed inset-x-0 top-0 z-50 transition-all duration-500",
        "pt-[env(safe-area-inset-top,0px)]",
        solidHeader
          ? "border-b border-[rgba(122,85,50,0.2)] bg-[#ddcfaa]/95 shadow-[0_4px_24px_rgba(122,85,50,0.12)] backdrop-blur-xl"
          : "bg-[#ddcfaa]/40 backdrop-blur-sm md:bg-transparent md:backdrop-blur-none",
      )}
    >
      <div className="container-panifair flex h-[4.25rem] items-center justify-between gap-3 sm:h-16">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/panifair-header-logo.svg"
            alt="PANIFAIR — Feira Internacional da Panificação"
            width={300}
            height={75}
            className="h-10 w-auto md:h-11 lg:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.slice(0, 4).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-[#7a5532] transition-colors duration-200 hover:text-[#452816] after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-0 after:bg-[#7a5532] after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button variant="outline" size="sm" className="text-[#7a5532] hover:text-[#452816]" asChild>
            <Link href={EDICAO_2026_LINK.href}>Panifair 2026</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/contato">
              Quero ser expositor
              <ArrowRight className="ml-1" />
            </Link>
          </Button>
        </div>

        <button
          type="button"
          className="relative z-10 ml-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[rgba(122,85,50,0.4)] text-[#7a5532] lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-x-0 top-[calc(4.25rem+env(safe-area-inset-top,0px))] z-40 bg-[#f5eedc]/98 transition-all duration-300 sm:top-16 lg:hidden",
          mobileOpen ? "visible opacity-100" : "invisible opacity-0 pointer-events-none",
        )}
      >
        <nav className="container-panifair flex flex-col gap-2 py-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="rounded-xl px-4 py-3 text-lg font-medium text-[#7a5532] transition-colors hover:bg-[rgba(122,85,50,0.1)] hover:text-[#452816]"
            >
              {link.label}
            </Link>
          ))}
          <Button variant="outline" className="mt-2 w-full text-[#7a5532] hover:text-[#452816]" asChild>
            <Link href={EDICAO_2026_LINK.href} onClick={() => setMobileOpen(false)}>
              Panifair 2026
            </Link>
          </Button>
          <Button className="mt-4 w-full" asChild>
            <Link href="/contato" onClick={() => setMobileOpen(false)}>
              Quero ser expositor
              <ArrowRight />
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}

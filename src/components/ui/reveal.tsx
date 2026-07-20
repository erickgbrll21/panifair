"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

function shouldSkipReveal() {
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 767px)").matches
  );
}

/**
 * Fade-up ao entrar no viewport. No mobile o conteúdo fica visível imediatamente
 * para evitar atraso ao rolar. Sem JS o conteúdo permanece visível.
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (shouldSkipReveal()) return;

    el.classList.add("reveal-hidden");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        requestAnimationFrame(() => el.classList.add("reveal-visible"));
      },
      { rootMargin: "0px 0px 8% 0px", threshold: 0.01 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      el.classList.remove("reveal-hidden", "reveal-visible");
    };
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={delay > 0 ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}

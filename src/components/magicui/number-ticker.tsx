"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: number;
  className?: string;
  decimalPlaces?: number;
  suffix?: string;
  prefix?: string;
}

function formatValue(val: number, decimals: number, prefix: string, suffix: string) {
  return `${prefix}${Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(val)}${suffix}`;
}

const DURATION_MS = 1600;

function shouldSkipTickerAnimation() {
  return (
    window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
    window.matchMedia("(max-width: 767px)").matches
  );
}

export function NumberTicker({
  value,
  className,
  decimalPlaces = 0,
  suffix = "",
  prefix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const display = formatValue(value, decimalPlaces, prefix, suffix);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (shouldSkipTickerAnimation()) return;

    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / DURATION_MS, 1);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = formatValue(value * eased, decimalPlaces, prefix, suffix);
          if (t < 1) raf = requestAnimationFrame(tick);
        };

        el.textContent = formatValue(0, decimalPlaces, prefix, suffix);
        raf = requestAnimationFrame(tick);
      },
      { rootMargin: "0px 0px 8% 0px", threshold: 0.01 },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
      el.textContent = formatValue(value, decimalPlaces, prefix, suffix);
    };
  }, [value, decimalPlaces, prefix, suffix]);

  return (
    <span ref={ref} className={cn("inline-block tabular-nums tracking-wider", className)}>
      {display}
    </span>
  );
}

"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import { useHydrated } from "@/hooks/useHydrated";

gsap.registerPlugin(ScrollTrigger);

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

export function NumberTicker({
  value,
  className,
  decimalPlaces = 0,
  suffix = "",
  prefix = "",
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const hydrated = useHydrated();
  const display = formatValue(value, decimalPlaces, prefix, suffix);

  useEffect(() => {
    if (!hydrated) return;

    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = display;
      return;
    }

    let tween: gsap.core.Tween | undefined;
    let trigger: ScrollTrigger | undefined;
    let hasAnimated = false;

    const animate = () => {
      if (hasAnimated) return;
      hasAnimated = true;

      el.textContent = formatValue(0, decimalPlaces, prefix, suffix);
      tween = gsap.to(
        { val: 0 },
        {
          val: value,
          duration: 1.6,
          ease: "power2.out",
          onUpdate() {
            el.textContent = formatValue(
              this.targets()[0].val,
              decimalPlaces,
              prefix,
              suffix,
            );
          },
        },
      );
    };

    trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: animate,
    });

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85 && rect.bottom > 0) {
      animate();
    }

    return () => {
      tween?.kill();
      trigger?.kill();
    };
  }, [hydrated, value, decimalPlaces, prefix, suffix, display]);

  return (
    <span ref={ref} className={cn("inline-block tabular-nums tracking-wider", className)}>
      {display}
    </span>
  );
}

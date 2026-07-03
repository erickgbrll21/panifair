"use client";

import { useEffect } from "react";
import { useAfterHydration } from "@/hooks/useHydrated";

export function ScrollProgress() {
  useAfterHydration(() => {
    const bar = document.querySelector<HTMLElement>(".progress-bar");
    if (!bar) return;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? scrollTop / docHeight : 0;
      bar.style.transform = `scaleX(${progress})`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  return <div className="progress-bar" aria-hidden="true" />;
}

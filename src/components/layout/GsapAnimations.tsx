"use client";

import { useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useAfterHydration } from "@/hooks/useHydrated";

gsap.registerPlugin(ScrollTrigger);

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isInRevealViewport(el: HTMLElement) {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.9 && rect.bottom > 0;
}

export function GsapAnimations() {
  const init = useCallback(() => {
    if (prefersReducedMotion()) return;

    const revealed = new WeakSet<HTMLElement>();

    ScrollTrigger.config({ limitCallbacks: true, ignoreMobileResize: true });

    const ctx = gsap.context(() => {
      const playReveal = (el: HTMLElement) => {
        if (revealed.has(el)) return;
        revealed.add(el);

        const delay = parseFloat(el.dataset.revealDelay || "0");

        gsap.from(el, {
          y: 40,
          opacity: 0,
          duration: 0.7,
          delay,
          ease: "power2.out",
          clearProps: "transform,opacity",
          immediateRender: false,
        });
      };

      const revealElements = gsap.utils.toArray<HTMLElement>("[data-reveal]");

      revealElements.forEach((el) => {
        ScrollTrigger.create({
          trigger: el,
          start: "top 90%",
          once: true,
          onEnter: () => playReveal(el),
        });
      });

      ScrollTrigger.refresh();

      revealElements.forEach((el) => {
        if (isInRevealViewport(el)) {
          playReveal(el);
        }
      });
    });

    return () => ctx.revert();
  }, []);

  useAfterHydration(init);

  return null;
}

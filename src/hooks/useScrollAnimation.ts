"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHydrated } from "@/hooks/useHydrated";

gsap.registerPlugin(ScrollTrigger);

type AnimationFn = (element: HTMLElement) => void;

export function useScrollAnimation(animationFn: AnimationFn, deps: unknown[] = []) {
  const ref = useRef<HTMLElement>(null);
  const animationRef = useRef(animationFn);
  animationRef.current = animationFn;
  const hydrated = useHydrated();

  useEffect(() => {
    if (!hydrated) return;

    const el = ref.current;
    if (!el) return;

    let ctx: gsap.Context | undefined;

    const frame = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        animationRef.current(el);
      }, el);
    });

    return () => {
      cancelAnimationFrame(frame);
      ctx?.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, ...deps]);

  return ref;
}

export function useGsapInit(initFn: () => (() => void) | void) {
  const hydrated = useHydrated();
  const initRef = useRef(initFn);
  initRef.current = initFn;

  useEffect(() => {
    if (!hydrated) return;

    let ctx: gsap.Context | undefined;
    let cleanup: (() => void) | void;

    const frame = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        cleanup = initRef.current();
      });
    });

    return () => {
      cancelAnimationFrame(frame);
      cleanup?.();
      ctx?.revert();
    };
  }, [hydrated]);
}

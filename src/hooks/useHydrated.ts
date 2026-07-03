"use client";

import { useEffect, useRef, useState } from "react";

export function useHydrated() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  return hydrated;
}

/**
 * Runs callback after React hydration and paint to avoid GSAP inline-style mismatches.
 */
export function useAfterHydration(callback: () => (() => void) | void) {
  const hydrated = useHydrated();
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    if (!hydrated) return;

    let gsapCleanup: (() => void) | void;
    let outerFrame = 0;
    let innerFrame = 0;
    let timeout = 0;

    outerFrame = requestAnimationFrame(() => {
      innerFrame = requestAnimationFrame(() => {
        timeout = window.setTimeout(() => {
          gsapCleanup = callbackRef.current();
        }, 0);
      });
    });

    return () => {
      cancelAnimationFrame(outerFrame);
      cancelAnimationFrame(innerFrame);
      window.clearTimeout(timeout);
      gsapCleanup?.();
    };
  }, [hydrated]);
}

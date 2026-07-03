"use client";

import { cn } from "@/lib/utils";
import { useHydrated } from "@/hooks/useHydrated";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const hydrated = useHydrated();
  const roundedDelay = delay > 0 ? Math.round(delay * 100) / 100 : 0;

  return (
    <div className={cn(className)}>
      <div
        {...(hydrated
          ? {
              "data-reveal": true,
              ...(roundedDelay > 0 ? { "data-reveal-delay": roundedDelay } : {}),
            }
          : {})}
      >
        {children}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";

interface DotPatternProps {
  className?: string;
}

/** Fundo de pontos leve — CSS puro, sem milhares de nós DOM */
export function DotPattern({ className }: DotPatternProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 bg-dots opacity-40",
        className,
      )}
    />
  );
}

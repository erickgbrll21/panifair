import { cn } from "@/lib/utils";

interface MagicCardProps {
  children?: React.ReactNode;
  className?: string;
}

export function MagicCard({ children, className }: MagicCardProps) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

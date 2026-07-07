import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={cn(
        "container-panifair mb-[var(--section-heading-gap)] max-w-3xl",
        isCenter && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <div className={cn("mb-5 flex items-center gap-3", isCenter && "justify-center")}>
          {isCenter && (
            <span className="h-px w-10 bg-gradient-to-r from-transparent to-[var(--color-bronze)]" />
          )}
          <span className="section-eyebrow text-[11px] font-bold uppercase tracking-[0.3em]">
            {eyebrow}
          </span>
          <span
            className={cn(
              "h-px w-10",
              isCenter
                ? "bg-gradient-to-l from-transparent to-[var(--color-bronze)]"
                : "bg-gradient-to-r from-[var(--color-bronze)] to-transparent",
            )}
          />
        </div>
      )}
      <h2 className="section-title text-3xl font-bold tracking-tight md:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className="section-desc mt-5 text-base leading-relaxed md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}

import React, { type ComponentPropsWithoutRef, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ShimmerStyleProps = {
  background?: string;
  className?: string;
  children?: React.ReactNode;
};

const shimmerClasses =
  "relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-[rgba(232,200,122,0.4)] px-7 py-3.5 text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_8px_32px_rgba(176,132,80,0.45)] active:scale-[0.98]";

const ShimmerOverlay = () => (
  <span
    aria-hidden
    className="shimmer-sweep pointer-events-none absolute top-0 h-full w-1/3 -skew-x-12 bg-white/25 blur-sm"
  />
);

export type ShimmerLinkProps = ShimmerStyleProps &
  ComponentPropsWithoutRef<"a"> & {
    href: string;
  };

export const ShimmerLink = React.forwardRef<HTMLAnchorElement, ShimmerLinkProps>(
  (
    {
      background = "linear-gradient(135deg, #e8c87a 0%, #d4a870 30%, #b08450 65%, #7a5532 100%)",
      className,
      children,
      href,
      ...props
    },
    ref,
  ) => (
    <a
      ref={ref}
      href={href}
      style={{ background } as CSSProperties}
      className={cn(shimmerClasses, "text-[#160f08] shadow-[0_4px_24px_rgba(176,132,80,0.35)]", className)}
      {...props}
    >
      <ShimmerOverlay />
      {children}
    </a>
  ),
);

ShimmerLink.displayName = "ShimmerLink";

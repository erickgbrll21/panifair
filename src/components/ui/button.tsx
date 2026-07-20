import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#b08450] focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#e8c87a] via-[#b08450] to-[#7a5532] text-[#160f08] shadow-[0_4px_24px_rgba(176,132,80,0.35)] hover:shadow-[0_8px_32px_rgba(176,132,80,0.5)] hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border border-[rgba(122,85,50,0.35)] bg-transparent text-[#452816] hover:bg-[rgba(176,132,80,0.1)] hover:border-[rgba(122,85,50,0.55)]",
        ghost:
          "text-[#a3733e] hover:bg-[rgba(176,132,80,0.08)] hover:text-[#452816]",
        secondary:
          "bg-[rgba(176,132,80,0.12)] text-[#452816] border border-[rgba(122,85,50,0.22)] hover:bg-[rgba(176,132,80,0.18)]",
      },
      size: {
        default: "h-12 px-7 py-3",
        sm: "h-10 px-5 text-xs",
        lg: "h-14 px-9 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

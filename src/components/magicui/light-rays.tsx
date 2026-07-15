import { cn } from "@/lib/utils";

interface LightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  blur?: number;
  length?: string;
}

const RAY_PRESETS = [
  { left: "6%", width: 300, rotate: -22, delay: 0, duration: 13 },
  { left: "18%", width: 340, rotate: -14, delay: 1.4, duration: 15 },
  { left: "32%", width: 320, rotate: -6, delay: 2.6, duration: 14 },
  { left: "46%", width: 360, rotate: 2, delay: 0.8, duration: 16 },
  { left: "58%", width: 340, rotate: 8, delay: 3.2, duration: 15 },
  { left: "70%", width: 320, rotate: 14, delay: 1.8, duration: 14 },
  { left: "82%", width: 300, rotate: 20, delay: 4.2, duration: 16 },
  { left: "94%", width: 280, rotate: 28, delay: 2.4, duration: 15 },
] as const;

export function LightRays({
  className,
  style,
  count = 5,
  blur = 28,
  length = "82vh",
  ...props
}: LightRaysProps) {
  const rays = RAY_PRESETS.slice(0, Math.min(count, RAY_PRESETS.length));

  return (
    <div
      className={cn("hero-light-rays pointer-events-none absolute inset-0 overflow-hidden", className)}
      style={
        {
          "--light-rays-blur": `${blur}px`,
          "--light-rays-length": length,
          ...style,
        } as React.CSSProperties
      }
      aria-hidden
      {...props}
    >
      <div className="hero-light-rays__ambient hero-light-rays__ambient--left" />
      <div className="hero-light-rays__ambient hero-light-rays__ambient--right" />

      {rays.map((ray, index) => (
        <div
          key={index}
          className="hero-light-rays__ray"
          style={
            {
              "--ray-left": ray.left,
              "--ray-width": `${ray.width}px`,
              "--ray-rotate": `${ray.rotate}deg`,
              "--ray-delay": `${ray.delay}s`,
              "--ray-duration": `${ray.duration}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
}

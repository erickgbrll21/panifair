import { cn } from "@/lib/utils";

interface LightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number;
  color?: string;
  blur?: number;
  length?: string;
}

const RAY_PRESETS = [
  { left: "12%", width: 240, rotate: -18, delay: 0, duration: 13 },
  { left: "28%", width: 300, rotate: -8, delay: 2.2, duration: 15 },
  { left: "44%", width: 260, rotate: 2, delay: 0.8, duration: 14 },
  { left: "58%", width: 280, rotate: 10, delay: 3.5, duration: 16 },
  { left: "72%", width: 250, rotate: 18, delay: 1.6, duration: 14 },
  { left: "88%", width: 220, rotate: 26, delay: 4.8, duration: 15 },
] as const;

export function LightRays({
  className,
  style,
  count = 5,
  color = "rgba(232, 200, 122, 0.24)",
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
          "--light-rays-color": color,
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

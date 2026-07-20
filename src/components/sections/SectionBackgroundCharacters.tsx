import {
  HERO_BONECO_PLACEMENTS,
  getBonecoImages,
  getSectionPlacements,
} from "@/lib/bonecos";

type SectionBackgroundCharactersProps = {
  variant?: "hero" | "section";
  seed?: number;
};

export function SectionBackgroundCharacters({
  variant = "section",
  seed = 0,
}: SectionBackgroundCharactersProps) {
  const bonecos = getBonecoImages();

  if (!bonecos.length) return null;

  const placements =
    variant === "hero" ? HERO_BONECO_PLACEMENTS : getSectionPlacements(seed);

  return (
    <div
      aria-hidden
      className="section-background-decor pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {placements.map((placement, index) => {
        const boneco = bonecos[(index + seed) % bonecos.length];
        const positionStyle = {
          top: placement.top,
          left: placement.left,
          right: placement.right,
          bottom: placement.bottom,
          opacity: placement.opacity,
          transform: `rotate(${placement.rotate})`,
        };

        return (
          <img
            key={`${boneco.name}-${index}`}
            src={boneco.src}
            alt=""
            draggable={false}
            className={`absolute object-contain ${placement.size}`}
            style={positionStyle}
          />
        );
      })}
    </div>
  );
}

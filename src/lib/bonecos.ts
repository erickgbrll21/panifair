const BONECO_FILES = [
  "Grey Ghost Halloween Icon Circle Sticker (4).svg",
  "Grey Ghost Halloween Icon Circle Sticker (2).svg",
  "Grey Ghost Halloween Icon Circle Sticker(4.svg",
] as const;

function bonecoPublicSrc(file: string) {
  return `/bonecos/${encodeURIComponent(file)}`;
}

export function getBonecoImages() {
  return BONECO_FILES.map((file) => ({
    name: file,
    src: bonecoPublicSrc(file),
  }));
}

export type BonecoPlacement = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: string;
  rotate: string;
  opacity: number;
};

export const HERO_BONECO_PLACEMENTS: BonecoPlacement[] = [
  // Topo — logo e countdown (0–12%)
  { top: "2%", left: "2%", size: "h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20", rotate: "-12deg", opacity: 0.10 },
  { top: "4%", left: "22%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "8deg", opacity: 0.11 },
  { top: "3%", left: "48%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "-6deg", opacity: 0.10 },
  { top: "6%", right: "28%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "14deg", opacity: 0.11 },
  { top: "5%", right: "4%", size: "h-16 w-16 sm:h-20 sm:w-20", rotate: "-18deg", opacity: 0.11 },
  { top: "10%", left: "68%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "10deg", opacity: 0.10 },
  { top: "11%", left: "8%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "-8deg", opacity: 0.10 },

  // Badge e título (12–28%)
  { top: "15%", left: "35%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "16deg", opacity: 0.10 },
  { top: "18%", left: "3%", size: "h-14 w-14 sm:h-16 sm:w-16", rotate: "6deg", opacity: 0.11 },
  { top: "16%", right: "6%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "-14deg", opacity: 0.10 },
  { top: "22%", left: "55%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "20deg", opacity: 0.11 },
  { top: "24%", right: "32%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "-10deg", opacity: 0.10 },
  { top: "20%", left: "78%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "12deg", opacity: 0.11 },
  { top: "26%", left: "18%", size: "h-10 w-10 sm:h-11 sm:w-11", rotate: "-16deg", opacity: 0.10 },

  // Título e descrição (28–45%)
  { top: "30%", left: "42%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "8deg", opacity: 0.10 },
  { top: "32%", right: "2%", size: "h-16 w-16 sm:h-20 sm:w-20", rotate: "-8deg", opacity: 0.10 },
  { top: "34%", left: "72%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "18deg", opacity: 0.11 },
  { top: "36%", left: "2%", size: "h-14 w-14 sm:h-16 sm:w-16", rotate: "4deg", opacity: 0.11 },
  { top: "38%", right: "48%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "-12deg", opacity: 0.10 },
  { top: "40%", left: "28%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "14deg", opacity: 0.11 },
  { top: "43%", right: "18%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "-6deg", opacity: 0.10 },

  // CTA e início dos stats (45–58%)
  { top: "46%", left: "58%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "10deg", opacity: 0.10 },
  { top: "48%", left: "6%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "-20deg", opacity: 0.11 },
  { top: "50%", right: "38%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "6deg", opacity: 0.11 },
  { top: "52%", left: "85%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "-14deg", opacity: 0.10 },
  { top: "54%", left: "44%", size: "h-10 w-10 sm:h-11 sm:w-11", rotate: "12deg", opacity: 0.10 },
  { top: "56%", right: "6%", size: "h-14 w-14 sm:h-16 sm:w-16", rotate: "-10deg", opacity: 0.11 },

  // Cards de estatísticas (58–72%)
  { top: "58%", left: "18%", size: "h-14 w-14 sm:h-16 sm:w-16", rotate: "12deg", opacity: 0.10 },
  { top: "60%", left: "45%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "-8deg", opacity: 0.11 },
  { top: "62%", left: "2%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "-10deg", opacity: 0.10 },
  { top: "64%", right: "42%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "8deg", opacity: 0.10 },
  { top: "66%", left: "68%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "-18deg", opacity: 0.11 },
  { top: "68%", left: "32%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "14deg", opacity: 0.10 },
  { top: "70%", right: "12%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "6deg", opacity: 0.10 },

  // Curador — parte superior (72–85%)
  { top: "72%", left: "8%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "-6deg", opacity: 0.10 },
  { top: "74%", right: "5%", size: "h-14 w-14 sm:h-16 sm:w-16", rotate: "10deg", opacity: 0.11 },
  { top: "76%", left: "52%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "-12deg", opacity: 0.10 },
  { top: "78%", left: "25%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "18deg", opacity: 0.11 },
  { top: "80%", right: "28%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "-8deg", opacity: 0.11 },
  { top: "82%", left: "75%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "6deg", opacity: 0.10 },
  { top: "84%", left: "40%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "-14deg", opacity: 0.11 },

  // Curador — parte inferior (85–97%)
  { top: "86%", left: "4%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "14deg", opacity: 0.10 },
  { top: "88%", left: "38%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "-16deg", opacity: 0.11 },
  { top: "90%", right: "12%", size: "h-14 w-14 sm:h-16 sm:w-16", rotate: "8deg", opacity: 0.11 },
  { top: "92%", left: "62%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "-10deg", opacity: 0.10 },
  { top: "94%", right: "35%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "12deg", opacity: 0.11 },
  { top: "96%", left: "18%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "-8deg", opacity: 0.10 },
  { top: "97%", right: "2%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "16deg", opacity: 0.10 },
];

export const SECTION_BONECO_PLACEMENTS: BonecoPlacement[] = [
  { top: "4%", left: "2%", size: "h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16", rotate: "-14deg", opacity: 0.10 },
  { top: "6%", right: "4%", size: "h-14 w-14 sm:h-16 sm:w-16", rotate: "10deg", opacity: 0.11 },
  { top: "12%", left: "70%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "8deg", opacity: 0.11 },
  { top: "18%", left: "12%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "-18deg", opacity: 0.10 },
  { top: "24%", right: "22%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "14deg", opacity: 0.10 },
  { top: "32%", left: "46%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "-8deg", opacity: 0.11 },
  { top: "38%", left: "3%", size: "h-14 w-14 sm:h-16 sm:w-16", rotate: "12deg", opacity: 0.11 },
  { top: "44%", right: "3%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "-10deg", opacity: 0.10 },
  { top: "52%", left: "78%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "16deg", opacity: 0.10 },
  { top: "58%", left: "24%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "-12deg", opacity: 0.11 },
  { top: "66%", right: "30%", size: "h-12 w-12 sm:h-14 sm:w-14", rotate: "6deg", opacity: 0.10 },
  { top: "74%", left: "6%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "-16deg", opacity: 0.10 },
  { top: "82%", right: "12%", size: "h-14 w-14 sm:h-16 sm:w-16", rotate: "10deg", opacity: 0.11 },
  { top: "90%", left: "52%", size: "h-11 w-11 sm:h-12 sm:w-12", rotate: "-6deg", opacity: 0.11 },
  { top: "94%", left: "18%", size: "h-10 w-10 sm:h-12 sm:w-12", rotate: "18deg", opacity: 0.10 },
];

export function getSectionPlacements(seed = 0) {
  const offset = seed % SECTION_BONECO_PLACEMENTS.length;
  return [
    ...SECTION_BONECO_PLACEMENTS.slice(offset),
    ...SECTION_BONECO_PLACEMENTS.slice(0, offset),
  ];
}

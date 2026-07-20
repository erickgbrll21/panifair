import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#ddcfaa]">
      <div className="relative mb-8">
        <div className="absolute inset-0 animate-ping rounded-full bg-[rgba(166,124,82,0.2)]" />
        <Image
          src="/logo.svg"
          alt="Carregando PANIFAIR"
          width={549}
          height={203}
          className="relative h-16 w-auto animate-pulse"
          priority
        />
      </div>
      <div className="h-0.5 w-48 overflow-hidden rounded-full bg-[rgba(166,124,82,0.15)]">
        <div className="h-full w-1/2 animate-[shimmer-slide_1.5s_ease-in-out_infinite] rounded-full bg-gradient-to-r from-transparent via-[#a67c52] to-transparent" />
      </div>
      <p className="mt-6 text-xs font-medium uppercase tracking-[0.3em] text-[#9a8b7a]">
        Preparando experiência premium
      </p>
    </div>
  );
}

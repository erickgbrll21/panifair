import Image from "next/image";

const DECOR_SIZE = "h-[40rem] w-[40rem]";

export function SectionSideDecor() {
  return (
    <div
      className="section-side-decor pointer-events-none absolute inset-0 z-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <Image
        src="/section-decor.png"
        alt=""
        width={1080}
        height={1080}
        sizes="640px"
        className={`${DECOR_SIZE} object-contain opacity-[0.14] blur-[0.5px] md:opacity-[0.16] lg:opacity-[0.18]`}
      />
    </div>
  );
}

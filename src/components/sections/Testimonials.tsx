"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SectionSideDecor } from "@/components/ui/section-side-decor";
import { TESTIMONIALS } from "@/lib/constants";
import "swiper/css";
import "swiper/css/pagination";

export function Testimonials() {
  return (
    <section id="depoimentos" className="section-cream section-padding relative overflow-hidden">
      <SectionSideDecor />
      <SectionHeading
        eyebrow="Prova social"
        title="Depoimentos de expositores"
        description="Empresas que transformaram participação em resultados reais de negócios."
      />

      <Reveal className="container-panifair">
        <Swiper
          modules={[Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12!"
        >
          {TESTIMONIALS.map((item) => (
            <SwiperSlide key={item.author}>
              <div className="glass-card flex h-full flex-col rounded-2xl p-8">
                <Quote className="fg-bronze mb-4 h-8 w-8 opacity-50" />
                <p className="fg-muted flex-1 text-sm leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="divider-bronze mt-6 border-t pt-6">
                  <p className="fg-primary font-semibold">{item.author}</p>
                  <p className="fg-muted text-xs">
                    {item.role} · {item.company}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Reveal>
    </section>
  );
}

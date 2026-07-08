import { Hero } from "@/components/sections/Hero";
import { HeroIntro } from "@/components/sections/HeroIntro";
import { TrailerReel } from "@/components/sections/TrailerReel";
import { WhyExhibit } from "@/components/sections/WhyExhibit";
import { Visitors } from "@/components/sections/Visitors";
import { MarketIndicators } from "@/components/sections/MarketIndicators";
import { Benefits } from "@/components/sections/Benefits";
import { FloorPlan } from "@/components/sections/FloorPlan";
import { BoothTypes } from "@/components/sections/BoothTypes";
import { Testimonials } from "@/components/sections/Testimonials";
import { Companies } from "@/components/sections/Companies";
import { Location } from "@/components/sections/Location";
import { FAQ } from "@/components/sections/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <HeroIntro />
      <TrailerReel />
      <WhyExhibit />
      <Visitors />
      <MarketIndicators />
      <Benefits />
      <FloorPlan />
      <BoothTypes />
      <Testimonials />
      <Companies />
      <Location />
      <FAQ />
    </>
  );
}

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { WhatWeProvideSection } from "@/components/sections/WhatWeProvideSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GalleryMarqueeSection } from "@/components/sections/GalleryMarqueeSection";
import { ContactCtaSection } from "@/components/sections/ContactCtaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero with Salon Introduction & Authentic Photo Composition */}
      <HeroSection />

      {/* 2. About Alpha Salon Philosophy & Real Station Visuals */}
      <AboutSection />

      {/* 3. Services Showcase (Curated 6 from the 17-item registry) */}
      <ServicesSection />

      {/* 4. What We Provide Showcase with Frosted Feature Cards */}
      <WhatWeProvideSection />

      {/* 5. Salon Gallery using Verified GMB Physical Photographs */}
      <GallerySection />

      {/* 6. Our Happy Clients / Google Reviews Showcase (Exact Omila Reference) */}
      <TestimonialsSection />

      {/* 7. Continuous Scrolling Gallery Showcase (Exact Omila Reference) */}
      <GalleryMarqueeSection />
    </>
  );
}

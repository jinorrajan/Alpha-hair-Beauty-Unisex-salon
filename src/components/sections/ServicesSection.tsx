"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface ServiceShowcaseItem {
  id: string;
  category: string;
  title: string;
  image: string;
  slug: string;
}

const SHOWCASE_SERVICES: ServiceShowcaseItem[] = [
  // 1. Men: Master Haircuts & Fade
  {
    id: "haircuts",
    category: "Precision",
    title: "Master Haircuts & Fade",
    image: "/images/services/service-indian-haircut-fade.jpg",
    slug: "/services#haircut",
  },
  // 2. Women: Balayage & Trend Color
  {
    id: "balayage",
    category: "Haute Color",
    title: "Balayage Hair Color",
    image: "/images/services/service-balayage-hair-color.jpg",
    slug: "/services#balayage",
  },
  // 3. Men: Beard Sculpt & Shave
  {
    id: "beard-grooming",
    category: "Grooming",
    title: "Beard Sculpt & Shave",
    image: "/images/services/service-indian-beard-sculpt.jpg",
    slug: "/services#beard-trim",
  },
  // 4. Women: Nanoplasty Straightening
  {
    id: "nanoplasty",
    category: "Organic Silk",
    title: "Nanoplasty Straightening",
    image: "/images/services/service-nanoplasty-treatment.jpg",
    slug: "/services#nanoplasty",
  },
  // 5. Men: Head Massage & Hair Spa
  {
    id: "hair-spa-wash",
    category: "Restorative",
    title: "Head Massage & Hair Spa",
    image: "/images/services/service-indian-head-massage-spa.jpg",
    slug: "/services#spa",
  },
  // 6. Women: Face D-Tan & Skin Glow
  {
    id: "face-dtan",
    category: "Skin Radiance",
    title: "Face D-Tan & Skin Glow",
    image: "/images/services/service-face-dtan.jpg",
    slug: "/services#face-dtan",
  },
  // 7. Men: VIP Barber Experience
  {
    id: "lounge-experience",
    category: "Signature VIP",
    title: "VIP Barber Experience",
    image: "/images/services/service-indian-vip-barber.jpg",
    slug: "/services#vip-barber",
  },
  // 8. Women: Keratin Smoothing & Gloss
  {
    id: "keratin-smoothing",
    category: "Silk Care",
    title: "Keratin Smoothing & Gloss",
    image: "/images/services/service-keratin-smoothing.jpg",
    slug: "/services#smoothing",
  },
];

export const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  // Animation values driven by scroll
  const [translateY, setTranslateY] = useState(120);
  const [translateX, setTranslateX] = useState(0);
  const [opacity, setOpacity] = useState(0.2);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;

      if (totalScroll <= 0) return;

      // Calculate progress through the pinned track (0 to 1)
      const currentScroll = -rect.top;
      const progress = Math.min(Math.max(currentScroll / totalScroll, 0), 1);

      // PHASE 1 (0.00 to 0.18): Vertical Entrance Animation
      const entranceEnd = 0.18;
      if (progress < entranceEnd) {
        const entranceFactor = progress / entranceEnd;
        // From 120px down to 0px
        const currentY = (1 - entranceFactor) * 120;
        setTranslateY(currentY);
        setOpacity(0.3 + entranceFactor * 0.7);
        setTranslateX(0);
      } else {
        // Fully entered
        setTranslateY(0);
        setOpacity(1);

        // PHASE 2 (0.18 to 1.00): Pinned Horizontal Scrub Animation
        const trackWidth = trackRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        // Extra margin to ensure the last card is fully revealed with comfortable breathing room
        const maxTranslateX = Math.max(0, trackWidth - viewportWidth + 120);

        const horizontalFactor = (progress - entranceEnd) / (1 - entranceEnd);
        const currentX = -horizontalFactor * maxTranslateX;
        setTranslateX(currentX);
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    // Outer scroll runway: 300vh height gives ample vertical scroll distance for both entrance and horizontal scrub
    <section ref={containerRef} className="relative h-[300vh] bg-[#FBF8F3]">
      
      {/* Sticky Viewport Container: stays pinned while user scrolls through the 300vh */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Ambient Subtle Texture */}
        <div 
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#1E1915 1px, transparent 1px)`,
            backgroundSize: "32px 32px"
          }}
          aria-hidden="true"
        />

        <div className="w-full relative z-10 flex flex-col justify-between h-full pt-3 sm:pt-6 pb-2 sm:pb-4">
          
          {/* Header Block (Matches exact reference) */}
          <div className="text-center max-w-3xl mx-auto px-4 shrink-0">
            {/* Badge */}
            <div className="inline-flex items-center justify-center gap-2 mb-1 sm:mb-2.5">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.28em] uppercase text-[var(--color-brand-primary)]">
                ✦ Best Service
              </span>
            </div>

            {/* Title */}
            <h2 className="font-sans-modern font-semibold text-xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#1E1915] leading-[1.14] tracking-tight">
              Comprehensive Beauty Services Perfectly Tailored For You
            </h2>
          </div>

          {/* Cards Track with Scroll-Driven Vertical Entrance & Horizontal Scrub */}
          <div className="relative w-full my-auto py-1 sm:py-3">
            <div
              ref={trackRef}
              style={{
                transform: `translate3d(${translateX}px, ${translateY}px, 0)`,
                opacity: opacity,
                willChange: "transform, opacity",
              }}
              className="flex gap-5 sm:gap-8 xl:gap-10 px-5 sm:px-12 xl:px-20 transition-transform duration-75 ease-out select-none"
            >
              {SHOWCASE_SERVICES.map((item) => (
                <Link
                  key={item.id}
                  href={item.slug}
                  draggable={false}
                  className="group shrink-0 flex flex-col items-center select-none"
                >
                  {/* Cathedral Arch Stadium Card: optimized for mobile to fill comfortable height without excess empty gap */}
                  <div className="w-[315px] sm:w-[310px] md:w-[340px] lg:w-[365px] xl:w-[395px] rounded-t-full rounded-b-[50px] sm:rounded-b-[58px] bg-white p-3 sm:p-4 pb-6 sm:pb-9 shadow-xl shadow-stone-900/[0.04] border border-[#EBE5DB] transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-stone-900/10 group-hover:-translate-y-2 flex flex-col items-center">
                    
                    {/* Concentric Semicircular Top Arch Image: increased mobile aspect ratio & size */}
                    <div className="relative w-full aspect-[3/3.7] sm:aspect-[3/3.8] rounded-t-full rounded-b-2xl overflow-hidden bg-stone-100">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        draggable={false}
                        sizes="(max-width: 640px) 315px, (max-width: 1024px) 340px, 400px"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out pointer-events-none"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                    </div>

                    {/* Text Underneath Image (Clean without subheadings) */}
                    <div className="mt-3.5 sm:mt-5 text-center px-2 sm:px-3 flex flex-col items-center">
                      <h3 className="font-sans-modern font-semibold text-lg sm:text-xl lg:text-[22px] text-[#221C16] leading-snug group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">
                        {item.title}
                      </h3>
                    </div>

                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Actions: View All 17 Services button moved to the far right */}
          <div className="shrink-0 w-full max-w-[1680px] mx-auto px-6 sm:px-12 xl:px-20 flex justify-end items-center pt-1 pb-2 sm:pb-3">
            <Button
              href="/services"
              variant="secondary"
              size="md"
              className="bg-[#241C15] hover:bg-[var(--color-brand-primary)] text-white px-7 py-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
            >
              View All Services &nbsp;&rsaquo;
            </Button>
          </div>

        </div>

      </div>
    </section>
  );
};

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1400);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIsReducedMotion(true);
      return;
    }

    setWindowWidth(window.innerWidth);

    let animationFrameId: number;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();

      // CALIBRATED START AND END POINTS:
      // 1. While scrolling down from Hero, rect.top is between windowHeight (entering) and 20px (centered in view).
      //    During this entire phase, progress = 0.
      //    The images remain 100% visible, fully clear, and resting at their original positions so the user can easily read the content.
      // 2. Once the user scrolls past the section (rect.top drops below 20px),
      //    the animation activates smoothly over a generous ~650px scroll range.
      const startThreshold = 20;
      const endThreshold = -Math.min(rect.height * 0.75, 680);
      const totalRange = startThreshold - endThreshold;

      if (totalRange <= 0) return;

      const currentOffset = startThreshold - rect.top;
      const rawProgress = currentOffset / totalRange;
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      setScrollProgress(progress);
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    const onResize = () => {
      setWindowWidth(window.innerWidth);
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // GRADUAL PARALLAX MOTION:
  // Restrained travel distance ensures images glide smoothly without abruptly rocketing off-screen
  const travelDistance = isReducedMotion ? 0 : Math.min(windowWidth * 0.14, 200) + 40;

  // Left-side images move gradually to the left
  const leftX = isReducedMotion ? 0 : -scrollProgress * travelDistance;

  // Right-side images move gradually to the right
  const rightX = isReducedMotion ? 0 : scrollProgress * travelDistance;

  // Slow, subtle cinematic zoom from 1.00 to 1.08
  const scale = isReducedMotion ? 1 : 1 + scrollProgress * 0.08;

  // Gradual fade: stays visibly clear (80%+) through the first half of scrolling, then gently fades as it approaches the edges
  const opacity = isReducedMotion ? 1 : Math.max(0, 1 - Math.pow(scrollProgress, 1.25) * 0.98);

  return (
    // Natural height section with balanced padding - no artificial fixed heights or extra empty runways
    <section
      ref={containerRef}
      className="relative bg-[#FBF8F3] overflow-hidden pt-16 pb-24 sm:pt-20 sm:pb-32 md:pt-24 md:pb-36 lg:pt-28 lg:pb-44"
    >
      {/* Subtle ambient luxury dot texture */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E1915 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
        aria-hidden="true"
      />

      <div className="w-full max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-14 relative z-10">

        {/* Main Stage Container: natural height on mobile, comfortable framing height on desktop */}
        <div className="relative flex items-center justify-center lg:min-h-[720px] xl:min-h-[780px]">

          {/* Stable Centered Content Block (Center text and button remain stable) */}
          <div className="max-w-2xl mx-auto text-center px-4 relative z-20 py-2 sm:py-4">

            {/* Tag Badge */}
            <div className="inline-flex items-center justify-center gap-2 mb-4 sm:mb-5">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.28em] uppercase text-[var(--color-brand-primary)]">
                ✦ Our Story
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-sans-modern font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1E1915] leading-[1.14] tracking-tight">
              Cutting-Edge Styling <br />
              For Truly Remarkable <br />
              Makeovers
            </h2>

            {/* Description Paragraph */}
            <p className="mt-5 sm:mt-6 text-sm sm:text-base text-[#6E675F] leading-relaxed max-w-xl mx-auto font-sans-modern font-normal">
              Alpha Hair & Beauty Unisex Salon is built on a single conviction: beauty services should be as thoughtful as they are transformative. We curate a specialized, expert team — each specialist deeply skilled in their craft — so that every visit is genuine care.
            </p>

            {/* Stable Pill CTA Button */}
            <div className="mt-7 sm:mt-8">
              <Button
                href="/about"
                variant="secondary"
                size="md"
                className="bg-[#231A12] hover:bg-[var(--color-brand-primary)] text-white px-8 sm:px-9 py-3 sm:py-3.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Read Our Story &nbsp;&rsaquo;
              </Button>
            </div>

          </div>

          {/* 4 Floating Surround Photos (Desktop Parallax Layer) */}
          <div className="hidden lg:block pointer-events-none">

            {/* 1. TOP-LEFT: Precision Haircut & Styling Session */}
            <div
              style={{
                transform: `translate3d(${leftX}px, 0, 0) scale(${scale})`,
                opacity: opacity,
                willChange: "transform, opacity",
              }}
              className="absolute -top-2 xl:-top-6 left-0 xl:left-2 w-72 xl:w-88 2xl:w-96 pointer-events-auto transition-transform duration-75 ease-out"
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-stone-900/8 border border-black/5 bg-white">
                <div className="relative w-full aspect-[4/5] overflow-hidden group">
                  <Image
                    src="/images/about/alpha-real-stylist-session.jpg"
                    alt="Stylist crafting precision haircut at Alpha Unisex Salon"
                    fill
                    sizes="(max-width: 1280px) 360px, 420px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

            {/* 2. BOTTOM-LEFT: Active Salon Haircut & Grooming Stations */}
            <div
              style={{
                transform: `translate3d(${leftX * 1.15}px, 0, 0) scale(${scale})`,
                opacity: opacity,
                willChange: "transform, opacity",
              }}
              className="absolute bottom-2 xl:bottom-4 left-10 lg:left-14 xl:left-28 w-64 xl:w-80 2xl:w-88 pointer-events-auto transition-transform duration-75 ease-out"
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-stone-900/8 border border-black/5 bg-white">
                <div className="relative w-full aspect-[4/3] overflow-hidden group">
                  <Image
                    src="/images/about/alpha-real-styling-stations.jpg"
                    alt="Alpha Unisex Salon live haircut chairs and styling stations"
                    fill
                    sizes="(max-width: 1280px) 320px, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

            {/* 3. TOP-RIGHT: Modern Luxury Salon Interior */}
            <div
              style={{
                transform: `translate3d(${rightX}px, 0, 0) scale(${scale})`,
                opacity: opacity,
                willChange: "transform, opacity",
              }}
              className="absolute -top-6 xl:-top-10 right-0 xl:right-2 w-72 xl:w-88 2xl:w-[400px] pointer-events-auto transition-transform duration-75 ease-out"
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-stone-900/8 border border-black/5 bg-white">
                <div className="relative w-full aspect-[4/3] overflow-hidden group">
                  <Image
                    src="/images/about/alpha-real-salon-lounge.jpg"
                    alt="Alpha Unisex Salon real interior lounge, styling partition and seating"
                    fill
                    sizes="(max-width: 1280px) 380px, 440px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

            {/* 4. BOTTOM-RIGHT: Precision Men's Grooming & Beard Styling */}
            <div
              style={{
                transform: `translate3d(${rightX * 1.15}px, 0, 0) scale(${scale})`,
                opacity: opacity,
                willChange: "transform, opacity",
              }}
              className="absolute -bottom-10 xl:-bottom-14 right-4 lg:right-8 xl:right-16 w-64 xl:w-76 2xl:w-84 pointer-events-auto transition-transform duration-75 ease-out"
            >
              <div className="relative rounded-[28px] overflow-hidden shadow-2xl shadow-stone-900/8 border border-black/5 bg-white">
                <div className="relative w-full aspect-[16/11] overflow-hidden group">
                  <Image
                    src="/images/services/service-indian-beard-sculpt.jpg"
                    alt="Gentlemen precision haircut and beard grooming styling"
                    fill
                    sizes="(max-width: 1280px) 320px, 380px"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Mobile / Tablet Friendly Grid for Small Screens: clean compact spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:hidden max-w-xl mx-auto">
          <div className="relative rounded-[22px] overflow-hidden shadow-md border border-black/5 bg-white">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="/images/about/alpha-real-stylist-session.jpg"
                alt="Stylist crafting haircut"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative rounded-[22px] overflow-hidden shadow-md border border-black/5 bg-white">
            <div className="relative w-full aspect-[4/5]">
              <Image
                src="/images/about/alpha-real-salon-lounge.jpg"
                alt="Alpha Unisex Salon luxury lounge interior"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative rounded-[22px] overflow-hidden shadow-md border border-black/5 bg-white">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/about/alpha-real-styling-stations.jpg"
                alt="Haircut chairs and styling stations"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="relative rounded-[22px] overflow-hidden shadow-md border border-black/5 bg-white">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/services/service-indian-beard-sculpt.jpg"
                alt="Men grooming and beard styling craft"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

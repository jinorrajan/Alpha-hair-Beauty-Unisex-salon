"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

// High-resolution professional salon photography featuring handsome men styling / barber sessions
const HERO_BG_SLIDES = [
  {
    src: "/images/hero/hero-men-styling.jpg",
    alt: "Master Barber Styling and Haircut in Luxury Unisex Salon",
  },
  {
    src: "/images/hero/hero-men-barber-chair.jpg",
    alt: "Gentlemen Haircut & Grooming in Salon Chair",
  },
  {
    src: "/images/hero/clean-salon-interior.jpg",
    alt: "Luxury Salon Mirrors, Stations and Interior",
  },
];

export const HeroSection: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  // Background crossfade loop
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_BG_SLIDES.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden pt-24 sm:pt-28 md:pt-20 pb-10 sm:pb-12 bg-[#1A1410]">
      {/* 
        1. 100vh Full-bleed Crisp Background Slideshow:
        Pure high-resolution photographs featuring men grooming and salon luxury
      */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        {HERO_BG_SLIDES.map((slide, idx) => (
          <div
            key={slide.src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              idx === activeSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority={idx === 0}
            />
          </div>
        ))}

        {/* 
          Soft Warm Vignette matching Omila exact lighting:
          Ensures white title is ultra-crisp while preserving brightness across the right model area
        */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 via-45% to-black/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent via-55% to-black/35" />
      </div>

      {/* 
        2. Exact Script Overlay 'Beauty Salon'
        Desktop placement: centered bottom overlay matching Omila
        Mobile placement: handled directly above the card below
      */}
      <div className="hidden lg:flex absolute inset-x-0 bottom-28 lg:bottom-32 z-20 justify-center pointer-events-none select-none px-4">
        <span
          className="text-white text-[102px] lg:text-[128px] xl:text-[140px] leading-none whitespace-nowrap drop-shadow-[0_4px_22px_rgba(0,0,0,0.65)] transform -rotate-[2deg]"
          style={{
            fontFamily: "Baekrajan, var(--font-script), cursive",
          }}
        >
          Beauty Salon
        </span>
      </div>

      <Container wide className="relative z-30 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[calc(100vh-140px)] mt-2 sm:mt-4 md:-mt-16 lg:-mt-36">
          
          {/* Left Column: Raised Position, Semibold Heading matching Omila Reference */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
            <Reveal direction="right" delayMs={0}>
              <div className="relative">
                <h1 className="font-sans-modern font-semibold text-6xl sm:text-7xl md:text-8xl lg:text-[96px] xl:text-[110px] 2xl:text-[118px] text-white tracking-tight leading-[0.93] drop-shadow-md">
                  Hair & <br />
                  Beauty <br />
                  Salon
                </h1>
              </div>
            </Reveal>

            <Reveal direction="right" delayMs={200}>
              <p className="text-sm sm:text-base md:text-lg text-white/95 max-w-md leading-relaxed font-sans-modern font-normal drop-shadow-sm">
                Bespoke beauty services for the discerning client. Hair, skin, nails, and wellness – elevated to an art.
              </p>
            </Reveal>

            {/* Exact Pill Action Buttons matching Theme Option 1 (Mocha & Champagne) */}
            <Reveal direction="right" delayMs={350}>
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <Link
                  href="/contact"
                  className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-[#C5A880] hover:bg-[#AF8F63] text-[#1E1915] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-lg flex items-center gap-1.5"
                >
                  Book Appointment &rsaquo;
                </Link>
                <Link
                  href="/services"
                  className="px-8 sm:px-9 py-3.5 sm:py-4 rounded-full bg-white text-[#452B1A] hover:bg-[#FBF8F3] text-xs sm:text-sm font-semibold tracking-wider transition-all duration-300 shadow-lg flex items-center gap-1.5"
                >
                  Explore Services &rsaquo;
                </Link>
              </div>
            </Reveal>
          </div>

          {/* 
            Right Column: EXACT Omila Reference Card
            - 'Best Stylists Are For You'
            - In mobile view: 'Beauty Salon' script sits gracefully above the card, and card is smaller and more compact
          */}
          <div className="lg:col-span-5 flex flex-col justify-end items-center lg:items-end self-end pb-2 lg:pb-8 lg:translate-x-6 xl:translate-x-10 w-full">
            {/* Mobile View ONLY: 'Beauty Salon' script positioned above the card */}
            <div className="lg:hidden flex justify-center pointer-events-none select-none -mb-4 sm:-mb-5 z-20">
              <span
                className="text-white text-[58px] sm:text-[70px] leading-none whitespace-nowrap drop-shadow-[0_4px_24px_rgba(0,0,0,0.7)] transform -rotate-[2deg]"
                style={{
                  fontFamily: "Baekrajan, var(--font-script), cursive",
                }}
              >
                Beauty Salon
              </span>
            </div>

            <Reveal direction="left" delayMs={300} className="w-full max-w-[340px] sm:max-w-[390px] lg:max-w-[440px]">
              <div className="rounded-[16px] sm:rounded-[18px] bg-[#6E645A]/85 backdrop-blur-md border border-[#857B70]/60 p-2.5 sm:p-[10px] shadow-[0_20px_45px_rgba(0,0,0,0.55)] flex items-center gap-3 sm:gap-3.5 lg:gap-[18px] text-white transition-transform duration-300 hover:scale-[1.01]">
                
                {/* Real salon interior & styling photo with sleek compact aspect - smaller on mobile */}
                <div className="relative w-[112px] h-[98px] min-h-[98px] sm:w-[135px] sm:h-[120px] sm:min-h-[120px] lg:w-[165px] lg:h-[145px] lg:min-h-[145px] rounded-[10px] sm:rounded-[14px] overflow-hidden shrink-0 shadow-sm">
                  <Image
                    src="/images/hero/alpha-real-salon-interior.jpg"
                    alt="Alpha Unisex Salon live styling chairs and interior"
                    fill
                    sizes="(max-width: 640px) 112px, (max-width: 1024px) 135px, 165px"
                    className="object-cover object-center"
                    priority
                  />
                </div>

                {/* Content text */}
                <div className="flex flex-col justify-center pr-1 sm:pr-2 space-y-1 sm:space-y-1.5 lg:space-y-2">
                  <h3 className="font-sans-modern font-semibold text-[17px] sm:text-[19px] lg:text-[21px] text-white leading-[1.2] tracking-normal">
                    Best Stylists Are
                    <br />
                    For You
                  </h3>
                  <p className="text-[12px] sm:text-[12.5px] lg:text-[13px] text-[#F3EFE9] leading-[1.32] lg:leading-[1.35] tracking-normal font-normal">
                    Our talented specialist are ready to share their secrets.
                  </p>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
};

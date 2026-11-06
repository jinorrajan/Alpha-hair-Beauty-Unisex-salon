"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

interface GalleryItem {
  src: string;
  badge: string;
  title: string;
  subtitle: string;
  shape: "top-arch" | "bottom-arch";
}

export const GallerySection: React.FC = () => {
  const galleryItems: GalleryItem[] = [
    {
      src: "/images/salon/alpha-feature-wall.png",
      badge: "Feature Wall",
      title: "Gold Feature Wall",
      subtitle: "3D Metallic Salon Identity",
      shape: "top-arch",
    },
    {
      src: "/images/salon/alpha-styling-stations.png",
      badge: "Styling Stations",
      title: "Styling Stations",
      subtitle: "Precision Lighted Mirrors",
      shape: "bottom-arch",
    },
    {
      src: "/images/salon/alpha-lounge.png",
      badge: "Guest Lounge",
      title: "Guest Lounge",
      subtitle: "Comfortable Reception Area",
      shape: "top-arch",
    },
    {
      src: "/images/salon/alpha-stylist-work.png",
      badge: "Stylists at Work",
      title: "Stylist at Work",
      subtitle: "Dedicated Hairdressing Craft",
      shape: "bottom-arch",
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-[#FBF8F3] relative overflow-hidden">
      {/* Subtle ambient luxury grain or dot texture */}
      <div 
        className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1E1915 1px, transparent 1px)`,
          backgroundSize: "32px 32px"
        }}
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <Reveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 px-4">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.28em] uppercase text-[var(--color-brand-primary)]">
                ✦ Real Salon Environment
              </span>
            </div>
            <h2 className="font-sans-modern font-semibold text-3xl sm:text-4xl md:text-5xl text-[#1E1915] leading-[1.15] tracking-tight">
              Step Inside Alpha Salon
            </h2>
            <p className="mt-4 text-sm sm:text-base text-[#6E675F] max-w-xl mx-auto leading-relaxed">
              Authentic original views of our lighted styling stations, welcoming guest lounge, expert hairdressing team, and official 3D gold brand wall.
            </p>
          </div>
        </Reveal>

        {/* 4-Card Alternating Arch Grid (Exact match to reference image 5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 max-w-[1400px] mx-auto">
          {galleryItems.map((item, index) => {
            const isTopArch = item.shape === "top-arch";

            return (
              <Reveal
                key={item.title}
                direction="up"
                delayMs={index * 120}
                className="h-full"
              >
                <div className="group flex flex-col items-center select-none h-full">
                  
                  {/* Alternating Arch Image Card */}
                  <div
                    className={`relative w-full aspect-[3/4.2] overflow-hidden bg-stone-200 shadow-xl shadow-stone-900/5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-stone-900/15 group-hover:-translate-y-2 border border-black/[0.04] ${
                      isTopArch
                        ? "rounded-t-full rounded-b-3xl"
                        : "rounded-t-3xl rounded-b-full"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>

                  {/* Caption & Pill Badge underneath (matching reference) */}
                  <div className="mt-5 text-center flex flex-col items-center px-2">
                    {/* Pill Badge */}
                    <span className="inline-block px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-wider bg-[#939D54] hover:bg-[#B8860B] text-white shadow-sm transition-colors duration-300">
                      {item.badge}
                    </span>

                    {/* Title */}
                    <h3 className="mt-2.5 font-sans-modern font-semibold text-base sm:text-lg text-[#1E1915] group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">
                      {item.title}
                    </h3>

                    {/* Subtitle */}
                    <p className="mt-0.5 text-xs text-[#786F66]">
                      {item.subtitle}
                    </p>
                  </div>

                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Authenticity Assurance Badge */}
        <Reveal direction="up" delayMs={500}>
          <div className="mt-16 text-center">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#8C8277] font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-primary)]" />
              Verified Original Photography from Alpha Hair & Beauty Unisex Salon
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

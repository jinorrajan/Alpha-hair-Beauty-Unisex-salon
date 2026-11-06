"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhatWeProvideSection } from "@/components/sections/WhatWeProvideSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GalleryMarqueeSection } from "@/components/sections/GalleryMarqueeSection";

const SALON_VALUES = [
  {
    number: "01",
    title: "Master Craftsmanship",
    description:
      "Every scissor cut, balayage highlight, and facial therapy is performed by trained artisans with extensive salon expertise.",
  },
  {
    number: "02",
    title: "Unisex Family Care",
    description:
      "A serene, welcoming sanctuary where women, men, and children receive customized grooming and spa attention.",
  },
  {
    number: "03",
    title: "Pure & Certified Products",
    description:
      "We exclusively formulate with skin-gentle botanical and professional hair wellness products for radiant lasting results.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#FBF8F3] min-h-screen text-[#1E1915]">
      {/* 
        1. Exact Omila About Us Breadcrumb Banner (brc-4.jpg)
      */}
      <section className="relative w-full min-h-[380px] md:min-h-[460px] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brand/about-breadcrumb.jpg"
            alt="About Alpha Salon"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          {/* Omila Dark Overlay & Gradient */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17120A]/90 via-[#17120A]/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold text-white tracking-tight leading-none uppercase drop-shadow-md">
            About Us
          </h1>

          <nav
            aria-label="Breadcrumb"
            className="flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold tracking-widest uppercase text-white/90"
          >
            <Link
              href="/"
              className="text-white hover:text-[var(--color-brand-primary)] transition-colors duration-200"
            >
              Home
            </Link>
            <span className="text-[var(--color-brand-primary)]">/</span>
            <span className="text-[var(--color-brand-primary)] font-bold">About Us</span>
          </nav>
        </div>
      </section>

      {/* 
        2. Exact Omila Story / Parallax Craft Section
        "Cutting-Edge Styling For Truly Remarkable Makeovers"
      */}
      <AboutSection />

      {/* 
        3. Salon Core Philosophy & Values (Omila 3-Pillar Architecture)
      */}
      <section className="py-20 md:py-24 bg-white border-y border-[#EBE5DB]">
        <Container wide>
          <div className="max-w-3xl mx-auto text-center mb-16 space-y-3">
            <span className="text-xs font-bold tracking-[0.26em] uppercase text-[var(--color-brand-primary)] block">
              ✦ Our Philosophy
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#201A14] font-bold tracking-tight">
              Elevating Personal Grooming To An Art
            </h2>
            <p className="text-sm sm:text-base text-[#6E675F] leading-relaxed max-w-2xl mx-auto">
              Since 2026, Alpha Hair & Beauty Unisex Salon has blended modern precision hairdressing with peaceful wellness traditions to serve Chennai with distinction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-[1320px] mx-auto">
            {SALON_VALUES.map((val) => (
              <div
                key={val.number}
                className="relative rounded-[24px] p-8 sm:p-10 bg-[#FBF8F3] border border-[#EAE3D6] shadow-sm hover:shadow-md transition-all duration-300 space-y-4 group"
              >
                <span className="font-sans-modern font-black text-4xl sm:text-5xl text-[var(--color-brand-primary)]/30 group-hover:text-[var(--color-brand-primary)] transition-colors block">
                  {val.number}
                </span>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-[#201A14] group-hover:text-[var(--color-brand-primary)] transition-colors">
                  {val.title}
                </h3>
                <p className="text-sm text-[#6E675F] leading-relaxed">
                  {val.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 
        4. What We Provide Showcase (Feature Cards from Home)
      */}
      <WhatWeProvideSection />

      {/* 
        5. Verified Customer Reviews & Happy Clients
      */}
      <TestimonialsSection />

      {/* 
        6. Dual Direction Scrolling Salon Gallery Marquee
      */}
      <GalleryMarqueeSection />

      {/* 
        7. Bottom Consultation & Branch Visit CTA
      */}
      <section className="py-20 bg-[#FBF8F3]">
        <Container>
          <div className="rounded-[32px] bg-[#141414] text-white p-8 sm:p-14 text-center max-w-4xl mx-auto border border-[#C8A45D]/30 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#C8A45D] font-bold block">
                ✦ Visit Our Branches
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans-modern font-bold">
                Experience Alpha Salon Today
              </h2>
              <p className="text-sm sm:text-base text-[#D3C8B9] max-w-xl mx-auto leading-relaxed">
                Step into our Chromepet studio or any of our 8 branches in Chennai for a personalized hair consultation and relaxation therapies.
              </p>
              <div className="pt-4 flex flex-wrap justify-center gap-4">
                <Link
                  href="/branches"
                  className="px-8 py-3.5 rounded-full bg-[#C8A45D] hover:bg-[#E2C37E] text-[#121212] font-bold text-xs uppercase tracking-wider transition-all duration-300 shadow-lg"
                >
                  Explore Salon Branches &rarr;
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs uppercase tracking-wider border border-white/20 transition-all duration-300"
                >
                  Schedule Appointment
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

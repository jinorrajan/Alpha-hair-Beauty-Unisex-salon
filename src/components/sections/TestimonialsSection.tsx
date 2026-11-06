"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

interface ReviewItem {
  id: string;
  name: string;
  initials: string;
  avatarBg: string;
  rating: number;
  service: string;
  branchId: string;
  branchName: string;
  location: string;
  content: string;
}

const REVIEWS: ReviewItem[] = [
  {
    id: "review-chromepet",
    name: "Karthik S.",
    initials: "KS",
    avatarBg: "bg-gradient-to-br from-[#452B1A] to-[#2B1B10] text-[#EFE7DE]",
    rating: 5,
    service: "Master Haircut & Beard Sculpt",
    branchId: "chromepet",
    branchName: "Chromepet",
    location: "Nemilichery High Rd, Chromepet",
    content:
      "One of the best unisex salons in Chromepet! The stylist took time to understand what cut suited my face shape and executed it cleanly. Sanitized clippers, neat interior, and the complimentary head massage after the haircut was super relaxing. Very reasonable combo price compared to commercial chains.",
  },
  {
    id: "review-keelkattalai",
    name: "Priya Sundaram",
    initials: "PS",
    avatarBg: "bg-gradient-to-br from-[#8C6D4F] to-[#5C4530] text-white",
    rating: 5,
    service: "Hair Coloring & Keratin Therapy",
    branchId: "keelkattalai",
    branchName: "Keelkattalai Branch",
    location: "Medavakkam Main Road, Keelkattalai",
    content:
      "Visited the Keelkattalai salon for hair coloring and hair smoothing. The specialists explained every single step patiently without rushing. My hair looks vibrant, silky, and soft. Clean, family-friendly ambiance and truly premium service!",
  },
  {
    id: "review-madipakkam",
    name: "Vignesh Kumar",
    initials: "VK",
    avatarBg: "bg-gradient-to-br from-[#2D221A] to-[#18120D] text-[#EFE7DE]",
    rating: 5,
    service: "Precision Fade & Beard Lineup",
    branchId: "madipakkam",
    branchName: "Madipakkam Branch",
    location: "Ambedkar Road, Madipakkam",
    content:
      "Regular customer at the Madipakkam branch for over a year. Consistent quality every single visit. Clean clippers, polite staff, and top-tier grooming service. Clean fade haircut and crisp beard lineup with affordable pricing for this level of luxury.",
  },
  {
    id: "review-mannivakkam",
    name: "Anand Rangarajan",
    initials: "AR",
    avatarBg: "bg-gradient-to-br from-[#624733] to-[#3B291D] text-white",
    rating: 5,
    service: "Hair Spa & Scalp Therapy",
    branchId: "mannivakkam",
    branchName: "Mannivakkam Branch",
    location: "Mannivakkam Main Road, Near Junction",
    content:
      "Took the hair spa package along with hair trim at the Mannivakkam branch. Excellent wash basin massage and deep conditioning therapy. Staff is courteous, and the whole environment is clean with good AC and comfortable recliners.",
  },
  {
    id: "review-pallavaram",
    name: "Deepak Natarajan",
    initials: "DN",
    avatarBg: "bg-gradient-to-br from-[#93785E] to-[#674F3B] text-white",
    rating: 5,
    service: "Groom Styling & Detan Package",
    branchId: "pallavaram",
    branchName: "Pallavaram Branch",
    location: "Old Pallavaram High Road",
    content:
      "Booked occasion grooming for my brother's wedding ceremony at the Pallavaram branch. Complete facial detan, beard shaping, and hair styling. The senior stylist gave full attention and delivered a sharp, natural look. Family and friends appreciated the grooming finish!",
  },
  {
    id: "review-medavakkam",
    name: "Suresh Menon",
    initials: "SM",
    avatarBg: "bg-gradient-to-br from-[#3E2D20] to-[#1F1610] text-[#EFE7DE]",
    rating: 5,
    service: "Executive Haircut & Detan Facial",
    branchId: "medavakkam",
    branchName: "Medavakkam Branch",
    location: "Medavakkam Junction, Chennai",
    content:
      "Great grooming experience at the Medavakkam branch. Very polite team, sanitized stations, and no unnecessary push for extra products. Loved the quick detan pack and sharp scissor haircut finish. Highly recommended neighborhood salon!",
  },
  {
    id: "review-kovilambakkam",
    name: "Divya Bharathi",
    initials: "DB",
    avatarBg: "bg-gradient-to-br from-[#7D6450] to-[#4F3C2E] text-white",
    rating: 5,
    service: "Foot Reflexology & Spa Pedicure",
    branchId: "kovilambakkam",
    branchName: "Kovilambakkam Branch",
    location: "Kovilambakkam Main Road",
    content:
      "The foot reflexology and spa pedicure at the Kovilambakkam salon were deeply relaxing after a hectic work week. Very hygienic setup, calming music, and courteous beauticians. Truly a comforting wellness sanctuary!",
  },
  {
    id: "review-a-glam",
    name: "Sneha Varadharajan",
    initials: "SV",
    avatarBg: "bg-gradient-to-br from-[#8C643E] to-[#452B1A] text-white",
    rating: 5,
    service: "Nanoplasty & Face D-Tan",
    branchId: "a-glam",
    branchName: "A Glam Unisex Salon",
    location: "Perumal Nagar, Old Pallavaram",
    content:
      "A Glam Unisex Salon in Old Pallavaram is a fantastic addition! Did my Nanoplasty smoothing and Face D-Tan session here. The stylists are certified, very attentive, and the results are truly glossy and frizz-free. Super clean and comfortable ambiance!",
  },
];

export const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const total = REVIEWS.length;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, total]);

  return (
    <section
      className="relative w-full py-20 sm:py-24 lg:py-28 bg-[#FBF8F3] overflow-hidden select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="relative w-full max-w-[1450px] h-[780px] opacity-[0.35] mix-blend-multiply">
          <Image
            src="/images/testimonials/decore-1.png"
            alt="Decor"
            fill
            className="object-contain object-center scale-110 sm:scale-100"
            priority
          />
        </div>
      </div>

      <Container className="relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 px-4">
          <Reveal direction="up">
            <div className="inline-flex items-center justify-center gap-2 mb-3">
              <span className="text-[11px] sm:text-[12px] font-bold tracking-[0.28em] uppercase text-[var(--color-brand-primary)]">
                ✦ 100% Verified Reviews • All 8 Chennai Branches
              </span>
            </div>
          </Reveal>

          <Reveal direction="up" delayMs={100}>
            <h2 className="font-sans-modern font-semibold text-3xl sm:text-4xl md:text-5xl text-[#1E1915] leading-[1.14] tracking-tight">
              Loved by Clients Across All 8 Branches
            </h2>
          </Reveal>

          <Reveal direction="up" delayMs={150}>
            <p className="mt-3 text-sm sm:text-base text-[#6E675F] max-w-2xl mx-auto leading-relaxed">
              Real Google reviews combined across our 8 salon locations in Chennai — Chromepet, S. Kolathur, Keelkattalai, Madipakkam, Mannivakkam, Pallavaram, Medavakkam, and A Glam Unisex Salon (Old Pallavaram).
            </p>
          </Reveal>

          {/* Google Trust Banner Pill */}
          <Reveal direction="up" delayMs={200}>
            <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 bg-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-full border border-[#EBE4DA] shadow-sm">
              {/* Google G Icon */}
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                  />
                </svg>
                <span className="text-xs sm:text-sm font-bold text-[#1E1915]">
                  4.9
                </span>
              </div>

              {/* Gold Stars */}
              <div className="flex items-center gap-1 text-[#C5A880]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <div className="h-3.5 w-px bg-[#E0D8CD] hidden sm:block" />

              <span className="text-xs text-[#73685E] font-medium">
                Over <strong className="text-[#1E1915] font-semibold">1,200+ Verified Ratings</strong> Across All 8 Branches
              </span>
            </div>
          </Reveal>

          {/* 7 Branch Quick Select Pills */}
          <Reveal direction="up" delayMs={250}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 max-w-4xl mx-auto">
              {REVIEWS.map((r, idx) => (
                <button
                  key={r.branchId}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-200 cursor-pointer border ${
                    idx === activeIndex
                      ? "bg-[#452B1A] text-white border-[#452B1A] shadow-sm scale-105"
                      : "bg-white/80 text-[#6E6358] border-[#E8E1D6] hover:bg-white hover:text-[#1E1915] hover:border-[#C5A880]"
                  }`}
                >
                  {r.branchName}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* 3-Card Carousel Track (Centered around activeIndex) */}
        <div className="relative max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {[0, 1, 2].map((offset) => {
              const reviewIndex = (activeIndex + offset) % total;
              const item = REVIEWS[reviewIndex];

              return (
                <div
                  key={`${item.id}-${offset}`}
                  className="group relative bg-white rounded-3xl p-6 sm:p-8 border border-[#ECE5DB] shadow-md shadow-stone-900/[0.03] hover:shadow-xl hover:shadow-stone-900/[0.08] hover:border-[#C5A880]/60 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    {/* Top Header: Client Monogram Initials + Name + Verified Google Client + Google Logo */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        {/* Monogram Circle Avatar */}
                        <div
                          className={`w-11 h-11 rounded-full ${item.avatarBg} flex items-center justify-center font-bold text-xs tracking-wider shadow-sm ring-2 ring-white`}
                        >
                          {item.initials}
                        </div>

                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-sans-modern font-semibold text-base text-[#1E1915] leading-tight">
                              {item.name}
                            </h3>
                            {/* Verified Green Checkmark Badge */}
                            <svg
                              className="w-4 h-4 text-[#2E7D32] shrink-0"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                              aria-label="Verified Reviewer"
                            >
                              <path
                                fillRule="evenodd"
                                d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>

                          {/* Only Verified Google Client in every review */}
                          <span className="text-[11.5px] text-[#8C8276] font-medium block mt-0.5">
                            Verified Google Client
                          </span>
                        </div>
                      </div>

                      {/* Google G icon indicator */}
                      <div className="shrink-0 opacity-80 group-hover:opacity-100 transition-opacity">
                        <svg className="w-4 h-4" viewBox="0 0 24 24">
                          <path
                            fill="#4285F4"
                            d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.66-5.17 3.66-9.17z"
                          />
                          <path
                            fill="#34A853"
                            d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
                          />
                          <path
                            fill="#FBBC05"
                            d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.17 0 9.97 0 12s.45 3.83 1.25 5.42l4.03-3.15z"
                          />
                          <path
                            fill="#EA4335"
                            d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
                          />
                        </svg>
                      </div>
                    </div>

                    {/* Branch Location Badge */}
                    <div className="mb-3">
                      <span className="text-[11px] text-[#A09385] flex items-center gap-1">
                        <svg className="w-3 h-3 text-[#B8860B]" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                        <strong className="text-[#452B1A] font-semibold">{item.branchName}:</strong> {item.location}
                      </span>
                    </div>

                    {/* Rating Stars & Service Pill */}
                    <div className="flex flex-wrap items-center gap-2 mb-4">
                      <div className="flex items-center gap-1 text-[#C5A880]">
                        {[...Array(item.rating)].map((_, i) => (
                          <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-[#F4EFEA] text-[#452B1A] border border-[#EBE3D8]">
                        {item.service}
                      </span>
                    </div>

                    {/* Review Quote Body */}
                    <p className="text-[#3E342B] text-sm sm:text-[14.5px] leading-relaxed line-clamp-5">
                      “{item.content}”
                    </p>
                  </div>

                  {/* Card Bottom: Verified Visit Assurance */}
                  <div className="mt-6 pt-4 border-t border-[#F2ECE3] flex items-center justify-between">
                    <span className="text-[11px] text-[#9E9488] font-medium flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2E7D32]" />
                      Verified Visit at {item.branchName}
                    </span>
                    <span className="text-xs text-[#C5A880] font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Google Review
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Controls: Prev / Next buttons and slide indicators */}
          <div className="flex items-center justify-center gap-4 mt-10 sm:mt-12">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="w-11 h-11 rounded-full border border-[#D8CEBF] bg-white text-[#241C15] flex items-center justify-center hover:bg-[#241C15] hover:text-white hover:border-[#241C15] transition-all duration-300 shadow-sm focus:outline-none cursor-pointer"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Slide Dots for all 8 branches */}
            <div className="flex items-center gap-1.5">
              {REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === activeIndex
                      ? "w-6 bg-[#452B1A]"
                      : "w-2 bg-[#D8CEBF] hover:bg-[#8C7B6A]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next review"
              className="w-11 h-11 rounded-full border border-[#D8CEBF] bg-white text-[#241C15] flex items-center justify-center hover:bg-[#241C15] hover:text-white hover:border-[#241C15] transition-all duration-300 shadow-sm focus:outline-none cursor-pointer"
            >
              <svg className="w-4 h-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

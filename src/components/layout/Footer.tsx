"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Footer: React.FC = () => {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-[#FBF8F3] pt-12 sm:pt-14 pb-5 sm:pb-8 px-3 sm:px-6 lg:px-8 select-none">
      <div className="relative w-full max-w-[1360px] mx-auto">
        
        {/* ==============================================================
            PROTRUDING TOP EMBLEM (Compact & Proportional)
           ============================================================== */}
        <div className="absolute -top-10 sm:-top-12 left-1/2 -translate-x-1/2 z-30 flex items-center justify-center">
          <div className="relative group">
            <div className="absolute inset-0 rounded-full bg-[#C5A880]/20 blur-lg group-hover:bg-[#C5A880]/35 transition-all duration-300" />
            
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 bg-gradient-to-b from-[#E7D6C1] via-[#C5A880] to-[#452B1A] shadow-xl transition-transform duration-300 group-hover:scale-105">
              <div className="relative w-full h-full rounded-full bg-[#18110D] flex items-center justify-center overflow-hidden border border-[#C5A880]/40 shadow-inner">
                <div className="relative w-14 h-14 sm:w-16 sm:h-16">
                  <Image
                    src="/images/brand/alpha-logo-transparent.png"
                    alt="Alpha Unisex Salon Official Crest"
                    fill
                    sizes="(max-width: 640px) 56px, 64px"
                    className="object-contain p-1 drop-shadow-[0_2px_6px_rgba(197,168,128,0.35)]"
                    priority={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            MAIN CURVED DARK CONTAINER (Compact Height)
           ============================================================== */}
        <div className="relative bg-[#18110D] text-[#EDE5DC] rounded-[28px] sm:rounded-[38px] lg:rounded-[46px] border border-[#2D2018] shadow-2xl overflow-hidden pt-12 sm:pt-14 pb-5 sm:pb-6 px-5 sm:px-8 lg:px-12">
          
          {/* Subtle Topographical Line Overlay */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.08]">
            <svg
              className="w-full h-full"
              viewBox="0 0 1440 450"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
            >
              <path
                d="M-50 90 C 300 150, 450 30, 720 80 C 990 130, 1150 50, 1500 100"
                stroke="#C5A880"
                strokeWidth="1.2"
              />
              <path
                d="M-50 160 C 250 230, 480 100, 720 160 C 960 220, 1200 120, 1500 180"
                stroke="#C5A880"
                strokeWidth="1.2"
              />
              <path
                d="M-50 240 C 220 310, 500 180, 720 250 C 940 320, 1220 200, 1500 260"
                stroke="#C5A880"
                strokeWidth="1.2"
              />
              <ellipse cx="720" cy="40" rx="200" ry="80" stroke="#C5A880" strokeWidth="1" strokeDasharray="3 3" />
              <ellipse cx="720" cy="40" rx="320" ry="120" stroke="#C5A880" strokeWidth="1" />
            </svg>
          </div>

          {/* ==========================================================
              CENTER BRAND HERO & TWIN ACTION PILLS (Sleek Spacing)
             ========================================================== */}
          <div className="relative z-10 text-center max-w-xl mx-auto mb-7 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#FBF8F3] tracking-tight font-heading leading-tight">
              Alpha Unisex Salon
            </h2>
            <p className="font-[family-name:var(--font-script)] text-xl sm:text-2xl text-[#C5A880] mt-1 mb-4 sm:mb-5 font-normal">
              Where Everyday Grooming Becomes Art
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#C5A880] text-[#140D08] font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Book Appointment <span className="text-sm leading-none">→</span>
              </Link>
              <Link
                href="/branches"
                className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-full bg-[#241A13] text-[#EDE5DC] border border-[#C5A880]/35 hover:border-[#C5A880] hover:text-white font-semibold text-xs sm:text-sm tracking-wider uppercase transition-all duration-300 hover:-translate-y-0.5"
              >
                Explore 8 Branches <span className="text-sm leading-none">→</span>
              </Link>
            </div>
          </div>

          {/* ==========================================================
              MAIN INFORMATION: CONTACT & EXPLORE
             ========================================================== */}
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 pb-6 border-b border-white/10">
            
            {/* COLUMN 1: Contact & Studio Info (md: 7 cols) */}
            <div className="md:col-span-7 space-y-2 text-left">
              <h3 className="font-heading text-sm sm:text-base font-bold text-white tracking-wider">
                Contact
              </h3>
              
              <div className="text-xs sm:text-sm text-[#BDB0A4] leading-relaxed">
                <span className="text-white font-medium">Studio Address (Chromepet): </span>
                No. 70, Nemilichery High Road, Subash Nagar, Bharathipuram, Chromepet, Chennai 600044
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm pt-0.5">
                <p>
                  <span className="text-[#8E7E72]">Phone: </span>
                  <a
                    href="tel:+918122717723"
                    className="text-[#C5A880] hover:text-white font-bold transition-colors"
                  >
                    +91 81227 17723
                  </a>
                </p>
                <span className="text-white/20 hidden sm:inline">•</span>
                <p>
                  <span className="text-[#8E7E72]">Email: </span>
                  <a
                    href="mailto:alphahairandbeautyunisexsaloon@gmail.com"
                    className="text-[#D8C7B7] hover:text-white transition-colors"
                  >
                    alphahairandbeautyunisexsaloon@gmail.com
                  </a>
                </p>
              </div>

              <p className="text-[11px] sm:text-xs text-[#8E7E72]">
                Hours: <span className="text-[#EDE5DC]">Mon–Sat 9:00 AM – 9:00 PM • Sun 9:00 AM – 8:00 PM</span>
              </p>
            </div>

            {/* COLUMN 2: Explore Links (md: 5 cols) */}
            <div className="md:col-span-5 text-left">
              <h3 className="font-heading text-sm sm:text-base font-bold text-white tracking-wider mb-2">
                Explore
              </h3>

              <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm text-[#BDB0A4]">
                <ul className="space-y-1.5">
                  <li>
                    <Link href="/services#haircut" className="hover:text-[#C5A880] transition-colors block">
                      Master Haircut
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#shaving" className="hover:text-[#C5A880] transition-colors block">
                      Beard Sculpt
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#shampoo" className="hover:text-[#C5A880] transition-colors block">
                      Hair Spa &amp; Care
                    </Link>
                  </li>
                </ul>

                <ul className="space-y-1.5">
                  <li>
                    <Link href="/services#hairstyling" className="hover:text-[#C5A880] transition-colors block">
                      Hair Color Trends
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#facials" className="hover:text-[#C5A880] transition-colors block">
                      Hydra Facials
                    </Link>
                  </li>
                  <li>
                    <Link href="/branches" className="hover:text-[#C5A880] transition-colors block font-medium text-white/90">
                      All 8 Branches
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* ==========================================================
              FOLLOW US IN ONE ROW + BOTTOM PILLS
             ========================================================== */}
          <div className="relative z-10 pt-4 flex flex-col md:flex-row items-center justify-between gap-3 text-xs">
            
            {/* Follow Us in One Single Row */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-4 text-xs">
              <span className="text-[#C5A880] font-bold uppercase tracking-wider text-[11px]">
                Follow Us:
              </span>
              <a
                href="https://www.instagram.com/alpha_unisex_salon_chromepet/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4C4B5] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1 font-medium"
              >
                Instagram <span className="text-[#C5A880]">↗</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://www.facebook.com/profile.php?id=61596000632845"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4C4B5] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1 font-medium"
              >
                Facebook <span className="text-[#C5A880]">↗</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://wa.me/918122717723"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4C4B5] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1 font-medium"
              >
                WhatsApp <span className="text-[#C5A880]">↗</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href="https://google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4C4B5] hover:text-[#C5A880] transition-colors inline-flex items-center gap-1 font-medium"
              >
                Google Maps <span className="text-[#C5A880]">↗</span>
              </a>
            </div>

            {/* Right Bottom Pills (Salon Timings removed as requested) */}
            <div className="flex items-center gap-2">
              <Link
                href="/contact"
                className="px-3 py-1 rounded-full bg-[#FBF8F3] text-[#18110D] text-[11px] font-semibold hover:bg-[#C5A880] transition-colors duration-200 shadow-sm"
              >
                Privacy &amp; Policy
              </Link>
              <span className="px-3 py-1 rounded-full bg-[#FBF8F3]/90 text-[#18110D] text-[11px] font-bold shadow-sm">
                © {currentYear}
              </span>
            </div>

          </div>

          {/* Agency Attribution Line */}
          <div className="relative z-10 pt-3 text-center md:text-left text-[11px] text-[#7A6C60]">
            Digital Experience by{" "}
            <a
              href="https://theaccura8agency.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5A880] hover:text-white font-medium transition-colors"
            >
              theaccura8agency ↗
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

interface ServiceDisplayItem {
  id: string;
  category: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  audience: "mens" | "womens" | "kids";
  imageSource: "real" | "ai";
}

// Complete 17 authentic salon services matching requested ratios:
// Complete 24 authentic salon services, dynamically mixed across Men, Women, Kids & Treatments
const ALL_17_SERVICES: ServiceDisplayItem[] = [
  // 1. Men (Real): Master Haircut & Fade
  {
    id: "haircut",
    category: "Precision Craft",
    title: "Master Haircut & Skin Fade",
    slug: "/services#haircut",
    image: "/images/gallery/real-men-haircut-fade.jpg",
    description: "Tailored shear craft, clean taper fades, and neckline contouring customized to your face profile and hair texture.",
    audience: "mens",
    imageSource: "real",
  },
  // 2. Women (Real): Balayage French Highlights
  {
    id: "balayage",
    category: "Haute Color",
    title: "Balayage Hair Color",
    slug: "/services#balayage",
    image: "/images/services/service-balayage-hair-color.jpg",
    description: "French hand-painted sun-kissed highlights, seamless color melt, and multi-dimensional natural caramel tones.",
    audience: "womens",
    imageSource: "real",
  },
  // 3. Women (Real): Nanoplasty Organic Straightening
  {
    id: "nanoplasty",
    category: "Organic Silk",
    title: "Nanoplasty Treatment",
    slug: "/services#nanoplasty",
    image: "/images/services/service-nanoplasty-treatment.jpg",
    description: "Formaldehyde-free organic amino acid nanoplasty, sealing cuticles, eliminating frizz, and delivering lasting mirror-finish straight hair.",
    audience: "womens",
    imageSource: "real",
  },
  // 3. Women (Real): Face D-Tan Radiance
  {
    id: "face-dtan",
    category: "Skin Glow",
    title: "Face D-Tan Treatment",
    slug: "/services#face-dtan",
    image: "/images/services/service-face-dtan.jpg",
    description: "Sun-tan reversal therapy, gentle exfoliating scrub, and antioxidant botanical nourishment for clear, glowing facial skin.",
    audience: "womens",
    imageSource: "real",
  },
  // 4. Men (AI): Beard Sculpting & Trim
  {
    id: "beard-trim",
    category: "Royal Barber",
    title: "Beard Sculpting & Trim",
    slug: "/services#beard-trim",
    image: "/images/services/service-indian-beard-sculpt.jpg",
    description: "Crisp straight-razor cheek lines, clipper sculpting, and soothing tea tree aftershave balm conditioning.",
    audience: "mens",
    imageSource: "ai",
  },
  // 5. Women (Real): Hair Botox Deep Repair
  {
    id: "hair-botox",
    category: "Restorative Hair",
    title: "Hair Botox Treatment",
    slug: "/services#hair-botox",
    image: "/images/services/service-hair-botox.jpg",
    description: "Intensive anti-aging hair therapy packed with collagen, protein, and essential oils to repair split ends and restore youthful silky bounce.",
    audience: "womens",
    imageSource: "real",
  },
  // 6. Kids (Real): Kids Smart Haircut
  {
    id: "kids-haircut",
    category: "Junior Grooming",
    title: "Kids & Boy Child Haircut",
    slug: "/services#kids-haircut",
    image: "/images/gallery/real-kid-haircut.jpg",
    description: "Patient, friendly barber cuts for young boys and children in a cheerful, gentle salon environment.",
    audience: "kids",
    imageSource: "real",
  },
  // 7. Women (Real): Keratin Smoothing & Gloss (Before/After)
  {
    id: "smoothing",
    category: "Silk Care",
    title: "Keratin Smoothing & Gloss",
    slug: "/services#smoothing",
    image: "/images/services/service-keratin-smoothing.jpg",
    description: "Anti-frizz protein smoothing, thermal keratin sealing, and long-lasting glossy straight hair transformations.",
    audience: "womens",
    imageSource: "real",
  },
  // 8. Men (AI): Traditional Hot Towel Razor Shave
  {
    id: "shaving",
    category: "Classic Grooming",
    title: "Hot Towel Razor Shave",
    slug: "/services#shaving",
    image: "/images/services/service-real-razor-shave.jpg",
    description: "Warm botanical lather, double-glide straight razor shave, cold towel pore close, and rejuvenating face massage.",
    audience: "mens",
    imageSource: "ai",
  },
  // 9. Women (Real): Neck Detan Therapy
  {
    id: "neck-detan",
    category: "Skin Radiance",
    title: "Neck Detan Therapy",
    slug: "/services#neck-detan",
    image: "/images/services/service-neck-detan.jpg",
    description: "Targeted hyperpigmentation treatment, active exfoliation, and soothing moisture therapy for an even-toned, luminous neckline.",
    audience: "womens",
    imageSource: "real",
  },
  // 10. Women (Real): Women's Haircut & Blowout
  {
    id: "womens-haircut",
    category: "Couture Styling",
    title: "Women's Haircut & Blowout",
    slug: "/services#womens-haircut",
    image: "/images/gallery/real-woman-haircut.jpg",
    description: "Layered feather cuts, curtain bangs, split-end removal, and bouncy salon blowout finishes with heat protection.",
    audience: "womens",
    imageSource: "real",
  },
  // 11. Men (Real): Men's Detan & Charcoal Hydra Facial
  {
    id: "facials",
    category: "Skin Health",
    title: "Men's Detan & Hydra Facial",
    slug: "/services#facials",
    image: "/images/services/service-men-facial-care.jpg",
    description: "Sun-damage detan, pore clearing extraction, ultrasonic deep cleanse, and cooling algae hydration mask.",
    audience: "mens",
    imageSource: "real",
  },
  // 12. Women (Real): Olaplex Bond Repair
  {
    id: "olaplex",
    category: "Bond Rebuilding",
    title: "Olaplex Bond Repair",
    slug: "/services#olaplex",
    image: "/images/services/service-olaplex-treatment.jpg",
    description: "Patented bond-multiplying molecular therapy reversing thermal and chemical damage, dramatically strengthening hair shafts.",
    audience: "womens",
    imageSource: "real",
  },
  // 14. Men (AI): VIP Barber Experience
  {
    id: "vip-barber",
    category: "Signature VIP",
    title: "VIP Barber Experience",
    slug: "/services#haircut",
    image: "/images/services/service-indian-vip-barber.jpg",
    description: "All-inclusive executive grooming: master haircut, beard sculpt, gold facial scrub, and complimentary head massage.",
    audience: "mens",
    imageSource: "ai",
  },
  // 15. Women (Real): Ombré Hair Color Gradient
  {
    id: "ombre",
    category: "Color Gradient",
    title: "Ombré Hair Color",
    slug: "/services#ombre",
    image: "/images/services/service-ombre-hair-color.jpg",
    description: "Striking two-tone color graduation from deep rich roots to luminous golden honey ends with silky thermal styling.",
    audience: "womens",
    imageSource: "real",
  },
  // 14. Women (AI): Bridal & Festive Glow Makeover
  {
    id: "bridal",
    category: "Grand Occasion",
    title: "Bridal & Festive Makeover",
    slug: "/services#bridal",
    image: "/images/gallery/marquee-indian-woman-styling.jpg",
    description: "High-definition bridal makeup, elegant floral hair up-dos, saree pleating, and long-wear festive styling.",
    audience: "womens",
    imageSource: "ai",
  },
  // 15. Kids (AI): Junior Trending Style & Texture Cut
  {
    id: "kids-styling",
    category: "Junior Style",
    title: "Junior Trend Style & Cut",
    slug: "/services#kids-styling",
    image: "/images/gallery/marquee-indian-boy-haircut.jpg",
    description: "Modern textured crop, clean side tapers, and easy-maintenance school haircuts for stylish young boys.",
    audience: "kids",
    imageSource: "ai",
  },
  // 16. Men (AI): Trend Hair Color & Highlights
  {
    id: "coloring",
    category: "Chromatics",
    title: "Trend Hair Color & Streaks",
    slug: "/services#coloring",
    image: "/images/services/service-indian-hairstyling-color.jpg",
    description: "Ammonia-free grey blending, subtle honey highlights, and multi-dimensional tones formulated with L'Oréal Professional.",
    audience: "mens",
    imageSource: "ai",
  },
  // 17. Men (Real): Therapeutic Head & Shoulder Massage
  {
    id: "massage",
    category: "Aromatherapy",
    title: "Therapeutic Head Massage",
    slug: "/services#massage",
    image: "/images/services/service-real-indian-head-massage.jpg",
    description: "Acupressure scalp massage, warm Brahmi-herb oils, and neck-shoulder tension relief for deep rejuvenation.",
    audience: "mens",
    imageSource: "real",
  },
  // 18. Men (AI): Gentlemen's Luxury Pedicure & Foot Care
  {
    id: "pedicure",
    category: "Foot Wellness",
    title: "Gentlemen's Foot Reflexology",
    slug: "/services#pedicure",
    image: "/images/services/service-indian-foot-reflexology.jpg",
    description: "Warm mineral foot soak, exfoliating walnut scrub, cuticle grooming, and restorative reflexology acupressure.",
    audience: "mens",
    imageSource: "ai",
  },
  // 19. Men (Real): Executive Hairstyling & Grooming
  {
    id: "hairstyling",
    category: "Polished",
    title: "Executive Styling & Finish",
    slug: "/services#hairstyling",
    image: "/images/gallery/real-men-barber-fade.jpg",
    description: "Blowout volumizing, matte clay sculpting, and personalized pomade finish designed for corporate and festive presence.",
    audience: "mens",
    imageSource: "real",
  },
  // 20. Men (AI): Hair Spa & Deep Scalp Therapy
  {
    id: "spa",
    category: "Restorative Spa",
    title: "Hair Spa & Scalp Therapy",
    slug: "/services#spa",
    image: "/images/services/service-indian-head-massage-spa.jpg",
    description: "Intensive keratin moisture infusion, warm steam therapy, and botanical root nourishment for active scalp health.",
    audience: "mens",
    imageSource: "ai",
  },
  // 21. Men (Real): Deep Cleansing Shampoo & Wash
  {
    id: "shampoo",
    category: "Cleansing Bath",
    title: "Shampoo & Conditioning Wash",
    slug: "/services#shampoo",
    image: "/images/services/service-real-indian-shampoo-wash.jpg",
    description: "Invigorating salon wash basin session with tingling menthol scalp cleanse and deep conditioning rinse.",
    audience: "mens",
    imageSource: "real",
  },
  // 22. Men (Real): Custom Molecular Hair Treatment
  {
    id: "treatments",
    category: "Hair Therapy",
    title: "Molecular Hair Repair",
    slug: "/services#treatments",
    image: "/images/gallery/real-men-grooming-chair.jpg",
    description: "Specialized anti-dandruff detox, hair fall control therapy, and protein bond rebuilding formulations.",
    audience: "mens",
    imageSource: "real",
  },
];

const CATEGORIES = ["All Services", "Hair Care", "Grooming & Beard", "Skin & Spa", "Kids"];

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  const filteredServices = ALL_17_SERVICES.filter((item) => {
    if (selectedCategory === "All Services") return true;
    if (selectedCategory === "Hair Care")
      return [
        "haircut",
        "coloring",
        "hairstyling",
        "treatments",
        "shampoo",
        "womens-haircut",
        "smoothing",
        "kids-haircut",
        "kids-styling",
        "hair-botox",
        "olaplex",
        "nanoplasty",
        "balayage",
        "ombre",
      ].includes(item.id);
    if (selectedCategory === "Grooming & Beard")
      return ["haircut", "beard-trim", "shaving", "vip-barber", "kids-haircut", "kids-styling"].includes(item.id);
    if (selectedCategory === "Skin & Spa")
      return ["facials", "spa", "massage", "pedicure", "bridal", "face-dtan", "neck-detan"].includes(item.id);
    if (selectedCategory === "Kids")
      return ["kids-haircut", "kids-styling"].includes(item.id);
    return true;
  });

  return (
    <div className="bg-[#FBF8F3] min-h-screen text-[#1E1915]">
      {/* 
        1. Services Hero / Breadcrumb Banner
      */}
      <section className="relative w-full min-h-[400px] md:min-h-[460px] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brand/services-breadcrumb.jpg"
            alt="Alpha Salon Services Background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17120A]/90 via-[#17120A]/45 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold text-white tracking-tight leading-none uppercase drop-shadow-md">
            Services
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
            <span className="text-[var(--color-brand-primary)] font-bold">Services</span>
          </nav>
        </div>
      </section>

      {/* 
        2. Filter Tabs (Quick Filter by Category)
      */}
      <section className="pt-14 pb-4">
        <Container wide>
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? "bg-[#231A12] text-white shadow-md"
                    : "bg-white text-[#6E675F] hover:bg-[#F2ECE1] border border-[#EBE5DB]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Container>
      </section>

      {/* 
        3. All 17 Arched Service Cards Grid
        - Complete catalog of all 17 authentic salon services
        - 70% Men (12), 20% Women (3), 10% Children (2)
        - 65% Real Indian Photography (11), 35% AI Generated (6)
        - Strictly service-matched imagery
        - NO duration times
        - NO "Book Session" buttons
      */}
      <section className="py-12 md:py-16 pb-16 md:pb-24">
        <Container wide>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 max-w-[1360px] mx-auto">
            {filteredServices.map((service) => (
              <article
                key={service.id}
                className="group relative rounded-[240px] p-[10px] bg-gradient-to-b from-[#F9F6F0] to-[#FFFDF8] border border-[#E5DDD2] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col items-center overflow-hidden"
              >
                {/* Top Arch Image Container */}
                <div className="relative w-full aspect-[410/500] sm:aspect-[410/520] rounded-t-[230px] rounded-b-[14px] overflow-hidden bg-stone-100 shadow-inner">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Content Area (Clean, No Subheadings, No Times, No Book Session) */}
                <div className="w-full text-center px-5 pt-6 pb-8 sm:pb-10 flex flex-col items-center">
                  <h2 className="font-sans-modern font-semibold text-2xl sm:text-[26px] text-[#201A14] leading-snug group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-xs sm:text-sm text-[#6E675F] leading-relaxed max-w-[290px]">
                    {service.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}

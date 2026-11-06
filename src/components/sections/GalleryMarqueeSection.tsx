"use client";

import Image from "next/image";

interface MarqueeItem {
  id: string;
  image: string;
  alt: string;
  category: "mens" | "womens" | "kids";
  sourceType: "real" | "portrait";
  width: number;
  height: number;
}

// Exactly balanced 10 items total: 60% Men (6), 10% Boy Child (1), 30% Women (3)
// Blended mix of real photography (downloaded / real salon floor) + Indian styling portraits
// Row 1: Moves left (RTL slide direction), bottom-aligned (items-end)
const ROW_1_ITEMS: MarqueeItem[] = [
  {
    id: "r1-1",
    category: "mens",
    sourceType: "real",
    image: "/images/gallery/real-men-haircut-fade.jpg",
    alt: "Precision clipper and comb taper fade haircut in barbershop",
    width: 440,
    height: 280,
  },
  {
    id: "r1-2",
    category: "womens",
    sourceType: "real",
    image: "/images/gallery/gallery-1.jpg",
    alt: "Professional salon styling and curls by experienced hairdresser",
    width: 400,
    height: 250,
  },
  {
    id: "r1-3",
    category: "mens",
    sourceType: "real",
    image: "/images/gallery/real-barber-session.jpg",
    alt: "Master barber precision beard trim and shear shaping session",
    width: 460,
    height: 290,
  },
  {
    id: "r1-4",
    category: "kids",
    sourceType: "real",
    image: "/images/gallery/real-kid-haircut.jpg",
    alt: "Young boy child receiving neat haircut in barber chair",
    width: 380,
    height: 270,
  },
  {
    id: "r1-5",
    category: "mens",
    sourceType: "portrait",
    image: "/images/services/service-indian-hairstyling-color.jpg",
    alt: "Executive modern hairstyle and subtle color highlights",
    width: 440,
    height: 280,
  },
];

// Row 2: Moves right (LTR slide direction), top-aligned (items-start)
const ROW_2_ITEMS: MarqueeItem[] = [
  {
    id: "r2-1",
    category: "womens",
    sourceType: "real",
    image: "/images/gallery/real-woman-haircut.jpg",
    alt: "Relaxing hair wash basin lather and scalp massage treatment",
    width: 420,
    height: 270,
  },
  {
    id: "r2-2",
    category: "mens",
    sourceType: "real",
    image: "/images/salon/alpha-stylist-work.png",
    alt: "Real hairdressing floor and styling stations at Alpha Unisex Salon",
    width: 480,
    height: 300,
  },
  {
    id: "r2-3",
    category: "womens",
    sourceType: "portrait",
    image: "/images/gallery/marquee-indian-woman-styling.jpg",
    alt: "Voluminous vanity blowout styling on Indian woman",
    width: 390,
    height: 250,
  },
  {
    id: "r2-4",
    category: "mens",
    sourceType: "portrait",
    image: "/images/services/service-indian-haircut-fade.jpg",
    alt: "Sharp taper fade haircut and styling on Indian gentleman",
    width: 440,
    height: 280,
  },
  {
    id: "r2-5",
    category: "mens",
    sourceType: "portrait",
    image: "/images/services/service-indian-beard-sculpt.jpg",
    alt: "Detailed beard contouring and grooming finish",
    width: 450,
    height: 280,
  },
];

export function GalleryMarqueeSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#FBF8F3] py-8 sm:py-12 select-none">
      {/* Dynamic Keyframes for seamless infinite smooth marquee */}
      <style jsx global>{`
        @keyframes marquee-scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes marquee-scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-marquee-left {
          display: flex;
          width: max-content;
          animation: marquee-scroll-left 45s linear infinite;
        }

        .animate-marquee-right {
          display: flex;
          width: max-content;
          animation: marquee-scroll-right 45s linear infinite;
        }

        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="marquee-container flex flex-col gap-6 sm:gap-8">
        {/* ROW 1: Moves Left, bottom-aligned (items-end) */}
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee-left flex items-end gap-5 sm:gap-7 pr-5 sm:pr-7">
            {/* Render duplicate sets to guarantee ultra-wide monitor seamless wrapping */}
            {[...ROW_1_ITEMS, ...ROW_1_ITEMS, ...ROW_1_ITEMS].map((item, idx) => (
              <div
                key={`r1-${idx}`}
                className="group relative shrink-0 overflow-hidden rounded-[16px] sm:rounded-[20px] shadow-md shadow-stone-900/[0.04] border border-black/[0.04] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl bg-stone-200"
                style={{
                  width: `${item.width}px`,
                  height: `${item.height}px`,
                  maxWidth: "85vw",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 85vw, 480px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves Right, top-aligned (items-start) */}
        <div className="relative flex overflow-hidden">
          <div className="animate-marquee-right flex items-start gap-5 sm:gap-7 pr-5 sm:pr-7">
            {/* Render duplicate sets to guarantee ultra-wide monitor seamless wrapping */}
            {[...ROW_2_ITEMS, ...ROW_2_ITEMS, ...ROW_2_ITEMS].map((item, idx) => (
              <div
                key={`r2-${idx}`}
                className="group relative shrink-0 overflow-hidden rounded-[16px] sm:rounded-[20px] shadow-md shadow-stone-900/[0.04] border border-black/[0.04] transition-all duration-500 hover:scale-[1.02] hover:shadow-xl bg-stone-200"
                style={{
                  width: `${item.width}px`,
                  height: `${item.height}px`,
                  maxWidth: "85vw",
                }}
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 85vw, 480px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

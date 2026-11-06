"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

// Bespoke Luxury Vector SVG Icon Component (Zero Emojis)
const BranchIcon: React.FC<{ name: string; className?: string }> = ({ name, className = "w-4 h-4" }) => {
  switch (name) {
    case "crown":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
        </svg>
      );
    case "scissors":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="6" cy="6" r="3" />
          <circle cx="6" cy="18" r="3" />
          <line x1="20" y1="4" x2="8.12" y2="15.88" />
          <line x1="14.47" y1="14.48" x2="20" y2="20" />
          <line x1="8.12" y1="8.12" x2="12" y2="12" />
        </svg>
      );
    case "razor":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 3h10v4H7z" />
          <path d="M12 7v7" />
          <path d="M9 14h6v7H9z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z" />
        </svg>
      );
    case "lotus":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9Z" />
          <path d="M12 3c3 5 3 13 0 18" />
          <path d="M12 3c-3 5-3 13 0 18" />
        </svg>
      );
    case "barber":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="8" height="16" x="8" y="4" rx="2" />
          <path d="m8 8 8 4" />
          <path d="m8 12 8 4" />
          <line x1="12" y1="2" x2="12" y2="4" />
          <line x1="12" y1="20" x2="12" y2="22" />
        </svg>
      );
    case "wellness":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        </svg>
      );
    case "map":
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
          <line x1="9" y1="3" x2="9" y2="18" />
          <line x1="15" y1="6" x2="15" y2="21" />
        </svg>
      );
  }
};

// Raw SVG strings for Leaflet Pin injection
const getPinSvgMarkup = (iconName: string) => {
  const strokeColor = "#C5A880";
  switch (iconName) {
    case "crown":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/></svg>`;
    case "scissors":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><line x1="20" y1="4" x2="8.12" y2="15.88"/><line x1="14.47" y1="14.48" x2="20" y2="20"/><line x1="8.12" y1="8.12" x2="12" y2="12"/></svg>`;
    case "razor":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 3h10v4H7z"/><path d="M12 7v7"/><path d="M9 14h6v7H9z"/></svg>`;
    case "sparkle":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3z"/></svg>`;
    case "lotus":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 21a9 9 0 0 0 9-9c0-4.97-4.03-9-9-9s-9 4.03-9 9a9 9 0 0 0 9 9Z"/><path d="M12 3c3 5 3 13 0 18"/><path d="M12 3c-3 5-3 13 0 18"/></svg>`;
    case "barber":
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="16" x="8" y="4" rx="2"/><path d="m8 8 8 4"/><path d="m8 12 8 4"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/></svg>`;
    case "wellness":
    default:
      return `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`;
  }
};

interface BranchInfo {
  id: string;
  name: string;
  shortName: string;
  type: string;
  iconName: string;
  isFlagship?: boolean;
  address: string;
  area: string;
  phone: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
  image: string;
  features: string[];
  mapUrl?: string;
}

// All 8 Official Chennai Branches with vector icon keys
const SALON_BRANCHES: BranchInfo[] = [
  {
    id: "chromepet",
    name: "Chromepet Branch",
    shortName: "Chromepet",
    type: "Unisex Salon & Luxury Spa",
    iconName: "crown",
    isFlagship: false,
    address: "No. 70, Nemilichery High Road, Subash Nagar, Bharathipuram, Chromepet, Chennai 600044",
    area: "Chromepet / GST Road",
    phone: "+91 81227 17723",
    email: "alphahairandbeautyunisexsaloon@gmail.com",
    hours: "Mon – Sat: 9:00 AM – 9:00 PM | Sun: 9:00 AM – 8:00 PM",
    lat: 12.9516,
    lng: 80.1462,
    image: "/images/brand/branch-1.jpg",
    features: ["VIP Grooming Lounge", "14 Master Styling Stations", "Dedicated Spa Suite", "Free Valet Parking"],
  },
  {
    id: "s-kolathur",
    name: "S. Kolathur Branch",
    shortName: "S. Kolathur",
    type: "Unisex Salon & Hair Spa",
    iconName: "scissors",
    address: "No. 4/555, Viduthalai Nagar, S. Kolathur Main Rd, (Opposite Himayam School), Kovilambakkam, Chennai 600129",
    area: "S. Kolathur / Kovilambakkam",
    phone: "+91 95001 52738",
    email: "alphahairandbeautyunisexsaloon@gmail.com",
    hours: "Mon – Sat: 9:00 AM – 9:00 PM | Sun: 9:00 AM – 8:00 PM",
    lat: 12.9463,
    lng: 80.1912,
    image: "/images/about/alpha-real-styling-stations.jpg",
    features: ["Master Haircuts & Fades", "Beard Sculpting", "Scalp Detox", "Air-Conditioned Stations"],
  },
  {
    id: "keelkattalai",
    name: "Keelkattalai Branch",
    shortName: "Keelkattalai",
    type: "Precision Hair & Skin Studio",
    iconName: "razor",
    address: "Medavakkam Main Road, Near Eachangadu Junction, Keelkattalai, Chennai 600117",
    area: "Keelkattalai Junction",
    phone: "+91 95001 52739",
    email: "alphahairandbeautyunisexsaloon@gmail.com",
    hours: "Mon – Sat: 9:00 AM – 9:00 PM | Sun: 9:00 AM – 8:00 PM",
    lat: 12.9555,
    lng: 80.1835,
    image: "/images/brand/branch-2.jpg",
    features: ["Master Haircuts & Fades", "Beard Sculpting", "Hydra Facials", "Unisex Private Booths"],
  },
  {
    id: "madipakkam",
    name: "Madipakkam Branch",
    shortName: "Madipakkam",
    type: "Family & Trend Styling Studio",
    iconName: "sparkle",
    address: "Bazaar Main Road, Near Koot Road Signal, Madipakkam, Chennai 600091",
    area: "Madipakkam Koot Road",
    phone: "+91 95001 52783",
    email: "alphahairandbeautyunisexsaloon@gmail.com",
    hours: "Mon – Sat: 9:00 AM – 9:00 PM | Sun: 9:00 AM – 8:00 PM",
    lat: 12.9647,
    lng: 80.1960,
    image: "/images/about/alpha-real-salon-lounge.jpg",
    features: ["Balayage & Hair Color", "Keratin Smoothing", "Kids Haircut Station", "Full Air-Conditioned"],
  },
  {
    id: "mannivakkam",
    name: "Mannivakkam Branch",
    shortName: "Mannivakkam",
    type: "Family & Bridal Studio",
    iconName: "lotus",
    address: "Mannivakkam Main Road, Near Junction & Bus Stop, Chennai 600048",
    area: "Mannivakkam / Vandalur",
    phone: "+91 81227 17724",
    email: "alphahairandbeautyunisexsaloon@gmail.com",
    hours: "Mon – Sat: 9:00 AM – 9:00 PM | Sun: 9:00 AM – 8:00 PM",
    lat: 12.8950,
    lng: 80.0520,
    image: "/images/brand/branch-3.jpg",
    features: ["Bridal Makeover Room", "Traditional Hot Towel Shave", "Scalp Detox Spa", "Senior Stylists"],
  },
  {
    id: "pallavaram",
    name: "Pallavaram Branch",
    shortName: "Pallavaram",
    type: "Executive Barber & Hair Studio",
    iconName: "barber",
    address: "Old Pallavaram High Road, Near Cantonment Board, Pallavaram, Chennai 600117",
    area: "Old Pallavaram",
    phone: "+91 81263 36859",
    email: "alphahairandbeautyunisexsaloon@gmail.com",
    hours: "Mon – Sat: 9:00 AM – 9:00 PM | Sun: 9:00 AM – 8:00 PM",
    lat: 12.9675,
    lng: 80.1491,
    image: "/images/services/service-barber-chairs-lounge.jpg",
    features: ["Clipper Taper Fade", "Razor Beard Line-up", "Men Detan Facial", "Quick Walk-in Service"],
  },
  {
    id: "medavakkam",
    name: "Medavakkam Branch",
    shortName: "Medavakkam",
    type: "Hair Spa & Aesthetic Care",
    iconName: "wellness",
    address: "Velachery – Tambaram Main Road, Medavakkam Junction, Chennai 600100",
    area: "Medavakkam Junction",
    phone: "+91 95001 52784",
    email: "alphahairandbeautyunisexsaloon@gmail.com",
    hours: "Mon – Sat: 9:00 AM – 9:00 PM | Sun: 9:00 AM – 8:00 PM",
    lat: 12.9185,
    lng: 80.1910,
    image: "/images/about/about-luxury-salon.jpg",
    features: ["Foot Reflexology Lounge", "Aromatherapy Head Massage", "Organic Hair Spa", "L'Oréal Products"],
  },
  {
    id: "a-glam",
    name: "A Glam Unisex Salon",
    shortName: "A Glam",
    type: "Unisex Salon & Beauty Studio",
    iconName: "crown",
    address: "No. 86, 5th Street, Perumal Nagar, Old Pallavaram, Chennai 600117 (Near Arul Murugan Tower)",
    area: "Old Pallavaram",
    phone: "+91 81227 17723",
    email: "alphahairandbeautyunisexsaloon@gmail.com",
    hours: "Mon – Sat: 9:00 AM – 9:00 PM | Sun: 9:00 AM – 8:00 PM",
    lat: 12.9585,
    lng: 80.1650,
    mapUrl: "https://share.google/91092rM7lzYN9Z7Lg",
    image: "/images/about/about-luxury-salon.jpg",
    features: ["Master Haircuts & Fades", "Keratin & Nanoplasty", "Face & Neck D-Tan", "Bridal & Party Makeover"],
  },
];

export default function BranchesPage() {
  const [activeBranchId, setActiveBranchId] = useState<string>("all");
  const [mapLoaded, setMapLoaded] = useState(false);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<{ [key: string]: any }>({});
  const groupRef = useRef<any>(null);

  // Initialize interactive Leaflet Map with all 7 vector pin markers
  useEffect(() => {
    if (typeof window === "undefined") return;

    // 1. Inject Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    // 2. Load Leaflet JS
    const initLeafletMap = () => {
      const L = (window as any).L;
      if (!L || !mapContainerRef.current) return;

      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }

      // Initialize map centered around South Chennai
      const map = L.map(mapContainerRef.current, {
        center: [12.945, 80.170],
        zoom: 12,
        scrollWheelZoom: false,
      });
      mapInstanceRef.current = map;

      // Add official OpenStreetMap tiles (100% free, no API key required)
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(map);

      // Create Custom Pins with Clean Vector SVGs for All 7 Branches
      markersRef.current = {};
      const markerList: any[] = [];

      SALON_BRANCHES.forEach((branch) => {
        const pinSvg = getPinSvgMarkup(branch.iconName);

        const pinHtml = `
          <div class="salon-marker-wrapper group">
            <div class="salon-marker-pin">
              <div class="salon-marker-icon-box">
                ${pinSvg}
              </div>
            </div>
            <div class="salon-marker-arrow"></div>
            <div class="salon-marker-tag">
              ${branch.shortName}
            </div>
          </div>
        `;

        const customIcon = L.divIcon({
          className: "custom-salon-div-icon",
          html: pinHtml,
          iconSize: [86, 62],
          iconAnchor: [43, 44],
          popupAnchor: [0, -44],
        });

        const marker = L.marker([branch.lat, branch.lng], { icon: customIcon }).addTo(map);

        const popupContent = `
          <div style="font-family: inherit; padding: 6px 4px; min-width: 240px; max-width: 280px;">
            <div style="display:flex; align-items:center; gap:6px; margin-bottom: 6px;">
              <span style="background: #23170F; color: #C5A880; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 12px; text-transform: uppercase; letter-spacing: 0.05em;">
                Chennai Studio
              </span>
            </div>
            <h4 style="margin: 0 0 4px; font-size: 16px; font-weight: 700; color: #1C120C; line-height: 1.25;">
              ${branch.name}
            </h4>
            <p style="margin: 0 0 8px; font-size: 12px; color: #6E6155; line-height: 1.4;">
              ${branch.address}
            </p>
            <div style="margin-bottom: 10px; font-size: 12px; font-weight: 700; color: #1C120C;">
              📞 <a href="tel:${branch.phone}" style="color: #452B1A; text-decoration: none;">${branch.phone}</a>
            </div>
            <a 
              href="${branch.mapUrl || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(branch.address)}`}" 
              target="_blank" 
              rel="noopener noreferrer" 
              style="display: block; width: 100%; text-align: center; background: #1C120C; color: #C5A880; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; padding: 8px 14px; border-radius: 20px; text-decoration: none; box-shadow: 0 2px 8px rgba(0,0,0,0.2);"
            >
              Get Directions on Google Maps ↗
            </a>
          </div>
        `;

        marker.bindPopup(popupContent, {
          closeButton: true,
          offset: [0, -8],
        });

        marker.on("click", () => {
          setActiveBranchId(branch.id);
        });

        markersRef.current[branch.id] = marker;
        markerList.push(marker);
      });

      // Fit map bounds: on mobile, zoom into the primary Chennai cluster (Image 2 style) so pins don't cluster; on desktop encompass all 7
      const group = L.featureGroup(markerList);
      groupRef.current = group;

      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        // Zoomed in closer on mobile so Chromepet, Pallavaram, Keelkattalai, Madipakkam, S. Kolathur, Medavakkam are beautifully spaced
        map.setView([12.946, 80.172], 13);
      } else {
        map.fitBounds(group.getBounds().pad(0.12));
      }

      setMapLoaded(true);
    };

    if (!(window as any).L) {
      const script = document.createElement("script");
      script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
      script.async = true;
      script.onload = () => initLeafletMap();
      document.head.appendChild(script);
    } else {
      initLeafletMap();
    }

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Handle branch selector click
  const selectBranch = (branchId: string) => {
    setActiveBranchId(branchId);
    const map = mapInstanceRef.current;
    if (!map) return;

    if (branchId === "all") {
      const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
      if (isMobile) {
        map.flyTo([12.946, 80.172], 13, { duration: 1.0 });
      } else if (groupRef.current) {
        map.fitBounds(groupRef.current.getBounds().pad(0.12));
      }
    } else {
      const branch = SALON_BRANCHES.find((b) => b.id === branchId);
      if (branch) {
        map.flyTo([branch.lat, branch.lng], 15, { duration: 1.2 });
        const marker = markersRef.current[branchId];
        if (marker) {
          marker.openPopup();
        }
      }
    }
  };

  return (
    <div className="bg-[#FBF8F3] min-h-screen text-[#1E1915]">
      {/* Dynamic Marker Styles */}
      <style jsx global>{`
        .leaflet-tile-pane {
          filter: saturate(0.92) contrast(1.02);
        }

        .custom-salon-div-icon {
          background: transparent !important;
          border: none !important;
        }

        .salon-marker-wrapper {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .salon-marker-wrapper:hover {
          transform: translateY(-4px) scale(1.08);
          z-index: 1000 !important;
        }

        .salon-marker-pin {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          background: linear-gradient(135deg, #1C120C 0%, #3D2617 100%);
          border: 2px solid #C5A880;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(28, 18, 12, 0.45);
        }

        .salon-marker-icon-box {
          display: flex;
          align-items: center;
          justify-content: center;
          color: #C5A880;
        }

        .salon-marker-arrow {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-top: 7px solid #C5A880;
          margin-top: -1px;
        }

        .salon-marker-tag {
          margin-top: 3px;
          background: #1C120C;
          color: #FBF8F3;
          font-size: 10px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 10px;
          border: 1px solid rgba(197, 168, 128, 0.6);
          white-space: nowrap;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.35);
          letter-spacing: 0.02em;
        }
      `}</style>

      {/* 
        1. Hero Banner
      */}
      <section className="relative w-full min-h-[380px] md:min-h-[460px] flex items-center justify-center overflow-hidden pt-28 pb-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/brand/services-breadcrumb.jpg"
            alt="Salon Branches Background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#17120A]/90 via-[#17120A]/40 to-transparent" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
          <h1 className="font-heading text-5xl sm:text-7xl md:text-8xl lg:text-[96px] font-bold text-white tracking-tight leading-none uppercase drop-shadow-md">
            Our Branches
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
            <span className="text-[var(--color-brand-primary)] font-bold">Branches</span>
          </nav>
        </div>
      </section>

      {/* 
        2. ALL 8 LOCATIONS INTERACTIVE MAP HUB (Main Highlight)
      */}
      <section id="salon-map-section" className="py-16 md:py-24">
        <Container wide>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto px-4 mb-10 sm:mb-12 space-y-3">
            <span className="text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase text-[var(--color-brand-primary)] block">
              ✦ Chennai Branch Network
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-[#201A14] font-bold tracking-tight">
              All 8 Salon Locations in Chennai
            </h2>
            <p className="text-sm sm:text-base text-[#6E675F] leading-relaxed">
              Explore our 8 dedicated studios across Chennai. Click any location pin on the map to view direct directions, studio highlights, and contact reception.
            </p>
          </div>

          {/* Interactive Branch Filter Pills (Using Clean Vector SVG Icons) */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8 max-w-5xl mx-auto px-4">
            <button
              onClick={() => selectBranch("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                activeBranchId === "all"
                  ? "bg-[#1C120C] text-[#C5A880] shadow-md scale-105"
                  : "bg-white text-[#6E675F] hover:bg-[#F2ECE1] border border-[#E5DDD2]"
              }`}
            >
              <BranchIcon name="map" className="w-3.5 h-3.5" />
              <span>All 8 Locations</span>
            </button>

            {SALON_BRANCHES.map((b) => (
              <button
                key={b.id}
                onClick={() => selectBranch(b.id)}
                className={`px-3.5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 ${
                  activeBranchId === b.id
                    ? "bg-[#1C120C] text-[#C5A880] shadow-md scale-105 border border-[#C5A880]"
                    : "bg-white text-[#6E675F] hover:bg-[#F2ECE1] border border-[#E5DDD2]"
                }`}
              >
                <BranchIcon name={b.iconName} className="w-3.5 h-3.5" />
                <span>{b.shortName}</span>
              </button>
            ))}
          </div>

          {/* Map Container with Luxury Frame */}
          <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden border border-[#E5DDD2] shadow-2xl bg-[#EBE5DB]">
            <div
              ref={mapContainerRef}
              className="w-full h-[520px] sm:h-[600px] lg:h-[640px] z-10"
            />

            {!mapLoaded && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#FBF8F3]/80 backdrop-blur-sm">
                <div className="w-12 h-12 border-4 border-[#C5A880] border-t-transparent rounded-full animate-spin mb-3" />
                <p className="text-sm font-semibold text-[#1C120C]">Loading 8 Chennai Salon Pins...</p>
              </div>
            )}

            {/* Quick Map Legend Badge (Floating Top Right with Vector SVGs) */}
            <div className="absolute top-4 right-4 z-20 hidden sm:flex items-center gap-2.5 bg-[#1C120C]/90 backdrop-blur-md px-4 py-2 rounded-full border border-[#C5A880]/40 text-xs text-[#EDE5DC] shadow-lg pointer-events-none">
              <span className="flex items-center gap-1.5 text-[11px] font-semibold text-[#C5A880]">
                <BranchIcon name="scissors" className="w-3.5 h-3.5" /> All 8 Branches
              </span>
              <span className="text-white/30">•</span>
              <span className="text-white/90 font-medium text-[11px]">Chennai</span>
              <span className="text-white/30">•</span>
              <span className="text-[#C5A880] font-bold text-[11px]">8 Pinned</span>
            </div>
          </div>
        </Container>
      </section>

      {/* 
        3. ALL 8 BRANCHES DETAILED CARDS GRID
      */}
      <section className="pb-24 pt-4">
        <Container wide>
          <div className="text-center max-w-2xl mx-auto px-4 mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#8C643E] font-bold block">
              ✦ Studio Directory
            </span>
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl text-[#1C120C] font-bold">
              Explore Each Salon Studio
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 max-w-[1360px] mx-auto">
            {SALON_BRANCHES.map((branch) => {
              const isSelected = activeBranchId === branch.id;

              return (
                <article
                  key={branch.id}
                  className={`group relative rounded-[28px] overflow-hidden bg-white border transition-all duration-500 hover:-translate-y-2 hover:shadow-xl flex flex-col ${
                    isSelected
                      ? "border-[#C5A880] ring-4 ring-[#C5A880]/20 shadow-xl"
                      : "border-[#E5DDD2] shadow-sm hover:border-[#C5A880]/60"
                  }`}
                >
                  {/* Photo Header */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-stone-100">
                    <Image
                      src={branch.image}
                      alt={branch.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Vector Icon */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      <span className="w-9 h-9 rounded-full bg-[#1C120C]/90 text-[#C5A880] border border-[#C5A880]/60 flex items-center justify-center text-sm shadow-md">
                        <BranchIcon name={branch.iconName} className="w-4 h-4 text-[#C5A880]" />
                      </span>
                    </div>

                    <span className="absolute bottom-3 left-4 text-white font-bold text-xs uppercase tracking-wider drop-shadow-md">
                      {branch.area}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h4 className="font-heading text-xl font-bold text-[#1C120C] group-hover:text-[var(--color-brand-primary)] transition-colors">
                        {branch.name}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#6E6155] leading-relaxed pt-1">
                        {branch.address}
                      </p>
                    </div>

                    {/* Feature Chips */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {branch.features.map((feat, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-full bg-[#F5EFE6] text-[#452B1A] text-[11px] font-medium"
                        >
                          {feat}
                        </span>
                      ))}
                    </div>

                    {/* Contact & Map Action Buttons */}
                    <div className="pt-3 border-t border-[#EFE8DF] space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-[#8E7E72]">Reception:</span>
                        <a
                          href={`tel:${branch.phone}`}
                          className="text-[#1C120C] hover:text-[#C5A880] font-bold transition-colors"
                        >
                          {branch.phone}
                        </a>
                      </div>

                      <div className="pt-2 flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() => {
                            selectBranch(branch.id);
                            const mapElem = document.getElementById("salon-map-section");
                            mapElem?.scrollIntoView({ behavior: "smooth" });
                          }}
                          className="flex-1 py-2 rounded-full bg-[#F2ECE1] hover:bg-[#1C120C] hover:text-[#C5A880] text-[#1C120C] text-[11px] font-bold uppercase tracking-wider transition-all duration-300 text-center"
                        >
                          Locate Pin &rarr;
                        </button>
                        <a
                          href={branch.mapUrl || `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(branch.address)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 py-2 rounded-full bg-[#1C120C] hover:bg-[#3D2617] text-[#C5A880] text-[11px] font-bold uppercase tracking-wider transition-all duration-300 text-center shadow-sm"
                        >
                          Directions ↗
                        </a>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-50 py-4 sm:py-6 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <Container wide>
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] rounded-lg p-1"
              aria-label={SITE_CONFIG.name}
            >
              <div className="relative w-11 h-11 sm:w-13 sm:h-13 rounded-full overflow-hidden border border-[var(--color-brand-primary)] group-hover:scale-105 transition-transform duration-300 bg-[#3d2417] shadow-md shrink-0">
                <Image
                  src="/images/brand/alpha-official-logo.jpg"
                  alt={SITE_CONFIG.logo.alt}
                  fill
                  sizes="52px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-sans-modern font-bold text-base sm:text-lg md:text-xl tracking-wider uppercase text-white group-hover:text-[var(--color-brand-primary)] transition-colors duration-300">
                  Alpha
                </span>
                <span className="text-[9px] sm:text-[10px] md:text-xs tracking-widest uppercase text-[var(--color-brand-primary)] font-semibold">
                  Hair & Beauty Unisex Salon
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav
              className="hidden md:flex items-center gap-8"
              aria-label="Main Navigation"
            >
              <ul className="flex items-center gap-8">
                {MAIN_NAVIGATION.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={`text-sm uppercase tracking-widest font-semibold py-2 relative transition-colors duration-200 focus:outline-none focus-visible:text-[var(--color-brand-primary)] ${
                          isActive
                            ? "text-[var(--color-brand-primary)] font-bold"
                            : "text-white/90 hover:text-[var(--color-brand-primary)]"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        {item.label}
                        {isActive && (
                          <span
                            className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-brand-primary)] rounded-full animate-in fade-in duration-300"
                            aria-hidden="true"
                          />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Header Right Action & Mobile Hamburger */}
            <div className="flex items-center gap-4">
              <div className="hidden lg:block">
                <Button href="/contact" size="sm" variant="primary">
                  Contact Salon
                </Button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMobileMenuOpen(true);
                }}
                className="md:hidden flex flex-col justify-center items-center w-11 h-11 rounded-full border border-white/20 bg-black/60 text-white hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] active:scale-95 focus:outline-none transition-all duration-200 cursor-pointer shadow-lg relative z-50"
                aria-label="Open mobile navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                <span className="w-5 h-[2px] bg-current rounded-full transition-all duration-300" />
                <span className="w-5 h-[2px] bg-current rounded-full my-1 transition-all duration-300" />
                <span className="w-3.5 h-[2px] bg-current rounded-full transition-all duration-300 self-start ml-3" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};


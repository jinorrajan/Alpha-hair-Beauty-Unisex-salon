"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MAIN_NAVIGATION } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const drawerRef = useRef<HTMLDivElement>(null);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // Close on route change (only when pathname changes after mount)
  const isMountedRef = useRef(false);
  useEffect(() => {
    if (!isMountedRef.current) {
      isMountedRef.current = true;
      return;
    }
    onClose();
  }, [pathname]);

  return (
    <>
      {/* Backdrop Overlay */}
      <div
        className={`fixed inset-0 z-[999] bg-black/75 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over Drawer (Right Aligned per Omila architecture) */}
      <aside
        ref={drawerRef}
        className={`fixed top-0 right-0 bottom-0 z-[1000] w-full max-w-xs sm:max-w-sm bg-[#FBF9F5] border-l border-[#EBE5DB] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile Navigation Menu"
        aria-modal="true"
        role="dialog"
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-3">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[var(--color-border)] bg-[#3d2417] shadow-xs shrink-0">
              <Image
                src="/images/brand/alpha-official-logo.jpg"
                alt={SITE_CONFIG.logo.alt}
                fill
                sizes="44px"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading font-bold text-base tracking-wider uppercase text-[var(--color-text)]">
                Alpha
              </span>
              <span className="text-[9px] tracking-widest uppercase text-[var(--color-brand-primary)] font-semibold">
                Unisex Salon
              </span>
            </div>
          </div>

          {/* Close Trigger */}
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full flex items-center justify-center border border-[var(--color-border)] text-[var(--color-text)] hover:text-[var(--color-brand-primary)] hover:border-[var(--color-brand-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-primary)] transition-all duration-200"
            aria-label="Close navigation menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6 flex-1 overflow-y-auto">
          <ul className="flex flex-col space-y-4">
            {MAIN_NAVIGATION.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={`block py-3 px-4 rounded-xl text-base uppercase tracking-widest font-medium transition-all duration-200 ${
                      isActive
                        ? "bg-[var(--color-surface-hover)] text-[var(--color-brand-primary)] border-l-4 border-[var(--color-brand-primary)] font-semibold pl-6"
                        : "text-[var(--color-text)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-surface-hover)]"
                    }`}
                    style={{
                      transitionDelay: isOpen ? `${index * 40}ms` : "0ms",
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Drawer Footer Actions */}
        <div className="p-6 border-t border-[var(--color-border-subtle)] bg-[var(--color-background)]">
          <Button href="/contact" variant="primary" className="w-full justify-center">
            Contact Salon
          </Button>
          <div className="mt-4 text-center">
            <p className="text-xs text-[var(--color-text-muted)]">
              Personalized Hair, Beauty & Grooming
            </p>
          </div>
        </div>
      </aside>
    </>
  );
};


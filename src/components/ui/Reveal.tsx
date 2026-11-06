"use client";

import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
  direction?: "up" | "left" | "right" | "none";
  delayMs?: number;
  className?: string;
  children: React.ReactNode;
}

export const Reveal: React.FC<RevealProps> = ({
  direction = "up",
  delayMs = 0,
  className = "",
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user's reduced-motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setTimeout(() => setIsVisible(true), 0);
      return () => clearTimeout(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const getTransformClasses = () => {
    if (isVisible) return "translate-x-0 translate-y-0 opacity-100";

    switch (direction) {
      case "up":
        return "translate-y-16 opacity-0";
      case "left":
        return "translate-x-16 opacity-0";
      case "right":
        return "-translate-x-16 opacity-0";
      case "none":
        return "opacity-0";
    }
  };

  return (
    <div
      ref={ref}
      style={{
        transitionDuration: "800ms",
        transitionDelay: `${delayMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
      }}
      className={`transition-all will-change-[transform,opacity] ${getTransformClasses()} ${className}`}
    >
      {children}
    </div>
  );
};

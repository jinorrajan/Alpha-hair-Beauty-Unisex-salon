import React from "react";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  const alignClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align]} ${className}`}>
      {badge && (
        <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[var(--color-brand-primary)] mb-3">
          {badge}
        </span>
      )}
      <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[var(--color-text)] tracking-tight leading-[1.08] font-semibold">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed font-sans-clean font-light">
          {subtitle}
        </p>
      )}
    </div>
  );
};


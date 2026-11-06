import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  href,
  external = false,
  className = "",
  children,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-medium tracking-wide transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs uppercase tracking-wider",
    md: "px-6 py-3 text-sm uppercase tracking-wider",
    lg: "px-8 py-4 text-base uppercase tracking-wider",
  };

  const variantStyles = {
    primary:
      "bg-[var(--color-brand-primary)] text-white hover:bg-[var(--color-brand-secondary)] hover:text-white focus-visible:ring-[var(--color-brand-primary)] shadow-[var(--shadow-gold)]",
    secondary:
      "bg-[var(--color-brand-secondary)] text-white hover:bg-[var(--color-brand-primary)] hover:text-white focus-visible:ring-[var(--color-brand-secondary)]",
    outline:
      "border border-[var(--color-border)] text-[var(--color-text)] hover:border-[var(--color-brand-primary)] hover:text-[var(--color-brand-primary)] hover:bg-[var(--color-surface)] focus-visible:ring-[var(--color-brand-primary)]",
    accent:
      "bg-[var(--color-brand-accent)] text-white hover:bg-[var(--color-brand-accent-hover)] focus-visible:ring-[var(--color-brand-accent)]",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedStyles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedStyles} {...props}>
      {children}
    </button>
  );
};


# Alpha Hair & Beauty Unisex Salon — Design System & Architecture

## 1. Brand Color System (Derived from Official Logo)

The brand color palette was extracted and refined from the official **Alpha Hair & Beauty Unisex Salon** logo:
- **Logo Visual Anatomy**:
  - Outer ring: **Gold / Warm Amber** (`#C8A45D`)
  - Center graphic: **Man profile in Crimson Red** (`#D32F2F`) & **Woman profile in Obsidian Black** (`#121212`)
  - Interior background: **Parchment Cream / Soft Beige** (`#F4EAD4`)
  - Highlighting: **Crisp White** (`#FFFFFF`)

### Centralized CSS Custom Properties (`src/app/globals.css`)
```css
:root {
  /* Brand Core */
  --color-brand-primary: #C8A45D;        /* Metallic Warm Salon Gold */
  --color-brand-primary-hover: #D8B772;  /* Light Gold Accent */
  --color-brand-secondary: #121212;      /* Rich Charcoal / Obsidian */
  --color-brand-secondary-hover: #1E1E1E;
  --color-brand-accent: #D32F2F;         /* Signature Logo Crimson Red */
  --color-brand-accent-hover: #B71C1C;
  --color-brand-beige: #F4EAD4;          /* Warm Champagne Beige */

  /* Surface & Base */
  --color-background: #0B0B0B;           /* Deep Luxury Dark Theme */
  --color-surface: #141414;              /* Elevated Card Surface */
  --color-surface-hover: #1C1C1C;
  --color-surface-translucent: rgba(20, 20, 20, 0.75);
  --color-surface-glass: rgba(255, 255, 255, 0.05);

  /* Typography */
  --color-text: #F7F5F0;                 /* Soft Off-White for High Contrast */
  --color-text-muted: #A39E93;           /* Warm Muted Gray */
  --color-text-dark: #121212;

  /* Borders */
  --color-border: rgba(200, 164, 93, 0.2);
  --color-border-subtle: rgba(255, 255, 255, 0.08);
  --color-border-hover: rgba(200, 164, 93, 0.5);

  /* Layout Widths */
  --container-max-width: 1410px;
  --container-wide-width: 1770px;
  --header-height: 84px;

  /* Radii */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 14px;
  --radius-full: 9999px;
}
```

---

## 2. Typography Rules

Adapted from the audited luxury salon standards:
- **Heading Font**: `Anybody` (`--font-anybody`, weights 700 to 900, uppercase tracking).
- **Body / Interface Font**: `Archivo` (`--font-archivo`, weights 400 to 600, high readability).

---

## 3. Five-Item Navigation Configuration

Configured strictly in `src/config/navigation.ts`:
```typescript
export const MAIN_NAVIGATION = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Branches", href: "/branches" },
  { label: "Contact", href: "/contact" },
];
```

---

## 4. How to Extend & Reuse

### Adding a New Route / Page:
1. Create a folder in `src/app/<route-name>/page.tsx`.
2. Wrap content with `<Container>` from `@/components/ui/Container`.
3. If navigation links are approved, add an entry to `src/config/navigation.ts`.

### Reusing UI Elements:
- **Buttons**: `<Button variant="primary" href="/contact">Book Now</Button>`
- **Containers**: `<Container wide={false}>...</Container>`
- **Colors**: Always reference CSS custom variables `var(--color-brand-primary)` or Tailwind `@theme` utilities.


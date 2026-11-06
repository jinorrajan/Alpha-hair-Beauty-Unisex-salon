# Component Guide

## 1. `Header` (`@/components/layout/Header`)
- **Purpose**: Main desktop and mobile sticky header.
- **Scroll Behavior**: Detects `window.scrollY > 40px` and applies a blurred translucent backdrop (`rgba(11, 11, 11, 0.92)` with `border-b`) and reduced padding (`py-3` vs `py-5`).
- **Accessibility**: Includes active page route indicators, semantic `<nav>`, and keyboard navigation highlights.

## 2. `MobileMenu` (`@/components/layout/MobileMenu`)
- **Purpose**: Off-canvas slide-out navigation for viewports below `768px`.
- **Interactions**:
  - Backdrop blur overlay closing on tap.
  - Escape key listener to close drawer.
  - Automatically resets `document.body.style.overflow` when mounted/unmounted.
  - Staggered entrance transition on navigation links.

## 3. `Container` (`@/components/ui/Container`)
- **Props**:
  - `wide?: boolean` (Default `false`: max-width `1410px`, `wide`: max-width `1770px`)
  - `children`: ReactNode

## 4. `Button` (`@/components/ui/Button`)
- **Props**:
  - `variant`: `"primary"` | `"secondary"` | `"outline"` | `"accent"`
  - `size`: `"sm"` | `"md"` | `"lg"`
  - `href?`: Renders Next.js `<Link>` if internal, `<a>` with `target="_blank"` if `external={true}`.


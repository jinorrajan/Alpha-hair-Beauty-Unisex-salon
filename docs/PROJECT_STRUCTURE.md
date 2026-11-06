# Project Structure & Architecture Guide

```
alpha-hair-beauty-unisex-salon/
├── docs/
│   ├── DESIGN_SYSTEM.md        # Centralized tokens, typography, and color reference
│   ├── PROJECT_STRUCTURE.md    # Architecture outline and directory layout
│   └── COMPONENT_GUIDE.md      # UI components API & usage guide
├── public/
│   └── images/
│       └── brand/
│           └── alpha-logo.png  # Official brand identity asset
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (Fonts, Header, Footer)
│   │   ├── page.tsx            # Foundation Home view
│   │   ├── globals.css         # Global CSS tokens & Tailwind theme mappings
│   │   ├── about/page.tsx      # /about route
│   │   ├── services/page.tsx   # /services route
│   │   ├── branches/page.tsx   # /branches route
│   │   └── contact/page.tsx    # /contact route
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx      # Desktop header with scroll backdrop & logo
│   │   │   ├── MobileMenu.tsx  # Off-canvas responsive mobile navigation drawer
│   │   │   └── Footer.tsx      # Shared 4-column footer
│   │   └── ui/
│   │       ├── Button.tsx      # Semantic button with primary/secondary/outline variants
│   │       └── Container.tsx   # Responsive max-width container wrapper
│   └── config/
│       ├── navigation.ts       # 5-item navigation configuration
│       └── site.ts             # Site metadata, logo path, and brand constants
├── omila_reference_audit.md    # Reverse-engineered reference audit
├── package.json
└── tsconfig.json
```


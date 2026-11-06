export interface NavItem {
  label: string;
  href: string;
  description?: string;
}

export const MAIN_NAVIGATION: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
  },
  {
    label: "Branches",
    href: "/branches",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];


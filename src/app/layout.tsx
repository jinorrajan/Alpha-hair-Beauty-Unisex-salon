import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Alex_Brush } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { SITE_CONFIG } from "@/config/site";
import "./globals.css";

const alexBrush = Alex_Brush({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-modern",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.name,
    template: `%s | ${SITE_CONFIG.shortName}`,
  },
  description: SITE_CONFIG.description,
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/brand/alpha-official-logo.png", type: "image/png" },
      { url: "/images/brand/alpha-official-logo.jpg", type: "image/jpeg" },
    ],
    apple: "/images/brand/alpha-official-logo.png",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${alexBrush.variable} ${jakarta.variable}`}>
      <body className="min-h-screen flex flex-col bg-[var(--color-background)] text-[var(--color-text)] font-sans">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}

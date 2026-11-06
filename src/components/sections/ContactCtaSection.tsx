import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const ContactCtaSection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden bg-[radial-gradient(ellipse_80%_50%_at_50%_120%,rgba(200,164,93,0.18),transparent_80%)]">
      <Container>
        <div className="relative rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 sm:p-14 lg:p-16 text-center max-w-4xl mx-auto shadow-[var(--shadow-lg)] overflow-hidden">
          
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-[var(--color-brand-primary)] opacity-10 rounded-full blur-3xl pointer-events-none" />

          <Reveal direction="up">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-glass)] text-xs uppercase tracking-widest text-[var(--color-brand-primary)] font-semibold mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-brand-accent)]" />
              Schedule Your Visit
            </span>
          </Reveal>

          <Reveal direction="up" delayMs={100}>
            <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-[var(--color-text)] leading-tight max-w-2xl mx-auto">
              Ready For A Refined <br />
              <span className="text-[var(--color-brand-primary)]">Salon Experience?</span>
            </h2>
          </Reveal>

          <Reveal direction="up" delayMs={200}>
            <p className="mt-4 text-base sm:text-lg text-[var(--color-text-muted)] max-w-xl mx-auto leading-relaxed">
              Contact our salon coordinators to schedule haircut consultations, bridal packages, skin therapies, or complete styling sessions.
            </p>
          </Reveal>

          <Reveal direction="up" delayMs={300}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg">
                Contact Reception &rarr;
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Browse Treatment Menu
              </Button>
            </div>
          </Reveal>

          <Reveal direction="up" delayMs={400}>
            <div className="mt-10 pt-8 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-center gap-8 text-xs text-[var(--color-text-muted)] uppercase tracking-wider">
              <span>✓ Precision Stylists</span>
              <span>✓ Unisex Private Care</span>
              <span>✓ Premium Products</span>
            </div>
          </Reveal>

        </div>
      </Container>
    </section>
  );
};


import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const BranchesSection: React.FC = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Branch Narrative & Status Notice */}
          <div className="lg:col-span-6 space-y-6">
            <Reveal direction="right">
              <SectionHeading
                badge="Branch Network"
                title="Salon Locations & Visits"
                subtitle="Alpha Hair & Beauty Unisex Salon operates with dedicated stations and personalized appointments."
              />
            </Reveal>

            <Reveal direction="right" delayMs={150}>
              <div className="space-y-4 text-base text-[var(--color-text-muted)] leading-relaxed">
                <p>
                  Our primary branch showcases modern salon infrastructure, dedicated male and female styling stations, comfortable reception lounges, and hygiene-certified treatment suites.
                </p>
                <div className="p-4 rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div className="flex items-start gap-3">
                    <span className="text-[var(--color-brand-primary)] text-lg font-bold">ℹ</span>
                    <div>
                      <h4 className="text-sm font-bold text-[var(--color-text)] uppercase tracking-wider">
                        Branch Directory Status
                      </h4>
                      <p className="text-xs text-[var(--color-text-muted)] mt-1">
                        Detailed street addresses, direct telephone lines, and maps for all locations are being confirmed with salon management for official publication.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="right" delayMs={300}>
              <div className="flex items-center gap-4 pt-2">
                <Button href="/branches" variant="primary">
                  View Branches Page &rarr;
                </Button>
                <Button href="/contact" variant="outline">
                  Contact Reception
                </Button>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Verified Exterior Storefront View */}
          <div className="lg:col-span-6">
            <Reveal direction="left" delayMs={200}>
              <div className="relative rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-lg)] group bg-[var(--color-surface)]">
                <div className="relative aspect-[16/11] w-full overflow-hidden">
                  <Image
                    src="/images/salon/alpha-storefront.jpg"
                    alt="Alpha Hair & Beauty Unisex Salon Exterior Storefront Building"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/90 via-transparent to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[var(--color-brand-primary)] text-[var(--color-brand-secondary)]">
                      Primary Branch
                    </span>
                    <span className="text-xs text-[var(--color-text-muted)]">
                      Unisex Facilities
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-lg text-[var(--color-text)]">
                    Alpha Hair & Beauty Unisex Salon
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] mt-1">
                    Multi-level building with custom storefront signage, styling salon, and aesthetic care suites.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>

        </div>
      </Container>
    </section>
  );
};


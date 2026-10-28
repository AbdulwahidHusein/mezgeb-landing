"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function CTA() {
  const { t, isAm } = useI18n();

  return (
    <section
      className={cn("px-5 pb-20 sm:px-8 lg:px-10", isAm && "font-ethiopic")}
      aria-labelledby="cta-heading"
    >
      <div className="container-site luna-card relative overflow-hidden">
        <div className="relative px-6 py-20 text-center sm:px-12 lg:py-24">
          <div
            className="accent-line mx-auto mb-8"
            aria-hidden="true"
          />
          <h2
            id="cta-heading"
            className={cn(
              "mx-auto max-w-3xl text-[2rem] font-medium tracking-[-0.02em] text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]",
              !isAm && "font-display"
            )}
          >
            {t.cta.headline}
          </h2>
          <p className="mx-auto mt-6 max-w-xl paragraph-regular text-[15px] sm:text-base">
            {t.cta.body}
          </p>
          <div className="mt-10 flex justify-center">
            <Button asChild size="lg" className="px-8">
              <a href="#pilot">{t.cta.button}</a>
            </Button>
          </div>
          <p className="mt-8 paragraph-regular">{t.cta.tagline}</p>
        </div>
      </div>
    </section>
  );
}

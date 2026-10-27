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
      <div className="container-site rounded-md border border-border bg-card px-6 py-20 text-center sm:px-12 lg:py-24">
        <h2
          id="cta-heading"
          className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-5xl lg:leading-[1.15]"
        >
          {t.cta.headline}
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
          {t.cta.body}
        </p>
        <div className="mt-10 flex justify-center">
          <Button asChild size="lg" className="px-8">
            <a href="#pilot">{t.cta.button}</a>
          </Button>
        </div>
        <p className="mt-8 text-sm text-muted-foreground">{t.cta.tagline}</p>
      </div>
    </section>
  );
}

"use client";

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroDemo } from "@/components/hero-demo";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t, isAm } = useI18n();

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 blueprint-grid opacity-70"
        aria-hidden="true"
      />

      <div className="container-site relative px-5 pb-16 pt-14 sm:px-8 sm:pb-20 sm:pt-16 lg:px-10 lg:pt-20">
        <div
          className={cn(
            "mx-auto max-w-3xl border-x border-border px-5 py-10 sm:px-10 sm:py-12 lg:max-w-4xl",
            isAm && "font-ethiopic"
          )}
        >
          <p className="eyebrow">{t.hero.eyebrow}</p>

          <h1
            id="hero-heading"
            className="mt-5 text-[2.35rem] font-semibold leading-[1.15] tracking-tight text-foreground sm:text-5xl lg:text-[3.15rem] lg:leading-[1.12]"
          >
            {t.hero.headline1}
            <span className="mt-2 block text-muted-foreground">
              {t.hero.headline2}
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg">
              <a href="#pilot">{t.hero.primaryCta}</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#how-it-works">
                {t.hero.secondaryCta}
                <ArrowDown className="opacity-60" />
              </a>
            </Button>
          </div>

          <p className="mt-5 text-sm text-muted-foreground">{t.hero.caption}</p>
        </div>

        <div className="mt-10 sm:mt-12">
          <HeroDemo />
        </div>
      </div>
    </section>
  );
}

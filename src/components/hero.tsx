"use client";

import { ArrowDown, FileSearch } from "lucide-react";
import { FrameLines } from "@/components/frame-lines";
import { HeroDemo } from "@/components/hero-demo";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Hero() {
  const { t, isAm } = useI18n();

  return (
    <section id="top" className="relative" aria-labelledby="hero-heading">
      <FrameLines dots="both" className="px-5 py-[72px] sm:px-8 lg:px-12">
        <div className="relative mx-auto w-full max-w-[984px]">
          <div
            className={cn(
              "flex max-w-[610px] flex-col gap-6 animate-fade-up",
              isAm && "font-ethiopic"
            )}
          >
            <div className="hero-badge w-fit">
              <span className="flex size-4 items-center justify-center text-white">
                <FileSearch className="size-3.5" />
              </span>
              <span>{t.hero.eyebrow}</span>
            </div>

            <h1
              id="hero-heading"
              className={cn(
                "text-[2.5rem] font-medium leading-[1.2] tracking-[-0.22px] text-white sm:text-5xl lg:text-[56px]",
                !isAm && "font-display"
              )}
            >
              <span className="bg-gradient-to-b from-white to-white/65 bg-clip-text text-transparent">
                {t.hero.headline1}
              </span>{" "}
              <span className="text-[var(--neutral-400)]">{t.hero.headline2}</span>
            </h1>

            <p className="headline-regular">{t.hero.caption}</p>

            <p className="paragraph-regular max-w-[540px]">{t.hero.body}</p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <a
                href="#pilot"
                className={cn("btn-luna", isAm && "font-ethiopic")}
              >
                {t.hero.primaryCta}
              </a>
              <a
                href="#how-it-works"
                className={cn("btn-luna-outline", isAm && "font-ethiopic")}
              >
                {t.hero.secondaryCta}
                <ArrowDown className="size-4 opacity-70" />
              </a>
            </div>
          </div>
        </div>
      </FrameLines>

      <div className="line-horizontal mx-auto max-w-[1128px]" />

      <FrameLines dots="bottom" className="px-5 py-8 sm:px-8 lg:px-12">
        <div className="product-glow mx-auto max-w-[984px]">
          <div className="browser-chrome relative p-1">
            <div className="overflow-hidden rounded-[20px] border border-[var(--neutral-800)] bg-[#070709]/90 backdrop-blur-[3px]">
              <div className="flex items-center gap-3 border-b border-[var(--neutral-800)] bg-[var(--neutral-900)]/80 px-4 py-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" />
                  <span className="size-2.5 rounded-full bg-[#28c840]" />
                </div>
                <div className="mx-auto flex h-7 max-w-md flex-1 items-center justify-center rounded-full border border-[var(--white-6)] bg-[var(--white-2)] px-3">
                  <p className="truncate font-mono text-[11px] text-[var(--neutral-400)]">
                    mezgeb.ai / workbench
                  </p>
                </div>
                <div className="hidden w-10 sm:block" aria-hidden="true" />
              </div>
              <div className="p-3 sm:p-4">
                <HeroDemo />
              </div>
            </div>
          </div>
        </div>
      </FrameLines>

      <div className="line-horizontal mx-auto max-w-[1128px]" />
    </section>
  );
}

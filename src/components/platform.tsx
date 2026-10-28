"use client";

import { FileInput, ScanSearch, ShieldCheck, Database } from "lucide-react";
import { FrameLines } from "@/components/frame-lines";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

const icons = [FileInput, ScanSearch, ShieldCheck, Database];

export function Platform() {
  const { t, isAm } = useI18n();

  return (
    <section
      id="platform"
      className={cn("relative scroll-mt-20", isAm && "font-ethiopic")}
      aria-labelledby="platform-heading"
    >
      <FrameLines
        grid
        dots="both"
        className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-[112px]"
      >
        <div className="mx-auto flex max-w-[744px] flex-col items-center gap-3 text-center">
          <p className="eyebrow">{t.platform.eyebrow}</p>
          <h2
            id="platform-heading"
            className={cn(
              "text-[2rem] font-medium tracking-[-0.02em] text-white sm:text-4xl lg:text-[48px] lg:leading-[57.6px]",
              !isAm && "font-display"
            )}
          >
            {t.platform.headline}
          </h2>
          <p className="mt-2 max-w-[620px] paragraph-regular">{t.platform.body}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.platform.stages.map((stage, i) => {
            const Icon = icons[i];
            return (
              <div key={stage.id} className="luna-card">
                <div className="relative luna-card-inner">
                  <div
                    className="accent-line-sm absolute left-[34px] top-0"
                    aria-hidden="true"
                  />
                  <div className="relative mb-5 inline-flex">
                    <img
                      src="/luna/icon-blur.svg"
                      alt=""
                      aria-hidden="true"
                      className="pointer-events-none absolute -left-3 -top-3 size-12 opacity-80"
                    />
                    <div className="relative flex size-[22px] items-center justify-center text-white">
                      <Icon className="size-[18px]" strokeWidth={1.75} />
                    </div>
                  </div>
                  <p
                    className="text-[12px] text-[var(--neutral-400)]"
                    suppressHydrationWarning
                  >
                    {isAm
                      ? `ደረጃ ${stage.id} — ${stage.stage}`
                      : `Stage ${stage.id} — ${stage.stage}`}
                  </p>
                  <h3
                    className={cn(
                      "mt-2 text-xl font-medium leading-snug text-white",
                      !isAm && "font-display"
                    )}
                  >
                    {stage.title}
                  </h3>
                  <p className="mt-3 paragraph-regular">{stage.copy}</p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-10 max-w-[620px] text-center paragraph-regular">
          {t.platform.note}
        </p>
      </FrameLines>
    </section>
  );
}

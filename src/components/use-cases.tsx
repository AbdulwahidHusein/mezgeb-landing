"use client";

import { FrameLines } from "@/components/frame-lines";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
];

export function UseCases() {
  const { t, isAm } = useI18n();

  return (
    <section
      id="use-cases"
      className={cn("scroll-mt-20", isAm && "font-ethiopic")}
      aria-labelledby="use-cases-heading"
    >
      <FrameLines
        grid
        dots="both"
        className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-[112px]"
      >
        <div className="mx-auto flex max-w-[744px] flex-col items-center gap-3 text-center">
          <p className="eyebrow">{t.useCases.eyebrow}</p>
          <h2
            id="use-cases-heading"
            className={cn(
              "text-[2rem] font-medium tracking-[-0.02em] text-white sm:text-4xl lg:text-[48px] lg:leading-[57.6px]",
              !isAm && "font-display"
            )}
          >
            {t.useCases.headline}
          </h2>
          <p className="mt-2 max-w-[620px] paragraph-regular">{t.useCases.body}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {t.useCases.items.map((item, i) => (
            <div key={item.category} className={cn("luna-card", spans[i])}>
              <div className="relative luna-card-inner h-full">
                <div
                  className="accent-line-sm absolute left-[34px] top-0"
                  aria-hidden="true"
                />
                <p className="text-[12px] text-[var(--neutral-400)]">
                  {item.category}
                </p>
                <h3
                  className={cn(
                    "mt-3 text-xl font-medium text-white",
                    !isAm && "font-display"
                  )}
                >
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md paragraph-regular">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center paragraph-regular">{t.useCases.note}</p>
      </FrameLines>
    </section>
  );
}

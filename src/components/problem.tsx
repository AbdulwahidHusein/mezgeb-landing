"use client";

import { FrameLines } from "@/components/frame-lines";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Problem() {
  const { t, isAm } = useI18n();

  return (
    <section
      className={cn("relative", isAm && "font-ethiopic")}
      aria-labelledby="problem-heading"
    >
      <FrameLines
        grid
        dots="both"
        className="px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-[112px]"
      >
        <div className="mx-auto flex max-w-[744px] flex-col items-center gap-3 text-center">
          <p className="eyebrow">{t.problem.eyebrow}</p>
          <h2
            id="problem-heading"
            className={cn(
              "text-[2rem] font-medium tracking-[-0.02em] text-white sm:text-4xl lg:text-[48px] lg:leading-[57.6px]",
              !isAm && "font-display"
            )}
          >
            {t.problem.headline}
          </h2>
          <div className="mt-3 max-w-[620px] space-y-3 paragraph-regular">
            <p>{t.problem.body1}</p>
            <p>{t.problem.body2}</p>
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.problem.items.map((item) => (
            <div key={item.num} className="luna-card">
              <div className="relative luna-card-inner !p-6 sm:!p-7">
                <div
                  className="accent-line-sm absolute left-6 top-0 sm:left-7"
                  aria-hidden="true"
                />
                <span className="font-mono text-[13px] text-[var(--neutral-400)]">
                  {item.num}
                </span>
                <h3
                  className={cn(
                    "mt-4 text-xl font-medium tracking-tight text-white",
                    !isAm && "font-display"
                  )}
                >
                  {item.title}
                </h3>
                <p className="mt-3 paragraph-regular">{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </FrameLines>
    </section>
  );
}

"use client";

import { Badge } from "@/components/ui/badge";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Trust() {
  const { t, isAm } = useI18n();

  return (
    <section
      className={cn("section-pad", isAm && "font-ethiopic")}
      aria-labelledby="trust-heading"
    >
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          <div>
            <p className="eyebrow">{t.trust.eyebrow}</p>
            <h2
              id="trust-heading"
              className={cn(
                "mt-3 text-[2rem] font-medium tracking-[-0.02em] text-white sm:text-4xl lg:text-[40px] lg:leading-[48px]",
                !isAm && "font-display"
              )}
            >
              {t.trust.headline}
            </h2>
            <div className="mt-5 space-y-4 paragraph-regular text-[15px] sm:text-base">
              <p>{t.trust.body1}</p>
              <p>{t.trust.body2}</p>
            </div>
          </div>

          <div className="luna-card">
            <div className="relative luna-card-inner !p-5 sm:!p-6">
              <div
                className="accent-line-sm absolute left-5 top-0 sm:left-6"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-[11px] text-[var(--neutral-400)]">
                    {t.trust.illustrative}
                  </p>
                  <p
                    className={cn(
                      "mt-1 text-base font-medium text-white",
                      !isAm && "font-display"
                    )}
                  >
                    {t.trust.fieldReview}
                  </p>
                </div>
                <Badge
                  variant="outline"
                  className="rounded-full border-[var(--white-8)] bg-[var(--white-2)] text-[var(--warn)]"
                >
                  {t.trust.flagged}
                </Badge>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--neutral-800)] bg-[var(--white-2)] p-4">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[var(--neutral-400)]">
                    registered_capital
                  </p>
                  <p className="mt-2 font-ethiopic text-lg text-white">
                    14,500,000.00 ብር
                  </p>
                  <p className="mt-1 text-sm text-[var(--neutral-400)]">
                    14,500,000.00 ETB
                  </p>
                  <div className="mt-4 rounded-xl border border-[var(--white-8)] bg-[var(--white-2)] px-3 py-2">
                    <p className="text-[11px] font-medium text-[var(--warn)]">
                      {t.trust.needsReview}
                    </p>
                    <p className="mt-1 text-xs text-[var(--neutral-400)]">
                      {t.trust.reason}
                    </p>
                  </div>
                </div>
                <div className="rounded-2xl border border-[var(--neutral-800)] bg-[var(--white-2)] p-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-[var(--neutral-400)]">
                    {t.trust.ruleCheck}
                  </p>
                  <ul className="mt-3 space-y-2.5 text-sm text-white">
                    {t.trust.rules.map((rule, i) => (
                      <li key={rule} className="flex items-center gap-2">
                        <span
                          className={cn(
                            "flex size-5 items-center justify-center rounded-full text-xs",
                            i < 2
                              ? "bg-[var(--white-6)] text-[var(--ok)]"
                              : "bg-[var(--white-6)] text-[var(--warn)]"
                          )}
                        >
                          {i < 2 ? "✓" : "!"}
                        </span>
                        <span className="text-[var(--neutral-300)]">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-8 border-t border-[var(--neutral-800)] pt-12 sm:grid-cols-3">
          {t.trust.principles.map((item) => (
            <div key={item.title}>
              <div className="accent-line-sm mb-4 w-8" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 paragraph-regular">{item.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

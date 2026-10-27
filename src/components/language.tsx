"use client";

import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Language() {
  const { t, isAm } = useI18n();

  return (
    <section
      id="how-it-works"
      className={cn("scroll-mt-20 section-pad", isAm && "font-ethiopic")}
      aria-labelledby="language-heading"
    >
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">{t.language.eyebrow}</p>
          <h2
            id="language-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.2]"
          >
            {t.language.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t.language.body}
          </p>

          <ul className="mt-8 space-y-3">
            {t.language.points.map((point) => (
              <li key={point} className="flex items-start gap-3 text-foreground">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-foreground/70" />
                <span className="text-base leading-relaxed text-muted-foreground">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base font-medium text-foreground">
            {t.language.close}
          </p>

          <div className="mt-6">
            <Button asChild>
              <a href="#pilot">{t.language.cta}</a>
            </Button>
          </div>
        </div>

        <div className="overflow-hidden rounded-md border border-border bg-card p-2">
          <div className="overflow-hidden border border-border bg-paper">
            <div className="border-b border-paper-line px-5 py-3">
              <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#52525B]">
                {t.language.sampleLabel}
              </p>
            </div>
            <div className="scan-texture px-6 py-8 sm:px-8">
              <div className="font-ethiopic text-[#18181B]">
                <p className="text-xs text-[#52525B]">
                  የማመልከቻ ቅጽ / Application Form
                </p>
                <h3 className="mt-1 text-xl font-semibold">የአገልግሎት መረጃ</h3>
                <p className="mt-0.5 text-sm text-[#52525B]">
                  Service Information Record
                </p>

                <div className="mt-6 space-y-4 text-[0.95rem]">
                  <div className="border border-[#18181B]/25 bg-white/80 p-3">
                    <p className="text-[11px] text-[#52525B]">ስም / Full name</p>
                    <p className="mt-1">ሃና ገብረዮሐንስ · Hana Gebreyohannes</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-b border-paper-line pb-2">
                      <p className="text-[11px] text-[#52525B]">ቀን / Date</p>
                      <p className="mt-1">12 / 03 / 2016 ዓ.ም</p>
                    </div>
                    <div className="border-b border-paper-line pb-2">
                      <p className="text-[11px] text-[#52525B]">ቋንቋ / Language</p>
                      <p className="mt-1">አማርኛ + EN</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

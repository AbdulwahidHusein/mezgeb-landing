"use client";

import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  const { t, isAm } = useI18n();

  return (
    <a
      href="#top"
      className={cn(
        "relative inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--white-24)]",
        className
      )}
      aria-label={t.brand}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/mezgeb-mark.png"
        alt=""
        width={64}
        height={88}
        className="h-16 w-auto shrink-0 sm:h-[72px]"
        decoding="async"
      />
      <span
        className={cn(
          "font-display text-[22px] font-medium tracking-tight text-white",
          isAm && "font-ethiopic"
        )}
      >
        {t.brandShort}
        <span>.</span>
      </span>
      <span
        className="accent-line absolute bottom-[-34px] left-0"
        aria-hidden="true"
      />
    </a>
  );
}

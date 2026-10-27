"use client";

import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-7 w-7", className)}
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="22" rx="2" fill="#27272A" />
      <rect x="7" y="10" width="10" height="1.5" rx="0.75" fill="#A1A1AA" />
      <rect x="7" y="14" width="8" height="1.25" rx="0.6" fill="#71717A" />
      <rect x="7" y="18" width="9" height="1.25" rx="0.6" fill="#52525B" />
      <rect x="11" y="3" width="18" height="22" rx="2" fill="#FAFAFA" />
      <rect x="15" y="9" width="10" height="1.5" rx="0.75" fill="#18181B" />
      <rect x="15" y="13" width="8" height="1.25" rx="0.6" fill="#3F3F46" />
      <rect x="15" y="17" width="6" height="1.25" rx="0.6" fill="#52525B" />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  const { t, isAm } = useI18n();

  return (
    <a
      href="#top"
      className={cn(
        "inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      aria-label={t.brand}
    >
      <LogoMark />
      <span
        className={cn(
          "text-[1.05rem] font-semibold tracking-tight text-foreground",
          isAm && "font-ethiopic"
        )}
      >
        {t.brand}
      </span>
    </a>
  );
}

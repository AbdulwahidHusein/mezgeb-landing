"use client";

import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/dictionaries";

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center gap-0.5 rounded-[40px] border border-[var(--white-6)] bg-[var(--white-2)] p-0.5",
        className
      )}
      role="group"
      aria-label={t.lang.switchTo}
    >
      {(["en", "am"] as Locale[]).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={cn(
            "rounded-[40px] px-2.5 py-1 text-[12px] font-medium leading-[1.7] transition-colors",
            code === "am" && "font-ethiopic",
            locale === code
              ? "bg-[var(--white-6)] text-white"
              : "text-[var(--neutral-400)] hover:text-white"
          )}
          aria-pressed={locale === code}
        >
          {code === "en" ? t.lang.en : t.lang.am}
        </button>
      ))}
    </div>
  );
}

"use client";

import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/i18n/dictionaries";

export function LocaleSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className={cn(
        "inline-flex items-center border border-border bg-background",
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
            "px-2.5 py-1.5 font-mono text-[11px] tracking-wide transition-colors",
            locale === code
              ? "bg-secondary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
          aria-pressed={locale === code}
        >
          {code === "en" ? t.lang.en : t.lang.am}
        </button>
      ))}
    </div>
  );
}

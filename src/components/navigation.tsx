"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { FrameLines } from "@/components/frame-lines";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { t, isAm } = useI18n();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#platform", label: t.nav.platform },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#use-cases", label: t.nav.useCases },
    { href: "#faq", label: t.nav.faq },
  ];

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous || "";
    };
  }, [open]);

  return (
    <header className="relative z-[97] px-[3%]">
      <FrameLines dots="bottom" className="px-5 py-[26px] sm:px-8 lg:px-12">
        <div className="relative mx-auto flex w-full max-w-[984px] items-center justify-between gap-4">
          <Logo />

          <nav
            className={cn(
              "absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex",
              isAm && "font-ethiopic"
            )}
            aria-label="Primary"
          >
            {links.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-[40px] px-3 py-2 text-[12px] font-normal leading-[1.7] text-white transition-[background-color,backdrop-filter] duration-300 hover:bg-[var(--white-6)] hover:backdrop-blur-[4px]",
                  i === 0 && "bg-[var(--white-6)] backdrop-blur-[2px]"
                )}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center justify-end gap-3 md:flex">
            <LocaleSwitcher />
            <a
              href="#pilot"
              className={cn("btn-luna-secondary", isAm && "font-ethiopic")}
            >
              <span>{t.nav.cta}</span>
            </a>
          </div>

          <div className="flex items-center justify-end gap-2 md:hidden">
            <LocaleSwitcher />
            <button
              type="button"
              className="btn-luna-outline !px-3 !py-2"
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="size-4" /> : <Menu className="size-4" />}
            </button>
          </div>
        </div>
        <div className="line-horizontal absolute inset-x-0 bottom-0" />
      </FrameLines>

      {open && (
        <div
          id="mobile-nav"
          className="border-b border-[var(--neutral-800)] bg-[rgba(7,7,7,0.96)] px-5 py-4 backdrop-blur-xl md:hidden"
        >
          <nav
            className={cn("flex flex-col gap-1", isAm && "font-ethiopic")}
            aria-label="Mobile"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-xl px-3 py-2.5 text-sm font-medium text-white hover:bg-[var(--white-4)]"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pilot"
              className={cn("btn-luna-secondary mt-3", isAm && "font-ethiopic")}
              onClick={() => setOpen(false)}
            >
              <span className="justify-center">{t.nav.cta}</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

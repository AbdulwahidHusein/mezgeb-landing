"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/logo";
import { LocaleSwitcher } from "@/components/locale-switcher";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Navigation() {
  const { t, isAm } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#platform", label: t.nav.platform },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#use-cases", label: t.nav.useCases },
    { href: "#faq", label: t.nav.faq },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous || "";
    };
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = "";
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-background/95 backdrop-blur-sm",
        scrolled && "border-border"
      )}
    >
      <div className="container-site flex h-14 items-center justify-between gap-4 px-5 sm:h-16 sm:px-8 lg:gap-6 lg:px-10">
        <Logo />

        <nav
          className={cn(
            "hidden items-center gap-6 lg:gap-7 md:flex",
            isAm && "font-ethiopic"
          )}
          aria-label="Primary"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LocaleSwitcher />
          <Button asChild size="sm" className={cn(isAm && "font-ethiopic")}>
            <a href="#pilot">{t.nav.cta}</a>
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LocaleSwitcher />
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-border bg-background px-5 py-4 md:hidden"
        >
          <nav
            className={cn("flex flex-col gap-1", isAm && "font-ethiopic")}
            aria-label="Mobile"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-2 py-2.5 text-sm font-medium text-foreground hover:bg-muted"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              asChild
              className={cn("mt-3 w-full", isAm && "font-ethiopic")}
            >
              <a href="#pilot" onClick={() => setOpen(false)}>
                {t.nav.cta}
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}

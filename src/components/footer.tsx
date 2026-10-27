"use client";

import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Footer() {
  const { t, isAm } = useI18n();

  const links = [
    { href: "#platform", label: t.nav.platform },
    { href: "#how-it-works", label: t.nav.howItWorks },
    { href: "#use-cases", label: t.nav.useCases },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <footer
      className={cn("border-t border-border pb-10 pt-16", isAm && "font-ethiopic")}
    >
      <div className="container-site grid gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_1fr_1fr] lg:px-10">
        <div>
          <Logo />
          <p className="mt-4 max-w-xs text-base leading-relaxed text-muted-foreground">
            {t.footer.tagline}
          </p>
        </div>

        <div>
          <p className="eyebrow">{t.footer.navigation}</p>
          <nav className="mt-4 flex flex-col gap-2.5" aria-label="Footer">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="w-fit text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="eyebrow">{t.footer.contact}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {t.footer.contactBody}
          </p>
          <Button asChild className="mt-5" size="sm">
            <a href="#pilot">{t.nav.cta}</a>
          </Button>
        </div>
      </div>

      <div className="container-site mt-12 px-5 sm:px-8 lg:px-10">
        <Separator className="bg-border" />
        <p className="pt-6 text-sm text-muted-foreground">{t.footer.copyright}</p>
      </div>
    </footer>
  );
}

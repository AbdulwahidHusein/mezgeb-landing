"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function FAQ() {
  const { t, isAm } = useI18n();

  return (
    <section
      id="faq"
      className={cn("scroll-mt-20 section-pad", isAm && "font-ethiopic")}
      aria-labelledby="faq-heading"
    >
      <div className="container-site grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2
            id="faq-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            {t.faq.headline}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            {t.faq.subheadline}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((item, i) => (
            <AccordionItem
              key={`${item.q}-${i}`}
              value={`item-${i}`}
              className="border-border"
            >
              <AccordionTrigger className="text-left text-lg text-foreground hover:no-underline hover:text-foreground">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

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
            className={cn(
              "mt-3 text-[2rem] font-medium tracking-[-0.02em] text-white sm:text-4xl",
              !isAm && "font-display"
            )}
          >
            {t.faq.headline}
          </h2>
          <p className="mt-4 paragraph-regular text-[15px]">
            {t.faq.subheadline}
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {t.faq.items.map((item, i) => (
            <AccordionItem
              key={`${item.q}-${i}`}
              value={`item-${i}`}
              className="border-[var(--neutral-800)]"
            >
              <AccordionTrigger
                className={cn(
                  "text-left text-lg text-white hover:no-underline hover:text-white",
                  !isAm && "font-display font-medium"
                )}
              >
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="paragraph-regular text-[15px]">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

const spans = [
  "lg:col-span-5",
  "lg:col-span-7",
  "lg:col-span-7",
  "lg:col-span-5",
];

export function UseCases() {
  const { t, isAm } = useI18n();

  return (
    <section
      id="use-cases"
      className={cn("scroll-mt-20 section-pad", isAm && "font-ethiopic")}
      aria-labelledby="use-cases-heading"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.useCases.eyebrow}</p>
          <h2
            id="use-cases-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]"
          >
            {t.useCases.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t.useCases.body}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-12">
          {t.useCases.items.map((item, i) => (
            <Card
              key={item.category}
              className={cn(
                "border-border bg-card shadow-none transition hover:bg-secondary/60",
                spans[i]
              )}
            >
              <CardHeader>
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {item.category}
                </p>
                <CardTitle className="text-xl text-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="max-w-md text-base leading-relaxed text-muted-foreground">
                  {item.copy}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 text-sm text-muted-foreground">{t.useCases.note}</p>
      </div>
    </section>
  );
}

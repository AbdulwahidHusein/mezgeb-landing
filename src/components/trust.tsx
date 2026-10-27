"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Trust() {
  const { t, isAm } = useI18n();

  return (
    <section
      className={cn("section-pad", isAm && "font-ethiopic")}
      aria-labelledby="trust-heading"
    >
      <div className="container-site">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <p className="eyebrow">{t.trust.eyebrow}</p>
            <h2
              id="trust-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem] lg:leading-[1.2]"
            >
              {t.trust.headline}
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
              <p>{t.trust.body1}</p>
              <p>{t.trust.body2}</p>
            </div>
          </div>

          <Card className="border-border bg-card shadow-none">
            <CardHeader className="flex-row items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  {t.trust.illustrative}
                </p>
                <CardTitle className="mt-1 text-base text-foreground">
                  {t.trust.fieldReview}
                </CardTitle>
              </div>
              <Badge
                variant="outline"
                className="rounded-md border-warn/40 bg-transparent text-warn"
              >
                {t.trust.flagged}
              </Badge>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md border border-border bg-background p-4">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">
                  registered_capital
                </p>
                <p className="mt-2 font-ethiopic text-lg text-foreground">
                  14,500,000.00 ብር
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  14,500,000.00 ETB
                </p>
                <div className="mt-4 rounded-md border border-warn/30 bg-transparent px-3 py-2">
                  <p className="text-[11px] font-medium text-warn">
                    {t.trust.needsReview}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {t.trust.reason}
                  </p>
                </div>
              </div>
              <div className="rounded-md border border-border bg-background p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  {t.trust.ruleCheck}
                </p>
                <ul className="mt-3 space-y-2.5 text-sm text-foreground">
                  {t.trust.rules.map((rule, i) => (
                    <li key={rule} className="flex items-center gap-2">
                      <span
                        className={cn(
                          "flex size-5 items-center justify-center rounded-md text-xs",
                          i < 2
                            ? "bg-secondary text-muted-foreground"
                            : "bg-warn/15 text-warn"
                        )}
                      >
                        {i < 2 ? "✓" : "!"}
                      </span>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 grid gap-8 border-t border-border pt-12 sm:grid-cols-3">
          {t.trust.principles.map((item) => (
            <div key={item.title}>
              <div className="mb-4 h-px w-8 bg-foreground/30" />
              <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

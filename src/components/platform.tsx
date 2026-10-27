"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Platform() {
  const { t, isAm } = useI18n();

  return (
    <section
      id="platform"
      className={cn("scroll-mt-20 section-pad", isAm && "font-ethiopic")}
      aria-labelledby="platform-heading"
    >
      <div className="container-site">
        <div className="max-w-2xl">
          <p className="eyebrow">{t.platform.eyebrow}</p>
          <h2
            id="platform-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]"
          >
            {t.platform.headline}
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
            {t.platform.body}
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.platform.stages.map((stage) => (
            <Card key={stage.id} className="border-border bg-card shadow-none">
              <CardHeader className="gap-3">
                <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                  {isAm ? `ደረጃ ${stage.id} — ${stage.stage}` : `Stage ${stage.id} — ${stage.stage}`}
                </p>
                <CardTitle className="text-lg leading-snug text-foreground">
                  {stage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {stage.copy}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
          {t.platform.note}
        </p>
      </div>
    </section>
  );
}

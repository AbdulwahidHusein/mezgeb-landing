"use client";

import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Problem() {
  const { t, isAm } = useI18n();

  return (
    <section
      className={cn("section-pad", isAm && "font-ethiopic")}
      aria-labelledby="problem-heading"
    >
      <div className="container-site">
        <div className="max-w-3xl">
          <p className="eyebrow">{t.problem.eyebrow}</p>
          <h2
            id="problem-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.2]"
          >
            {t.problem.headline}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>{t.problem.body1}</p>
            <p>{t.problem.body2}</p>
          </div>
        </div>

        <Separator className="mt-14 bg-border" />

        <div>
          {t.problem.items.map((item) => (
            <div
              key={item.num}
              className="grid gap-4 border-b border-border py-10 sm:grid-cols-[7rem_1fr] lg:grid-cols-[8rem_minmax(0,1fr)_minmax(0,1.1fr)] lg:gap-12"
            >
              <span className="font-mono text-3xl font-medium tracking-tight text-muted-foreground sm:text-4xl">
                {item.num}
              </span>
              <h3 className="text-xl font-semibold tracking-tight text-foreground sm:pt-1.5 lg:text-2xl">
                {item.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground sm:col-span-2 lg:col-span-1 lg:pt-2 lg:text-lg">
                {item.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

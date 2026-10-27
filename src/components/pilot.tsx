"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

export function Pilot() {
  const { t, isAm } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const organization = String(data.get("organization") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    const next: Record<string, string> = {};
    if (!name) next.name = t.pilot.errors.name;
    if (!organization) next.organization = t.pilot.errors.organization;
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      next.email = t.pilot.errors.email;
    }
    if (!message) next.message = t.pilot.errors.message;

    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setSubmitted(true);
    form.reset();
  }

  return (
    <section
      id="pilot"
      className={cn("scroll-mt-20 section-pad", isAm && "font-ethiopic")}
      aria-labelledby="pilot-heading"
    >
      <div className="container-site grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow">{t.pilot.eyebrow}</p>
          <h2
            id="pilot-heading"
            className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]"
          >
            {t.pilot.headline}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground">
            <p>{t.pilot.body1}</p>
            <p>{t.pilot.body2}</p>
          </div>

          <ol className="mt-12">
            {t.pilot.steps.map((step) => (
              <li
                key={step.num}
                className="grid grid-cols-[4rem_1fr] gap-4 border-t border-border py-6 last:border-b"
              >
                <span className="font-mono text-2xl font-medium text-muted-foreground">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">
                    {step.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 text-sm text-muted-foreground">
            {t.pilot.supporting}
          </p>
        </div>

        <Card className="h-fit border-border bg-card shadow-none">
          <CardHeader>
            <CardTitle className="text-foreground">{t.pilot.formTitle}</CardTitle>
            <CardDescription className="text-muted-foreground">
              {t.pilot.formNote}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {submitted ? (
              <div
                className="rounded-md border border-border bg-secondary px-4 py-5"
                role="status"
              >
                <p className="font-medium text-foreground">{t.pilot.validated}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {t.pilot.validatedNote}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  className="mt-4 border-border"
                  onClick={() => setSubmitted(false)}
                >
                  {t.pilot.reset}
                </Button>
              </div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <Field id="name" label={t.pilot.name} error={errors.name} />
                <Field
                  id="organization"
                  label={t.pilot.organization}
                  error={errors.organization}
                />
                <Field
                  id="email"
                  label={t.pilot.email}
                  type="email"
                  error={errors.email}
                />
                <div className="space-y-2">
                  <Label htmlFor="message">{t.pilot.message}</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder={t.pilot.messagePlaceholder}
                    className="min-h-28 rounded-md border-border bg-background"
                  />
                  {errors.message && (
                    <p className="text-sm text-warn" role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full" size="lg">
                  {t.pilot.submit}
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  type = "text",
  error,
}: {
  id: string;
  label: string;
  type?: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        name={id}
        type={type}
        className="h-11 rounded-md border-border bg-background"
      />
      {error && (
        <p className="text-sm text-warn" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

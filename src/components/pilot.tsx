"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
      className={cn("relative scroll-mt-20 section-pad", isAm && "font-ethiopic")}
      aria-labelledby="pilot-heading"
    >
      <div className="container-site relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="eyebrow">{t.pilot.eyebrow}</p>
          <h2
            id="pilot-heading"
            className={cn(
              "mt-3 text-[2rem] font-medium tracking-[-0.02em] text-white sm:text-4xl lg:text-[48px] lg:leading-[1.15]",
              !isAm && "font-display"
            )}
          >
            {t.pilot.headline}
          </h2>
          <div className="mt-5 space-y-4 paragraph-regular text-[15px] sm:text-base">
            <p>{t.pilot.body1}</p>
            <p>{t.pilot.body2}</p>
          </div>

          <ol className="mt-12 space-y-4">
            {t.pilot.steps.map((step) => (
              <li key={step.num} className="luna-card">
                <div className="grid grid-cols-[4rem_1fr] gap-4 luna-card-inner !py-5">
                  <span className="font-mono text-2xl font-medium text-[var(--neutral-400)]">
                    {step.num}
                  </span>
                  <div>
                    <h3
                      className={cn(
                        "text-lg font-medium text-white",
                        !isAm && "font-display"
                      )}
                    >
                      {step.title}
                    </h3>
                    <p className="mt-1.5 paragraph-regular">{step.copy}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <p className="mt-8 paragraph-regular">{t.pilot.supporting}</p>
        </div>

        <div className="luna-card h-fit">
          <div className="relative luna-card-inner">
            <div
              className="accent-line-sm absolute left-[34px] top-0"
              aria-hidden="true"
            />
            <h3
              className={cn(
                "text-xl font-medium text-white",
                !isAm && "font-display"
              )}
            >
              {t.pilot.formTitle}
            </h3>
            <p className="mt-2 paragraph-regular">{t.pilot.formNote}</p>

            <div className="mt-6">
              {submitted ? (
                <div
                  className="rounded-2xl border border-[var(--neutral-800)] bg-[var(--white-2)] px-4 py-5"
                  role="status"
                >
                  <p className="font-medium text-white">{t.pilot.validated}</p>
                  <p className="mt-2 paragraph-regular">
                    {t.pilot.validatedNote}
                  </p>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-4"
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
                    <Label htmlFor="message" className="text-[var(--neutral-300)]">
                      {t.pilot.message}
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      placeholder={t.pilot.messagePlaceholder}
                      className="min-h-28 rounded-2xl border-[var(--neutral-800)] bg-[var(--white-2)] text-white placeholder:text-[var(--neutral-500)]"
                    />
                    {errors.message && (
                      <p className="text-sm text-[var(--warn)]" role="alert">
                        {errors.message}
                      </p>
                    )}
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    {t.pilot.submit}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
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
      <Label htmlFor={id} className="text-[var(--neutral-300)]">
        {label}
      </Label>
      <Input
        id={id}
        name={id}
        type={type}
        className="h-11 rounded-full border-[var(--neutral-800)] bg-[var(--white-2)] text-white"
      />
      {error && (
        <p className="text-sm text-[var(--warn)]" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

"use client";

import { useState, type ReactNode } from "react";
import { useI18n } from "@/components/language-provider";
import { cn } from "@/lib/utils";

type StatusTone = "ok" | "warn" | "info";
type StatusKey =
  | "verified"
  | "normalized"
  | "rulePassed"
  | "mathVerified"
  | "needsReview";
type NoteKey =
  | "calendarNormalized"
  | "formatCheck"
  | "sumMatches"
  | "stampOverlap"
  | "stampNearTotal"
  | "multiRow"
  | "tinCheck";

type ExtractedRow = {
  key: string;
  value: string;
  noteKey?: NoteKey;
  statusKey: StatusKey;
  tone: StatusTone;
};

type DocSample = {
  id: string;
  pagesEn: string;
  pagesAm: string;
  titleAm: string;
  titleEn: string;
  ref: string;
  date: string;
  fields: {
    id: string;
    labelKey: string;
    labelAm: string;
    labelEn: string;
    value: string;
    tone: StatusTone;
    stamped?: boolean;
  }[];
  table: {
    headers: [string, string, string, string];
    rows: [string, string, string, string][];
    totalLabel: string;
    totalValue: string;
  };
  extracted: ExtractedRow[];
  json: string;
};

const samples: DocSample[] = [
  {
    id: "commercial",
    pagesEn: "page 01 of 04",
    pagesAm: "ገጽ 01 ከ 04",
    titleAm: "የንግድ ምዝገባ እና የፈቃድ ማረጋገጫ ሰነድ",
    titleEn: "Commercial Registration & Compliance Record",
    ref: "CR-AA/10492/16",
    date: "14 / 06 / 2016 ዓ.ም",
    fields: [
      {
        id: "FIELD_01",
        labelKey: "LEGAL_ENTITY",
        labelAm: "የድርጅቱ ስም",
        labelEn: "Enterprise Name",
        value: "አዋሽ ኢንዱስትሪያል እና ሎጂስቲክስ ኃ/የተ/የግ/ማህበር",
        tone: "ok",
      },
      {
        id: "FIELD_02",
        labelKey: "TIN_NUMBER",
        labelAm: "የግብር ከፋይ መለያ ቁጥር",
        labelEn: "TIN",
        value: "0048291054",
        tone: "ok",
      },
      {
        id: "FIELD_03",
        labelKey: "REGISTERED_CAPITAL",
        labelAm: "የተመዘገበ ካፒታል",
        labelEn: "Registered Capital (ETB)",
        value: "14,500,000.00 ብር",
        tone: "warn",
        stamped: true,
      },
    ],
    table: {
      headers: [
        "ተ.ቁ",
        "የክፍያ ዓይነት / Description",
        "የሰነድ ቁጥር / Doc Ref",
        "መጠን (ብር) / Amount",
      ],
      rows: [
        ["01", "የንግድ ፈቃድ እድሳት / License Renewal", "REV-8821", "12,400.00"],
        ["02", "የአገልግሎት ክፍያ / Archival Service Fee", "REV-8822", "3,250.00"],
      ],
      totalLabel: "ድምር / Total",
      totalValue: "15,650.00",
    },
    extracted: [
      {
        key: "document_ref",
        value: "CR-AA/10492/16",
        statusKey: "verified",
        tone: "ok",
      },
      {
        key: "issue_date_et",
        value: "14/06/2016 ዓ.ም → 2024-02-22",
        noteKey: "calendarNormalized",
        statusKey: "normalized",
        tone: "info",
      },
      {
        key: "entity_name_am",
        value: "አዋሽ ኢንዱስትሪያል እና ሎጂስቲክስ ኃ/የተ/የግ/ማህበር",
        statusKey: "verified",
        tone: "ok",
      },
      {
        key: "tin_identifier",
        value: "0048291054",
        noteKey: "tinCheck",
        statusKey: "rulePassed",
        tone: "ok",
      },
      {
        key: "line_items_total",
        value: "15,650.00 ETB",
        noteKey: "sumMatches",
        statusKey: "mathVerified",
        tone: "ok",
      },
      {
        key: "registered_capital",
        value: "14,500,000.00 ETB",
        noteKey: "stampOverlap",
        statusKey: "needsReview",
        tone: "warn",
      },
    ],
    json: `{
  "document_ref": "CR-AA/10492/16",
  "issue_date": "2024-02-22",
  "tin": "0048291054",
  "line_items_total_etb": 15650.00,
  "review_flags": ["stamp_occlusion"]
}`,
  },
  {
    id: "waybill",
    pagesEn: "page 01 of 02",
    pagesAm: "ገጽ 01 ከ 02",
    titleAm: "የአቅርቦት ማስረከቢያ እና የግብር ደረሰኝ",
    titleEn: "Delivery Waybill & Tax Invoice",
    ref: "WB-ADD/77201/16",
    date: "02 / 08 / 2016 ዓ.ም",
    fields: [
      {
        id: "FIELD_01",
        labelKey: "SUPPLIER",
        labelAm: "አቅራቢ",
        labelEn: "Supplier",
        value: "ናይል ሎጂስቲክስ ኃ/የተ/የግ/ማህበር",
        tone: "ok",
      },
      {
        id: "FIELD_02",
        labelKey: "BUYER_TIN",
        labelAm: "ገዢ TIN",
        labelEn: "Buyer TIN",
        value: "0003918472",
        tone: "ok",
      },
      {
        id: "FIELD_03",
        labelKey: "INVOICE_TOTAL",
        labelAm: "ጠቅላላ ክፍያ",
        labelEn: "Invoice Total (ETB)",
        value: "87,920.50 ብር",
        tone: "warn",
        stamped: true,
      },
    ],
    table: {
      headers: [
        "ተ.ቁ",
        "ዝርዝር / Description",
        "ብዛት / Qty",
        "መጠን (ብር) / Amount",
      ],
      rows: [
        ["01", "የብረት ቱቦ / Steel pipe 2\"", "120", "42,000.00"],
        ["02", "የማሸጊያ ክፍያ / Packing", "1", "4,500.00"],
        ["03", "የትራንስፖርት ክፍያ / Freight", "1", "18,200.00"],
        ["04", "ተጨማሪ እሴት ታክስ 15% / VAT", "—", "9,705.00"],
        ["05", "የጉምሩክ አገልግሎት / Customs service", "1", "13,515.50"],
      ],
      totalLabel: "ድምር / Total",
      totalValue: "87,920.50",
    },
    extracted: [
      {
        key: "waybill_ref",
        value: "WB-ADD/77201/16",
        statusKey: "verified",
        tone: "ok",
      },
      {
        key: "issue_date_et",
        value: "02/08/2016 ዓ.ም → 2024-04-10",
        noteKey: "calendarNormalized",
        statusKey: "normalized",
        tone: "info",
      },
      {
        key: "supplier_name_am",
        value: "ናይል ሎጂስቲክስ ኃ/የተ/የግ/ማህበር",
        statusKey: "verified",
        tone: "ok",
      },
      {
        key: "buyer_tin",
        value: "0003918472",
        noteKey: "formatCheck",
        statusKey: "rulePassed",
        tone: "ok",
      },
      {
        key: "line_items_count",
        value: "5 rows",
        noteKey: "multiRow",
        statusKey: "verified",
        tone: "ok",
      },
      {
        key: "invoice_total",
        value: "87,920.50 ETB",
        noteKey: "stampNearTotal",
        statusKey: "needsReview",
        tone: "warn",
      },
    ],
    json: `{
  "waybill_ref": "WB-ADD/77201/16",
  "issue_date": "2024-04-10",
  "buyer_tin": "0003918472",
  "invoice_total_etb": 87920.50,
  "review_flags": ["stamp_near_total"]
}`,
  },
  {
    id: "clinical",
    pagesEn: "page 01 of 03",
    pagesAm: "ገጽ 01 ከ 03",
    titleAm: "የሕክምና ሪፈራል እና የኢንሹራንስ ክፍያ መጠየቂያ ቅጽ",
    titleEn: "Medical Referral & Insurance Claim Form",
    ref: "MR-AA/33901/16",
    date: "21 / 09 / 2016 ዓ.ም",
    fields: [
      {
        id: "FIELD_01",
        labelKey: "PATIENT_NAME",
        labelAm: "የታካሚ ስም",
        labelEn: "Patient Name",
        value: "ሃና ገብረዮሐንስ",
        tone: "ok",
      },
      {
        id: "FIELD_02",
        labelKey: "MEMBER_ID",
        labelAm: "የአባልነት መለያ",
        labelEn: "Insurance Member ID",
        value: "INS-ET-882194",
        tone: "ok",
      },
      {
        id: "FIELD_03",
        labelKey: "CLAIM_AMOUNT",
        labelAm: "የተጠየቀው የክፍያ መጠን",
        labelEn: "Claim Amount (ETB)",
        value: "8,740.00 ብር",
        tone: "warn",
        stamped: true,
      },
    ],
    table: {
      headers: [
        "ተ.ቁ",
        "የሕክምና አገልግሎት / Service",
        "ኮድ / Code",
        "መጠን (ብር) / Amount",
      ],
      rows: [
        ["01", "የላቦራቶሪ ምርመራ / Lab panel", "LAB-220", "2,150.00"],
        ["02", "የምስል ምርመራ / Imaging", "IMG-044", "4,800.00"],
        ["03", "የሐኪም ምክክር / Consultation", "CON-010", "1,790.00"],
      ],
      totalLabel: "ድምር / Total",
      totalValue: "8,740.00",
    },
    extracted: [
      {
        key: "referral_ref",
        value: "MR-AA/33901/16",
        statusKey: "verified",
        tone: "ok",
      },
      {
        key: "visit_date_et",
        value: "21/09/2016 ዓ.ም → 2024-05-29",
        noteKey: "calendarNormalized",
        statusKey: "normalized",
        tone: "info",
      },
      {
        key: "patient_name_am",
        value: "ሃና ገብረዮሐንስ",
        statusKey: "verified",
        tone: "ok",
      },
      {
        key: "member_id",
        value: "INS-ET-882194",
        statusKey: "rulePassed",
        tone: "ok",
      },
      {
        key: "services_total",
        value: "8,740.00 ETB",
        noteKey: "sumMatches",
        statusKey: "mathVerified",
        tone: "ok",
      },
      {
        key: "claim_amount",
        value: "8,740.00 ETB",
        noteKey: "stampOverlap",
        statusKey: "needsReview",
        tone: "warn",
      },
    ],
    json: `{
  "referral_ref": "MR-AA/33901/16",
  "visit_date": "2024-05-29",
  "member_id": "INS-ET-882194",
  "claim_total_etb": 8740.00,
  "review_flags": ["stamp_occlusion"]
}`,
  },
];

export function HeroDemo() {
  const { t, isAm } = useI18n();
  const [active, setActive] = useState(0);
  const sample = samples[active];
  const wb = t.workbench;

  return (
    <div className="w-full">
      <div
        className="mb-3 flex overflow-x-auto border border-border"
        role="tablist"
        aria-label="Document type samples"
      >
        {wb.tabs.map((tab, i) => (
          <button
            key={samples[i].id}
            type="button"
            role="tab"
            aria-selected={active === i}
            onClick={() => setActive(i)}
            className={cn(
              "shrink-0 border-r border-border px-3 py-2.5 text-[11px] tracking-wide transition-colors last:border-r-0 sm:px-4 sm:text-[12px]",
              isAm ? "font-ethiopic" : "font-mono",
              active === i
                ? "bg-secondary text-foreground"
                : "bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      <div
        className={cn(
          "mb-3 flex flex-wrap items-center justify-between gap-2",
          isAm && "font-ethiopic"
        )}
      >
        <p className="text-[12px] text-muted-foreground">{wb.disclaimer}</p>
        <p
          className={cn(
            "text-[11px] text-muted-foreground",
            !isAm && "font-mono"
          )}
        >
          {wb.flow}
        </p>
      </div>

      <div className="grid overflow-hidden rounded-md border border-border lg:grid-cols-2">
        <DocumentPanel sample={sample} />
        <InspectorPanel sample={sample} />
      </div>
    </div>
  );
}

function DocumentPanel({ sample }: { sample: DocSample }) {
  const { t, isAm } = useI18n();
  const wb = t.workbench;

  return (
    <div className="border-b border-border bg-[#161618] lg:border-b-0 lg:border-r">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <p
          className={cn(
            "text-[11px] uppercase tracking-[0.1em] text-muted-foreground",
            isAm ? "font-ethiopic normal-case tracking-normal" : "font-mono"
          )}
        >
          {wb.sourceDocument}
        </p>
        <p
          className={cn(
            "text-[11px] text-muted-foreground",
            isAm ? "font-ethiopic" : "font-mono"
          )}
        >
          {isAm ? sample.pagesAm : sample.pagesEn}
        </p>
      </div>

      <div className="blueprint-grid-fine max-h-[560px] overflow-y-auto p-3 sm:p-4">
        <article className="mx-auto max-w-lg bg-paper px-4 py-5 text-paper-ink shadow-[0_12px_40px_-20px_rgba(0,0,0,0.7)] sm:px-5 sm:py-6">
          <header className="border-b border-paper-line pb-4">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-ethiopic text-base font-semibold leading-snug tracking-tight sm:text-lg">
                  {sample.titleAm}
                </h3>
                <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.08em] text-paper-muted sm:text-[12px]">
                  {sample.titleEn}
                </p>
              </div>
              <div className="shrink-0 border border-paper-line px-2 py-1.5 text-right">
                <p className="font-mono text-[9px] text-paper-muted">
                  ቁጥር / Ref No.
                </p>
                <p className="font-mono text-[11px] font-medium">{sample.ref}</p>
                <p className="mt-1 font-mono text-[9px] text-paper-muted">
                  ቀን / Date
                </p>
                <p className="font-mono text-[11px]">{sample.date}</p>
              </div>
            </div>
          </header>

          <div className="mt-5 space-y-4">
            {sample.fields.map((field) => (
              <div key={field.id} className="relative">
                <p className="mb-1.5 text-[11px] text-paper-muted">
                  <span className="font-ethiopic">{field.labelAm}</span>
                  <span> / {field.labelEn}</span>
                </p>
                <FieldBox
                  id={field.id}
                  label={field.labelKey}
                  tone={field.tone}
                  stamped={field.stamped}
                >
                  <span className="font-ethiopic text-[13px] leading-snug sm:text-sm">
                    {field.value}
                  </span>
                </FieldBox>
              </div>
            ))}

            <div className="mt-2 overflow-hidden border border-paper-line">
              <div className="grid grid-cols-[2rem_1.4fr_0.9fr_0.85fr] bg-[#ebe6db] font-mono text-[8px] uppercase leading-tight tracking-wide text-paper-muted sm:text-[9px]">
                {sample.table.headers.map((h, i) => (
                  <span
                    key={h}
                    className={cn(
                      "px-1.5 py-1.5",
                      i < 3 && "border-r border-paper-line"
                    )}
                  >
                    {h}
                  </span>
                ))}
              </div>
              {sample.table.rows.map((row) => (
                <div
                  key={row[0]}
                  className="grid grid-cols-[2rem_1.4fr_0.9fr_0.85fr] border-t border-paper-line text-[10px] sm:text-[11px]"
                >
                  {row.map((cell, i) => (
                    <span
                      key={`${row[0]}-${i}`}
                      className={cn(
                        "px-1.5 py-1.5",
                        i === 1 && "font-ethiopic",
                        i < 3 && "border-r border-paper-line",
                        i === 3 && "font-mono text-right"
                      )}
                    >
                      {cell}
                    </span>
                  ))}
                </div>
              ))}
              <div className="grid grid-cols-[2rem_1.4fr_0.9fr_0.85fr] border-t border-paper-line bg-[#f7f3ea] text-[10px] font-medium sm:text-[11px]">
                <span className="border-r border-paper-line px-1.5 py-1.5" />
                <span className="font-ethiopic col-span-2 border-r border-paper-line px-1.5 py-1.5">
                  {sample.table.totalLabel}
                </span>
                <span className="px-1.5 py-1.5 text-right font-mono">
                  {sample.table.totalValue}
                </span>
              </div>
            </div>

            <div className="flex items-end justify-between gap-4 border-t border-dashed border-paper-line pt-4">
              <div className="flex size-12 items-center justify-center rounded-full border-2 border-dashed border-paper-muted/45">
                <span
                  className={cn(
                    "text-center text-[7px] leading-tight text-paper-muted",
                    isAm ? "font-ethiopic px-1" : "font-mono"
                  )}
                >
                  {wb.officialStamp}
                </span>
              </div>
              <div className="text-right">
                <div className="mb-1 h-px w-28 bg-paper-muted/35" />
                <p
                  className={cn(
                    "text-[9px] text-paper-muted",
                    isAm ? "font-ethiopic" : "font-mono"
                  )}
                >
                  {wb.authorizedSignature}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

function FieldBox({
  id,
  label,
  tone,
  stamped,
  children,
}: {
  id: string;
  label: string;
  tone: StatusTone;
  stamped?: boolean;
  children: ReactNode;
}) {
  const border =
    tone === "warn"
      ? "border-warn"
      : tone === "info"
        ? "border-[#60a5fa]"
        : "border-ok";
  const tag =
    tone === "warn"
      ? "bg-warn text-[#1c1405]"
      : tone === "info"
        ? "bg-[#60a5fa] text-[#0b1220]"
        : "bg-ok text-[#052e1c]";

  return (
    <div className={cn("relative border-2 bg-white/55 px-2.5 py-2", border)}>
      <span
        className={cn(
          "absolute -left-px -top-2.5 font-mono text-[8px] font-semibold tracking-wide px-1.5 py-0.5 leading-none",
          tag
        )}
      >
        {id} · {label}
      </span>
      {children}
      {stamped && (
        <div
          className="pointer-events-none absolute -right-1 -top-1 flex size-10 items-center justify-center rounded-full border border-[#b45309]/50 bg-[#b45309]/10 rotate-12"
          aria-hidden="true"
        >
          <span className="font-mono text-[6px] leading-none text-[#92400e]/80">
            STAMP
          </span>
        </div>
      )}
    </div>
  );
}

function InspectorPanel({ sample }: { sample: DocSample }) {
  const { t, isAm } = useI18n();
  const wb = t.workbench;

  return (
    <div className="flex min-h-0 flex-col bg-inspector">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <p
          className={cn(
            "text-[11px] text-muted-foreground",
            isAm ? "font-ethiopic" : "font-mono"
          )}
        >
          {wb.extractedRecord}
        </p>
        <div
          className={cn(
            "hidden items-center gap-3 text-[11px] sm:flex",
            isAm ? "font-ethiopic" : "font-mono"
          )}
        >
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <span className="size-1.5 rounded-full bg-ok" />
            {wb.checks}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <span className="size-1.5 rounded-full bg-warn" />
            {wb.review}
          </span>
        </div>
      </div>

      <div
        className={cn(
          "grid grid-cols-[1fr_1.35fr_0.85fr] gap-2 border-b border-border bg-[#0a0a0c] px-3 py-2 text-[9px] uppercase tracking-[0.1em] text-muted-foreground sm:px-4 sm:text-[10px]",
          isAm
            ? "font-ethiopic normal-case tracking-normal"
            : "font-mono"
        )}
      >
        <span>{wb.fieldKey}</span>
        <span>{wb.extractedNormalized}</span>
        <span>{wb.status}</span>
      </div>

      <div className="max-h-[340px] divide-y divide-border overflow-y-auto sm:max-h-none">
        {sample.extracted.map((row) => (
          <div
            key={row.key}
            className="grid grid-cols-[1fr_1.35fr_0.85fr] gap-2 px-3 py-2.5 sm:px-4 sm:py-3"
          >
            <p className="font-mono text-[11px] text-muted-foreground sm:text-[12px]">
              {row.key}
            </p>
            <div className="min-w-0">
              <p className="font-ethiopic text-[12px] leading-snug text-foreground sm:text-[13px]">
                {row.value}
              </p>
              {row.noteKey && (
                <p
                  className={cn(
                    "mt-0.5 text-[10px] text-muted-foreground",
                    isAm && "font-ethiopic"
                  )}
                >
                  {wb.notes[row.noteKey]}
                </p>
              )}
            </div>
            <StatusPill
              tone={row.tone}
              label={wb.statuses[row.statusKey]}
              ethiopic={isAm}
            />
          </div>
        ))}
      </div>

      <div className="mt-auto border-t border-border bg-[#0a0a0c] px-4 py-3">
        <p
          className={cn(
            "mb-2 text-[10px] uppercase tracking-[0.12em] text-muted-foreground",
            isAm
              ? "font-ethiopic normal-case tracking-normal"
              : "font-mono"
          )}
        >
          {wb.exportPreview}
        </p>
        <pre className="overflow-x-auto font-mono text-[11px] leading-relaxed text-muted-foreground">
          <code>{sample.json}</code>
        </pre>
      </div>
    </div>
  );
}

function StatusPill({
  tone,
  label,
  ethiopic,
}: {
  tone: StatusTone;
  label: string;
  ethiopic?: boolean;
}) {
  const dot =
    tone === "warn" ? "bg-warn" : tone === "info" ? "bg-[#60a5fa]" : "bg-ok";
  const text =
    tone === "warn"
      ? "text-warn"
      : tone === "info"
        ? "text-[#93c5fd]"
        : "text-muted-foreground";

  return (
    <span
      className={cn(
        "inline-flex items-start gap-1.5 text-[10px] leading-snug sm:text-[11px]",
        ethiopic ? "font-ethiopic" : "font-mono",
        text
      )}
    >
      <span className={cn("mt-1 size-1.5 shrink-0 rounded-full", dot)} />
      {label}
    </span>
  );
}

"use client";

import { useRef } from "react";
import {
  Hammer,
  Ruler,
  Paintbrush,
  TestTube,
  ShieldCheck,
  Bug,
  ShieldAlert,
  FileText,
  CheckCircle2,
} from "lucide-react";
import { Section } from "@/components/section";
import { FadeIn } from "@/components/fade-in";

const GATES = [
  {
    icon: Hammer,
    name: "Build",
    standard: "0 errors",
    detail: "Clean compilation required",
  },
  {
    icon: Ruler,
    name: "Types",
    standard: "0 errors",
    detail: "tsc --noEmit must pass",
  },
  {
    icon: Paintbrush,
    name: "Lint",
    standard: "0 warnings",
    detail: "ESLint / Ruff enforced",
  },
  {
    icon: TestTube,
    name: "Tests",
    standard: "80%+ coverage",
    detail: "All tests must pass",
  },
  {
    icon: ShieldCheck,
    name: "Security",
    standard: "No OWASP vulnerabilities",
    detail: "Zero known security issues",
  },
  {
    icon: Bug,
    name: "Debug logs",
    standard: "0 in production",
    detail: "No console.log in src/",
  },
  {
    icon: ShieldAlert,
    name: "Type safety",
    standard: "No any or unsafe casts",
    detail: "Strict TypeScript only",
  },
  {
    icon: FileText,
    name: "File size",
    standard: "Max 300 lines",
    detail: "Single-responsibility enforced",
  },
];

function GateRow({
  gate,
  index,
}: {
  gate: (typeof GATES)[0];
  index: number;
}) {
  const Icon = gate.icon;

  return (
    <div className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:border-accent/30 hover:bg-accent-light/30 hover:shadow-sm"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-light text-accent transition-colors group-hover:bg-accent/10">
        <Icon size={18} strokeWidth={1.75} />
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="text-sm font-semibold text-text-primary">
            {gate.name}
          </span>
          <span className="hidden text-xs text-text-muted sm:inline">
            {gate.detail}
          </span>
        </div>
        <p className="text-xs font-medium text-accent">{gate.standard}</p>
      </div>

      <div className="shrink-0"
      >
        <CheckCircle2 size={18} className="text-accent" strokeWidth={2} />
      </div>
    </div>
  );
}

export function QualityGates() {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <Section
      id="quality-gates"
      label="AI development quality"
      title="8 gates. Zero exceptions."
      description="Effectum enforces AI development quality with 8 automated checks on every build. Production standards enforced by the framework — not suggestions, hard requirements."
      className="bg-surface"
    >
      <FadeIn>
        <div ref={ref} className="mx-auto max-w-3xl space-y-3">
          {GATES.map((gate, i) => (
            <GateRow
              key={gate.name}
              gate={gate}
              index={i}
            />
          ))}

          <div className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-accent/25 bg-gradient-to-r from-accent-light to-accent-light/50 px-6 py-4"
          >
            <CheckCircle2 size={20} className="text-accent" strokeWidth={2} />
            <span className="text-sm font-semibold text-text-primary">
              All 8 must pass — no partial credit
            </span>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

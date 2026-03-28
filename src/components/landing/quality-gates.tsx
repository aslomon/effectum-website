"use client";

import { motion, useInView } from "framer-motion";
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
  isInView,
}: {
  gate: (typeof GATES)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = gate.icon;

  return (
    <motion.div
      initial={{ opacity: 0, x: -12 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
      transition={{ duration: 0.2, delay: index * 0.07 }}
      className="group flex items-center gap-4 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:border-accent/30 hover:bg-accent-light/30 hover:shadow-sm"
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

      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
        transition={{ duration: 0.2, delay: index * 0.07 + 0.25 }}
        className="shrink-0"
      >
        <CheckCircle2 size={18} className="text-accent" strokeWidth={2} />
      </motion.div>
    </motion.div>
  );
}

export function QualityGates() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section
      id="quality-gates"
      label="Quality enforcement"
      title="8 gates. Zero exceptions."
      description="Every feature must pass all 8 automated quality checks before shipping. These are requirements, not suggestions."
      className="bg-surface"
    >
      <FadeIn>
        <div ref={ref} className="mx-auto max-w-3xl space-y-3">
          {GATES.map((gate, i) => (
            <GateRow
              key={gate.name}
              gate={gate}
              index={i}
              isInView={isInView}
            />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="mt-6 flex items-center justify-center gap-3 rounded-xl border border-accent/25 bg-gradient-to-r from-accent-light to-accent-light/50 px-6 py-4"
          >
            <CheckCircle2 size={20} className="text-accent" strokeWidth={2} />
            <span className="text-sm font-semibold text-text-primary">
              All 8 must pass — no partial credit
            </span>
          </motion.div>
        </div>
      </FadeIn>
    </Section>
  );
}

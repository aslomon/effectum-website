"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Download, FileText, Map, Code, ShieldCheck, Eye } from "lucide-react";
import { Section } from "@/components/section";

const STEPS = [
  {
    number: 1,
    title: "Setup",
    description:
      "Install effectum into your project with one command. It configures your CLAUDE.md, selects a stack preset, and wires up all quality gates and guardrails.",
    command: "npx @aslomon/effectum",
    icon: Download,
    detail:
      "Supports Next.js, Python/FastAPI, Swift/SwiftUI, and a generic stack-agnostic preset.",
  },
  {
    number: 2,
    title: "Spec",
    description:
      "Write a structured PRD using the guided workshop. Adaptive questioning turns vague ideas into precise, actionable specifications with clear acceptance criteria.",
    command: "/prd:new",
    icon: FileText,
    detail:
      "Workshop mode for vague ideas, express mode for clear input. Decomposes large projects automatically.",
  },
  {
    number: 3,
    title: "Plan",
    description:
      "Claude analyzes the spec and creates a detailed implementation strategy — file structure, data models, API contracts — before touching any code.",
    command: "/plan",
    icon: Map,
    detail:
      "Waits for your approval before proceeding. No surprises, no unexpected architecture decisions.",
  },
  {
    number: 4,
    title: "Implement",
    description:
      "Test-driven development at scale. Claude writes failing tests, then implements code to make them pass, following your established patterns.",
    command: "/tdd",
    icon: Code,
    detail:
      "Strict TypeScript, no any types, no unsafe casts. Colocated tests, single-responsibility functions.",
  },
  {
    number: 5,
    title: "Verify",
    description:
      "Eight quality gates enforced in sequence: build, types, lint, tests, security, debug logs, type safety, and file size. Zero tolerance.",
    command: "/verify",
    icon: ShieldCheck,
    detail:
      "Done means compiles + tests pass + linter clean. Not suggested — required.",
  },
  {
    number: 6,
    title: "Review",
    description:
      "Automated security audit and architecture validation. OWASP vulnerability scanning, dependency review, and code quality checks before shipping.",
    command: "/code-review",
    icon: Eye,
    detail:
      "Blocks commits with security issues. Enforces architecture rules defined in your CLAUDE.md.",
  },
];

function PipelineStep({
  step,
  index,
  isActive,
  isInView,
  onActivate,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isActive: boolean;
  isInView: boolean;
  onActivate: () => void;
}) {
  const Icon = step.icon;
  const isLast = index === STEPS.length - 1;

  return (
    <div className="relative">
      {/* Vertical connector line */}
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.4, delay: index * 0.1 + 0.3 }}
          className="absolute left-5 top-10 h-full w-px origin-top bg-gradient-to-b from-border to-border/20"
        />
      )}

      <motion.button
        type="button"
        initial={{ opacity: 0, x: -16 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
        transition={{ duration: 0.4, delay: index * 0.08 }}
        onClick={onActivate}
        className={`relative flex w-full items-start gap-4 rounded-xl px-4 py-3.5 text-left transition-all duration-200 ${
          isActive
            ? "bg-accent/8 ring-1 ring-accent/20"
            : "hover:bg-background/60"
        }`}
      >
        {/* Step number bubble */}
        <div
          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-200 ${
            isActive
              ? "bg-accent text-white shadow-md shadow-amber-600/30"
              : "bg-background ring-1 ring-border text-text-muted"
          }`}
        >
          {isActive ? <Icon size={16} strokeWidth={2} /> : step.number}
        </div>

        {/* Step text */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex items-center gap-2">
            <span
              className={`text-sm font-semibold transition-colors duration-200 ${
                isActive ? "text-accent" : "text-text-primary"
              }`}
            >
              {step.title}
            </span>
            <code
              className={`rounded px-1.5 py-0.5 font-mono text-xs transition-all duration-200 ${
                isActive
                  ? "bg-accent/10 text-accent"
                  : "bg-background text-text-muted"
              }`}
            >
              {step.command}
            </code>
          </div>
          <p className="mt-0.5 line-clamp-1 text-xs text-text-muted">
            {step.description}
          </p>
        </div>

        {/* Active indicator — static left border */}
        {isActive && (
          <div className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-accent" />
        )}
      </motion.button>
    </div>
  );
}

function StepDetail({
  step,
  isInView,
}: {
  step: (typeof STEPS)[0];
  isInView: boolean;
}) {
  const Icon = step.icon;

  return (
    <motion.div
      key={step.number}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <div className="flex h-full flex-col rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-background to-amber-50/30 p-8 dark:to-transparent">
        {/* Step header */}
        <div className="mb-6 flex items-center gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-sm shadow-amber-600/10">
            <Icon size={26} strokeWidth={1.5} />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-accent/70">
              Step {step.number} of {STEPS.length}
            </p>
            <h3 className="text-2xl font-bold text-text-primary">
              {step.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-base leading-relaxed text-text-secondary">
          {step.description}
        </p>

        {/* Detail callout */}
        <div className="mt-6 rounded-xl border border-border bg-surface/80 p-4">
          <p className="text-sm leading-relaxed text-text-secondary">
            {step.detail}
          </p>
        </div>

        {/* Command block */}
        <div className="mt-auto pt-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
            Command
          </p>
          <div className="flex items-center gap-3 rounded-xl border border-code-border bg-code-bg px-5 py-4">
            <span className="select-none font-mono text-sm text-accent">$</span>
            <code className="font-mono text-sm text-code-text">
              {step.command}
            </code>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Mobile single-step card for smaller screens
function MobileStep({
  step,
  index,
  isInView,
}: {
  step: (typeof STEPS)[0];
  index: number;
  isInView: boolean;
}) {
  const Icon = step.icon;
  const isLast = index === STEPS.length - 1;

  return (
    <div className="relative">
      {!isLast && (
        <motion.div
          initial={{ scaleY: 0 }}
          animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.25 }}
          className="absolute left-5 top-10 h-[calc(100%+1rem)] w-px origin-top bg-gradient-to-b from-accent/30 to-border/20"
        />
      )}

      <motion.div
        initial={{ opacity: 0, x: -12 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
        transition={{ duration: 0.4, delay: index * 0.09 }}
        className="relative flex gap-4 pb-4"
      >
        <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-sm shadow-amber-600/20">
          <Icon size={16} strokeWidth={2} />
        </div>

        <div className="flex flex-1 flex-col rounded-xl border border-border bg-surface p-4">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-text-primary">
              {step.title}
            </span>
            <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-xs text-accent">
              {step.command}
            </code>
          </div>
          <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
            {step.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [activeStep, setActiveStep] = useState(0);

  return (
    <Section
      id="how-it-works"
      label="Workflow"
      title="How it works"
      description="Six steps from idea to production-ready code — a complete development pipeline."
      className="bg-surface"
    >
      <div ref={ref} className="mx-auto max-w-6xl">
        {/* Desktop: two-column pipeline layout */}
        <div className="hidden lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-8 xl:gap-12">
          {/* Left: step list */}
          <div className="flex flex-col gap-1">
            {STEPS.map((step, i) => (
              <PipelineStep
                key={step.number}
                step={step}
                index={i}
                isActive={activeStep === i}
                isInView={isInView}
                onActivate={() => setActiveStep(i)}
              />
            ))}
          </div>

          {/* Right: detail panel */}
          <div className="sticky top-24 h-fit">
            <StepDetail step={STEPS[activeStep]} isInView={isInView} />
          </div>
        </div>

        {/* Mobile: vertical stacked pipeline */}
        <div className="flex flex-col gap-1 lg:hidden">
          {STEPS.map((step, i) => (
            <MobileStep
              key={step.number}
              step={step}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}

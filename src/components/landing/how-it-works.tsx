"use client";

import { useRef, useState } from "react";
import {
  Download,
  Compass,
  FileText,
  Send,
  Save,
  Play,
} from "lucide-react";

const STEPS = [
  {
    label: "Setup",
    command: "npx @aslomon/effectum",
    description:
      "Install effectum into your project with one command. Choose from 7 modular stacks or 8 quick presets — it configures CLAUDE.md, guardrails, and quality gates automatically.",
    detail:
      "Supports Next.js, Python, Swift, Go, Rust, Deno — plus 8 quick presets for SaaS, API, CLI, and more.",
    icon: Download,
  },
  {
    label: "Orient",
    command: "/effectum",
    description:
      "Always start here. See your 3 user journeys — New Project, Existing Codebase, or Feature Build — and get pointed to the right next step. Type /next any time you're lost.",
    detail:
      "Journey A: new project. Journey B: existing codebase with /onboard. Journey C: quick feature iteration.",
    icon: Compass,
  },
  {
    label: "Spec",
    command: "/prd:new",
    description:
      "Write a structured PRD using the guided workshop. Adaptive questioning turns vague ideas into precise, actionable specifications with clear acceptance criteria.",
    detail:
      "Workshop mode asks 12–15 questions. Express mode generates from a one-liner. Run /prd:review before handoff.",
    icon: FileText,
  },
  {
    label: "Handoff",
    command: "/prd:handoff",
    description:
      "Export the finished spec to the target project. This generates the build prompt that /run will use — the bridge between your spec and the autonomous build loop.",
    detail:
      "Validates PRD completeness, sets status to 'ready', copies to target project, and tells you exactly what to run next.",
    icon: Send,
  },
  {
    label: "Save",
    command: "/save",
    description:
      "Create a git restore point before the autonomous build. Your safety net — if /run takes an unexpected direction, roll back instantly with one command.",
    detail:
      "Creates a tagged git commit. Zero cost, pure upside. Always /save before /run.",
    icon: Save,
  },
  {
    label: "Build",
    command: "/run",
    description:
      "Claude builds autonomously — writing code, running tests, fixing errors, iterating — until every quality gate passes and your completion promise is 100% true.",
    detail:
      "Built-in stuck detection, context budget monitor, and error recovery. Use --max-iterations 50 for overnight builds.",
    icon: Play,
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
    const [active, setActive] = useState(0);

  const ActiveIcon = STEPS[active].icon;

  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Workflow
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            How the Effectum framework works
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            From idea to production-ready code — a complete Claude Code development
            workflow in six steps.
          </p>
        </div>

        <div ref={ref} className="mt-16 mx-auto max-w-5xl">
          <div className="hidden lg:grid lg:grid-cols-[1fr_1.1fr] lg:gap-8 xl:gap-12">
            {/* Steps list */}
            <div className="flex flex-col gap-1">
              {STEPS.map((step, i) => {
                const Icon = step.icon;
                const isActive = active === i;
                return (
                  <div
                    key={step.label}>
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      className={`relative flex w-full items-start gap-4 rounded-xl px-4 py-3.5 text-left transition-all duration-200 ${
                        isActive
                          ? "bg-accent/8 ring-1 ring-accent/20"
                          : "hover:bg-background/60"
                      }`}
                    >
                      <div
                        className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold transition-all duration-200 ${
                          isActive
                            ? "bg-accent text-white shadow-md shadow-amber-600/30"
                            : "bg-background ring-1 ring-border text-text-muted"
                        }`}
                      >
                        {isActive ? (
                          <Icon size={16} />
                        ) : (
                          <span>{i + 1}</span>
                        )}
                      </div>
                      <div className="flex min-w-0 flex-1 flex-col">
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-sm font-semibold transition-colors duration-200 ${
                              isActive ? "text-accent" : "text-text-primary"
                            }`}
                          >
                            {step.label}
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
                      {isActive && (
                        <div className="absolute inset-y-2 left-0 w-0.5 rounded-full bg-accent" />
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Detail panel */}
            <div className="sticky top-24 h-fit">
              <div
                key={active}
                className="flex h-full flex-col rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-background to-amber-50/30 p-8 dark:to-transparent"
              >
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent shadow-sm shadow-amber-600/10">
                    <ActiveIcon size={26} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-accent/70">
                      Step {active + 1} of {STEPS.length}
                    </p>
                    <h3 className="text-2xl font-bold text-text-primary">
                      {STEPS[active].label}
                    </h3>
                  </div>
                </div>
                <p className="text-base leading-relaxed text-text-secondary">
                  {STEPS[active].description}
                </p>
                <div className="mt-6 rounded-xl border border-border bg-surface/80 p-4">
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {STEPS[active].detail}
                  </p>
                </div>
                <div className="mt-auto pt-8">
                  <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
                    Command
                  </p>
                  <div className="flex items-center gap-3 rounded-xl border border-code-border bg-code-bg px-5 py-4">
                    <span className="select-none font-mono text-sm text-accent">
                      $
                    </span>
                    <code className="font-mono text-sm text-code-text">
                      {STEPS[active].command}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex flex-col gap-1 lg:hidden">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.label}className="relative"
                >
                  {i < STEPS.length - 1 && (
                    <div className="absolute left-5 top-10 h-[calc(100%+1rem)] w-px bg-gradient-to-b from-accent/30 to-border/20" />
                  )}
                  <div className="relative flex gap-4 pb-4">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-sm shadow-amber-600/20">
                      <Icon size={16} />
                    </div>
                    <div className="flex flex-1 flex-col rounded-xl border border-border bg-surface p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-text-primary">
                          {step.label}
                        </span>
                        <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-xs text-accent">
                          {step.command}
                        </code>
                      </div>
                      <p className="mt-1.5 text-xs leading-relaxed text-text-secondary">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

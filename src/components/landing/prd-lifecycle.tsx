"use client";

import { useRef } from "react";
import { FileText, RefreshCw, ListChecks, GitBranch } from "lucide-react";

const PHASES = [
  {
    command: "/prd:new",
    title: "Create",
    desc: "Workshop or express mode. Guided questions turn vague ideas into precise, actionable specifications.",
    icon: FileText,
  },
  {
    command: "/prd:review",
    title: "Review",
    desc: "Quality check before handing off. Flags missing acceptance criteria, vague goals, and unverifiable completion promises.",
    icon: ListChecks,
  },
  {
    command: "/prd:handoff",
    title: "Hand off",
    desc: "Export the finished spec to your target project — ready for /run. The bridge between spec and autonomous build.",
    icon: GitBranch,
  },
  {
    command: "/run",
    title: "Build",
    desc: "Claude builds autonomously — writing code, running tests, fixing errors — until every quality gate passes.",
    icon: RefreshCw,
  },
];

const DELTA_LINES = [
  { text: "# PRD auto-updated after implementation", muted: true },
  { text: "- [x] User authentication flow", accent: true },
  { text: "- [x] Database schema + migrations", accent: true },
  { text: "- [x] API endpoints: /auth, /users", accent: true },
  { text: "- [ ] Email notifications", muted: false },
  { text: "- [ ] Admin dashboard", muted: false },
];

export function PrdLifecycle() {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <section id="prd-lifecycle" className="py-24 sm:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Specifications
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            Your PRD evolves with your code
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Specs aren&apos;t static documents — they&apos;re living artifacts
            that update as your implementation progresses.
          </p>
        </div>

        <div ref={ref} className="mt-16">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {PHASES.map((phase, i) => {
                const Icon = phase.icon;
                return (
                  <div
                    key={phase.command}
                    className="group relative"
                  >
                    {i < PHASES.length - 1 && (
                      <div className="pointer-events-none absolute -right-2 top-12 hidden h-px w-4 bg-gradient-to-r from-border to-border/30 lg:block" />
                    )}
                    <div className="flex h-full flex-col rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md hover:shadow-amber-900/5">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                          <Icon size={18} strokeWidth={1.75} />
                        </div>
                        <code className="rounded bg-code-bg px-2 py-1 font-mono text-xs text-accent">
                          {phase.command}
                        </code>
                      </div>
                      <h3 className="text-base font-semibold text-text-primary">
                        {phase.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                        {phase.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 overflow-hidden rounded-2xl border border-code-border bg-code-bg"
            >
              <div className="border-b border-white/10 px-5 py-3">
                <span className="text-xs font-semibold text-code-text/50">
                  Delta handoff example
                </span>
              </div>
              <div className="px-5 py-4">
                <pre className="font-mono text-sm leading-relaxed text-code-text">
                  {DELTA_LINES.map((line, i) => (
                    <div key={i}>
                      <span
                        className={
                          line.muted
                            ? "text-text-muted"
                            : line.accent
                              ? "text-accent"
                              : "text-code-text"
                        }
                      >
                        {line.text}
                      </span>
                      {"\n"}
                    </div>
                  ))}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

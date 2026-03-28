"use client";

import { useRef } from "react";
import { ExternalLink, Sparkles, Check } from "lucide-react";

const TESTED = [
  {
    name: "BMAD",
    url: "https://github.com/bmad-code-org/BMAD-METHOD",
    what: "Full enterprise framework with agent roles",
    kept: "Structured PRD approach",
    dropped: "Too much ceremony for small teams",
  },
  {
    name: "GSD",
    url: "https://github.com/coleam00/context-engineering-intro",
    what: "Context engineering, prevents context rot",
    kept: "Context management patterns",
    dropped: "No spec tooling — great builder, weak planner",
  },
  {
    name: "SpecKit",
    url: "https://github.com/dceoy/speckit-agent-skills",
    what: "Living specifications that stay in sync",
    kept: "Spec-driven development",
    dropped: "No autonomous execution",
  },
  {
    name: "Taskmaster",
    url: "https://github.com/eyaltoledano/claude-task-master",
    what: "Task decomposition from PRDs",
    kept: "Task breakdown + dependencies",
    dropped: "No TDD, no code review, no E2E",
  },
];

const COMBINED = [
  { label: "Structured PRDs", from: "BMAD" },
  { label: "Context engineering", from: "GSD" },
  { label: "Spec-driven development", from: "SpecKit" },
  { label: "Task decomposition", from: "Taskmaster" },
  { label: "Test-driven development", from: "New" },
  { label: "8 automated quality gates", from: "New" },
  { label: "Autonomous Ralph Loop", from: "New" },
  { label: "Stack-aware guardrails", from: "New" },
];

export function Story() {
  const ref = useRef<HTMLDivElement>(null);
  
  return (
    <section id="story" className="relative overflow-hidden py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            The origin
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
            2 years of testing methods.{" "}
            <span className="text-accent">This is what survived.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-secondary sm:text-lg">
            Every approach had strengths, but none had everything. effectum
            combines the pieces that actually work — the perfect mix of
            generative intelligence and the structure of a program.
          </p>
        </div>

        <div
          ref={ref}
          className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-[1.1fr_1fr]"
        >
          {/* Left: tested tools */}
          <div className="space-y-3">
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-text-muted">
              What we tested
            </h3>
            {TESTED.map((item, i) => (
              <div
                key={item.name}className="rounded-xl border border-border bg-surface p-4"
              >
                <div className="flex items-center justify-between">
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-1.5"
                  >
                    <span className="text-sm font-bold text-text-primary group-hover:text-accent">
                      {item.name}
                    </span>
                    <ExternalLink
                      size={11}
                      className="text-text-muted group-hover:text-accent"
                    />
                  </a>
                  <div className="flex gap-3 text-xs">
                    <span className="text-success">Kept: {item.kept}</span>
                  </div>
                </div>
                <p className="mt-1 text-xs text-text-muted">{item.what}</p>
                <p className="mt-1 text-xs text-red-400/80 dark:text-red-500/70">
                  {item.dropped}
                </p>
              </div>
            ))}
          </div>

          {/* Right: what effectum combines */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-wider text-accent">
              What effectum combines
            </h3>
            <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent-light/50 via-background to-accent-light/10 p-5">
              <div className="space-y-2">
                {COMBINED.map((item, i) => (
                  <div
                    key={item.label}className="flex items-center justify-between rounded-lg border border-accent/10 bg-surface/70 px-4 py-3"
                  >
                    <div className="flex items-center gap-2.5">
                      <Check
                        size={14}
                        className="shrink-0 text-accent"
                        strokeWidth={2.5}
                      />
                      <span className="text-sm font-medium text-text-primary">
                        {item.label}
                      </span>
                    </div>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                        item.from === "New"
                          ? "bg-accent/10 text-accent"
                          : "bg-background text-text-muted"
                      }`}
                    >
                      {item.from === "New" ? "effectum" : `from ${item.from}`}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-accent/25 bg-accent/5 px-4 py-3"
              >
                <Sparkles size={14} className="text-accent" />
                <span className="text-xs font-semibold text-text-primary">
                  One install. Full pipeline. No framework switching.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

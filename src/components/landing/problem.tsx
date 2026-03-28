"use client";

import { X, Check } from "lucide-react";
import { Section } from "@/components/section";

const WITHOUT = [
  {
    heading: "Vague prompt, vague output",
    body: "Describe features loosely, get code that sort of works. Back-and-forth until something compiles.",
  },
  {
    heading: "Endless re-explanation",
    body: "Clarify, re-generate, clarify again. Hours lost before a single line ships.",
  },
  {
    heading: "No quality guarantees",
    body: "Code compiles, but no tests, no security checks, no type safety. You become the quality gate.",
  },
  {
    heading: "Manual review of everything",
    body: "You spend more time reviewing AI output than you would writing it yourself.",
  },
];

const WITH = [
  {
    heading: "Structured spec, structured output",
    body: "Every feature starts with a PRD. Clear requirements, acceptance criteria, and no ambiguity.",
  },
  {
    heading: "Write once, build autonomously",
    body: "The PRD Workshop ensures Claude understands exactly what you want before touching code.",
  },
  {
    heading: "8 automated quality gates",
    body: "Build, types, tests, security, lint — all enforced in sequence. Not suggested. Required.",
  },
  {
    heading: "Sleep while it builds",
    body: "The Ralph Loop iterates autonomously until every gate passes and your completion promise is true.",
  },
];

export function Problem() {
  return (
    <Section
      id="why"
      label="The problem"
      title="Unstructured AI coding produces mediocre results"
      description="The gap between 'describe what you want' and 'get production-ready code' is filled with vague handoffs, back-and-forth, and code that nobody would ship. A development framework closes that gap."
    >
      <div className="mx-auto max-w-5xl">
        <div
          className="grid gap-0 overflow-hidden rounded-2xl border border-border md:grid-cols-2"
        >
          {/* Left: without effectum — dim, faded */}
          <div className="relative bg-background/60 p-7 dark:bg-surface/30">
            {/* Subtle diagonal lines texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.025]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(-45deg, #111827 0, #111827 1px, transparent 0, transparent 50%)",
                backgroundSize: "8px 8px",
              }}
            />

            <div className="relative">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-red-100 text-red-400 dark:bg-red-950/50 dark:text-red-400">
                  <X size={15} strokeWidth={2.5} />
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-text-muted">
                  Without effectum
                </h3>
              </div>

              <div className="space-y-5">
                {WITHOUT.map((item, i) => (
                  <div
                    key={item.heading}
                    className="flex gap-3"
                  >
                    <X
                      size={15}
                      className="mt-1 shrink-0 text-red-400/70 dark:text-red-500/60"
                      strokeWidth={2}
                    />
                    <div>
                      <p className="text-sm font-medium text-text-muted">
                        {item.heading}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-text-muted/70">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden w-px bg-gradient-to-b from-border via-accent/20 to-border md:block" />

          {/* Right: with effectum — vibrant, amber accents */}
          <div className="relative bg-gradient-to-br from-accent-light/60 via-background to-background p-7">
            {/* Amber glow in corner */}
            <div className="pointer-events-none absolute right-0 top-0 h-40 w-40 rounded-bl-full bg-gradient-to-bl from-amber-100/40 to-transparent dark:from-amber-900/20" />

            <div className="relative">
              <div className="mb-5 flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check size={15} strokeWidth={2.5} />
                </span>
                <h3 className="text-sm font-bold uppercase tracking-wider text-accent">
                  With effectum
                </h3>
              </div>

              <div className="space-y-5">
                {WITH.map((item, i) => (
                  <div
                    key={item.heading}
                    className="flex gap-3"
                  >
                    <Check
                      size={15}
                      className="mt-1 shrink-0 text-accent"
                      strokeWidth={2}
                    />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {item.heading}
                      </p>
                      <p className="mt-0.5 text-xs leading-relaxed text-text-secondary">
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

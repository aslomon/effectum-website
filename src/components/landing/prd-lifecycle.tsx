"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, GitBranch, ListChecks, RefreshCw } from "lucide-react";
import { Section } from "@/components/section";

const LIFECYCLE_STEPS = [
  {
    command: "/prd:new",
    title: "Create",
    description:
      "Workshop or express mode. Guided questions turn vague ideas into precise, actionable specifications.",
    icon: FileText,
  },
  {
    command: "/prd:update",
    title: "Update",
    description:
      "Delta handoff — only what changed gets applied. Your PRD stays in sync with implementation reality.",
    icon: RefreshCw,
  },
  {
    command: "/prd:status",
    title: "Track",
    description:
      "Task registry shows completion per section. See exactly what's done and what's left at a glance.",
    icon: ListChecks,
  },
  {
    command: "/prd:decompose",
    title: "Decompose",
    description:
      "Large projects split into manageable child PRDs automatically. Each one is independently buildable.",
    icon: GitBranch,
  },
];

export function PrdLifecycle() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="prd-lifecycle"
      label="Specifications"
      title="Your PRD evolves with your code"
      description="Specs aren't static documents — they're living artifacts that update as your implementation progresses."
      className="bg-surface"
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        {/* Lifecycle flow */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LIFECYCLE_STEPS.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === LIFECYCLE_STEPS.length - 1;

            return (
              <motion.div
                key={step.command}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group relative"
              >
                {/* Connector arrow (desktop only) */}
                {!isLast && (
                  <div className="pointer-events-none absolute -right-2 top-12 hidden h-px w-4 bg-gradient-to-r from-border to-border/30 lg:block" />
                )}

                <div className="flex h-full flex-col rounded-xl border border-border bg-background p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md hover:shadow-amber-900/5">
                  {/* Step number + icon */}
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                      <Icon size={18} strokeWidth={1.75} />
                    </div>
                    <code className="rounded bg-code-bg px-2 py-1 font-mono text-xs text-accent">
                      {step.command}
                    </code>
                  </div>

                  <h3 className="text-base font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Delta handoff highlight */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          className="mt-8 overflow-hidden rounded-2xl border border-code-border bg-code-bg"
        >
          <div className="border-b border-white/10 px-5 py-3">
            <span className="text-xs font-semibold text-code-text/50">
              Delta handoff example
            </span>
          </div>
          <div className="px-5 py-4">
            <pre className="font-mono text-sm leading-relaxed text-code-text">
              <span className="text-text-muted">
                # PRD auto-updated after implementation
              </span>
              {"\n"}
              <span className="text-accent">- [x]</span>
              {" User authentication flow"}
              {"\n"}
              <span className="text-accent">- [x]</span>
              {" Database schema + migrations"}
              {"\n"}
              <span className="text-emerald-400">- [ ]</span>
              {" Payment integration "}
              <span className="text-text-muted">← next</span>
              {"\n"}
              <span className="text-emerald-400">- [ ]</span>
              {" Email notifications"}
            </pre>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

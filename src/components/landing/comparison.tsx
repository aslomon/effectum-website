"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { Section } from "@/components/section";

const COMPARISONS = [
  {
    name: "GSD",
    tagline: "Get Stuff Done",
    strength: "Context engineering, prevents context rot",
    adds: "PRD Workshop + Ralph Loop for autonomous builds",
    color: "blue",
  },
  {
    name: "BMAD",
    tagline: "Be More Agile Daily",
    strength: "Full enterprise methodology with agent roles",
    adds: "Same core ideas, 90% less ceremony",
    color: "purple",
  },
  {
    name: "SpecKit",
    tagline: "Living specifications",
    strength: "Structured specs that stay in sync with code",
    adds: "Autonomous execution + quality gates",
    color: "emerald",
  },
  {
    name: "Taskmaster",
    tagline: "Task decomposition",
    strength: "Task breakdown from PRDs, dependency graph",
    adds: "TDD workflow + code review + E2E testing",
    color: "rose",
  },
  {
    name: "Kiro",
    tagline: "IDE-native spec-driven dev",
    strength: "Spec-driven development inside VS Code (IDE fork)",
    adds: "CLI-native — no IDE required, works in any editor",
    color: "orange",
  },
];

export function Comparison() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <Section
      id="comparison"
      label="How it compares"
      title="The best ideas, combined"
      description="effectum combines what works from existing tools, removes what doesn't, and packages it so it actually runs."
    >
      <div ref={ref} className="mx-auto max-w-4xl">
        {/* Comparison cards */}
        <div className="space-y-3">
          {COMPARISONS.map((comp, i) => (
            <motion.div
              key={comp.name}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.35, delay: i * 0.09 }}
              className="group grid items-center gap-4 rounded-2xl border border-border bg-surface p-5 transition-all duration-200 hover:border-accent/25 hover:shadow-sm sm:grid-cols-[140px_1fr_32px_1fr]"
            >
              {/* Tool name */}
              <div>
                <span className="text-base font-bold text-text-primary">
                  {comp.name}
                </span>
                <p className="text-xs text-text-muted">{comp.tagline}</p>
              </div>

              {/* What it brings */}
              <div className="rounded-lg border border-border/60 bg-background px-3 py-2 text-sm text-text-secondary">
                {comp.strength}
              </div>

              {/* Arrow */}
              <div className="hidden items-center justify-center sm:flex">
                <ArrowRight
                  size={16}
                  className="text-accent/50 transition-colors duration-200 group-hover:text-accent"
                />
              </div>

              {/* What effectum adds */}
              <div className="flex items-center gap-2 rounded-lg border border-accent/20 bg-accent/5 px-3 py-2 text-sm font-medium text-accent">
                <Zap size={13} strokeWidth={2} className="shrink-0" />
                {comp.adds}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary banner */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.4, delay: 0.45 }}
          className="mt-6 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent-light to-accent-light/30 p-5 text-center"
        >
          <p className="text-sm font-medium text-text-primary">
            effectum takes the strongest idea from each tool and unifies them
            into one cohesive, runnable system.
          </p>
          <p className="mt-1 text-xs text-text-secondary">
            No methodology switching. No integration work. One install, full
            pipeline.
          </p>
        </motion.div>
      </div>
    </Section>
  );
}

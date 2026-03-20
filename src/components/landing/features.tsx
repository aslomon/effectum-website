"use client";

import {
  FileText,
  Terminal,
  Shield,
  LayoutGrid,
  RefreshCw,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/section";

const FEATURES = [
  {
    title: "PRD Workshop",
    description:
      "Guided specification writing that transforms vague ideas into actionable PRDs. Adaptive questioning until it fully understands what you want.",
    details: [
      "Workshop mode: guided discovery for vague ideas",
      "Express mode: one-shot specs from clear input",
      "Decompose large projects into manageable PRDs",
      "Review specs for quality before implementation",
    ],
    icon: FileText,
    size: "large",
  },
  {
    title: "10 Workflow Commands",
    description:
      "The entire development lifecycle in slash commands. Plan before building. Write tests first. Verify quality. Review security. Build autonomously overnight.",
    details: [
      "/plan — think before building",
      "/tdd — test-driven development",
      "/verify — run all 8 quality gates",
      "/ralph-loop — autonomous overnight builds",
    ],
    icon: Terminal,
    size: "large",
  },
  {
    title: "8 Quality Gates",
    description:
      "Automated checks that enforce production standards — not suggestions, requirements.",
    details: [
      "Zero tolerance: 0 errors, 0 warnings",
      "OWASP vulnerability scanning",
      "No any types, no unsafe casts",
      "Max 300 lines per file enforced",
    ],
    icon: Shield,
    size: "medium",
  },
  {
    title: "4 Stack Presets",
    description:
      "Pre-configured setups that include CLAUDE.md templates, guardrails, and stack-specific rules.",
    details: [
      "Next.js + Supabase",
      "Python + FastAPI",
      "Swift / SwiftUI",
      "Generic (stack-agnostic)",
    ],
    icon: LayoutGrid,
    size: "medium",
  },
  {
    title: "Ralph Loop",
    description:
      "Claude works autonomously — writing code, running tests, fixing errors, iterating — until every quality gate passes.",
    details: [
      "Built-in error recovery",
      "Status reports at 80% iterations",
      "Only outputs promise when 100% true",
    ],
    icon: RefreshCw,
    size: "small",
  },
  {
    title: "Guardrails",
    description:
      "Safety built in. File protection blocks writes to .env and secrets. Destructive commands are prevented.",
    details: [
      "Protected: .env, secrets/, .git/",
      "Blocked: rm -rf /, DROP TABLE",
      "Error learning from failures",
    ],
    icon: Lock,
    size: "small",
  },
];

type FeatureSize = "large" | "medium" | "small";

function FeatureCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[0];
  index: number;
}) {
  const Icon = feature.icon;
  const size = feature.size as FeatureSize;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-amber-900/5 ${
        size === "large" ? "p-7" : size === "medium" ? "p-6" : "p-5"
      }`}
    >
      {/* Top gradient line on hover */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Corner accent for large cards */}
      {size === "large" && (
        <div className="pointer-events-none absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-gradient-to-bl from-accent/5 to-transparent" />
      )}

      <div
        className={`mb-4 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent-light to-accent-light/50 text-accent shadow-sm dark:from-accent/15 dark:to-accent/8 ${
          size === "large"
            ? "h-12 w-12"
            : size === "medium"
              ? "h-10 w-10"
              : "h-9 w-9"
        }`}
      >
        <Icon
          size={size === "large" ? 22 : size === "medium" ? 19 : 17}
          strokeWidth={1.75}
        />
      </div>

      <h3
        className={`font-semibold text-text-primary ${
          size === "large" ? "text-lg" : "text-base"
        }`}
      >
        {feature.title}
      </h3>

      <p
        className={`mt-2 leading-relaxed text-text-secondary ${
          size === "large" ? "text-sm" : "text-xs"
        }`}
      >
        {feature.description}
      </p>

      <ul className={`mt-4 space-y-2 border-t border-border pt-4`}>
        {feature.details.map((detail) => (
          <li
            key={detail}
            className="flex items-start gap-2.5 text-xs text-text-muted"
          >
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/60" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Features() {
  return (
    <Section
      id="features"
      label="Features"
      title="Everything you need to ship"
      description="A complete autonomous development system that takes you from idea to production-ready code."
    >
      <div className="mx-auto max-w-5xl">
        {/* Bento grid: 2 large on top, 2 medium + 2 small below */}
        <div className="grid gap-4 sm:grid-cols-2">
          {/* Row 1: two large cards */}
          {FEATURES.slice(0, 2).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Row 2: two medium cards */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {FEATURES.slice(2, 4).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 2} />
          ))}
        </div>

        {/* Row 3: two small cards side by side */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {FEATURES.slice(4, 6).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 4} />
          ))}
        </div>
      </div>
    </Section>
  );
}

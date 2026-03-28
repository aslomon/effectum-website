"use client";

import {
  FileText,
  Terminal,
  Shield,
  LayoutGrid,
  RefreshCw,
  Lock,
  Compass,
  GitBranch,
  Layers,
  Bot,
  Boxes,
  Palette,
  PackageCheck,
  Download,
  SearchCode,
  Fingerprint,
  Map,
  Brain,
  SplitSquareHorizontal,
} from "lucide-react";
import { Section } from "@/components/section";

const FEATURES = [
  {
    title: "Onboarding",
    description:
      "New project or existing codebase — effectum adapts. /onboard runs 6 parallel agents to analyze your repo and generate a complete CLAUDE.md in minutes.",
    details: [
      "6 agents: Stack, Architecture, API, Database, Frontend, Test",
      "Auto-generates PRD from existing code",
      "Self-tests with /verify after setup",
      "Works on any codebase, any language",
    ],
    icon: Compass,
    size: "large",
  },
  {
    title: "42 Workflow Commands",
    description:
      "The entire development lifecycle in slash commands. From spec to ship — plan, build, test, verify, review, update, and deploy with full autonomy.",
    details: [
      "/effectum — entry point: pick your journey in 60 seconds",
      "/next — smart router: always know what to do next",
      "/run — autonomous overnight builds (internally: /ralph-loop)",
      "/diagnose — post-mortem analysis (alias: /forensics)",
      "/explore — 4-agent codebase map (alias: /map-codebase)",
    ],
    icon: Terminal,
    size: "large",
  },
  {
    title: "PRD Lifecycle",
    description:
      "PRDs that evolve with your code. /prd:update applies delta handoffs, tracks what changed, and keeps specs in sync with implementation.",
    details: [
      "/prd:new — workshop or express mode",
      "/prd:update — delta handoff from changes",
      "Task registry tracks completion",
      "Decompose large projects automatically",
    ],
    icon: GitBranch,
    size: "large",
  },
  {
    title: "Modular Stacks",
    description:
      "7 composable stacks with 8 quick presets. Pick ecosystem, framework, database, and deployment — or use a preset for instant setup.",
    details: [
      "7 stacks: Next.js, Python, Swift, Go+Echo, Django, Rust+Actix, Generic",
      "8 presets: SaaS, API, CLI, Mobile, and more",
      "Each stack includes CLAUDE.md + guardrails",
      "Mix and match components freely",
    ],
    icon: Layers,
    size: "large",
  },
  {
    title: "25 Specialized Agents",
    description:
      "Purpose-built agents for every phase — from code review to security audit to documentation. They work in parallel when possible.",
    details: [
      "Onboard agents analyze repos in parallel",
      "4 parallel /explore analysis agents",
      "Review agents catch security issues",
      "Doc agents keep everything in sync",
    ],
    icon: Bot,
    size: "medium",
  },
  {
    title: "Design System",
    description:
      "/design generates a structured DESIGN.md before implementation begins — color tokens, typography, component patterns, and constraints that guide every UI decision.",
    details: [
      "Detects Tailwind, shadcn, CSS vars automatically",
      "7-section template: colors, type, components, layout",
      "Constraints section prevents generic AI aesthetics",
      "Bridges PRD ('what') and code ('how it looks')",
    ],
    icon: Palette,
    size: "medium",
  },
  {
    title: "Foundation Model",
    description:
      "A unified configuration layer that powers every command. CLAUDE.md, guardrails, hooks, and quality gates — all composable and extensible.",
    details: [
      "CLAUDE.md as single source of truth",
      "Guardrails injected at every session",
      "Hooks for auto-format, changelog, gates",
      "Error learning from past failures",
    ],
    icon: Boxes,
    size: "medium",
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
    title: "Update Command",
    description:
      "npx @aslomon/effectum update — add new commands, refresh templates, and preserve your config without re-running the full setup.",
    details: [
      "Diffs commands: shows new and updated",
      "Re-renders CLAUDE.md + settings.json",
      "Preserves stack, autonomy, customizations",
      "Supports --yes for CI automation",
    ],
    icon: Download,
    size: "medium",
  },
  {
    title: "Package Manager",
    description:
      "Auto-detects your package manager from lock files. Recommends the best option for your ecosystem, flows through all templates.",
    details: [
      "Detects: pnpm, yarn, bun, uv, cargo, go",
      "Apple-like confirm-or-change flow",
      "{{PACKAGE_MANAGER}} in all templates",
      "Ecosystem-aware defaults",
    ],
    icon: PackageCheck,
    size: "medium",
  },
  {
    title: "Context Budget Monitor",
    description:
      "Ralph Loop and Orchestrate estimate context usage before each iteration. At >80%, they commit state, write HANDOFF.md, and stop cleanly.",
    details: [
      "Estimates context before each iteration",
      "Commits current state at 80% budget",
      "HANDOFF.md with structured handoff notes",
    ],
    icon: Brain,
    size: "small",
  },
  {
    title: "Stuck Detection",
    description:
      "Automatically detects when the same error repeats across iterations. Stops immediately and writes STUCK.md with diagnosis and next steps.",
    details: [
      "Tracks error messages across iterations",
      "Stops on 2 consecutive identical errors",
      "STUCK.md with root cause and fix plan",
    ],
    icon: SearchCode,
    size: "small",
  },
  {
    title: "/diagnose Command",
    description:
      "Post-mortem diagnosis that reads HANDOFF.md, STUCK.md, loop-state.json, and git log. Classifies failure mode and outputs FORENSICS-YYYY-MM-DD.md. (internally: /forensics)",
    details: [
      "Reads all loop artifacts automatically",
      "Classifies failure mode and root cause",
      "Outputs actionable next steps doc",
    ],
    icon: Fingerprint,
    size: "small",
  },
  {
    title: "/explore Command",
    description:
      "Spawns 4 parallel analysis agents that produce 7 knowledge documents in knowledge/codebase/ — architecture, stack, conventions, testing, concerns, integrations. (internally: /map-codebase)",
    details: [
      "4 agents: Architecture, Stack, Quality, Integration",
      "7 output docs: ARCHITECTURE.md, STACK.md, …",
      "Parallel execution for fast turnaround",
    ],
    icon: Map,
    size: "small",
  },
  {
    title: "Sentinel CLAUDE.md",
    description:
      "Project context survives template updates. Sentinel markers preserve your custom context block across effectum update re-renders.",
    details: [
      "<!-- effectum:project-context:start/end --> markers",
      "Preserved across effectum update runs",
      "/context:init populates it via 7-question interview",
    ],
    icon: SplitSquareHorizontal,
    size: "small",
  },
  {
    title: "/run — Autonomous Build",
    description:
      "Claude works autonomously — writing code, running tests, fixing errors, iterating — until every quality gate passes. Use /save before /run as your safety net.",
    details: [
      "Built-in error recovery and stuck detection",
      "Context budget monitor built in",
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
    <div
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
    </div>
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
        {/* Row 1: two large cards — Onboarding + 28 Commands */}
        <div className="grid gap-4 sm:grid-cols-2">
          {FEATURES.slice(0, 2).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        {/* Row 2: two large cards — PRD Lifecycle + Modular Stacks */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {FEATURES.slice(2, 4).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 2} />
          ))}
        </div>

        {/* Row 3: three medium cards — Agents + Design System + Foundation */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {FEATURES.slice(4, 7).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 4} />
          ))}
        </div>

        {/* Row 4: three medium cards — Quality + Update + Package Manager */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {FEATURES.slice(7, 10).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 7} />
          ))}
        </div>

        {/* Row 5: v0.16.0 — Context Budget + Stuck Detection + /diagnose */}
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {FEATURES.slice(10, 13).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 10} />
          ))}
        </div>

        {/* Row 6: v0.16.0 — /explore + Sentinel CLAUDE.md */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {FEATURES.slice(13, 15).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 13} />
          ))}
        </div>

        {/* Row 7: Ralph Loop + Guardrails */}
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {FEATURES.slice(15, 17).map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i + 15} />
          ))}
        </div>
      </div>
    </Section>
  );
}

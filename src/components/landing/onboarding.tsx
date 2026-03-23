"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Package,
  FolderTree,
  Fingerprint,
  Settings,
  TestTube,
  BookOpen,
} from "lucide-react";
import { Section } from "@/components/section";

const AGENTS = [
  {
    name: "deps",
    label: "Dependencies",
    description: "Scans package manifests and lock files",
    icon: Package,
  },
  {
    name: "structure",
    label: "Structure",
    description: "Maps directory layout and architecture",
    icon: FolderTree,
  },
  {
    name: "patterns",
    label: "Patterns",
    description: "Detects coding conventions and style",
    icon: Fingerprint,
  },
  {
    name: "env",
    label: "Environment",
    description: "Identifies config, env vars, and secrets",
    icon: Settings,
  },
  {
    name: "tests",
    label: "Tests",
    description: "Discovers test framework and coverage",
    icon: TestTube,
  },
  {
    name: "docs",
    label: "Documentation",
    description: "Reads existing docs and READMEs",
    icon: BookOpen,
  },
];

const OUTPUTS = [
  "CLAUDE.md generated from analysis",
  "PRD created from existing codebase",
  "Self-tests run with /verify",
  "Ready to build in minutes",
];

export function Onboarding() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="onboarding"
      label="Onboarding"
      title="/onboard: Already have a project?"
      description="Six parallel agents analyze your existing codebase, generate a complete CLAUDE.md, and create a PRD — so effectum understands your project from day one."
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        {/* Agent grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {AGENTS.map((agent, i) => {
            const Icon = agent.icon;
            return (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="group relative flex items-start gap-3.5 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md hover:shadow-amber-900/5"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                  <Icon size={17} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-text-primary">
                    {agent.label}
                  </p>
                  <p className="mt-0.5 text-xs text-text-muted">
                    {agent.description}
                  </p>
                </div>
                {/* Parallel indicator */}
                <div className="absolute right-3 top-3">
                  <span className="inline-flex h-5 items-center rounded-full bg-accent/8 px-2 text-[10px] font-semibold text-accent">
                    parallel
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Output summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          className="mt-8 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 via-background to-accent/5 p-6"
        >
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3 rounded-xl border border-code-border bg-code-bg px-4 py-2.5">
              <span className="select-none font-mono text-sm text-accent">
                $
              </span>
              <code className="font-mono text-sm text-code-text">/onboard</code>
            </div>
            <span className="text-sm text-text-muted">produces:</span>
          </div>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {OUTPUTS.map((output) => (
              <div key={output} className="flex items-center gap-2 text-sm">
                <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="text-text-secondary">{output}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

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

const AGENTS = [
  {
    icon: Package,
    title: "Dependencies",
    desc: "Scans package manifests and lock files",
  },
  {
    icon: FolderTree,
    title: "Structure",
    desc: "Maps directory layout and architecture",
  },
  {
    icon: Fingerprint,
    title: "Patterns",
    desc: "Detects coding conventions and style",
  },
  {
    icon: Settings,
    title: "Environment",
    desc: "Identifies config, env vars, and secrets",
  },
  {
    icon: TestTube,
    title: "Tests",
    desc: "Discovers test framework and coverage",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    desc: "Reads existing docs and READMEs",
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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="onboarding" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Onboarding
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            /onboard: Already have a project?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Six parallel agents analyze your existing codebase, generate a
            complete CLAUDE.md, and create a PRD — so effectum understands your
            project from day one.
          </p>
        </div>

        <div ref={ref} className="mt-16">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {AGENTS.map((agent, i) => {
                const Icon = agent.icon;
                return (
                  <motion.div
                    key={agent.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: 16 }
                    }
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="group relative flex items-start gap-3.5 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md hover:shadow-amber-900/5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                      <Icon size={17} strokeWidth={1.75} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-text-primary">
                        {agent.title}
                      </p>
                      <p className="mt-0.5 text-xs text-text-muted">
                        {agent.desc}
                      </p>
                    </div>
                    <div className="absolute right-3 top-3">
                      <span className="inline-flex h-5 items-center rounded-full bg-accent/8 px-2 text-[10px] font-semibold text-accent">
                        parallel
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="mt-8 rounded-2xl border border-accent/20 bg-gradient-to-r from-accent/5 via-background to-accent/5 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-3 rounded-xl border border-code-border bg-code-bg px-4 py-2.5">
                  <span className="select-none font-mono text-sm text-accent">
                    $
                  </span>
                  <code className="font-mono text-sm text-code-text">
                    /onboard
                  </code>
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
        </div>
      </div>
    </section>
  );
}

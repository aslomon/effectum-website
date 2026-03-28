"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STACKS = [
  { name: "Next.js", tag: "TypeScript", presets: ["SaaS", "API"] },
  { name: "Python", tag: "FastAPI / Django", presets: ["API", "CLI"] },
  { name: "Swift", tag: "SwiftUI", presets: ["Mobile"] },
  { name: "Go + Echo", tag: "PostgreSQL", presets: ["API"] },
  { name: "Django", tag: "PostgreSQL", presets: ["SaaS"] },
  { name: "Rust + Actix", tag: "Performance", presets: ["API"] },
  { name: "Generic", tag: "Any language", presets: ["CLI"] },
];

const PRESETS = [
  { name: "nextjs-supabase", label: "SaaS", stack: "Next.js" },
  { name: "nextjs-firebase", label: "SaaS", stack: "Next.js" },
  { name: "nextjs-prisma", label: "API", stack: "Next.js" },
  { name: "django-postgres", label: "SaaS", stack: "Django" },
  { name: "fastapi-postgres", label: "API", stack: "Python" },
  { name: "go-echo-postgres", label: "API", stack: "Go" },
  { name: "swift-swiftui", label: "Mobile", stack: "Swift" },
  { name: "flutter-firebase", label: "Mobile", stack: "Flutter" },
];

export function ModularStacks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stacks" className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
            Stacks
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            7 modular stacks, 8 quick presets
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            Pick your ecosystem, framework, and database — or use a preset for
            instant setup. Each stack ships with CLAUDE.md, guardrails, and
            quality gates tuned for that environment.
          </p>
        </div>

        <div ref={ref} className="mt-16 mx-auto max-w-5xl">
          {/* Stacks grid */}
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {STACKS.map((stack, i) => (
              <motion.div
                key={stack.name}
                initial={{ opacity: 0, y: 16 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
                }
                transition={{ duration: 0.2, delay: i * 0.06 }}
                className="group rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md hover:shadow-amber-900/5"
              >
                <p className="text-sm font-semibold text-text-primary">
                  {stack.name}
                </p>
                <p className="mt-0.5 text-xs text-text-muted">{stack.tag}</p>
                <div className="mt-2 flex flex-wrap gap-1">
                  {stack.presets.map((preset) => (
                    <span
                      key={preset}
                      className="inline-flex h-4 items-center rounded-full bg-accent/8 px-1.5 text-[10px] font-semibold text-accent"
                    >
                      {preset}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Presets */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="mt-8 rounded-2xl border border-border bg-surface p-6"
          >
            <p className="mb-4 text-xs font-bold uppercase tracking-wider text-text-muted">
              Quick presets
            </p>
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
              {PRESETS.map((preset) => (
                <div
                  key={preset.name}
                  className="flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2"
                >
                  <code className="font-mono text-xs text-accent">
                    {preset.name}
                  </code>
                </div>
              ))}
            </div>
            <p className="mt-4 text-xs text-text-muted">
              Run{" "}
              <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-xs text-accent">
                npx @aslomon/effectum --preset nextjs-supabase
              </code>{" "}
              for instant zero-config setup.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Layers, Zap } from "lucide-react";
import { Section } from "@/components/section";

const STACKS = [
  { name: "Next.js", ecosystem: "Node", color: "bg-stone-800 text-white" },
  { name: "Python", ecosystem: "Python", color: "bg-blue-600 text-white" },
  { name: "Swift", ecosystem: "Apple", color: "bg-orange-500 text-white" },
  { name: "Go", ecosystem: "Go", color: "bg-cyan-600 text-white" },
  { name: "Rust", ecosystem: "Rust", color: "bg-amber-700 text-white" },
  { name: "Deno", ecosystem: "Deno", color: "bg-stone-700 text-white" },
];

const PRESETS = [
  { name: "SaaS Starter", stack: "Next.js + Supabase + Stripe" },
  { name: "REST API", stack: "Python + FastAPI + PostgreSQL" },
  { name: "CLI Tool", stack: "Go or Rust + cross-platform" },
  { name: "Mobile App", stack: "Swift + SwiftUI + CloudKit" },
  { name: "Full-Stack", stack: "Next.js + tRPC + Prisma" },
  { name: "Edge Worker", stack: "Deno + Supabase Edge Functions" },
  { name: "Data Pipeline", stack: "Python + Pandas + Airflow" },
  { name: "Monorepo", stack: "Turborepo + shared packages" },
];

const FLOW_STEPS = [
  { label: "Ecosystem", example: "Node, Python, Apple, Go..." },
  { label: "Framework", example: "Next.js, FastAPI, SwiftUI..." },
  { label: "Database", example: "Supabase, PostgreSQL, SQLite..." },
  { label: "Deploy", example: "Vercel, Docker, CloudKit..." },
];

export function ModularStacks() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <Section
      id="modular-stacks"
      label="Stacks"
      title="Any stack. Your way."
      description="Choose from 6 composable stacks or 8 quick presets. Each includes a complete CLAUDE.md, guardrails, and stack-specific quality rules."
    >
      <div ref={ref} className="mx-auto max-w-5xl">
        {/* Composition flow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.4 }}
          className="mb-10 flex flex-wrap items-center justify-center gap-2"
        >
          {FLOW_STEPS.map((step, i) => (
            <div key={step.label} className="flex items-center gap-2">
              <div className="rounded-lg border border-border bg-surface px-4 py-2.5 text-center">
                <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                  {step.label}
                </p>
                <p className="mt-0.5 text-xs text-text-muted">{step.example}</p>
              </div>
              {i < FLOW_STEPS.length - 1 && (
                <span className="text-text-muted/40">→</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* Two-column: Stacks + Presets */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* Stacks */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <Layers size={16} className="text-accent" />
              <h3 className="text-sm font-semibold text-text-primary">
                6 Modular Stacks
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {STACKS.map((stack, i) => (
                <motion.div
                  key={stack.name}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.95 }
                  }
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.04 }}
                  className="group flex flex-col items-center gap-1.5 rounded-xl border border-border bg-surface p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/25 hover:shadow-md hover:shadow-amber-900/5"
                >
                  <span
                    className={`inline-flex rounded-md px-2.5 py-1 text-xs font-bold ${stack.color}`}
                  >
                    {stack.name}
                  </span>
                  <span className="text-[10px] text-text-muted">
                    {stack.ecosystem}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Presets */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 16 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <div className="mb-4 flex items-center gap-2">
              <Zap size={16} className="text-accent" />
              <h3 className="text-sm font-semibold text-text-primary">
                8 Quick Presets
              </h3>
            </div>
            <div className="grid gap-2">
              {PRESETS.map((preset, i) => (
                <motion.div
                  key={preset.name}
                  initial={{ opacity: 0, x: 8 }}
                  animate={
                    isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }
                  }
                  transition={{ duration: 0.3, delay: 0.2 + i * 0.03 }}
                  className="flex items-center justify-between rounded-lg border border-border bg-surface px-4 py-2.5 transition-all duration-200 hover:border-accent/20"
                >
                  <span className="text-sm font-medium text-text-primary">
                    {preset.name}
                  </span>
                  <span className="text-xs text-text-muted">
                    {preset.stack}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

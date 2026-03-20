"use client";

import { motion } from "framer-motion";
import { Github, ArrowRight, Terminal } from "lucide-react";
import { FadeIn } from "@/components/fade-in";

function GridPattern() {
  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #D97706 1px, transparent 1px),
            linear-gradient(to bottom, #D97706 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background opacity-80" />
      <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-amber-100/40 blur-[100px] dark:bg-amber-900/20" />
      <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-orange-100/30 blur-[120px] dark:bg-amber-900/15" />
    </div>
  );
}

function TerminalInstall() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-code-bg shadow-lg shadow-black/10">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/70" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <div className="h-3 w-3 rounded-full bg-green-500/70" />
        <div className="ml-3 flex items-center gap-2 text-xs text-code-text/50">
          <Terminal size={12} />
          <span>terminal</span>
        </div>
      </div>
      <div className="px-5 py-4">
        <div className="flex items-center gap-3">
          <span className="select-none text-sm text-accent">$</span>
          <span className="font-mono text-sm tracking-wide text-code-text">
            npx @aslomon/effectum
          </span>
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="inline-block h-4 w-0.5 bg-accent"
          />
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
      <GridPattern />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent-light px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-accent"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Built for Claude Code
            </motion.div>

            <h1 className="text-5xl font-bold tracking-tight text-text-primary sm:text-7xl">
              Describe what you want.
              <br />
              <span className="text-accent">Get production-ready code.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl">
              effectum transforms natural language into production-ready code
              through structured specifications, test-driven development, and
              automated quality gates. Write a spec. Let Claude Code build it
              overnight.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-12 max-w-lg">
            <TerminalInstall />
          </div>
        </FadeIn>

        <FadeIn delay={0.25}>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/aslomon/effectum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-6 text-sm font-medium text-white shadow-sm shadow-amber-900/20 transition-all hover:bg-accent-hover hover:shadow-md"
            >
              <Github size={16} />
              View on GitHub
            </a>
            <a
              href="/docs/getting-started"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-6 text-sm font-medium text-text-primary transition-all hover:border-border-hover hover:shadow-sm"
            >
              Get started
              <ArrowRight size={14} className="text-accent" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

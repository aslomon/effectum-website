"use client";

import { Github, ArrowRight, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Dot grid background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D97706 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[300px] sm:w-[600px] -translate-x-1/2 rounded-full bg-amber-100/20 blur-3xl dark:bg-amber-900/15"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Ready to build?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-secondary">
            Install effectum, write a spec, and let Claude Code build it
            overnight. Production-ready code, not prototypes.
          </p>
        </motion.div>

        {/* Terminal snippet */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, delay: 0.1 }}
          className="mx-auto mt-10 max-w-sm overflow-hidden rounded-xl border border-code-border bg-code-bg shadow-xl shadow-black/15"
        >
          <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-2.5">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/60" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/60" />
            <span className="ml-2 flex items-center gap-1.5 text-xs text-stone-500">
              <Terminal size={11} />
              terminal
            </span>
          </div>
          <div className="px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="select-none font-mono text-sm text-accent">
                $
              </span>
              <span className="font-mono text-sm text-code-text">
                npx @aslomon/effectum
              </span>
            </div>
          </div>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, delay: 0.15 }}
          className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="https://github.com/aslomon/effectum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-accent px-7 text-sm font-semibold text-white shadow-sm shadow-amber-900/25 transition-all hover:bg-accent-hover hover:shadow-md"
          >
            <Github size={16} />
            View on GitHub
          </a>
          <a
            href="/docs/getting-started"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-border bg-surface px-7 text-sm font-medium text-text-primary transition-all hover:border-border-hover hover:shadow-sm"
          >
            Read the docs
            <ArrowRight size={14} className="text-accent" />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="mt-12 text-center text-xs text-text-muted"
        >
          MIT License. Built by{" "}
          <a
            href="https://github.com/aslomon"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-text-secondary"
          >
            Jason Salomon-Rinnert
          </a>
          . Requires Claude Code and Node.js 18+.
        </motion.p>
      </div>
    </section>
  );
}

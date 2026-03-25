"use client";

import { motion } from "framer-motion";
import { Github, ArrowRight, Terminal } from "lucide-react";
import { useState, useEffect } from "react";
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

const TERMINAL_LINES = [
  { delay: 0,    text: "$ npx @aslomon/effectum", type: "command" },
  { delay: 800,  text: "◆ Stack detected: Next.js + Supabase ✓", type: "info" },
  { delay: 1400, text: "◆ Autonomy level: Standard", type: "info" },
  { delay: 2000, text: "✓ Configured in 11s. Run /prd:new to start.", type: "success" },
  { delay: 3000, text: "$ claude code", type: "command" },
  { delay: 3600, text: "> /ralph-loop", type: "prompt" },
  { delay: 4200, text: "✓ build — PASS", type: "success" },
  { delay: 4600, text: "✓ tests — 12/12", type: "success" },
  { delay: 5000, text: "✓ Completion promise satisfied.", type: "success" },
];

function TerminalInstall() {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    TERMINAL_LINES.forEach((line, i) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, i]);
      }, line.delay);
      timers.push(t);
    });
    // Restart loop
    const restart = setTimeout(() => {
      setVisibleLines([]);
      setCycle((c) => c + 1);
    }, 8000);
    timers.push(restart);
    return () => timers.forEach(clearTimeout);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cycle]);

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
      <div className="px-5 py-4 space-y-1.5 min-h-[140px]">
        {TERMINAL_LINES.map((line, i) =>
          visibleLines.includes(i) ? (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -4 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="flex items-start gap-2 font-mono text-sm"
            >
              <span
                className={
                  line.type === "command"
                    ? "text-accent font-medium"
                    : line.type === "success"
                    ? "text-green-400"
                    : line.type === "prompt"
                    ? "text-purple-400"
                    : "text-code-text/70"
                }
              >
                {line.text}
              </span>
            </motion.div>
          ) : null
        )}
        {visibleLines.length < TERMINAL_LINES.length && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.2, repeat: Infinity }}
            className="inline-block h-4 w-0.5 bg-accent"
          />
        )}
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
              with intelligent setup, 17 workflow commands, and 19 specialized
              agents. New project or existing codebase — describe what you want,
              let Claude Code build it overnight.
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

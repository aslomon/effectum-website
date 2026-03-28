"use client";

import { motion } from "framer-motion";
import { ExternalLink, Download, Compass, FileText, Rocket } from "lucide-react";
import { Section } from "@/components/section";
import { CodeBlock } from "@/components/code-block";

const STEPS = [
  {
    icon: Download,
    label: "Install",
    command: "npx @aslomon/effectum",
  },
  {
    icon: Compass,
    label: "Orient",
    command: "/effectum",
  },
  {
    icon: FileText,
    label: "Spec",
    command: "/prd:new",
  },
  {
    icon: Rocket,
    label: "Build",
    command: "/run",
  },
];

export function GettingStarted() {
  return (
    <Section
      id="getting-started"
      label="Quick start"
      title="Get started in seconds"
      description="One command installs everything you need — workflow commands, quality gates, PRD workshop, and stack preset."
      className="bg-surface"
    >
      <div className="mx-auto max-w-3xl">
        {/* Step indicators */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2 }}
          className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4"
        >
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="flex flex-col items-center gap-2 text-center"
              >
                {/* Connector */}
                <div className="flex w-full items-center">
                  {i > 0 && (
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/40 to-accent/10" />
                  )}
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent ring-1 ring-accent/20">
                    <Icon size={16} strokeWidth={1.75} />
                  </div>
                  {i < STEPS.length - 1 && (
                    <div className="h-px flex-1 bg-gradient-to-r from-accent/10 to-accent/40" />
                  )}
                </div>
                <span className="text-xs font-medium text-text-secondary">
                  {step.label}
                </span>
              </div>
            );
          })}
        </motion.div>

        {/* Code block */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <CodeBlock
            code={`# Install effectum
npx @aslomon/effectum

# Open your project in Claude Code
cd ~/my-project && claude

# See your options — always start here
/effectum

# Write your spec
/prd:new

# Generate a build prompt
/prd:handoff

# Create a restore point
/save

# Build it autonomously
/run`}
            language="terminal"
          />
        </motion.div>

        {/* Requirements note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-center"
        >
          <p className="flex items-center gap-1.5 text-sm text-text-muted">
            Requires{" "}
            <a
              href="https://docs.anthropic.com/en/docs/claude-code/overview"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-accent transition-colors hover:text-accent-hover"
            >
              Claude Code
              <ExternalLink size={12} />
            </a>{" "}
            and Node.js 18+
          </p>
          <span className="hidden text-text-muted sm:block">&middot;</span>
          <p className="text-sm text-text-muted">MIT License, free to use</p>
        </motion.div>
      </div>
    </Section>
  );
}

"use client";

import { Users, Code, Moon, Check } from "lucide-react";
import { motion } from "framer-motion";
import { Section } from "@/components/section";

const LEVELS = [
  {
    name: "Conservative",
    icon: Users,
    description:
      "Claude asks before most changes. Full visibility into every decision. Best for teams learning the workflow.",
    asks: "Most changes",
    git: "Always asks",
    ralph: false,
    best: "Teams & learning",
    badge: null,
  },
  {
    name: "Standard",
    icon: Code,
    description:
      "Claude works freely on code, asks for ambiguous specs. The sweet spot for daily development.",
    asks: "Ambiguous specs",
    git: "Asks for push",
    ralph: true,
    best: "Daily development",
    badge: "Recommended",
    highlighted: true,
  },
  {
    name: "Full Autonomy",
    icon: Moon,
    description:
      "Claude decides almost everything. Recommended for overnight Ralph Loop builds with a thorough spec.",
    asks: "Almost nothing",
    git: "Autonomous",
    ralph: true,
    best: "Overnight builds",
    badge: null,
  },
];

export function Autonomy() {
  return (
    <Section
      id="autonomy"
      label="Autonomy levels"
      title="You choose how much Claude decides"
      description="From conservative team use to fully autonomous overnight builds. Configure once, adjust anytime."
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5 md:grid-cols-3">
          {LEVELS.map((level, i) => {
            const Icon = level.icon;
            const isHighlighted = level.highlighted === true;

            return (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.2, delay: i * 0.02 }}
                className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 ${
                  isHighlighted
                    ? "border-accent/40 bg-gradient-to-b from-accent-light via-amber-50/40 to-background shadow-md shadow-amber-900/8 dark:from-accent/15 dark:via-accent/5 dark:to-transparent"
                    : "border-border bg-surface hover:border-accent/20 hover:shadow-sm"
                }`}
              >
                {/* Top accent bar for highlighted card */}
                {isHighlighted && (
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-accent to-transparent" />
                )}

                {/* Badge */}
                {level.badge && (
                  <div className="absolute right-4 top-4">
                    <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white shadow-sm">
                      {level.badge}
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`mb-4 flex h-11 w-11 items-center justify-center rounded-xl shadow-sm ${
                    isHighlighted
                      ? "bg-accent/15 text-accent"
                      : "bg-background text-text-muted ring-1 ring-border"
                  }`}
                >
                  <Icon size={20} strokeWidth={1.75} />
                </div>

                <h3 className="text-lg font-semibold text-text-primary">
                  {level.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {level.description}
                </p>

                {/* Specs table */}
                <dl className="mt-5 space-y-2.5 border-t border-border/60 pt-4 text-xs">
                  {(
                    [
                      ["Asks before", level.asks],
                      ["Git operations", level.git],
                      [
                        "Ralph Loop",
                        level.ralph ? (
                          <span className="flex items-center gap-1 text-accent">
                            <Check size={11} strokeWidth={2.5} />
                            Enabled
                          </span>
                        ) : (
                          "Disabled"
                        ),
                      ],
                      ["Best for", level.best],
                    ] as const
                  ).map(([label, value]) => (
                    <div key={label} className="flex justify-between gap-4">
                      <dt className="shrink-0 text-text-muted">{label}</dt>
                      <dd
                        className={`text-right font-medium ${
                          isHighlighted
                            ? "text-text-primary"
                            : "text-text-primary"
                        }`}
                      >
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.2, delay: 0.05 }}
          className="mt-6 text-center text-xs text-text-muted"
        >
          Configured during{" "}
          <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-xs text-code-text">
            /setup
          </code>
          . Settings stored in{" "}
          <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-xs text-code-text">
            .claude/settings.json
          </code>
          ,{" "}
          <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-xs text-code-text">
            CLAUDE.md
          </code>
          , and{" "}
          <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-xs text-code-text">
            .claude/guardrails.md
          </code>
          . Change anytime.
        </motion.p>
      </div>
    </Section>
  );
}

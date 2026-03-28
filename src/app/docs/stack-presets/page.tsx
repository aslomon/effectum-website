import type { Metadata } from "next";
import {
  CheckCircle2,
  Globe,
  Server,
  Apple,
  Box,
  Zap,
  Database,
  Cpu,
} from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import {
  PRESETS_DATA,
  COMPARISON_FEATURES,
  PRESET_SUPPORT,
} from "./stack-data";

export const metadata: Metadata = {
  title: "Stack Presets — Claude Code Framework Setup for Any Stack | effectum",
  description:
    "Pre-configured Claude Code framework setups for Next.js, Python, Swift, Go, Django, Rust, and more. One command to configure effectum for your stack.",
  keywords: [
    "Claude Code setup",
    "effectum stack presets",
    "Claude Code framework",
    "Next.js Claude Code",
    "Python AI coding framework",
    "autonomous development framework",
  ],
  openGraph: {
    title: "Stack Presets — Claude Code Framework Setup for Any Stack | effectum",
    description:
      "Pre-configured Claude Code framework setups for Next.js, Python, Swift, Go, Django, Rust, and more.",
  },
};

// Map icon string names to Lucide components
const ICON_MAP: Record<string, React.ComponentType<Record<string, unknown>>> = {
  Globe,
  Server,
  Apple,
  Box,
  Zap,
  Database,
  Cpu,
};

export default function StackPresetsPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-border pb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
          Stack Presets
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          Stack presets
        </h1>
        <p className="mt-3 text-lg text-text-secondary">
          Pre-configured development setups for popular technology stacks. Each
          preset includes a tuned CLAUDE.md, guardrails, and stack-specific
          quality gates.
        </p>
      </div>

      {/* Preset cards */}
      <div className="space-y-6">
        {PRESETS_DATA.map((preset) => {
          const Icon = ICON_MAP[preset.iconName] ?? Box;
          return (
            <div
              key={preset.id}
              className={`rounded-xl border bg-surface p-6 ${preset.borderColor}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${preset.iconBg}`}
                >
                  <Icon
                    size={18}
                    className={preset.iconColor}
                    aria-hidden="true"
                  />
                </div>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="text-lg font-semibold text-text-primary">
                      {preset.name}
                    </h2>
                    <span className="rounded-full bg-background px-2 py-0.5 text-xs text-text-muted">
                      {preset.tagline}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-text-secondary">
                    {preset.description}
                  </p>
                </div>
              </div>

              {/* Features grid */}
              <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                {preset.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-center gap-2 text-sm text-text-secondary"
                  >
                    <CheckCircle2
                      size={14}
                      className="shrink-0 text-emerald-500"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Install command */}
              <div className="mt-5">
                <CodeBlock code={preset.command} language="terminal" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparison table */}
      <div>
        <h2 className="mb-4 text-xl font-semibold text-text-primary">
          Feature comparison
        </h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <div className="overflow-x-auto -mx-4 px-4 sm:mx-0 sm:px-0"><table className="w-full text-left text-sm min-w-[480px]">
            <thead>
              <tr className="border-b border-border bg-background">
                <th className="px-4 py-3 text-xs font-semibold text-text-primary">
                  Feature
                </th>
                {PRESETS_DATA.map((p) => (
                  <th
                    key={p.id}
                    className="px-4 py-3 text-center text-xs font-semibold text-text-primary"
                  >
                    {p.name.split(" ")[0]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {COMPARISON_FEATURES.map((feature) => (
                <tr key={feature} className="hover:bg-background/50">
                  <td className="px-4 py-2.5 text-xs text-text-secondary">
                    {feature}
                  </td>
                  {PRESETS_DATA.map((p) => {
                    const supported = PRESET_SUPPORT[p.id][feature] ?? false;
                    return (
                      <td
                        key={p.id}
                        className="px-4 py-2.5 text-center"
                        aria-label={supported ? "Included" : "Not included"}
                      >
                        {supported ? (
                          <CheckCircle2
                            size={14}
                            className="mx-auto text-emerald-500"
                            aria-hidden="true"
                          />
                        ) : (
                          <span
                            className="mx-auto block h-0.5 w-3 rounded bg-border"
                            aria-hidden="true"
                          />
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table></div>
        </div>
      </div>
    </div>
  );
}

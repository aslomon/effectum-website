// Helper components and data for the Getting Started page

import { CheckCircle2, ArrowRight, Lightbulb, Info } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

// Install options data
export const INSTALL_OPTIONS = [
  {
    title: "Global",
    badge: "Recommended for individuals",
    description:
      "Installs to ~/.claude/ — available in all projects. Ideal if you use Claude Code across many repositories.",
    command: "npx @aslomon/effectum --global",
  },
  {
    title: "Local",
    badge: "Recommended for teams",
    description:
      "Installs to ./.claude/ — committed with your repo so everyone shares the same workflow and guardrails.",
    command: "npx @aslomon/effectum --local",
  },
  {
    title: "Non-interactive",
    badge: "For CI / automation",
    description:
      "Skips all prompts. Uses Claude Code runtime defaults. Good for scripted setups and CI pipelines.",
    command: "npx @aslomon/effectum --global --claude",
  },
  {
    title: "Classic git clone",
    badge: "Full control",
    description:
      "Clone the repo and use effectum:setup to configure manually. Best when you want to inspect every file before applying.",
    command: `git clone https://github.com/aslomon/effectum.git\ncd effectum && claude\neffectum:setup ~/my-project`,
  },
] as const;

// What gets installed data
export const INSTALLED_ITEMS = [
  {
    label: "42 workflow commands",
    detail:
      "Slash commands for the entire lifecycle — /effectum entry point, /run autonomous builds, /save restore points, /diagnose post-mortem, and more",
  },
  {
    label: "PRD Workshop",
    detail:
      "12 commands for guided specification writing — effect:prd:new, effect:prd:review, effect:prd:handoff, and the full lifecycle",
  },
  {
    label: "Quality gates",
    detail:
      "8 automated checks — build, types, lint, tests, security, debug logs, type safety, file size",
  },
  {
    label: "Stack preset",
    detail:
      "Pre-configured CLAUDE.md, settings.json, and guardrails tuned for your technology stack",
  },
  {
    label: "Guardrails",
    detail:
      "Safety rules that prevent common mistakes — protected files, blocked destructive commands, architecture rules",
  },
  {
    label: "4 MCP servers",
    detail:
      "Context7 (docs), Playwright (E2E), Sequential Thinking, Filesystem — pre-configured and ready",
  },
] as const;

// Autonomy levels
export const AUTONOMY_LEVELS = [
  {
    level: "Conservative",
    asks: "Claude asks at every step",
    activeTime: "15–30 min active",
    bestFor: "Teams, learning, sensitive codebases",
  },
  {
    level: "Standard",
    asks: "Autonomous within guardrails, stops on ambiguity",
    activeTime: "5–10 min setup",
    bestFor: "Daily development",
  },
  {
    level: "Full Autonomy",
    asks: "Runs until done or stuck",
    activeTime: "2–5 min setup",
    bestFor: "Overnight builds, well-defined specs",
  },
] as const;

// Section wrapper with icon
export function DocSection({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<Record<string, unknown>>;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-4">
      <h2 className="flex items-center gap-2 text-xl font-semibold text-text-primary">
        <Icon size={18} className="text-accent" aria-hidden="true" />
        {title}
      </h2>
      {children}
    </div>
  );
}

// Callout box
export function Callout({
  icon: Icon,
  variant,
  children,
}: {
  icon: React.ComponentType<Record<string, unknown>>;
  variant: "tip" | "info";
  children: React.ReactNode;
}) {
  const styles =
    variant === "tip"
      ? "border-amber-200 bg-amber-50 dark:border-amber-800/30 dark:bg-amber-950/30"
      : "border-blue-200 bg-blue-50 dark:border-blue-800/30 dark:bg-blue-950/30";
  const iconColor = variant === "tip" ? "text-accent" : "text-blue-500";

  return (
    <div
      className={`mt-4 flex items-start gap-3 rounded-lg border px-4 py-3 ${styles}`}
    >
      <Icon
        size={15}
        className={`mt-0.5 shrink-0 ${iconColor}`}
        aria-hidden="true"
      />
      <p className="text-sm leading-relaxed text-text-secondary">{children}</p>
    </div>
  );
}

// Install option card
export function InstallCard({
  title,
  badge,
  description,
  command,
}: {
  title: string;
  badge: string;
  description: string;
  command: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-surface p-4">
      <div className="mb-1 flex items-center gap-2">
        <span className="text-sm font-medium text-text-primary">{title}</span>
        <span className="rounded-full bg-background px-2 py-0.5 text-xs text-text-muted">
          {badge}
        </span>
      </div>
      <p className="mb-3 text-xs leading-relaxed text-text-secondary">
        {description}
      </p>
      <CodeBlock code={command} language="terminal" />
    </div>
  );
}

// Prerequisites list item
export function PrereqItem({
  text,
  link,
}: {
  text: string;
  link?: { href: string; label: string };
}) {
  return (
    <li className="flex items-start gap-2.5 text-text-secondary">
      <CheckCircle2
        size={15}
        className="mt-0.5 shrink-0 text-emerald-500"
        aria-hidden="true"
      />
      <span className="text-sm">
        {link ? (
          <>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2 hover:text-accent-hover"
            >
              {link.label}
            </a>{" "}
            {text.replace(link.label, "").trim()}
          </>
        ) : (
          text
        )}
      </span>
    </li>
  );
}

// Next steps link
export function NextStepLink({
  href,
  label,
  desc,
}: {
  href: string;
  label: string;
  desc: string;
}) {
  return (
    <li>
      <a href={href} className="group flex items-center gap-2 text-sm">
        <ArrowRight
          size={13}
          className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5"
          aria-hidden="true"
        />
        <span className="text-accent hover:text-accent-hover">{label}</span>
        <span className="text-text-muted">&mdash; {desc}</span>
      </a>
    </li>
  );
}

// Tip callout shorthand
export { Lightbulb, Info };

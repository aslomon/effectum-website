import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Map,
  FlaskConical,
  ShieldCheck,
  MousePointer2,
  Search,
  Wrench,
  Sparkles,
  Bot,
  OctagonX,
  Bookmark,
  Terminal,
  ArrowRight,
} from "lucide-react";
import { COMMANDS, PHASE_ORDER, PHASE_META } from "./commands-data";
import type { CommandPhase } from "./commands-data";

export const metadata: Metadata = {
  title: "Commands",
  description: "Reference for all 10 effectum workflow commands.",
};

// Map icon string names to Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  Map,
  FlaskConical,
  ShieldCheck,
  MousePointer2,
  Search,
  Wrench,
  Sparkles,
  Bot,
  OctagonX,
  Bookmark,
};

// Typical command flow for the visual header
const FLOW_STEPS: { name: string; phase: CommandPhase }[] = [
  { name: "/plan", phase: "Planning" },
  { name: "/tdd", phase: "Implementation" },
  { name: "/verify", phase: "QA" },
  { name: "/code-review", phase: "QA" },
  { name: "/ralph-loop", phase: "Automation" },
];

const PHASE_DOT_COLORS: Record<CommandPhase, string> = {
  Planning: "bg-blue-400 dark:bg-blue-500",
  Implementation: "bg-amber-400 dark:bg-amber-500",
  QA: "bg-emerald-400 dark:bg-emerald-500",
  Automation: "bg-purple-400 dark:bg-purple-500",
  Safety: "bg-gray-400 dark:bg-gray-500",
};

export default function CommandsPage() {
  const commandsByPhase = PHASE_ORDER.map((phase) => ({
    phase,
    meta: PHASE_META[phase],
    commands: COMMANDS.filter((c) => c.phase === phase),
  }));

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-border pb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
          Commands
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          Workflow commands
        </h1>
        <p className="mt-3 text-lg text-text-secondary">
          All 10 commands covering the complete development lifecycle — from
          planning to autonomous overnight builds.
        </p>
      </div>

      {/* Command flow visualization */}
      <div>
        <p className="mb-4 text-sm font-medium text-text-primary">
          Typical workflow order
        </p>
        <div className="flex flex-wrap items-center gap-2">
          {FLOW_STEPS.map((step, index) => (
            <div key={step.name} className="flex items-center gap-2">
              <div className="flex items-center gap-1.5 rounded-lg border border-border bg-surface px-3 py-1.5">
                <span
                  className={`h-2 w-2 rounded-full ${PHASE_DOT_COLORS[step.phase]}`}
                  aria-hidden="true"
                />
                <code className="font-mono text-xs text-text-primary">
                  {step.name}
                </code>
              </div>
              {index < FLOW_STEPS.length - 1 && (
                <ArrowRight
                  size={12}
                  className="shrink-0 text-text-muted"
                  aria-hidden="true"
                />
              )}
            </div>
          ))}
        </div>

        {/* Phase legend */}
        <div className="mt-4 flex flex-wrap gap-3">
          {PHASE_ORDER.map((phase) => (
            <div key={phase} className="flex items-center gap-1.5">
              <span
                className={`h-2 w-2 rounded-full ${PHASE_DOT_COLORS[phase]}`}
                aria-hidden="true"
              />
              <span className="text-xs text-text-muted">{phase}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Commands grouped by phase */}
      <div className="space-y-10">
        {commandsByPhase.map(({ phase, meta, commands }) => (
          <div key={phase}>
            {/* Phase header */}
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-lg font-semibold text-text-primary">
                {phase}
              </h2>
              <span
                className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${meta.color}`}
              >
                {commands.length}{" "}
                {commands.length === 1 ? "command" : "commands"}
              </span>
            </div>
            <p className="mb-4 text-sm text-text-secondary">
              {meta.description}
            </p>

            <div className="space-y-4">
              {commands.map((cmd) => {
                const Icon = ICON_MAP[cmd.icon] ?? Terminal;
                return <CommandCard key={cmd.name} cmd={cmd} icon={Icon} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Individual command card
function CommandCard({
  cmd,
  icon: Icon,
}: {
  cmd: (typeof COMMANDS)[number];
  icon: LucideIcon;
}) {
  const phaseColor = PHASE_META[cmd.phase].color;

  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      {/* Command header */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-background">
          <Icon size={15} className="text-text-muted" aria-hidden="true" />
        </div>
        <code className="rounded bg-code-bg px-2.5 py-1 font-mono text-sm font-medium text-code-text">
          {cmd.name}
        </code>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${phaseColor}`}
        >
          {cmd.phase}
        </span>
        <span className="text-sm italic text-text-muted">{cmd.tagline}</span>
      </div>

      {/* Description */}
      <p className="mt-3 text-sm leading-relaxed text-text-secondary">
        {cmd.description}
      </p>

      {/* Details */}
      <ul className="mt-3 space-y-1.5">
        {cmd.details.map((detail) => (
          <li key={detail} className="flex items-start gap-2">
            <span
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
              aria-hidden="true"
            />
            <span className="text-xs text-text-muted">{detail}</span>
          </li>
        ))}
      </ul>

      {/* Usage example */}
      <div className="mt-4 overflow-x-auto rounded-lg bg-code-bg px-3 py-2.5">
        <code className="whitespace-pre font-mono text-xs text-code-text">
          {cmd.usage}
        </code>
      </div>
    </div>
  );
}

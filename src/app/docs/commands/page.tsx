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
  ScanSearch,
  Settings,
  Network,
  Terminal,
  ArrowRight,
  Zap,
  RefreshCw,
  MessageSquare,
  ClipboardCheck,
  Layers,
  Send,
  Code2,
  BarChart3,
  RotateCcw,
  ClipboardList,
  FolderPlus,
  Archive,
  Paintbrush,
  Compass,
  HelpCircle,
  ArrowRightCircle,
  Play,
  StopCircle,
  Save,
  Fingerprint,
  Stethoscope,
  AlertTriangle,
} from "lucide-react";
import { COMMANDS, PHASE_ORDER, PHASE_META } from "./commands-data";
import type { CommandPhase, CommandEntry } from "./commands-data";

export const metadata: Metadata = {
  title: "Commands Reference — 42 Claude Code Workflow Commands | effectum",
  description:
    "Complete reference for all 42 effectum Claude Code workflow commands. From PRD planning to autonomous overnight builds, quality gates, and spec-driven development.",
  keywords: [
    "Claude Code commands",
    "effectum commands",
    "Claude Code workflow",
    "autonomous development framework",
    "Claude Code autonomous build",
    "PRD workshop commands",
    "quality gates AI coding",
    "Claude Code autonomous loop",
  ],
  openGraph: {
    title: "Commands Reference — 42 Claude Code Workflow Commands | effectum",
    description:
      "Complete reference for all 42 effectum Claude Code workflow commands. From PRD planning to autonomous overnight builds and quality gates.",
  },
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
  ScanSearch,
  Settings,
  Network,
  Zap,
  RefreshCw,
  MessageSquare,
  ClipboardCheck,
  Layers,
  Send,
  Code2,
  BarChart3,
  RotateCcw,
  ClipboardList,
  FolderPlus,
  Archive,
  Paintbrush,
  Compass,
  HelpCircle,
  ArrowRightCircle,
  Play,
  StopCircle,
  Save,
  Fingerprint,
  Stethoscope,
  AlertTriangle,
};

// Typical command flow for the visual header
const FLOW_STEPS: { name: string; phase: CommandPhase }[] = [
  { name: "/effectum", phase: "Navigation" },
  { name: "effect:prd:new", phase: "Spec" },
  { name: "/prd:handoff", phase: "Spec" },
  { name: "/save", phase: "Autonomous" },
  { name: "/run", phase: "Autonomous" },
];

const PHASE_DOT_COLORS: Record<CommandPhase, string> = {
  Navigation: "bg-sky-400 dark:bg-sky-500",
  "Core Workflow": "bg-blue-400 dark:bg-blue-500",
  Autonomous: "bg-purple-400 dark:bg-purple-500",
  Spec: "bg-violet-400 dark:bg-violet-500",
  Onboarding: "bg-cyan-400 dark:bg-cyan-500",
  Project: "bg-teal-400 dark:bg-teal-500",
  Design: "bg-pink-400 dark:bg-pink-500",
  Setup: "bg-gray-400 dark:bg-gray-500",
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
          All 42 commands covering the complete development lifecycle — from
          planning and spec writing to autonomous overnight builds.
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
  cmd: CommandEntry;
  icon: LucideIcon;
}) {
  const phaseColor = PHASE_META[cmd.phase].color;

  return (
    <div className={`rounded-xl border bg-surface p-5 ${cmd.deprecated ? "border-amber-200 dark:border-amber-800/40 opacity-75" : "border-border"}`}>
      {/* Deprecated notice */}
      {cmd.deprecated && cmd.deprecatedNote && (
        <div className="mb-3 flex items-center gap-2 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-700 dark:border-amber-800/40 dark:bg-amber-950/30 dark:text-amber-400">
          <AlertTriangle size={12} className="shrink-0" aria-hidden="true" />
          <span><strong>Deprecated:</strong> {cmd.deprecatedNote}</span>
        </div>
      )}
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

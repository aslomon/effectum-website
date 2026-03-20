// Shared helper components for the PRD Workshop page
import type { LucideIcon } from "lucide-react";
import { CheckCircle2, XCircle, FileText } from "lucide-react";
import { CodeBlock } from "@/components/code-block";

// Types mirroring the data shape from prd-data.ts
type PrdCommand = {
  name: string;
  icon: string;
  phase: string;
  description: string;
};

type QualityItem = {
  readonly label: string;
  readonly good: boolean;
};

// Reusable section wrapper with icon heading
export function Section({
  icon: Icon,
  title,
  children,
}: {
  icon: LucideIcon;
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

// Command row within the "All 12 PRD commands" section
export function CommandRow({
  cmd,
  iconComponent: Icon,
  phaseColor,
}: {
  cmd: PrdCommand;
  iconComponent: LucideIcon;
  phaseColor: string;
}) {
  return (
    <div className="flex items-start gap-4 rounded-lg border border-border bg-surface px-4 py-3">
      <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-background">
        <Icon size={13} className="text-text-muted" aria-hidden="true" />
      </div>
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <code className="rounded bg-code-bg px-2 py-0.5 font-mono text-xs text-code-text">
            {cmd.name}
          </code>
          <span
            className={`rounded-full border px-2 py-0.5 text-xs font-medium ${phaseColor}`}
          >
            {cmd.phase}
          </span>
        </div>
        <p className="mt-1 text-sm text-text-secondary">{cmd.description}</p>
      </div>
    </div>
  );
}

// Single quality checklist item row
export function ChecklistRow({ item }: { item: QualityItem }) {
  return (
    <div className="flex items-start gap-3 px-4 py-3">
      {item.good ? (
        <CheckCircle2
          size={15}
          className="mt-0.5 shrink-0 text-emerald-500"
          aria-hidden="true"
        />
      ) : (
        <XCircle
          size={15}
          className="mt-0.5 shrink-0 text-red-400"
          aria-hidden="true"
        />
      )}
      <p className="text-sm text-text-secondary">
        {item.good ? (
          item.label
        ) : (
          <span>
            <span className="font-medium text-red-600 dark:text-red-400">
              Red flag:{" "}
            </span>
            {item.label}
          </span>
        )}
      </p>
    </div>
  );
}

// Fallback icon used in ICON_MAP default
export { FileText as FallbackIcon };

// Mode comparison card (Workshop vs Express)
export function ModeCard({
  title,
  command,
  badge,
  badgeColor,
  description,
  bestFor,
}: {
  title: string;
  command: string;
  badge: string;
  badgeColor: string;
  description: string;
  bestFor: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface p-5">
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="font-semibold text-text-primary">{title}</h3>
        <span
          className={`rounded-full border px-2.5 py-0.5 text-xs font-medium ${badgeColor}`}
        >
          {badge}
        </span>
      </div>
      <p className="mb-3 text-sm leading-relaxed text-text-secondary">
        {description}
      </p>
      <p className="mb-3 text-xs text-text-muted">
        <span className="font-medium text-text-secondary">Best for: </span>
        {bestFor}
      </p>
      <CodeBlock code={command} language="terminal" />
    </div>
  );
}

import type { Metadata } from "next";
import type { LucideIcon } from "lucide-react";
import {
  Lightbulb,
  Sparkles,
  Zap,
  MessageSquare,
  ClipboardCheck,
  Layers,
  Network,
  Send,
  Code2,
  BarChart3,
  RotateCcw,
  Archive,
  ArrowRight,
  FileText,
  FileCode2,
  Workflow,
} from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import {
  PRD_COMMANDS,
  SPEC_SECTIONS,
  QUALITY_CHECKLIST,
  PHASE_ORDER,
  PHASE_COLORS,
} from "./prd-data";
import { Section, ModeCard, CommandRow, ChecklistRow } from "./prd-components";

export const metadata: Metadata = {
  title: "PRD Workshop",
  description:
    "The heart of effectum — bridging 'I have an idea' and 'Claude builds it autonomously.'",
};

// Map icon string names from prd-data.ts to actual Lucide components
const ICON_MAP: Record<string, LucideIcon> = {
  Sparkles,
  Zap,
  MessageSquare,
  ClipboardCheck,
  Layers,
  Network,
  Send,
  Code2,
  BarChart3,
  RotateCcw,
  Archive,
  FileText,
  FileTemplate: FileCode2,
};

// Workflow pipeline steps
const PIPELINE_STEPS = [
  { label: "Idea", icon: Lightbulb },
  { label: "Questions", icon: MessageSquare },
  { label: "Scope", icon: FileText },
  { label: "Decompose", icon: Layers },
  { label: "Write PRD", icon: Sparkles },
  { label: "Review", icon: ClipboardCheck },
  { label: "Handoff", icon: Send },
  { label: "/run", icon: Zap },
];

export default function PrdWorkshopPage() {
  const commandsByPhase = PHASE_ORDER.map((phase) => ({
    phase,
    commands: PRD_COMMANDS.filter((c) => c.phase === phase),
  }));

  return (
    <div className="space-y-14">
      {/* Header */}
      <div className="border-b border-border pb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
          PRD Workshop
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          The heart of effectum
        </h1>
        <p className="mt-3 text-lg text-text-secondary">
          The PRD Workshop bridges{" "}
          <span className="font-medium text-text-primary">
            &ldquo;I have an idea&rdquo;
          </span>{" "}
          and{" "}
          <span className="font-medium text-text-primary">
            &ldquo;Claude builds it autonomously.&rdquo;
          </span>{" "}
          It transforms vague requirements into structured, verifiable
          specifications that drive the entire implementation lifecycle.
        </p>
      </div>

      {/* What is the PRD Workshop */}
      <Section icon={FileText} title="What is the PRD Workshop?">
        <p className="text-sm leading-relaxed text-text-secondary">
          A PRD (Product Requirements Document) in effectum is not a traditional
          multi-page document. It is a structured spec file that Claude uses as
          the single source of truth when building your feature. Each section
          has a specific job — the problem statement guides decisions, the
          acceptance criteria map to tests, the completion promise exits the
          autonomous /run loop.
        </p>
        <div className="mt-4 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800/30 dark:bg-amber-950/30">
          <Lightbulb
            size={15}
            className="mt-0.5 shrink-0 text-accent"
            aria-hidden="true"
          />
          <p className="text-sm text-text-secondary">
            <span className="font-medium text-text-primary">
              effectum is the perfect mix of generative AI intelligence and the
              structure of a program.
            </span>{" "}
            The PRD is the structure. Claude is the intelligence.
          </p>
        </div>
      </Section>

      {/* Complete Workflow */}
      <Section icon={Workflow} title="The complete workflow">
        <p className="mb-6 text-sm text-text-secondary">
          From idea to production — every PRD follows the same pipeline.
          Optional steps (like Decompose) only apply to large features.
        </p>

        {/* Pipeline visualization */}
        <div className="overflow-x-auto">
          <div className="flex min-w-max items-center gap-0">
            {PIPELINE_STEPS.map((step, index) => {
              const Icon = step.icon;
              const isLast = index === PIPELINE_STEPS.length - 1;
              return (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-amber-200 bg-amber-50 dark:border-amber-800/40 dark:bg-amber-950/40">
                      <Icon
                        size={14}
                        className="text-accent"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-xs font-medium text-text-secondary">
                      {step.label}
                    </span>
                  </div>
                  {!isLast && (
                    <ArrowRight
                      size={14}
                      className="mx-2 mb-4 shrink-0 text-text-muted"
                      aria-hidden="true"
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Two Modes */}
      <Section icon={Zap} title="Two modes">
        <div className="grid gap-4 sm:grid-cols-2">
          <ModeCard
            title="Workshop Mode"
            command="/prd:new"
            badge="For vague ideas"
            badgeColor="bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/30"
            description="Guided discovery process. Claude asks adaptive questions about your idea — problem, users, constraints, edge cases — until it fully understands what to build."
            bestFor="Exploring new concepts, unclear scope, complex domains"
          />
          <ModeCard
            title="Express Mode"
            command="/prd:express"
            badge="For clear requirements"
            badgeColor="bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/30"
            description="One-shot spec from clear requirements. Paste your requirements and get a complete PRD in seconds. Best when you already know exactly what you want."
            bestFor="Well-defined features, CRUD operations, familiar patterns"
          />
        </div>
      </Section>

      {/* What a spec contains */}
      <Section icon={FileCode2} title="What a spec contains">
        <p className="mb-4 text-sm text-text-secondary">
          Every PRD has seven required sections. Each one serves a specific
          purpose in the build process.
        </p>
        <div className="space-y-3">
          {SPEC_SECTIONS.map((item, index) => (
            <div
              key={item.title}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-accent dark:bg-amber-900/40">
                  {index + 1}
                </span>
                <div className="min-w-0">
                  <p className="font-medium text-text-primary">{item.title}</p>
                  <p className="mt-0.5 text-sm text-text-secondary">
                    {item.description}
                  </p>
                  <p className="mt-2 font-mono text-xs italic text-text-muted">
                    e.g. {item.example}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* All 12 PRD Commands */}
      <Section icon={Sparkles} title="All 12 PRD commands">
        <p className="mb-6 text-sm text-text-secondary">
          Commands are grouped by phase. Start with Discovery, refine your spec,
          then hand off to the implementation workflow.
        </p>
        <div className="space-y-8">
          {commandsByPhase.map(({ phase, commands }) => (
            <div key={phase}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
                {phase}
              </p>
              <div className="space-y-2">
                {commands.map((cmd) => (
                  <CommandRow
                    key={cmd.name}
                    cmd={cmd}
                    iconComponent={ICON_MAP[cmd.icon] ?? FileText}
                    phaseColor={PHASE_COLORS[cmd.phase]}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Quality Checklist */}
      <Section icon={ClipboardCheck} title="Quality checklist">
        <p className="mb-4 text-sm text-text-secondary">
          Run{" "}
          <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-xs text-code-text">
            /prd:review
          </code>{" "}
          before handoff. A good spec passes all of these.
        </p>
        <div className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
          {QUALITY_CHECKLIST.map((item) => (
            <ChecklistRow key={item.label} item={item} />
          ))}
        </div>
      </Section>

      {/* Example Workflow */}
      <Section icon={Code2} title="Example workflow">
        <p className="mb-4 text-sm text-text-secondary">
          A complete flow from vague idea to autonomous build — step by step.
        </p>
        <CodeBlock
          code={`# 1. Start with /effectum to orient yourself, then pick your journey
/effectum
# → Choose Journey A (new project), B (existing codebase), or C (feature)

# 2. Start with a vague idea — Claude asks questions
/prd:new
# → "What problem does this solve?"
# → "Who are the users?"
# → "What does success look like?"

# 3. Discuss a specific area in depth if needed
/prd:discuss "the data model for password resets"

# 4. If scope is too large, split into sub-PRDs
/prd:decompose
# → Creates PRD-001-auth.md, PRD-002-email.md, etc.

# 5. Review the spec for completeness before handing off
/prd:review
# → "AC-3 is missing the error case"
# → "Completion promise is not verifiable"

# 6. Generate the build prompt for the target project
/prd:handoff docs/prds/001-password-reset.md ~/my-project

# 7. In your project: save a restore point, then build autonomously
/save
/run "Build password reset per PRD" --max-iterations 30`}
          language="terminal"
        />
      </Section>
    </div>
  );
}

import type { Metadata } from "next";
import {
  CheckCircle2,
  Download,
  Package,
  Zap,
  Bot,
  SlidersHorizontal,
  ArrowRight,
  Info,
  Lightbulb,
  Compass,
  GitBranch,
} from "lucide-react";
import { CodeBlock } from "@/components/code-block";
import {
  INSTALL_OPTIONS,
  INSTALLED_ITEMS,
  AUTONOMY_LEVELS,
  DocSection,
  Callout,
  InstallCard,
} from "./getting-started-components";

export const metadata: Metadata = {
  title: "Getting Started",
  description:
    "Install effectum and build your first feature with Claude Code.",
};

export default function GettingStartedPage() {
  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="border-b border-border pb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
          Getting Started
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          Install &amp; configure effectum
        </h1>
        <p className="mt-3 text-lg text-text-secondary">
          effectum takes about 2 minutes to install. Once set up, type{" "}
          <code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-sm text-code-text">
            /effectum
          </code>{" "}
          to pick your journey — then write a spec and let Claude build it with
          tests, quality gates, and guardrails.
        </p>
      </div>

      {/* Prerequisites */}
      <DocSection icon={CheckCircle2} title="Prerequisites">
        <ul className="space-y-3">
          {[
            {
              text: "Claude Code installed and configured",
              link: {
                href: "https://docs.anthropic.com/en/docs/claude-code/overview",
                label: "Claude Code",
              },
            },
            { text: "Node.js 18+ and npx available" },
            { text: "A project directory (new or existing)" },
          ].map((item) => (
            <li
              key={item.text}
              className="flex items-start gap-2.5 text-text-secondary"
            >
              <CheckCircle2
                size={15}
                className="mt-0.5 shrink-0 text-emerald-500"
                aria-hidden="true"
              />
              <span className="text-sm">
                {item.link ? (
                  <>
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-accent-hover underline underline-offset-2"
                    >
                      {item.link.label}
                    </a>{" "}
                    {item.text.replace(item.link.label, "").trim()}
                  </>
                ) : (
                  item.text
                )}
              </span>
            </li>
          ))}
        </ul>
      </DocSection>

      {/* Installation */}
      <DocSection icon={Download} title="Installation">
        <p className="mb-4 text-sm text-text-secondary">
          The recommended way to install effectum is the interactive installer.
          It walks you through selecting a stack preset and scope.
        </p>
        <CodeBlock code="npx @aslomon/effectum" language="terminal" />

        <div className="mt-6 space-y-4">
          <h3 className="text-sm font-semibold text-text-primary">
            Installation options
          </h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {INSTALL_OPTIONS.map((option) => (
              <InstallCard key={option.title} {...option} />
            ))}
          </div>
        </div>
      </DocSection>

      {/* What gets installed */}
      <DocSection icon={Package} title="What gets installed">
        <div className="grid gap-3 sm:grid-cols-2">
          {INSTALLED_ITEMS.map((item) => (
            <div
              key={item.label}
              className="rounded-lg border border-border bg-surface p-4"
            >
              <p className="text-sm font-medium text-text-primary">
                {item.label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-text-secondary">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </DocSection>

      {/* Entry Point */}
      <DocSection icon={Compass} title="Your entry point: /effectum">
        <p className="mb-4 text-sm text-text-secondary">
          Always start with{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /effectum
          </code>
          . It shows you the three user journeys and recommends where to begin.
          When you&apos;re lost at any point, type{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /next
          </code>{" "}
          — the smart router reads your project state and tells you exactly one
          action to take.
        </p>
        <CodeBlock
          code={`# Open your project in Claude Code
cd ~/my-project && claude

# See your options — always start here
/effectum

# Lost? Not sure what to do next?
/next`}
          language="terminal"
        />
      </DocSection>

      {/* The 3 User Journeys */}
      <DocSection icon={GitBranch} title="The 3 user journeys">
        <p className="mb-6 text-sm text-text-secondary">
          effectum is built around three journeys. Pick the one that matches
          where you are.
        </p>

        <div className="space-y-4">
          {/* Journey A */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                A
              </span>
              <h3 className="text-sm font-semibold text-text-primary">
                New Project
              </h3>
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
                Start from scratch
              </span>
            </div>
            <CodeBlock
              code={`/effectum → /prd:new → /prd:review → /prd:handoff → [target repo] → /run`}
              language="terminal"
            />
            <p className="mt-3 text-xs text-text-muted">
              You have an idea. Claude helps you write a spec, review it, then
              build it autonomously in the target repo.
            </p>
          </div>

          {/* Journey B */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                B
              </span>
              <h3 className="text-sm font-semibold text-text-primary">
                Existing Codebase
              </h3>
              <span className="rounded-full bg-blue-50 px-2 py-0.5 text-xs text-blue-700 dark:bg-blue-950/40 dark:text-blue-400">
                Onboard first
              </span>
            </div>
            <CodeBlock
              code={`/effectum → /onboard → /prd:new → /prd:handoff → /run`}
              language="terminal"
            />
            <p className="mt-3 text-xs text-text-muted">
              You have an existing repo. Run{" "}
              <code className="font-mono">/onboard</code> to analyze it, then
              write specs against what&apos;s already there.
            </p>
          </div>

          {/* Journey C */}
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">
                C
              </span>
              <h3 className="text-sm font-semibold text-text-primary">
                Feature Build
              </h3>
              <span className="rounded-full bg-violet-50 px-2 py-0.5 text-xs text-violet-700 dark:bg-violet-950/40 dark:text-violet-400">
                Quick iteration
              </span>
            </div>
            <CodeBlock
              code={`/prd:new → /prd:review → /prd:handoff → /save → /run`}
              language="terminal"
            />
            <p className="mt-3 text-xs text-text-muted">
              You know what you&apos;re building. Write the spec, save a restore
              point, then let Claude build it.
            </p>
          </div>
        </div>
      </DocSection>

      {/* First feature — full workflow */}
      <DocSection icon={Zap} title="Your first feature">
        <p className="mb-4 text-sm text-text-secondary">
          The PRD Workshop is the core of effectum.{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /prd:new
          </code>{" "}
          →{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /prd:review
          </code>{" "}
          →{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /prd:handoff
          </code>{" "}
          gives you a spec that Claude can actually build from.
        </p>
        <CodeBlock
          code={`# 1. Write a spec (guided mode — Claude asks questions)
/prd:new

# 2. Review for completeness before building
/prd:review

# 3. Generate the build prompt for your target repo
/prd:handoff docs/prds/001-my-feature.md ~/my-project

# 4. In your project — create a restore point, then build
/save
/run`}
          language="terminal"
        />
        <Callout icon={Lightbulb} variant="tip">
          Use{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /prd:express
          </code>{" "}
          for a one-shot spec when requirements are already clear. Use{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /prd:new
          </code>{" "}
          for guided discovery when the idea is still vague.
        </Callout>
      </DocSection>

      {/* Autonomous builds */}
      <DocSection icon={Bot} title="Autonomous overnight builds">
        <p className="mb-4 text-sm text-text-secondary">
          For complex features with a thorough spec, use{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /run
          </code>
          . Claude iterates autonomously — writing code, running tests, fixing
          errors — until every quality gate passes. Always{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /save
          </code>{" "}
          first as your safety net.
        </p>
        <CodeBlock
          code={`# Create a restore point before the autonomous run
/save

# Start the autonomous build loop
/run "Build the auth system per PRD" --max-iterations 30 --completion-promise "All tests pass, build succeeds, 0 lint errors"

# Something went wrong? Run post-mortem diagnosis
/diagnose

# Need to take back control?
/stop`}
          language="terminal"
        />
        <Callout icon={Info} variant="info">
          The completion promise is only output when it is 100% true. Claude
          cannot lie to exit the loop. At 80% of max iterations, it writes a
          status report of what is done and what remains. For overnight builds,
          use{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            --max-iterations 50
          </code>
          .
        </Callout>
      </DocSection>

      {/* Autonomy level */}
      <DocSection icon={SlidersHorizontal} title="Choosing your autonomy level">
        <p className="mb-4 text-sm text-text-secondary">
          Configure how much Claude decides independently during{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            npx @aslomon/effectum
          </code>
          . Change anytime in{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            .claude/settings.json
          </code>
          .
        </p>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border bg-background">
                <th className="px-4 py-2.5 text-xs font-semibold text-text-primary">
                  Level
                </th>
                <th className="px-4 py-2.5 text-xs font-semibold text-text-primary">
                  Behavior
                </th>
                <th className="px-4 py-2.5 text-xs font-semibold text-text-primary">
                  Active time
                </th>
                <th className="px-4 py-2.5 text-xs font-semibold text-text-primary">
                  Best for
                </th>
              </tr>
            </thead>
            <tbody>
              {AUTONOMY_LEVELS.map((row, i) => (
                <tr
                  key={row.level}
                  className={
                    i < AUTONOMY_LEVELS.length - 1
                      ? "border-b border-border"
                      : ""
                  }
                >
                  <td className="px-4 py-3 text-sm font-medium text-text-primary">
                    {row.level}
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary">
                    {row.asks}
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary">
                    {row.activeTime}
                  </td>
                  <td className="px-4 py-3 text-sm text-text-secondary">
                    {row.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </DocSection>

      {/* Next steps */}
      <div className="rounded-xl border border-border bg-surface p-6">
        <h2 className="text-sm font-semibold text-text-primary">Next steps</h2>
        <ul className="mt-3 space-y-2.5">
          {[
            {
              href: "/docs/prd-workshop",
              label: "PRD Workshop",
              desc: "write specs that lead to high-quality code",
            },
            {
              href: "/docs/commands",
              label: "Commands reference",
              desc: "learn all 42 workflow commands",
            },
            {
              href: "/docs/stack-presets",
              label: "Stack Presets",
              desc: "see what each preset configures",
            },
          ].map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group flex items-center gap-2 text-sm"
              >
                <ArrowRight
                  size={13}
                  className="shrink-0 text-accent transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
                <span className="text-accent hover:text-accent-hover">
                  {link.label}
                </span>
                <span className="text-text-muted">&mdash; {link.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

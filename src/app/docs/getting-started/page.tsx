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
          effectum takes about 2 minutes to install. Once set up, write a spec
          and Claude builds it — with tests, quality gates, and guardrails.
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

      {/* First feature */}
      <DocSection icon={Zap} title="Your first feature">
        <p className="mb-4 text-sm text-text-secondary">
          Once installed, the typical workflow is four steps. You write a spec,
          Claude builds it.
        </p>
        <CodeBlock
          code={`# Open your project in Claude Code
cd ~/my-project && claude

# Write a specification (guided mode)
/prd:new

# Review the plan before building
/plan docs/prds/001-my-feature.md
# → Claude creates implementation plan
# → You approve or adjust

# Build with test-driven development
/tdd

# Verify all quality gates pass
/verify`}
          language="terminal"
        />
        <Callout icon={Lightbulb} variant="tip">
          For well-defined features, use{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /prd:express
          </code>{" "}
          for a one-shot spec. Use{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /prd:new
          </code>{" "}
          for guided discovery when the idea is still vague.
        </Callout>
      </DocSection>

      {/* Ralph Loop */}
      <DocSection icon={Bot} title="Autonomous overnight builds">
        <p className="mb-4 text-sm text-text-secondary">
          For complex features with a thorough spec, use the Ralph Loop. Claude
          iterates autonomously — writing code, running tests, fixing errors —
          until every quality gate passes.
        </p>
        <CodeBlock
          code={`/ralph-loop "Build the auth system per PRD"
  --max-iterations 30
  --completion-promise "All tests pass, build succeeds, 0 lint errors"`}
          language="terminal"
        />
        <Callout icon={Info} variant="info">
          The completion promise is only output when it is 100% true. Claude
          cannot lie to exit the loop. At 80% of max iterations, it writes a
          status report of what is done and what remains.
        </Callout>
      </DocSection>

      {/* Autonomy level */}
      <DocSection icon={SlidersHorizontal} title="Choosing your autonomy level">
        <p className="mb-4 text-sm text-text-secondary">
          Configure how much Claude decides independently during{" "}
          <code className="rounded bg-code-bg px-1 py-0.5 font-mono text-xs text-code-text">
            /setup
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
                  Asks before
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
              desc: "learn all 10 workflow commands",
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

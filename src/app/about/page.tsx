import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "About Effectum — Open-Source Autonomous Development Framework for Claude Code",
  description:
    "Effectum is an open-source autonomous development framework for Claude Code. Spec-driven, quality-gated, and built to ship production-ready code — not prototypes. Learn how it compares to GSD, BMAD, Kiro, and Taskmaster.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 lg:px-12 lg:pt-28 lg:pb-24">
      <Logo className="mb-10 h-7 w-auto text-text-primary" />

      <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        The autonomous development framework
        <br />
        <span className="text-accent">for Claude Code developers.</span>
      </h1>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-text-secondary">

        {/* What is Effectum */}
        <section>
          <h2 className="pt-2 text-xl font-semibold text-text-primary">
            What is Effectum?
          </h2>
          <p className="mt-3">
            Effectum is an open-source autonomous development framework that gives{" "}
            <strong className="text-text-primary">Claude Code</strong> a structured workflow
            for producing production-ready software. It is not a chat tool, an IDE plugin,
            or a prompt collection — it is a complete development framework: 42 slash commands,
            8 automated quality gates, 7 modular stack presets, and a PRD-driven build loop
            that runs until your code actually ships.
          </p>
          <p className="mt-4">
            Install it with one command (<code className="rounded bg-code-bg px-1.5 py-0.5 font-mono text-sm text-code-text">npx @aslomon/effectum</code>),
            configure your stack, write a spec with the PRD Workshop, and let Claude build
            autonomously. The framework enforces quality — zero build errors, full type safety,
            80%+ test coverage, OWASP security checks — every single time.
          </p>
        </section>

        {/* Why it exists */}
        <section>
          <h2 className="pt-2 text-xl font-semibold text-text-primary">
            Why Effectum exists: the problem with unstructured AI coding
          </h2>
          <p className="mt-3">
            Most AI coding tools fall into one of two traps. They are either so simple that
            they produce throwaway code — no tests, no types, no structure — or so complex
            that you spend more time configuring the framework than actually building.
          </p>
          <p className="mt-4">
            After testing every major approach — BMAD, GSD context-engineering, SpecKit,
            Taskmaster, and others — the same pattern kept emerging: great ideas buried in
            too much ceremony, or powerful autonomous execution with no quality guarantees.
            Vague prompts produce vague output. Unstructured AI coding sessions end in
            half-built features, broken tests, and code nobody would ship to production.
          </p>
          <p className="mt-4">
            Effectum exists because structured spec-driven development with autonomous
            execution is the answer. Write a proper specification first — acceptance criteria,
            data models, clear scope — and an AI can build production-quality code without
            hand-holding.
          </p>
        </section>

        {/* How it works */}
        <section>
          <h2 className="pt-2 text-xl font-semibold text-text-primary">
            How Effectum works: spec → plan → build → verify
          </h2>
          <p className="mt-3">
            The Effectum framework follows four phases:
          </p>
          <ol className="mt-4 space-y-3 list-none">
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">1</span>
              <span>
                <strong className="text-text-primary">Spec</strong> — The{" "}
                <Link href="/docs/prd-workshop" className="text-accent hover:text-accent-hover underline underline-offset-2">
                  PRD Workshop
                </Link>{" "}
                (<code className="font-mono text-sm text-code-text">effect:prd:new</code>) guides you through writing a structured Product Requirements Document.
                Adaptive questioning turns a vague idea into precise acceptance criteria, data models, and scope boundaries.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">2</span>
              <span>
                <strong className="text-text-primary">Plan</strong> — The spec is reviewed (<code className="font-mono text-sm text-code-text">/prd:review</code>) and handed off
                to the target project (<code className="font-mono text-sm text-code-text">/prd:handoff</code>), generating a precise build prompt that leaves no room for ambiguity.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">3</span>
              <span>
                <strong className="text-text-primary">Build</strong> — The{" "}
                <Link href="/docs/commands" className="text-accent hover:text-accent-hover underline underline-offset-2">
                  /run command
                </Link>{" "}
                launches an autonomous build loop. Claude writes code, runs tests, fixes errors, and iterates
                — without interrupting you — until the completion promise is satisfied.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-bold text-accent">4</span>
              <span>
                <strong className="text-text-primary">Verify</strong> — Eight automated quality gates enforce production standards:
                zero build errors, zero type errors, zero lint warnings, 80%+ test coverage, zero OWASP vulnerabilities,
                no debug logs, strict TypeScript, and max 300 lines per file. All 8 must pass — no partial credit.
              </span>
            </li>
          </ol>
          <p className="mt-4">
            The PRD Workshop is the heart of this framework. A vague prompt produces vague output.
            A structured PRD with acceptance criteria and clear scope produces code that actually ships.
          </p>
        </section>

        {/* Who it's for */}
        <section>
          <h2 className="pt-2 text-xl font-semibold text-text-primary">
            Who Effectum is for
          </h2>
          <ul className="mt-4 space-y-3">
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong className="text-text-primary">Solo developers using Claude Code</strong>{" "}
                who want to ship full products faster without sacrificing code quality or accumulating technical debt.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong className="text-text-primary">Small teams</strong>{" "}
                that need a shared development workflow with consistent quality standards across contributors — a common
                language for spec-driven AI development.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong className="text-text-primary">Technical founders and builders</strong>{" "}
                who want to go from idea to production-ready code without writing every line — and without
                babysitting an AI through endless clarifications.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
              <span>
                <strong className="text-text-primary">Less technical builders</strong>{" "}
                who have ideas but lack deep coding experience — the Effectum framework turns natural language
                specifications into working, tested software.
              </span>
            </li>
          </ul>
        </section>

        {/* Comparison section */}
        <section>
          <h2 className="pt-2 text-xl font-semibold text-text-primary">
            How Effectum compares to GSD, BMAD, Kiro, and Taskmaster
          </h2>
          <p className="mt-3">
            There are several popular frameworks and tools in the AI-assisted development space.
            Here is how Effectum differs from each:
          </p>

          <div className="mt-6 space-y-5">
            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-base font-semibold text-text-primary">Effectum vs. GSD (Context Engineering Intro)</h3>
              <p className="mt-2 text-sm text-text-secondary">
                GSD (Get Shit Done) by coleam00 is a lightweight context-engineering framework focused on writing better
                context files for Claude. It is excellent for structuring prompts and PRDs, but it does not include
                an autonomous build loop, quality gates, or workflow commands. Effectum builds on the same
                spec-first principle as GSD but adds a complete development framework on top: 42 commands,
                8 automated quality gates, modular stacks, and the Ralph Loop for overnight autonomous builds.
                Think of GSD as the context layer — Effectum is the full workflow.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-base font-semibold text-text-primary">Effectum vs. BMAD Method</h3>
              <p className="mt-2 text-sm text-text-secondary">
                BMAD (Breakthrough Method for Agile AI-Driven Development) is a comprehensive multi-agent agile
                framework with 12+ specialized agent personas (PM, Architect, Developer, UX, and more). It is
                powerful but has a steep learning curve — the Party Mode, cross-agent collaboration, and
                scale-adaptive planning add significant ceremony. Effectum takes a leaner approach: fewer
                moving parts, faster setup (2 minutes vs. hours), and a tighter focus on the spec → build → verify
                loop that Claude Code developers need for day-to-day shipping.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-base font-semibold text-text-primary">Effectum vs. Kiro</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Kiro is a spec-driven development tool from Amazon with a polished IDE experience, agent hooks,
                and autopilot mode. It requires the Kiro IDE or CLI and is built around the Amazon/AWS ecosystem.
                Effectum works entirely inside Claude Code — no new IDE, no subscription, no lock-in. It is
                open-source (MIT license), works with any stack, and runs anywhere Node.js runs. Both tools
                share the spec-first philosophy; Effectum offers the flexibility of a fully open framework
                that you own and can extend.
              </p>
            </div>

            <div className="rounded-xl border border-border bg-surface p-5">
              <h3 className="text-base font-semibold text-text-primary">Effectum vs. Taskmaster</h3>
              <p className="mt-2 text-sm text-text-secondary">
                Taskmaster is a task management framework for AI coding — it breaks PRDs into individual tasks
                and manages their execution queue. It excels at task decomposition and dependency tracking.
                Effectum includes similar PRD decomposition capabilities (via <code className="font-mono text-sm text-code-text">/prd:update</code> delta
                handoffs) but wraps them in a broader development framework: quality gates, stack configuration,
                autonomous build loops, stuck detection, and context budget monitoring. Taskmaster manages tasks;
                Effectum manages the entire development lifecycle.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-xl border border-accent/20 bg-accent-light p-6">
            <p className="text-sm font-medium text-text-primary">
              Effectum's position: structured enough to produce production-quality code, simple enough to install
              in 2 minutes, extensible enough to adapt to any stack, and autonomous enough to build while you sleep.
              It is the Claude Code development framework that sits at the sweet spot — more opinionated than
              GSD, less complex than BMAD, more open than Kiro.
            </p>
          </div>
        </section>

        {/* Self-extensible */}
        <section>
          <h2 className="pt-2 text-xl font-semibold text-text-primary">
            Self-extensible by design
          </h2>
          <p className="mt-3">
            Everything in the Effectum framework is plain text. Workflow commands are Markdown files.
            Quality gates are configurable thresholds. Guardrails are editable rules. Stack presets
            are templates you can fork and customize. There is no proprietary format, no lock-in, no magic.
          </p>
          <p className="mt-4">
            If a command does not fit your workflow, change it. If a quality gate is too strict or too lenient,
            adjust it. If you need a new stack preset, create one from the generic template. This framework
            is designed to be modified by the people who use it.
          </p>
        </section>

        {/* Open source */}
        <section>
          <h2 className="pt-2 text-xl font-semibold text-text-primary">
            Open source, MIT license, forever free
          </h2>
          <p className="mt-3">
            Effectum is MIT-licensed and will remain free and open source. It was built by{" "}
            <a
              href="https://github.com/aslomon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover"
            >
              Jason Salomon-Rinnert
            </a>{" "}
            and is maintained by a growing community of contributors. No paywalls, no gated features,
            no enterprise tiers — every improvement is shared with everyone.
          </p>
        </section>

        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <Link
            href="/docs/getting-started"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get started in 2 minutes
          </Link>
          <Link
            href="/docs/commands"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-surface"
          >
            Browse 42 commands
          </Link>
          <a
            href="https://github.com/aslomon/effectum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-medium text-text-primary transition-colors hover:border-border-hover hover:bg-surface"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

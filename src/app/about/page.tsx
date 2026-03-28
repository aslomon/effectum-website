import type { Metadata } from "next";
import Link from "next/link";
import { Logo } from "@/components/logo";

export const metadata: Metadata = {
  title: "About",
  description:
    "Why effectum exists — the sweet spot between too complex and too simple for autonomous AI development.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 lg:px-12 lg:pt-28 lg:pb-24">
      <Logo className="mb-10 h-7 w-auto text-text-primary" />

      <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
        The sweet spot between
        <br />
        <span className="text-accent">too complex and too simple.</span>
      </h1>

      <div className="mt-10 space-y-8 text-base leading-relaxed text-text-secondary">
        <p>
          Most AI coding tools fall into one of two traps. They are either so
          simple that they produce throwaway code — no tests, no types, no
          structure — or so complex that you spend more time configuring the
          framework than actually building.
        </p>

        <p>
          effectum exists because neither extreme works. After two years of
          testing every major approach — BMAD, GSD, SpecKit, Taskmaster, and
          many others — we kept running into the same pattern: great ideas
          buried in too much ceremony, or powerful execution with no quality
          guarantees.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-text-primary">
          What we learned
        </h2>

        <p>
          The best results come from a simple insight: if you write a proper
          specification, an AI can build production-ready code autonomously. Not
          prototype code. Not demo code. Code with tests, type safety, security
          checks, and enforced quality gates.
        </p>

        <p>
          The key is the specification. A vague prompt produces vague output. A
          structured PRD with acceptance criteria, data models, and clear scope
          produces code that actually ships. That is why the PRD Workshop is the
          heart of effectum — it bridges the gap between having an idea and
          having a buildable spec.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-text-primary">
          The perfect mix
        </h2>

        <p>
          effectum combines generative AI intelligence with the structure of a
          well-engineered program. It is spec-driven development with autonomous
          execution: you define what you want, effectum ensures it gets built
          correctly.
        </p>

        <div className="rounded-xl border border-accent/20 bg-accent-light p-6">
          <p className="text-sm font-medium text-text-primary">
            Structured enough to produce production-quality code. Simple enough
            to install in 2 minutes. Extensible enough to adapt to any stack.
            Autonomous enough to build while you sleep.
          </p>
        </div>

        <h2 className="pt-4 text-xl font-semibold text-text-primary">
          Self-extensible by design
        </h2>

        <p>
          Everything in effectum is plain text. The workflow commands are
          Markdown files. The quality gates are configurable. The guardrails are
          editable rules. The stack presets are templates you can fork and
          customize. There is no proprietary format, no lock-in, no magic.
        </p>

        <p>
          If a command does not fit your workflow, change it. If a quality gate
          is too strict or too lenient, adjust the threshold. If you need a new
          stack preset, create one from the generic template. The system is
          designed to be modified by the people who use it.
        </p>

        <h2 className="pt-4 text-xl font-semibold text-text-primary">
          Who it is for
        </h2>

        <ul className="space-y-3">
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong className="text-text-primary">Solo developers</strong>{" "}
              building full products with Claude Code who want to ship faster
              without sacrificing quality.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong className="text-text-primary">Small teams</strong> who
              need a shared development workflow with consistent quality
              standards across contributors.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>
              <strong className="text-text-primary">
                Less technical builders
              </strong>{" "}
              who have ideas but lack coding experience — effectum turns natural
              language into working software.
            </span>
          </li>
        </ul>

        <h2 className="pt-4 text-xl font-semibold text-text-primary">
          Open source, forever
        </h2>

        <p>
          effectum is MIT-licensed and will remain free and open source. It was
          built by{" "}
          <a
            href="https://github.com/aslomon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:text-accent-hover"
          >
            Jason Salomon-Rinnert
          </a>{" "}
          and is maintained by a growing community of contributors. Every
          improvement is shared with everyone.
        </p>

        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
          <Link
            href="/docs/getting-started"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-accent px-6 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
          >
            Get started
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

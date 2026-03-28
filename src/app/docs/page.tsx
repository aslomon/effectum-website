import type { Metadata } from "next";
import Link from "next/link";
import {
  Rocket,
  Terminal,
  LayoutGrid,
  FileText,
  ArrowRight,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Documentation",
  description:
    "Learn how to use effectum to build production-ready code with Claude Code.",
};

const SECTIONS = [
  {
    title: "Getting Started",
    description:
      "Install effectum, configure your stack, and build your first feature autonomously in minutes.",
    href: "/docs/getting-started",
    icon: Rocket,
    featured: true,
    badge: "Start here",
  },
  {
    title: "PRD Workshop",
    description:
      "The heart of effectum. Transform ideas into structured specs that guide Claude to build exactly what you want.",
    href: "/docs/prd-workshop",
    icon: FileText,
    featured: true,
    badge: "Most important",
  },
  {
    title: "Commands",
    description:
      "Reference for all 31 workflow commands — from planning to autonomous overnight builds.",
    href: "/docs/commands",
    icon: Terminal,
    featured: false,
    badge: null,
  },
  {
    title: "Stack Presets",
    description:
      "Pre-configured setups for Next.js, Python, Swift, and more. Get started in one command.",
    href: "/docs/stack-presets",
    icon: LayoutGrid,
    featured: false,
    badge: null,
  },
];

export default function DocsPage() {
  return (
    <div>
      {/* Page header */}
      <div className="border-b border-border pb-8">
        <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-accent">
          Documentation
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary">
          effectum docs
        </h1>
        <p className="mt-3 max-w-2xl text-lg text-text-secondary">
          effectum is the perfect mix of generative AI intelligence and
          structured workflow. These docs cover installation, the PRD
          specification system, workflow commands, and stack presets.
        </p>
      </div>

      {/* Recommended reading order callout */}
      <div className="mt-8 flex items-start gap-3 rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 dark:border-amber-800/30 dark:bg-amber-950/30">
        <Star
          size={16}
          className="mt-0.5 shrink-0 text-accent"
          aria-hidden="true"
        />
        <p className="text-sm text-text-secondary">
          <span className="font-medium text-text-primary">
            Recommended reading order:
          </span>{" "}
          Getting Started &rarr; PRD Workshop &rarr; Commands &rarr; Stack
          Presets. The PRD Workshop is the most important section — it explains
          how to write specs that Claude can build autonomously.
        </p>
      </div>

      {/* Section cards */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {SECTIONS.map((section) => {
          const Icon = section.icon;
          return (
            <Link
              key={section.href}
              href={section.href}
              className={`group relative rounded-xl border bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-md ${
                section.featured
                  ? "border-amber-200 ring-1 ring-amber-100 dark:border-amber-800/30 dark:ring-amber-900/20"
                  : "border-border hover:border-border-hover"
              }`}
            >
              {/* Badge */}
              {section.badge && (
                <span className="mb-3 inline-flex items-center rounded-full bg-amber-50 px-2.5 py-0.5 text-xs font-medium text-accent dark:bg-amber-950/40">
                  {section.badge}
                </span>
              )}

              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div
                    className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      section.featured
                        ? "bg-amber-100 text-accent dark:bg-amber-900/30"
                        : "bg-background text-text-muted group-hover:bg-amber-50 group-hover:text-accent dark:group-hover:bg-amber-950/30"
                    }`}
                  >
                    <Icon size={16} aria-hidden="true" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-text-primary transition-colors group-hover:text-accent">
                      {section.title}
                    </h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                      {section.description}
                    </p>
                  </div>
                </div>
                <ArrowRight
                  size={15}
                  className="mt-0.5 shrink-0 text-text-muted transition-transform group-hover:translate-x-0.5 group-hover:text-accent"
                  aria-hidden="true"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

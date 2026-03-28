import type { Metadata } from "next";
import Link from "next/link";
import { Tag, GitCommit, Package, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Changelog",
  description:
    "What's new in effectum — release notes, bug fixes, and feature announcements.",
};

interface Release {
  version: string;
  date: string;
  tag?: "latest" | "stable";
  sections: {
    type: "Added" | "Changed" | "Fixed" | "Tests" | "Breaking";
    items: string[];
  }[];
}

const RELEASES: Release[] = [
  {
    version: "0.16.0",
    date: "2026-03-28",
    tag: "latest",
    sections: [
      {
        type: "Added",
        items: [
          "Sentinel-based CLAUDE.md Split — `<!-- effectum:project-context:start/end -->` markers preserve project context across `effectum update` re-renders. Custom content survives template changes.",
          "Context Budget Monitor — `/ralph-loop` and `/orchestrate` estimate context usage before each iteration. At >80%: commit state, write HANDOFF.md with structured handoff, and stop cleanly.",
          "Stuck Detection — `/ralph-loop` tracks error messages across iterations. Same error in 2 consecutive iterations: stop immediately, write STUCK.md with diagnosis and next steps.",
          "Per-Iteration Loop State — `/ralph-loop` persists `.effectum/loop-state.json` after every iteration. Detects incomplete runs on startup and offers to resume or start fresh.",
          "Loop Ledger — On completion (success, stuck, or budget stop), appends a session entry to `effectum-metrics.json` with iterations, outcome, quality gates, and duration.",
          "/forensics Command — Post-mortem diagnosis reads HANDOFF.md, STUCK.md, loop-state.json, effectum-metrics.json, and git log. Classifies failure mode, outputs `FORENSICS-YYYY-MM-DD.md`.",
          "/effectum:init Command — Interactive 7-question interview to populate the sentinel block in CLAUDE.md with project-specific context (app description, users, architecture decisions, conventions, tech debt).",
          "/map-codebase Command — Spawns 4 parallel agents (ArchitectureMapper, StackMapper, QualityMapper, IntegrationMapper) producing 7 knowledge docs in `knowledge/codebase/`.",
          "Hook Modernization — Added `if` conditional fields to git-specific hooks: commit message check fires on `git commit*`, secret scanning fires on `git commit*` or `git push*`.",
        ],
      },
      {
        type: "Changed",
        items: [
          "Version bumped — v0.15.0 → v0.16.0",
          "README — Updated version badge and feature descriptions for v0.16.0",
          "Command Index — Added /forensics, /effectum:init, /map-codebase to command reference",
        ],
      },
      {
        type: "Tests",
        items: [
          "413 tests, all passing (up from 389)",
        ],
      },
    ],
  },
  {
    version: "0.15.0",
    date: "2026-03-26",
    tag: undefined,
    sections: [
      {
        type: "Added",
        items: [
          "YAML frontmatter on all 28 commands — each command now has `title`, `description`, `usage`, and `examples` metadata for better discoverability and tooling.",
          "Commands README index (system/commands/README.md) — searchable index of all commands with descriptions and usage examples.",
          "6 specialized onboard agents — parallel analysis agents (api, architecture, database, frontend, stack, test) for faster, more accurate /onboard.",
        ],
      },
      {
        type: "Changed",
        items: [
          "onboard.md refactored from 578 → 202 lines — cleaner orchestration, delegates analysis to specialized agents, faster execution.",
        ],
      },
      {
        type: "Tests",
        items: [
          "389 tests, all passing (up from 299)",
          "Added test/frontmatter.test.js — 210 tests validating YAML frontmatter on all commands",
        ],
      },
    ],
  },
  {
    version: "0.14.2",
    date: "2026-03-26",
    tag: undefined,
    sections: [
      {
        type: "Fixed",
        items: [
          "effectum update now shows a clear error when .effectum.json is missing instead of silently failing.",
          "Clack fallback for non-TTY environments — effectum update --yes works in CI/scripts without interactive prompt.",
        ],
      },
    ],
  },
  {
    version: "0.14.1",
    date: "2026-03-26",
    tag: undefined,
    sections: [
      {
        type: "Fixed",
        items: [
          "effectum update --yes flag now correctly skips all confirmation prompts for non-interactive mode.",
        ],
      },
    ],
  },
  {
    version: "0.14.0",
    date: "2026-03-26",
    tag: undefined,
    sections: [
      {
        type: "Added",
        items: [
          "effectum update command — intelligently updates your project's CLAUDE.md/AGENTS.md and commands to the latest version without requiring full reconfiguration. Preserves your existing customizations.",
          "Package manager configuration — effectum now detects npm, pnpm, yarn, or bun from your project and sets it as the default. Overridable in the setup flow.",
          "Next-step navigation in all commands — every command now ends with a clear suggestion for what to run next, keeping Claude oriented in the workflow.",
        ],
      },
      {
        type: "Tests",
        items: [
          "299 tests, all passing (up from 236)",
          "Added test/update.test.js (306 tests), test/package-manager.test.js (232 tests), test/next-steps.test.js (183 tests)",
        ],
      },
    ],
  },
  {
    version: "0.13.0",
    date: "2026-03-25",
    tag: undefined,
    sections: [
      {
        type: "Added",
        items: [
          "/design Command (system/commands/design.md) — 5-step workflow: read PRD → detect design signals → ask 3–5 questions → generate DESIGN.md → confirm. Bridges the gap between 'what to build' (PRD) and 'how it should look' (DESIGN.md).",
          "DESIGN.md Template (system/templates/DESIGN.md.tmpl) — 7 sections: Overview, Color System, Typography, Component Patterns, Layout & Spacing, Interaction Design, Constraints. Uses {{projectName}} / {{stack}} / {{date}} interpolation.",
          "detectDesignSignals(dir) (bin/lib/design.js) — scans for Tailwind (config files + package.json), shadcn (components.json), CSS custom properties (globals.css). Returns { hasTailwind, hasShadcn, cssVars, existingColors }.",
          "Design docs (docs/design-md.md) — when to use DESIGN.md, how to run /design, section reference, example Next.js+Tailwind snippet, FAQ.",
        ],
      },
      {
        type: "Tests",
        items: [
          "236 tests, all passing (up from 201)",
          "Added test/design.test.js — 35 tests covering Tailwind/shadcn/CSS detection, parseCssVars, isColorValue, template loading/interpolation, command file validation",
        ],
      },
    ],
  },
  {
    version: "0.12.0",
    date: "2026-03-25",
    tag: "stable",
    sections: [
      {
        type: "Added",
        items: [
          "AGENTS.md Detection — detectAgentsMd() detects AGENTS.md in project root, sets agentsMdFound: true with certain confidence; wired into detectAll()",
          "--output-format CLI flag — accepts claude-md (default) | agents-md | both. Generates a tool-agnostic AGENTS.md alongside or instead of CLAUDE.md. Auto-triggers when existing AGENTS.md detected.",
          "AGENTS.md template blocks (system/blocks/agents-md/) — 4 generic blocks: foundation, workflow, guardrails, commands. No Claude-specific language — compatible with Codex, Gemini CLI, and other agents.",
          "npm Stats Script (scripts/npm-stats.mjs) — tracks daily/weekly/monthly downloads and GitHub stars, outputs Markdown report. Cron-safe.",
          "HN Launch Post draft (docs/launch/hn-post.md) — Show HN post with thread strategy and timing notes.",
        ],
      },
      {
        type: "Changed",
        items: [
          "README — added Kiro to comparison table, AGENTS.md positioning note, clarified CLI-native vs IDE-based positioning",
          "docs/cli-reference.md — documented --output-format flag with examples",
        ],
      },
      {
        type: "Tests",
        items: [
          "201 tests, all passing (up from 184)",
          "Added test/agents-md.test.js — 17 new tests covering detection, block loading, placeholder content, composeBlocks compatibility, and interpolation",
        ],
      },
    ],
  },
  {
    version: "0.11.1",
    date: "2026-03-24",
    tag: "stable",
    sections: [
      {
        type: "Fixed",
        items: [
          "Rust/Cargo.toml detection now maps correctly to the rust-actix stack preset",
          "npx entry point fixed — main() was not being called when loaded via the effectum.js router",
        ],
      },
    ],
  },
  {
    version: "0.11.0",
    date: "2026-03-24",
    sections: [
      {
        type: "Added",
        items: [
          "Agent Teams Orchestration — 5 YAML team profiles (web-feature, fullstack, frontend-only, review, overnight-build) with agent specializations, file ownership, phased execution, quality gates, and cost estimates",
          "/orchestrate command — full lifecycle management: profile loading, prerequisite validation, cost estimation, team creation, PRD-based task distribution, progress monitoring, nudge, and shutdown",
          "suggestTeams() — recommendation engine that suggests optimal team profiles based on code complexity (ACs, module count, parallel streams)",
          "Team Hooks — enhanced TeammateIdle and TaskCompleted hooks for task completion validation and test status verification",
        ],
      },
      {
        type: "Changed",
        items: [
          "bin/lib/recommendation.js — integrated suggestTeams() output into the main recommendation engine",
          "AUTONOMOUS-WORKFLOW.md — added Section 9.5 with /orchestrate reference, YAML profile table, and cost awareness guidance",
          "docs/teams.md — complete rewrite with YAML schema, all 5 profile definitions, /orchestrate workflow, and automatic recommendation logic",
        ],
      },
    ],
  },
  {
    version: "0.10.0",
    date: "2026-03-24",
    sections: [
      {
        type: "Fixed",
        items: [
          "readConfig() now throws a descriptive error on invalid JSON instead of silently returning null",
          "loadStackPreset() falls back to the generic preset with a warning instead of crashing",
          "checkPackageAvailable() uses async spawn + Promise.all for parallel MCP checks — reduces max wait from ~32s to ≤10s",
          "deepMerge() uses concat+deduplicate for permissions arrays — preserves user-defined deny rules through reconfigure",
          "parseStackPreset() handles CRLF line endings — fixes silent parse failures on Windows",
          "installBaseFiles() ensures .claude/ exists before file writes — prevents crash on first install",
          "installPlaywrightBrowsers() error path references correct stderr variable",
          "findRepoRoot() uses __dirname-based traversal — works correctly when loaded as a library",
        ],
      },
      {
        type: "Tests",
        items: [
          "184 tests, all passing (up from 156)",
          "Added test/install.test.js — 28 new integration and unit tests",
          "Extended stack-parser, utils, and config test coverage",
        ],
      },
    ],
  },
  {
    version: "0.9.0",
    date: "2026-03-23",
    sections: [
      {
        type: "Added",
        items: [
          "Modular Stack Selection + Smart Auto-Detection — detection rules for JavaScript (27), Python (13), Go (7), Swift (5), Dart (5)",
          "8 quick-start presets: nextjs-supabase, nextjs-firebase, nextjs-prisma, django-postgres, fastapi-postgres, go-echo-postgres, swift-swiftui, flutter-firebase",
          "14 CLAUDE.md template blocks organized by category",
          "Confidence-based detection: certain / partial / none — drives installer skip logic with --yes smart defaults",
          "Interactive HTML Network Map Viewer — dark/light theme, direction toggle, SVG export",
        ],
      },
      {
        type: "Fixed",
        items: [
          "Next.js-only projects no longer incorrectly detected as nextjs-supabase",
          "Mermaid syntax safety rules added for labels with slashes/special chars",
        ],
      },
    ],
  },
  {
    version: "0.8.0",
    date: "2026-03-23",
    sections: [
      {
        type: "Added",
        items: [
          "/onboard command — reverse-engineers existing codebases into effectum PRDs via 6 parallel analysis agents (Stack, Architecture, API, Database, Frontend, Tests)",
          "/onboard:review command — consistency review with 6 checks, supports --fix and --strict flags",
          "Updated PRD template — added implemented status and onboarded field to frontmatter schema",
        ],
      },
    ],
  },
  {
    version: "0.7.0",
    date: "2026-03-23",
    sections: [
      {
        type: "Added",
        items: [
          "Stack Preset: Go + Echo — Go 1.22+, Echo v4, GORM, PostgreSQL, Air hot-reload, golangci-lint, golang-migrate",
          "Stack Preset: Django + PostgreSQL — Python 3.12+, Django 5+, DRF, pytest-django, ruff, mypy, uv",
        ],
      },
    ],
  },
  {
    version: "0.6.2",
    date: "2026-03-22",
    sections: [
      {
        type: "Added",
        items: [
          "124 unit tests for recommendation engine, detect module, template engine, and stack parser",
          "GitHub Actions CI/CD pipeline (ci.yml + publish.yml)",
        ],
      },
    ],
  },
  {
    version: "0.6.0",
    date: "2026-03-21",
    sections: [
      {
        type: "Added",
        items: [
          "Rust + Actix stack preset",
          "/prd:network-map command for visual dependency mapping",
          "/prd:update command for safe in-place PRD updates",
          "/code-review command for systematic code review with severity levels",
          "Playwright browser automation support via Foundation MCP",
        ],
      },
    ],
  },
];

const TYPE_STYLES: Record<string, { bg: string; text: string; dot: string }> = {
  Added: {
    bg: "bg-emerald-500/10",
    text: "text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
  },
  Changed: {
    bg: "bg-blue-500/10",
    text: "text-blue-600 dark:text-blue-400",
    dot: "bg-blue-500",
  },
  Fixed: {
    bg: "bg-amber-500/10",
    text: "text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
  },
  Tests: {
    bg: "bg-violet-500/10",
    text: "text-violet-600 dark:text-violet-400",
    dot: "bg-violet-500",
  },
  Breaking: {
    bg: "bg-red-500/10",
    text: "text-red-600 dark:text-red-400",
    dot: "bg-red-500",
  },
};

function TypeBadge({ type }: { type: string }) {
  const style = TYPE_STYLES[type] ?? TYPE_STYLES.Changed;
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium ${style.bg} ${style.text}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${style.dot}`} />
      {type}
    </span>
  );
}

function VersionBadge({ tag }: { tag?: string }) {
  if (!tag) return null;
  return (
    <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-semibold text-white">
      {tag}
    </span>
  );
}

export default function ChangelogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-20 pb-16 lg:px-12 lg:pt-28 lg:pb-24">
      {/* Header */}
      <div className="mb-12">
        <div className="mb-4 flex items-center gap-2 text-accent">
          <GitCommit className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-wider">
            Release History
          </span>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Changelog
        </h1>
        <p className="mt-4 text-lg text-text-secondary">
          Every release, documented. effectum ships fast — check back often.
        </p>

        {/* Quick links */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link
            href="https://www.npmjs.com/package/@aslomon/effectum"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            <Package className="h-3.5 w-3.5" />
            npm
            <ArrowUpRight className="h-3 w-3" />
          </Link>
          <Link
            href="https://github.com/aslomon/effectum/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border px-3 py-1.5 text-sm text-text-secondary transition-colors hover:border-accent hover:text-accent"
          >
            <Tag className="h-3.5 w-3.5" />
            Full changelog on GitHub
            <ArrowUpRight className="h-3 w-3" />
          </Link>
        </div>
      </div>

      {/* Releases */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border" />

        <div className="space-y-12 pl-8">
          {RELEASES.map((release) => (
            <div key={release.version} className="relative">
              {/* Dot on timeline */}
              <div className="absolute -left-[2.125rem] top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-surface" />

              {/* Version header */}
              <div className="mb-4 flex flex-wrap items-center gap-2.5">
                <h2 className="text-xl font-bold tracking-tight text-text-primary">
                  v{release.version}
                </h2>
                <VersionBadge tag={release.tag} />
                <time className="text-sm text-text-muted">{release.date}</time>
              </div>

              {/* Sections */}
              <div className="space-y-5">
                {release.sections.map((section, idx) => (
                  <div key={idx}>
                    <div className="mb-2">
                      <TypeBadge type={section.type} />
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-text-secondary"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-text-muted" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="mt-16 rounded-xl border border-border p-5 text-sm text-text-secondary">
        <strong className="text-text-primary">All releases on npm:</strong>{" "}
        <code className="rounded bg-surface-raised px-1.5 py-0.5 font-mono text-xs">
          npx @aslomon/effectum@0.16.0
        </code>{" "}
        — or just{" "}
        <code className="rounded bg-surface-raised px-1.5 py-0.5 font-mono text-xs">
          npx @aslomon/effectum
        </code>{" "}
        for latest.
      </div>
    </div>
  );
}

// Commands page data — extracted for file size limits

export type CommandPhase =
  | "Planning"
  | "Implementation"
  | "QA"
  | "Automation"
  | "Safety";

export interface CommandEntry {
  name: string;
  phase: CommandPhase;
  tagline: string;
  description: string;
  details: string[];
  usage: string;
  icon: string;
}

export const COMMANDS: CommandEntry[] = [
  {
    name: "/plan",
    phase: "Planning",
    icon: "Map",
    tagline: "Think before building",
    description:
      "Reads your specification, explores the existing codebase, and creates a detailed implementation plan. Surfaces risks, asks clarifying questions, and identifies the right order of operations.",
    details: [
      "Analyzes PRD acceptance criteria, data model, and API design",
      "Creates step-by-step implementation plan with dependencies",
      "Identifies risks and open questions",
      "Waits for your explicit approval before writing any code",
    ],
    usage: "/plan docs/prds/001-my-feature.md",
  },
  {
    name: "/tdd",
    phase: "Implementation",
    icon: "FlaskConical",
    tagline: "Tests first, always",
    description:
      "Enforces test-driven development. Writes a failing test, implements the minimum code to pass it, then refactors. Repeats for each acceptance criterion.",
    details: [
      "RED: write a failing test for the next AC",
      "GREEN: implement minimum code to pass",
      "REFACTOR: improve without changing behavior",
      "Targets 80%+ coverage on new code",
    ],
    usage: "/tdd",
  },
  {
    name: "/verify",
    phase: "QA",
    icon: "ShieldCheck",
    tagline: "Every quality gate, every time",
    description:
      "Runs all 8 quality gates in sequence and reports pass/fail for each. These are requirements, not suggestions. A feature is not done until all gates pass.",
    details: [
      "Build (0 errors), Types (0 errors), Lint (0 warnings)",
      "Tests (all pass, 80%+ coverage)",
      "Security (no OWASP vulnerabilities)",
      "Debug logs (0 console.log), Type safety (no any/as), File size (max 300 lines)",
    ],
    usage: "/verify",
  },
  {
    name: "/e2e",
    phase: "QA",
    icon: "MousePointer2",
    tagline: "Test real user flows",
    description:
      "Generates and runs end-to-end tests using Playwright. Tests real user flows through browser automation — page loads, navigation, form submissions, and critical journeys.",
    details: [
      "Auto-generates Playwright test scripts",
      "Tests critical user journeys end-to-end",
      "Captures screenshots and traces on failure",
      "Uses accessibility-tree selectors for stability",
    ],
    usage: "/e2e",
  },
  {
    name: "/code-review",
    phase: "QA",
    icon: "Search",
    tagline: "A second pair of eyes",
    description:
      "Security audit and architecture validation. Reviews every change for OWASP vulnerabilities, code quality violations, architecture rule breaches, and common mistakes.",
    details: [
      "OWASP Top 10 vulnerability scanning",
      "Architecture and design pattern validation",
      "RLS policy completeness check (Supabase)",
      "Rates findings: Critical, Warning, Info",
    ],
    usage: "/code-review",
  },
  {
    name: "/build-fix",
    phase: "Implementation",
    icon: "Wrench",
    tagline: "Diagnose, don't guess",
    description:
      "Reads build error output, identifies root causes, and applies targeted fixes. Works incrementally — fixes one error at a time, rebuilds, and repeats.",
    details: [
      "Reads full error messages and stack traces",
      "Identifies root cause before attempting fixes",
      "Applies targeted changes, not broad rewrites",
      "Rebuilds after each fix to verify",
    ],
    usage: "/build-fix",
  },
  {
    name: "/refactor-clean",
    phase: "Implementation",
    icon: "Sparkles",
    tagline: "Less code, same behavior",
    description:
      "Removes dead code, unused imports, and unnecessary complexity. Runs tests before and after every change to ensure nothing breaks.",
    details: [
      "Identifies unused exports, imports, and variables",
      "Consolidates similar functions",
      "Improves naming without changing behavior",
      "Tests before and after every change",
    ],
    usage: "/refactor-clean",
  },
  {
    name: "/ralph-loop",
    phase: "Automation",
    icon: "Bot",
    tagline: "Build while you sleep",
    description:
      "The most powerful feature. Claude works autonomously — writing code, running tests, fixing errors — until every quality gate passes and your completion promise is 100% true.",
    details: [
      "Iterates: read spec → check state → implement → verify → repeat",
      "Built-in error recovery: pivots strategy after 3x same error",
      "Status report at 80% of max iterations",
      "Only outputs completion promise when genuinely true",
    ],
    usage:
      '/ralph-loop "Build feature X" --max-iterations 30 --completion-promise "All tests pass"',
  },
  {
    name: "/cancel-ralph",
    phase: "Automation",
    icon: "OctagonX",
    tagline: "Take back the wheel",
    description:
      "Stops an active Ralph Loop. Use when you want to take over manually, change direction, or if the loop is not converging on the desired outcome.",
    details: [
      "Immediately stops the autonomous loop",
      "Preserves all work done so far",
      "Git history shows every iteration",
      "Resume with a new /ralph-loop if needed",
    ],
    usage: "/cancel-ralph",
  },
  {
    name: "/checkpoint",
    phase: "Safety",
    icon: "Bookmark",
    tagline: "Save before you experiment",
    description:
      "Creates a git restore point with a descriptive tag. Use before risky changes, large refactors, or experiments so you can always roll back.",
    details: [
      "Creates a tagged git commit as restore point",
      "Descriptive tag for easy identification",
      "Roll back with a single git command",
      "Zero cost — just a commit and tag",
    ],
    usage: "/checkpoint",
  },
  {
    name: "/simplify",
    phase: "Implementation",
    icon: "Minimize2",
    tagline: "Reduce complexity, keep behavior",
    description:
      "Reviews changed code for reuse opportunities, quality issues, and inefficiencies, then fixes them. Reduces complexity without changing behavior.",
    details: [
      "Identifies duplicated logic and extracts shared helpers",
      "Simplifies overly nested or verbose code paths",
      "Removes unnecessary abstractions and indirection",
      "Verifies behavior is unchanged after every simplification",
    ],
    usage: "/simplify",
  },
  {
    name: "/onboard",
    phase: "Planning",
    icon: "ScanSearch",
    tagline: "Reverse-engineer any codebase",
    description:
      "Runs 6 parallel agents to analyze an existing codebase — dependencies, structure, patterns, environment, tests, and docs — then generates a complete CLAUDE.md and PRDs.",
    details: [
      "6 agents: deps, structure, patterns, env, tests, docs",
      "Auto-generates CLAUDE.md from analysis results",
      "Creates PRDs from existing code and architecture",
      "Works on any codebase, any language",
    ],
    usage: "/onboard",
  },
  {
    name: "/setup",
    phase: "Planning",
    icon: "Settings",
    tagline: "Reconfigure your install",
    description:
      "Reconfigures an existing effectum installation. Change stack, update guardrails, or adjust settings without starting from scratch.",
    details: [
      "Switch or update your stack preset",
      "Regenerate CLAUDE.md with new options",
      "Update guardrails and quality gates",
      "Preserves existing customizations where possible",
    ],
    usage: "/setup ~/my-project",
  },
  {
    name: "/design",
    phase: "Planning",
    icon: "Paintbrush",
    tagline: "Visual spec before you build",
    description:
      "Generates a structured DESIGN.md for frontend-heavy projects. Detects existing design signals (Tailwind, shadcn, CSS vars), asks 3–5 lightweight questions, and produces a visual source of truth for UI work.",
    details: [
      "Reads current PRD and scans for Tailwind, shadcn, CSS variables",
      "Asks 3–5 questions: color palette, typography feel, UI complexity",
      "Generates DESIGN.md with 7 sections: colors, typography, components, layout, interactions, constraints",
      "Reduces UI rework by making design decisions explicit before implementation",
    ],
    usage: "/design",
  },
  {
    name: "/orchestrate",
    phase: "Automation",
    icon: "Network",
    tagline: "Parallel agent teams",
    description:
      "Creates agent teams for parallel complex feature development. Spawns independent Claude instances that work on separate workstreams simultaneously.",
    details: [
      "Spawns parallel teammates for independent workstreams",
      "Each teammate inherits all hooks and guardrails",
      "Teammates communicate via mailbox and shared task list",
      "Merges results when all workstreams complete",
    ],
    usage: "/orchestrate",
  },
];

export const PHASE_ORDER: CommandPhase[] = [
  "Planning",
  "Implementation",
  "QA",
  "Automation",
  "Safety",
];

export const PHASE_META: Record<
  CommandPhase,
  { color: string; description: string }
> = {
  Planning: {
    color:
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/30",
    description: "Define what to build before writing any code",
  },
  Implementation: {
    color:
      "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/30",
    description: "Write code the right way — TDD, clean, verified",
  },
  QA: {
    color:
      "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/30",
    description: "Verify correctness, security, and quality",
  },
  Automation: {
    color:
      "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800/30",
    description: "Let Claude build autonomously overnight",
  },
  Safety: {
    color:
      "bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800/40 dark:text-gray-400 dark:border-gray-700/30",
    description: "Protect your work before risky changes",
  },
};

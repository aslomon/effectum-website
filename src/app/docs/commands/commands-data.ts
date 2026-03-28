// Commands page data — extracted for file size limits

export type CommandPhase =
  | "Planning"
  | "Implementation"
  | "QA"
  | "Automation"
  | "Safety"
  | "PRD Workshop"
  | "Onboarding"
  | "Workspace";

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
      "Stuck detection: stops on 2 consecutive identical errors",
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
    name: "/onboard",
    phase: "Planning",
    icon: "ScanSearch",
    tagline: "Reverse-engineer any codebase",
    description:
      "Runs 6 parallel agents to analyze an existing codebase — dependencies, structure, patterns, environment, tests, and docs — then generates a complete CLAUDE.md and PRDs.",
    details: [
      "6 parallel agents: Stack, Architecture, API, Database, Frontend, Test",
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

  // PRD Workshop commands
  {
    name: "/prd:new",
    phase: "PRD Workshop",
    icon: "Sparkles",
    tagline: "Spec from scratch",
    description:
      "Start a new guided specification from scratch. Claude asks adaptive questions until it fully understands what you want to build.",
    details: [
      "Adaptive questioning based on your domain and complexity",
      "Guided discovery for vague or unclear requirements",
      "Produces a structured PRD with acceptance criteria and data model",
      "Supports both workshop mode (12–15 questions) and quick entry",
    ],
    usage: "/prd:new",
  },
  {
    name: "/prd:express",
    phase: "PRD Workshop",
    icon: "Zap",
    tagline: "One-shot spec",
    description:
      "Fast one-shot spec from clear requirements. Best when you already know exactly what you want to build.",
    details: [
      "Generates a complete PRD from a one-liner or short description",
      "Skips discovery questions — goes straight to spec output",
      "Same structured format as /prd:new",
      "Best for well-understood features with clear scope",
    ],
    usage: "/prd:express",
  },
  {
    name: "/prd:update",
    phase: "PRD Workshop",
    icon: "RefreshCw",
    tagline: "Evolve an existing spec",
    description:
      "Safely update an existing PRD in-place. Tracks changes semantically and triggers a delta handoff so implementation stays in sync.",
    details: [
      "Detects and records what changed vs the previous version",
      "Updates PRD hash and version in frontmatter",
      "Triggers delta handoff to flag affected acceptance criteria",
      "Safe for specs already in progress — preserves completion state",
    ],
    usage: "/prd:update docs/prds/001-my-feature.md",
  },
  {
    name: "/prd:discuss",
    phase: "PRD Workshop",
    icon: "MessageSquare",
    tagline: "Deep-dive discussion",
    description:
      "Deep-dive into a specific area of your spec. Explore edge cases, data models, or API design in detail before writing code.",
    details: [
      "Focuses on one section of an existing PRD",
      "Surfaces edge cases and implicit assumptions",
      "Updates the PRD with insights from the discussion",
      "Useful before /plan on complex features",
    ],
    usage: "/prd:discuss docs/prds/001-my-feature.md",
  },
  {
    name: "/prd:review",
    phase: "PRD Workshop",
    icon: "ClipboardCheck",
    tagline: "Quality check before building",
    description:
      "Quality check before handing off to implementation. Flags missing acceptance criteria, vague goals, and incomplete data models.",
    details: [
      "Checks every AC has a matching test",
      "Flags vague goals that can't be verified",
      "Validates data model completeness and RLS policies",
      "Confirms completion promise is 100% verifiable",
    ],
    usage: "/prd:review docs/prds/001-my-feature.md",
  },
  {
    name: "/prd:decompose",
    phase: "PRD Workshop",
    icon: "Layers",
    tagline: "Split large scope",
    description:
      "Split large projects into smaller, independently buildable PRDs. Each sub-PRD is self-contained with its own acceptance criteria.",
    details: [
      "Analyzes scope and identifies natural split points",
      "Creates sub-PRDs with no cross-dependencies where possible",
      "Generates a dependency graph for sequencing",
      "Each sub-PRD is independently runnable with /ralph-loop",
    ],
    usage: "/prd:decompose docs/prds/001-large-feature.md",
  },
  {
    name: "/prd:handoff",
    phase: "PRD Workshop",
    icon: "Send",
    tagline: "Export spec to project",
    description:
      "Export a finished spec to the target project. Copies the PRD file and prepares it for /plan in the implementation project.",
    details: [
      "Copies PRD from workshop to target project",
      "Validates PRD is complete before export",
      "Sets status to 'ready' in frontmatter",
      "Outputs the /plan command to run next",
    ],
    usage: "/prd:handoff docs/prds/001-my-feature.md ~/my-project",
  },
  {
    name: "/prd:prompt",
    phase: "PRD Workshop",
    icon: "Code2",
    tagline: "Generate handoff prompt",
    description:
      "Generate a handoff prompt for a completed PRD. Use to start a new Claude session focused on one specific feature.",
    details: [
      "Extracts the essential context from a PRD",
      "Formats as a ready-to-paste Claude session opener",
      "Includes acceptance criteria and completion promise",
      "Optimized for minimal context burn",
    ],
    usage: "/prd:prompt docs/prds/001-my-feature.md",
  },
  {
    name: "/prd:status",
    phase: "PRD Workshop",
    icon: "BarChart3",
    tagline: "Dashboard of all projects",
    description:
      "View all projects and their current progress. Shows which specs are draft, ready, in progress, or complete.",
    details: [
      "Lists all projects under workshop/projects/",
      "Shows PRD count and status per project",
      "Highlights stalled or incomplete specs",
      "Quick overview before starting a new build session",
    ],
    usage: "/prd:status",
  },
  {
    name: "/prd:resume",
    phase: "PRD Workshop",
    icon: "RotateCcw",
    tagline: "Continue previous work",
    description:
      "Continue working on a previous specification. Loads context and picks up where you left off.",
    details: [
      "Reads the current PRD state and git log",
      "Summarizes what's done and what remains",
      "Identifies the next logical step",
      "Works with any PRD in any status",
    ],
    usage: "/prd:resume docs/prds/001-my-feature.md",
  },
  {
    name: "/prd:network-map",
    phase: "PRD Workshop",
    icon: "Network",
    tagline: "Visualize dependencies",
    description:
      "Render PRD dependencies as an interactive HTML map. Dark/light theme, direction toggle, and SVG export built in.",
    details: [
      "Generates an interactive HTML file from PRD frontmatter",
      "Supports dark/light theme and direction toggle",
      "SVG export for documentation",
      "Detects cycles and orphaned PRDs",
    ],
    usage: "/prd:network-map",
  },

  // Onboarding commands
  {
    name: "/effectum:init",
    phase: "Onboarding",
    icon: "ClipboardList",
    tagline: "Project context interview",
    description:
      "Interactive 7-question interview to populate the sentinel block in CLAUDE.md with project-specific context that cannot be inferred from code.",
    details: [
      "Asks about domain, key entities, auth, architecture, conventions, tech debt",
      "Writes ONLY inside the sentinel block markers",
      "Survives effectum update — custom content preserved",
      "Run once on new projects, re-run after major pivots",
    ],
    usage: "/effectum:init",
  },
  {
    name: "/onboard:review",
    phase: "Onboarding",
    icon: "ClipboardCheck",
    tagline: "Cross-PRD consistency check",
    description:
      "Review onboarded PRDs for cross-PRD consistency, duplicates, and best practices. Runs automatically as part of /onboard but can be run standalone.",
    details: [
      "6 checks: completeness, duplicates, naming, data model, API, status",
      "Supports --fix flag to automatically apply suggested fixes",
      "Supports --strict flag to treat warnings as failures",
      "Safe to run on any project with onboarded PRDs",
    ],
    usage: "/onboard:review my-project --fix",
  },
  {
    name: "/map-codebase",
    phase: "Onboarding",
    icon: "Map",
    tagline: "4-agent codebase analysis",
    description:
      "Spawns 4 parallel agents (ArchitectureMapper, StackMapper, QualityMapper, IntegrationMapper) to produce 7 structured knowledge documents.",
    details: [
      "4 agents run in parallel: ArchitectureMapper, StackMapper, QualityMapper, IntegrationMapper",
      "Produces 7 docs: ARCHITECTURE.md, STACK.md, STRUCTURE.md, CONVENTIONS.md, TESTING.md, CONCERNS.md, INTEGRATIONS.md",
      "All output written to knowledge/codebase/",
      "Use before /onboard on complex legacy codebases",
    ],
    usage: "/map-codebase",
  },
  {
    name: "/forensics",
    phase: "Safety",
    icon: "Search",
    tagline: "Post-mortem diagnosis",
    description:
      "Reads all loop artifacts — HANDOFF.md, STUCK.md, loop-state.json, effectum-metrics.json, git log — and outputs a structured failure diagnosis.",
    details: [
      "Classifies failure mode: stuck, context budget, build error, or unknown",
      "Reads loop-state.json for last known iteration state",
      "Cross-references effectum-metrics.json for historical patterns",
      "Outputs FORENSICS-YYYY-MM-DD.md with recommended next steps",
    ],
    usage: "/forensics",
  },

  // Workspace commands
  {
    name: "/workshop:init",
    phase: "Workspace",
    icon: "FolderPlus",
    tagline: "New project workspace",
    description:
      "Create the complete directory structure and template files for a new project in the PRD Workshop.",
    details: [
      "Creates workshop/projects/{slug}/ with standard layout",
      "Generates project README and initial PRD directory",
      "Validates slug format before creating",
      "Run before /prd:new on new workshop projects",
    ],
    usage: "/workshop:init my-new-project",
  },
  {
    name: "/workshop:archive",
    phase: "Workspace",
    icon: "Archive",
    tagline: "Archive completed project",
    description:
      "Archive a completed or abandoned project by moving it to workshop/archive/. Keeps your workspace clean without losing history.",
    details: [
      "Moves project from workshop/projects/ to workshop/archive/",
      "Checks readiness before archiving (no in-progress PRDs)",
      "Preserves full history — nothing is deleted",
      "Can be listed and referenced after archiving",
    ],
    usage: "/workshop:archive my-project",
  },
];

export const PHASE_ORDER: CommandPhase[] = [
  "Planning",
  "Implementation",
  "QA",
  "Automation",
  "Safety",
  "PRD Workshop",
  "Onboarding",
  "Workspace",
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
  "PRD Workshop": {
    color:
      "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-400 dark:border-violet-800/30",
    description: "Write and manage structured specifications",
  },
  Onboarding: {
    color:
      "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-400 dark:border-cyan-800/30",
    description: "Analyze codebases and initialize project context",
  },
  Workspace: {
    color:
      "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-800/30",
    description: "Manage your PRD Workshop workspace",
  },
};

// Commands page data — extracted for file size limits

export type CommandPhase =
  | "Navigation"
  | "Core Workflow"
  | "Autonomous"
  | "Spec"
  | "Onboarding"
  | "Project"
  | "Design"
  | "Setup";

export interface CommandEntry {
  name: string;
  phase: CommandPhase;
  tagline: string;
  description: string;
  details: string[];
  usage: string;
  icon: string;
  deprecated?: boolean;
  deprecatedNote?: string;
}

export const COMMANDS: CommandEntry[] = [
  // ── Navigation ──────────────────────────────────────────────────────────────
  {
    name: "/effectum",
    phase: "Navigation",
    icon: "Compass",
    tagline: "Where to start",
    description:
      "Entry point and getting-started guide. Run this if you don't know which command to use — it explains effectum in 60 seconds and points you to the right next step.",
    details: [
      "Overview of the effectum workflow in plain language",
      "Detects your current project state and recommends a starting point",
      "Links to /next for smart routing after you're oriented",
      "Safe to run at any time — read-only, no side effects",
    ],
    usage: "/effectum",
  },
  {
    name: "/help",
    phase: "Navigation",
    icon: "HelpCircle",
    tagline: "Alias for /effectum",
    description:
      "Alias for /effectum. Use /help or /effectum interchangeably — both run the getting-started guide and orientation flow.",
    details: [
      "Identical to /effectum — same output, same behavior",
      "Use whichever feels more natural to you",
      "Recommended alias for quick orientation in any session",
    ],
    usage: "/help",
  },
  {
    name: "/next",
    phase: "Navigation",
    icon: "ArrowRightCircle",
    tagline: "Smart router",
    description:
      "Reads your project state and recommends exactly one action. The smart router that keeps you moving forward without having to remember the full workflow.",
    details: [
      "Reads CLAUDE.md, git log, loop-state.json, and PRD status",
      "Recommends one specific command with a one-line reason",
      "Never overwhelming — one recommendation, always actionable",
      "Re-run at any time when you're not sure what to do next",
    ],
    usage: "/next",
  },

  // ── Core Workflow ────────────────────────────────────────────────────────────
  {
    name: "/plan",
    phase: "Core Workflow",
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
    phase: "Core Workflow",
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
    phase: "Core Workflow",
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
    name: "/code-review",
    phase: "Core Workflow",
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
    name: "/e2e",
    phase: "Core Workflow",
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
    name: "/build-fix",
    phase: "Core Workflow",
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
    phase: "Core Workflow",
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

  // ── Autonomous ───────────────────────────────────────────────────────────────
  {
    name: "/run",
    phase: "Autonomous",
    icon: "Play",
    tagline: "Build autonomously — overnight if you want",
    description:
      "The most powerful feature. Claude works autonomously — writing code, running tests, fixing errors — until every quality gate passes and your completion promise is 100% true. (internally: /ralph-loop)",
    details: [
      "Iterates: read spec → check state → implement → verify → repeat",
      "Stuck detection: stops on 2 consecutive identical errors",
      "Status report at 80% of max iterations",
      "Only outputs completion promise when genuinely true",
    ],
    usage:
      '/run "Build feature X" --max-iterations 30 --completion-promise "All tests pass"',
  },
  {
    name: "/ralph-loop",
    phase: "Autonomous",
    icon: "Bot",
    tagline: "Internal name for /run",
    description:
      "The internal/legacy name for /run. Prefer /run — it is the primary alias and feels more natural. All flags and options are identical.",
    details: [
      "Identical to /run — same behavior, same options",
      "Use /run instead — it is the primary name",
      "Both names will continue to work",
    ],
    usage:
      '/ralph-loop "Build feature X" --max-iterations 30',
    deprecated: true,
    deprecatedNote: "Prefer /run. /ralph-loop is the internal name and will remain as an alias.",
  },
  {
    name: "/stop",
    phase: "Autonomous",
    icon: "StopCircle",
    tagline: "Take back the wheel",
    description:
      "Stops an active autonomous build session. Use when you want to take over manually, change direction, or if the loop is not converging. (internally: /cancel-ralph)",
    details: [
      "Immediately stops the autonomous loop",
      "Preserves all work done so far",
      "Git history shows every iteration",
      "Resume with a new /run if needed",
    ],
    usage: "/stop",
  },
  {
    name: "/cancel-ralph",
    phase: "Autonomous",
    icon: "OctagonX",
    tagline: "Internal name for /stop",
    description:
      "The internal/legacy name for /stop. Prefer /stop — it is the primary alias and more intuitive.",
    details: [
      "Identical to /stop — stops the loop immediately",
      "Use /stop instead — it is the primary name",
      "All work done so far is preserved in git",
    ],
    usage: "/cancel-ralph",
    deprecated: true,
    deprecatedNote: "Prefer /stop. /cancel-ralph is the internal name and will remain as an alias.",
  },
  {
    name: "/save",
    phase: "Autonomous",
    icon: "Save",
    tagline: "Create a restore point before you build",
    description:
      "Creates a git restore point with a descriptive tag. Use before /run, risky changes, or experiments so you can always roll back. (internally: /checkpoint)",
    details: [
      "Creates a tagged git commit as restore point",
      "Descriptive tag for easy identification",
      "Roll back with a single git command",
      "Zero cost — just a commit and tag",
    ],
    usage: "/save",
  },
  {
    name: "/checkpoint",
    phase: "Autonomous",
    icon: "Bookmark",
    tagline: "Internal name for /save",
    description:
      "The internal/legacy name for /save. Prefer /save — it is the primary alias and more natural.",
    details: [
      "Identical to /save — creates a tagged git commit",
      "Use /save instead — it is the primary name",
      "All /save behavior preserved",
    ],
    usage: "/checkpoint",
    deprecated: true,
    deprecatedNote: "Prefer /save. /checkpoint is the internal name and will remain as an alias.",
  },
  {
    name: "/diagnose",
    phase: "Autonomous",
    icon: "Stethoscope",
    tagline: "Post-mortem diagnosis when something went wrong",
    description:
      "Reads all loop artifacts — HANDOFF.md, STUCK.md, loop-state.json, effectum-metrics.json, git log — and outputs a structured failure diagnosis. (internally: /forensics)",
    details: [
      "Classifies failure mode: stuck, context budget, build error, or unknown",
      "Reads loop-state.json for last known iteration state",
      "Cross-references effectum-metrics.json for historical patterns",
      "Outputs FORENSICS-YYYY-MM-DD.md with recommended next steps",
    ],
    usage: "/diagnose",
  },
  {
    name: "/forensics",
    phase: "Autonomous",
    icon: "Fingerprint",
    tagline: "Internal name for /diagnose",
    description:
      "The internal/legacy name for /diagnose. Prefer /diagnose — it is the primary alias and more intuitive.",
    details: [
      "Identical to /diagnose — same diagnosis, same output",
      "Use /diagnose instead — it is the primary name",
      "Outputs FORENSICS-YYYY-MM-DD.md with actionable next steps",
    ],
    usage: "/forensics",
    deprecated: true,
    deprecatedNote: "Prefer /diagnose. /forensics is the internal name and will remain as an alias.",
  },
  {
    name: "/orchestrate",
    phase: "Autonomous",
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

  // ── Spec ─────────────────────────────────────────────────────────────────────
  {
    name: "/prd:new",
    phase: "Spec",
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
    phase: "Spec",
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
    name: "/prd:discuss",
    phase: "Spec",
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
    name: "/prd:decompose",
    phase: "Spec",
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
    name: "/prd:review",
    phase: "Spec",
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
    name: "/prd:update",
    phase: "Spec",
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
    name: "/prd:handoff",
    phase: "Spec",
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
    name: "/prd:status",
    phase: "Spec",
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
    phase: "Spec",
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
    phase: "Spec",
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
  {
    name: "/prd:prompt",
    phase: "Spec",
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

  // ── Onboarding ───────────────────────────────────────────────────────────────
  {
    name: "/onboard",
    phase: "Onboarding",
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
    name: "/explore",
    phase: "Onboarding",
    icon: "Compass",
    tagline: "4-agent codebase analysis",
    description:
      "Spawns 4 parallel agents (ArchitectureMapper, StackMapper, QualityMapper, IntegrationMapper) to produce 7 structured knowledge documents. (internally: /map-codebase)",
    details: [
      "4 agents run in parallel: ArchitectureMapper, StackMapper, QualityMapper, IntegrationMapper",
      "Produces 7 docs: ARCHITECTURE.md, STACK.md, STRUCTURE.md, CONVENTIONS.md, TESTING.md, CONCERNS.md, INTEGRATIONS.md",
      "All output written to knowledge/codebase/",
      "Use before /onboard on complex legacy codebases",
    ],
    usage: "/explore",
  },
  {
    name: "/map-codebase",
    phase: "Onboarding",
    icon: "Map",
    tagline: "Internal name for /explore",
    description:
      "The internal/legacy name for /explore. Prefer /explore — it is the primary alias and more natural.",
    details: [
      "Identical to /explore — same agents, same output",
      "Use /explore instead — it is the primary name",
      "Produces 7 knowledge documents in knowledge/codebase/",
    ],
    usage: "/map-codebase",
    deprecated: true,
    deprecatedNote: "Prefer /explore. /map-codebase is the internal name and will remain as an alias.",
  },

  // ── Project ──────────────────────────────────────────────────────────────────
  {
    name: "/project:init",
    phase: "Project",
    icon: "FolderPlus",
    tagline: "New project workspace",
    description:
      "Create the complete directory structure and template files for a new project in the PRD Workshop. Replaces /workshop:init with a cleaner namespace.",
    details: [
      "Creates workshop/projects/{slug}/ with standard layout",
      "Generates project README and initial PRD directory",
      "Validates slug format before creating",
      "Run before /prd:new on new workshop projects",
    ],
    usage: "/project:init my-new-project",
  },
  {
    name: "/project:archive",
    phase: "Project",
    icon: "Archive",
    tagline: "Archive completed project",
    description:
      "Archive a completed or abandoned project by moving it to workshop/archive/. Replaces /workshop:archive with a cleaner namespace.",
    details: [
      "Moves project from workshop/projects/ to workshop/archive/",
      "Checks readiness before archiving (no in-progress PRDs)",
      "Preserves full history — nothing is deleted",
      "Can be listed and referenced after archiving",
    ],
    usage: "/project:archive my-project",
  },
  {
    name: "/context:init",
    phase: "Project",
    icon: "ClipboardList",
    tagline: "Project context interview",
    description:
      "Interactive 7-question interview to populate the sentinel block in CLAUDE.md with project-specific context. Replaces /effectum:init with a cleaner namespace.",
    details: [
      "Asks about domain, key entities, auth, architecture, conventions, tech debt",
      "Writes ONLY inside the sentinel block markers",
      "Survives effectum update — custom content preserved",
      "Run once on new projects, re-run after major pivots",
    ],
    usage: "/context:init",
  },
  {
    name: "/effectum:init",
    phase: "Project",
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
    deprecated: true,
    deprecatedNote: "Use /context:init instead. Removed in v0.19.",
  },
  {
    name: "/workshop:init",
    phase: "Project",
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
    deprecated: true,
    deprecatedNote: "Use /project:init instead. Removed in v0.19.",
  },
  {
    name: "/workshop:archive",
    phase: "Project",
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
    deprecated: true,
    deprecatedNote: "Use /project:archive instead. Removed in v0.19.",
  },

  // ── Design ───────────────────────────────────────────────────────────────────
  {
    name: "/design",
    phase: "Design",
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

  // ── Setup ─────────────────────────────────────────────────────────────────────
  {
    name: "/setup",
    phase: "Setup",
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
];

export const PHASE_ORDER: CommandPhase[] = [
  "Navigation",
  "Core Workflow",
  "Autonomous",
  "Spec",
  "Onboarding",
  "Project",
  "Design",
  "Setup",
];

export const PHASE_META: Record<
  CommandPhase,
  { color: string; description: string }
> = {
  Navigation: {
    color:
      "bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-950/40 dark:text-sky-400 dark:border-sky-800/30",
    description: "Orient yourself and get pointed to the right next step",
  },
  "Core Workflow": {
    color:
      "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/30",
    description: "Plan, build, test, verify — the full development cycle",
  },
  Autonomous: {
    color:
      "bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-950/40 dark:text-purple-400 dark:border-purple-800/30",
    description: "Let Claude build autonomously overnight",
  },
  Spec: {
    color:
      "bg-violet-50 text-violet-700 border-violet-200 dark:bg-violet-950/40 dark:text-violet-400 dark:border-violet-800/30",
    description: "Write and manage structured specifications",
  },
  Onboarding: {
    color:
      "bg-cyan-50 text-cyan-700 border-cyan-200 dark:bg-cyan-950/40 dark:text-cyan-400 dark:border-cyan-800/30",
    description: "Analyze codebases and initialize project context",
  },
  Project: {
    color:
      "bg-teal-50 text-teal-700 border-teal-200 dark:bg-teal-950/40 dark:text-teal-400 dark:border-teal-800/30",
    description: "Manage your PRD Workshop workspace and project context",
  },
  Design: {
    color:
      "bg-pink-50 text-pink-700 border-pink-200 dark:bg-pink-950/40 dark:text-pink-400 dark:border-pink-800/30",
    description: "Visual specs and design systems before implementation",
  },
  Setup: {
    color:
      "bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800/40 dark:text-gray-400 dark:border-gray-700/30",
    description: "Install and configure effectum for your project",
  },
};

// PRD Workshop page data — all static content separated for file size limits

export const PRD_COMMANDS = [
  {
    name: "/prd:new",
    icon: "Sparkles",
    phase: "Discovery",
    description:
      "Start a new guided specification from scratch. Claude asks adaptive questions until it fully understands what you want to build.",
  },
  {
    name: "/prd:express",
    icon: "Zap",
    phase: "Discovery",
    description:
      "Fast one-shot spec from clear requirements. Best when you already know exactly what you want.",
  },
  {
    name: "/prd:discuss",
    icon: "MessageSquare",
    phase: "Refinement",
    description:
      "Deep-dive into a specific area of your spec. Explore edge cases, data models, or API design in detail.",
  },
  {
    name: "/prd:review",
    icon: "ClipboardCheck",
    phase: "Refinement",
    description:
      "Quality check before handing off to implementation. Flags missing acceptance criteria, vague goals, and incomplete data models.",
  },
  {
    name: "/prd:decompose",
    icon: "Layers",
    phase: "Refinement",
    description:
      "Split large projects into smaller, manageable PRDs. Each sub-PRD is independently buildable.",
  },
  {
    name: "/prd:network-map",
    icon: "Network",
    phase: "Refinement",
    description:
      "Visualize connections and dependencies between all your PRDs. Generates a Mermaid diagram.",
  },
  {
    name: "/prd:handoff",
    icon: "Send",
    phase: "Handoff",
    description:
      "Export a finished spec to the target project. Copies the PRD file and prepares it for /plan.",
  },
  {
    name: "/prd:prompt",
    icon: "Code2",
    phase: "Handoff",
    description:
      "Generate a handoff prompt for a completed PRD. Use this to start a new Claude session focused on one feature.",
  },
  {
    name: "/prd:status",
    icon: "BarChart3",
    phase: "Management",
    description:
      "View all projects and their current progress. Shows which specs are draft, complete, or in progress.",
  },
  {
    name: "/prd:resume",
    icon: "RotateCcw",
    phase: "Management",
    description:
      "Continue working on a previous specification. Loads context and picks up where you left off.",
  },
  {
    name: "/prd:archive",
    icon: "Archive",
    phase: "Management",
    description:
      "Archive completed or abandoned specs. Keeps your workspace clean without losing history.",
  },
  {
    name: "/prd:template",
    icon: "FileTemplate",
    phase: "Management",
    description:
      "Create a reusable spec template. Useful for repeating patterns like API endpoints, auth flows, or CRUD features.",
  },
] as const;

export const SPEC_SECTIONS = [
  {
    title: "Problem & Goal",
    description:
      "What we're solving and why it matters. The goal must be measurable.",
    example: "Users cannot reset their password without contacting support.",
  },
  {
    title: "User Stories",
    description: "What users can do when the feature is complete.",
    example: "As a registered user, I can reset my password via email.",
  },
  {
    title: "Acceptance Criteria",
    description:
      "Given/When/Then format. Each criterion maps directly to one test.",
    example:
      "Given I enter my email, When I click Reset, Then I receive an email within 60s.",
  },
  {
    title: "Data Model",
    description:
      "Tables, fields, types, and RLS policies. No ambiguity allowed.",
    example:
      "password_resets: id, user_id (FK), token (hashed), expires_at, used_at",
  },
  {
    title: "API Design",
    description:
      "Endpoints, request/response shapes, error codes, rate limits.",
    example: "POST /api/auth/forgot-password → 200 OK | 429 Too Many Requests",
  },
  {
    title: "Quality Gates",
    description: "8 automated checks that must pass before shipping.",
    example:
      "Build 0 errors, Types 0 errors, Tests 80%+ coverage, 0 console.log",
  },
  {
    title: "Completion Promise",
    description:
      "A verifiable statement Claude uses as the exit condition for the Ralph Loop.",
    example:
      "All 12 tests pass, build succeeds, 0 lint errors, password reset flow works end-to-end.",
  },
] as const;

export const QUALITY_CHECKLIST = [
  {
    label: "Every acceptance criterion has exactly one test mapped to it",
    good: true,
  },
  {
    label: "The goal is measurable, not vague ('users can' not 'improve UX')",
    good: true,
  },
  { label: "The data model includes field types and RLS policies", good: true },
  { label: "Error cases are documented alongside happy paths", good: true },
  {
    label: "The completion promise is 100% verifiable by running commands",
    good: true,
  },
  {
    label: "Vague goal like 'make it better' or 'improve performance'",
    good: false,
  },
  {
    label: "Acceptance criteria without Given/When/Then structure",
    good: false,
  },
  { label: "Missing error handling in API design", good: false },
  {
    label: "Completion promise that cannot be verified by running a command",
    good: false,
  },
] as const;

export const PHASE_ORDER = [
  "Discovery",
  "Refinement",
  "Handoff",
  "Management",
] as const;

export const PHASE_COLORS: Record<string, string> = {
  Discovery:
    "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/30",
  Refinement:
    "bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-950/40 dark:text-blue-400 dark:border-blue-800/30",
  Handoff:
    "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950/40 dark:text-emerald-400 dark:border-emerald-800/30",
  Management:
    "bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-800/40 dark:text-gray-400 dark:border-gray-700/30",
};

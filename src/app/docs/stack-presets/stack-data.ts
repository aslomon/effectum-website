// Stack Presets page data — extracted for file size limits
// Note: icons cannot be stored here (React components), they are mapped in page.tsx

export type PresetKey = "nextjs" | "python" | "swift" | "generic";

export interface PresetData {
  id: PresetKey;
  name: string;
  tagline: string;
  description: string;
  iconName: string;
  iconBg: string;
  iconColor: string;
  borderColor: string;
  features: string[];
  command: string;
}

export const PRESETS_DATA: PresetData[] = [
  {
    id: "nextjs",
    name: "Next.js + Supabase",
    tagline: "Full-stack TypeScript",
    description:
      "Production-ready full-stack setup with App Router, Tailwind CSS, Shadcn UI, Supabase auth and database, and Vercel deployment.",
    iconName: "Globe",
    iconBg: "bg-blue-50 dark:bg-blue-950/40",
    iconColor: "text-blue-600 dark:text-blue-400",
    borderColor: "border-blue-100 dark:border-blue-900/30",
    features: [
      "TypeScript strict mode",
      "Tailwind CSS v4 + Shadcn UI",
      "Supabase Auth with RLS policies",
      "Server Components by default",
      "Vitest + Testing Library",
      "Playwright E2E tests",
      "Vercel deployment",
    ],
    command: "npx @aslomon/effectum --stack nextjs-supabase",
  },
  {
    id: "python",
    name: "Python + FastAPI",
    tagline: "Modern Python backend",
    description:
      "Async Python backend with Pydantic v2 validation, SQLAlchemy ORM, pytest test suite, ruff linting, and Docker Compose local dev.",
    iconName: "Server",
    iconBg: "bg-amber-50 dark:bg-amber-950/40",
    iconColor: "text-amber-600 dark:text-amber-400",
    borderColor: "border-amber-100 dark:border-amber-900/30",
    features: [
      "Python 3.12+ with type hints",
      "Pydantic v2 validation",
      "SQLAlchemy async ORM",
      "pytest + coverage",
      "ruff linting & formatting",
      "Docker Compose setup",
      "Alembic migrations",
    ],
    command: "npx @aslomon/effectum --stack python-fastapi",
  },
  {
    id: "swift",
    name: "Swift / SwiftUI",
    tagline: "Native iOS & macOS",
    description:
      "Native Apple platform development with SwiftUI declarative UI, SwiftData persistence, XCTest, and MVVM architecture.",
    iconName: "Apple",
    iconBg: "bg-gray-100 dark:bg-gray-800/50",
    iconColor: "text-gray-700 dark:text-gray-300",
    borderColor: "border-gray-200 dark:border-gray-700/30",
    features: [
      "SwiftUI declarative UI",
      "SwiftData persistence",
      "XCTest + XCUITest",
      "swift-format code style",
      "Swift Package Manager",
      "Xcode project setup",
      "MVVM architecture",
    ],
    command: "npx @aslomon/effectum --stack swift-ios",
  },
  {
    id: "generic",
    name: "Generic",
    tagline: "Bring your own stack",
    description:
      "Stack-agnostic template with all workflow commands and quality gates. Customize everything for your specific technology stack.",
    iconName: "Box",
    iconBg: "bg-emerald-50 dark:bg-emerald-950/40",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    borderColor: "border-emerald-100 dark:border-emerald-900/30",
    features: [
      "All 10 workflow commands",
      "Customizable quality gates",
      "PRD Workshop included",
      "Guardrails system",
      "Stack-agnostic configuration",
      "Bring your own tools",
      "Full CLAUDE.md template",
    ],
    command: "npx @aslomon/effectum --stack generic",
  },
];

export const COMPARISON_FEATURES = [
  "PRD Workshop",
  "10 workflow commands",
  "Quality gates",
  "Guardrails",
  "MCP servers",
  "Type safety",
  "E2E tests",
  "Auth setup",
  "DB migrations",
  "Deployment config",
] as const;

export type ComparisonFeature = (typeof COMPARISON_FEATURES)[number];

export const PRESET_SUPPORT: Record<
  PresetKey,
  Partial<Record<ComparisonFeature, boolean>>
> = {
  nextjs: {
    "PRD Workshop": true,
    "10 workflow commands": true,
    "Quality gates": true,
    Guardrails: true,
    "MCP servers": true,
    "Type safety": true,
    "E2E tests": true,
    "Auth setup": true,
    "DB migrations": true,
    "Deployment config": true,
  },
  python: {
    "PRD Workshop": true,
    "10 workflow commands": true,
    "Quality gates": true,
    Guardrails: true,
    "MCP servers": true,
    "Type safety": true,
    "E2E tests": false,
    "Auth setup": false,
    "DB migrations": true,
    "Deployment config": true,
  },
  swift: {
    "PRD Workshop": true,
    "10 workflow commands": true,
    "Quality gates": true,
    Guardrails: true,
    "MCP servers": false,
    "Type safety": true,
    "E2E tests": true,
    "Auth setup": false,
    "DB migrations": false,
    "Deployment config": false,
  },
  generic: {
    "PRD Workshop": true,
    "10 workflow commands": true,
    "Quality gates": true,
    Guardrails: true,
    "MCP servers": false,
    "Type safety": false,
    "E2E tests": false,
    "Auth setup": false,
    "DB migrations": false,
    "Deployment config": false,
  },
};

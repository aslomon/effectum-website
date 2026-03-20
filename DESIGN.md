# Effectum Website — Design System

## Brand Identity

**Name:** effectum (lowercase, Latin: "the result, the accomplishment")
**Tagline:** "Describe what you want. Get production-ready code."
**Tone:** Professional, minimal, confident. Developer-focused but accessible.
**Inspiration:** Tailwind CSS Docs + Vercel.com hybrid

## Color Palette

### Base Colors

- **Background:** `#FAFAFA` (off-white, near-white)
- **Surface:** `#FFFFFF` (pure white, for cards/elevated elements)
- **Border:** `#E5E7EB` (gray-200, subtle borders)
- **Border Hover:** `#D1D5DB` (gray-300)

### Text Colors

- **Primary Text:** `#111827` (gray-900, headings and body)
- **Secondary Text:** `#6B7280` (gray-500, descriptions and meta)
- **Muted Text:** `#9CA3AF` (gray-400, placeholders and hints)

### Accent Colors (Warm Amber — distinctive, energetic)

- **Primary:** `#D97706` (amber-600, CTAs, links, active states)
- **Primary Hover:** `#B45309` (amber-700)
- **Primary Light:** `#FFFBEB` (amber-50, subtle backgrounds)
- **Primary Glow:** `#FDE68A` (amber-200, for subtle glows/highlights)
- **Success:** `#059669` (emerald-600, positive indicators)
- **Code Accent:** `#D97706` (amber-600, syntax highlighting accent)

### Dark Surfaces (Code blocks, terminal)

- **Code Background:** `#1C1917` (stone-900, warmer than slate)
- **Code Text:** `#E7E5E4` (stone-200)
- **Code Border:** `#44403C` (stone-700)

## Typography

### Font Stack

- **Headings:** `Inter`, system-ui, sans-serif (weight 600-700)
- **Body:** `Inter`, system-ui, sans-serif (weight 400-500)
- **Code:** `JetBrains Mono`, `Fira Code`, monospace (weight 400-500)

### Scale

| Element         | Size            | Weight | Line Height | Letter Spacing |
| --------------- | --------------- | ------ | ----------- | -------------- |
| H1 (Hero)       | 3.75rem (60px)  | 700    | 1.1         | -0.02em        |
| H2 (Section)    | 2.25rem (36px)  | 600    | 1.2         | -0.01em        |
| H3 (Card title) | 1.25rem (20px)  | 600    | 1.4         | 0              |
| Body            | 1rem (16px)     | 400    | 1.6         | 0              |
| Body Large      | 1.125rem (18px) | 400    | 1.6         | 0              |
| Small / Meta    | 0.875rem (14px) | 500    | 1.5         | 0              |
| Code            | 0.875rem (14px) | 400    | 1.7         | 0              |

## Spacing System

Based on 4px grid, using Tailwind defaults:

- **4px** (`1`): Tight internal padding
- **8px** (`2`): Icon gaps, tight margins
- **12px** (`3`): Small component padding
- **16px** (`4`): Standard padding, list gaps
- **24px** (`6`): Section internal spacing
- **32px** (`8`): Component gaps
- **48px** (`12`): Section padding (mobile)
- **64px** (`16`): Section padding (tablet)
- **96px** (`24`): Section padding (desktop)
- **128px** (`32`): Hero section vertical padding

## Border Radius

- **Small:** `0.375rem` (6px) — buttons, badges
- **Medium:** `0.5rem` (8px) — cards, inputs
- **Large:** `0.75rem` (12px) — code blocks, feature cards
- **XL:** `1rem` (16px) — hero elements, large containers
- **Full:** `9999px` — pills, tags

## Shadows

- **None:** Default for most elements (flat, minimal design)
- **Subtle:** `0 1px 2px rgba(0, 0, 0, 0.05)` — cards on hover
- **Medium:** `0 4px 6px -1px rgba(0, 0, 0, 0.1)` — elevated cards
- **Code Block:** `0 0 0 1px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.05)`

## Dark Surfaces (Inverted sections)

- **Dark Background:** `#0c0a09` (stone-950, for community/inverted sections)
- **Dark Surface:** `#1c1917` (stone-900, cards on dark backgrounds)
- **Dark Border:** `#292524` (stone-800, borders on dark backgrounds)

## Textures & Effects

- **Grain overlay:** SVG noise texture at 2.5% opacity, fixed position, covers entire page
- **Gradient dividers:** Amber gradient line (transparent -> amber-200 -> amber-600 -> amber-200 -> transparent) at 30% opacity between sections
- **Dot patterns:** Radial dots (#D97706 1px) on 24px grid at 4% opacity for dark sections
- **Grid pattern:** Amber 1px lines on 48px grid at 3.5% opacity for hero
- **Glow orbs:** Large blurred circles (amber-100/40, orange-100/30) for ambient lighting in hero

## Animation Conventions

- **Duration:** 200ms for micro-interactions, 400ms for reveals, 600ms for page transitions
- **Easing:** `ease-out` for entrances, `ease-in-out` for state changes
- **Scroll animations:** Fade-in + slide-up (translateY: 20px -> 0) with stagger of 80-120ms between items
- **Hover transitions:** Scale, translateY(-2px) on cards, color transitions on links/buttons
- **Number counters:** useMotionValue + animate, 1.2s easeOut duration
- **Sequential reveals:** useInView + staggered delays for lists (quality gates, timeline items)
- **No animation on reduced-motion preference** (respect `prefers-reduced-motion`)

## Component Patterns

### Buttons

- **Primary:** Amber background (#D97706), white text, rounded-md, px-6 py-3
- **Secondary:** White background, gray border, dark text, rounded-md, px-6 py-3
- **Ghost:** Transparent, text only, hover: light background
- **Code CTA:** Dark background (stone-900), monospace text, with copy icon

### Cards

- White background, subtle border, rounded-lg, p-6
- No shadow by default, subtle shadow on hover
- Title (H3) + description (muted text) + optional icon

### Code Blocks

- Dark background (stone-900), warm light text, rounded-lg
- Language label top-right
- Copy button top-right (appears on hover)
- Line numbers optional
- Font: JetBrains Mono, 14px

### Navigation

- Fixed top, white background, border-bottom
- Logo left, nav links center/right
- Hamburger menu on mobile (< 768px)
- Active link: amber text with subtle underline

### Section Layout

- Max width: 1280px (max-w-7xl), centered
- Horizontal padding: 24px (mobile), 32px (tablet), 48px (desktop)
- Vertical spacing between sections: 96px (mobile), 128px (desktop)
- Each section: optional label (uppercase, small, amber), H2 title, description, content

## Breakpoints

- **Mobile:** < 768px -- single column, stacked, hamburger nav
- **Tablet:** 768px - 1024px -- 2 columns where applicable, adjusted spacing
- **Desktop:** > 1024px -- full layout, sidebar in docs, 3-4 column grids

## Logo

- Font-based logotype: "effectum" in Inter 700
- Visual element: Amber underscore beneath the "e" -- symbolizes the foundation, the result
- Standalone "e" mark used as favicon with amber underscore
- Color: Primary text color (#111827), amber accent (#D97706) on underscore
- Size: 24px height in header

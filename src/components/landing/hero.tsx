"use client";

import { Github, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

// ---------------------------------------------------------------------------
// Rotating headline data
// ---------------------------------------------------------------------------
const HEADLINES = [
  {
    headline: "Stop prompting. Start shipping.",
    sub: "Effectum gives Claude Code a spine — spec first, plan always, verify before you sleep.",
  },
  {
    headline: "Claude Code generates code.\nEffectum generates results.",
    sub: "The autonomous development framework that turns AI potential into production software.",
  },
  {
    headline: "Effectum. The result. Not the attempt.",
    sub: "An autonomous development framework for Claude Code that ends sessions in working software, not half-built features.",
  },
];

// ---------------------------------------------------------------------------
// Terminal typing sequence
// ---------------------------------------------------------------------------
const TERMINAL_LINES = [
  { text: "$ npx @aslomon/effectum", type: "command", pause: 800 },
  { text: "✓ Stack detected: Next.js + Supabase", type: "success", pause: 400 },
  { text: "✓ 42 commands installed", type: "success", pause: 600 },
  { text: "$ claude", type: "command", pause: 700 },
  { text: "> /effectum", type: "prompt", pause: 500 },
  {
    text: "◆ Pick your journey: New Project / Existing Code / Feature Build",
    type: "info",
    pause: 600,
  },
  { text: "> /prd:new", type: "prompt", pause: 500 },
  { text: "◆ What do you want to build?", type: "info", pause: 400 },
  { text: "> An auth system with social login", type: "prompt", pause: 700 },
  { text: "◆ Writing spec...", type: "info", pause: 800 },
  { text: "✓ PRD-001-auth.md created", type: "success", pause: 600 },
  { text: "> /run --max-iterations 30", type: "prompt", pause: 500 },
  { text: "◆ Starting autonomous build...", type: "info", pause: 700 },
  { text: "✓ Iteration 1/30 — tests written", type: "success", pause: 500 },
  { text: "✓ Iteration 2/30 — auth flow implemented", type: "success", pause: 500 },
  { text: "✓ Iteration 3/30 — all 8 quality gates pass", type: "success", pause: 600 },
  { text: "✓ Completion promise satisfied.", type: "success", pause: 99999 },
];

// ---------------------------------------------------------------------------
// Terminal component
// ---------------------------------------------------------------------------
function CinematicTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const idxRef = useRef(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function showNext() {
      const i = idxRef.current;
      if (i >= TERMINAL_LINES.length) return;
      setVisibleCount(i + 1);
      idxRef.current = i + 1;
      // Auto-scroll terminal to bottom
      if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
      }
      timer = setTimeout(showNext, TERMINAL_LINES[i].pause);
    }

    timer = setTimeout(showNext, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="cinematic-terminal overflow-hidden rounded-xl border border-white/10 bg-[#0d0d0d] font-mono text-sm"
      style={{
        boxShadow:
          "0 0 0 1px rgba(217,119,6,0.15), 0 8px 32px rgba(0,0,0,0.6), 0 0 60px rgba(217,119,6,0.08)",
      }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-500/70" />
        <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
        <div className="h-3 w-3 rounded-full bg-green-500/70" />
        <span className="ml-3 text-xs text-white/30">effectum — terminal</span>
      </div>

      {/* Lines */}
      <div ref={scrollRef} className="h-[65vh] max-h-[65vh] space-y-1.5 overflow-hidden px-5 py-4 sm:h-[55vh] sm:max-h-[55vh]" style={{ pointerEvents: "none" }}>
        {TERMINAL_LINES.slice(0, visibleCount).map((line, i) => (
          <div key={i} className="leading-relaxed">
            <span
              className={
                line.type === "command"
                  ? "text-amber-400 font-semibold"
                  : line.type === "success"
                  ? "text-green-400"
                  : line.type === "prompt"
                  ? "text-purple-300"
                  : "text-white/60"
              }
            >
              {line.text}
            </span>
          </div>
        ))}
        {/* Blinking cursor */}
        {visibleCount < TERMINAL_LINES.length && (
          <span className="terminal-cursor inline-block h-4 w-0.5 bg-amber-400" />
        )}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main Hero
// ---------------------------------------------------------------------------
export function Hero() {
  const [headlineIdx] = useState(() => Math.floor(Math.random() * HEADLINES.length));
  const [scrollProgress, setScrollProgress] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const headline = HEADLINES[headlineIdx];

  useEffect(() => {
    // Check prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setScrollProgress(1);
      setReducedMotion(true);
      return;
    }

    // Smooth progressive scroll — 0.0 to 1.0 over 200px of scroll
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const progress = Math.min(window.scrollY / 200, 1);
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // After 10 seconds, auto-scroll down smoothly to trigger reveal
    const autoScrollTimer = setTimeout(() => {
      if (window.scrollY <= 30) {
        // Slower auto-scroll: scroll over ~2 seconds
        const start = window.scrollY;
        const target = 220;
        const duration = 2000;
        const startTime = performance.now();
        function easeScroll(now: number) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const eased = progress < 0.5
            ? 2 * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 2) / 2;
          window.scrollTo(0, start + (target - start) * eased);
          if (progress < 1) requestAnimationFrame(easeScroll);
        }
        requestAnimationFrame(easeScroll);
      }
    }, 10000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      clearTimeout(autoScrollTimer);
    };
  }, []);

  // -------------------------------------------------------------------------
  // Reduced-motion layout: side by side
  // -------------------------------------------------------------------------
  if (reducedMotion) {
    return (
      <section
        ref={sectionRef}
        className="relative overflow-hidden py-20 sm:py-28"
      >
        <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Headline */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                Built for Claude Code · v0.17
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl whitespace-pre-line">
                {headline.headline}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                {headline.sub}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://github.com/aslomon/effectum"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-amber-500 px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-amber-400"
                >
                  <Github size={16} />
                  View on GitHub
                </a>
                <a
                  href="/docs/getting-started"
                  className="inline-flex h-12 items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/10"
                >
                  Get started
                  <ArrowRight size={14} className="text-amber-400" />
                </a>
              </div>
            </div>
            {/* Terminal */}
            <div>
              <CinematicTerminal />
            </div>
          </div>
        </div>
      </section>
    );
  }

  // -------------------------------------------------------------------------
  // Full cinematic layout
  // -------------------------------------------------------------------------
  return (
    <>
      <style>{`
        .terminal-cursor {
          animation: blink 1s step-end infinite;
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>

      <section
        ref={sectionRef}
        className="relative min-h-[115vh] overflow-hidden bg-[#080808]"
      >
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/5 blur-[120px]" />
        </div>

        {/* Terminal — starts fullscreen, shrinks progressively */}
        <div
          className="sticky top-[50%] z-10 mx-auto w-[92vw] max-w-2xl -translate-y-[55%] px-2 sm:w-[90vw] sm:px-0"
          style={{
            transform: `scale(${1 - scrollProgress * 0.3})`,
            opacity: Math.max(1 - scrollProgress * 0.6, 0.35),
            transformOrigin: "top center",
          }}
        >
          <CinematicTerminal />
          {/* Scroll hint */}
          <p
            className="mt-4 text-center text-xs text-white/25"
            style={{ opacity: Math.max(1 - scrollProgress * 4, 0) }}
          >
            ↓ scroll
          </p>
        </div>

        {/* Hero content — overlaps terminal from bottom, fades in progressively */}
        <div
          className="relative z-20 mx-auto flex max-w-3xl flex-col items-center px-6 pb-10 text-center"
          style={{
            marginTop: "-28vh",
            opacity: scrollProgress,
            transform: `translateY(${(1 - scrollProgress) * 60}px)`,
            pointerEvents: scrollProgress > 0.3 ? "auto" : "none",
          }}
        >
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Built for Claude Code · v0.17
          </div>

          {/* Headline */}
          <h1 className="whitespace-pre-line text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {headline.headline}
          </h1>

          {/* Sub */}
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/55">
            {headline.sub}
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/aslomon/effectum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-amber-500 px-7 text-sm font-medium text-white shadow shadow-amber-900/30 transition-all hover:bg-amber-400 sm:w-auto"
            >
              <Github size={16} />
              View on GitHub
            </a>
            <a
              href="/docs/getting-started"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-7 text-sm font-medium text-white transition-all hover:border-white/30 hover:bg-white/10 sm:w-auto"
            >
              Get started
              <ArrowRight size={14} className="text-amber-400" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

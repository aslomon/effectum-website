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
    sub: "The methodology layer that turns AI potential into production software.",
  },
  {
    headline: "Effectum. The result. Not the attempt.",
    sub: "A methodology for Claude Code that ends sessions in working software, not half-built features.",
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

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    function showNext() {
      const i = idxRef.current;
      if (i >= TERMINAL_LINES.length) return;
      setVisibleCount(i + 1);
      idxRef.current = i + 1;
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
      <div className="min-h-[65vh] space-y-1.5 overflow-auto px-5 py-4 sm:min-h-[55vh]">
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
  const [revealed, setRevealed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const headline = HEADLINES[headlineIdx];

  useEffect(() => {
    // Check prefers-reduced-motion
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setRevealed(true); // skip animation
      setReducedMotion(true);
      return;
    }

    // Bidirectional scroll — reveal on scroll down, un-reveal on scroll up
    const onScroll = () => {
      if (window.scrollY > 30) {
        setRevealed(true);
      } else {
        setRevealed(false);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // After 10 seconds, auto-scroll down smoothly to trigger reveal
    const autoScrollTimer = setTimeout(() => {
      if (window.scrollY <= 30) {
        window.scrollTo({ top: 120, behavior: "smooth" });
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
      {/* Inline styles for cinematic transitions */}
      <style>{`
        .terminal-wrap {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1),
                      opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);
          transform-origin: top center;
        }
        .terminal-wrap.revealed {
          transform: scale(0.65) translateY(-15vh);
          opacity: 0.3;
        }
        @media (max-width: 639px) {
          .terminal-wrap.revealed {
            transform: scale(0.55) translateY(-10vh);
            opacity: 0.25;
          }
        }

        .hero-content {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.6s ease 0.3s,
                      transform 0.6s ease 0.3s;
          pointer-events: none;
        }
        .hero-content.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }

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
        className="relative min-h-screen overflow-hidden bg-[#080808]"
      >
        {/* Subtle background glow */}
        <div
          className="pointer-events-none absolute inset-0"
          aria-hidden="true"
        >
          <div className="absolute left-1/2 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-600/5 blur-[120px]" />
        </div>

        {/* Terminal — full viewport centred */}
        <div
          className={`terminal-wrap absolute inset-x-0 top-[72px] mx-auto w-[92vw] max-w-2xl px-2 sm:top-[80px] sm:w-[90vw] sm:px-0 ${
            revealed ? "revealed" : ""
          }`}
        >
          <CinematicTerminal />
          {/* Scroll hint — disappears on reveal */}
          {!revealed && (
            <p className="mt-6 animate-pulse text-center text-xs text-white/25">
              scroll to skip
            </p>
          )}
        </div>

        {/* Hero content — fades in after reveal */}
        <div
          className={`hero-content relative mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-end px-6 pb-24 pt-[72vh] text-center sm:pt-[68vh] lg:pt-[64vh] ${
            revealed ? "visible" : ""
          }`}
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

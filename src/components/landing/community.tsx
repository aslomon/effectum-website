"use client";

import { Heart, GitPullRequest, Star } from "lucide-react";
import { FadeIn } from "@/components/fade-in";
import { LogoMark } from "@/components/logo";

export function Community() {
  return (
    <section
      id="community"
      className="relative overflow-hidden bg-code-bg py-20 sm:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden="true"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #D97706 1px, transparent 0)`,
          backgroundSize: "24px 24px",
        }}
      />

      {/* Subtle LogoMark watermark */}
      <div
        className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 opacity-[0.04]"
        aria-hidden="true"
      >
        <LogoMark className="h-64 w-64 text-accent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-12">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              Open source
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-code-text sm:text-4xl">
              Built by the community,
              <br />
              <span className="text-accent">for the community.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-code-text/60 sm:text-lg">
              effectum is MIT-licensed and open source. Every command, every
              template, every guardrail — open for you to use, modify, and
              improve. Help us build the future of autonomous development.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-12 grid max-w-3xl gap-4 sm:grid-cols-3">
            <a
              href="https://github.com/aslomon/effectum"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-xl border border-dark-border bg-dark-surface p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-amber-900/10"
            >
              <Star
                size={24}
                className="text-accent transition-transform group-hover:scale-110"
              />
              <span className="text-sm font-semibold text-code-text">
                Star on GitHub
              </span>
              <span className="text-xs text-code-text/40">
                Show your support
              </span>
            </a>

            <a
              href="https://github.com/aslomon/effectum/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-xl border border-dark-border bg-dark-surface p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-amber-900/10"
            >
              <GitPullRequest
                size={24}
                className="text-accent transition-transform group-hover:scale-110"
              />
              <span className="text-sm font-semibold text-code-text">
                Contribute
              </span>
              <span className="text-xs text-code-text/40">PRs welcome</span>
            </a>

            <a
              href="https://github.com/aslomon/effectum/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-3 rounded-xl border border-dark-border bg-dark-surface p-6 transition-all hover:border-accent/30 hover:shadow-lg hover:shadow-amber-900/10"
            >
              <Heart
                size={24}
                className="text-accent transition-transform group-hover:scale-110"
              />
              <span className="text-sm font-semibold text-code-text">
                Discuss
              </span>
              <span className="text-xs text-code-text/40">Share ideas</span>
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

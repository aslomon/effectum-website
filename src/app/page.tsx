import type { Metadata } from "next";
import { Hero } from "@/components/landing/hero";
import { Story } from "@/components/landing/story";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Onboarding } from "@/components/landing/onboarding";
import { PrdLifecycle } from "@/components/landing/prd-lifecycle";
import { ModularStacks } from "@/components/landing/modular-stacks";
import { Features } from "@/components/landing/features";
import { QualityGates } from "@/components/landing/quality-gates";
import { Autonomy } from "@/components/landing/autonomy";
import { GettingStarted } from "@/components/landing/getting-started";
import { Community } from "@/components/landing/community";
import { CTA } from "@/components/landing/cta";

export const metadata: Metadata = {
  title: "effectum — Claude Code Framework for Autonomous Development",
  description:
    "effectum is the open-source Claude Code framework for autonomous development. 42 workflow commands, spec-driven development, quality gates, and overnight builds.",
  keywords: [
    "Claude Code framework",
    "autonomous development framework",
    "effectum",
    "spec-driven development",
    "AI coding framework",
    "Claude Code workflow",
    "Claude Code autonomous build",
    "overnight build Claude Code",
    "how to use Claude Code effectively",
  ],
  openGraph: {
    title: "effectum — Claude Code Framework for Autonomous Development",
    description:
      "Open-source Claude Code framework: 42 workflow commands, spec-driven development, quality gates, autonomous overnight builds.",
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Story />
      <HowItWorks />
      <Onboarding />
      <PrdLifecycle />
      <ModularStacks />
      <Features />
      <QualityGates />
      <Autonomy />
      <GettingStarted />
      <Community />
      <CTA />
    </>
  );
}

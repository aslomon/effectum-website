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

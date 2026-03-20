import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { HowItWorks } from "./how-it-works";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      className,
      ...rest
    }: {
      children: React.ReactNode;
      className?: string;
    }) => <div className={className}>{children}</div>,
    button: ({
      children,
      className,
      ...rest
    }: {
      children: React.ReactNode;
      className?: string;
    }) => <button className={className}>{children}</button>,
  },
  useInView: () => true,
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
}));

describe("HowItWorks", () => {
  it("renders the section title", () => {
    render(<HowItWorks />);
    expect(screen.getByText("How it works")).toBeInTheDocument();
  });

  it("renders step titles", () => {
    render(<HowItWorks />);
    expect(screen.getAllByText("Setup").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Spec").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Plan").length).toBeGreaterThanOrEqual(1);
  });

  it("renders commands", () => {
    render(<HowItWorks />);
    expect(
      screen.getAllByText("npx @aslomon/effectum").length,
    ).toBeGreaterThanOrEqual(1);
  });
});

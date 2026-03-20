import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Hero } from "./hero";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => <div className={className}>{children}</div>,
    span: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => <span className={className}>{children}</span>,
  },
}));

describe("Hero", () => {
  it("renders the tagline", () => {
    render(<Hero />);
    expect(screen.getByText("Describe what you want.")).toBeInTheDocument();
    expect(screen.getByText("Get production-ready code.")).toBeInTheDocument();
  });

  it("renders the description", () => {
    render(<Hero />);
    expect(
      screen.getByText(/transforms natural language/i),
    ).toBeInTheDocument();
  });

  it("renders badge label", () => {
    render(<Hero />);
    expect(screen.getByText(/Built for Claude Code/i)).toBeInTheDocument();
  });

  it("renders install command", () => {
    render(<Hero />);
    expect(screen.getByText("npx @aslomon/effectum")).toBeInTheDocument();
  });

  it("renders GitHub CTA link", () => {
    render(<Hero />);
    const link = screen.getByText("View on GitHub");
    expect(link).toHaveAttribute("href", "https://github.com/aslomon/effectum");
  });

  it("renders Get started link", () => {
    render(<Hero />);
    const link = screen.getByText("Get started");
    expect(link).toHaveAttribute("href", "/docs/getting-started");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { Features } from "./features";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => <div className={className}>{children}</div>,
  },
}));

describe("Features", () => {
  it("renders feature titles", () => {
    render(<Features />);
    expect(screen.getByText("PRD Workshop")).toBeInTheDocument();
    expect(screen.getByText("Ralph Loop")).toBeInTheDocument();
  });

  it("renders section title", () => {
    render(<Features />);
    expect(screen.getByText("Everything you need to ship")).toBeInTheDocument();
  });

  it("renders feature descriptions", () => {
    render(<Features />);
    expect(
      screen.getByText(/Guided specification writing/),
    ).toBeInTheDocument();
  });
});

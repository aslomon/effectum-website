import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import DocsPage from "./page";

describe("DocsPage", () => {
  it("renders the documentation heading", () => {
    render(<DocsPage />);
    expect(screen.getByText("Documentation")).toBeInTheDocument();
  });

  it("renders all 4 section cards", () => {
    render(<DocsPage />);
    expect(screen.getByText("Getting Started")).toBeInTheDocument();
    expect(screen.getByText("Commands")).toBeInTheDocument();
    expect(screen.getByText("Stack Presets")).toBeInTheDocument();
    expect(screen.getByText("PRD Workshop")).toBeInTheDocument();
  });

  it("has correct links to doc sections", () => {
    render(<DocsPage />);
    const gettingStarted = screen.getByText("Getting Started").closest("a");
    expect(gettingStarted).toHaveAttribute("href", "/docs/getting-started");
    const commands = screen.getByText("Commands").closest("a");
    expect(commands).toHaveAttribute("href", "/docs/commands");
  });
});

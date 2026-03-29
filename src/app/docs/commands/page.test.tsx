import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import CommandsPage from "./page";

describe("CommandsPage", () => {
  it("renders the commands heading", () => {
    render(<CommandsPage />);
    expect(screen.getByText("Workflow commands")).toBeInTheDocument();
  });

  it("renders command names", () => {
    render(<CommandsPage />);
    expect(screen.getAllByText("effect:dev:plan").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("effect:dev:tdd").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("effect:dev:verify").length).toBeGreaterThanOrEqual(1);
  });

  it("renders phase groupings", () => {
    render(<CommandsPage />);
    expect(screen.getAllByText("Planning").length).toBeGreaterThanOrEqual(1);
    expect(screen.getAllByText("Implementation").length).toBeGreaterThanOrEqual(
      1,
    );
  });
});

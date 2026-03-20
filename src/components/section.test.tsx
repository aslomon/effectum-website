import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Section } from "./section";

describe("Section", () => {
  it("renders title and children", () => {
    render(
      <Section title="Test Title">
        <p>Test content</p>
      </Section>,
    );
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(
      <Section title="Title" label="Label">
        <p>Content</p>
      </Section>,
    );
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <Section title="Title" description="A description">
        <p>Content</p>
      </Section>,
    );
    expect(screen.getByText("A description")).toBeInTheDocument();
  });

  it("does not render label when not provided", () => {
    const { container } = render(
      <Section title="Title">
        <p>Content</p>
      </Section>,
    );
    const labels = container.querySelectorAll(".uppercase.tracking-wider");
    expect(labels).toHaveLength(0);
  });

  it("applies the id attribute when provided", () => {
    render(
      <Section title="Title" id="test-section">
        <p>Content</p>
      </Section>,
    );
    expect(document.getElementById("test-section")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <Section title="Title" className="bg-red-500">
        <p>Content</p>
      </Section>,
    );
    const section = container.querySelector("section");
    expect(section).toHaveClass("bg-red-500");
  });
});

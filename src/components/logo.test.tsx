import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Logo, LogoMark } from "./logo";

describe("Logo", () => {
  it("renders an SVG with the effectum label", () => {
    render(<Logo />);
    const svg = screen.getByRole("img", { name: /effectum logo/i });
    expect(svg).toBeInTheDocument();
  });

  it("accepts a className prop", () => {
    render(<Logo className="h-8 w-auto" />);
    const svg = screen.getByRole("img");
    expect(svg).toHaveClass("h-8", "w-auto");
  });

  it("contains the effectum text", () => {
    const { container } = render(<Logo />);
    const textEl = container.querySelector("text");
    expect(textEl).toHaveTextContent("effectum");
  });

  it("has an amber accent element", () => {
    const { container } = render(<Logo />);
    const rect = container.querySelector("rect");
    expect(rect).toBeInTheDocument();
    expect(rect).toHaveAttribute("fill", "#D97706");
  });
});

describe("LogoMark", () => {
  it("renders an SVG with the e mark", () => {
    render(<LogoMark />);
    const svg = screen.getByRole("img", { name: /effectum/i });
    expect(svg).toBeInTheDocument();
  });

  it("contains the letter e", () => {
    const { container } = render(<LogoMark />);
    const textEl = container.querySelector("text");
    expect(textEl).toHaveTextContent("e");
  });

  it("has an amber accent element", () => {
    const { container } = render(<LogoMark />);
    const rect = container.querySelector("rect");
    expect(rect).toHaveAttribute("fill", "#D97706");
  });
});

import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Footer } from "./footer";

describe("Footer", () => {
  it("renders MIT license text", () => {
    render(<Footer />);
    expect(screen.getByText(/MIT/)).toBeInTheDocument();
  });

  it("renders author link", () => {
    render(<Footer />);
    const authorLink = screen.getByText("Jason Salomon-Rinnert");
    expect(authorLink).toHaveAttribute("href", "https://github.com/aslomon");
    expect(authorLink).toHaveAttribute("target", "_blank");
  });

  it("renders GitHub link", () => {
    render(<Footer />);
    const githubLink = screen.getByText("GitHub");
    expect(githubLink).toHaveAttribute(
      "href",
      "https://github.com/aslomon/effectum",
    );
  });

  it("renders Docs link", () => {
    render(<Footer />);
    const docsLink = screen.getByText("Docs");
    expect(docsLink).toHaveAttribute("href", "/docs");
  });

  it("renders npm link", () => {
    render(<Footer />);
    const npmLink = screen.getByText("npm");
    expect(npmLink).toHaveAttribute(
      "href",
      "https://www.npmjs.com/package/@aslomon/effectum",
    );
  });
});

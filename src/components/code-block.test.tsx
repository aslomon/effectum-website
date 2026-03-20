import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import { CodeBlock } from "./code-block";

describe("CodeBlock", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it("renders code content", () => {
    render(<CodeBlock code="npx @aslomon/effectum" />);
    expect(screen.getByText("npx @aslomon/effectum")).toBeInTheDocument();
  });

  it("renders language label when provided", () => {
    render(<CodeBlock code="echo hello" language="bash" />);
    expect(screen.getByText("bash")).toBeInTheDocument();
  });

  it("does not render language label when not provided", () => {
    render(<CodeBlock code="echo hello" />);
    expect(screen.queryByText("bash")).not.toBeInTheDocument();
  });

  it("copies code to clipboard on button click", async () => {
    render(<CodeBlock code="test code" language="terminal" />);
    const copyBtn = screen.getByLabelText("Copy to clipboard");
    fireEvent.click(copyBtn);
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith("test code");
  });

  it("shows Copied feedback after clicking copy", async () => {
    render(<CodeBlock code="test code" language="terminal" />);
    const copyBtn = screen.getByLabelText("Copy to clipboard");
    fireEvent.click(copyBtn);
    expect(await screen.findByText("Copied")).toBeInTheDocument();
  });
});

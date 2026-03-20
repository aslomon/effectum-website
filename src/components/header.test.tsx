import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

vi.mock("framer-motion", () => ({
  motion: {
    div: ({
      children,
      className,
      onClick,
    }: {
      children: React.ReactNode;
      className?: string;
      onClick?: () => void;
    }) => (
      <div className={className} onClick={onClick}>
        {children}
      </div>
    ),
    li: ({
      children,
      className,
    }: {
      children: React.ReactNode;
      className?: string;
    }) => <li className={className}>{children}</li>,
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => (
    <>{children}</>
  ),
  useScroll: () => ({ scrollY: { get: () => 0, on: vi.fn() } }),
  useMotionValueEvent: vi.fn(),
}));

vi.mock("./theme-toggle", () => ({
  ThemeToggle: () => <button aria-label="Toggle theme">theme</button>,
}));

describe("Header", () => {
  it("renders nav links (always visible)", async () => {
    const { Header } = await import("./header");
    render(<Header />);
    expect(screen.getByText("Features")).toBeInTheDocument();
    expect(screen.getByText("Docs")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("renders GitHub button", async () => {
    const { Header } = await import("./header");
    render(<Header />);
    expect(screen.getAllByText("GitHub").length).toBeGreaterThanOrEqual(1);
  });

  it("renders mobile menu button", async () => {
    const { Header } = await import("./header");
    render(<Header />);
    expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
  });

  it("opens mobile menu", async () => {
    const { Header } = await import("./header");
    render(<Header />);
    fireEvent.click(screen.getByLabelText("Open menu"));
    expect(screen.getByLabelText("Close menu")).toBeInTheDocument();
  });

  it("renders theme toggle", async () => {
    const { Header } = await import("./header");
    render(<Header />);
    expect(
      screen.getAllByLabelText("Toggle theme").length,
    ).toBeGreaterThanOrEqual(1);
  });
});

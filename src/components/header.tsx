"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Github, Menu, X } from "lucide-react";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";

const NAV_LINKS = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/docs", label: "Docs" },
  { href: "/about", label: "About" },
];

function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-xs flex-col bg-surface shadow-2xl md:hidden"
          >
            <div className="flex items-center justify-between border-b border-border px-6 py-4">
              <Link href="/" onClick={onClose} aria-label="effectum home">
                <Logo className="h-7 w-auto text-text-primary" />
              </Link>
              <div className="flex items-center gap-1">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary hover:bg-background hover:text-text-primary"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            <nav className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="space-y-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center rounded-lg px-4 py-4 text-lg font-medium text-text-secondary hover:bg-background hover:text-text-primary"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
            <div className="border-t border-border px-4 pb-8 pt-4">
              <a
                href="https://github.com/aslomon/effectum"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-semibold text-white hover:bg-accent-hover"
              >
                <Github size={16} />
                View on GitHub
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header className="fixed left-1/2 top-3 z-30 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2">
        <nav
          className={`flex h-14 items-center justify-between rounded-2xl px-5 transition-all duration-300 ${
            scrolled
              ? "border border-border bg-surface/85 shadow-lg shadow-black/5 backdrop-blur-xl"
              : "border border-transparent bg-transparent"
          }`}
        >
          <Link href="/">
            <Logo className="h-7 w-auto text-text-primary" />
          </Link>

          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <a
              href="https://github.com/aslomon/effectum"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-3 py-1.5 text-sm font-medium text-text-primary transition-all hover:border-accent/30"
            >
              <Github size={14} strokeWidth={1.75} />
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-1 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary hover:text-text-primary"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
}

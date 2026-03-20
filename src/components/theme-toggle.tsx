"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "./theme-provider";

type Theme = "light" | "dark" | "system";

const THEME_CYCLE: Theme[] = ["system", "light", "dark"];

const ICONS = {
  light: Sun,
  dark: Moon,
  system: Monitor,
} as const;

const LABELS = {
  light: "Switch to dark mode",
  dark: "Switch to system theme",
  system: "Switch to light mode",
} as const;

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleClick = () => {
    const currentIndex = THEME_CYCLE.indexOf(theme);
    const nextIndex = (currentIndex + 1) % THEME_CYCLE.length;
    setTheme(THEME_CYCLE[nextIndex]);
  };

  // Render placeholder with same dimensions during SSR
  if (!mounted) {
    return (
      <button
        type="button"
        aria-label="Toggle theme"
        className="relative flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary"
      >
        <Monitor size={17} strokeWidth={1.75} />
      </button>
    );
  }

  const Icon = ICONS[theme];

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={LABELS[theme]}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg text-text-secondary transition-colors hover:bg-background hover:text-text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ opacity: 0, rotate: -30, scale: 0.7 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 30, scale: 0.7 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="flex items-center justify-center"
        >
          <Icon size={17} strokeWidth={1.75} />
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

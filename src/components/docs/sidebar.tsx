"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  BookOpen,
  Rocket,
  Terminal,
  LayoutGrid,
  FileText,
  ChevronDown,
  BookMarked,
} from "lucide-react";
import { LogoMark } from "@/components/logo";

const DOC_SECTIONS = [
  {
    heading: "Introduction",
    links: [
      {
        href: "/docs",
        label: "Overview",
        icon: BookOpen,
        exact: true,
      },
      {
        href: "/docs/getting-started",
        label: "Getting Started",
        icon: Rocket,
        exact: false,
      },
    ],
  },
  {
    heading: "Reference",
    links: [
      {
        href: "/docs/commands",
        label: "Commands",
        icon: Terminal,
        exact: false,
      },
      {
        href: "/docs/stack-presets",
        label: "Stack Presets",
        icon: LayoutGrid,
        exact: false,
      },
    ],
  },
  {
    heading: "Workflows",
    links: [
      {
        href: "/docs/prd-workshop",
        label: "PRD Workshop",
        icon: FileText,
        exact: false,
      },
    ],
  },
];

function getCurrentLabel(pathname: string): string {
  for (const section of DOC_SECTIONS) {
    for (const link of section.links) {
      const isActive = link.exact
        ? pathname === link.href
        : pathname.startsWith(link.href);
      if (isActive) return link.label;
    }
  }
  return "Documentation";
}

export function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const currentLabel = getCurrentLabel(pathname);

  return (
    <>
      {/* Mobile toggle */}
      <button
        type="button"
        className="mb-4 flex w-full items-center justify-between rounded-lg border border-border bg-surface px-4 py-3 text-sm font-medium text-text-primary shadow-sm transition-colors hover:border-border-hover lg:hidden"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="docs-sidebar-nav"
      >
        <span className="flex items-center gap-2">
          <BookMarked size={15} className="text-accent" />
          {currentLabel}
        </span>
        <ChevronDown
          size={15}
          className={`text-text-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Sidebar nav */}
      <nav
        id="docs-sidebar-nav"
        className={`${open ? "block" : "hidden"} lg:sticky lg:top-20 lg:block lg:h-fit`}
      >
        {/* Logo above nav links (desktop only) */}
        <div className="mb-6 hidden lg:block">
          <Link href="/" aria-label="effectum home">
            <LogoMark className="h-8 w-8 text-text-primary" />
          </Link>
        </div>

        <div className="space-y-6">
          {DOC_SECTIONS.map((section) => (
            <div key={section.heading}>
              <p className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-text-muted">
                {section.heading}
              </p>
              <ul className="space-y-0.5">
                {section.links.map((link) => {
                  const isActive = link.exact
                    ? pathname === link.href
                    : pathname.startsWith(link.href);
                  const Icon = link.icon;

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`group flex items-center gap-2.5 rounded-md px-3 py-2 text-sm transition-colors ${
                          isActive
                            ? "border-l-2 border-accent bg-accent-light font-medium text-accent"
                            : "border-l-2 border-transparent text-text-secondary hover:bg-background hover:text-text-primary"
                        }`}
                      >
                        <Icon
                          size={15}
                          className={`shrink-0 transition-colors ${
                            isActive
                              ? "text-accent"
                              : "text-text-muted group-hover:text-text-secondary"
                          }`}
                          aria-hidden="true"
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </nav>
    </>
  );
}

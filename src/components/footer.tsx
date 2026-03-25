import Link from "next/link";
import { Github } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <Logo className="h-5 w-auto text-text-primary" />
            <p className="max-w-xs text-sm text-text-muted">
              Autonomous development system for Claude Code. Describe what you
              want. Get production-ready code.
            </p>
          </div>

          <div className="flex gap-12">
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Product
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/#features"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/getting-started"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    Getting Started
                  </Link>
                </li>
                <li>
                  <Link
                    href="/changelog"
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    Changelog
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-text-muted">
                Community
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://github.com/aslomon/effectum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    <Github size={14} />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/@aslomon/effectum"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    <NpmIcon />
                    npm
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-text-muted">
            MIT &copy; {new Date().getFullYear()}{" "}
            <a
              href="https://github.com/aslomon"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-text-secondary"
            >
              Jason Salomon-Rinnert
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function NpmIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M0 7.334v8h6.666v1.332H12v-1.332h12v-8H0zm6.666 6.664H5.334v-4H3.999v4H1.335V8.667h5.331v5.331zm4 0v1.336H8.001V8.667h5.334v5.332h-2.669v-.001zm12.001 0h-1.33v-4h-1.336v4h-1.335v-4h-1.33v4h-2.671V8.667h8.002v5.331zM10.665 10H12v2.667h-1.335V10z" />
    </svg>
  );
}

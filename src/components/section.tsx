import { type ReactNode } from "react";

interface SectionProps {
  id?: string;
  label?: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  label,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section id={id} className={`py-24 sm:py-32 ${className}`}>
      <div className="mx-auto max-w-7xl overflow-hidden px-4 sm:px-6 lg:px-12">
        <div className="mx-auto max-w-2xl text-center">
          {label && (
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-accent">
              {label}
            </p>
          )}
          <h2 className="text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-lg text-text-secondary">{description}</p>
          )}
        </div>
        <div className="mt-16">{children}</div>
      </div>
    </section>
  );
}

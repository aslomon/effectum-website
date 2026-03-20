import type { Metadata } from "next";
import { Sidebar } from "@/components/docs/sidebar";

export const metadata: Metadata = {
  title: "Documentation",
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-6 pt-20 pb-12 lg:px-12">
      <div className="lg:grid lg:grid-cols-[240px_1fr] lg:gap-12">
        <aside className="mb-8 lg:mb-0">
          <Sidebar />
        </aside>
        <article className="prose-custom max-w-3xl">{children}</article>
      </div>
    </div>
  );
}

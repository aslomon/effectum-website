import type { Metadata } from "next";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aslomon.github.io/effectum"),
  title: {
    default: "effectum — Describe what you want. Get production-ready code.",
    template: "%s | effectum",
  },
  description:
    "An autonomous development system for Claude Code. Transform natural language into production-ready code through structured workflows, quality gates, and test-driven development.",
  keywords: [
    "effectum",
    "Claude Code",
    "autonomous development",
    "AI coding",
    "TDD",
    "test-driven development",
    "code generation",
    "PRD workshop",
    "quality gates",
    "spec-driven development",
    "Anthropic",
    "open source",
  ],
  authors: [
    { name: "Jason Salomon-Rinnert", url: "https://github.com/aslomon" },
  ],
  creator: "Jason Salomon-Rinnert",
  openGraph: {
    title: "effectum — Describe what you want. Get production-ready code.",
    description:
      "An autonomous development system for Claude Code. Write a spec, let Claude build it overnight with quality gates and TDD.",
    type: "website",
    locale: "en_US",
    siteName: "effectum",
    url: "https://aslomon.github.io/effectum",
  },
  twitter: {
    card: "summary_large_image",
    title: "effectum — Describe what you want. Get production-ready code.",
    description:
      "An autonomous development system for Claude Code. Write a spec, let Claude build it overnight.",
  },
  alternates: {
    canonical: "https://aslomon.github.io/effectum",
  },
};

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('effectum-theme');
    var theme = stored === 'light' || stored === 'dark' || stored === 'system' ? stored : 'system';
    var resolved = theme === 'system'
      ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      : theme;
    if (resolved === 'dark') {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {themeScript}
        </Script>
        <ThemeProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

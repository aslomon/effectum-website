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
    default: "effectum — Claude Code Framework for Autonomous Development",
    template: "%s | effectum",
  },
  description:
    "effectum is an open-source Claude Code framework for autonomous development. 42 workflow commands, spec-driven development, quality gates, and overnight autonomous builds.",
  keywords: [
    "effectum",
    "Claude Code framework",
    "autonomous development framework",
    "Claude Code workflow",
    "spec-driven development",
    "AI coding framework",
    "Claude Code autonomous build",
    "Claude Code commands",
    "PRD workshop",
    "test-driven AI development",
    "quality gates AI coding",
    "AI development workflow",
    "Claude Code setup",
    "autonomous coding system",
    "Anthropic Claude Code",
    "open source",
  ],
  authors: [
    { name: "Jason Salomon-Rinnert", url: "https://github.com/aslomon" },
  ],
  creator: "Jason Salomon-Rinnert",
  openGraph: {
    title: "effectum — Claude Code Framework for Autonomous Development",
    description:
      "Open-source Claude Code framework with 42 workflow commands. Write a spec, let Claude build it overnight with quality gates, TDD, and autonomous execution.",
    type: "website",
    locale: "en_US",
    siteName: "effectum",
    url: "https://aslomon.github.io/effectum",
  },
  twitter: {
    card: "summary_large_image",
    title: "effectum — Claude Code Framework for Autonomous Development",
    description:
      "Open-source Claude Code framework: spec-driven development, 42 workflow commands, quality gates, overnight autonomous builds.",
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "effectum",
  url: "https://aslomon.github.io/effectum",
  logo: "https://aslomon.github.io/effectum/logo.png",
  sameAs: ["https://github.com/aslomon/effectum"],
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "effectum",
  description:
    "An open-source autonomous development framework for Claude Code. Structures AI-assisted coding with 42 workflow commands, quality gates, and spec-driven development.",
  applicationCategory: "DeveloperApplication",
  operatingSystem: "macOS, Linux, Windows",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
  url: "https://aslomon.github.io/effectum",
  downloadUrl: "https://www.npmjs.com/package/@aslomon/effectum",
  softwareVersion: "0.17",
  author: {
    "@type": "Person",
    name: "Jason Salomon-Rinnert",
    url: "https://github.com/aslomon",
  },
};

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
      </head>
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

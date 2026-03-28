"use client";

import { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative max-w-full overflow-hidden rounded-xl border border-code-border bg-code-bg shadow-sm">
      {language && (
        <div className="flex items-center justify-between border-b border-white/5 px-4 py-2.5">
          <div className="flex items-center gap-2 text-xs text-code-text/40">
            <Terminal size={12} />
            <span>{language}</span>
          </div>
          <button
            type="button"
            onClick={handleCopy}
            className="flex items-center gap-1.5 rounded-md px-2 py-1 text-xs text-code-text/40 transition-colors hover:bg-white/5 hover:text-code-text/70"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <>
                <Check size={12} className="text-emerald-400" />
                <span className="text-emerald-400">Copied</span>
              </>
            ) : (
              <>
                <Copy size={12} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4">
          <code className="font-mono text-xs sm:text-sm leading-relaxed text-code-text break-all sm:break-normal">
            {code}
          </code>
        </pre>
        {!language && (
          <button
            type="button"
            onClick={handleCopy}
            className="absolute right-3 top-3 flex items-center gap-1 rounded-md px-2 py-1 text-xs text-code-text/30 opacity-0 transition-all hover:bg-white/5 hover:text-code-text/60 group-hover:opacity-100"
            aria-label="Copy to clipboard"
          >
            {copied ? (
              <Check size={12} className="text-emerald-400" />
            ) : (
              <Copy size={12} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}

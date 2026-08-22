"use client";

import { ArrowUp, Check, Copy } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/lib/site-content";

export function BackToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      data-cursor="interactive"
      aria-label="Back to top"
      className="focus-ring grid h-9 w-9 place-items-center rounded-full border border-gold/30 text-champagne transition-colors hover:bg-gold hover:text-ink"
    >
      <ArrowUp size={15} />
    </button>
  );
}

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const timeout = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(siteConfig.contactEmail);
      setCopied(true);
      window.clearTimeout(timeout.current);
      timeout.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = siteConfig.contactHref;
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      data-cursor="interactive"
      className="focus-ring flex items-center gap-2 rounded-full border border-gold/30 bg-wine/60 px-3.5 py-2 font-mono text-[0.68rem] tracking-[0.04em] text-cream transition-colors hover:border-gold/60"
    >
      {copied ? <Check size={13} className="text-gold" /> : <Copy size={13} className="text-muted/60" />}
      <span aria-live="polite">{copied ? "Copied to clipboard" : siteConfig.contactEmail}</span>
    </button>
  );
}

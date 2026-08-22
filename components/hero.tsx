"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import type { MouseEvent } from "react";
import { NodeNetwork } from "@/components/node-network";
import { RotatingHeadline } from "@/components/rotating-headline";
import { siteConfig } from "@/lib/site-content";

export function Hero({ onOpenModal }: { onOpenModal?: () => void }) {
  const reducedMotion = useReducedMotion();

  const handleBlueprintClick = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById("architecture");
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
  };

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pb-16 pt-28 sm:pt-36">
      <div aria-hidden="true" className="grid-background absolute inset-0 opacity-40" />
      <NodeNetwork variant="hero" />
      <div className="section-wrap relative z-10 flex min-h-[calc(100svh-120px)] flex-col justify-center">
        <div className="max-w-5xl min-w-0">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-champagne">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />
              Sovereign intelligence
            </span>
          </motion.div>

          <RotatingHeadline />
          <p className="mt-6 max-w-2xl text-base leading-[1.75] text-muted sm:text-[1.05rem]">
            {siteConfig.thesis}
          </p>

          <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:gap-5">
            <button
              type="button"
              onClick={onOpenModal}
              data-cursor="interactive"
              className="focus-ring flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all hover:brightness-110"
            >
              <Sparkles size={14} />
              {siteConfig.primaryCta}
            </button>
            <a
              href={siteConfig.secondaryCtaHref}
              onClick={handleBlueprintClick}
              data-cursor="interactive"
              className="link-underline focus-ring flex items-center gap-1.5 py-2 text-sm font-semibold text-champagne transition-colors hover:text-cream"
            >
              {siteConfig.secondaryCta}
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

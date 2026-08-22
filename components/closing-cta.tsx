"use client";

import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { AnimatedWorldMap } from "@/components/animated-world-map";
import { BackToTop, CopyEmail } from "@/components/footer-actions";
import { siteConfig } from "@/lib/site-content";

export function ClosingCta({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section id="contact" className="section-wrap pb-12 pt-16">
      <div className="relative isolate overflow-hidden rounded-[2.5rem] border border-gold/30 bg-[#1F050C] px-6 pb-24 pt-20 text-center sm:px-12 sm:pb-28 sm:pt-24 shadow-[0_25px_60px_rgba(15,2,6,0.7)]">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.18),transparent_60%),linear-gradient(135deg,rgba(229,195,120,0.05),transparent_40%,rgba(92,20,40,0.3))]"
        />
        <AnimatedWorldMap />
        <div className="relative z-10">
        {/* Architectural Status Pill */}
        <div className="mx-auto mb-8 flex justify-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-[#2D0812] px-4 py-1.5 font-mono text-[0.62rem] font-bold uppercase tracking-widest text-champagne shadow-[0_0_20px_rgba(212,175,55,0.25)]">
            <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span>Sovereign Perimeter · Ready for Deployment</span>
          </div>
        </div>

        <p className="eyebrow mb-4">Direct Engineering Engagement</p>
        <h2 className="display mx-auto max-w-4xl text-[clamp(2.5rem,5.5vw,4.75rem)] leading-[0.95] text-cream">
          Ready to build your <br />
          <span className="iridescent">intelligence infrastructure?</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Direct engineering collaboration. Speak directly with AI infrastructure architects and receive a written technical response within two business days.
        </p>

        <div className="mt-9 flex justify-center">
          <button
            type="button"
            onClick={onOpenModal}
            data-cursor="interactive"
            className="focus-ring flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-8 py-4 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all hover:brightness-110"
          >
            <Sparkles size={15} />
            {siteConfig.primaryCta}
          </button>
        </div>

        <ul className="relative z-10 mx-auto mt-14 grid max-w-3xl gap-4 text-left sm:grid-cols-3">
          {siteConfig.valuePillars.map((pillar) => (
            <li key={pillar} className="border-t border-gold/20 pt-4">
              <span className="flex items-center gap-2 text-xs font-semibold text-cream sm:text-sm">
                <Check size={14} className="shrink-0 text-gold" />
                {pillar}
              </span>
            </li>
          ))}
        </ul>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="section-wrap flex flex-col gap-8 py-10 text-xs text-muted sm:flex-row sm:items-end sm:justify-between border-t border-gold/15">
      <div className="flex items-center gap-3.5">
        <Image
          src="/logo-emblem.webp"
          alt=""
          width={40}
          height={40}
          className="h-10 w-10 object-contain"
        />
        <div>
          <p className="text-sm font-bold tracking-tight text-cream uppercase">{siteConfig.fullName}</p>
          <p className="mt-0.5 text-muted/70">{siteConfig.location} — Engineering Sovereign Intelligence.</p>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
        <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-x-5 gap-y-2">
          {siteConfig.footerLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="focus-ring rounded-sm transition-colors hover:text-champagne"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <CopyEmail />
        <BackToTop />
      </div>
    </footer>
  );
}

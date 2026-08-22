"use client";

import { Eye, Fingerprint, Route } from "lucide-react";
import { NumberTicker } from "@/components/number-ticker";

const PRINCIPLES = [
  {
    icon: Fingerprint,
    label: "Sovereignty by default",
    text: "Your models, memory, and operational data stay inside the boundary you control.",
  },
  {
    icon: Eye,
    label: "Observable by design",
    text: "Every inference path is measurable, reviewable, and backed by an immutable audit trail.",
  },
  {
    icon: Route,
    label: "Built to compound",
    text: "A private substrate that gets more useful as your workflows, agents, and knowledge graph grow.",
  },
];

export function ProofStrip() {
  return (
    <section className="relative py-20 sm:py-28" aria-label="VORTEX operating principles">
      <div className="section-wrap">
        <div className="rounded-[2rem] border border-gold/20 bg-[#1F050C]/70 p-6 shadow-[0_18px_50px_rgba(15,2,6,0.45)] backdrop-blur-xl sm:p-8 lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <div>
              <p className="eyebrow mb-4">The VORTEX standard</p>
              <h2 className="display max-w-md text-3xl leading-[0.98] text-cream sm:text-4xl">
                The infrastructure layer should feel like a <span className="iridescent">competitive advantage.</span>
              </h2>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {PRINCIPLES.map((principle) => {
                const Icon = principle.icon;
                return (
                  <article
                    key={principle.label}
                    className="group rounded-2xl border border-gold/15 bg-[#2D0812]/45 p-4 transition-colors hover:border-gold/40"
                  >
                    <Icon size={17} className="text-gold transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="mt-5 text-sm font-semibold text-cream">{principle.label}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted">{principle.text}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid divide-y divide-gold/15 border-t border-gold/15 pt-6 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
            <div className="py-4 sm:px-5 sm:py-0 sm:first:pl-0">
              <p className="font-display text-3xl text-cream"><NumberTicker value={0} /> <span className="text-lg text-gold">bytes</span></p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">external data egress</p>
            </div>
            <div className="py-4 sm:px-5 sm:py-0">
              <p className="font-display text-3xl text-cream"><NumberTicker value={6} /> <span className="text-lg text-gold">layers</span></p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">security architecture</p>
            </div>
            <div className="py-4 sm:px-5 sm:py-0">
              <p className="font-display text-3xl text-cream"><NumberTicker value={72} suffix="h" /> <span className="text-lg text-gold">blueprint</span></p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">reference deployment target</p>
            </div>
            <div className="py-4 sm:pl-5 sm:py-0 sm:last:pr-0">
              <p className="font-display text-3xl text-cream"><NumberTicker value={99} suffix=".999%" /></p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-wider text-muted">operational uptime target</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

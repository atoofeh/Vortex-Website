"use client";

import { CheckCircle2, Cpu, Database, Network, ShieldCheck, Sparkles, Terminal } from "lucide-react";
import { pipelineStages } from "@/lib/site-content";

const STAGE_ICONS = [Database, Cpu, Sparkles, Network, ShieldCheck, Terminal];

export function PipelineFlow() {
  return (
    <section id="pipeline" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="section-wrap">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4">
            <Terminal size={13} className="text-gold" />
            Infrastructure Lifecycle
          </p>
          <h2 className="display text-3xl leading-[0.94] text-cream sm:text-5xl lg:text-6xl">
            We don&apos;t just deploy AI. <br />
            <span className="iridescent">We engineer the system it runs on.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            A single, deterministic stack deployed entirely within your perimeter. From raw data silos to autonomous, auditable execution.
          </p>
        </div>

        {/* Vertical Pipeline Flow Grid */}
        <div className="relative grid gap-4 lg:grid-cols-2 lg:gap-6">
          {pipelineStages.map((stage, index) => {
            const Icon = STAGE_ICONS[index % STAGE_ICONS.length];
            return (
              <div
                key={stage.step}
                className="group relative overflow-hidden rounded-2xl border border-gold/20 bg-[#1F050C]/95 p-6 sm:p-8 shadow-[0_10px_30px_rgba(15,2,6,0.4)] transition-all duration-300 hover:border-gold/45"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-bold uppercase tracking-widest text-champagne">
                      {`${stage.step} // ${stage.tag}`}
                    </span>
                  </div>
                  <div className="grid h-9 w-9 place-items-center rounded-lg border border-gold/30 bg-[#2D0812] text-champagne shadow-sm">
                    <Icon size={16} />
                  </div>
                </div>

                <h3 className="font-display text-xl font-bold text-cream sm:text-2xl">
                  {stage.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {stage.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-gold/15 pt-4 font-mono text-[0.65rem] text-champagne">
                  <CheckCircle2 size={13} className="text-gold shrink-0" />
                  <span>Output: {stage.output}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Keep adjacent services subordinate to the sovereign infrastructure offer. */}
        <p className="mt-6 text-center font-mono text-[0.64rem] uppercase tracking-[0.12em] text-muted">
          Also delivered: custom ERP modules, internal operations platforms, and customer portals — built on the same private infrastructure.
        </p>
      </div>
    </section>
  );
}

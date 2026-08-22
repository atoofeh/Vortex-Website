"use client";

import { ArrowRight, BrainCircuit, Bot, Layers, Server, ShieldCheck } from "lucide-react";
import { LiquidGlassCard } from "@/components/liquid-glass-card";
import { NodeNetwork } from "@/components/node-network";
import { capabilities } from "@/lib/site-content";

const CAPABILITY_ICONS = {
  "01": BrainCircuit,
  "02": Bot,
  "03": Server,
  "04": ShieldCheck,
};

export function Capabilities({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section id="capabilities" className="relative overflow-hidden py-24 sm:py-36">
      <NodeNetwork />
      <div className="section-wrap relative z-10">
        <div className="mb-16 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow mb-4">
              <Layers size={13} className="text-gold" />
              Core Systems Matrix
            </p>
            <h2 className="display text-3xl leading-[0.94] text-cream sm:text-5xl lg:text-6xl">
              Architectural capabilities <br />
              <span className="iridescent">built for total sovereignty.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted sm:text-base">
            Every subsystem is designed to operate on-premise, within private VPCs, or in air-gapped secure facilities without third-party vendor lock-in.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {capabilities.map((cap) => {
            const Icon = CAPABILITY_ICONS[cap.id as keyof typeof CAPABILITY_ICONS];

            return (
            <LiquidGlassCard
              key={cap.id}
              eyebrow={`${cap.code} // ${cap.id}`}
              title={cap.title}
              icon={<Icon size={30} strokeWidth={1.35} />}
              body={
                <>
                  <p>{cap.summary}</p>
                  <ul>
                    {cap.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </>
              }
              consequence={cap.businessConsequence}
            />
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-5 rounded-2xl border border-gold/20 bg-[#1F050C]/60 p-6 backdrop-blur-sm sm:flex-row">
          <p className="text-xs text-muted sm:text-sm">
            Need a custom architectural evaluation for your specific hardware topology?
          </p>
          <button
            type="button"
            onClick={onOpenModal}
            data-cursor="interactive"
            className="focus-ring flex shrink-0 items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-champagne transition-all hover:border-gold hover:bg-gold hover:text-ink"
          >
            <span>Request System Assessment</span>
            <ArrowRight size={13} />
          </button>
        </div>
      </div>
    </section>
  );
}

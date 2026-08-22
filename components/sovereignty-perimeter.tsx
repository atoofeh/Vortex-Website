"use client";

import { ArrowRight, CheckCircle2, Lock, ShieldAlert, ShieldCheck, XCircle } from "lucide-react";

export function SovereigntyPerimeter({ onOpenModal }: { onOpenModal?: () => void }) {
  return (
    <section id="security" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="section-wrap">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4">
            <Lock size={13} className="text-gold" />
            Data Sovereignty & Boundary Defense
          </p>
          <h2 className="display text-3xl leading-[0.94] text-cream sm:text-5xl lg:text-6xl">
            Your intelligence doesn&apos;t have to <br />
            <span className="iridescent">leave your environment.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            We engineer an uncompromising perimeter. Models, vectors, weights, and agent execution remain strictly inside your hardware boundary.
          </p>
        </div>

        {/* Visual Perimeter Holding Comparison */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Inside: Sovereign Enterprise Perimeter */}
          <div
            className="rounded-3xl border-2 border-gold/40 bg-[#1F050C] p-7 sm:p-9 shadow-[0_20px_50px_rgba(212,175,55,0.15)] lg:col-span-7"
          >
            <div className="mb-6 flex items-center justify-between border-b border-gold/20 pb-4">
              <div className="flex items-center gap-2 font-mono text-xs font-bold text-champagne">
                <ShieldCheck size={18} className="text-gold" />
                <span>INSIDE YOUR SOVEREIGN PERIMETER</span>
              </div>
              <span className="rounded-full bg-gold/20 px-3 py-1 font-mono text-[0.62rem] font-bold text-gold">
                Air-Gapped & Protected
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-[#2D0812]/80 p-4">
                <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-sm font-bold text-cream">Sovereign Foundation Models</h3>
                  <p className="mt-1 text-xs text-muted">Fine-tuned open-weights (DeepSeek, Llama, Mistral) deployed on local GPU nodes.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-[#2D0812]/80 p-4">
                <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-sm font-bold text-cream">Proprietary Vector & Memory Databases</h3>
                  <p className="mt-1 text-xs text-muted">Internal enterprise databases indexed in encrypted local RAM without remote sync.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-[#2D0812]/80 p-4">
                <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-sm font-bold text-cream">Autonomous Agent State Mesh</h3>
                  <p className="mt-1 text-xs text-muted">Inter-agent communication over private IPC memory buses with zero telemetry leakage.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-2xl border border-gold/15 bg-[#2D0812]/80 p-4">
                <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-display text-sm font-bold text-cream">Hardware-Enforced Confidential Enclaves</h3>
                  <p className="mt-1 text-xs text-muted">Memory encryption (AMD SEV-SNP / Intel SGX) isolating weights from host root access.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Outside: Blocked External Risks */}
          <div
            className="rounded-3xl border border-rose-900/30 bg-[#12070B] p-7 sm:p-9 shadow-[0_15px_40px_rgba(15,2,6,0.6)] lg:col-span-5 flex flex-col justify-between"
          >
            <div>
              <div className="mb-6 flex items-center justify-between border-b border-rose-900/20 pb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-rose-300">
                  <ShieldAlert size={18} />
                  <span>BLOCKED OUTSIDE PERIMETER</span>
                </div>
                <span className="rounded-full bg-rose-950/60 px-3 py-1 font-mono text-[0.62rem] font-bold text-rose-300">
                  Zero Egress
                </span>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3 rounded-2xl border border-rose-900/20 bg-[#1F080F]/60 p-4">
                  <XCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-sm font-bold text-cream">Third-Party Cloud APIs</h3>
                    <p className="mt-1 text-xs text-muted">No external token billing, rate limits, or outbound API dependencies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-rose-900/20 bg-[#1F080F]/60 p-4">
                  <XCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-sm font-bold text-cream">Telemetry & Training Ingestion</h3>
                    <p className="mt-1 text-xs text-muted">Zero customer prompts or model responses are stored or trained on by external vendors.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-rose-900/20 bg-[#1F080F]/60 p-4">
                  <XCircle size={16} className="text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display text-sm font-bold text-cream">Multi-Tenant Resource Contention</h3>
                    <p className="mt-1 text-xs text-muted">No shared noisy neighbours, virtual CPU throttling, or unpredictable GPU wait queues.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onOpenModal}
                data-cursor="interactive"
                className="focus-ring flex w-full items-center justify-center gap-2 rounded-2xl border border-gold/20 bg-[#1F050C] p-4 font-mono text-xs font-bold uppercase tracking-wider text-champagne transition-colors hover:border-gold/40 hover:text-cream"
              >
                <span>Audit Your Current Perimeter</span>
                <ArrowRight size={13} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

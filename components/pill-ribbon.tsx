"use client";

import { Gauge, LockKeyhole, ShieldCheck, Zap } from "lucide-react";

const TELEMETRY = [
  { value: "0 Bytes", label: "external data egress", icon: LockKeyhole },
  { value: "< 1.2ms", label: "mesh communication", icon: Zap },
  { value: "6 Layers", label: "security architecture", icon: ShieldCheck },
  { value: "99.999%", label: "operational uptime target", icon: Gauge },
];

const TAGS = ["Air-gapped compute", "Local inference", "Zero-trust mesh", "No vendor lock-in"];

export function SystemTelemetryRail() {
  return (
    <section className="system-telemetry-rail relative border-y border-gold/20 py-5 sm:py-6" aria-label="System telemetry">
      <div className="section-wrap">
        <div className="relative overflow-hidden rounded-[1.75rem] border border-gold/25 bg-[#1F050C]/75 p-4 shadow-[0_18px_50px_rgba(15,2,6,0.35)] backdrop-blur-xl sm:p-5">
          <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />

          <div className="relative flex flex-col gap-3 border-b border-gold/15 pb-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                <Gauge size={15} />
              </span>
              <div>
                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-champagne">System telemetry</p>
                <p className="mt-0.5 text-xs text-muted">Private deployment profile</p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-wider text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
              Perimeter ready
            </span>
          </div>

          <div className="relative grid gap-px overflow-hidden rounded-2xl border border-gold/10 bg-gold/10 sm:grid-cols-2 lg:grid-cols-4">
            {TELEMETRY.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="system-telemetry-item group bg-[#2D0812]/80 p-4 transition-colors hover:bg-gold/10 sm:p-5">
                  <Icon size={15} className="system-telemetry-icon text-gold transition-transform duration-300 group-hover:scale-110" />
                  <p className="mt-3 font-display text-xl font-semibold tracking-tight text-cream sm:text-2xl">{item.value}</p>
                  <p className="mt-1 font-mono text-[9px] uppercase tracking-wider text-muted">{item.label}</p>
                </div>
              );
            })}
          </div>

          <div className="relative mt-4 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[9px] font-bold uppercase tracking-wider text-muted">Deployment profile</span>
            {TAGS.map((tag) => (
              <span key={tag} className="rounded-full border border-gold/20 bg-gold/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wide text-champagne">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Keep the old export name for any existing imports outside the homepage.
export const PillRibbon = SystemTelemetryRail;

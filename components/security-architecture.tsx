"use client";

import { useState } from "react";
import { CheckCircle2, FileText, KeyRound, Lock, Network, Server, Shield, ShieldCheck } from "lucide-react";

const SECURITY_LAYERS = [
  {
    id: "identity",
    name: "01. Identity & Zero-Trust Access",
    icon: KeyRound,
    summary: "Granular role-based access control with hardware security keys.",
    vortexImplements: "mTLS service-to-service authentication, vector-level ACLs, and ephemeral token issuance.",
    clientOwns: "Corporate SSO / IdP provider integration (Okta, Azure AD, SAML 2.0).",
  },
  {
    id: "encryption",
    name: "02. End-to-End Cryptography",
    icon: Lock,
    summary: "AES-256-GCM data at rest and TLS 1.3 in-transit encryption.",
    vortexImplements: "Automated key rotation, hardware-backed KMS integration, and encrypted memory caches.",
    clientOwns: "Master root key custody and HSM infrastructure management.",
  },
  {
    id: "network",
    name: "03. Network Subnet Isolation",
    icon: Network,
    summary: "Air-gapped private VPCs with strict ingress/egress firewall rules.",
    vortexImplements: "Private mesh network overlay, zero-egress packet filtering, and local DNS resolvers.",
    clientOwns: "Physical datacenter switches, ISP peering, and perimeter firewalls.",
  },
  {
    id: "enclaves",
    name: "04. Confidential Compute",
    icon: Server,
    summary: "Hardware-isolated CPU/GPU memory enclaves (SEV-SNP / SGX).",
    vortexImplements: "Confidential container runtime orchestration and remote attestation verification.",
    clientOwns: "Server BIOS firmware configuration and hardware hypervisor licenses.",
  },
  {
    id: "residency",
    name: "05. Strict Data Residency",
    icon: ShieldCheck,
    summary: "Deterministic geographic boundaries for models and persistent storage.",
    vortexImplements: "Local-only vector serialization, pinned GPU device memory, and zero telemetry export.",
    clientOwns: "Jurisdictional compliance filing and local server room physical access.",
  },
  {
    id: "audit",
    name: "06. Deterministic Auditability",
    icon: FileText,
    summary: "Cryptographically signed immutable logs of every model inference.",
    vortexImplements: "Tamper-proof event streaming, prompt/response SHA-256 hash chaining, and exportable JSON-LD.",
    clientOwns: "Long-term compliance archive storage (WORM-compliant buckets or tapes).",
  },
];

function LayerTopology({ activeIndex }: { activeIndex: number }) {
  return (
    <div
      className="layer-topology"
      role="img"
      aria-label={`Security layer ${activeIndex + 1} of 6 active`}
    >
      <svg viewBox="0 0 144 64" aria-hidden="true">
        <path className="layer-topology-track" d="M12 32H132" />
        <path className="layer-topology-signal" d="M12 32H132" />
        {SECURITY_LAYERS.map((layer, index) => (
          <circle
            key={layer.id}
            cx={12 + index * 24}
            cy="32"
            r={index === activeIndex ? 5.5 : 3.5}
            className={`layer-topology-node ${index === activeIndex ? "is-active" : ""}`}
          />
        ))}
      </svg>
      <span>ACTIVE // 0{activeIndex + 1}</span>
    </div>
  );
}

export function SecurityArchitecture() {
  const [selectedLayer, setSelectedLayer] = useState(0);
  const current = SECURITY_LAYERS[selectedLayer];
  const Icon = current.icon;

  return (
    <section className="relative py-24 sm:py-36">
      <div className="section-wrap">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <p className="eyebrow mb-4">
            <Shield size={13} className="text-gold" />
            Security Architecture
          </p>
          <h2 className="display text-3xl leading-[0.94] text-cream sm:text-5xl lg:text-6xl">
            Engineered for strict <br />
            <span className="iridescent">regulatory defense.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            A 6-layer defense matrix. Designed to satisfy SOC 2, HIPAA, GDPR, and government air-gap compliance requirements without external audit dependencies.
          </p>
        </div>

        {/* 6-Layer Architecture Explorer */}
        <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
          {/* Layer Selector List */}
          <div className="space-y-2.5 lg:col-span-5">
            {SECURITY_LAYERS.map((layer, index) => {
              const LayerIcon = layer.icon;
              return (
                <button
                  key={layer.id}
                  type="button"
                  onClick={() => setSelectedLayer(index)}
                  data-cursor="interactive"
                  className={
                    "focus-ring flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all " +
                    (selectedLayer === index
                      ? "border-gold bg-gold/15 text-cream shadow-md"
                      : "border-gold/20 bg-[#1F050C]/60 text-muted hover:border-gold/40 hover:text-cream")
                  }
                >
                  <div className="flex items-center gap-3">
                    <LayerIcon size={16} className={selectedLayer === index ? "text-gold" : "text-muted"} />
                    <span className="font-display text-sm font-semibold text-cream">
                      {layer.name}
                    </span>
                  </div>
                  <span className="font-mono text-[0.62rem] text-champagne">
                    Layer 0{index + 1}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Layer Deep-Dive Specification Card */}
          <div className="rounded-3xl border border-gold/30 bg-[#1F050C] p-7 sm:p-10 shadow-[0_20px_50px_rgba(15,2,6,0.7)] lg:col-span-7">
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-gold/15 pb-4">
              <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-champagne">
                <Icon size={18} className="text-gold" />
                <span>LAYER SPECIFICATION</span>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="hidden font-mono text-xs text-muted sm:inline">
                  Architecture Standard
                </span>
                <LayerTopology activeIndex={selectedLayer} />
              </div>
            </div>

            <h3 className="font-display text-2xl font-bold text-cream sm:text-3xl">
              {current.name.split(". ")[1]}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
              {current.summary}
            </p>

            <div className="mt-8 space-y-4 font-mono text-xs">
              <div className="rounded-2xl border border-gold/25 bg-gold/10 p-5">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-gold text-[0.65rem] mb-2">
                  <CheckCircle2 size={14} />
                  <span>What VORTEX Implements</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-cream leading-relaxed">
                  {current.vortexImplements}
                </p>
              </div>

              <div className="rounded-2xl border border-gold/15 bg-[#2D0812]/70 p-5">
                <div className="flex items-center gap-2 font-bold uppercase tracking-wider text-champagne text-[0.65rem] mb-2">
                  <ShieldCheck size={14} />
                  <span>What Client Infrastructure Owns</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-muted leading-relaxed">
                  {current.clientOwns}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

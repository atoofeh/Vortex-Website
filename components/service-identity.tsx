"use client";

import { useState } from "react";
import type { ServiceSlug } from "@/components/service-page";

type Layer = "experience" | "software" | "intelligence" | "data" | "infrastructure";

const layerLabels: Record<Layer, string> = {
  experience: "Experience",
  software: "Software",
  intelligence: "Intelligence",
  data: "Data",
  infrastructure: "Infrastructure",
};

const layerMap: Record<ServiceSlug, Layer[]> = {
  "artificial-intelligence": ["software", "intelligence", "data", "infrastructure"],
  "web-development": ["experience", "software", "data"],
  "mobile-development": ["experience", "software", "data", "infrastructure"],
  "enterprise-software": ["software", "data", "infrastructure"],
  infrastructure: ["infrastructure", "data", "software"],
  automation: ["software", "intelligence", "data"],
};

const nodeClass = "service-node border border-gold/25 bg-[#1f050c]/80 text-cream";

export function LayerSignature({ slug }: { slug: ServiceSlug }) {
  const active = new Set(layerMap[slug]);
  return (
    <div className="service-layer-signature" aria-label="Layers touched by this service">
      <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-muted">Touches the stack</span>
      <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-2">
        {(Object.keys(layerLabels) as Layer[]).map((layer, index) => (
          <span key={layer} className={`service-layer-chip ${active.has(layer) ? "is-active" : ""}`}>
            <i aria-hidden="true" />
            <span>{layerLabels[layer]}</span>
            {index < 4 && <b aria-hidden="true">/</b>}
          </span>
        ))}
      </div>
    </div>
  );
}

function Readout({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-gold/15 py-3 last:border-b-0">
      <span className="font-mono text-[0.6rem] uppercase tracking-[0.13em] text-muted">{label}</span>
      <span className="text-right text-sm text-champagne">{value}</span>
    </div>
  );
}

function AiArchitecture() {
  const nodes = ["User", "Gateway", "Identity / Policy", "Orchestrator"];
  return (
    <div className="service-identity service-identity--ai">
      <div className="service-identity__heading"><span>01 / intelligence path</span><span className="text-gold">private</span></div>
      <div className="service-ai-flow" aria-label="Private AI request path">
        <div className="service-ai-flow__spine">
          {nodes.map((node, index) => <div key={node} className={`${nodeClass} service-ai-node`}><span className="font-mono text-[0.58rem] text-gold">0{index + 1}</span>{node}</div>)}
        </div>
        <div className="service-ai-branches">
          {['Model', 'RAG', 'Tools', 'Internal APIs'].map((node) => <div key={node} className={`${nodeClass} service-ai-branch`}><span className="service-node-dot" />{node}</div>)}
        </div>
        <div className="service-ai-private">
          <span className="service-perimeter-label">VORTEX / controlled perimeter</span>
          <div className="grid gap-2 sm:grid-cols-2"><div className={nodeClass}>Private data</div><div className={nodeClass}>Audit / observability</div></div>
        </div>
      </div>
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">Requests move through identity, policy, orchestration and retrieval before they reach internal systems. The perimeter is part of the product.</p>
    </div>
  );
}

function InfrastructureTopology() {
  const nodes = ["Internet", "Edge", "Firewall", "Load balancing", "Compute cluster", "GPU nodes", "Storage", "Observability"];
  return (
    <div className="service-identity service-identity--infra">
      <div className="service-identity__heading"><span>05 / production topology</span><span className="text-gold">nominal</span></div>
      <div className="service-topology" aria-label="Infrastructure topology">
        <div className="service-topology__route" aria-hidden="true" />
        {nodes.map((node, index) => <div key={node} className="service-topology__row"><span className="service-topology__index">0{index + 1}</span><span className={`${nodeClass} service-topology__node`}>{node}</span><span className="service-topology__health"><i /> healthy</span></div>)}
      </div>
      <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">A living path from edge to compute. Health, traffic and redundancy remain visible after deployment.</p>
    </div>
  );
}

const mobileStates = [
  { label: "Onboarding", title: "A clear first run.", detail: "Identity, permissions and local state are established before the first task.", tags: ["Identity", "Local state"] },
  { label: "Offline", title: "Work does not stop at the edge.", detail: "Actions queue locally, preserve intent and reconcile when a connection returns.", tags: ["Queue", "Sync"] },
  { label: "Connected", title: "The product stays in motion.", detail: "API events, notifications and intelligent features arrive through one product system.", tags: ["API", "Events"] },
];

function MobileProduct() {
  const [active, setActive] = useState(0);
  const state = mobileStates[active];
  return (
    <div className="service-identity service-identity--mobile">
      <div className="service-identity__heading"><span>03 / application state</span><span className="text-gold">interactive</span></div>
      <div className="service-mobile-stage">
        <div className="service-phone" aria-label={`Mobile application preview: ${state.label}`}><div className="service-phone__camera" /><div className="service-phone__screen"><span className="font-mono text-[0.55rem] text-gold">VORTEX / {state.label.toUpperCase()}</span><h3 className="mt-12 font-display text-2xl leading-tight text-cream">{state.title}</h3><div className="mt-7 h-1.5 w-2/3 bg-gold/45" /><div className="mt-3 h-1.5 w-1/2 bg-gold/20" /><div className="mt-10 grid gap-2">{state.tags.map((tag) => <span key={tag} className="border border-gold/20 px-3 py-2 font-mono text-[0.58rem] uppercase text-champagne">{tag}</span>)}</div></div></div>
        <div className="service-mobile-copy"><p className="font-mono text-[0.62rem] uppercase tracking-[0.15em] text-gold">System state</p><p className="mt-4 text-lg leading-relaxed text-champagne">{state.detail}</p><div className="mt-7 flex flex-wrap gap-2">{mobileStates.map((item, index) => <button key={item.label} type="button" onClick={() => setActive(index)} aria-pressed={active === index} className={`focus-ring service-state-tab ${active === index ? "is-active" : ""}`}>{item.label}</button>)}</div></div>
      </div>
    </div>
  );
}

function EnterpriseWorkflow() {
  const nodes = ["Request", "Validation", "Approval", "Business logic", "Database", "Integration", "Audit"];
  return (
    <div className="service-identity service-identity--enterprise">
      <div className="service-identity__heading"><span>02 / operational workflow</span><span className="text-gold">traceable</span></div>
      <div className="service-workflow" aria-label="Enterprise request workflow">
        {nodes.map((node, index) => <div key={node} className="service-workflow__item"><span className="service-workflow__index">0{index + 1}</span><span className={`${nodeClass} service-workflow__node`}>{node}</span>{index < nodes.length - 1 && <span className="service-workflow__arrow" aria-hidden="true">→</span>}</div>)}
      </div>
      <div className="mt-8 grid gap-3 sm:grid-cols-3"><Readout label="State" value="Explicit" /><Readout label="Access" value="Role-aware" /><Readout label="Record" value="Auditable" /></div>
    </div>
  );
}

function AutomationFlow() {
  const nodes = ["Event", "Trigger", "Decision", "Action", "Verification", "Record"];
  return (
    <div className="service-identity service-identity--automation">
      <div className="service-identity__heading"><span>04 / event propagation</span><span className="text-gold">observed</span></div>
      <div className="service-event-flow" aria-label="Automation event flow">
        {nodes.map((node, index) => <div key={node} className="service-event-flow__item"><span className="service-event-flow__node"><i aria-hidden="true" />{node}</span>{index < nodes.length - 1 && <span className="service-event-flow__line" aria-hidden="true"><b /></span>}</div>)}
      </div>
      <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted">One signal becomes a verified outcome. Exceptions and ownership remain part of the path.</p>
    </div>
  );
}

function ServiceIdentityVisual({ slug }: { slug: ServiceSlug }) {
  switch (slug) {
    case "artificial-intelligence": return <AiArchitecture />;
    case "infrastructure": return <InfrastructureTopology />;
    case "mobile-development": return <MobileProduct />;
    case "enterprise-software": return <EnterpriseWorkflow />;
    case "automation": return <AutomationFlow />;
    case "web-development": return <div className="service-identity service-identity--web"><div className="service-identity__heading"><span>experience / system surface</span><span className="text-gold">responsive</span></div><div className="service-browser"><div className="service-browser__bar"><i /><i /><i /><span>vortex / interface</span></div><div className="service-browser__body"><span className="h-2 w-20 bg-gold/60" /><span className="mt-10 block max-w-xs font-display text-4xl leading-[0.9] text-cream">Space for the idea.</span><div className="mt-9 grid grid-cols-3 gap-2"><i /><i /><i /></div></div></div><p className="mt-5 text-sm leading-relaxed text-muted">A digital product is judged in the moment of use. Layout, performance and system behavior carry the argument.</p></div>;
  }
}

export function ServiceIdentity({ slug }: { slug: ServiceSlug }) {
  return <div className="service-identity-shell"><LayerSignature slug={slug} /><ServiceIdentityVisual slug={slug} /></div>;
}


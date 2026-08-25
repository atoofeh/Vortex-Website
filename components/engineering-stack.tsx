"use client";

import Link from "next/link";
import { ArrowRight, BrainCircuit, Code2, Database, Globe2, Layers3, Server, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";

const layers = [
  { key: "experience", label: "Experience", subtitle: "What people see and use.", items: ["Web experiences", "Mobile products", "Interactive interfaces", "Customer portals"], details: ["Interfaces and journeys", "Responsive product surfaces", "Motion and interaction", "Authenticated portals"], href: "/services/web-development", icon: Globe2 },
  { key: "software", label: "Software", subtitle: "The applications and platforms behind the interface.", items: ["Applications", "Enterprise platforms", "APIs", "Business logic"], details: ["Product applications", "Operational platforms", "Reliable service contracts", "The rules behind the work"], href: "/services/enterprise-software", icon: Code2 },
  { key: "intelligence", label: "Intelligence", subtitle: "Systems that understand, reason, and act.", items: ["AI systems", "Agents", "Automation", "Computer vision"], details: ["Private model systems", "Goal-oriented workflows", "Decision automation", "Visual understanding"], href: "/services/artificial-intelligence", icon: BrainCircuit },
  { key: "data", label: "Data", subtitle: "The information layer that gives systems context.", items: ["Databases", "Search", "Knowledge systems", "Analytics"], details: ["Structured foundations", "Fast retrieval", "Connected knowledge", "Operational insight"], href: "/services/enterprise-software", icon: Database },
  { key: "infrastructure", label: "Infrastructure", subtitle: "The production foundation beneath everything.", items: ["Private AI", "Cloud", "Compute", "Deployment"], details: ["Controlled AI environments", "Elastic production systems", "Dedicated compute", "Repeatable delivery"], href: "/services/infrastructure", icon: Server },
] as const;

function ArchitectureGeometry({ layer }: { layer: string }) {
  return (
    <div aria-hidden="true" className={`vortex-stack-geometry vortex-stack-geometry--${layer}`}>
      <svg viewBox="0 0 640 360" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-20 304C92 267 112 88 244 90C364 92 354 258 492 228C565 212 596 131 670 88" />
        <path d="M-14 332C119 296 145 136 249 137C358 139 374 290 515 255C575 240 609 180 667 135" />
        <path d="M86 0C157 76 160 188 258 200C355 211 416 151 474 0" />
        <path d="M274 55L274 307M184 179H590" />
        <circle cx="274" cy="179" r="38" />
        <circle cx="274" cy="179" r="5" />
        <circle cx="184" cy="179" r="3" />
        <circle cx="590" cy="179" r="3" />
      </svg>
    </div>
  );
}

export function EngineeringStack() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [activeLayer, setActiveLayer] = useState(0);
  const [previewLayer, setPreviewLayer] = useState<number | null>(null);
  const active = layers[activeLayer];
  const visibleLayerIndex = previewLayer ?? activeLayer;
  const visibleLayer = layers[visibleLayerIndex];
  const ActiveIcon = active.icon;

  return (
    <section id="architecture" className="section-wrap py-24 sm:py-36" aria-labelledby="engineering-stack-title">
      <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:items-center lg:gap-16">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <p className="eyebrow mb-5"><Layers3 aria-hidden="true" size={13} className="text-gold" />{t("architecture.eyebrow")}</p>
          <h2 id="engineering-stack-title" className="display max-w-xl text-4xl leading-[0.92] text-cream sm:text-6xl">The VORTEX Engineering Stack.</h2>
          <p className="mt-7 max-w-lg text-base leading-[1.8] text-muted">Technology is rarely one layer. Neither are we. VORTEX connects experience, software, intelligence, data, and infrastructure into one accountable system.</p>
          <div className="mt-10 flex items-center gap-3 border-t border-gold/15 pt-5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.14em] text-champagne"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_rgba(212,175,55,0.8)]" /> Five layers / one system</div>
        </motion.div>

        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.06 }} className="vortex-stack-console">
          <div className="vortex-stack-console__topline flex items-center justify-between font-mono text-[0.58rem] uppercase tracking-[0.16em] text-muted sm:text-[0.62rem]"><span>VORTEX / Engineering model</span><span className="text-gold">System status / connected</span></div>
          <div className="vortex-stack-console__header mt-5 flex items-end justify-between gap-5 border-b border-gold/20 pb-5">
            <div><p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-gold">Architecture / 01—05</p><p className="mt-2 text-sm text-champagne/75">One accountable system across every layer.</p></div>
            <span className="hidden font-mono text-[0.58rem] uppercase tracking-[0.16em] text-muted sm:block">Signal path / nominal</span>
          </div>

          <div className="vortex-stack-path relative mt-7" role="tablist" aria-label="VORTEX engineering layers">
            <span aria-hidden="true" className="vortex-stack-path__line" />
            <span aria-hidden="true" className="vortex-stack-signal" />
            <div className="vortex-stack-nodes relative grid grid-cols-1 gap-2 sm:grid-cols-5 sm:gap-1">
              {layers.map((layer, index) => {
                const Icon = layer.icon;
                const selected = index === activeLayer;
                const inspected = index === visibleLayerIndex;
                return (
                  <button key={layer.key} id={`engineering-layer-tab-${layer.key}`} type="button" role="tab" aria-label={`${layer.label} layer 0${index + 1}`} aria-selected={selected} aria-controls="engineering-layer-panel" onClick={() => setActiveLayer(index)} onMouseEnter={() => setPreviewLayer(index)} onMouseLeave={() => setPreviewLayer(null)} onFocus={() => setPreviewLayer(index)} onBlur={() => setPreviewLayer(null)} className={`focus-ring vortex-stack-node group ${inspected ? "is-inspected" : ""} ${selected ? "is-selected" : ""}`}>
                    <span className="vortex-stack-node__index">0{index + 1}</span>
                    <span className="vortex-stack-node__icon"><Icon aria-hidden="true" size={16} /></span>
                    <span className="vortex-stack-node__label">{layer.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <motion.div key={active.key} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} id="engineering-layer-panel" role="tabpanel" tabIndex={0} aria-labelledby={`engineering-layer-tab-${active.key}`} className="vortex-stack-console__body relative mt-8 grid gap-10 border-t border-gold/20 pt-8 md:grid-cols-[0.9fr_1.1fr] md:gap-12">
            <ArchitectureGeometry layer={visibleLayer.key} />
            <div className="relative">
              <div className="flex items-end gap-4"><span className="vortex-stack-number" aria-hidden="true">0{activeLayer + 1}</span><ActiveIcon aria-hidden="true" size={23} className="mb-2 text-gold" /></div>
              <p className="mt-2 font-mono text-[0.58rem] uppercase tracking-[0.16em] text-gold">Active layer / 0{activeLayer + 1}</p>
              <h3 className="mt-4 font-display text-3xl font-bold leading-none text-cream sm:text-5xl">{active.label}</h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted">{active.subtitle}</p>
              <Link href={active.href} className="focus-ring mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-champagne hover:text-cream">Explore {active.label.toLowerCase()} engineering <ArrowRight aria-hidden="true" size={14} /></Link>
            </div>
            <div className="relative">
              <div className="mb-2 flex items-center justify-between gap-3"><p className="font-mono text-[0.58rem] uppercase tracking-[0.16em] text-gold">Layer responsibility</p><span className="font-mono text-[0.56rem] uppercase tracking-[0.14em] text-muted">04 responsibilities</span></div>
              <ul className="vortex-stack-responsibilities">{active.items.map((item, index) => <li key={item} className="group"><span className="font-mono text-[0.6rem] text-gold/65">0{index + 1}</span><span className="min-w-0"><strong className="block font-medium text-cream/90">{item}</strong><small className="mt-1 block text-xs text-muted">{active.details[index]}</small></span><ArrowRight aria-hidden="true" size={13} className="ms-auto shrink-0 text-gold/55 transition-transform group-hover:translate-x-1 group-hover:text-gold" /></li>)}</ul>
              <div className="mt-5 flex items-center gap-3 font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted"><Sparkles aria-hidden="true" size={12} className="text-gold" /> Accountable at every layer</div>
            </div>
          </motion.div>

          <div className="vortex-stack-console__footer mt-7 flex flex-wrap items-center justify-between gap-3 border-t border-gold/15 pt-4 font-mono text-[0.56rem] uppercase tracking-[0.14em] text-muted"><span>Model revision / 05.24</span><span>Latency / 12ms</span><span className="text-gold/80">Ready for architecture</span></div>
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import Link from "next/link";
import { ArrowRight, BrainCircuit, Code2, Database, Globe2, Layers3, Server, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";

const layers = [
  { key: "experience", label: "Experience", subtitle: "What people see and use.", items: ["Web experiences", "Mobile products", "Interactive interfaces", "Customer portals"], href: "/services/web-development", icon: Globe2 },
  { key: "software", label: "Software", subtitle: "The applications and platforms behind the interface.", items: ["Applications", "Enterprise platforms", "APIs", "Business logic"], href: "/services/enterprise-software", icon: Code2 },
  { key: "intelligence", label: "Intelligence", subtitle: "Systems that understand, reason, and act.", items: ["AI systems", "Agents", "Automation", "Computer vision"], href: "/services/artificial-intelligence", icon: BrainCircuit },
  { key: "data", label: "Data", subtitle: "The information layer that gives systems context.", items: ["Databases", "Search", "Knowledge systems", "Analytics"], href: "/services/enterprise-software", icon: Database },
  { key: "infrastructure", label: "Infrastructure", subtitle: "The production foundation beneath everything.", items: ["Private AI", "Cloud", "Compute", "Deployment"], href: "/services/infrastructure", icon: Server },
] as const;

export function EngineeringStack() {
  const { t } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [activeLayer, setActiveLayer] = useState(0);
  const active = layers[activeLayer];
  const ActiveIcon = active.icon;

  return (
    <section id="architecture" className="section-wrap border-y border-gold/15 py-24 sm:py-36" aria-labelledby="engineering-stack-title">
      <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }}>
          <p className="eyebrow mb-4"><Layers3 aria-hidden="true" size={13} className="text-gold" />{t("architecture.eyebrow")}</p>
          <h2 id="engineering-stack-title" className="display max-w-xl text-4xl leading-[0.95] text-cream sm:text-6xl">The VORTEX Engineering Stack.</h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">Technology is rarely one layer. Neither are we. VORTEX connects experience, software, intelligence, data, and infrastructure into one accountable system.</p>
          <div className="mt-8 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.14em] text-champagne"><Sparkles aria-hidden="true" size={13} className="text-gold" /> One engineering partner across your technology stack.</div>
        </motion.div>

        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ delay: 0.06 }}>
          <div role="tablist" aria-label="VORTEX engineering layers" className="grid gap-2 sm:grid-cols-5">
            {layers.map((layer, index) => { const Icon = layer.icon; const selected = index === activeLayer; return <button key={layer.key} id={`engineering-layer-tab-${layer.key}`} type="button" role="tab" aria-selected={selected} aria-controls="engineering-layer-panel" onClick={() => setActiveLayer(index)} className={`focus-ring flex min-h-14 items-center gap-3 rounded-xl border p-3 text-left transition-all sm:min-h-0 sm:flex-col sm:items-start sm:justify-center ${selected ? "border-gold/50 bg-gold/15 text-cream" : "border-gold/15 bg-[#2D0812]/45 text-muted hover:border-gold/40 hover:text-cream"}`}><Icon aria-hidden="true" size={17} className={selected ? "text-gold" : "text-champagne/70"} /><span className="text-sm font-semibold">{layer.label}</span></button>; })}
          </div>
          <div id="engineering-layer-panel" role="tabpanel" tabIndex={0} aria-labelledby={`engineering-layer-tab-${active.key}`} className="mt-3 overflow-hidden rounded-2xl border border-gold/25 bg-[#1F050C]/75 p-6 shadow-[0_20px_50px_rgba(15,2,6,0.42)] sm:p-8">
            <div className="flex flex-wrap items-start justify-between gap-5"><div><p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold">Layer / 0{activeLayer + 1}</p><h3 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">{active.label}</h3><p className="mt-2 max-w-lg text-sm leading-relaxed text-muted">{active.subtitle}</p></div><div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><ActiveIcon aria-hidden="true" size={22} /></div></div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">{active.items.map((item) => <li key={item} className="flex gap-2 text-sm text-cream/85"><span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />{item}</li>)}</ul>
            <Link href={active.href} className="focus-ring mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-champagne hover:text-cream">Explore {active.label.toLowerCase()} engineering <ArrowRight aria-hidden="true" size={14} /></Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

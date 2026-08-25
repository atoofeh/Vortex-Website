"use client";

import Link from "next/link";
import { Activity, ArrowDown, ArrowRight, BrainCircuit, Check, CloudCog, Code2, Database, Gauge, Layers3, LockKeyhole, Network, Server, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

const layers = [
  { label: "Experience", descriptor: "How people enter the system.", detail: "Interfaces, journeys, interaction, accessibility, and the moments where a system becomes usable.", icon: Sparkles, href: "/services/web-development" },
  { label: "Software", descriptor: "How work becomes behavior.", detail: "Applications, workflows, business rules, APIs, identity, and the operational logic behind the experience.", icon: Code2, href: "/services/enterprise-software" },
  { label: "Intelligence", descriptor: "How systems reason and assist.", detail: "Private models, retrieval, agents, automation, evaluation, and governed decision support.", icon: BrainCircuit, href: "/services/artificial-intelligence" },
  { label: "Data", descriptor: "How information stays useful.", detail: "Storage, movement, quality, search, synchronization, analytics, and the boundaries that keep information trustworthy.", icon: Database, href: "/services/automation" },
  { label: "Infrastructure", descriptor: "Where the system operates.", detail: "Compute, deployment, networks, observability, security, and the production environments beneath every layer.", icon: Server, href: "/services/infrastructure" },
] as const;

const method = [
  ["Understand", "The organization, users, constraints, existing systems, and the outcome that matters.", Network],
  ["Architect", "Boundaries, components, integrations, security, data flow, and deployment decisions.", Layers3],
  ["Prototype", "Critical interactions and architecture assumptions before complexity becomes expensive.", Gauge],
  ["Engineer", "Modular, maintainable production software with the right ownership at every layer.", Code2],
  ["Validate", "Security, performance, usability, reliability, edge cases, and deployment behavior.", ShieldCheck],
  ["Deploy", "A controlled path into the environment where the system is meant to operate.", CloudCog],
  ["Operate & evolve", "Feedback, monitoring, optimization, maintenance, and the next useful change.", Activity],
] as const;

const principles = [
  ["Architecture before accumulation", "Complexity is designed intentionally rather than created accidentally through disconnected features.", Layers3],
  ["Ownership by design", "Organizations should understand and control their technology, data, infrastructure, and operational dependencies.", LockKeyhole],
  ["Security at every layer", "Identity, access, validation, isolation, secrets, and observability belong in the architecture from the beginning.", ShieldCheck],
  ["Systems, not screens", "The interface is one surface of a product. Backend systems, data, integrations, and operations receive equal attention.", Network],
  ["Performance is architecture", "Speed and efficiency are shaped by system boundaries, data movement, rendering, infrastructure, and operational choices.", Gauge],
  ["Observable by default", "Production systems should make behavior, errors, performance, and health visible enough to improve.", Activity],
  ["Built to evolve", "A useful system can absorb new requirements without requiring constant reconstruction.", Workflow],
] as const;

export function EngineeringOverview() {
  const reducedMotion = useReducedMotion();
  const [activeLayer, setActiveLayer] = useState(2);
  const currentLayer = layers[activeLayer];
  const CurrentIcon = currentLayer.icon;

  return (
    <main id="main-content" className="min-h-screen pt-32 sm:pt-44">
      <section className="section-wrap pb-24 sm:pb-36">
        <motion.div initial={reducedMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl">
          <p className="eyebrow mb-5"><Sparkles aria-hidden="true" size={13} className="text-gold" /> Engineering at VORTEX</p>
          <h1 className="display max-w-5xl text-[clamp(3.4rem,9vw,8.6rem)] leading-[0.86] text-cream">Technology is rarely one layer. Neither are we.</h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">VORTEX engineers the experience, software, intelligence, data, and infrastructure behind systems that need to work together in production.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#contact" className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink">Start a project <ArrowRight aria-hidden="true" size={14} /></Link>
            <Link href="/#build" className="focus-ring inline-flex items-center gap-2 rounded-full border border-gold/30 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-champagne hover:border-gold hover:text-cream">Explore capabilities <ArrowDown aria-hidden="true" size={14} className="-rotate-90" /></Link>
          </div>
        </motion.div>
      </section>

      <section className="section-wrap border-y border-gold/15 py-24 sm:py-36" aria-labelledby="engineering-stack-title">
        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow mb-4"><Network aria-hidden="true" size={13} className="text-gold" /> One connected system</p>
            <h2 id="engineering-stack-title" className="display max-w-xl text-4xl leading-[0.95] text-cream sm:text-6xl">Every layer has a job. Every connection has a consequence.</h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">Select a layer to see what it contributes. The architecture is the product—not a diagram added after the fact.</p>
          </div>
          <div>
            <div role="tablist" aria-label="VORTEX engineering layers" className="grid gap-2 sm:grid-cols-5">
              {layers.map((layer, index) => { const Icon = layer.icon; const selected = index === activeLayer; return <button key={layer.label} type="button" role="tab" aria-selected={selected} aria-controls="engineering-layer-panel" onClick={() => setActiveLayer(index)} className={`focus-ring rounded-2xl border p-4 text-start transition-all sm:min-h-36 ${selected ? "border-gold/50 bg-gold/15 text-cream shadow-[0_14px_35px_rgba(212,175,55,0.12)]" : "border-gold/15 bg-[#2D0812]/45 text-muted hover:border-gold/40 hover:text-cream"}`}><Icon aria-hidden="true" size={18} className={selected ? "text-gold" : "text-champagne/70"} /><span className="mt-5 block text-sm font-semibold">{layer.label}</span><span className="mt-2 block text-xs leading-relaxed text-muted">{layer.descriptor}</span></button>; })}
            </div>
            <motion.div key={currentLayer.label} initial={reducedMotion ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} id="engineering-layer-panel" role="tabpanel" tabIndex={0} className="mt-3 rounded-2xl border border-gold/25 bg-[#1F050C]/80 p-6 shadow-[0_20px_50px_rgba(15,2,6,0.42)] sm:p-8">
              <div className="flex flex-wrap items-start justify-between gap-5"><div><p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold">Layer / 0{activeLayer + 1}</p><h3 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">{currentLayer.label}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{currentLayer.detail}</p></div><div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><CurrentIcon aria-hidden="true" size={22} /></div></div>
              <Link href={currentLayer.href} className="focus-ring mt-7 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-champagne hover:text-cream">Explore {currentLayer.label.toLowerCase()} engineering <ArrowRight aria-hidden="true" size={14} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-wrap py-24 sm:py-36" aria-labelledby="engineering-method-title">
        <div className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><Workflow aria-hidden="true" size={13} className="text-gold" /> Operating model</p><h2 id="engineering-method-title" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">How VORTEX engineers.</h2><p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">A controlled path from the real operating environment to a system that can be understood, deployed, and improved.</p></div>
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">{method.map(([title, description, Icon], index) => <article key={title} className="group relative rounded-2xl border border-gold/15 bg-[#2D0812]/45 p-6 transition-colors hover:border-gold/35"><div className="flex items-center justify-between"><Icon aria-hidden="true" size={19} className="text-gold" /><span className="font-mono text-xs text-gold">0{index + 1}</span></div><h3 className="mt-7 font-display text-xl font-bold text-cream">{title}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{description}</p></article>)}</div>
      </section>

      <section className="section-wrap border-y border-gold/15 py-24 sm:py-36" aria-labelledby="engineering-principles-title">
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"><div><p className="eyebrow mb-4"><ShieldCheck aria-hidden="true" size={13} className="text-gold" /> Engineering principles</p><h2 id="engineering-principles-title" className="display max-w-xl text-4xl leading-[0.95] text-cream sm:text-6xl">Architecture before accumulation.</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-muted">The decisions that shape a system matter as much as the features it exposes.</p></div><div className="grid gap-3 sm:grid-cols-2">{principles.map(([title, description, Icon]) => <div key={title} className="flex gap-4 rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-5"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><Icon aria-hidden="true" size={18} /></div><div><h3 className="font-display text-lg font-bold text-cream">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{description}</p></div></div>)}</div></div>
      </section>

      <section className="section-wrap py-24 sm:py-36"><div className="rounded-[2rem] border border-gold/25 bg-[#1F050C] p-7 sm:p-12"><p className="eyebrow mb-4"><Server aria-hidden="true" size={13} className="text-gold" /> The VORTEX standard</p><h2 className="display max-w-4xl text-4xl leading-[0.95] text-cream sm:text-6xl">Designed for ownership. Built for the environment it has to survive.</h2><div className="mt-8 grid gap-3 border-t border-gold/15 pt-7 sm:grid-cols-3"><p className="flex gap-2 text-sm leading-relaxed text-muted"><Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-gold" />Clear boundaries and accountable layers.</p><p className="flex gap-2 text-sm leading-relaxed text-muted"><Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-gold" />Operational visibility after launch.</p><p className="flex gap-2 text-sm leading-relaxed text-muted"><Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-gold" />A foundation that can change without collapse.</p></div></div></section>
    </main>
  );
}

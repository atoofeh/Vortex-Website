"use client";

import Link from "next/link";
import {
  Activity,
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  CloudCog,
  Code2,
  Database,
  Gauge,
  Globe2,
  KeyRound,
  Layers3,
  LockKeyhole,
  Network,
  Server,
  Smartphone,
  Sparkles,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import type { ServiceSlug } from "@/components/service-page";

type IconComponent = typeof BrainCircuit;

type CapabilityDefinition = {
  eyebrow: string;
  title: string;
  description: string;
  service: string;
  cta: string;
  icon: IconComponent;
  buildTitle: string;
  buildDescription: string;
  builds: { title: string; description: string; detail: string }[];
  flowTitle: string;
  flowDescription: string;
  flow: { label: string; detail: string; icon: IconComponent }[];
  principleTitle: string;
  principleDescription: string;
  principles: { title: string; description: string; icon: IconComponent }[];
  related: [string, string][];
};

const capabilityPages: Record<Exclude<ServiceSlug, "web-development">, CapabilityDefinition> = {
  "artificial-intelligence": {
    eyebrow: "PRIVATE AI / 01",
    title: "Your intelligence. Your infrastructure. Your control.",
    description: "Deploy powerful AI inside infrastructure you control, connected securely to the information and systems your organization depends on.",
    service: "AI System Development",
    cta: "Discuss an AI System",
    icon: BrainCircuit,
    buildTitle: "Private AI engineered around the problem.",
    buildDescription: "The objective is not to add a model to a diagram. It is to create a useful, governed intelligence layer that works inside the environment where the business operates.",
    builds: [
      ["Private LLM Platforms", "AI models deployed inside customer-controlled environments.", "Model serving, internal APIs, access controls, and operational ownership."],
      ["Enterprise RAG", "Secure retrieval systems connecting AI with internal information.", "Documents, databases, policies, knowledge stores, search, citations, and permissions."],
      ["AI Compute Infrastructure", "GPU and inference environments designed for model workloads.", "Dedicated compute, scheduling, storage, networking, and capacity planning."],
      ["Model Serving", "Reliable internal APIs for AI inference and application use.", "Versioning, routing, observability, fallbacks, and predictable access patterns."],
      ["Knowledge Systems", "AI connected to documents, databases, and organizational knowledge.", "Ingestion, indexing, retrieval, evaluation, and governed knowledge access."],
      ["Governance & Access", "Controlled interfaces between users, applications, models, and data.", "Authentication, authorization, logging, usage controls, and model policies."],
    ].map(([title, description, detail]) => ({ title, description, detail })),
    flowTitle: "A private intelligence perimeter.",
    flowDescription: "AI becomes useful when it can reach the right information and take action under the right controls.",
    flow: [
      { label: "Employees / Applications", detail: "People and products access intelligence through deliberate interfaces.", icon: Globe2 },
      { label: "AI Gateway", detail: "A controlled entry point for requests, routing, and model access.", icon: Network },
      { label: "Auth / Access / Policies", detail: "Identity, permissions, auditability, and usage boundaries.", icon: KeyRound },
      { label: "AI Models", detail: "Models served through internal APIs and governed environments.", icon: BrainCircuit },
      { label: "RAG / Search / Knowledge", detail: "Retrieval systems connect intelligence to organizational context.", icon: Database },
      { label: "Enterprise Data Sources", detail: "Documents, databases, systems, and knowledge stores.", icon: Layers3 },
      { label: "Private Compute Infrastructure", detail: "The controlled foundation where the intelligence runs.", icon: Server },
    ],
    principleTitle: "AI where it creates value. Engineering everywhere else.",
    principleDescription: "We begin with the problem, not the model. The right system may use rules, software, automation, machine learning, generative AI, agents, or a combination.",
    principles: [
      { title: "Ownership", description: "Keep models, data, access, and operating decisions inside the environment that matters.", icon: LockKeyhole },
      { title: "Useful context", description: "Connect intelligence to the information and workflows that make answers actionable.", icon: Database },
      { title: "Controlled action", description: "Give systems the permissions, policies, and audit trails required for real work.", icon: KeyRound },
    ],
    related: [["/services/infrastructure", "Private Infrastructure"], ["/services/automation", "Automation"], ["/services/enterprise-software", "Enterprise Platforms"], ["/services/web-development", "Digital Experiences"]],
  },
  "enterprise-software": {
    eyebrow: "SOFTWARE ENGINEERING / 02",
    title: "Software engineered around how your organization actually operates.",
    description: "When off-the-shelf software cannot reflect your workflows, permissions, data, integrations, and processes, VORTEX engineers systems that can.",
    service: "Enterprise Platform",
    cta: "Discuss Your Platform",
    icon: Layers3,
    buildTitle: "Platforms that fit the operation.",
    buildDescription: "Enterprise software should clarify how an organization works—not force people to work around the software.",
    builds: [
      ["Internal Operations Platforms", "Software used to manage operational processes.", "Workspaces, queues, requests, approvals, status, and operational visibility."],
      ["Management Platforms", "Dashboards, controls, reporting, and decision-support environments.", "Role-aware views, metrics, permissions, workflows, and accountable action."],
      ["Customer Platforms", "Secure customer accounts and service environments.", "Self-service, documents, communication, requests, and connected service operations."],
      ["Employee Platforms", "Internal workflows, information, requests, and resources.", "Identity, access, knowledge, collaboration, approvals, and administration."],
      ["Workflow Systems", "Software built around organizational processes.", "State, rules, handoffs, notifications, exceptions, and audit history."],
      ["Data Platforms", "Centralized environments connecting fragmented operational information.", "Data models, search, reporting, integrations, and reliable information flow."],
    ].map(([title, description, detail]) => ({ title, description, detail })),
    flowTitle: "More than screens and dashboards.",
    flowDescription: "A durable platform connects people, application logic, data, workflows, existing systems, and the infrastructure that operates it.",
    flow: [
      { label: "Employees / Customers / Partners", detail: "The people and roles the platform is designed to serve.", icon: Globe2 },
      { label: "Digital Platform", detail: "The experience where work, information, and decisions come together.", icon: Layers3 },
      { label: "Business Logic", detail: "Rules, permissions, states, calculations, and workflows.", icon: Workflow },
      { label: "Application APIs", detail: "Interfaces that connect product surfaces and system behavior.", icon: Code2 },
      { label: "Data / Services / Workflows", detail: "The operational information and processes beneath the experience.", icon: Database },
      { label: "ERP / CRM / Legacy / External APIs", detail: "Existing systems are integrated rather than ignored.", icon: Network },
      { label: "Cloud / Private Infrastructure", detail: "Deployment and operations for the system in production.", icon: Server },
    ],
    principleTitle: "Architecture before accumulation.",
    principleDescription: "We shape the information model, permissions, integrations, and operating logic before adding surface area. That keeps the platform understandable as it grows.",
    principles: [
      { title: "Operational fit", description: "Design around real roles, processes, decisions, exceptions, and responsibilities.", icon: Workflow },
      { title: "Integration thinking", description: "Connect the systems already carrying important business information.", icon: Network },
      { title: "Production ownership", description: "Build for security, observability, deployment, maintenance, and evolution.", icon: Server },
    ],
    related: [["/services/web-development", "Digital Experiences"], ["/services/artificial-intelligence", "Intelligent Software"], ["/services/automation", "Automation"], ["/services/infrastructure", "Infrastructure"]],
  },
  "mobile-development": {
    eyebrow: "MOBILE ENGINEERING / 03",
    title: "Mobile products engineered beyond the screen.",
    description: "VORTEX designs and engineers mobile products as part of a complete system—connected to application logic, secure APIs, data, integrations, and production infrastructure.",
    service: "Mobile Application",
    cta: "Build a Mobile Product",
    icon: Smartphone,
    buildTitle: "Mobile products for real environments.",
    buildDescription: "The mobile interface is one touchpoint in a wider product ecosystem. We engineer the paths around it too.",
    builds: [
      ["Consumer Apps", "Digital products designed for external users and customers.", "Onboarding, accounts, content, commerce, notifications, and product analytics."],
      ["Enterprise Apps", "Internal mobile environments for organizations.", "Role-aware workflows, approvals, information access, and secure operations."],
      ["Field Applications", "Apps for employees operating outside traditional offices.", "Offline-aware flows, location, capture, synchronization, and task management."],
      ["Connected Applications", "Mobile interfaces connected to devices, machines, APIs, or sensors.", "Events, status, control surfaces, telemetry, and dependable synchronization."],
      ["Real-Time Applications", "Tracking, messaging, collaboration, communication, and monitoring.", "Live updates, presence, alerts, notifications, and state management."],
      ["AI-Enabled Applications", "Mobile products connected to intelligent systems when useful.", "Assistants, search, recommendations, document workflows, and private AI APIs."],
    ].map(([title, description, detail]) => ({ title, description, detail })),
    flowTitle: "A mobile product is a system.",
    flowDescription: "The architecture follows the product: experience, logic, APIs, identity, data, integrations, notifications, and infrastructure move together.",
    flow: [
      { label: "Mobile Experience", detail: "The interface, interaction system, and device-aware experience.", icon: Smartphone },
      { label: "Application Logic", detail: "Product behavior, state, rules, and workflow decisions.", icon: Code2 },
      { label: "Backend APIs", detail: "Secure interfaces connecting the product to its services.", icon: Network },
      { label: "Authentication", detail: "Identity, sessions, permissions, and account ownership.", icon: KeyRound },
      { label: "Databases", detail: "Reliable storage, synchronization, search, and analytics.", icon: Database },
      { label: "Integrations / Notifications", detail: "External systems, messaging, events, and operational signals.", icon: Activity },
      { label: "Infrastructure", detail: "Deployment, monitoring, scaling, and production operations.", icon: Server },
    ],
    principleTitle: "The architecture follows the product.",
    principleDescription: "Native iOS, native Android, cross-platform, progressive web, or hybrid approaches are selected around the product requirements—not framework fashion.",
    principles: [
      { title: "Contextual experience", description: "Design for the device, environment, connectivity, and moment in which work happens.", icon: Smartphone },
      { title: "Secure connection", description: "Treat identity, APIs, data, and synchronization as part of the mobile experience.", icon: LockKeyhole },
      { title: "Evolving product", description: "Build a foundation that can support new workflows, surfaces, and capabilities.", icon: Layers3 },
    ],
    related: [["/services/web-development", "Digital Experiences"], ["/services/enterprise-software", "Enterprise Platforms"], ["/services/artificial-intelligence", "AI Systems"], ["/services/infrastructure", "Infrastructure"]],
  },
  automation: {
    eyebrow: "AUTOMATION & INTEGRATION / 04",
    title: "Connect systems. Remove friction. Automate the repetition.",
    description: "VORTEX engineers automated workflows connecting people, software, information, and intelligent systems across the operation.",
    service: "Intelligent Automation",
    cta: "Automate a Workflow",
    icon: Workflow,
    buildTitle: "Orchestration for the systems you already have.",
    buildDescription: "Your business does not start from a blank canvas. Neither should your technology. We connect the tools, information, and people already carrying the work.",
    builds: [
      ["Workflow Automation", "Coordinate recurring business processes automatically.", "Triggers, state, routing, approvals, exceptions, notifications, and audit history."],
      ["System-to-System Automation", "Connect applications that do not naturally communicate.", "APIs, webhooks, adapters, synchronization, validation, and resilient retries."],
      ["Document Automation", "Extract, classify, process, route, and store information.", "Document intelligence, structured outputs, review paths, and system updates."],
      ["Data Automation", "Move, validate, synchronize, clean, and transform data.", "Pipelines, mappings, quality checks, reconciliation, and operational visibility."],
      ["AI Automation", "Introduce intelligent analysis and decision-making where it helps.", "Understand, analyze, decide, act, and verify—inside a governed workflow."],
      ["Communication Automation", "Trigger notifications, emails, alerts, and actions.", "Event-driven communication connected to real business states and ownership."],
    ].map(([title, description, detail]) => ({ title, description, detail })),
    flowTitle: "An automation layer between signals and outcomes.",
    flowDescription: "The work is not just a trigger and an action. It is the validation, transformation, routing, analysis, approval, and verification in between.",
    flow: [
      { label: "Email / CRM / ERP / Website", detail: "The systems and channels where operational signals begin.", icon: Globe2 },
      { label: "VORTEX Automation Layer", detail: "An orchestration layer that coordinates the work across systems.", icon: Workflow },
      { label: "Validate / Transform / Route", detail: "Normalize information and send it to the right next step.", icon: Code2 },
      { label: "Analyze / Approve / Trigger", detail: "Apply rules, intelligence, ownership, and actions.", icon: BrainCircuit },
      { label: "Business Systems / People / Outcomes", detail: "Deliver the result where work and decisions actually happen.", icon: Layers3 },
    ],
    principleTitle: "Automation with an accountable path.",
    principleDescription: "Traditional automation may follow event → rule → action. AI-enabled automation can add understand → analyze → decide → act → verify, with human control where it belongs.",
    principles: [
      { title: "Less friction", description: "Remove repetitive handoffs so people can focus on decisions and exceptions.", icon: Gauge },
      { title: "Connected systems", description: "Treat APIs, data quality, events, and ownership as engineering concerns.", icon: Network },
      { title: "Visible outcomes", description: "Make workflow state, failure paths, and operational results understandable.", icon: Activity },
    ],
    related: [["/services/artificial-intelligence", "Intelligent Software"], ["/services/enterprise-software", "Enterprise Platforms"], ["/services/infrastructure", "Infrastructure"], ["/services/web-development", "Digital Experiences"]],
  },
  infrastructure: {
    eyebrow: "INFRASTRUCTURE / 05",
    title: "Production foundations for systems that matter.",
    description: "VORTEX designs cloud, private, and hybrid infrastructure for applications, AI systems, data platforms, and the operational realities around them.",
    service: "Private Infrastructure",
    cta: "Discuss Your Infrastructure",
    icon: Server,
    buildTitle: "Infrastructure with ownership built in.",
    buildDescription: "Infrastructure is not a commodity layer beneath the work. It shapes control, reliability, deployment, performance, security, and the ability to evolve.",
    builds: [
      ["Cloud Architecture", "Cloud foundations shaped around the system and its operating requirements.", "Networking, compute, storage, identity, environments, cost awareness, and resilience."],
      ["Private Infrastructure", "Controlled environments for sensitive software, data, and AI workloads.", "On-premise, isolated, hybrid, and customer-controlled deployment patterns."],
      ["Application Deployment", "Move applications and services into production with discipline.", "Containers, release processes, environment configuration, rollback, and operations."],
      ["DevOps & CI/CD", "Reliable paths from engineering change to production release.", "Automation, versioning, testing, deployment gates, and repeatable environments."],
      ["Compute & AI Workloads", "Compute environments designed for demanding software and model workloads.", "GPU infrastructure, inference, scheduling, capacity, storage, and networking."],
      ["Monitoring & Operations", "Understand what the system is doing after it launches.", "Logs, metrics, alerts, health, incident signals, and operational feedback."],
    ].map(([title, description, detail]) => ({ title, description, detail })),
    flowTitle: "From deployment topology to operating reality.",
    flowDescription: "Good infrastructure makes the system observable, deployable, secure, and ready for the next requirement.",
    flow: [
      { label: "Applications / Users", detail: "The products, teams, and workloads the infrastructure serves.", icon: Globe2 },
      { label: "Identity / Network / Access", detail: "Boundaries, routing, identity, and controlled entry points.", icon: LockKeyhole },
      { label: "Deployment Platform", detail: "Repeatable environments and release paths for production systems.", icon: CloudCog },
      { label: "Containers / Services", detail: "Runnable application components with clear operational behavior.", icon: Layers3 },
      { label: "Observability", detail: "Logs, metrics, alerts, health, and operational feedback.", icon: Activity },
      { label: "Private Compute / Cloud", detail: "The compute, storage, and network foundation beneath the system.", icon: Server },
    ],
    principleTitle: "Security should be part of architecture.",
    principleDescription: "Authentication, authorization, encryption, secrets, isolation, secure APIs, validation, logging, backups, and access control are considered throughout the system—not before launch.",
    principles: [
      { title: "Control", description: "Choose where data, workloads, models, and operational decisions live.", icon: LockKeyhole },
      { title: "Visibility", description: "Build the feedback loops required to understand and improve production behavior.", icon: Activity },
      { title: "Repeatability", description: "Make environments, releases, and operations easier to reason about and maintain.", icon: CloudCog },
    ],
    related: [["/services/artificial-intelligence", "Private AI"], ["/services/enterprise-software", "Enterprise Platforms"], ["/services/automation", "Automation"], ["/services/web-development", "Digital Experiences"]],
  },
};

const fadeUp = (reducedMotion: boolean | null, delay = 0) => ({
  initial: reducedMotion ? false : { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.14 },
  transition: { duration: 0.45, delay },
});

export function CapabilityPage({ slug }: { slug: Exclude<ServiceSlug, "web-development"> }) {
  const page = capabilityPages[slug];
  const reducedMotion = useReducedMotion();
  const [activeFlow, setActiveFlow] = useState(0);
  const ActiveIcon = page.icon;
  const active = page.flow[activeFlow];
  const ActiveFlowIcon = active.icon;

  return (
    <main id="main-content" className="min-h-screen pt-32 sm:pt-44">
      <section className="relative overflow-hidden pb-24 sm:pb-36"><div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(212,175,55,0.12),transparent_30rem)]" /><div className="section-wrap relative"><Link href="/#build" className="focus-ring inline-flex items-center gap-2 rounded-sm font-mono text-xs uppercase tracking-wider text-muted hover:text-champagne"><ArrowDown aria-hidden="true" size={14} className="rotate-90" /> Explore capabilities</Link><div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"><motion.div {...fadeUp(reducedMotion)}><p className="eyebrow mb-5"><ActiveIcon aria-hidden="true" size={13} className="text-gold" /> {page.eyebrow}</p><h1 className="display max-w-5xl text-[clamp(3rem,8vw,7.2rem)] leading-[0.88] text-cream">{page.title}</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{page.description}</p><Link href={`/?service=${encodeURIComponent(page.service)}#contact`} className="focus-ring mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:brightness-110">{page.cta}<ArrowRight aria-hidden="true" size={14} /></Link></motion.div><motion.div {...fadeUp(reducedMotion, 0.08)} className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-[#2D0812]/55 p-5 shadow-[0_22px_60px_rgba(15,2,6,0.46)] sm:p-7"><div aria-hidden="true" className="absolute -end-20 -top-20 h-56 w-56 rounded-full border border-gold/20 bg-gold/5 blur-sm" /><div className="relative space-y-2"><div className="mb-5 flex items-center justify-between border-b border-gold/15 pb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted"><span>{page.eyebrow.split(" /")[0]} system</span><span className="text-gold">Operational</span></div>{page.flow.slice(0, 5).map((layer, index) => { const Icon = layer.icon; return <div key={layer.label} className="relative"><div className={`flex items-center gap-3 rounded-2xl border p-4 ${index === 0 ? "border-gold/40 bg-gold/10" : "border-gold/15 bg-[#1F050C]/60"}`}><Icon aria-hidden="true" size={17} className="shrink-0 text-gold" /><span className="text-sm font-bold uppercase tracking-[0.1em] text-cream">{layer.label}</span><span className="ms-auto font-mono text-[0.6rem] text-muted">0{index + 1}</span></div>{index < Math.min(page.flow.length, 5) - 1 && <div className="flex h-7 items-center justify-center text-gold/60"><ArrowDown aria-hidden="true" size={14} /></div>}</div>; })}<div className="mt-5 border-t border-gold/15 pt-4 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-champagne">Architecture · engineering · integration · deployment</div></div></motion.div></div></div></section>

      <section className="section-wrap border-y border-gold/15 py-24 sm:py-36" aria-labelledby="capability-build-title"><motion.div {...fadeUp(reducedMotion)} className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><Layers3 aria-hidden="true" size={13} className="text-gold" /> What we engineer</p><h2 id="capability-build-title" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{page.buildTitle}</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{page.buildDescription}</p></motion.div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">{page.builds.map((item, index) => <motion.article key={item.title} {...fadeUp(reducedMotion, index * 0.035)} className="group relative flex min-h-[18rem] flex-col overflow-hidden rounded-[1.5rem] border border-gold/20 bg-[#2D0812]/50 p-6 transition-all hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_20px_45px_rgba(15,2,6,0.42)]"><div aria-hidden="true" className="absolute -end-10 -top-10 h-28 w-28 rounded-full border border-gold/20 transition-transform duration-500 group-hover:scale-150" /><span className="relative font-mono text-[0.62rem] text-gold">0{index + 1} / 0{page.builds.length}</span><h3 className="relative mt-7 font-display text-xl font-bold leading-tight text-cream">{item.title}</h3><p className="relative mt-3 text-sm leading-relaxed text-muted">{item.description}</p><p className="relative mt-auto border-t border-gold/15 pt-4 text-xs leading-relaxed text-cream/75">{item.detail}</p></motion.article>)}</div></section>

      <section className="relative overflow-hidden py-24 sm:py-36" aria-labelledby="capability-architecture-title"><div className="section-wrap"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"><motion.div {...fadeUp(reducedMotion)}><p className="eyebrow mb-4"><Network aria-hidden="true" size={13} className="text-gold" /> Architecture visual</p><h2 id="capability-architecture-title" className="display max-w-xl text-4xl leading-[0.95] text-cream sm:text-6xl">{page.flowTitle}</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{page.flowDescription}</p><p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-champagne">Select a layer to inspect the system</p></motion.div><motion.div {...fadeUp(reducedMotion, 0.08)}><div role="tablist" aria-label={`${page.eyebrow} architecture layers`} className="grid gap-2 sm:grid-cols-2">{page.flow.map((layer, index) => { const Icon = layer.icon; const selected = index === activeFlow; return <button key={layer.label} id={`capability-flow-tab-${index}`} type="button" role="tab" aria-selected={selected} aria-controls="capability-flow-panel" onClick={() => setActiveFlow(index)} className={`focus-ring flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${selected ? "border-gold/50 bg-gold/15 text-cream" : "border-gold/15 bg-[#2D0812]/45 text-muted hover:border-gold/40 hover:text-cream"}`}><Icon aria-hidden="true" size={17} className={selected ? "text-gold" : "text-champagne/70"} /><span className="text-sm font-semibold">{layer.label}</span></button>; })}</div><div id="capability-flow-panel" role="tabpanel" tabIndex={0} aria-labelledby={`capability-flow-tab-${activeFlow}`} className="mt-3 rounded-2xl border border-gold/25 bg-[#1F050C]/75 p-6 shadow-[0_20px_50px_rgba(15,2,6,0.42)] sm:p-8"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold">Layer / 0{activeFlow + 1}</p><h3 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">{active.label}</h3><p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">{active.detail}</p></div><div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><ActiveFlowIcon aria-hidden="true" size={22} /></div></div></div></motion.div></div></div></section>

      <section className="section-wrap border-y border-gold/15 py-24 sm:py-36" aria-labelledby="engineering-principles"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><motion.div {...fadeUp(reducedMotion)}><p className="eyebrow mb-4"><Sparkles aria-hidden="true" size={13} className="text-gold" /> Engineering principle</p><h2 id="engineering-principles" className="display max-w-xl text-4xl leading-[0.95] text-cream sm:text-6xl">{page.principleTitle}</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{page.principleDescription}</p></motion.div><div className="grid gap-3">{page.principles.map(({ title, description, icon: Icon }, index) => <motion.div key={title} {...fadeUp(reducedMotion, index * 0.06)} className="flex gap-4 rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-5 sm:p-6"><div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><Icon aria-hidden="true" size={18} /></div><div><h3 className="font-display text-xl font-bold text-cream">{title}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{description}</p></div></motion.div>)}</div></div></section>

      <section className="section-wrap py-20 sm:py-28" aria-labelledby="related-capabilities"><div className="flex flex-wrap items-center justify-between gap-5 border-y border-gold/15 py-7"><div><p className="font-mono text-xs uppercase tracking-[0.14em] text-muted">Related engineering layers</p><h2 id="related-capabilities" className="mt-2 font-display text-2xl font-bold text-cream">Built across the stack.</h2></div><div className="flex flex-wrap gap-2">{page.related.map(([href, label]) => <Link key={href} href={href} className="focus-ring rounded-full border border-gold/20 px-3 py-2 text-xs text-champagne hover:border-gold/50 hover:text-cream">{label}</Link>)}</div></div></section>

      <section id="contact" className="section-wrap pb-16 pt-0 sm:pb-24"><div className="relative isolate overflow-hidden rounded-[2.5rem] border border-gold/30 bg-[#1F050C] px-6 py-16 text-center sm:px-12 sm:py-24"><div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.2),transparent_60%),linear-gradient(135deg,rgba(229,195,120,0.05),transparent_40%,rgba(92,20,40,0.3))]" /><div className="relative z-10"><p className="eyebrow mb-4 justify-center"><Sparkles aria-hidden="true" size={13} className="text-gold" /> Build the system</p><h2 className="display mx-auto max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] text-cream">From architecture to production.</h2><p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">Tell us what you are building. We will help define the right architecture across the layers that matter.</p><Link href={`/?service=${encodeURIComponent(page.service)}#contact`} className="focus-ring mt-9 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-8 py-4 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:brightness-110">{page.cta}<ArrowRight aria-hidden="true" size={14} /></Link></div></div></section>
    </main>
  );
}

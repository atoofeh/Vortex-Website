"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  BrainCircuit,
  Building2,
  Check,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  LayoutDashboard,
  Monitor,
  MousePointer2,
  Palette,
  PanelTop,
  PlugZap,
  Rocket,
  Server,
  ShoppingCart,
  Smartphone,
  Sparkles,
  Tablet,
  UsersRound,
  Workflow,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { useLanguage } from "@/components/language-provider";
import { WebDevelopmentArabic } from "@/components/web-development-arabic";

type IconComponent = typeof Globe2;

const buildTypes: { title: string; description: string; detail: string; icon: IconComponent }[] = [
  {
    title: "Corporate Websites",
    description: "Premium digital identities for companies whose online presence should reflect the quality of their business.",
    detail: "Brand presentation, responsive systems, SEO-ready architecture, CMS integration, analytics, accessibility, and conversion structure.",
    icon: Building2,
  },
  {
    title: "Interactive Experiences",
    description: "Visually ambitious websites for brands that need more than conventional layouts and static transitions.",
    detail: "Advanced motion, scroll-led storytelling, WebGL, Three.js, 3D systems, interaction design, and controlled depth.",
    icon: MousePointer2,
  },
  {
    title: "Web Applications",
    description: "Production-grade applications that turn business workflows into clear, dependable digital tools.",
    detail: "Authentication, accounts, roles, databases, APIs, dashboards, real-time systems, payments, and administration.",
    icon: LayoutDashboard,
  },
  {
    title: "Customer Portals",
    description: "Secure digital environments connecting a business with customers, employees, suppliers, or partners.",
    detail: "Secure access, account management, documents, analytics, messaging, service operations, and internal integrations.",
    icon: UsersRound,
  },
  {
    title: "E-Commerce Platforms",
    description: "Digital commerce systems engineered around the product, the customer journey, and the operation behind it.",
    detail: "Product experiences, checkout, payment gateways, inventory, customer accounts, analytics, and automation.",
    icon: ShoppingCart,
  },
  {
    title: "Landing Experiences",
    description: "High-impact digital experiences for launches, campaigns, events, new services, and lead generation.",
    detail: "Fast delivery, clear conversion paths, responsive interaction, campaign-ready content, and measurable journeys.",
    icon: Rocket,
  },
  {
    title: "Internal Business Platforms",
    description: "Focused tools that give teams a better way to manage operations, information, and decisions.",
    detail: "Role-aware workspaces, dashboards, workflows, search, approvals, reporting, and enterprise system connections.",
    icon: PanelTop,
  },
  {
    title: "AI-Powered Web Applications",
    description: "Interfaces that use intelligence when it creates real value for the customer or the business.",
    detail: "Assistants, intelligent search, RAG, recommendations, document intelligence, agents, and automated workflows.",
    icon: BrainCircuit,
  },
];

const stackLayers = [
  { label: "Experience", subtitle: "Interface / motion / interaction", items: ["Responsive design", "Motion systems", "Accessibility"], icon: Palette },
  { label: "Application", subtitle: "Business logic / accounts / workflows", items: ["Authentication", "Dashboards", "Business workflows"], icon: LayoutDashboard },
  { label: "Integration", subtitle: "APIs / payments / enterprise systems", items: ["REST APIs", "CRM & ERP", "Payment systems"], icon: PlugZap },
  { label: "Data", subtitle: "Storage / search / analytics", items: ["SQL & NoSQL", "Search systems", "Analytics"], icon: Database },
  { label: "Intelligence", subtitle: "Models / agents / automation", items: ["LLM integration", "RAG", "AI agents"], icon: BrainCircuit },
  { label: "Infrastructure", subtitle: "Cloud / deployment / operations", items: ["Containers", "CI/CD", "Monitoring"], icon: Server },
] as const;

const processSteps = [
  ["Discover", "Understand the business, users, objectives, positioning, and technical requirements."],
  ["Architect", "Define the information architecture, application architecture, integrations, data, and technology stack."],
  ["Design", "Create the visual language, interaction system, user experience, and responsive interface."],
  ["Engineer", "Develop the frontend, backend, APIs, databases, and integrations that make the experience dependable."],
  ["Optimize", "Refine performance, accessibility, SEO, responsiveness, security, and browser compatibility."],
  ["Deploy", "Configure production infrastructure, monitoring, release processes, and operational handover."],
  ["Evolve", "Continue improving the platform as the business, audience, and requirements grow."],
] as const;

const technologyGroups = [
  ["Frontend", ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind", "Modern CSS"]],
  ["Experiences", ["Three.js", "WebGL", "GSAP", "Motion systems", "3D interfaces"]],
  ["Backend", ["Node.js", "Python", "FastAPI", "REST APIs", "WebSockets"]],
  ["Data", ["PostgreSQL", "SQL", "MongoDB", "Redis", "Search"]],
  ["Infrastructure", ["Docker", "Cloud", "CI/CD", "Linux", "Monitoring"]],
  ["Intelligence", ["LLM integration", "RAG", "AI agents", "Computer vision", "Automation"]],
] as const;

const fadeUp = (reducedMotion: boolean | null, delay = 0) => ({
  initial: reducedMotion ? false : { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.16 },
  transition: { duration: 0.45, delay },
});

export function WebDevelopmentPage() {
  const { locale } = useLanguage();
  const reducedMotion = useReducedMotion();
  const [activeLayer, setActiveLayer] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  if (locale === "ar") return <WebDevelopmentArabic />;
  const currentLayer = stackLayers[activeLayer];
  const currentStep = processSteps[activeStep];
  const ActiveLayerIcon = currentLayer.icon;

  return (
    <main id="main-content" className="min-h-screen pt-32 sm:pt-44">
      <section className="relative overflow-hidden pb-24 sm:pb-36">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(212,175,55,0.12),transparent_28rem)]" />
        <div className="section-wrap relative">
          <Link href="/#build" className="focus-ring inline-flex items-center gap-2 rounded-sm font-mono text-xs uppercase tracking-wider text-muted hover:text-champagne">
            <ArrowDown aria-hidden="true" size={14} className="rotate-90" /> Explore capabilities
          </Link>
          <div className="mt-12 grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <motion.div {...fadeUp(reducedMotion)}>
              <p className="eyebrow mb-5"><Globe2 aria-hidden="true" size={13} className="text-gold" /> Digital experiences</p>
              <h1 className="display max-w-4xl text-[clamp(3rem,8vw,7.2rem)] leading-[0.88] text-cream">Digital experiences engineered to perform.</h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">VORTEX combines product design, frontend engineering, backend systems, and infrastructure to create fast, scalable, visually exceptional digital products.</p>
              <div className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link href="/?service=Website%20Development#contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:brightness-110">Start a Web Project <ArrowRight aria-hidden="true" size={14} /></Link>
                <Link href="/#build" className="focus-ring inline-flex items-center gap-2 rounded-sm py-2 text-sm font-semibold text-champagne hover:text-cream">Explore capabilities <ArrowRight aria-hidden="true" size={14} /></Link>
              </div>
            </motion.div>
            <motion.div {...fadeUp(reducedMotion, 0.08)} className="relative overflow-hidden rounded-[2rem] border border-gold/25 bg-[#2D0812]/55 p-5 shadow-[0_22px_60px_rgba(15,2,6,0.46)] sm:p-7">
              <div aria-hidden="true" className="absolute -end-20 -top-20 h-56 w-56 rounded-full border border-gold/20 bg-gold/5 blur-sm" />
              <div className="relative space-y-2">
                <div className="mb-5 flex items-center justify-between border-b border-gold/15 pb-4 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-muted"><span>Digital system / 01</span><span className="text-gold">Online</span></div>
                {stackLayers.slice(0, 4).map((layer, index) => {
                  const Icon = layer.icon;
                  return <div key={layer.label} className="relative"><div className={`flex items-center gap-3 rounded-2xl border p-4 ${index === 0 ? "border-gold/40 bg-gold/10" : "border-gold/15 bg-[#1F050C]/60"}`}><Icon aria-hidden="true" size={17} className="shrink-0 text-gold" /><span className="text-sm font-bold uppercase tracking-[0.12em] text-cream">{layer.label}</span><span className="ms-auto font-mono text-[0.6rem] text-muted">0{index + 1}</span></div>{index < 3 && <div className="flex h-7 items-center justify-center text-gold/60"><ArrowDown aria-hidden="true" size={14} /></div>}</div>;
                })}
                <div className="mt-5 border-t border-gold/15 pt-4 font-mono text-[0.62rem] uppercase tracking-[0.12em] text-champagne">Infrastructure → intelligence → software → experience</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-wrap border-t border-gold/15 py-24 sm:py-36" aria-labelledby="what-we-build">
        <motion.div {...fadeUp(reducedMotion)} className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><Layers3 aria-hidden="true" size={13} className="text-gold" /> What we build</p><h2 id="what-we-build" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">Where engineering meets experience.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">Premium websites, applications, portals, and platforms designed around the business system behind the interface.</p></motion.div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {buildTypes.map(({ title, description, detail, icon: Icon }, index) => <motion.article key={title} {...fadeUp(reducedMotion, index * 0.035)} className="group relative flex min-h-[19rem] flex-col overflow-hidden rounded-[1.5rem] border border-gold/20 bg-[#2D0812]/50 p-6 transition-all hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_20px_45px_rgba(15,2,6,0.42)]"><div aria-hidden="true" className="absolute -end-10 -top-10 h-28 w-28 rounded-full border border-gold/20 transition-transform duration-500 group-hover:scale-150" /><div className="relative flex items-center justify-between"><div className="grid h-10 w-10 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><Icon aria-hidden="true" size={19} /></div><span className="font-mono text-[0.62rem] text-muted">0{index + 1} / 08</span></div><h3 className="relative mt-7 font-display text-xl font-bold leading-tight text-cream">{title}</h3><p className="relative mt-3 text-sm leading-relaxed text-muted">{description}</p><p className="relative mt-auto border-t border-gold/15 pt-4 text-xs leading-relaxed text-cream/75">{detail}</p></motion.article>)}
        </div>
      </section>

      <section id="full-stack" className="relative overflow-hidden py-24 sm:py-36" aria-labelledby="more-than-frontend">
        <div className="section-wrap"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"><motion.div {...fadeUp(reducedMotion)}><p className="eyebrow mb-4"><Code2 aria-hidden="true" size={13} className="text-gold" /> Full-stack engineering</p><h2 id="more-than-frontend" className="display max-w-xl text-4xl leading-[0.95] text-cream sm:text-6xl">More than a frontend.</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-muted">The interface is only one layer. VORTEX can engineer the application, integrations, data systems, intelligence, and infrastructure beneath it.</p><p className="mt-8 font-mono text-xs uppercase tracking-[0.14em] text-champagne">Select a layer to inspect the system</p></motion.div><motion.div {...fadeUp(reducedMotion, 0.08)}><div role="tablist" aria-label="Digital product layers" className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">{stackLayers.map((layer, index) => { const Icon = layer.icon; const selected = index === activeLayer; return <button key={layer.label} id={`stack-tab-${index}`} type="button" role="tab" aria-selected={selected} aria-controls="stack-layer-panel" onClick={() => setActiveLayer(index)} className={`focus-ring flex items-center gap-3 rounded-xl border p-4 text-left transition-all ${selected ? "border-gold/50 bg-gold/15 text-cream" : "border-gold/15 bg-[#2D0812]/45 text-muted hover:border-gold/40 hover:text-cream"}`}><Icon aria-hidden="true" size={17} className={selected ? "text-gold" : "text-champagne/70"} /><span className="text-sm font-semibold">{layer.label}</span></button>; })}</div><div id="stack-layer-panel" role="tabpanel" tabIndex={0} aria-labelledby={`stack-tab-${activeLayer}`} className="mt-3 rounded-2xl border border-gold/25 bg-[#1F050C]/75 p-6 sm:p-8"><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="font-mono text-[0.62rem] uppercase tracking-[0.16em] text-gold">Layer / 0{activeLayer + 1}</p><h3 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">{currentLayer.label}</h3><p className="mt-2 text-sm text-muted">{currentLayer.subtitle}</p></div><div className="grid h-12 w-12 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><ActiveLayerIcon aria-hidden="true" size={22} /></div></div><ul className="mt-8 grid gap-3 sm:grid-cols-3">{currentLayer.items.map((item) => <li key={item} className="flex gap-2 text-sm text-cream/85"><Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-gold" />{item}</li>)}</ul></div></motion.div></div></div>
      </section>

      <section className="section-wrap border-y border-gold/15 py-24 sm:py-36" aria-labelledby="web-process">
        <motion.div {...fadeUp(reducedMotion)} className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><Workflow aria-hidden="true" size={13} className="text-gold" /> Website engineering process</p><h2 id="web-process" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">From first structure to production.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">A clear engineering path keeps the experience intentional, the system coherent, and the platform ready to evolve.</p></motion.div>
        <div className="no-scrollbar -mx-6 flex gap-2 overflow-x-auto px-6 pb-3 sm:mx-0 sm:grid sm:grid-cols-7 sm:px-0">{processSteps.map(([name], index) => <button key={name} type="button" onClick={() => setActiveStep(index)} aria-pressed={index === activeStep} className={`focus-ring flex min-w-32 shrink-0 items-center gap-3 rounded-xl border p-3 text-left sm:min-w-0 sm:flex-col sm:items-start ${index === activeStep ? "border-gold/50 bg-gold/15" : "border-gold/15 bg-[#2D0812]/45 hover:border-gold/40"}`}><span className="font-mono text-[0.62rem] text-gold">0{index + 1}</span><span className="text-sm font-semibold text-cream">{name}</span></button>)}</div>
        <motion.div key={activeStep} {...fadeUp(reducedMotion)} className="mt-4 grid gap-8 rounded-2xl border border-gold/25 bg-[#2D0812]/50 p-6 sm:p-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center"><div><p className="font-mono text-xs uppercase tracking-[0.16em] text-gold">Phase / 0{activeStep + 1}</p><h3 className="mt-3 font-display text-3xl font-bold text-cream sm:text-4xl">{currentStep[0]}</h3></div><p className="max-w-2xl text-base leading-relaxed text-muted">{currentStep[1]}</p></motion.div>
      </section>

      <section className="section-wrap py-24 sm:py-36" aria-labelledby="design-engineering"><div className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><Palette aria-hidden="true" size={13} className="text-gold" /> Design + engineering</p><h2 id="design-engineering" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">Beautiful enough to remember. Engineered well enough to depend on.</h2></div><div className="grid gap-4 lg:grid-cols-2"><div className="rounded-[1.75rem] border border-gold/25 bg-[#2D0812]/55 p-7 sm:p-9"><div className="flex items-center justify-between"><h3 className="font-display text-3xl font-bold text-cream">Design</h3><Palette aria-hidden="true" className="text-gold" /></div><ul className="mt-8 grid gap-3 sm:grid-cols-2">{["UX strategy", "UI systems", "Brand translation", "Interaction design", "Responsive experiences", "Motion", "3D", "Accessibility"].map((item) => <li key={item} className="flex gap-2 text-sm text-muted"><Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-gold" />{item}</li>)}</ul></div><div className="rounded-[1.75rem] border border-gold/25 bg-[#2D0812]/55 p-7 sm:p-9"><div className="flex items-center justify-between"><h3 className="font-display text-3xl font-bold text-cream">Engineering</h3><Server aria-hidden="true" className="text-gold" /></div><ul className="mt-8 grid gap-3 sm:grid-cols-2">{["Modern frontend frameworks", "Backend architecture", "APIs", "Databases", "Authentication", "Cloud deployment", "Security", "Performance", "Integrations", "AI integration"].map((item) => <li key={item} className="flex gap-2 text-sm text-muted"><Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-gold" />{item}</li>)}</ul></div></div></section>

      <section className="relative overflow-hidden py-24 sm:py-36" aria-labelledby="technology-capabilities"><div className="section-wrap"><div className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><Code2 aria-hidden="true" size={13} className="text-gold" /> Technology capabilities</p><h2 id="technology-capabilities" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">A considered stack for the system.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">Technology supports the product. It does not replace the thinking required to make the product work.</p></div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{technologyGroups.map(([name, items]) => <div key={name} className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6"><div className="flex items-center justify-between"><h3 className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-champagne">{name}</h3><span className="font-mono text-[0.62rem] text-muted">{items.length.toString().padStart(2, "0")}</span></div><div className="mt-5 flex flex-wrap gap-2">{items.map((item) => <span key={item} className="rounded-full border border-gold/15 bg-[#1F050C]/60 px-3 py-2 font-mono text-[0.64rem] text-cream/80">{item}</span>)}</div></div>)}</div></div></section>

      <section className="section-wrap border-y border-gold/15 py-24 sm:py-36" aria-labelledby="intelligent-web"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center"><div><p className="eyebrow mb-4"><BrainCircuit aria-hidden="true" size={13} className="text-gold" /> Optional intelligence layer</p><h2 id="intelligent-web" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">When your website needs intelligence.</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-muted">AI is not a requirement for every digital product. When it creates real business value, VORTEX already has the engineering capability to build it into the platform.</p><Link href="/?service=AI%20System%20Development#contact" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-champagne hover:text-cream">Discuss the intelligence layer <ArrowRight aria-hidden="true" size={14} /></Link></div><div className="grid gap-3 sm:grid-cols-2">{["AI assistants", "Intelligent search", "RAG systems", "Recommendation systems", "Document intelligence", "Computer vision", "Automated workflows", "AI agents"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-gold/15 bg-[#2D0812]/45 p-4 text-sm text-cream"><Sparkles aria-hidden="true" size={15} className="shrink-0 text-gold" />{item}</div>)}</div></div></section>

      <section className="section-wrap py-24 sm:py-36" aria-labelledby="engineered-speed"><div className="grid gap-4 lg:grid-cols-2"><div className="rounded-[1.75rem] border border-gold/25 bg-[#2D0812]/55 p-7 sm:p-9"><p className="eyebrow mb-4"><Gauge aria-hidden="true" size={13} className="text-gold" /> Performance methodology</p><h2 id="engineered-speed" className="display text-4xl leading-[0.95] text-cream sm:text-5xl">Engineered for speed.</h2><p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">Performance is designed into the system, measured throughout the build, and tuned for the environment in which the product will actually operate.</p><ul className="mt-8 grid gap-3 sm:grid-cols-2">{["Core Web Vitals", "Asset optimization", "Code splitting", "Caching", "Server-side rendering", "Edge delivery where appropriate", "Database efficiency", "API performance", "Responsive loading", "Browser compatibility"].map((item) => <li key={item} className="flex gap-2 text-sm text-cream/85"><Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-gold" />{item}</li>)}</ul></div><div className="rounded-[1.75rem] border border-gold/25 bg-[#1F050C] p-7 sm:p-9"><p className="eyebrow mb-4"><Monitor aria-hidden="true" size={13} className="text-gold" /> Responsive by design</p><h2 className="display text-4xl leading-[0.95] text-cream sm:text-5xl">Desktop → tablet → mobile.</h2><p className="mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">One interface, intentionally re-composed across every meaningful viewport—not a desktop layout compressed until it fits.</p><div className="mt-8 space-y-3" aria-label="Responsive layout visualization"><div className="flex items-center gap-3"><Monitor aria-hidden="true" size={16} className="text-gold" /><div className="h-8 flex-1 rounded-lg border border-gold/25 bg-gold/10" /><span className="font-mono text-[0.6rem] uppercase text-muted">Desktop</span></div><div className="flex items-center gap-3"><Tablet aria-hidden="true" size={16} className="text-champagne" /><div className="h-8 w-[78%] rounded-lg border border-gold/25 bg-gold/10" /><span className="font-mono text-[0.6rem] uppercase text-muted">Tablet</span></div><div className="flex items-center gap-3"><Smartphone aria-hidden="true" size={16} className="text-champagne" /><div className="h-8 w-[55%] rounded-lg border border-gold/25 bg-gold/10" /><span className="font-mono text-[0.6rem] uppercase text-muted">Mobile</span></div></div><div className="mt-8 grid grid-cols-3 gap-2 border-t border-gold/15 pt-5 text-center font-mono text-[0.6rem] uppercase tracking-[0.12em] text-muted"><span>Flexible</span><span>Readable</span><span>Touch-ready</span></div></div></div></section>

      <section id="contact" className="section-wrap pb-16 pt-8 sm:pb-24 sm:pt-12"><div className="relative isolate overflow-hidden rounded-[2.5rem] border border-gold/30 bg-[#1F050C] px-6 py-16 text-center sm:px-12 sm:py-24"><div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.2),transparent_60%),linear-gradient(135deg,rgba(229,195,120,0.05),transparent_40%,rgba(92,20,40,0.3))]" /><div className="relative z-10"><p className="eyebrow mb-4 justify-center"><Sparkles aria-hidden="true" size={13} className="text-gold" /> Build the digital layer</p><h2 className="display mx-auto max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] text-cream">From first pixel to production infrastructure.</h2><p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">Your digital presence should be engineered with the same precision as your business.</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><Link href="/?service=Website%20Development#contact" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-8 py-4 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:brightness-110">Start a Web Project <Sparkles aria-hidden="true" size={15} /></Link><Link href="/#build" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 px-8 py-4 text-xs font-bold uppercase tracking-wider text-champagne hover:border-gold hover:text-cream">Explore capabilities <ArrowRight aria-hidden="true" size={14} /></Link></div><p className="mx-auto mt-5 max-w-md text-xs text-muted">Tell us what you are building. We will help define the right approach.</p></div></div></section>
    </main>
  );
}

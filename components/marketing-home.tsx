"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, BrainCircuit, Check, CloudCog, Code2, Cpu, Database, Globe2, Instagram, Layers3, Linkedin, Network, Server, Smartphone, Sparkles, Workflow, Zap } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { DeploymentRotator } from "@/components/deployment-rotator";
import { EngineeringStack } from "@/components/engineering-stack";
import { useLanguage } from "@/components/language-provider";

type BookingHandler = (service?: string) => void;

// The animated map is below the fold and visually decorative. Split it from
// the initial homepage chunk so the first viewport can hydrate sooner.
const AnimatedWorldMap = dynamic(
  () => import("@/components/animated-world-map").then((module) => module.AnimatedWorldMap),
  { ssr: false, loading: () => null },
);

const capabilities = [
  { key: "infrastructure", icon: Server, number: "01", href: "/services/infrastructure", service: "Private Infrastructure", priority: true },
  { key: "ai", icon: BrainCircuit, number: "02", href: "/services/artificial-intelligence", service: "AI System Development", priority: true },
  { key: "web", icon: Globe2, number: "03", href: "/services/web-development", service: "Website Development", priority: false },
  { key: "mobile", icon: Smartphone, number: "04", href: "/services/mobile-development", service: "Mobile Application", priority: false },
  { key: "enterprise", icon: Layers3, number: "05", href: "/services/enterprise-software", service: "Enterprise Platform", priority: false },
] as const;

const process = [
  { key: "discover", icon: Network }, { key: "architect", icon: Layers3 }, { key: "design", icon: Code2 },
  { key: "engineer", icon: Cpu }, { key: "deploy", icon: CloudCog }, { key: "evolve", icon: Workflow },
] as const;

const techLayers = [
  { key: "intelligence", icon: BrainCircuit }, { key: "applications", icon: Code2 }, { key: "data", icon: Database }, { key: "infrastructure", icon: Server },
] as const;

const footerNavigation = {
  en: {
    capabilities: "Capabilities",
    build: "Build with VORTEX",
    engineering: "Engineering",
    start: "Start a Project",
    social: "Follow VORTEX",
    ariaCapabilities: "Capability navigation",
    ariaCompany: "Company navigation",
    links: ["Private AI & Intelligence", "Enterprise Platforms", "Digital Experiences", "Mobile Engineering", "Automation & Integration", "Infrastructure"],
  },
  ar: {
    capabilities: "القدرات",
    build: "نبني مع VORTEX",
    engineering: "الهندسة",
    start: "ابدأ مشروعاً",
    social: "تابع VORTEX",
    ariaCapabilities: "تصفح القدرات",
    ariaCompany: "تصفح الشركة",
    links: ["الذكاء الاصطناعي الخاص والذكاء", "المنصات المؤسسية", "التجارب الرقمية", "هندسة الجوال", "الأتمتة والتكامل", "البنية التحتية"],
  },
} as const;

export function MarketingHome({ onOpenModal }: { onOpenModal: BookingHandler }) {
  const { t, copy, locale } = useLanguage();
  const reducedMotion = useReducedMotion();

  return (
    <main id="main-content">
      <section className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 sm:pt-40">
        <div aria-hidden="true" className="grid-background absolute inset-0 opacity-40" />
        <div aria-hidden="true" className="absolute -start-40 top-20 h-[34rem] w-[34rem] rounded-full bg-gold/10 blur-[110px]" />
        <div className="section-wrap relative z-10">
          <motion.div initial={reducedMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="max-w-6xl">
            <span className="eyebrow inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-3 py-1"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />{t("hero.eyebrow")}</span>
            <h1 className="display mt-7 max-w-5xl text-[clamp(3.4rem,9vw,8.8rem)] leading-[0.87] text-cream">{t("hero.title")}</h1>
            <DeploymentRotator />
            <div className="mt-7 grid max-w-5xl gap-6 border-y border-gold/15 py-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
              <p className="max-w-3xl text-base leading-[1.8] text-muted sm:text-lg">{t("hero.description")}</p>
              <p className="border-s border-gold/30 ps-5 text-lg font-medium leading-relaxed text-champagne sm:text-xl">{t("hero.bridge")}</p>
            </div>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <button type="button" onClick={() => onOpenModal()} className="focus-ring flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:brightness-110"><Sparkles size={14} />{t("hero.primary")}</button>
              <a href="#build" className="link-underline focus-ring flex items-center gap-2 py-2 text-sm font-semibold text-champagne hover:text-cream">{t("hero.secondary")}<ArrowRight size={14} /></a>
            </div>
            <div className="mt-14 flex max-w-4xl flex-wrap gap-x-5 gap-y-3 border-t border-gold/15 pt-5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-muted"><span className="text-gold">/</span>{t("hero.strip")}</div>
          </motion.div>
        </div>
      </section>

      <EngineeringStack />

      <section id="beyond" className="section-wrap py-20 sm:py-28"><div className="liquid-glass-card rounded-[2rem] p-7 sm:p-12"><p className="eyebrow mb-4"><Sparkles size={13} className="text-gold" />{t("beyond.eyebrow")}</p><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><h2 className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{t("beyond.title")}</h2><div><p className="text-3xl font-medium leading-tight text-champagne sm:text-5xl">{t("beyond.statement")}</p><p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{t("beyond.description")}</p></div></div><div className="mt-10 flex flex-wrap gap-x-4 gap-y-2 border-t border-gold/15 pt-5 font-mono text-[0.62rem] font-bold uppercase tracking-[0.12em] text-muted"><span className="text-gold">/</span><span>{t("architecture.infrastructure")}</span><ArrowRight size={12} className="text-gold" /><span>{t("architecture.intelligence")}</span><ArrowRight size={12} className="text-gold" /><span>{t("architecture.application")}</span><ArrowRight size={12} className="text-gold" /><span>{t("architecture.experience")}</span></div></div></section>

      <section id="build" className="relative overflow-hidden py-24 sm:py-36"><div className="section-wrap"><div className="mb-14 max-w-3xl"><p className="eyebrow mb-4"><Zap size={13} className="text-gold" />{t("build.eyebrow")}</p><h2 className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{t("build.title")}</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">{t("build.subtitle")}</p></div><div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">{capabilities.map(({ key, icon: Icon, number, href, service, priority }, index) => { const item = copy.build[key]; return <motion.article key={key} initial={reducedMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ delay: index * 0.05 }} className={`group relative flex min-h-[27rem] flex-col overflow-hidden rounded-[1.7rem] border border-gold/20 bg-[#2D0812]/55 p-6 transition-all hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_20px_45px_rgba(15,2,6,0.45)] xl:min-h-[31rem] ${priority ? "capability-card--priority" : ""}`}><div aria-hidden="true" className="absolute -end-12 -top-12 h-32 w-32 rounded-full border border-gold/20 opacity-50 transition-transform duration-500 group-hover:scale-150" /><div className="relative flex items-center justify-between"><div className="grid h-11 w-11 place-items-center rounded-xl border border-gold/30 bg-gold/10 text-gold"><Icon aria-hidden="true" size={21} /></div><span className="font-mono text-[0.65rem] text-muted">{number} / 05</span></div><h3 className="relative mt-8 font-display text-2xl font-bold leading-tight text-cream">{item.title}</h3><p className="relative mt-3 text-sm leading-relaxed text-muted">{item.description}</p><ul className="relative mt-6 space-y-2 border-t border-gold/15 pt-5">{item.points.slice(0, 4).map((point) => <li key={point} className="flex gap-2 text-xs leading-relaxed text-cream/85"><Check aria-hidden="true" size={13} className="mt-0.5 shrink-0 text-gold" />{point}</li>)}</ul><div className="relative mt-auto flex items-center justify-between gap-3 pt-7"><Link href={href} className="focus-ring inline-flex items-center gap-2 font-mono text-[0.62rem] font-bold uppercase tracking-wider text-champagne hover:text-cream">{item.cta}<ArrowRight aria-hidden="true" size={13} /></Link><button type="button" onClick={() => onOpenModal(service)} aria-label={`${locale === "ar" ? "ابدأ مشروعاً حول" : "Start a project about"} ${item.title}`} className="focus-ring grid h-8 w-8 shrink-0 place-items-center rounded-full border border-gold/25 text-champagne hover:border-gold hover:bg-gold/10"><Sparkles aria-hidden="true" size={13} /></button></div></motion.article>; })}</div></div></section>

      <section id="process" className="relative py-24 sm:py-36"><div className="section-wrap"><div className="mb-14 max-w-3xl"><p className="eyebrow mb-4"><Workflow size={13} className="text-gold" />{t("process.eyebrow")}</p><h2 className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{t("process.title")}</h2><p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{t("process.description")}</p></div><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{process.map(({ key, icon: Icon }, index) => <div key={key} className="relative rounded-2xl border border-gold/15 bg-[#2D0812]/45 p-6"><div className="flex items-center justify-between"><Icon size={19} className="text-gold" /><span className="font-mono text-xs text-gold">0{index + 1}</span></div><h3 className="mt-7 text-lg font-semibold text-cream">{t(`process.${key}.title`)}</h3><p className="mt-2 text-sm leading-relaxed text-muted">{t(`process.${key}.description`)}</p></div>)}</div></div></section>

      <section className="section-wrap py-24 sm:py-36"><div className="mb-14 max-w-3xl"><p className="eyebrow mb-4"><Cpu size={13} className="text-gold" />{t("technology.eyebrow")}</p><h2 className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{t("technology.title")}</h2><p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{t("technology.description")}</p></div><div className="grid gap-4 md:grid-cols-2">{techLayers.map(({ key, icon: Icon }, index) => <div key={key} className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6 sm:p-7"><div className="flex items-center gap-3"><Icon size={18} className="text-gold" /><h3 className="font-mono text-xs font-bold uppercase tracking-[0.15em] text-champagne">{t(`technology.${key}.title`)}</h3><span className="ms-auto font-mono text-xs text-muted">0{index + 1}</span></div><div className="mt-6 flex flex-wrap gap-2">{copy.technology[key].items.map((item) => <span key={item} className="rounded-full border border-gold/15 bg-[#1F050C]/70 px-3 py-2 font-mono text-[0.66rem] text-cream/85">{item}</span>)}</div></div>)}</div></section>

      <section id="about" className="section-wrap py-24 sm:py-32"><div className="grid gap-10 border-y border-gold/20 py-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="eyebrow mb-4"><Sparkles size={13} className="text-gold" />{t("about.eyebrow")}</p><h2 className="display text-4xl leading-[0.95] text-cream sm:text-5xl">{t("about.title")}</h2></div><div><p className="max-w-3xl text-xl font-medium leading-relaxed text-champagne sm:text-3xl">{t("about.description")}</p><p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">{t("about.detail")}</p></div></div></section>

      <section id="contact" className="section-wrap pb-16 pt-24 sm:pb-24 sm:pt-36"><div className="relative isolate overflow-hidden rounded-[2.5rem] border border-gold/30 bg-[#1F050C] px-6 py-16 text-center sm:px-12 sm:py-24"><div aria-hidden="true" className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_100%,rgba(212,175,55,0.2),transparent_60%),linear-gradient(135deg,rgba(229,195,120,0.05),transparent_40%,rgba(92,20,40,0.3))]" /><AnimatedWorldMap /><div className="relative z-10"><div className="mx-auto mb-8 inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-[#2D0812] px-4 py-1.5 font-mono text-[0.62rem] font-bold uppercase tracking-widest text-champagne"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-gold" />{t("closing.status")}</div><p className="eyebrow mb-4 justify-center">{t("closing.eyebrow")}</p><h2 className="display mx-auto max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.9] text-cream">{t("closing.title")}</h2><p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted sm:text-base">{t("closing.description")}</p><div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row"><button type="button" onClick={() => onOpenModal()} className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-8 py-4 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_30px_rgba(212,175,55,0.4)] hover:brightness-110"><Sparkles size={15} />{t("closing.primary")}</button><a href="#build" className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-gold/30 px-8 py-4 text-xs font-bold uppercase tracking-wider text-champagne hover:border-gold hover:text-cream">{t("closing.secondary")}<ArrowRight size={14} /></a></div></div></div></section>
    </main>
  );
}

export function MarketingFooter() {
  const { t, locale } = useLanguage();
  const footer = footerNavigation[locale];
  const capabilityLinks = [
    ["/services/artificial-intelligence", footer.links[0]],
    ["/services/enterprise-software", footer.links[1]],
    ["/services/web-development", footer.links[2]],
    ["/services/mobile-development", footer.links[3]],
    ["/services/automation", footer.links[4]],
    ["/services/infrastructure", footer.links[5]],
  ] as const;
  return <footer className="section-wrap grid gap-10 border-t border-gold/15 py-12 text-xs text-muted sm:grid-cols-[0.8fr_1.2fr] sm:items-start"><div className="flex items-center gap-3.5"><div aria-hidden="true" className="grid h-10 w-10 place-items-center rounded-full border border-gold/30 bg-gold/10 text-gold"><Sparkles size={18} /></div><div><p className="text-sm font-bold tracking-tight text-cream">VORTEX</p><p className="mt-1 text-muted/70">{t("footer.location")}</p></div></div><div className="grid gap-8 sm:grid-cols-2"><nav aria-label={footer.ariaCapabilities} className="flex flex-col items-start gap-3"><p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gold">{footer.capabilities}</p>{capabilityLinks.map(([href, label]) => <Link key={href} href={href} className="focus-ring rounded-sm hover:text-champagne">{label}</Link>)}</nav><nav aria-label={footer.ariaCompany} className="flex flex-col items-start gap-3"><p className="font-mono text-[0.6rem] font-bold uppercase tracking-[0.14em] text-gold">{footer.build}</p><Link href="/engineering" className="focus-ring rounded-sm hover:text-champagne">{footer.engineering}</Link><Link href="/#architecture" className="focus-ring rounded-sm hover:text-champagne">{t("footer.architecture")}</Link><Link href="/#about" className="focus-ring rounded-sm hover:text-champagne">{t("footer.about")}</Link><Link href="/#contact" className="focus-ring rounded-sm hover:text-champagne">{footer.start}</Link><a href="mailto:contact@vortexmind.co" className="focus-ring rounded-sm hover:text-champagne">{t("footer.email")}</a><div className="mt-2 flex flex-wrap items-center gap-3 border-t border-gold/15 pt-3"><span className="font-mono text-[0.58rem] font-bold uppercase tracking-[0.14em] text-gold">{footer.social}</span><a href="https://www.instagram.com/vortexmindtech?igsi=cXRib3Bnajd2OGwx" target="_blank" rel="noreferrer" aria-label="Instagram" className="focus-ring rounded-full text-muted hover:text-champagne"><Instagram size={16} /></a><a href="https://www.linkedin.com/company/vortexmind/home" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="focus-ring rounded-full text-muted hover:text-champagne"><Linkedin size={16} /></a></div></nav></div></footer>;
}

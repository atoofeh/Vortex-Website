"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";

export type ServiceSlug = "artificial-intelligence" | "web-development" | "mobile-development" | "enterprise-software" | "infrastructure" | "automation";
type BuildKey = "ai" | "web" | "mobile" | "enterprise" | "infrastructure";

const serviceMap: Record<ServiceSlug, { buildKey: BuildKey; service: string; eyebrow: string }> = {
  "artificial-intelligence": { buildKey: "ai", service: "AI System Development", eyebrow: "AI / 01" },
  "web-development": { buildKey: "web", service: "Website Development", eyebrow: "WEB / 02" },
  "mobile-development": { buildKey: "mobile", service: "Mobile Application", eyebrow: "MOBILE / 03" },
  "enterprise-software": { buildKey: "enterprise", service: "Enterprise Platform", eyebrow: "SYSTEMS / 04" },
  infrastructure: { buildKey: "infrastructure", service: "Private Infrastructure", eyebrow: "INFRA / 05" },
  automation: { buildKey: "ai", service: "Intelligent Automation", eyebrow: "AUTOMATION / 06" },
};

const related = [
  ["artificial-intelligence", "build.ai.title"], ["web-development", "build.web.title"], ["mobile-development", "build.mobile.title"], ["enterprise-software", "build.enterprise.title"], ["infrastructure", "build.infrastructure.title"], ["automation", "beyond.intelligent.title"],
] as const;

export function ServicePage({ slug }: { slug: ServiceSlug }) {
  const { t, copy } = useLanguage();
  const config = serviceMap[slug];
  const item = copy.build[config.buildKey];

  return <main id="main-content" className="min-h-screen pt-32 sm:pt-44"><section className="section-wrap pb-24 sm:pb-36"><Link href="/#build" className="focus-ring inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-champagne"><ArrowLeft aria-hidden="true" size={14} />{t("hero.secondary")}</Link><div className="mt-10 max-w-5xl"><p className="eyebrow mb-5"><Sparkles aria-hidden="true" size={13} className="text-gold" />{config.eyebrow}</p><h1 className="display max-w-4xl text-[clamp(3rem,8vw,7rem)] leading-[0.88] text-cream">{item.title}</h1><p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{item.description}</p><Link href={`/?service=${encodeURIComponent(config.service)}#contact`} className="focus-ring mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_25px_rgba(212,175,55,0.35)]">{t("closing.primary")}<ArrowRight aria-hidden="true" size={14} /></Link></div></section>
    <section className="section-wrap border-t border-gold/15 py-24 sm:py-32"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr]"><div><p className="eyebrow mb-4">{t("process.eyebrow")}</p><h2 className="display text-4xl leading-none text-cream sm:text-5xl">{t("process.title")}</h2><p className="mt-5 text-sm leading-relaxed text-muted">{t("process.description")}</p></div><div className="grid gap-3 sm:grid-cols-2">{item.points.map((point) => <div key={point} className="rounded-xl border border-gold/20 bg-[#2D0812]/50 p-5"><Check size={16} className="text-gold" /><p className="mt-4 text-sm font-semibold text-cream">{point}</p><p className="mt-2 text-xs leading-relaxed text-muted">{t("build.subtitle")}</p></div>)}</div></div></section>
    <section className="section-wrap py-24 sm:py-32"><div className="mb-10"><p className="eyebrow mb-4">{t("technology.eyebrow")}</p><h2 className="display text-4xl leading-none text-cream sm:text-5xl">{t("technology.title")}</h2><p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">{t("technology.description")}</p></div><div className="grid gap-3 md:grid-cols-2">{(["intelligence", "applications", "data", "infrastructure"] as const).map((layer) => <div key={layer} className="rounded-xl border border-gold/20 bg-[#2D0812]/50 p-5"><p className="font-mono text-xs font-bold uppercase tracking-wider text-champagne">{t(`technology.${layer}.title`)}</p><div className="mt-4 flex flex-wrap gap-2">{copy.technology[layer].items.map((tech) => <span key={tech} className="rounded-full border border-gold/15 px-3 py-1.5 font-mono text-[0.62rem] text-cream/80">{tech}</span>)}</div></div>)}</div></section>
    <section className="section-wrap py-24 sm:py-32"><div className="rounded-[2rem] border border-gold/25 bg-[#2D0812]/50 p-7 sm:p-12"><p className="eyebrow mb-4">{t("beyond.eyebrow")}</p><h2 className="display max-w-3xl text-4xl leading-none text-cream sm:text-6xl">{t("beyond.statement")}</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{t("beyond.description")}</p><div className="mt-8 border-t border-gold/15 pt-7"><p className="font-mono text-xs uppercase tracking-wider text-champagne">{t("architecture.note")}</p></div></div></section>
    <section className="section-wrap pb-24 sm:pb-36"><div className="flex flex-wrap items-center justify-between gap-5 border-y border-gold/15 py-7"><p className="font-mono text-xs uppercase tracking-wider text-muted">{t("build.explore")}</p><div className="flex flex-wrap gap-2">{related.filter(([relatedSlug]) => relatedSlug !== slug).map(([relatedSlug, labelKey]) => <Link key={relatedSlug} href={`/services/${relatedSlug}`} className="focus-ring rounded-full border border-gold/20 px-3 py-2 text-xs text-champagne hover:border-gold/50">{t(labelKey)}</Link>)}</div></div></section>
  </main>;
}

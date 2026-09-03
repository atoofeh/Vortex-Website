import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";
import { insights } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Engineering Insights & Technical Blueprints | VORTEX",
  description: "Technical blueprints from VORTEX on private LLMs, enterprise RAG retrieval, and modernizing critical software systems.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  return <><SiteHeader /><main id="main-content" className="min-h-screen pt-32 sm:pt-44"><section className="section-wrap pb-24 sm:pb-36"><div className="max-w-5xl"><p className="eyebrow mb-5"><BookOpen aria-hidden="true" size={13} className="text-gold" /> Technical engineering authority</p><h1 className="display max-w-5xl text-[clamp(3.4rem,9vw,8rem)] leading-[0.87] text-cream">Blueprints for systems that have to work.</h1><p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">Long-form field notes on private AI infrastructure, enterprise search, application modernization, security, and production engineering.</p></div><div className="mt-14 grid gap-4 lg:grid-cols-3">{insights.map((insight) => <article key={insight.slug} className="flex min-h-[25rem] flex-col rounded-[1.7rem] border border-gold/20 bg-[#2D0812]/55 p-6"><div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-gold"><span>Blueprint</span><span>{insight.readTime}</span></div><h2 className="mt-7 font-display text-3xl font-bold leading-tight text-cream">{insight.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted">{insight.description}</p><Link href={`/insights/${insight.slug}`} className="focus-ring mt-auto inline-flex items-center gap-2 pt-7 font-mono text-xs font-bold uppercase tracking-wider text-champagne hover:text-cream">Read the blueprint <ArrowRight aria-hidden="true" size={14} /></Link></article>)}</div><div className="mt-16 flex items-center gap-3 border-t border-gold/15 pt-6 text-sm text-muted"><Sparkles aria-hidden="true" size={15} className="text-gold" /> Every blueprint connects its implementation ideas to a relevant VORTEX solution.</div></section></main><div className="page-shell"><MarketingFooter /></div></>;
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";
import { solutions } from "@/lib/seo-content";

export const metadata: Metadata = {
  title: "Private AI & Secure Enterprise Solutions | VORTEX",
  description: "Explore VORTEX solutions for on-premise LLM deployment, private RAG systems, and secure internal enterprise tools.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsIndexPage() {
  return <><SiteHeader /><main id="main-content" className="min-h-screen pt-32 sm:pt-44"><section className="section-wrap pb-24 sm:pb-36"><div className="max-w-5xl"><p className="eyebrow mb-5"><Sparkles aria-hidden="true" size={13} className="text-gold" /> Enterprise solution architecture</p><h1 className="display max-w-5xl text-[clamp(3.4rem,9vw,8rem)] leading-[0.87] text-cream">Private systems for high-trust operations.</h1><p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">Move from broad technology ambition to a clear architecture for private AI, grounded enterprise knowledge, and secure internal workflows.</p></div><div className="mt-14 grid gap-4 lg:grid-cols-3">{Object.values(solutions).map((solution) => <article key={solution.slug} className="flex min-h-[25rem] flex-col rounded-[1.7rem] border border-gold/20 bg-[#2D0812]/55 p-6"><p className="font-mono text-xs text-gold">{solution.service}</p><h2 className="mt-7 font-display text-3xl font-bold leading-tight text-cream">{solution.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted">{solution.description}</p><ul className="mt-6 space-y-2 border-t border-gold/15 pt-5">{solution.outcomes.map((item) => <li key={item} className="flex gap-2 text-xs leading-relaxed text-cream/85"><Check aria-hidden="true" size={13} className="mt-0.5 shrink-0 text-gold" />{item}</li>)}</ul><Link href={`/solutions/${solution.slug}`} className="focus-ring mt-auto inline-flex items-center gap-2 pt-7 font-mono text-xs font-bold uppercase tracking-wider text-champagne hover:text-cream">Explore the solution <ArrowRight aria-hidden="true" size={14} /></Link></article>)}</div></section></main><div className="page-shell"><MarketingFooter /></div></>;
}

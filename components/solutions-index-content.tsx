"use client";

import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { solutions } from "@/lib/seo-content";
import { arabicSolutions } from "@/lib/seo-translations";
import type { Locale } from "@/lib/i18n";
import { useEffect, useState } from "react";

export function SolutionsIndexContent({ initialLocale }: { initialLocale?: Locale } = {}) {
  const { locale } = useLanguage();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const arabic = (hydrated ? locale : (initialLocale ?? locale)) === "ar";
  const labels = arabic ? { eyebrow: "معمارية الحلول المؤسسية", title: "أنظمة خاصة للعمليات عالية الثقة.", description: "انتقل من الطموح التقني العام إلى معمارية واضحة للذكاء الاصطناعي الخاص والمعرفة المؤسسية وسير العمل الداخلي الآمن.", blueprint: "حل", explore: "استكشف الحل" } : { eyebrow: "Enterprise solution architecture", title: "Private systems for high-trust operations.", description: "Move from broad technology ambition to a clear architecture for private AI, grounded enterprise knowledge, and secure internal workflows.", blueprint: "Solution", explore: "Explore the solution" };
  return <main id="main-content" className="min-h-screen pt-32 sm:pt-44"><section className="section-wrap pb-24 sm:pb-36"><div className="max-w-5xl"><p className="eyebrow mb-5"><Sparkles aria-hidden="true" size={13} className="text-gold" /> {labels.eyebrow}</p><h1 className="display max-w-5xl text-[clamp(3.4rem,9vw,8rem)] leading-[0.87] text-cream">{labels.title}</h1><p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{labels.description}</p></div><div className="mt-14 grid gap-4 lg:grid-cols-3">{Object.values(solutions).map((solution) => { const content = arabic ? { ...solution, ...arabicSolutions[solution.slug] } : solution; return <article key={solution.slug} className="flex min-h-[25rem] flex-col rounded-[1.7rem] border border-gold/20 bg-[#2D0812]/55 p-6"><p className="font-mono text-xs text-gold">{content.service}</p><h2 className="mt-7 font-display text-3xl font-bold leading-tight text-cream">{content.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted">{content.description}</p><ul className="mt-6 space-y-2 border-t border-gold/15 pt-5">{content.outcomes.map((item) => <li key={item} className="flex gap-2 text-xs leading-relaxed text-cream/85"><Check aria-hidden="true" size={13} className="mt-0.5 shrink-0 text-gold" />{item}</li>)}</ul><Link href={`/solutions/${solution.slug}`} className="focus-ring mt-auto inline-flex items-center gap-2 pt-7 font-mono text-xs font-bold uppercase tracking-wider text-champagne hover:text-cream">{labels.explore} <ArrowRight aria-hidden="true" size={14} /></Link></article>; })}</div><p className="mt-10 text-xs font-mono uppercase tracking-wider text-muted">{labels.blueprint} / {Object.keys(solutions).length.toString().padStart(2, "0")}</p></section></main>;
}

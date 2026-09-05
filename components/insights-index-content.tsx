"use client";

import Link from "@/components/localized-link";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { insights } from "@/lib/seo-content";
import { arabicInsights } from "@/lib/seo-translations";
import type { Locale } from "@/lib/i18n";
import { useEffect, useState } from "react";

export function InsightsIndexContent({ initialLocale }: { initialLocale?: Locale } = {}) {
  const { locale } = useLanguage();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const arabic = (hydrated ? locale : (initialLocale ?? locale)) === "ar";
  const labels = arabic ? { eyebrow: "الهندسة التقنية المتخصصة", title: "مخططات لأنظمة يجب أن تعمل.", description: "ملاحظات تقنية معمقة عن البنية التحتية الخاصة للذكاء الاصطناعي والبحث المؤسسي وتحديث البرمجيات والأمان وهندسة الإنتاج.", blueprint: "مخطط", read: "اقرأ المخطط", footer: "كل مخطط يربط أفكاره التنفيذية بحل من حلول VORTEX." } : { eyebrow: "Technical engineering authority", title: "Blueprints for systems that have to work.", description: "Long-form field notes on private AI infrastructure, enterprise search, application modernization, security, and production engineering.", blueprint: "Blueprint", read: "Read the blueprint", footer: "Every blueprint connects its implementation ideas to a relevant VORTEX solution." };
  return <main id="main-content" className="min-h-screen pt-32 sm:pt-44"><section className="section-wrap pb-24 sm:pb-36"><div className="max-w-5xl"><p className="eyebrow mb-5"><BookOpen aria-hidden="true" size={13} className="text-gold" /> {labels.eyebrow}</p><h1 className="display max-w-5xl text-[clamp(3.4rem,9vw,8rem)] leading-[0.87] text-cream">{labels.title}</h1><p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{labels.description}</p></div><div className="mt-14 grid gap-4 lg:grid-cols-3">{insights.map((insight) => { const content = arabic ? arabicInsights[insight.slug] : insight; return <article key={insight.slug} className="flex min-h-[25rem] flex-col rounded-[1.7rem] border border-gold/20 bg-[#2D0812]/55 p-6"><div className="flex items-center justify-between font-mono text-xs uppercase tracking-wider text-gold"><span>{labels.blueprint}</span><span>{content.readTime}</span></div><h2 className="mt-7 font-display text-3xl font-bold leading-tight text-cream">{content.title}</h2><p className="mt-4 text-sm leading-relaxed text-muted">{content.description}</p><Link href={`/insights/${insight.slug}`} className="focus-ring mt-auto inline-flex items-center gap-2 pt-7 font-mono text-xs font-bold uppercase tracking-wider text-champagne hover:text-cream">{labels.read} <ArrowRight aria-hidden="true" size={14} /></Link></article>; })}</div><div className="mt-16 flex items-center gap-3 border-t border-gold/15 pt-6 text-sm text-muted"><Sparkles aria-hidden="true" size={15} className="text-gold" /> {labels.footer}</div></section></main>;
}

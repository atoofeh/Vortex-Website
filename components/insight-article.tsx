"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Check, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { Insight } from "@/lib/seo-content";
import { arabicInsights } from "@/lib/seo-translations";
import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/lib/i18n";

export function InsightArticle({ insight, initialLocale }: { insight: Insight; initialLocale?: Locale }) {
  const { locale } = useLanguage();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const arabic = (hydrated ? locale : (initialLocale ?? locale)) === "ar";
  const content = arabic ? arabicInsights[insight.slug] : insight;
  const labels = arabic ? {
    back: "المخططات الهندسية",
    blueprint: "مخطط تقني",
    inThis: "في هذا المخطط",
    fieldNote: "ملاحظة ميدانية",
    continue: "تابع الحوار المعماري",
    ctaTitle: "حوّل المخطط إلى نظام يمكن لفريقك امتلاكه.",
    ctaDescription: "تحدث مع VORTEX عن القيود والواجهات ونموذج التشغيل خلف مبادرتك التقنية القادمة.",
    cta: "جدولة استشارة تقنية",
    note: "يرتبط هذا المقال مباشرة بالحل التجاري المناسب لتخطيط التنفيذ.",
  } : {
    back: "Engineering insights",
    blueprint: "Technical blueprint",
    inThis: "In this blueprint",
    fieldNote: "Field note",
    continue: "Continue the architecture conversation",
    ctaTitle: "Turn the blueprint into a system your team can own.",
    ctaDescription: "Talk with VORTEX about the constraints, interfaces, and operating model behind your next technical initiative.",
    cta: "Schedule a technical consultation",
    note: "This article links directly to the corresponding commercial solution for implementation planning.",
  };
  return (
    <main id="main-content" className="min-h-screen pt-32 sm:pt-44">
      <article>
        <header className="section-wrap pb-20 sm:pb-28">
          <Link href="/insights" className="focus-ring inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-champagne"><ArrowRight aria-hidden="true" size={14} className="rotate-180" /> {labels.back}</Link>
          <div className="mt-10 max-w-5xl"><p className="eyebrow mb-5"><BookOpen aria-hidden="true" size={13} className="text-gold" /> {labels.blueprint}</p><h1 className="display max-w-5xl text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] text-cream">{content.title}</h1><p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{content.description}</p><div className="mt-7 flex flex-wrap gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-wider text-champagne"><time dateTime={insight.published}>{new Date(`${insight.published}T00:00:00Z`).toLocaleDateString(arabic ? "ar-JO" : "en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })}</time><span aria-hidden="true">/</span><span>{content.readTime}</span></div></div>
        </header>
        <div className="section-wrap grid gap-12 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:items-start">
          <aside className="lg:sticky lg:top-28"><div className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6"><p className="font-mono text-xs font-bold uppercase tracking-wider text-gold">{labels.inThis}</p><ol className="mt-5 space-y-3">{content.sections.map((section, index) => <li key={section.heading} className="flex gap-3 text-sm text-muted"><span className="font-mono text-xs text-gold">0{index + 1}</span><span>{section.heading}</span></li>)}</ol></div><Link href={insight.solutionHref} className="focus-ring mt-4 block rounded-2xl border border-gold/30 bg-gold/10 p-6 text-sm font-semibold leading-relaxed text-champagne hover:border-gold hover:text-cream">{arabic ? "استكشف " : "Explore our "}{content.solutionLabel}<ArrowRight aria-hidden="true" size={14} className="ms-2 inline" /></Link></aside>
          <div className="max-w-3xl space-y-12">{content.sections.map((section, index) => <section key={section.heading} aria-labelledby={`insight-section-${index}`}><p className="font-mono text-xs uppercase tracking-wider text-gold">0{index + 1} / {labels.fieldNote}</p><h2 id={`insight-section-${index}`} className="mt-3 font-display text-3xl font-bold leading-tight text-cream sm:text-4xl">{section.heading}</h2><div className="mt-5 space-y-5 text-base leading-[1.85] text-muted sm:text-lg">{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>)}</div>
        </div>
        <div className="section-wrap py-20 sm:py-28"><div className="rounded-[2rem] border border-gold/25 bg-[#1F050C] p-7 sm:p-12"><p className="eyebrow mb-4"><Sparkles aria-hidden="true" size={13} className="text-gold" /> {labels.continue}</p><h2 className="display max-w-4xl text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.ctaTitle}</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{labels.ctaDescription}</p><Link href={`/?service=${encodeURIComponent(insight.solutionLabel)}#contact`} className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink">{labels.cta} <ArrowRight aria-hidden="true" size={14} /></Link><p className="mt-8 flex gap-2 border-t border-gold/15 pt-5 text-xs leading-relaxed text-muted"><Check aria-hidden="true" size={14} className="mt-0.5 shrink-0 text-gold" /> {labels.note}</p></div></div>
      </article>
    </main>
  );
}

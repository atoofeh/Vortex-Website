"use client";

import Link from "next/link";
import { ArrowRight, Check, Network, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import type { Solution } from "@/lib/seo-content";
import { arabicSolutions } from "@/lib/seo-translations";
import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/lib/i18n";

export function SolutionPage({ solution, initialLocale }: { solution: Solution; initialLocale?: Locale }) {
  const { locale } = useLanguage();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const arabic = (hydrated ? locale : (initialLocale ?? locale)) === "ar";
  const content = arabic ? { ...solution, ...arabicSolutions[solution.slug] } : solution;
  const labels = arabic ? {
    allSolutions: "كل الحلول",
    problemEyebrow: "المشكلة المؤسسية",
    problemTitle: "مصمم حول المخاطر التي تحتاج إلى إزالتها.",
    methodology: "المنهجية التقنية",
    architectureTitle: "حدود نظام يمكنك فحصها.",
    architectureDescription: "نقسم المعمارية إلى طبقات واضحة حتى تبقى حركة البيانات والصلاحيات والملكية التشغيلية وسلوك الفشل مرئية.",
    security: "الأمان والامتثال",
    securityTitle: "الضوابط جزء من التصميم.",
    securityDescription: "الأمان ليس خطوة لاحقة للنشر، بل يظهر في الهوية والعزل ومعالجة البيانات وقابلية التدقيق والتعافي الآمن.",
    outcomes: "ما الذي يتيحه هذا",
    outcomesTitle: "مبني للملكية والثقة والمرحلة التالية من النمو.",
    cta: "جدولة استشارة تقنية",
    architect: "تحدث مع مهندس معماري",
  } : {
    allSolutions: "All solutions",
    problemEyebrow: "The enterprise problem",
    problemTitle: "Designed around the risk you need to remove.",
    methodology: "Technical methodology",
    architectureTitle: "A system boundary you can inspect.",
    architectureDescription: "The architecture is decomposed into explicit layers so data movement, authorization, operational ownership, and failure behavior remain visible.",
    security: "Security & compliance",
    securityTitle: "Controls belong in the design.",
    securityDescription: "Security is not a deployment afterthought. It is expressed through identity, isolation, data handling, auditability, and the ability to recover safely.",
    outcomes: "What this enables",
    outcomesTitle: "Built for ownership, trust, and the next stage of growth.",
    cta: "Schedule a technical consultation",
    architect: "Talk to an architect",
  };
  return (
    <main id="main-content" className="min-h-screen pt-32 sm:pt-44">
      <section className="section-wrap pb-24 sm:pb-32">
        <div className="max-w-5xl">
          <Link href="/solutions" className="focus-ring inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted hover:text-champagne">
            <ArrowRight aria-hidden="true" size={14} className="rotate-180" /> {labels.allSolutions}
          </Link>
          <p className="eyebrow mt-10"><Sparkles aria-hidden="true" size={13} className="text-gold" /> {content.service}</p>
          <h1 className="display mt-5 max-w-5xl text-[clamp(3rem,7vw,6.8rem)] leading-[0.9] text-cream">{content.title}</h1>
          <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{content.description}</p>
          <Link href={`/?service=${encodeURIComponent(solution.service)}#contact`} className="focus-ring mt-9 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink shadow-[0_0_25px_rgba(212,175,55,0.35)] hover:brightness-110">
            {labels.cta} <ArrowRight aria-hidden="true" size={14} />
          </Link>
        </div>
      </section>

      <section className="section-wrap border-y border-gold/15 py-20 sm:py-28" aria-labelledby="solution-problem">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-start">
          <div><p className="eyebrow mb-4"><ShieldCheck aria-hidden="true" size={13} className="text-gold" /> {labels.problemEyebrow}</p><h2 id="solution-problem" className="display max-w-xl text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.problemTitle}</h2></div>
          <p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{content.problem}</p>
        </div>
      </section>

      <section className="section-wrap py-20 sm:py-28" aria-labelledby="solution-architecture">
        <div className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><Network aria-hidden="true" size={13} className="text-gold" /> {labels.methodology}</p><h2 id="solution-architecture" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.architectureTitle}</h2><p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{labels.architectureDescription}</p></div>
        <ol className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
          {content.architecture.map((layer, index) => <li key={layer.label} className="relative rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6"><span className="font-mono text-xs text-gold">0{index + 1}</span><h3 className="mt-7 font-display text-xl font-bold text-cream">{layer.label}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{layer.detail}</p>{index < content.architecture.length - 1 && <ArrowRight aria-hidden="true" size={16} className="absolute -end-2 top-1/2 z-10 hidden text-gold lg:block" />}</li>)}
        </ol>
      </section>

      <section className="section-wrap border-y border-gold/15 py-20 sm:py-28" aria-labelledby="solution-security">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div><p className="eyebrow mb-4"><ShieldCheck aria-hidden="true" size={13} className="text-gold" /> {labels.security}</p><h2 id="solution-security" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.securityTitle}</h2><p className="mt-6 max-w-lg text-base leading-relaxed text-muted">{labels.securityDescription}</p></div>
          <ul className="grid gap-3 sm:grid-cols-2">{content.security.map((item) => <li key={item} className="flex gap-3 rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-5 text-sm leading-relaxed text-cream/90"><Check aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-gold" />{item}</li>)}</ul>
        </div>
      </section>

      <section className="section-wrap py-20 sm:py-28" aria-labelledby="solution-outcomes">
        <div className="rounded-[2rem] border border-gold/25 bg-[#1F050C] p-7 sm:p-12"><p className="eyebrow mb-4"><Sparkles aria-hidden="true" size={13} className="text-gold" /> {labels.outcomes}</p><h2 id="solution-outcomes" className="display max-w-4xl text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.outcomesTitle}</h2><ul className="mt-9 grid gap-3 border-t border-gold/15 pt-7 sm:grid-cols-3">{content.outcomes.map((item) => <li key={item} className="flex gap-2 text-sm leading-relaxed text-muted"><Check aria-hidden="true" size={15} className="mt-0.5 shrink-0 text-gold" />{item}</li>)}</ul><Link href={`/?service=${encodeURIComponent(solution.service)}#contact`} className="focus-ring mt-9 inline-flex items-center gap-2 rounded-full border border-gold/30 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-champagne hover:border-gold hover:text-cream">{labels.architect} <ArrowRight aria-hidden="true" size={14} /></Link></div>
      </section>
    </main>
  );
}

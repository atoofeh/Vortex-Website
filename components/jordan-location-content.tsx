"use client";

import Link from "next/link";
import { ArrowRight, Check, Globe2, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/lib/i18n";

export function JordanLocationContent({ initialLocale }: { initialLocale?: Locale } = {}) {
  const { locale } = useLanguage();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const arabic = (hydrated ? locale : (initialLocale ?? locale)) === "ar";
  const labels = arabic ? {
    eyebrow: "VORTEX في الأردن",
    title: "ذكاء اصطناعي خاص وهندسة برمجيات مؤسسية في عمّان، الأردن.",
    intro: "VORTEX هي شركة هندسة تقنية مقرها عمّان، تصمم البنية التحتية الخاصة للذكاء الاصطناعي والبرمجيات المؤسسية والأدوات الداخلية الآمنة للمؤسسات في الأردن وحول العالم.",
    cta: "جدولة استشارة تقنية",
    solutions: "استكشف الحلول",
    whyEyebrow: "لماذا الأردن",
    whyTitle: "بنية تقنية حديثة للواقع التشغيلي المحلي.",
    whyDescription: "نساعد المؤسسات الأردنية على تحديث أنظمتها مع الحفاظ على التحكم في البيانات والهوية والتكاملات والتشغيل، مع إمكانية توسيع الحلول لخدمة فرق ومستخدمين حول العالم.",
    servicesEyebrow: "ما نقدمه من عمّان",
    servicesTitle: "من الذكاء الخاص إلى البرمجيات التي تدير العمل.",
    services: ["بنية تحتية خاصة للذكاء الاصطناعي والنماذج داخل المؤسسة", "أنظمة RAG خاصة للمعرفة المؤسسية والبحث الموثق", "برمجيات مؤسسية وأدوات داخلية آمنة", "هندسة السحابة وDevOps والنشر الهجين والمعزول"],
    sectorsEyebrow: "القطاعات التي نخدمها",
    sectorsTitle: "هندسة مسؤولة لقطاعات عالية الثقة.",
    sectors: ["البنوك والخدمات المالية", "الرعاية الصحية وعلوم الحياة", "الحكومة والعمليات الحرجة", "الشركات والخدمات التقنية"],
    worldwide: "من الأردن إلى العالم",
    worldwideDescription: "نبدأ من القيود الحقيقية للمؤسسة ونبني معماريات قابلة للتشغيل عبر المناطق الزمنية والبيئات المحلية والسحابية.",
  } : {
    eyebrow: "VORTEX in Jordan",
    title: "Private AI & enterprise software engineering in Amman, Jordan.",
    intro: "VORTEX is a technology engineering firm headquartered in Amman, designing private AI infrastructure, enterprise software, and secure internal tools for organizations in Jordan and worldwide.",
    cta: "Schedule a technical consultation",
    solutions: "Explore solutions",
    whyEyebrow: "Why Jordan",
    whyTitle: "Modern technology architecture for local operating realities.",
    whyDescription: "We help Jordanian organizations modernize while retaining control over data, identity, integrations, and operations—with architectures that can scale to teams and users around the world.",
    servicesEyebrow: "What we deliver from Amman",
    servicesTitle: "From private intelligence to software that runs the work.",
    services: ["Private AI infrastructure and on-premise model serving", "Private RAG systems for grounded enterprise knowledge", "Secure enterprise software and internal tools", "Cloud, DevOps, hybrid, and air-gapped deployment engineering"],
    sectorsEyebrow: "Sectors we support",
    sectorsTitle: "Accountable engineering for high-trust sectors.",
    sectors: ["Banking and financial services", "Healthcare and life sciences", "Government and critical operations", "Enterprise services and technology"],
    worldwide: "From Jordan to the world",
    worldwideDescription: "We start with the organization’s real constraints and build systems that operate across time zones, private environments, and public cloud.",
  };

  return <main id="main-content" className="min-h-screen pt-32 sm:pt-44"><section className="section-wrap pb-24 sm:pb-36"><div className="max-w-5xl"><p className="eyebrow mb-5"><MapPin aria-hidden="true" size={13} className="text-gold" /> {labels.eyebrow}</p><h1 className="display max-w-5xl text-[clamp(3.2rem,8vw,7.6rem)] leading-[0.88] text-cream">{labels.title}</h1><p className="mt-8 max-w-4xl text-xl leading-relaxed text-champagne sm:text-2xl">{labels.intro}</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/?service=Private%20AI%20Architecture#contact" className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink">{labels.cta} <ArrowRight aria-hidden="true" size={14} /></Link><Link href="/solutions" className="focus-ring inline-flex items-center gap-2 rounded-full border border-gold/30 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-champagne hover:border-gold hover:text-cream">{labels.solutions} <ArrowRight aria-hidden="true" size={14} /></Link></div></div></section><section className="section-wrap border-y border-gold/15 py-20 sm:py-28" aria-labelledby="jordan-why"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"><div><p className="eyebrow mb-4"><ShieldCheck aria-hidden="true" size={13} className="text-gold" /> {labels.whyEyebrow}</p><h2 id="jordan-why" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.whyTitle}</h2></div><p className="max-w-3xl text-lg leading-relaxed text-muted sm:text-xl">{labels.whyDescription}</p></div></section><section className="section-wrap py-20 sm:py-28" aria-labelledby="jordan-services"><div className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><Sparkles aria-hidden="true" size={13} className="text-gold" /> {labels.servicesEyebrow}</p><h2 id="jordan-services" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.servicesTitle}</h2></div><ul className="grid gap-3 md:grid-cols-2">{labels.services.map((service) => <li key={service} className="flex gap-3 rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6 text-sm leading-relaxed text-cream/90"><Check aria-hidden="true" size={16} className="mt-0.5 shrink-0 text-gold" />{service}</li>)}</ul></section><section className="section-wrap border-y border-gold/15 py-20 sm:py-28" aria-labelledby="jordan-sectors"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div><p className="eyebrow mb-4"><Globe2 aria-hidden="true" size={13} className="text-gold" /> {labels.sectorsEyebrow}</p><h2 id="jordan-sectors" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.sectorsTitle}</h2></div><div className="grid gap-3 sm:grid-cols-2">{labels.sectors.map((sector) => <p key={sector} className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-5 text-sm leading-relaxed text-muted">{sector}</p>)}</div></div></section><section className="section-wrap py-20 sm:py-28"><div className="rounded-[2rem] border border-gold/25 bg-[#1F050C] p-7 sm:p-12"><p className="eyebrow mb-4"><MapPin aria-hidden="true" size={13} className="text-gold" /> {labels.worldwide}</p><h2 className="display max-w-4xl text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.worldwideDescription}</h2><Link href="/?service=Private%20AI%20Architecture#contact" className="focus-ring mt-8 inline-flex items-center gap-2 rounded-full border border-gold/30 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-champagne hover:border-gold hover:text-cream">{labels.cta} <ArrowRight aria-hidden="true" size={14} /></Link></div></section></main>;
}

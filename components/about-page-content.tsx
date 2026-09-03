"use client";

import Link from "next/link";
import { ArrowRight, Check, Globe2, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { FaqSection } from "@/components/faq-section";
import { useLanguage } from "@/components/language-provider";

type ProfileLink = readonly [string, string];

export function AboutPageContent({ profileLinks }: { profileLinks: ProfileLink[] }) {
  const { locale } = useLanguage();
  const arabic = locale === "ar";
  const labels = arabic ? {
    eyebrow: "من هي VORTEX",
    title: "VORTEX: ذكاء اصطناعي خاص وهندسة برمجيات مؤسسية من الأردن إلى العالم.",
    intro: "VORTEX هي شركة متخصصة في البنية التحتية الخاصة للذكاء الاصطناعي وهندسة البرمجيات المؤسسية، تأسست ويقع مقرها الرئيسي في عمّان، الأردن، وتخدم المؤسسات حول العالم.",
    talk: "تحدث مع VORTEX",
    solutions: "استكشف الحلول",
    positionEyebrow: "موقفنا",
    positionTitle: "هندسة للملكية والثقة.",
    positionOne: "تصمم VORTEX البنية التحتية والذكاء الاصطناعي والبرمجيات وأنظمة البيانات والتجارب الرقمية التي تجعل تقنية المؤسسة مفيدة في الإنتاج. نعمل عبر الطبقات لأن أهم القرارات تقع بينها.",
    positionTwo: "ينطلق عملنا من مبدأ واضح: يجب أن تفهم المؤسسات أين تذهب بياناتها وكيف تعمل أنظمتها ومن يتحكم في التقنية التي تعتمد عليها. لذلك يبدأ الأمان والرصد والأداء وقابلية الصيانة من المعمارية.",
    regionEyebrow: "الأردن والعالم",
    regionTitle: "تقنية خاصة من الأردن، مبنية للعالم.",
    regionDescription: "من مقرنا في عمّان، تعمل VORTEX مع فرق حول العالم تحتاج إلى ذكاء اصطناعي وبرمجيات مؤسسية حديثة دون التخلي عن إقامة البيانات أو التحكم التشغيلي أو مسار واضح للملكية المحلية.",
    jordan: "المؤسسات الأردنية",
    jordanDescription: "بنية تحتية خاصة للذكاء الاصطناعي وأدوات داخلية آمنة ومنصات مؤسسية مصممة حول الواقع التشغيلي المحلي.",
    sovereignty: "سيادة البيانات",
    sovereigntyDescription: "معماريات تبقي البيانات الحساسة وأوزان النماذج وفهارس الاسترجاع وسجلات التدقيق داخل بيئة معتمدة، مع إدراج مراجعة الخصوصية والضوابط ضمن التسليم.",
    worldwide: "تسليم عالمي",
    worldwideDescription: "أنماط نشر سحابية وهجينة ومحلية ومعزولة للمؤسسات التي تعمل عبر الحدود والمناطق الزمنية.",
    sectorsEyebrow: "أين نساعد",
    sectorsTitle: "قطاعات عالية الثقة. ومسؤولية واضحة.",
    sectors: ["الخدمات المصرفية والمالية", "الرعاية الصحية وعلوم الحياة", "الحكومة والعمليات الحرجة", "خدمات المؤسسات والتقنية"],
    profilesEyebrow: "الملفات الرسمية",
    profilesTitle: "كيان واحد، وتمثيل متسق.",
    profilesDescription: "استخدم الملفات الرسمية أدناه للتحقق من VORTEX عبر الويب. يمكن ربط الملفات الموثقة الأخرى من خلال متغيرات البيئة الموجودة في .env.example.",
  } : {
    eyebrow: "Who VORTEX is",
    title: "VORTEX: private AI and enterprise software engineering from Jordan, for the world.",
    intro: "VORTEX is a private artificial intelligence infrastructure and enterprise software engineering firm founded and headquartered in Amman, Jordan, serving organizations worldwide.",
    talk: "Talk to VORTEX",
    solutions: "Explore solutions",
    positionEyebrow: "Our position",
    positionTitle: "Engineering for ownership and trust.",
    positionOne: "VORTEX designs the infrastructure, intelligence, software, data systems, and digital experiences that make an organization’s technology useful in production. We work across the stack because the most important decisions sit between layers.",
    positionTwo: "Our work is shaped by a simple principle: organizations should be able to understand where their data goes, how their systems behave, and who controls the technology they rely on. That means security, observability, performance, and maintainability are architecture concerns from the start.",
    regionEyebrow: "Jordan & worldwide",
    regionTitle: "Private technology from Jordan, built for the world.",
    regionDescription: "From our headquarters in Amman, VORTEX works with teams worldwide that need modern AI and enterprise software without giving up data residency, operational control, or a clear path to local ownership.",
    jordan: "Jordanian organizations",
    jordanDescription: "Private AI infrastructure, secure internal tools, and enterprise platforms designed around local operating realities.",
    sovereignty: "Data sovereignty",
    sovereigntyDescription: "Architectures that keep sensitive data, model weights, retrieval indexes, and audit records inside an approved environment, with privacy and regulatory review built into delivery.",
    worldwide: "Worldwide delivery",
    worldwideDescription: "Cloud, hybrid, on-premise, and air-gapped deployment patterns for organizations operating across borders and time zones.",
    sectorsEyebrow: "Where we help",
    sectorsTitle: "High-trust sectors. Clear accountability.",
    sectors: ["Banking and financial services", "Healthcare and life sciences", "Government and critical operations", "Enterprise services and technology"],
    profilesEyebrow: "Official profiles",
    profilesTitle: "One entity, consistently represented.",
    profilesDescription: "Use the official profiles below to verify VORTEX across the web. Additional verified profiles can be connected through the deployment environment variables documented in .env.example.",
  };

  return <main id="main-content" className="min-h-screen pt-32 sm:pt-44">
    <section className="section-wrap pb-24 sm:pb-36"><div className="max-w-5xl"><p className="eyebrow mb-5"><Sparkles aria-hidden="true" size={13} className="text-gold" /> {labels.eyebrow}</p><h1 className="display max-w-5xl text-[clamp(3.2rem,8vw,7.6rem)] leading-[0.88] text-cream">{labels.title}</h1><p className="mt-8 max-w-4xl text-xl leading-relaxed text-champagne sm:text-2xl">{labels.intro}</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/?service=Private%20AI%20Architecture#contact" className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink">{labels.talk} <ArrowRight aria-hidden="true" size={14} /></Link><Link href="/solutions" className="focus-ring inline-flex items-center gap-2 rounded-full border border-gold/30 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-champagne hover:border-gold hover:text-cream">{labels.solutions} <ArrowRight aria-hidden="true" size={14} /></Link></div></div></section>
    <section className="section-wrap border-y border-gold/15 py-20 sm:py-28" aria-labelledby="about-mission"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"><div><p className="eyebrow mb-4"><ShieldCheck aria-hidden="true" size={13} className="text-gold" /> {labels.positionEyebrow}</p><h2 id="about-mission" className="display max-w-xl text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.positionTitle}</h2></div><div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg"><p>{labels.positionOne}</p><p>{labels.positionTwo}</p></div></div></section>
    <section className="section-wrap py-20 sm:py-28" aria-labelledby="about-region"><div className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><MapPin aria-hidden="true" size={13} className="text-gold" /> {labels.regionEyebrow}</p><h2 id="about-region" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.regionTitle}</h2><p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{labels.regionDescription}</p></div><div className="grid gap-4 md:grid-cols-3"><article className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6"><Globe2 aria-hidden="true" className="text-gold" /><h3 className="mt-7 font-display text-2xl font-bold text-cream">{labels.jordan}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{labels.jordanDescription}</p></article><article className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6"><ShieldCheck aria-hidden="true" className="text-gold" /><h3 className="mt-7 font-display text-2xl font-bold text-cream">{labels.sovereignty}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{labels.sovereigntyDescription}</p></article><article className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6"><Sparkles aria-hidden="true" className="text-gold" /><h3 className="mt-7 font-display text-2xl font-bold text-cream">{labels.worldwide}</h3><p className="mt-3 text-sm leading-relaxed text-muted">{labels.worldwideDescription}</p></article></div></section>
    <section className="section-wrap border-y border-gold/15 py-20 sm:py-28" aria-labelledby="about-sectors"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"><div><p className="eyebrow mb-4"><Check aria-hidden="true" size={13} className="text-gold" /> {labels.sectorsEyebrow}</p><h2 id="about-sectors" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.sectorsTitle}</h2></div><div className="grid gap-3 sm:grid-cols-2">{labels.sectors.map((sector) => <p key={sector} className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-5 text-sm leading-relaxed text-muted">{sector}</p>)}</div></div></section>
    <section className="section-wrap py-20 sm:py-28" aria-labelledby="about-profiles"><div className="rounded-[2rem] border border-gold/25 bg-[#1F050C] p-7 sm:p-12"><p className="eyebrow mb-4"><Globe2 aria-hidden="true" size={13} className="text-gold" /> {labels.profilesEyebrow}</p><h2 id="about-profiles" className="display max-w-4xl text-4xl leading-[0.95] text-cream sm:text-6xl">{labels.profilesTitle}</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">{labels.profilesDescription}</p><div className="mt-8 flex flex-wrap gap-3">{profileLinks.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer" className="focus-ring rounded-full border border-gold/25 px-4 py-2 text-xs font-semibold text-champagne hover:border-gold hover:text-cream">{label}</a>)}</div></div></section>
    <FaqSection />
  </main>;
}

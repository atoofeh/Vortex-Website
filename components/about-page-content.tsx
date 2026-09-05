"use client";

import Link from "@/components/localized-link";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useLanguage } from "@/components/language-provider";
import type { Locale } from "@/lib/i18n";
import { leaders } from "@/lib/team";

type ProfileLink = readonly [string, string];
const copy = {
  en: {
    label: "About VORTEX", title: "Technology starts\nwith people.", intro: "We’re a private AI and software engineering company based in Amman, Jordan, working with businesses around the world.", detail: "We help organizations use AI on their own terms, and build the software and infrastructure that support it. That can mean a private knowledge assistant, an internal platform, or a new website or app.",
    teamLabel: "Our leadership", teamTitle: "Meet the people behind VORTEX.", teamIntro: "The team leading the company, from business direction and finance to commercial relationships.",
    workingLabel: "Working with us", workingTitle: "A clear scope.\nAn open conversation.",
    principles: [["Start with your business", "We discuss your goals, the people who will use the system, and the constraints it needs to work within before deciding what to build."], ["Stay involved as it takes shape", "We review the work with you along the way. The aim is to make decisions together while there is still time to refine them."], ["Plan beyond launch", "Deployment, documentation, handover, and any ongoing support are part of the conversation, so you know what happens next."]],
    engineering: "Explore our engineering approach", contactTitle: "Let’s talk about your next step.", contactText: "An idea, a question, or a system that needs improving. Send us a few sentences and we’ll reply to your enquiry within 12 hours.", talk: "Talk to our team", profiles: "Find VORTEX online", profilesText: "Follow our company channels to keep in touch.",
  },
  ar: {
    label: "عن VORTEX", title: "التقنية تبدأ\nبالناس.", intro: "نحن شركة للذكاء الاصطناعي الخاص وهندسة البرمجيات مقرها عمّان، الأردن، ونعمل مع شركات حول العالم.", detail: "نساعد المؤسسات على استخدام الذكاء الاصطناعي وفق احتياجاتها، ونبني البرمجيات والبنية التحتية التي تدعمه. قد يكون ذلك مساعداً خاصاً للمعرفة، أو منصة داخلية، أو موقعاً أو تطبيقاً جديداً.",
    teamLabel: "فريق القيادة", teamTitle: "تعرّف على الأشخاص خلف VORTEX.", teamIntro: "الفريق الذي يقود الشركة، من التوجه العام والإدارة المالية إلى العلاقات التجارية.",
    workingLabel: "العمل معنا", workingTitle: "نطاق واضح.\nوحوار مفتوح.",
    principles: [["نبدأ بعملك", "نناقش أهدافك والأشخاص الذين سيستخدمون النظام والقيود التي يجب مراعاتها، قبل تحديد ما سنبنيه."], ["تشارك في تشكيل المشروع", "نراجع العمل معك خلال التنفيذ. نهدف إلى اتخاذ القرارات معاً بينما لا يزال هناك مجال للتحسين."], ["نخطط لما بعد الإطلاق", "نناقش النشر والتوثيق والتسليم وأي دعم مستمر، لتعرف ما سيحدث في الخطوة التالية."]],
    engineering: "تعرّف على نهجنا الهندسي", contactTitle: "لنتحدث عن خطوتك القادمة.", contactText: "فكرة أو سؤال أو نظام يحتاج إلى تحسين. أرسل لنا بضعة أسطر وسنرد على استفسارك خلال 12 ساعة.", talk: "تحدث مع فريقنا", profiles: "تابع VORTEX", profilesText: "ابقَ على تواصل عبر حسابات الشركة الرسمية.",
  },
} as const;

export function AboutPageContent({ profileLinks, initialLocale }: { profileLinks: readonly ProfileLink[]; initialLocale?: Locale }) {
  const { locale } = useLanguage();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  const currentLocale = hydrated ? locale : (initialLocale ?? locale);
  const ar = currentLocale === "ar";
  const c = copy[currentLocale];
  return <main id="main-content" className="refresh-about-page">
    <section className="section-wrap refresh-about-hero"><p className="refresh-label">{c.label}</p><div className="refresh-about-hero-grid"><h1 className="display refresh-hero-title whitespace-pre-line">{c.title}</h1><div><p className="text-xl leading-relaxed text-cream sm:text-2xl">{c.intro}</p><p className="refresh-body mt-6">{c.detail}</p></div></div></section>
    <section id="leadership" className="section-wrap refresh-section" aria-labelledby="leadership-title"><div className="refresh-section-heading"><div><p className="refresh-label">{c.teamLabel}</p><h2 id="leadership-title" className="display refresh-title">{c.teamTitle}</h2></div><p className="refresh-body max-w-md">{c.teamIntro}</p></div><div className="refresh-team">{leaders.map(person => <article key={person.name} id={person.slug} className="refresh-person"><div className="refresh-person-monogram" aria-hidden="true">{person.initials}<span>{person.role}</span></div><h3 className="mt-6 text-xl font-semibold text-cream" dir="ltr">{person.name}</h3><p className="refresh-body mt-2">{ar ? person.arTitle : person.title}</p></article>)}</div></section>
    <section className="section-wrap refresh-section"><div className="refresh-method"><div><p className="refresh-label">{c.workingLabel}</p><h2 className="display refresh-title whitespace-pre-line">{c.workingTitle}</h2><Link href="/engineering" className="focus-ring refresh-link mt-7">{c.engineering}<ArrowRight size={16} className={ar ? "rotate-180" : ""} /></Link></div><ol className="refresh-steps">{c.principles.map(([title, text], i) => <li key={title}><span className="refresh-number">0{i + 1}</span><div><h3 className="text-xl font-semibold text-cream">{title}</h3><p className="refresh-body mt-3">{text}</p></div></li>)}</ol></div></section>
    <section className="section-wrap refresh-section"><div className="refresh-about-contact"><h2 className="display refresh-title">{c.contactTitle}</h2><p className="refresh-body mt-6 max-w-xl">{c.contactText}</p><Link href="/?contact=1" className="focus-ring refresh-primary mt-7">{c.talk}<ArrowRight size={16} className={ar ? "rotate-180" : ""} /></Link></div>{profileLinks.length > 0 && <div className="mt-12"><h2 className="text-lg font-semibold text-cream">{c.profiles}</h2><p className="refresh-body mt-2">{c.profilesText}</p><div className="mt-5 flex flex-wrap gap-6">{profileLinks.map(([label, url]) => <a key={label} href={url} target="_blank" rel="noreferrer" className="focus-ring refresh-link">{label}<ArrowRight size={14} className={ar ? "rotate-180" : ""} /></a>)}</div></div>}</section>
  </main>;
}

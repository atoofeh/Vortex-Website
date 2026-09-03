import type { Metadata } from "next";
import { AboutPageContent } from "@/components/about-page-content";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "عن VORTEX | هندسة الذكاء الاصطناعي والبرمجيات في الأردن والعالم",
  description: "VORTEX شركة بنية تحتية خاصة للذكاء الاصطناعي وهندسة برمجيات مؤسسية مقرها عمّان، الأردن، وتخدم المؤسسات حول العالم.",
  alternates: { canonical: "/ar/about", languages: { en: "/about", ar: "/ar/about", "x-default": "/about" } },
};

const profileLinks = [
  ["LinkedIn", "https://www.linkedin.com/company/vortexmind/"],
  ["Instagram", "https://www.instagram.com/vortexmind.tech/"],
  ["Facebook", "https://web.facebook.com/profile.php?id=61594225491476"],
] as const;

const jsonLd = { "@context": "https://schema.org", "@type": "AboutPage", "@id": "https://www.vortexmind.co/ar/about#aboutpage", "url": "https://www.vortexmind.co/ar/about", "name": "عن VORTEX", "inLanguage": "ar", "mainEntity": { "@id": "https://www.vortexmind.co/#organization" } };

export default function ArabicAboutPage() {
  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><AboutPageContent profileLinks={profileLinks} initialLocale="ar" /><div className="page-shell"><MarketingFooter /></div></>;
}

import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { MarketingFooter } from "@/components/marketing-home";
import { JordanLocationContent } from "@/components/jordan-location-content";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = pageMetadata({
  title: "الذكاء الاصطناعي الخاص وهندسة البرمجيات في الأردن | VORTEX",
  description: "VORTEX شركة هندسة تقنية مقرها عمّان، الأردن، تقدم البنية التحتية الخاصة للذكاء الاصطناعي والبرمجيات المؤسسية للمؤسسات حول العالم.",
  alternates: { canonical: "/ar/locations/jordan", languages: { en: "/locations/jordan", ar: "/ar/locations/jordan", "x-default": "/locations/jordan" } },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.vortexmind.co/ar/locations/jordan#service",
  "name": "الذكاء الاصطناعي الخاص وهندسة البرمجيات المؤسسية في الأردن",
  "url": "https://www.vortexmind.co/ar/locations/jordan",
  "provider": { "@id": "https://www.vortexmind.co/#organization" },
  "areaServed": [{ "@type": "Country", "name": "Jordan" }, { "@type": "Place", "name": "Worldwide" }],
  "serviceArea": { "@type": "Place", "name": "الأردن والعالم" },
  "description": "بنية تحتية خاصة للذكاء الاصطناعي وبرمجيات مؤسسية وأدوات داخلية آمنة وهندسة سحابية من عمّان إلى المؤسسات حول العالم.",
};

export default function ArabicJordanLocationPage() {
  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><JordanLocationContent initialLocale="ar" /><div className="page-shell"><MarketingFooter /></div></>;
}

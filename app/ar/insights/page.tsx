import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { InsightsIndexContent } from "@/components/insights-index-content";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = pageMetadata({ title: "رؤى هندسية ومخططات تقنية | VORTEX", description: "مخططات VORTEX التقنية عن نماذج اللغة الخاصة وRAG المؤسسي وتحديث الأنظمة البرمجية الحرجة.", alternates: { canonical: "/ar/insights", languages: { en: "/insights", ar: "/ar/insights", "x-default": "/insights" } } });

export default function ArabicInsightsPage() {
  return <><SiteHeader /><InsightsIndexContent initialLocale="ar" /><div className="page-shell"><MarketingFooter /></div></>;
}

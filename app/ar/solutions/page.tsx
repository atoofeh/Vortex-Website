import type { Metadata } from "next";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";
import { SolutionsIndexContent } from "@/components/solutions-index-content";

export const metadata: Metadata = { title: "حلول الذكاء الاصطناعي الخاص والأنظمة المؤسسية | VORTEX", description: "حلول VORTEX للبنية التحتية الخاصة للذكاء الاصطناعي وأنظمة RAG والأدوات الداخلية الآمنة للمؤسسات حول العالم.", alternates: { canonical: "/ar/solutions", languages: { en: "/solutions", ar: "/ar/solutions", "x-default": "/solutions" } } };

export default function ArabicSolutionsPage() {
  return <><SiteHeader /><SolutionsIndexContent initialLocale="ar" /><div className="page-shell"><MarketingFooter /></div></>;
}

import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";
import { InsightsIndexContent } from "@/components/insights-index-content";

export const metadata: Metadata = pageMetadata({
  title: "Engineering Insights & Technical Blueprints | VORTEX",
  description: "Technical blueprints from VORTEX on private LLMs, enterprise RAG retrieval, and modernizing critical software systems.",
  alternates: { canonical: "/insights", languages: { en: "/insights", ar: "/ar/insights", "x-default": "/insights" } },
});

export default function InsightsPage() {
  return <><SiteHeader /><InsightsIndexContent /><div className="page-shell"><MarketingFooter /></div></>;
}

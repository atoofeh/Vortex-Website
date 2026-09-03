import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { InsightArticle } from "@/components/insight-article";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";
import { insightBySlug, insights } from "@/lib/seo-content";
import { arabicInsights } from "@/lib/seo-translations";

export function generateStaticParams() { return insights.map((insight) => ({ slug: insight.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = arabicInsights[slug];
  if (!insight) return {};
  return { title: `${insight.title} | VORTEX`, description: insight.description, alternates: { canonical: `/ar/insights/${slug}`, languages: { en: `/insights/${slug}`, ar: `/ar/insights/${slug}`, "x-default": `/insights/${slug}` } } };
}

export default async function ArabicInsightRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insightBySlug[slug];
  if (!insight) notFound();
  return <><SiteHeader /><InsightArticle insight={insight} initialLocale="ar" /><div className="page-shell"><MarketingFooter /></div></>;
}

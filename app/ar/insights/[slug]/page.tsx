import { pageMetadata, serializeSchema, siteUrl } from "@/lib/seo";
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
  return pageMetadata({ title: `${insight.title} | VORTEX`, description: insight.description, alternates: { canonical: `/ar/insights/${slug}` }, openGraph: { type: "article", publishedTime: insightBySlug[slug]?.published } });
}

export default async function ArabicInsightRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insightBySlug[slug];
  if (!insight) notFound();
  const translated = arabicInsights[slug];
  const schema = { "@context": "https://schema.org", "@type": "TechArticle", headline: translated.title, description: translated.description, datePublished: insight.published, inLanguage: "ar", mainEntityOfPage: `${siteUrl}/ar/insights/${slug}`, author: { "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "VORTEX", url: `${siteUrl}/ar/about` }, publisher: { "@id": `${siteUrl}/#organization` } };
  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }} /><InsightArticle insight={insight} initialLocale="ar" /><div className="page-shell"><MarketingFooter /></div></>;
}

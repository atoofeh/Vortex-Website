import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";
import { InsightArticle } from "@/components/insight-article";
import { insightBySlug, insights } from "@/lib/seo-content";

export function generateStaticParams() { return insights.map((insight) => ({ slug: insight.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const insight = insightBySlug[slug];
  if (!insight) return {};
  return pageMetadata({ title: `${insight.title} | VORTEX Engineering`, description: insight.description, alternates: { canonical: `/insights/${insight.slug}`, languages: { en: `/insights/${insight.slug}`, ar: `/ar/insights/${insight.slug}`, "x-default": `/insights/${insight.slug}` } }, openGraph: { type: "article", publishedTime: insight.published, title: `${insight.title} | VORTEX Engineering`, description: insight.description } });
}

export default async function InsightRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const insight = insightBySlug[slug];
  if (!insight) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "TechArticle", "headline": insight.title, "description": insight.description, "datePublished": insight.published, "inLanguage": "en", "mainEntityOfPage": `https://www.vortexmind.co/insights/${insight.slug}`, "author": { "@type": "Organization", "@id": "https://www.vortexmind.co/#organization", "name": "VORTEX", "url": "https://www.vortexmind.co/about" }, "publisher": { "@id": "https://www.vortexmind.co/#organization" }, "about": { "@type": "Thing", "name": insight.solutionLabel } };
  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><InsightArticle insight={insight} /><div className="page-shell"><MarketingFooter /></div></>;
}

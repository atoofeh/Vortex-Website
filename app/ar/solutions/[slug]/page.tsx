import { pageMetadata, serializeSchema, siteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";
import { SolutionPage } from "@/components/solution-page";
import { solutions, type SolutionSlug } from "@/lib/seo-content";
import { arabicSolutions } from "@/lib/seo-translations";

export function generateStaticParams() { return Object.keys(solutions).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = arabicSolutions[slug as SolutionSlug];
  if (!solution) return {};
  return pageMetadata({ title: `${solution.title} | VORTEX`, description: solution.description, alternates: { canonical: `/ar/solutions/${slug}`, languages: { en: `/solutions/${slug}`, ar: `/ar/solutions/${slug}`, "x-default": `/solutions/${slug}` } } });
}

export default async function ArabicSolutionRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions[slug as SolutionSlug];
  if (!solution) notFound();
  const translated = arabicSolutions[slug as SolutionSlug];
  const schema = { "@context": "https://schema.org", "@type": "Service", name: translated.title, serviceType: translated.service, url: `${siteUrl}/ar/solutions/${slug}`, description: translated.description, provider: { "@id": `${siteUrl}/#organization` } };
  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }} /><SolutionPage solution={solution} initialLocale="ar" /><div className="page-shell"><MarketingFooter /></div></>;
}

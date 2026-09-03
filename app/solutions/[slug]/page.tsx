import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";
import { SolutionPage } from "@/components/solution-page";
import { solutions, type SolutionSlug } from "@/lib/seo-content";

export function generateStaticParams() { return Object.keys(solutions).map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions[slug as SolutionSlug];
  if (!solution) return {};
  return { title: `${solution.title} | VORTEX`, description: solution.description, alternates: { canonical: `/solutions/${solution.slug}` } };
}

export default async function SolutionRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = solutions[slug as SolutionSlug];
  if (!solution) notFound();
  const jsonLd = { "@context": "https://schema.org", "@type": "Service", "name": solution.title, "serviceType": solution.service, "url": `https://www.vortexmind.co/solutions/${solution.slug}`, "provider": { "@id": "https://www.vortexmind.co/#organization" }, "description": solution.description };
  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><SolutionPage solution={solution} /><div className="page-shell"><MarketingFooter /></div></>;
}

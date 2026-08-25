import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingFooter } from "@/components/marketing-home";
import { ServicePage, type ServiceSlug } from "@/components/service-page";
import { SiteHeader } from "@/components/site-header";

const slugs: ServiceSlug[] = ["artificial-intelligence", "web-development", "mobile-development", "enterprise-software", "infrastructure", "automation"];

export function generateStaticParams() { return slugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const title = slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  return { title: `${title} | VORTEX AI & IT Solutions`, description: `VORTEX engineering for ${title.toLowerCase()}, private infrastructure, and production systems.` };
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug as ServiceSlug)) notFound();
  return <><SiteHeader /><ServicePage slug={slug as ServiceSlug} /><div className="page-shell"><MarketingFooter /></div></>;
}

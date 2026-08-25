import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingFooter } from "@/components/marketing-home";
import { ServicePage, type ServiceSlug } from "@/components/service-page";
import { SiteHeader } from "@/components/site-header";
import { WebDevelopmentPage } from "@/components/web-development-page";

const slugs: ServiceSlug[] = ["artificial-intelligence", "web-development", "mobile-development", "enterprise-software", "infrastructure", "automation"];

export function generateStaticParams() { return slugs.map((slug) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  if (slug === "web-development") {
    return {
      title: "Digital Experiences | VORTEX",
      description: "VORTEX engineers premium websites, web applications, customer portals, and digital platforms from interface to production infrastructure.",
      alternates: { canonical: "/services/web-development" },
    };
  }
  const title = slug.replaceAll("-", " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
  return {
    title: `${title} | VORTEX`,
    description: `VORTEX engineering for ${title.toLowerCase()}, private infrastructure, and production systems.`,
    alternates: { canonical: `/services/${slug}` },
  };
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!slugs.includes(slug as ServiceSlug)) notFound();
  return <><SiteHeader />{slug === "web-development" ? <WebDevelopmentPage /> : <ServicePage slug={slug as ServiceSlug} />}<div className="page-shell"><MarketingFooter /></div></>;
}

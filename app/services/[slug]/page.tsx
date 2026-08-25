import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { MarketingFooter } from "@/components/marketing-home";
import { CapabilityPage } from "@/components/capability-page";
import type { ServiceSlug } from "@/components/service-page";
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
  const metadataBySlug: Partial<Record<ServiceSlug, Metadata>> = {
    "artificial-intelligence": {
      title: "Private AI Infrastructure & AI Systems | VORTEX",
      description: "VORTEX engineers private AI infrastructure, enterprise RAG, model serving, knowledge systems, and governed intelligence layers.",
      alternates: { canonical: "/services/artificial-intelligence" },
    },
    "enterprise-software": {
      title: "Enterprise Platforms & Custom Software | VORTEX",
      description: "VORTEX engineers enterprise platforms, internal operations systems, APIs, workflows, integrations, and production software.",
      alternates: { canonical: "/services/enterprise-software" },
    },
    "mobile-development": {
      title: "Mobile Product Engineering | VORTEX",
      description: "VORTEX engineers mobile products connected to application logic, secure APIs, data, integrations, notifications, and infrastructure.",
      alternates: { canonical: "/services/mobile-development" },
    },
    automation: {
      title: "Automation & Systems Integration | VORTEX",
      description: "VORTEX engineers workflow automation, systems integration, data automation, document workflows, and intelligent operations.",
      alternates: { canonical: "/services/automation" },
    },
    infrastructure: {
      title: "Cloud & Private Infrastructure | VORTEX",
      description: "VORTEX designs cloud, private, and hybrid infrastructure for applications, AI systems, data platforms, deployment, and operations.",
      alternates: { canonical: "/services/infrastructure" },
    },
  };
  if (metadataBySlug[slug as ServiceSlug]) return metadataBySlug[slug as ServiceSlug] as Metadata;
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
  return <><SiteHeader />{slug === "web-development" ? <WebDevelopmentPage /> : <CapabilityPage slug={slug as Exclude<ServiceSlug, "web-development">} />}<div className="page-shell"><MarketingFooter /></div></>;
}

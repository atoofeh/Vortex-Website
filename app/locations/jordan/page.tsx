import { pageMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { MarketingFooter } from "@/components/marketing-home";
import { JordanLocationContent } from "@/components/jordan-location-content";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = pageMetadata({
  title: "Private AI & Enterprise Software Engineering in Jordan | VORTEX",
  description: "VORTEX is headquartered in Amman, Jordan, delivering private AI infrastructure, enterprise software, secure internal tools, and cloud engineering worldwide.",
  alternates: { canonical: "/locations/jordan", languages: { en: "/locations/jordan", ar: "/ar/locations/jordan", "x-default": "/locations/jordan" } },
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://www.vortexmind.co/locations/jordan#service",
  "name": "Private AI and Enterprise Software Engineering in Jordan",
  "url": "https://www.vortexmind.co/locations/jordan",
  "provider": { "@id": "https://www.vortexmind.co/#organization" },
  "areaServed": [{ "@type": "Country", "name": "Jordan" }, { "@type": "Place", "name": "Worldwide" }],
  "serviceArea": { "@type": "Place", "name": "Jordan and worldwide" },
  "description": "Private AI infrastructure, enterprise software, secure internal tools, and cloud engineering delivered from Amman, Jordan to organizations worldwide.",
};

export default function JordanLocationPage() {
  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><JordanLocationContent /><div className="page-shell"><MarketingFooter /></div></>;
}

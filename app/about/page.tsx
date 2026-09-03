import type { Metadata } from "next";
import { MarketingFooter } from "@/components/marketing-home";
import { AboutPageContent } from "@/components/about-page-content";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About VORTEX | AI & Enterprise Software Engineering in Jordan and Worldwide",
  description: "VORTEX is a private AI infrastructure and enterprise software engineering firm headquartered in Amman, Jordan, serving organizations worldwide.",
  alternates: { canonical: "/about" },
};

const profileLinks = [
  ["LinkedIn", "https://www.linkedin.com/company/vortexmind/"],
  ["Instagram", "https://www.instagram.com/vortexmind.tech/"],
  ["Facebook", "https://web.facebook.com/profile.php?id=61594225491476"],
  ["Crunchbase", process.env.NEXT_PUBLIC_CRUNCHBASE_URL],
  ["GitHub", process.env.NEXT_PUBLIC_GITHUB_URL],
  ["Google Business Profile", process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL],
  ["Official registry", process.env.NEXT_PUBLIC_OFFICIAL_REGISTRY_URL],
] as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.vortexmind.co/about#aboutpage",
      "url": "https://www.vortexmind.co/about",
      "name": "About VORTEX",
      "description": "VORTEX is a private artificial intelligence infrastructure and enterprise software engineering firm headquartered in Amman, Jordan, serving organizations worldwide.",
      "mainEntity": { "@id": "https://www.vortexmind.co/#organization" },
    },
    {
      "@type": "Organization",
      "@id": "https://www.vortexmind.co/#organization",
      "name": "VORTEX",
      "legalName": "VORTEX Mind",
      "alternateName": ["Vortex Mind", "vortexmind.co", "VortexMind", "Vortex Tech"],
      "url": "https://www.vortexmind.co",
      "logo": "https://www.vortexmind.co/Logo.png",
      "description": "VORTEX is a private artificial intelligence infrastructure and enterprise software engineering firm founded and headquartered in Amman, Jordan, serving organizations worldwide.",
      "areaServed": ["Jordan", "Middle East", "GCC", "Worldwide"],
      "address": { "@type": "PostalAddress", "addressLocality": "Amman", "addressCountry": "JO" },
      "sameAs": profileLinks.map(([, url]) => url).filter((url): url is string => Boolean(url)),
      "knowsAbout": ["Artificial Intelligence", "Private AI Infrastructure", "Enterprise Software", "Cloud Architecture", "DevOps Engineering", "Data Sovereignty"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "VORTEX services",
        "itemListElement": [
          { "@type": "Service", "name": "Private AI Architecture" },
          { "@type": "Service", "name": "Custom Software Development" },
          { "@type": "Service", "name": "Cloud & DevOps Engineering" },
        ],
      },
      ...(process.env.NEXT_PUBLIC_FOUNDER_NAME ? {
        "founder": {
          "@type": "Person",
          "name": process.env.NEXT_PUBLIC_FOUNDER_NAME,
          ...(process.env.NEXT_PUBLIC_FOUNDER_URL ? { "url": process.env.NEXT_PUBLIC_FOUNDER_URL } : {}),
          ...(process.env.NEXT_PUBLIC_FOUNDER_ALUMNI_OF ? { "alumniOf": process.env.NEXT_PUBLIC_FOUNDER_ALUMNI_OF } : {}),
        },
      } : {}),
    },
  ],
};

export default function AboutPage() {
  const visibleProfileLinks = profileLinks.flatMap(([label, url]) => url ? [[label, url] as const] : []);
  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><AboutPageContent profileLinks={visibleProfileLinks} /><div className="page-shell"><MarketingFooter /></div></>;
}

import { MarketingFooter } from "@/components/marketing-home";
import { AboutPageContent } from "@/components/about-page-content";
import { SiteHeader } from "@/components/site-header";
import { companyProfiles } from "@/lib/organization";
import { pageMetadata, serializeSchema, siteUrl } from "@/lib/seo";

export const metadata = pageMetadata({ title: "About VORTEX & Our Leadership | Amman, Jordan", description: "Meet VORTEX and its leadership team. Private AI and software engineering based in Amman, Jordan, working with businesses worldwide.", alternates: { canonical: "/about" } });

export default function AboutPage() {
  const schema = { "@context": "https://schema.org", "@type": "AboutPage", "@id": `${siteUrl}/about#page`, url: `${siteUrl}/about`, name: "About VORTEX", inLanguage: "en", mainEntity: { "@id": `${siteUrl}/#organization` } };
  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }} /><AboutPageContent profileLinks={companyProfiles} /><div className="page-shell"><MarketingFooter /></div></>;
}

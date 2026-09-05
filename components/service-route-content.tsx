import { SiteHeader } from "@/components/site-header";
import { MarketingFooter } from "@/components/marketing-home";
import { CapabilityPage } from "@/components/capability-page";
import { WebDevelopmentPage } from "@/components/web-development-page";
import { FaqSection } from "@/components/faq-section";
import { marketingServices } from "@/lib/marketing-content";
import { languagePath, serializeSchema, siteUrl } from "@/lib/seo";
import type { Locale } from "@/lib/i18n";
import type { ServiceSlug } from "@/components/service-page";

export function ServiceRouteContent({ slug, locale }: { slug: ServiceSlug; locale: Locale }) {
  const service = marketingServices.find(item => item.slug === slug)!;
  const url = `${siteUrl}${languagePath(`/services/${slug}`, locale)}`;
  const schema = { "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`, url, name: service[locale].title, description: service[locale].description, provider: { "@id": `${siteUrl}/#organization` }, areaServed: "Worldwide" };
  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(schema) }} />{slug === "web-development" ? <WebDevelopmentPage /> : <CapabilityPage slug={slug} />}<FaqSection initialLocale={locale} /><div className="page-shell"><MarketingFooter /></div></>;
}

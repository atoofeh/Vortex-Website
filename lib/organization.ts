import { marketingServices } from "@/lib/marketing-content";
import { leaders } from "@/lib/team";
import { siteUrl } from "@/lib/seo";

export const companyProfiles = [
  ["LinkedIn", "https://www.linkedin.com/company/vortexmind/"],
  ["Instagram", "https://www.instagram.com/vortexmind.tech/"],
  ["Facebook", "https://web.facebook.com/profile.php?id=61594225491476"],
  ["Crunchbase", process.env.NEXT_PUBLIC_CRUNCHBASE_URL],
  ["GitHub", process.env.NEXT_PUBLIC_GITHUB_URL],
  ["Google Business Profile", process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL],
  ["Official registry", process.env.NEXT_PUBLIC_OFFICIAL_REGISTRY_URL],
].flatMap(([label, url]) => url && /^https?:\/\//.test(url) ? [[label!, url] as const] : []);

export const organizationGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization", "@id": `${siteUrl}/#organization`, name: "VORTEX", url: siteUrl,
      logo: `${siteUrl}/logo-emblem-icon.png`,
      description: "VORTEX is a private AI and software engineering company based in Amman, Jordan, serving businesses worldwide.",
      sameAs: companyProfiles.map(([, url]) => url),
      address: { "@type": "PostalAddress", addressLocality: "Amman", addressCountry: "JO" },
      areaServed: "Worldwide",
      contactPoint: { "@type": "ContactPoint", email: "contact@vortexmind.co", contactType: "sales", availableLanguage: ["English", "Arabic"] },
      employee: leaders.map(person => ({ "@type": "Person", "@id": `${siteUrl}/about#${person.slug}`, name: person.name, jobTitle: person.title, url: `${siteUrl}/about#${person.slug}`, worksFor: { "@id": `${siteUrl}/#organization` } })),
      hasOfferCatalog: { "@type": "OfferCatalog", name: "VORTEX services", itemListElement: marketingServices.map(service => ({ "@type": "Offer", itemOffered: { "@type": "Service", "@id": `${siteUrl}/services/${service.slug}#service`, name: service.en.title, url: `${siteUrl}/services/${service.slug}` } })) },
    },
    { "@type": "WebSite", "@id": `${siteUrl}/#website`, url: siteUrl, name: "VORTEX", inLanguage: ["en", "ar"], publisher: { "@id": `${siteUrl}/#organization` } },
  ],
};

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Globe2, MapPin, ShieldCheck, Sparkles } from "lucide-react";
import { MarketingFooter } from "@/components/marketing-home";
import { FaqSection } from "@/components/faq-section";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "About VORTEX | AI & Enterprise Software Engineering in Jordan and Worldwide",
  description: "VORTEX is a private AI infrastructure and enterprise software engineering firm headquartered in Amman, Jordan, serving organizations worldwide.",
  alternates: { canonical: "/about" },
};

const profileLinks = [
  ["LinkedIn", "https://www.linkedin.com/company/vortexmind/"],
  ["Instagram", "https://www.instagram.com/vortexmindtech/"],
  ["Crunchbase", process.env.NEXT_PUBLIC_CRUNCHBASE_URL],
  ["GitHub", process.env.NEXT_PUBLIC_GITHUB_URL],
  ["Google Business Profile", process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL],
  ["Official registry", process.env.NEXT_PUBLIC_OFFICIAL_REGISTRY_URL],
] as const;

export default function AboutPage() {
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
          "name": "VORTEX Mind services",
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

  return <><SiteHeader /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><main id="main-content" className="min-h-screen pt-32 sm:pt-44">
    <section className="section-wrap pb-24 sm:pb-36"><div className="max-w-5xl"><p className="eyebrow mb-5"><Sparkles aria-hidden="true" size={13} className="text-gold" /> Who VORTEX is</p><h1 className="display max-w-5xl text-[clamp(3.2rem,8vw,7.6rem)] leading-[0.88] text-cream">VORTEX: private AI and enterprise software engineering from Jordan, for the world.</h1><p className="mt-8 max-w-4xl text-xl leading-relaxed text-champagne sm:text-2xl">VORTEX is a private artificial intelligence infrastructure and enterprise software engineering firm founded and headquartered in Amman, Jordan, serving organizations worldwide.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/?service=Private%20AI%20Architecture#contact" className="focus-ring inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold via-champagne to-gold px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-ink">Talk to VORTEX <ArrowRight aria-hidden="true" size={14} /></Link><Link href="/solutions" className="focus-ring inline-flex items-center gap-2 rounded-full border border-gold/30 px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-champagne hover:border-gold hover:text-cream">Explore solutions <ArrowRight aria-hidden="true" size={14} /></Link></div></div></section>

    <section className="section-wrap border-y border-gold/15 py-20 sm:py-28" aria-labelledby="about-mission"><div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start"><div><p className="eyebrow mb-4"><ShieldCheck aria-hidden="true" size={13} className="text-gold" /> Our position</p><h2 id="about-mission" className="display max-w-xl text-4xl leading-[0.95] text-cream sm:text-6xl">Engineering for ownership and trust.</h2></div><div className="space-y-5 text-base leading-relaxed text-muted sm:text-lg"><p>VORTEX designs the infrastructure, intelligence, software, data systems, and digital experiences that make an organization’s technology useful in production. We work across the stack because the most important decisions sit between layers.</p><p>Our work is shaped by a simple principle: organizations should be able to understand where their data goes, how their systems behave, and who controls the technology they rely on. That means security, observability, performance, and maintainability are architecture concerns from the start.</p></div></div></section>

    <section className="section-wrap py-20 sm:py-28" aria-labelledby="about-region"><div className="mb-12 max-w-3xl"><p className="eyebrow mb-4"><MapPin aria-hidden="true" size={13} className="text-gold" /> Jordan & worldwide</p><h2 id="about-region" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">Private technology from Jordan, built for the world.</h2><p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">From our headquarters in Amman, VORTEX works with teams worldwide that need modern AI and enterprise software without giving up data residency, operational control, or a clear path to local ownership.</p></div><div className="grid gap-4 md:grid-cols-3"><article className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6"><Globe2 aria-hidden="true" className="text-gold" /><h3 className="mt-7 font-display text-2xl font-bold text-cream">Jordanian organizations</h3><p className="mt-3 text-sm leading-relaxed text-muted">Private AI infrastructure, secure internal tools, and enterprise platforms designed around local operating realities.</p></article><article className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6"><ShieldCheck aria-hidden="true" className="text-gold" /><h3 className="mt-7 font-display text-2xl font-bold text-cream">Data sovereignty</h3><p className="mt-3 text-sm leading-relaxed text-muted">Architectures that keep sensitive data, model weights, retrieval indexes, and audit records inside an approved environment, with privacy and regulatory review built into delivery.</p></article><article className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-6"><Sparkles aria-hidden="true" className="text-gold" /><h3 className="mt-7 font-display text-2xl font-bold text-cream">Worldwide delivery</h3><p className="mt-3 text-sm leading-relaxed text-muted">Cloud, hybrid, on-premise, and air-gapped deployment patterns for organizations operating across borders and time zones.</p></article></div></section>

    <section className="section-wrap border-y border-gold/15 py-20 sm:py-28" aria-labelledby="about-sectors"><div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-start"><div><p className="eyebrow mb-4"><Check aria-hidden="true" size={13} className="text-gold" /> Where we help</p><h2 id="about-sectors" className="display text-4xl leading-[0.95] text-cream sm:text-6xl">High-trust sectors. Clear accountability.</h2></div><div className="grid gap-3 sm:grid-cols-2"><p className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-5 text-sm leading-relaxed text-muted">Banking and financial services</p><p className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-5 text-sm leading-relaxed text-muted">Healthcare and life sciences</p><p className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-5 text-sm leading-relaxed text-muted">Government and critical operations</p><p className="rounded-2xl border border-gold/20 bg-[#2D0812]/50 p-5 text-sm leading-relaxed text-muted">Enterprise services and technology</p></div></div></section>

    <section className="section-wrap py-20 sm:py-28" aria-labelledby="about-profiles"><div className="rounded-[2rem] border border-gold/25 bg-[#1F050C] p-7 sm:p-12"><p className="eyebrow mb-4"><Globe2 aria-hidden="true" size={13} className="text-gold" /> Official profiles</p><h2 id="about-profiles" className="display max-w-4xl text-4xl leading-[0.95] text-cream sm:text-6xl">One entity, consistently represented.</h2><p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">Use the official profiles below to verify VORTEX across the web. Additional verified profiles can be connected through the deployment environment variables documented in <code>.env.example</code>.</p><div className="mt-8 flex flex-wrap gap-3">{profileLinks.map(([label, url]) => url ? <a key={label} href={url} target="_blank" rel="noreferrer" className="focus-ring rounded-full border border-gold/25 px-4 py-2 text-xs font-semibold text-champagne hover:border-gold hover:text-cream">{label}</a> : null)}</div></div></section>
    <FaqSection />
  </main><div className="page-shell"><MarketingFooter /></div></>;
}

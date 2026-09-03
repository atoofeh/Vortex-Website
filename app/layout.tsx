import type { Metadata, Viewport } from "next";
import { Cairo, Geist, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-content";
import { ThemeProvider } from "@/components/theme-provider";
import { VortexEmblemField } from "@/components/vortex-emblem-field";
import { LanguageProvider } from "@/components/language-provider";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const displayFont = Playfair_Display({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"], display: "swap" });
const arabicFont = Cairo({ subsets: ["arabic"], variable: "--font-arabic", weight: ["400", "500", "600", "700"], display: "swap" });

export const viewport: Viewport = {
  themeColor: "#1F050C",
  colorScheme: "dark",
};

const siteDescription = "VORTEX designs private AI infrastructure, custom enterprise systems, and high-performance cloud architecture. Build your sovereign intelligence today.";
const optionalProfileUrls = [
  process.env.NEXT_PUBLIC_CRUNCHBASE_URL,
  process.env.NEXT_PUBLIC_GITHUB_URL,
  process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL,
  process.env.NEXT_PUBLIC_OFFICIAL_REGISTRY_URL,
].filter((url): url is string => Boolean(url));
const founderName = process.env.NEXT_PUBLIC_FOUNDER_NAME;
const founderUrl = process.env.NEXT_PUBLIC_FOUNDER_URL;
const founderAlumniOf = process.env.NEXT_PUBLIC_FOUNDER_ALUMNI_OF;

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vortexmind.co"),
  title: "Private AI Infrastructure & Enterprise Software Engineering | VORTEX",
  description: siteDescription,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/logo-emblem-icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo-emblem-icon.png" },
    ],
  },
  openGraph: {
    title: "Private AI Infrastructure & Enterprise Software Engineering | VORTEX",
    description: siteDescription,
    siteName: siteConfig.fullName,
    url: "https://www.vortexmind.co",
    images: [
      {
        url: "/Logo.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} Emblem`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private AI Infrastructure & Enterprise Software Engineering | VORTEX",
    description: siteDescription,
    images: ["/Logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.vortexmind.co/#organization",
      "name": "VORTEX",
      "url": "https://www.vortexmind.co",
      "logo": "https://www.vortexmind.co/Logo.png",
      "description": siteConfig.thesis,
      "legalName": "VORTEX Mind",
      "alternateName": ["Vortex Mind", "vortexmind.co", "VortexMind", "Vortex Tech"],
      "sameAs": [
        "https://www.linkedin.com/company/vortexmind/",
        "https://www.instagram.com/vortexmindtech/",
        ...optionalProfileUrls
      ],
      "areaServed": ["Jordan", "Middle East", "GCC", "Worldwide"],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "VORTEX engineering services",
        "itemListElement": [
          { "@id": "https://www.vortexmind.co/#private-ai-architecture" },
          { "@id": "https://www.vortexmind.co/#custom-software-development" },
          { "@id": "https://www.vortexmind.co/#cloud-devops-engineering" }
        ]
      },
      ...(founderName ? {
        "founder": {
          "@type": "Person",
          "name": founderName,
          ...(founderUrl ? { "url": founderUrl } : {}),
          ...(founderAlumniOf ? { "alumniOf": founderAlumniOf } : {})
        }
      } : {}),
      "knowsAbout": [
        "Artificial Intelligence",
        "Private Cloud Infrastructure",
        "Enterprise Software",
        "Retrieval-Augmented Generation",
        "Cloud and DevOps Engineering",
        "Cybersecurity Architecture"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Amman",
        "addressCountry": "JO"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "email": siteConfig.contactEmail,
        "contactType": "customer support"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.vortexmind.co/#private-ai-architecture",
      "name": "Private AI Architecture",
      "provider": {
        "@id": "https://www.vortexmind.co/#organization"
      },
      "serviceType": "Private AI Architecture",
      "areaServed": ["Jordan", "Middle East", "GCC", "Worldwide"],
      "serviceArea": { "@type": "Place", "name": "Worldwide" },
      "description": "Private model serving, enterprise RAG, air-gapped inference, and governed AI systems deployed inside the client perimeter."
    },
    {
      "@type": "Service",
      "@id": "https://www.vortexmind.co/#custom-software-development",
      "name": "Custom Software Development",
      "provider": {
        "@id": "https://www.vortexmind.co/#organization"
      },
      "serviceType": "Custom Software Development",
      "areaServed": ["Jordan", "Middle East", "GCC", "Worldwide"],
      "serviceArea": { "@type": "Place", "name": "Worldwide" },
      "description": "Custom enterprise portals, internal tools, APIs, workflows, and digital products engineered from architecture through production."
    },
    {
      "@type": "Service",
      "@id": "https://www.vortexmind.co/#cloud-devops-engineering",
      "name": "Cloud & DevOps Engineering",
      "provider": {
        "@id": "https://www.vortexmind.co/#organization"
      },
      "serviceType": "Cloud and DevOps Engineering",
      "areaServed": ["Jordan", "Middle East", "GCC", "Worldwide"],
      "serviceArea": { "@type": "Place", "name": "Worldwide" },
      "description": "Private, hybrid, and cloud-native infrastructure with secure deployment pipelines, observability, reliability, and operational ownership."
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${displayFont.variable} ${arabicFont.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-[#D4AF37] selection:text-[#1F050C]">
        <ThemeProvider>
          <LanguageProvider>
            <VortexEmblemField />
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

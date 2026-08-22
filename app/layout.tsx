import type { Metadata, Viewport } from "next";
import { Geist, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site-content";
import { ThemeProvider } from "@/components/theme-provider";
import { VortexEmblemField } from "@/components/vortex-emblem-field";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const displayFont = Playfair_Display({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"], display: "swap" });

export const viewport: Viewport = {
  themeColor: "#1F050C",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vortexmind.co"),
  title: `${siteConfig.fullName} — ${siteConfig.tagline}`,
  description: siteConfig.thesis,
  icons: {
    icon: [
      { url: "/logo-emblem-icon.png", type: "image/png" },
    ],
    apple: [
      { url: "/logo-emblem-icon.png" },
    ],
  },
  openGraph: {
    title: `${siteConfig.fullName} — ${siteConfig.tagline}`,
    description: siteConfig.thesis,
    siteName: siteConfig.fullName,
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
    title: `${siteConfig.fullName} — ${siteConfig.tagline}`,
    description: siteConfig.thesis,
    images: ["/Logo.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.vortexmind.co/#organization",
      "name": "VORTEX — AI & IT Solutions",
      "url": "https://www.vortexmind.co",
      "logo": "https://www.vortexmind.co/Logo.png",
      "description": siteConfig.thesis,
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
      "@id": "https://www.vortexmind.co/#service",
      "name": "Sovereign AI & Private Infrastructure",
      "provider": {
        "@id": "https://www.vortexmind.co/#organization"
      },
      "serviceType": "Private AI Computing Infrastructure & Agent Orchestration",
      "description": siteConfig.thesis
    }
  ]
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${displayFont.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased selection:bg-[#D4AF37] selection:text-[#1F050C]">
        <ThemeProvider>
          <VortexEmblemField />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

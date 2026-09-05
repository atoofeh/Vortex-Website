import type { Viewport } from "next";
import { Cairo, Geist, JetBrains_Mono, Playfair_Display } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { VortexEmblemField } from "@/components/vortex-emblem-field";
import { LanguageProvider } from "@/components/language-provider";
import { pageMetadata, serializeSchema, siteUrl } from "@/lib/seo";
import { organizationGraph } from "@/lib/organization";

const sans = Geist({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });
const displayFont = Playfair_Display({ subsets: ["latin"], variable: "--font-display", weight: ["400", "500", "600", "700"], display: "swap" });
const arabicFont = Cairo({ subsets: ["arabic"], variable: "--font-arabic", weight: ["400", "500", "600", "700"], display: "swap" });

export const viewport: Viewport = { themeColor: "#1F050C", colorScheme: "dark" };

export const metadata = pageMetadata({
  metadataBase: new URL(siteUrl),
  title: "Private AI & Software Engineering in Jordan | VORTEX",
  description: "Private AI built around your business, in an environment you control. VORTEX builds AI infrastructure, business software, websites, and apps from Amman, Jordan.",
  alternates: { canonical: "/" },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION || undefined },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  icons: { icon: [{ url: "/logo-emblem-icon.png", type: "image/png" }], apple: [{ url: "/logo-emblem-icon.png" }] },
});

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${sans.variable} ${mono.variable} ${displayFont.variable} ${arabicFont.variable}`} suppressHydrationWarning>
    <head><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeSchema(organizationGraph) }} /></head>
    <body className="font-sans antialiased selection:bg-[#D4AF37] selection:text-[#1F050C]"><ThemeProvider><LanguageProvider><VortexEmblemField />{children}</LanguageProvider></ThemeProvider></body>
  </html>;
}

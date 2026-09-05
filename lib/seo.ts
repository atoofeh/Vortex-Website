import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export const siteUrl = "https://www.vortexmind.co";

export function languagePath(path: string, locale: Locale): string {
  const base = path.replace(/^\/ar(?=\/|$)/, "") || "/";
  return locale === "ar" ? (base === "/" ? "/ar" : `/ar${base}`) : base;
}

/** Keep canonical URLs, language alternatives, and shared previews in sync. */
export function pageMetadata(metadata: Metadata): Metadata {
  const canonical = String(metadata.alternates?.canonical ?? "/");
  const path = canonical.startsWith("http") ? new URL(canonical).pathname : canonical;
  const arabic = path === "/ar" || path.startsWith("/ar/");
  const title = typeof metadata.title === "string" ? metadata.title : "VORTEX";
  const description = metadata.description ?? "Private AI and software engineering from Amman, Jordan.";
  return {
    ...metadata,
    alternates: { ...metadata.alternates, canonical: path, languages: { en: languagePath(path, "en"), ar: languagePath(path, "ar"), "x-default": languagePath(path, "en") } },
    openGraph: {
      type: "website", siteName: "VORTEX", title, description, url: `${siteUrl}${path === "/" ? "" : path}`,
      locale: arabic ? "ar_JO" : "en_US", alternateLocale: [arabic ? "en_US" : "ar_JO"],
      images: [{ url: "/Logo.png", alt: "VORTEX — Private AI and software engineering" }],
      ...metadata.openGraph,
    },
    twitter: { card: "summary_large_image", title, description, images: ["/Logo.png"], ...metadata.twitter },
  };
}

export function serializeSchema(value: unknown): string {
  return JSON.stringify(value).replace(/</g, "\\u003c");
}

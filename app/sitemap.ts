import type { MetadataRoute } from "next";
import { insights, solutions } from "@/lib/seo-content";
import { marketingServices } from "@/lib/marketing-content";
import { languagePath, siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/about", "/engineering", "/locations/jordan", "/solutions", "/insights",
    ...marketingServices.map(({ slug }) => `/services/${slug}`),
    ...Object.keys(solutions).map(slug => `/solutions/${slug}`),
    ...insights.map(({ slug }) => `/insights/${slug}`),
  ];
  // Omit lastModified until real editorial revision dates are maintained.
  // A rebuild alone does not mean every page's content changed.
  return paths.flatMap(path => (["en", "ar"] as const).map(locale => ({
    url: `${siteUrl}${languagePath(path, locale) === "/" ? "" : languagePath(path, locale)}`,
    alternates: { languages: { en: `${siteUrl}${path === "/" ? "" : path}`, ar: `${siteUrl}${languagePath(path, "ar")}`, "x-default": `${siteUrl}${path === "/" ? "" : path}` } },
  })));
}

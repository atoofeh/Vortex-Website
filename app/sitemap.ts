import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.vortexmind.co";
  const serviceSlugs = [
    "artificial-intelligence",
    "web-development",
    "mobile-development",
    "enterprise-software",
    "infrastructure",
    "automation",
  ];
  const solutionSlugs = ["on-premise-llm", "private-rag-systems", "secure-internal-tools"];
  const insightSlugs = [
    "private-llms-air-gapped-clusters",
    "vector-databases-vs-hybrid-search-enterprise-rag",
    "modernizing-monolithic-enterprise-portals",
  ];
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/engineering`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    ...solutionSlugs.map((slug) => ({
      url: `${baseUrl}/solutions/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...insightSlugs.map((slug) => ({
      url: `${baseUrl}/insights/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
    ...serviceSlugs.map((slug) => ({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

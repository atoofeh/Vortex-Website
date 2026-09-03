import type { Metadata } from "next";
import { MarketingFooter } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";
import { SolutionsIndexContent } from "@/components/solutions-index-content";

export const metadata: Metadata = {
  title: "Private AI & Secure Enterprise Solutions | VORTEX",
  description: "Explore VORTEX solutions for on-premise LLM deployment, private RAG systems, and secure internal enterprise tools.",
  alternates: { canonical: "/solutions" },
};

export default function SolutionsIndexPage() {
  return <><SiteHeader /><SolutionsIndexContent /><div className="page-shell"><MarketingFooter /></div></>;
}

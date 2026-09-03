import type { Metadata } from "next";
import { MarketingFooter } from "@/components/marketing-home";
import { EngineeringOverview } from "@/components/engineering-overview";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Enterprise Software Engineering & Technical Architecture | VORTEX",
  description: "How VORTEX engineers experience, software, intelligence, data, and infrastructure as one connected system.",
  alternates: { canonical: "/engineering" },
};

export default function EngineeringPage() {
  return <><SiteHeader /><EngineeringOverview /><div className="page-shell"><MarketingFooter /></div></>;
}

import { notFound } from "next/navigation";
import { ServiceRouteContent } from "@/components/service-route-content";
import { marketingServices } from "@/lib/marketing-content";
import { pageMetadata } from "@/lib/seo";

export function generateStaticParams() { return marketingServices.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = marketingServices.find(item => item.slug === slug);
  if (!service) notFound();
  return pageMetadata({ title: `${service.en.title} | VORTEX`, description: service.en.description, alternates: { canonical: `/services/${slug}` } });
}

export default async function ServiceRoute({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = marketingServices.find(item => item.slug === slug);
  if (!service) notFound();
  return <ServiceRouteContent slug={service.slug} locale="en" />;
}

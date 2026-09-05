import { notFound } from "next/navigation";
import { marketingServices } from "@/lib/marketing-content";
import { pageMetadata } from "@/lib/seo";
import { ServiceRouteContent } from "@/components/service-route-content";

export { generateStaticParams } from "@/app/services/[slug]/page";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = marketingServices.find(item => item.slug === slug);
  if (!service) notFound();
  return pageMetadata({ title: `${service.ar.title} | VORTEX`, description: service.ar.description, alternates: { canonical: `/ar/services/${slug}` } });
}

export default async function ArabicServiceRoute(props: { params: Promise<{ slug: string }> }) {
  const { slug } = await props.params;
  const service = marketingServices.find(item => item.slug === slug);
  if (!service) notFound();
  return <ServiceRouteContent slug={service.slug} locale="ar" />;
}

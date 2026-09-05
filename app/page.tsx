"use client";

import dynamic from "next/dynamic";
import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { MarketingFooter, MarketingHome } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";
import { useLanguage } from "@/components/language-provider";

const LeadModal = dynamic(() => import("@/components/lead-modal").then((module) => module.LeadModal), { ssr: false });

function EnquiryFromUrl({ onOpen }: { onOpen: (service?: string) => void }) {
  const params = useSearchParams();
  useEffect(() => {
    const service = params.get("service");
    if (service || params.has("contact")) onOpen(service || undefined);
  }, [params, onOpen]);
  return null;
}

export default function Home() {
  const { locale } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  const openModal = useCallback((service?: string) => {
    setSelectedService(service);
    setModalOpen(true);
  }, []);

  const closeModal = () => {
    setModalOpen(false);
    const url = new URL(window.location.href);
    if (url.searchParams.has("contact") || url.searchParams.has("service")) {
      url.searchParams.delete("contact");
      url.searchParams.delete("service");
      window.history.replaceState(null, "", `${url.pathname}${url.search}${url.hash}`);
    }
  };

  return (
    <>
      <Suspense fallback={null}><EnquiryFromUrl onOpen={openModal} /></Suspense>
      <a href="#main-content" aria-label={locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"} className="focus-ring sr-only fixed start-4 top-4 z-[80] rounded-full bg-gold px-4 py-2 text-sm font-bold text-ink focus:not-sr-only">{locale === "ar" ? "انتقل إلى المحتوى" : "Skip to content"}</a>
      <SiteHeader onOpenModal={() => openModal()} />
      <div className="page-shell"><MarketingHome onOpenModal={openModal} /><MarketingFooter /></div>
      <LeadModal isOpen={modalOpen} initialService={selectedService} onClose={closeModal} />
    </>
  );
}

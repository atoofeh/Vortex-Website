"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { MarketingFooter, MarketingHome } from "@/components/marketing-home";
import { SiteHeader } from "@/components/site-header";

const LeadModal = dynamic(() => import("@/components/guided-lead-modal").then((module) => module.GuidedLeadModal), { ssr: false });

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const service = params.get("service");
    if (service) {
      setSelectedService(service);
      setModalOpen(true);
    }
  }, []);

  const openModal = (service?: string) => {
    setSelectedService(service);
    setModalOpen(true);
  };

  return (
    <>
      <a href="#main-content" className="focus-ring sr-only fixed start-4 top-4 z-[80] rounded-full bg-gold px-4 py-2 text-sm font-bold text-ink focus:not-sr-only">Skip to content</a>
      <SiteHeader onOpenModal={() => openModal()} />
      <div className="page-shell"><MarketingHome onOpenModal={openModal} /><MarketingFooter /></div>
      <LeadModal isOpen={modalOpen} initialService={selectedService} onClose={() => setModalOpen(false)} />
    </>
  );
}

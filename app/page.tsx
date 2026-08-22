"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Capabilities } from "@/components/capabilities";
import { ClosingCta, Footer } from "@/components/closing-cta";
import { Hero } from "@/components/hero";
import { PipelineFlow } from "@/components/pipeline-flow";
import { SystemTelemetryRail } from "@/components/pill-ribbon";
import { ProofStrip } from "@/components/proof-strip";
import { SecurityArchitecture } from "@/components/security-architecture";
import { SiteHeader } from "@/components/site-header";
import { SovereigntyPerimeter } from "@/components/sovereignty-perimeter";
import { SystemThinking } from "@/components/system-thinking";
import { WaveDivider } from "@/components/wave-divider";
import { FaqSection } from "@/components/faq-section";

const LeadModal = dynamic(
  () => import("@/components/lead-modal").then((module) => module.LeadModal),
  { ssr: false },
);

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <a
        href="#main-content"
        className="focus-ring sr-only fixed left-4 top-4 z-[80] rounded-full bg-gold px-4 py-2 text-sm font-bold text-ink focus:not-sr-only"
      >
        Skip to content
      </a>

      <SiteHeader onOpenModal={() => setModalOpen(true)} />

      <div className="page-shell">
        <main id="main-content">
          <Hero onOpenModal={() => setModalOpen(true)} />
          <SystemTelemetryRail />
          <PipelineFlow />
          <ProofStrip />
          <WaveDivider />
          <Capabilities onOpenModal={() => setModalOpen(true)} />
          <WaveDivider flip />
          <SystemThinking />
          <SovereigntyPerimeter onOpenModal={() => setModalOpen(true)} />
          <WaveDivider />
          <SecurityArchitecture />
          <FaqSection />
          <ClosingCta onOpenModal={() => setModalOpen(true)} />
        </main>
        <Footer />
      </div>

      <LeadModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

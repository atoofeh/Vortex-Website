"use client";

import { ArrowRight, Cpu, Database, Layers, Network, ShieldCheck, Sparkles, type LucideIcon } from "lucide-react";
import { useState, type KeyboardEvent } from "react";

type ArchitectureUseCase = "documentParsing" | "inventoryReconciliation" | "supportAgentMesh";

type ArchitectureTelemetry = {
  label: string;
  value: string;
};

type ArchitecturePhase = {
  id: string;
  step: string;
  phaseName: string;
  title: string;
  icon: LucideIcon;
  inputStream: string;
  kernelTransformation: string;
  committedOutput: string;
  telemetry: readonly ArchitectureTelemetry[];
};

type ArchitectureFlow = {
  label: string;
  phases: readonly ArchitecturePhase[];
};

// These values are capability characteristics, not deployment performance claims.
// Keeping the telemetry in the phase data means every use case renders through one
// trusted schema instead of maintaining separate, drifting panel implementations.
const SOVEREIGN_TELEMETRY: readonly ArchitectureTelemetry[] = [
  { label: "Egress Status", value: "0 Bytes External" },
  { label: "Memory Boundary", value: "Encrypted RAM" },
  { label: "Model Weights", value: "Sovereign Local" },
  { label: "Audit Trail", value: "Cryptographic Hash" },
];

// The architecture tabs are intentionally data-driven: changing a use case swaps
// all six phases while preserving the same phase strip and telemetry panel.
const ARCHITECTURE_FLOWS: Record<ArchitectureUseCase, ArchitectureFlow> = {
  documentParsing: {
    label: "Automated Document Parsing",
    phases: [
      {
        id: "document-ingest", step: "01", phaseName: "INGEST", title: "Invoice & Contract Intake", icon: Database,
        inputStream: "Scanned PDFs and email attachments picked up from a watched internal folder; OCR and chunking run on local hardware.",
        kernelTransformation: "OCR text is normalized, split into retrieval-ready chunks, and indexed inside the private data boundary.",
        committedOutput: "Structured document and searchable local context", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "document-analyse", step: "02", phaseName: "ANALYSE", title: "Field Extraction", icon: Layers,
        inputStream: "The local document text, supplier records, and the existing finance data model.",
        kernelTransformation: "Vendor, amount, dates, terms, and line items are extracted and matched against the existing supplier table.",
        committedOutput: "Validated invoice and contract fields", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "document-reason", step: "03", phaseName: "REASON", title: "Policy Check", icon: Cpu,
        inputStream: "Extracted fields, supplier status, procurement rules, and prior document references.",
        kernelTransformation: "The document is tested against spend thresholds, approved vendors, contract expiry, and duplicate detection rules.",
        committedOutput: "Policy decision with traceable exception reasons", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "document-orchestrate", step: "04", phaseName: "ORCHESTRATE", title: "Routing", icon: Network,
        inputStream: "Policy result, approval matrix, and the document’s responsible cost centre or owner.",
        kernelTransformation: "Clean documents queue for posting; exceptions route to the responsible approver with the reason attached.",
        committedOutput: "Approval-ready posting route", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "document-execute", step: "05", phaseName: "EXECUTE", title: "System of Record Write", icon: ShieldCheck,
        inputStream: "Approved document fields and the target ERP or finance database record.",
        kernelTransformation: "The approved record is written to the ERP or finance database with a signed audit entry.",
        committedOutput: "Committed finance record with signed audit entry", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "document-optimise", step: "06", phaseName: "OPTIMISE", title: "Correction Loop", icon: Sparkles,
        inputStream: "Human corrections, approval outcomes, and extraction exceptions from the completed batch.",
        kernelTransformation: "Corrections are captured and folded back into extraction accuracy for the next batch.",
        committedOutput: "Improved local extraction rules and review queue", telemetry: SOVEREIGN_TELEMETRY,
      },
    ],
  },
  inventoryReconciliation: {
    label: "ERP Inventory Reconciliation",
    phases: [
      {
        id: "inventory-ingest", step: "01", phaseName: "INGEST", title: "Inventory & Order Intake", icon: Database,
        inputStream: "Warehouse counts, purchase orders, goods receipts, and stock movements read from internal ERP and warehouse systems.",
        kernelTransformation: "SKU, location, quantity, and movement records are normalized and joined inside the private network.",
        committedOutput: "Reconciled local inventory context", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "inventory-analyse", step: "02", phaseName: "ANALYSE", title: "Stock Position", icon: Layers,
        inputStream: "Normalized stock movements, item master data, warehouse locations, and open purchase orders.",
        kernelTransformation: "SKU quantities, locations, reservations, and open orders are matched to the current stock position.",
        committedOutput: "Item-level stock position with discrepancies", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "inventory-reason", step: "03", phaseName: "REASON", title: "Replenishment Policy", icon: Cpu,
        inputStream: "Current stock, minimum and maximum levels, supplier lead times, and open order commitments.",
        kernelTransformation: "Shortage, overstock, and reorder conditions are evaluated against replenishment and exception rules.",
        committedOutput: "Replenishment decision with explainable variance", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "inventory-orchestrate", step: "04", phaseName: "ORCHESTRATE", title: "Exception Routing", icon: Network,
        inputStream: "Discrepancies, affected warehouses, supplier ownership, and the approval matrix.",
        kernelTransformation: "Shortages, overstock, and count variances route to the responsible operations owner with context attached.",
        committedOutput: "Prioritized reconciliation work queue", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "inventory-execute", step: "05", phaseName: "EXECUTE", title: "ERP Inventory Write", icon: ShieldCheck,
        inputStream: "Approved count corrections, stock adjustments, and replenishment actions.",
        kernelTransformation: "Approved adjustments are written to the ERP with the source records and decision captured in the audit trail.",
        committedOutput: "Updated inventory record with signed audit entry", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "inventory-optimise", step: "06", phaseName: "OPTIMISE", title: "Forecast Loop", icon: Sparkles,
        inputStream: "Reconciliation outcomes, corrections, supplier confirmations, and recurring variance patterns.",
        kernelTransformation: "Confirmed corrections are folded into future exception rules and replenishment review priorities.",
        committedOutput: "Improved local inventory control loop", telemetry: SOVEREIGN_TELEMETRY,
      },
    ],
  },
  supportAgentMesh: {
    label: "Customer Support Agent Mesh",
    phases: [
      {
        id: "support-ingest", step: "01", phaseName: "INGEST", title: "Support Intake", icon: Database,
        inputStream: "Tickets, email threads, call transcripts, and account records collected from the internal helpdesk and CRM.",
        kernelTransformation: "Conversation history is normalized, redacted where required, and indexed on local infrastructure.",
        committedOutput: "Searchable local case context", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "support-analyse", step: "02", phaseName: "ANALYSE", title: "Intent & Customer Context", icon: Layers,
        inputStream: "The active case, customer account, product history, prior resolutions, and service entitlements.",
        kernelTransformation: "Intent, urgency, account context, and related cases are extracted and matched to internal records.",
        committedOutput: "Classified case with relevant customer context", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "support-reason", step: "03", phaseName: "REASON", title: "Resolution Policy", icon: Cpu,
        inputStream: "Classified intent, service-level rules, entitlement data, and the approved internal knowledge base.",
        kernelTransformation: "The case is tested against support policy, escalation rules, and permitted response actions.",
        committedOutput: "Resolution plan with policy-backed rationale", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "support-orchestrate", step: "04", phaseName: "ORCHESTRATE", title: "Agent Handoff", icon: Network,
        inputStream: "Resolution plan, case priority, specialist queues, and required internal system actions.",
        kernelTransformation: "Billing, technical, and account tasks are handed to the right agent or human owner with context attached.",
        committedOutput: "Coordinated case resolution workflow", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "support-execute", step: "05", phaseName: "EXECUTE", title: "Case & System Update", icon: ShieldCheck,
        inputStream: "Approved response, case state, internal notes, and permitted CRM or service-system actions.",
        kernelTransformation: "The response and system updates are committed with the responsible agent and action history recorded.",
        committedOutput: "Updated case with attributable action history", telemetry: SOVEREIGN_TELEMETRY,
      },
      {
        id: "support-optimise", step: "06", phaseName: "OPTIMISE", title: "Review Loop", icon: Sparkles,
        inputStream: "Resolution outcomes, human edits, escalations, and customer feedback from completed cases.",
        kernelTransformation: "Agent outcomes and approved corrections are folded back into local retrieval and routing rules.",
        committedOutput: "Improved private support playbook", telemetry: SOVEREIGN_TELEMETRY,
      },
    ],
  },
};

const ARCHITECTURE_TABS: readonly { id: ArchitectureUseCase; label: string }[] = [
  { id: "documentParsing", label: ARCHITECTURE_FLOWS.documentParsing.label },
  { id: "inventoryReconciliation", label: ARCHITECTURE_FLOWS.inventoryReconciliation.label },
  { id: "supportAgentMesh", label: ARCHITECTURE_FLOWS.supportAgentMesh.label },
];

export function SystemThinking() {
  const [activeUseCase, setActiveUseCase] = useState<ArchitectureUseCase>("documentParsing");
  const [activePhase, setActivePhase] = useState(0);
  const currentFlow = ARCHITECTURE_FLOWS[activeUseCase];
  const current = currentFlow.phases[activePhase];
  const Icon = current.icon;

  const selectUseCase = (useCase: ArchitectureUseCase) => {
    // Start each scenario at INGEST so switching tabs never leaves the buyer
    // looking at a late-stage phase without its preceding context.
    setActiveUseCase(useCase);
    setActivePhase(0);
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let nextIndex = index;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex = (index + 1) % ARCHITECTURE_TABS.length;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex = (index - 1 + ARCHITECTURE_TABS.length) % ARCHITECTURE_TABS.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = ARCHITECTURE_TABS.length - 1;
    if (nextIndex === index) return;

    event.preventDefault();
    const nextTab = ARCHITECTURE_TABS[nextIndex];
    selectUseCase(nextTab.id);
    document.getElementById(`architecture-tab-${nextTab.id}`)?.focus();
  };

  return (
    <section id="architecture" className="relative overflow-hidden py-28 sm:py-40">
      <div className="section-wrap">
        {/* Section Header */}
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-4">
            <Sparkles size={13} className="text-gold" />
            Signature Architecture Flow
          </p>
          <h2 className="display text-3xl leading-[0.94] text-cream sm:text-5xl lg:text-6xl">
            Watch the system <span className="iridescent">think.</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            How a raw enterprise query transforms into a deterministic, secure action inside your private perimeter. Zero external calls, zero telemetry egress.
          </p>
        </div>

        {/* Use-case tabs let a buyer see the same private architecture applied to
            three concrete workflows without duplicating the visual component. */}
        <div
          aria-label="Architecture use cases"
          className="no-scrollbar -mx-6 mb-8 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-3 sm:px-0"
          role="tablist"
        >
          {ARCHITECTURE_TABS.map((tab, index) => {
            const selected = activeUseCase === tab.id;
            return (
              <button
                key={tab.id}
                id={`architecture-tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="architecture-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => selectUseCase(tab.id)}
                onKeyDown={(event) => handleTabKeyDown(event, index)}
                data-cursor="interactive"
                className={
                  "focus-ring flex min-h-14 shrink-0 items-center rounded-2xl border p-3.5 text-left font-mono text-[0.68rem] font-bold uppercase tracking-[0.08em] transition-all motion-reduce:transition-none sm:justify-center sm:p-4 " +
                  (selected
                    ? "border-gold bg-gold/20 text-cream shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                    : "border-gold/20 bg-[#1F050C]/60 text-muted hover:border-gold/40 hover:text-cream")
                }
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        <div id="architecture-panel" role="tabpanel" aria-labelledby={`architecture-tab-${activeUseCase}`}>
          {/* Interactive Step Navigator */}
          <div className="no-scrollbar -mx-6 mb-8 flex gap-2 overflow-x-auto px-6 pb-2 sm:mx-0 sm:grid sm:grid-cols-6 sm:px-0">
            {currentFlow.phases.map((phase, index) => (
              <button
                key={phase.id}
                type="button"
                onClick={() => setActivePhase(index)}
                data-cursor="interactive"
                className={
                  "focus-ring flex shrink-0 items-center gap-2.5 rounded-2xl border p-3.5 text-left transition-all motion-reduce:transition-none sm:flex-col sm:items-start sm:p-4 " +
                  (activePhase === index
                    ? "border-gold bg-gold/20 text-cream shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                    : "border-gold/20 bg-[#1F050C]/60 text-muted hover:border-gold/40 hover:text-cream")
                }
              >
                <div className="flex items-center gap-2 font-mono text-[0.65rem] font-bold tracking-widest text-champagne">
                  <span>{phase.step}</span>
                  <span className="opacity-60">{"//"}</span>
                  <span>{phase.phaseName}</span>
                </div>
                <div className="text-xs font-semibold text-cream sm:text-sm">
                  {phase.title}
                </div>
              </button>
            ))}
          </div>

          {/* Illuminated Stage Canvas */}
          <div className="relative overflow-hidden rounded-3xl border border-gold/30 bg-[#1F050C] p-7 shadow-[0_20px_50px_rgba(15,2,6,0.7)] backdrop-blur-2xl sm:p-10">
            <div
              aria-hidden="true"
              className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_30%,rgba(212,175,55,0.12),transparent_50%)]"
            />

            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left: Phase Details */}
              <div className="min-h-[30rem] lg:col-span-7">
                <div className="mb-4 flex items-center gap-3">
                  <span className="rounded-full border border-gold/40 bg-[#2D0812] px-3.5 py-1 font-mono text-[0.65rem] font-bold tracking-widest text-champagne">
                    PHASE {current.step} OF 06
                  </span>
                  <span className="font-mono text-xs text-muted">
                    Boundary: <strong className="text-cream">{current.telemetry[2].value}</strong>
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-cream sm:text-4xl">
                  {current.title}
                </h3>

                {/* Data Transformation Steps */}
                <div className="mt-8 space-y-4 font-mono text-xs">
                  <div className="rounded-xl border border-gold/15 bg-[#2D0812]/70 p-4">
                    <span className="mb-1 block text-[0.6rem] font-bold uppercase tracking-wider text-muted">
                      Input Stream
                    </span>
                    <p className="font-sans text-xs text-cream/90 sm:text-sm">
                      {current.inputStream}
                    </p>
                  </div>

                  <div className="rounded-xl border border-gold/25 bg-gold/10 p-4">
                    <span className="mb-1 block text-[0.6rem] font-bold uppercase tracking-wider text-gold">
                      Internal Kernel Transformation
                    </span>
                    <p className="font-sans text-xs font-semibold text-cream sm:text-sm">
                      {current.kernelTransformation}
                    </p>
                  </div>

                  <div className="rounded-xl border border-gold/15 bg-[#2D0812]/70 p-4">
                    <span className="mb-1 block text-[0.6rem] font-bold uppercase tracking-wider text-champagne">
                      Committed Output
                    </span>
                    <p className="font-sans text-xs text-cream/90 sm:text-sm">
                      {current.committedOutput}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Technical Telemetry & Navigation */}
              <div className="flex min-h-[30rem] flex-col justify-between gap-6 rounded-2xl border border-gold/20 bg-[#2D0812]/80 p-6 sm:p-8 lg:col-span-5">
                <div>
                  <div className="flex items-center justify-between border-b border-gold/15 pb-4">
                    <div className="flex items-center gap-2.5 font-mono text-xs font-bold text-champagne">
                      <Icon size={18} className="text-gold" />
                      <span>{current.phaseName} STACK</span>
                    </div>
                    <span className="font-mono text-xs font-bold text-gold">
                      {current.telemetry[0].value}
                    </span>
                  </div>

                  <div className="mt-5 space-y-3 font-mono text-xs text-muted">
                    {current.telemetry.map((item) => (
                      <div key={item.label} className="flex justify-between gap-4">
                        <span>{item.label}:</span>
                        <strong className="text-right text-cream">{item.value}</strong>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress & Next Phase Trigger */}
                <div className="border-t border-gold/15 pt-5">
                  <div className="mb-4 flex items-center justify-between font-mono text-[0.65rem] text-muted">
                    <span>Cycle Progress</span>
                    <span className="font-bold text-champagne">
                      {Math.round(((activePhase + 1) / currentFlow.phases.length) * 100)}%
                    </span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-[#140207]">
                    <div
                      className="h-full bg-gradient-to-r from-gold to-champagne transition-all duration-300 motion-reduce:transition-none"
                      style={{ width: `${((activePhase + 1) / currentFlow.phases.length) * 100}%` }}
                    />
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setActivePhase((prev) => (prev > 0 ? prev - 1 : currentFlow.phases.length - 1))}
                      className="focus-ring rounded-sm font-mono text-xs font-bold text-muted hover:text-cream"
                    >
                      Previous
                    </button>
                    <button
                      type="button"
                      onClick={() => setActivePhase((prev) => (prev + 1) % currentFlow.phases.length)}
                      className="focus-ring flex items-center gap-1.5 rounded-full bg-gold/20 px-4 py-1.5 font-mono text-xs font-bold text-champagne hover:bg-gold hover:text-ink"
                    >
                      <span>Next Phase</span>
                      <ArrowRight size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

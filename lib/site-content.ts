export const siteConfig = {
  name: "VORTEX",
  fullName: "VORTEX — AI & IT Solutions",
  tagline: "Private AI & Sovereign Infrastructure",
  headline: "Intelligence without boundaries",
  subheadline: "Private AI. Autonomous systems. Sovereign infrastructure.",
  thesis:
    "VORTEX builds the private computing fabrics that let an organisation run AI on its own hardware, inside its own perimeter, under its own control.",
  primaryCta: "Request Architecture Assessment",
  primaryCtaHref: "#contact",
  secondaryCta: "Explore Technical Blueprint",
  secondaryCtaHref: "#architecture",
  contactEmail: "contact@vortex-tech.com",
  contactHref: "mailto:contact@vortex-tech.com",
  location: "Amman, Jordan",
  nav: [
    { label: "Capabilities", href: "#capabilities" },
    { label: "Architecture", href: "#pipeline" },
    { label: "Security", href: "#security" },
    { label: "Contact", href: "#contact" },
  ],
  footerLinks: [
    { label: "Technical Capabilities", href: "#capabilities" },
    { label: "Reference Architecture", href: "#pipeline" },
    { label: "Security Model", href: "#security" },
  ],
  referenceDeployment: {
    badge: "REFERENCE ARCHITECTURE · ILLUSTRATIVE",
    topology: "Hybrid H100 / Bare-Metal Clusters",
    residency: "Air-Gapped Local VPC",
    inference: "vLLM / TensorRT-LLM Microservices",
    state: "Distributed Zero-Egress Mesh",
  },
  valuePillars: [
    "Zero data egress guarantee",
    "On-premise & air-gapped deployment",
    "Deterministic enterprise security",
  ],
};

export const pipelineStages = [
  {
    step: "01",
    tag: "DATA",
    title: "Private Data Ingestion",
    description:
      "Connect internal SQL databases, document archives, and unstructured file stores. Everything is indexed inside your network boundary; nothing is sent to an external service.",
    output: "Isolated vector index & local memory store",
  },
  {
    step: "02",
    tag: "COMPUTE",
    title: "Dedicated Private GPU Clusters",
    description:
      "Bare-metal GPU nodes (NVIDIA / AMD) provisioned and partitioned for you alone. No shared tenancy, no cloud queue, no per-token metering.",
    output: "Dedicated compute cluster online",
  },
  {
    step: "03",
    tag: "MODELS",
    title: "Your Own Fine-Tuned Models",
    description:
      "Open-weight models tuned on your data and stored on your hardware. The weights are your property and they never leave the perimeter.",
    output: "Sovereign model weights, locally held",
  },
  {
    step: "04",
    tag: "AGENTS",
    title: "Autonomous Task Agents",
    description:
      "Agents that read your systems, take real actions, and hand work between each other — with every step logged, attributable, and reversible.",
    output: "Deterministic action, fully audited",
  },
  {
    step: "05",
    tag: "SEC",
    title: "Zero-Trust Access & Audit",
    description:
      "Granular role permissions, encryption at rest and in transit, and a complete audit trail of every query, action, and access event.",
    output: "Immutable audit log",
  },
  {
    step: "06",
    tag: "DEPLOY",
    title: "On-Premise, Hybrid, or Air-Gapped",
    description:
      "Self-hosted with Docker / Kubernetes on your own infrastructure. No vendor lock-in and no external runtime dependency.",
    output: "Deployed inside client perimeter",
  },
];

export const capabilities = [
  {
    id: "01",
    code: "SYS-01",
    title: "Sovereign AI Fabrics",
    summary: "Private model inference and fine-tuning on your dedicated hardware.",
    points: [
      "Local inference servers running TensorRT-LLM and vLLM without third-party APIs",
      "Air-gapped model fine-tuning harness for proprietary enterprise knowledge",
      "Zero telemetry egress with strict cryptographic boundary enforcement",
    ],
    businessConsequence:
      "Eliminates third-party API downtime, per-token billing volatility, and external data leakage risks.",
  },
  {
    id: "02",
    code: "SYS-02",
    title: "Autonomous Agent Mesh",
    summary: "Distributed multi-agent orchestration with synchronized memory graphs.",
    points: [
      "Sub-millisecond inter-agent communication across local memory buses",
      "Deterministic state management preventing hallucination and memory corruption",
      "Parallel task decomposition with automated error recovery workflows",
    ],
    businessConsequence:
      "Enables complex multi-step enterprise workflows to execute autonomously without manual supervision.",
  },
  {
    id: "03",
    code: "SYS-03",
    title: "Private Compute Substrates",
    summary: "High-density bare-metal GPU and private cloud infrastructure.",
    points: [
      "Bare-metal GPU cluster design optimized for sustained inference throughput",
      "Kubernetes and Slurm workload scheduling with custom GPU kernel tuning",
      "Automated multi-node failover with zero loss of execution state",
    ],
    businessConsequence:
      "Delivers consistent sub-millisecond latency while drastically reducing long-term cloud compute expenditure.",
  },
  {
    id: "04",
    code: "SYS-04",
    title: "Zero-Trust Cyber Defense",
    summary: "Hardware-enforced confidential computing and auditability.",
    points: [
      "Confidential computing enclaves protecting weights and in-flight activations",
      "Role-based vector access controls with granular cryptographic signing",
      "Tamper-proof immutable ledger logging for compliance verification",
    ],
    businessConsequence:
      "Satisfies strict regulatory audits for financial, healthcare, and critical government infrastructure.",
  },
];

export const showcaseSteps = [
  {
    number: "01",
    name: "Ingest & Index",
    label: "Local Vector Ingestion",
    detail:
      "Connect and vectorize internal enterprise silos inside your isolated VPC boundary without external API dependencies.",
    metric: "100%",
    metricLabel: "local vector residency",
    badges: ["Air-Gapped", "Zero Telemetry", "vLLM Active"],
    hudLabel: "Residency Status",
    hudValue: "Isolated",
    bar: 85,
    color: "#D4AF37",
  },
  {
    number: "02",
    name: "Reason & Mesh",
    label: "Autonomous Orchestration",
    detail:
      "Coordinate multi-agent reasoning threads across dedicated GPU memory graphs with sub-millisecond inter-process latency.",
    metric: "< 1.2ms",
    metricLabel: "inter-process latency",
    badges: ["Agent Mesh", "State Graph: Synced", "SEV-SNP Enclave"],
    hudLabel: "Inference Mesh",
    hudValue: "Deterministic",
    bar: 92,
    color: "#E5C378",
  },
  {
    number: "03",
    name: "Execute & Audit",
    label: "Deterministic Automation",
    detail:
      "Run mission-critical enterprise workflows autonomously with complete cryptographic auditability and automated failover.",
    metric: "99.999%",
    metricLabel: "cluster uptime target",
    badges: ["Local Audit Ledger", "Self-Healing", "Full Sovereignty"],
    hudLabel: "Compute Fabric",
    hudValue: "Operational",
    bar: 98,
    color: "#F4EFE6",
  },
];

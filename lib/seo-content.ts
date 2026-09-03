export type SolutionSlug = "on-premise-llm" | "private-rag-systems" | "secure-internal-tools";

export type Solution = {
  slug: SolutionSlug;
  title: string;
  description: string;
  service: string;
  problem: string;
  architecture: Array<{ label: string; detail: string }>;
  security: string[];
  outcomes: string[];
};

export const solutions: Record<SolutionSlug, Solution> = {
  "on-premise-llm": {
    slug: "on-premise-llm",
    title: "On-Premise LLM Deployment for Private Enterprise AI",
    description: "Deploy capable language models inside your own data centre or private cloud, with predictable inference, controlled data movement, and operational ownership.",
    service: "Private AI Architecture",
    problem: "Public model APIs can create unacceptable exposure for regulated data, internal workflows, and proprietary knowledge. An on-premise LLM gives security and technology leaders a clear boundary: prompts, model weights, retrieval context, and audit records remain inside infrastructure they control.",
    architecture: [
      { label: "Enterprise sources", detail: "Document stores, SQL systems, identity providers, and operational APIs remain within the client network." },
      { label: "Policy gateway", detail: "Authentication, input validation, routing, rate limits, and redaction are enforced before inference." },
      { label: "Private model serving", detail: "Open-weight models run on dedicated GPU nodes through vLLM or TensorRT-LLM services." },
      { label: "Evaluation and audit", detail: "Prompts, retrieved context, outputs, feedback, and operator actions are logged for review." },
    ],
    security: ["On-premise, private VPC, or fully air-gapped deployment", "Zero required telemetry or third-party inference API", "Role-based access and network segmentation", "Encrypted model weights, secrets, and audit data", "Reproducible container and model promotion process"],
    outcomes: ["Predictable latency and infrastructure cost", "Data residency aligned to internal policy", "A model platform that can evolve without vendor lock-in"],
  },
  "private-rag-systems": {
    slug: "private-rag-systems",
    title: "Private RAG Systems for Secure Enterprise Knowledge",
    description: "Turn internal documents and operational data into a permission-aware answer layer without copying sensitive knowledge into a public AI service.",
    service: "Private AI Architecture",
    problem: "Enterprise search fails when people cannot find the right version of a policy, contract, runbook, or technical record. A private retrieval-augmented generation system connects those sources to grounded answers while preserving document permissions, provenance, and the ability to inspect how an answer was produced.",
    architecture: [
      { label: "Ingest and classify", detail: "Connectors extract content, metadata, ownership, retention, and source-system permissions." },
      { label: "Hybrid index", detail: "Lexical search, vector retrieval, metadata filters, and reranking work together for high-recall discovery." },
      { label: "Grounded generation", detail: "A private model receives only authorized context and returns citations to the source material." },
      { label: "Feedback loop", detail: "Evaluation sets, user feedback, retrieval traces, and drift monitoring improve the system over time." },
    ],
    security: ["Document-level and row-level authorization inherited from source systems", "Private embeddings and indexes stored in the approved environment", "Source citations and retrieval traces for every answer", "Retention, deletion, and re-indexing controls", "PII redaction and prompt-injection defenses at ingestion and query time"],
    outcomes: ["Faster access to trusted internal knowledge", "Lower hallucination risk through citations and evaluation", "A measurable search experience for teams, not just a chat interface"],
  },
  "secure-internal-tools": {
    slug: "secure-internal-tools",
    title: "Secure Internal Tools for High-Trust Operations",
    description: "Replace fragmented spreadsheets and fragile admin portals with secure internal software that fits your controls, workflows, and operational reality.",
    service: "Custom Software Development",
    problem: "Critical work often lives across email, spreadsheets, shared drives, and systems that were never designed to work together. Secure internal tools give operations teams a dependable workflow surface while keeping identity, approvals, data access, and auditability explicit in the design.",
    architecture: [
      { label: "Identity and policy", detail: "SSO, role and attribute-based access, approval policies, and session controls establish the perimeter." },
      { label: "Workflow services", detail: "Typed APIs model state transitions, validations, human approvals, and reversible actions." },
      { label: "Data and integrations", detail: "A governed data layer connects ERP, CRM, finance, document, and operational systems." },
      { label: "Observable interface", detail: "The UI exposes status, ownership, exceptions, audit history, and the next safe action." },
    ],
    security: ["SSO and least-privilege authorization", "Immutable activity history for sensitive actions", "Encryption in transit and at rest", "Private deployment with controlled network egress", "Backups, recovery objectives, logging, and operational runbooks"],
    outcomes: ["Less manual reconciliation and duplicate entry", "Clear accountability for every workflow step", "An internal platform that can be extended without restarting the project"],
  },
};

export type Insight = {
  slug: string;
  title: string;
  description: string;
  published: string;
  readTime: string;
  solutionHref: string;
  solutionLabel: string;
  sections: Array<{ heading: string; paragraphs: string[] }>;
};

export const insights: Insight[] = [
  {
    slug: "private-llms-air-gapped-clusters",
    title: "Step-by-Step Architecture for Deploying Private LLMs on Air-Gapped Clusters",
    description: "A practical blueprint for moving from model selection to an auditable, disconnected inference platform.",
    published: "2026-08-20",
    readTime: "12 min read",
    solutionHref: "/solutions/on-premise-llm",
    solutionLabel: "on-premise LLM deployment",
    sections: [
      { heading: "Start with the boundary, not the model", paragraphs: ["An air-gapped LLM project is an infrastructure and governance project before it is a model-selection exercise. The first decision is what may cross the boundary: model artifacts, container images, telemetry, evaluation data, support bundles, and administrator access each need an explicit policy. A useful architecture document names the disconnected zone, the staging zone, the people who can move artifacts between them, and the evidence required before promotion.", "This framing prevents a common failure mode: choosing a model that performs well in a benchmark and discovering later that its runtime, tokenizer, monitoring stack, or license cannot be operated inside the approved environment. Treat the boundary as a product requirement. Every later layer should make the boundary easier to verify."] },
      { heading: "1. Build a controlled artifact pipeline", paragraphs: ["The connected staging environment is responsible for collecting approved base images, model weights, tokenizers, CUDA dependencies, Python wheels, Helm charts, and security metadata. Pin versions and record checksums. Generate a software bill of materials for container images, scan them, and place the approved bundle in an immutable registry or transfer medium.", "Inside the disconnected network, promotion should be a deliberate import operation. The receiving process verifies signatures and checksums before an artifact becomes available to workloads. Do not allow production nodes to reach public package registries as a convenience. That shortcut undermines the very boundary the platform exists to protect."] },
      { heading: "2. Provision the GPU substrate", paragraphs: ["Size the cluster around the workload shape: concurrent users, context length, output tokens, batchability, and latency objectives. A small model with long context can create a different memory profile from a larger model with short requests. Measure GPU memory, interconnect bandwidth, CPU preprocessing, storage throughput, and network paths together.", "Use dedicated nodes with a known driver and runtime matrix. Kubernetes can provide scheduling and service discovery, while a simpler system may be preferable for a single stable inference pool. Whichever platform you choose, expose health checks for GPU memory, model load state, queue depth, and token throughput. Operators should know whether an apparent AI failure is a model issue or a saturated node."] },
      { heading: "3. Separate the gateway from inference", paragraphs: ["Clients should not call the model server directly. Place an internal policy gateway in front of it to authenticate the caller, apply quotas, validate request shape, redact prohibited fields, select a model, and attach a trace identifier. The gateway is also the right place to present a stable API while models and serving runtimes change underneath.", "The inference tier should be intentionally boring: pinned model artifacts, a small number of well-understood endpoints, and predictable resource limits. Keep orchestration, retrieval, tools, and business actions outside the model server. That separation lets you upgrade a serving runtime without rewriting every consuming application."] },
      { heading: "4. Add retrieval and tools as governed layers", paragraphs: ["Private models become useful when they can work with enterprise context. Retrieval should therefore be its own service with explicit connectors, indexing policy, access checks, and citations. The model receives a bounded context assembled by the retrieval layer; it should not be given unrestricted database credentials or arbitrary network access.", "Tool calls need the same discipline. Define each action with a typed input, an authorization requirement, an idempotency strategy, and an audit event. For high-impact operations, require a human approval step. A private deployment protects data residency, but it does not automatically make autonomous actions safe."] },
      { heading: "5. Make evaluation and observability possible offline", paragraphs: ["An air-gapped platform still needs feedback. Keep a versioned evaluation set inside the environment, with representative prompts, expected properties, access-control cases, and adversarial examples. Track retrieval hit rate, citation correctness, refusal behavior, latency percentiles, token throughput, and operator feedback.", "Logs should be useful without becoming a second data leak. Classify prompts and outputs, apply retention rules, and separate operational metadata from sensitive content where possible. Dashboards can report queue depth, errors, and performance without exposing the underlying conversation. When detailed traces are required, access them through the same role and audit controls as the application itself."] },
      { heading: "Promotion is a recurring operating process", paragraphs: ["Model deployment is not complete when the first endpoint answers a prompt. Define how a new model, adapter, runtime, or security patch moves from evaluation to production, how the previous version is retained for rollback, and who signs off on the change. Run the process often enough that it is familiar before an urgent security update arrives.", "The resulting platform is more than an on-premise chatbot. It is a private AI control plane: a verified artifact supply chain, dedicated compute, policy enforcement, governed retrieval, observable inference, and a repeatable path for change. That is the architecture required when sovereignty and reliability matter as much as capability."] },
    ],
  },
  {
    slug: "vector-databases-vs-hybrid-search-enterprise-rag",
    title: "Benchmarking Retrieval Performance: Vector Databases vs. Hybrid Search in Enterprise RAG",
    description: "How to compare retrieval approaches using the metrics that matter in real enterprise knowledge systems.",
    published: "2026-08-22",
    readTime: "10 min read",
    solutionHref: "/solutions/private-rag-systems",
    solutionLabel: "private RAG systems",
    sections: [
      { heading: "Retrieval quality is a system property", paragraphs: ["Teams often compare vector databases as if the database alone determines answer quality. In an enterprise RAG system, retrieval depends on document extraction, chunk boundaries, metadata, access filters, embedding choice, query rewriting, reranking, and the final context budget. A benchmark that changes all of those variables at once cannot explain why one approach won.", "Start with a fixed corpus and a labeled question set. Include exact lookups, conceptual questions, multi-hop questions, version-sensitive policies, and queries where the correct result is that the user is not authorized. The benchmark should measure retrieval independently from generation so a fluent but unsupported answer does not hide a poor search result."] },
      { heading: "What vector search does well", paragraphs: ["Dense vector search is strong when the user expresses an idea differently from the way the source document is written. It can connect a question about employee leave to a policy that uses formal HR terminology, even when the query contains none of the same keywords. It is also useful for broad discovery across large collections where semantic similarity is the primary signal.", "Its weaknesses are equally important. Exact identifiers, error codes, product names, contract clauses, and dates can be poorly represented by a purely semantic ranking. Embedding models also compress distinctions that matter operationally: two documents can be conceptually close while only one applies to the user’s region or account."] },
      { heading: "Why hybrid search is usually the enterprise baseline", paragraphs: ["Hybrid retrieval combines lexical matching with dense similarity and then merges or reranks the results. The lexical path preserves exact terms, acronyms, and identifiers. The vector path captures paraphrase and intent. Metadata filters narrow the candidate set before ranking, which is essential for permission boundaries and version control.", "Hybrid does add tuning work. You need to decide how to normalize scores, how many candidates each retriever contributes, whether a cross-encoder or lightweight reranker is justified, and how filters interact with recall. That is not a reason to avoid it; it is the cost of making retrieval reflect enterprise language instead of a generic benchmark corpus."] },
      { heading: "Design a benchmark that can guide a decision", paragraphs: ["Measure recall at k for the retrieval layer, but do not stop there. Track mean reciprocal rank or nDCG for ordering, answer-support coverage for the context passed to the model, citation precision, and p50/p95 latency. Record index build time, storage footprint, update freshness, and the cost of filtering by tenant, role, document type, and effective date.", "Slice results by question type. A system can have excellent average recall while failing every exact-number query or every question that requires a current policy version. The slices are often more actionable than the headline score because they reveal which part of the retrieval stack needs attention."] },
      { heading: "Chunking and metadata often beat a new database", paragraphs: ["Before changing vendors, inspect the input. A chunk that combines a policy section, a footnote, and a table may be impossible to retrieve cleanly. Preserve headings, page references, effective dates, authorship, and source URLs as metadata. For structured records, index meaningful fields instead of flattening everything into prose.", "Use overlap sparingly and test it. More overlap increases storage and can produce redundant context without improving recall. For long technical documents, hierarchical retrieval can first find the relevant section and then select smaller passages. The best chunking strategy is the one that produces complete, attributable evidence for the questions your users actually ask."] },
      { heading: "Security and freshness are benchmark dimensions", paragraphs: ["A retrieval result is not correct if the caller is not allowed to see it. Run authorization cases as first-class benchmark examples. Test revoked access, shared documents, inherited permissions, and records that change classification. Enforce filters before results reach the model, not only in the UI.", "Freshness also needs measurement. Record the time between a source change and its availability in search, and include deleted or superseded documents in regression tests. Enterprise trust grows when the system can show not only why it found a result, but also why an older result was excluded."] },
      { heading: "The practical decision", paragraphs: ["For most enterprise RAG deployments, begin with a hybrid design: lexical retrieval for precision, vector retrieval for semantic recall, metadata filters for policy, and reranking where the evaluation set shows a measurable gain. Keep the interfaces between ingestion, retrieval, authorization, and generation explicit so each layer can be improved independently.", "The objective is not to select a fashionable database. It is to build a knowledge system that returns the right evidence, to the right person, at the right time, with enough provenance to be trusted. That is the standard a private RAG system should meet before it is connected to high-value workflows."] },
    ],
  },
  {
    slug: "modernizing-monolithic-enterprise-portals",
    title: "Migrating Monolithic Enterprise Portals to Modern FastAPI & React Pipelines",
    description: "A staged modernization path that improves delivery speed without turning a critical portal rewrite into a single high-risk launch.",
    published: "2026-08-26",
    readTime: "11 min read",
    solutionHref: "/solutions/secure-internal-tools",
    solutionLabel: "secure internal tools",
    sections: [
      { heading: "Modernization is a risk-management problem", paragraphs: ["A monolithic portal usually contains more than code. It contains business rules, undocumented workflows, permissions, integrations, reports, and years of user workarounds. A rewrite that focuses only on framework choice can reproduce the same complexity in a new stack while creating a period where neither system is trusted.", "The safer objective is to improve the system’s seams. Make ownership, contracts, data flows, and deployment boundaries more explicit, then move capability by capability. FastAPI and React are effective tools for that work, but the migration succeeds because the architecture preserves business continuity while creating room to improve."] },
      { heading: "Map the current system before extracting it", paragraphs: ["Inventory routes, background jobs, database tables, external integrations, authentication paths, and scheduled reports. Trace the highest-value user journeys from browser action to database side effect. Pay special attention to implicit coupling: a page that looks read-only may trigger an export record, an audit event, or a downstream notification.", "Classify capabilities by change frequency, business criticality, and integration complexity. The first extraction target should usually have a clear boundary and a meaningful benefit, not necessarily the oldest or most frustrating code. Establish baseline metrics for response time, error rate, deployment frequency, and support volume so modernization can be judged by outcomes."] },
      { heading: "Introduce contracts at the edge", paragraphs: ["FastAPI provides a natural place to make API contracts explicit with typed request and response models, validation, authentication dependencies, and generated OpenAPI documentation. Start by defining the contract for one capability, even if the first implementation still calls the monolith internally. This creates a stable boundary before the underlying ownership changes.", "Version contracts intentionally and design for failure. Clients need useful error shapes, correlation identifiers, pagination rules, and clear semantics for retries. A modern frontend should not need to know which legacy table or controller produced a response. That insulation is one of the most valuable outputs of the migration."] },
      { heading: "Use React to clarify state, not add novelty", paragraphs: ["A React frontend should make the workflow easier to understand: loading, empty, error, permission, pending approval, and completed states should be visible and consistent. Establish a small design system, shared form validation, accessible navigation, and a data-fetching strategy before rebuilding dozens of screens.", "Avoid recreating the monolith’s page-by-page structure in a new component vocabulary. Group the interface around tasks and domains. Where a page spans multiple legacy modules, let the new API composition layer assemble the data. This gives users a coherent workflow while allowing backend capabilities to migrate independently."] },
      { heading: "Choose a strangler path with reversible releases", paragraphs: ["Route a small set of traffic to the new capability behind a feature flag. Keep the legacy path available while the team compares outputs, permissions, audit records, and performance. For write operations, define idempotency and reconciliation before exposing the new path to broad usage.", "Release in slices that can be observed and rolled back. A migration dashboard should show adoption, errors, latency, queue health, and discrepancies between old and new paths where dual reads or shadow execution are safe. Reversibility lowers the pressure to hide defects until a single cutover date."] },
      { heading: "Move data ownership deliberately", paragraphs: ["Database extraction is often the hardest step because tables encode relationships that the application has been quietly relying on for years. Begin with ownership: which service is allowed to write a record, which system is authoritative, and which events communicate a change? Avoid creating two writers for the same business fact without a reconciliation plan.", "Use migration scripts that are repeatable, observable, and tested against production-like data. Backfills need checkpoints and the ability to resume. For sensitive domains, include access-control tests in the migration itself; a technically correct data move that changes who can see a record is not a successful migration."] },
      { heading: "Make the delivery pipeline part of the product", paragraphs: ["A modern stack needs a modern operating model. Build, test, dependency scanning, container publishing, database migration checks, preview environments, and deployment approvals should be automated. Instrument both FastAPI and React so a user-visible failure can be traced across browser, API, queue, and database boundaries.", "At the end of the migration, the most important result is not that the code uses a newer framework. It is that the organization can change a critical workflow with less fear: a smaller release unit, a clearer contract, better observability, safer permissions, and a path to evolve without another all-or-nothing rewrite."] },
    ],
  },
];

export const insightBySlug = Object.fromEntries(insights.map((insight) => [insight.slug, insight])) as Record<string, Insight>;

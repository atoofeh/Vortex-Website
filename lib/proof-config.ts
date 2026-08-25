/*
 * Public proof surface configuration.
 *
 * These values are intentionally placeholders. Replace them only with
 * numbers, configurations, and summaries that VORTEX has verified and is
 * approved to publish. The UI should not be changed when the real evidence
 * is ready; this file is the single replacement point.
 */
export const proofConfig = {
  referenceDeployment: {
    model: "[MODEL / VERSION TO VERIFY]",
    hardware: "[GPU / NODE CONFIGURATION TO VERIFY]",
    deploymentMode: "[CLOUD / ON-PREMISE / AIR-GAPPED — CONFIRM]",
    throughput: "[TOKENS / SECOND OR REQUESTS / SECOND — CONFIRM]",
    dataEgress: "[EGRESS POSTURE — CONFIRM]",
  },
  redactedArchitecture: {
    system: "[APPROVED ANONYMIZED SYSTEM NAME]",
    services: "[SERVICES / COMPONENTS TO VERIFY]",
    dataFlow: "[DATA FLOW SUMMARY TO VERIFY]",
    securityBoundary: "[SECURITY BOUNDARY TO VERIFY]",
  },
  engagementGuarantee: {
    responseWindow: "[CONFIRM RESPONSE WINDOW]",
    condition: "[DEFINE SCOPE OF FEASIBILITY RESPONSE]",
  },
} as const;

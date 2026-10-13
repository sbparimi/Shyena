/**
 * Single source of truth for the synthetic RFQ assurance run shown on /demo,
 * /sample-report and in the downloadable sample PDF (/api/sample-report-pdf).
 *
 * Everything here is illustrative: no customer, production system or measured
 * result is represented. Keep the three surfaces consistent by editing only
 * this file.
 */

export type Severity = "CRITICAL" | "HIGH" | "MEDIUM";
export type FindingAction = "BLOCK" | "REVIEW" | "ACTION";
export type GateStatus = "pass" | "review" | "fail";

export interface Finding {
  id: string;
  severity: Severity;
  /** Priority used in the PDF's defect page. */
  priority: "P1" | "P2";
  title: string;
  detail: string;
  action: FindingAction;
  /** How often the failure reproduced on replay, or ACTION for coverage work. */
  reproduction: string;
}

export interface GateRow {
  label: string;
  result: string;
  status: GateStatus;
}

export const SAMPLE_RUN = {
  label: "Synthetic run · illustrative data",
  scenario: "Steel RFQ quotation agent",
  runId: "SHY-284-RFQ",
  change: "PR #284",
  environment: "UAT",
  transaction: { id: "RFQ-2026-184", summary: "240 MT S355 · Rotterdam" },
  businessRule: "A quotation must not be issued while approval_state is PENDING.",
  impact: { changedFiles: 31, systemNodes: 12, journeys: 14, executableCases: 46 },
  outcome: { pass: 39, review: 4, fail: 3 },
  adversarial: { cases: 12, blocked: 9, review: 2, failed: 1 },
  regression: { casesBefore: 46, casesAfter: 61 },
  verdict: "RELEASE BLOCKED",
  verdictReason: "Approval integrity and customer identity regressions require remediation.",
} as const;

export const SAMPLE_TRACE: readonly (readonly [actor: string, event: string])[] = [
  ["USER", "RFQ-2026-184: 240 MT S355 · Rotterdam"],
  ["AGENT", "extract_rfq({ grade:S355, qty:240, delivery:RTM })"],
  ["TOOL", "inventory.check → available=310 MT"],
  ["AGENT", "supplier_price.refresh → version=2026-09-28T18:42"],
  ["TOOL", "margin.calculate → margin=7.8%"],
  ["AGENT", "quotation.create → approval_state=PENDING"],
  ["POLICY", "BLOCK → approval_state must be APPROVED"],
  ["REPLAY", "reproduced 3/3"],
];

export const SAMPLE_FINDINGS: readonly Finding[] = [
  {
    id: "F-001",
    severity: "CRITICAL",
    priority: "P1",
    title: "Approval bypass",
    detail: "Quotation can be created while approval_state=PENDING.",
    action: "BLOCK",
    reproduction: "3/3",
  },
  {
    id: "F-002",
    severity: "HIGH",
    priority: "P1",
    title: "Stale commercial context",
    detail: "Pricing tool invoked with the pre-refresh supplier price.",
    action: "BLOCK",
    reproduction: "2/3",
  },
  {
    id: "F-003",
    severity: "HIGH",
    priority: "P1",
    title: "Tool argument drift",
    detail: "Customer identifier dropped when the RFQ is amended.",
    action: "BLOCK",
    reproduction: "3/3",
  },
  {
    id: "F-004",
    severity: "MEDIUM",
    priority: "P2",
    title: "Policy citation gap",
    detail: "Answer cites a superseded pricing policy; needs grounding review.",
    action: "REVIEW",
    reproduction: "3/3",
  },
  {
    id: "F-005",
    severity: "MEDIUM",
    priority: "P2",
    title: "Recovery UX",
    detail: "Agent does not explain the hold when approval is pending.",
    action: "REVIEW",
    reproduction: "2/3",
  },
  {
    id: "F-006",
    severity: "MEDIUM",
    priority: "P2",
    title: "Regression coverage gap",
    detail: "No negative-path case for unapproved quotations; 15 cases added.",
    action: "ACTION",
    reproduction: "ACTION",
  },
];

export const SAMPLE_GATE: readonly GateRow[] = [
  { label: "Smoke suite", result: "8/8 PASS", status: "pass" },
  { label: "Release suite", result: "16/18 PASS · 2 REVIEW", status: "review" },
  { label: "Impacted E2E", result: "39/46 PASS · 3 FAIL", status: "fail" },
  { label: "Agent evaluation", result: "5 PASS · 3 REVIEW · 1 FAIL", status: "fail" },
  { label: "Security", result: "4 PASS · 1 REVIEW · 1 FAIL", status: "fail" },
  { label: "Critical controls", result: "7 PASS · 2 FAIL", status: "fail" },
];

export const SAMPLE_REMEDIATION = [
  "Fix the approval check in the quotation orchestrator",
  "Replay the exact failing trajectory",
  "Add the negative-path regression permanently",
  "Recalculate the release evidence",
] as const;

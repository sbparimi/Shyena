import { createFileRoute } from "@tanstack/react-router";

const PAGE_BREAK = "__PAGE_BREAK__";
const report = [
"SHYENA | AUTONOMOUS QA RELEASE ASSURANCE REPORT",
"SYNTHETIC ENTERPRISE DEMONSTRATION | VERSION 1.0",
"",
"SCENARIO: VANILLA STEEL - RFQ AND QUOTATION WORKFLOW",
"Run: SHY-284-RFQ | PR: #284 | Environment: UAT",
"Verdict: BLOCK",
"",
"IMPORTANT: This is a fictional scenario. All identifiers, metrics, traces,",
"findings and execution results are illustrative.",
PAGE_BREAK,
"01 | EXECUTIVE DECISION",
"PR #284 changes the quotation workflow for a synthetic steel distributor.",
"Shyena reconstructed the affected business graph, generated executable",
"playbook cases, exercised browser/API/agent paths and correlated failures",
"back to changed components.",
"",
"BLOCKING DECISION",
"- Approval integrity can be bypassed after supplier-price refresh.",
"- Quotation creation can occur while approval_state=PENDING.",
"- Amended RFQ flow can lose the customer identifier.",
"",
"RUN SUMMARY",
"46 impacted journeys | 8 smoke | 18 release | 46 E2E",
"6 findings | 3 P1 | 3 P2 | 1 release-blocking control failure",
PAGE_BREAK,
"02 | SYSTEM UNDER TEST",
"RFQ Portal: browser UI, document upload and customer context",
"Quotation Orchestrator: extraction, inventory, pricing, approval, quote",
"AI Quotation Agent: reasoning, tool choice, policy interpretation",
"RAG / Policy Layer: pricing rules, margin policy, Incoterms, product rules",
"Enterprise APIs: ERP, inventory, supplier pricing, CRM",
"Release Control: GitHub Actions, evidence pack and release gate",
"",
"CHANGE IMPACT",
"pricing/margin-policy.ts -> pricing -> approval -> quotation [P1]",
"quote-orchestrator.ts -> RFQ -> pricing -> approval -> customer [P1]",
"supplier-price-client.ts -> supplier API -> commercial context [P1]",
"rfq-fixture.yaml -> extraction -> downstream fixtures [P2]",
PAGE_BREAK,
"03 | GENERATED TEST INTELLIGENCE",
"TC-RFQ-001 | RFQ intake complete | SMOKE RELEASE E2E | P0",
"TC-RFQ-007 | Stock and allocation | RELEASE E2E | P0",
"TC-RFQ-014 | Supplier price resolution | E2E | P1",
"TC-RFQ-021 | Margin approval gate | RELEASE E2E | P1",
"TC-RFQ-027 | Quotation generation | SMOKE RELEASE E2E | P1",
"TC-RFQ-034 | Customer quote response | E2E | P2",
"",
"AI EVALUATION DIMENSIONS",
"Goal completion ......................... REVIEW",
"Tool selection .......................... FAIL",
"Tool arguments .......................... PASS",
"Policy adherence ........................ FAIL",
"RAG grounding ........................... REVIEW",
"Trajectory integrity .................... PASS",
"Prompt injection ........................ PASS",
"Uncertainty handling .................... REVIEW",
"Output contract ......................... PASS",
PAGE_BREAK,
"04 | REPRESENTATIVE AGENT TRAJECTORY",
"TRACE trc_8f21 | TC-RFQ-021 | 14.8s",
"USER: RFQ-2026-184: 240 MT S355, Rotterdam",
"AGENT: extract_rfq(grade=S355, qty=240, delivery=RTM)",
"TOOL: inventory.check -> available=310 MT",
"AGENT: supplier_price.refresh -> version=2026-09-28T18:42",
"TOOL: margin.calculate -> margin=7.8%",
"AGENT: quotation.create -> approval_state=PENDING",
"POLICY: BLOCK - approval must be APPROVED before quotation.create",
"REPLAY: reproduced 3/3",
"FINDING: F-001 -> pricing/margin-policy.ts",
"",
"SECURITY / ADVERSARIAL",
"Prompt injection in RFQ attachment ................ PASS",
"Tool escalation without approval ................. FAIL",
"Cross-customer context injection .................. PASS",
"Commercial manipulation ........................... REVIEW",
"Hidden policy extraction .......................... PASS",
PAGE_BREAK,
"05 | DETERMINISTIC QUALITY CONTROLS",
"RFQ schema ........................................ PASS",
"Quantity arithmetic ............................... PASS",
"Currency contract .................................. PASS",
"Margin threshold ................................... FAIL",
"Approval state ..................................... FAIL",
"Quotation schema ................................... PASS",
"Idempotency ........................................ PASS",
"Audit trail ........................................ PASS",
"API contracts ...................................... PASS",
"",
"06 | DEFECT REGISTER",
"F-001 P1 | Approval bypass | 3/3 | BLOCK",
"Quote can be created while approval_state=PENDING.",
"F-002 P1 | Stale commercial context | 2/3 | REVIEW",
"Agent can use cached supplier price after a newer version exists.",
"F-003 P1 | Tool argument drift | 3/3 | BLOCK",
"Customer identifier can be lost after an RFQ amendment.",
"F-004 P2 | Policy citation gap | 3/3 | REVIEW",
"Final answer does not expose supporting policy version.",
"F-005 P2 | Recovery UX | 2/3 | REVIEW",
"Supplier API retry does not clearly surface stale-data state.",
"F-006 P2 | Regression coverage gap | N/A | ACTION",
"Approval negative-path fixture must become permanent regression coverage.",
PAGE_BREAK,
"07 | RELEASE GATE",
"Smoke suite ......................... 8/8 PASS",
"Release suite ....................... 16/18 PASS | 2 REVIEW",
"Impacted E2E ......................... 39/46 PASS | 4 REVIEW | 3 FAIL",
"Agent evaluation .................... 5 PASS | 3 REVIEW | 1 FAIL",
"Security ............................ 4 PASS | 1 REVIEW | 1 FAIL",
"Critical business controls ......... 7 PASS | 2 FAIL",
"",
"RELEASE VERDICT: BLOCK",
"",
"Required before release:",
"1. Restore authoritative approval enforcement.",
"2. Prevent stale supplier-price context from reaching quote reasoning.",
"3. Preserve customer identity across RFQ amendments.",
"4. Re-run the exact failing trajectories and impacted regression set.",
PAGE_BREAK,
"08 | EVIDENCE PACKAGE",
"PR diff and change-impact graph",
"Generated TAML playbook",
"Test execution matrix",
"Playwright traces and screenshots",
"Agent trajectories and tool-call traces",
"RAG retrieval evidence and policy versions",
"API request/response evidence",
"Security and adversarial test results",
"Defect reproduction records",
"CI/CD stage results",
"Release-gate decision record",
"Machine-readable result bundle",
"",
"EVIDENCE CHAIN",
"Change -> impact -> playbook -> execution -> trajectory -> evaluation",
"-> finding -> remediation -> regression -> release verdict",
"",
"SHYENA",
"Autonomous QA for web, API and AI-agent systems",
"synthetic report - no customer or production data"
];

function buildPdf(){
  const pages:string[][]=[[]];
  for(const line of report){ if(line===PAGE_BREAK) pages.push([]); else pages[pages.length-1].push(line); }
  const esc=(s:string)=>s.replaceAll("\\","\\\\").replaceAll("(","\\(").replaceAll(")","\\)");
  const objects:string[]=[];
  const pageIds:number[]=[];
  objects.push("<< /Type /Catalog /Pages 2 0 R >>");
  objects.push("PAGES_PLACEHOLDER");
  objects.push("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  pages.forEach((page)=>{
    let stream="BT\\n/F1 9 Tf\\n48 792 Td\\n12 TL\\n";
    page.forEach((line,i)=>{ if(i) stream+="T*\\n"; stream+="("+esc(line)+") Tj\\n"; });
    stream+="ET\\n";
    const contentId=objects.length+1;
    objects.push("<< /Length "+new TextEncoder().encode(stream).length+" >>\\nstream\\n"+stream+"endstream");
    const pageId=objects.length+1;
    objects.push("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R >> >> /Contents "+contentId+" 0 R >>");
    pageIds.push(pageId);
  });
  objects[1]="<< /Type /Pages /Kids ["+pageIds.map(id=>id+" 0 R").join(" ")+"] /Count "+pageIds.length+" >>";
  let pdf="%PDF-1.4\\n";
  const offsets=[0];
  for(let i=0;i<objects.length;i++){ offsets.push(new TextEncoder().encode(pdf).length); pdf+=(i+1)+" 0 obj\\n"+objects[i]+"\\nendobj\\n"; }
  const xref=new TextEncoder().encode(pdf).length;
  pdf+="xref\\n0 "+(objects.length+1)+"\\n0000000000 65535 f \\n";
  for(let i=1;i<offsets.length;i++) pdf+=String(offsets[i]).padStart(10,"0")+" 00000 n \\n";
  pdf+="trailer\\n<< /Size "+(objects.length+1)+" /Root 1 0 R >>\\nstartxref\\n"+xref+"\\n%%EOF\\n";
  return new TextEncoder().encode(pdf);
}

export const Route=createFileRoute("/api/sample-report-pdf")({
  server:{handlers:{GET:async()=>new Response(buildPdf(),{headers:{"Content-Type":"application/pdf","Content-Disposition":'attachment; filename="shyena-enterprise-autonomous-qa-sample-report.pdf"',"Cache-Control":"public, max-age=3600"}})}}
});

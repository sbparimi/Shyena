import { createFileRoute } from "@tanstack/react-router";

type RGB = [number, number, number];
const C = {
  navy: [7, 16, 31] as RGB,
  orange: [232, 117, 18] as RGB,
  green: [44, 166, 111] as RGB,
  amber: [229, 163, 61] as RGB,
  red: [228, 91, 91] as RGB,
  ink: [23, 33, 63] as RGB,
  muted: [105, 114, 130] as RGB,
  pale: [245, 247, 250] as RGB,
  line: [223, 227, 232] as RGB,
  white: [255, 255, 255] as RGB,
};

const pages = [
  {
    title: "Executive dashboard",
    subtitle: "Synthetic Vanilla Steel RFQ / quotation assurance run",
    kind: "dashboard",
  },
  {
    title: "Change intelligence",
    subtitle: "PR-to-production impact and autonomous test generation",
    kind: "impact",
  },
  {
    title: "AI evaluation",
    subtitle: "Agent trajectory, tool use, policy and grounding",
    kind: "ai",
  },
  {
    title: "Security + deterministic controls",
    subtitle: "Adversarial testing and business invariants",
    kind: "security",
  },
  {
    title: "Defect intelligence",
    subtitle: "Reproducibility, severity and release impact",
    kind: "defects",
  },
  { title: "Release gate", subtitle: "Evidence-backed release decision", kind: "release" },
];

function esc(s: string) {
  return s.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
}
function rgb(c: RGB) {
  return c.map((v) => v / 255).join(" ");
}
function txt(x: number, y: number, s: string, size = 9, c: C[keyof C] = C.ink) {
  return `${rgb(c)} rg BT /F1 ${size} Tf ${x} ${y} Td (${esc(s)}) Tj ET\n`;
}
function rect(x: number, y: number, w: number, h: number, c: RGB, r = 0) {
  return `${rgb(c)} rg ${x} ${y} ${w} ${h} re f\n`;
}
function line(x1: number, y1: number, x2: number, y2: number, c: RGB = C.line, w = 1) {
  return `${rgb(c)} RG ${w} w ${x1} ${y1} m ${x2} ${y2} l S\n`;
}
function bar(x: number, y: number, w: number, h: number, p: number, c: RGB) {
  return rect(x, y, w, h, C.line) + rect(x, y, w * p, h, c);
}
function card(
  x: number,
  y: number,
  w: number,
  h: number,
  label: string,
  value: string,
  tone: RGB = C.ink,
) {
  return (
    rect(x, y, w, h, C.white) +
    txt(x + 12, y + h - 18, label.toUpperCase(), 7, C.muted) +
    txt(x + 12, y + 18, value, 18, tone)
  );
}
function header(title: string, subtitle: string, page: number) {
  const s =
    rect(0, 0, 595, 842, C.pale) +
    rect(0, 780, 595, 62, C.navy) +
    txt(36, 812, "SHYENA", 9, C.orange) +
    txt(36, 795, title, 19, C.white) +
    txt(36, 766, subtitle, 8, C.muted) +
    txt(520, 812, String(page).padStart(2, "0"), 8, C.white);
  return s;
}
function footer() {
  return (
    txt(
      36,
      24,
      "Synthetic demonstration · Vanilla Steel is fictional · no customer or production data",
      7,
      C.muted,
    ) + txt(455, 24, "SHYENA", 7, C.orange)
  );
}
function pageDashboard() {
  let s = header(
    "Autonomous QA Release Assurance",
    "RFQ-2026-184 · PR #284 · UAT · Run SHY-284-RFQ",
    1,
  );
  s +=
    card(36, 675, 120, 62, "Verdict", "BLOCK", C.red) +
    card(166, 675, 120, 62, "Journeys", "46", C.ink) +
    card(296, 675, 120, 62, "Findings", "6", C.red) +
    card(426, 675, 133, 62, "P1 findings", "3", C.orange);
  s +=
    txt(36, 642, "EXECUTION OUTCOME", 8, C.orange) + txt(36, 622, "46 impacted cases", 14, C.ink);
  s +=
    txt(36, 592, "PASS", 8, C.green) +
    bar(85, 589, 300, 9, 39 / 46, C.green) +
    txt(395, 592, "39", 10, C.ink);
  s +=
    txt(36, 567, "REVIEW", 8, C.amber) +
    bar(85, 564, 300, 9, 4 / 46, C.amber) +
    txt(395, 567, "4", 10, C.ink);
  s +=
    txt(36, 542, "FAIL", 8, C.red) +
    bar(85, 539, 300, 9, 3 / 46, C.red) +
    txt(395, 542, "3", 10, C.ink);
  s += txt(36, 500, "AI EVALUATION", 8, C.orange);
  [
    ["Goal completion", 82, C.amber],
    ["Tool arguments", 96, C.green],
    ["Trajectory integrity", 91, C.green],
    ["RAG grounding", 74, C.amber],
    ["Policy adherence", 58, C.red],
    ["Uncertainty handling", 68, C.amber],
  ].forEach((v, i) => {
    s += txt(36, 474 - i * 28, String(v[0]), 8, C.ink);
    s += bar(170, 472 - i * 28, 270, 8, (v[1] as number) / 100, v[2] as RGB);
    s += txt(450, 474 - i * 28, String(v[1]) + "%", 8, C.muted);
  });
  s +=
    rect(36, 280, 523, 1, C.line) +
    txt(36, 255, "RELEASE SIGNAL", 8, C.orange) +
    txt(36, 226, "Approval integrity failure blocks quotation issuance.", 13, C.ink) +
    txt(
      36,
      205,
      "Evidence: trajectory replay 3/3 · component linked · regression required",
      8,
      C.muted,
    );
  return s + footer();
}
function pageImpact() {
  let s = header("Change intelligence", "31 changed files → 14 journeys → 46 executable cases", 2);
  s += txt(36, 730, "CHANGE PROPAGATION", 8, C.orange);
  [
    ["pricing/margin-policy.ts", "Approval gate → quotation", "P1"],
    ["quote-orchestrator.ts", "RFQ → pricing → approval → customer", "P1"],
    ["supplier-price-client.ts", "Supplier API → commercial context", "P1"],
    ["rfq-fixture.yaml", "Extraction → downstream fixtures", "P2"],
  ].forEach((v, i) => {
    const y = 690 - i * 48;
    s +=
      rect(36, y, 523, 34, C.white) +
      txt(48, y + 21, v[0], 9, C.ink) +
      txt(230, y + 21, v[1], 8, C.muted) +
      txt(520, y + 21, v[2], 8, v[2] === "P1" ? C.red : C.amber);
  });
  s += txt(36, 478, "TEST INTELLIGENCE", 8, C.orange);
  [
    ["Smoke", "8", C.green],
    ["Release", "18", C.orange],
    ["E2E", "46", C.navy],
    ["P0", "2", C.red],
    ["P1", "17", C.red],
    ["P2", "26", C.amber],
  ].forEach((v, i) => {
    const x = 36 + i * 87;
    s += txt(x, 448, String(v[0]), 8, C.muted) + txt(x, 423, String(v[1]), 20, v[2] as RGB);
  });
  s += txt(36, 380, "AUTONOMOUS PIPELINE", 8, C.orange);
  [
    ["PR scan", 100],
    ["Impact", 100],
    ["Playbook", 100],
    ["Execution", 93],
    ["Evaluation", 88],
    ["Release gate", 67],
  ].forEach((v, i) => {
    const x = 36 + i * 87;
    s +=
      txt(x, 350, String(v[0]), 7, C.muted) +
      bar(
        x,
        330,
        68,
        8,
        (v[1] as number) / 100,
        (v[1] as number) < 80 ? C.red : (v[1] as number) < 95 ? C.amber : C.green,
      ) +
      txt(x, 312, String(v[1]) + "%", 8, C.ink);
  });
  return s + footer();
}
function pageAi() {
  let s = header("AI evaluation", "Trajectory-level evaluation instead of answer-only scoring", 3);
  s += txt(36, 730, "AGENT SCORECARD", 8, C.orange);
  [
    ["Goal completion", 82, C.amber],
    ["Tool selection", 61, C.red],
    ["Tool arguments", 96, C.green],
    ["Policy adherence", 58, C.red],
    ["RAG grounding", 74, C.amber],
    ["Trajectory integrity", 91, C.green],
    ["Prompt injection", 100, C.green],
    ["Uncertainty handling", 68, C.amber],
    ["Output contract", 100, C.green],
  ].forEach((v, i) => {
    const y = 694 - i * 42;
    s += txt(36, y, String(v[0]), 8, C.ink);
    s += bar(180, y - 2, 300, 10, (v[1] as number) / 100, v[2] as RGB);
    s += txt(495, y, String(v[1]) + "%", 8, C.muted);
  });
  s += rect(36, 292, 523, 1, C.line) + txt(36, 268, "REPRESENTATIVE TRAJECTORY", 8, C.orange);
  [
    "RFQ → extract requirements",
    "inventory.check → 310 MT",
    "supplier_price.refresh → v2026-09-28T18:42",
    "margin.calculate → 7.8%",
    "quotation.create → approval=PENDING",
    "POLICY → BLOCK: approval required",
    "REPLAY → reproduced 3/3",
  ].forEach((v, i) => {
    s += txt(48, 238 - i * 22, v, 8, i === 5 ? C.red : C.ink);
  });
  return s + footer();
}
function pageSecurity() {
  let s = header(
    "Security + deterministic controls",
    "Adversarial paths and business invariants",
    4,
  );
  s += txt(36, 730, "SECURITY TESTS", 8, C.orange);
  [
    ["Prompt injection", 100, C.green],
    ["Tool escalation", 0, C.red],
    ["Cross-customer context", 100, C.green],
    ["Commercial manipulation", 60, C.amber],
    ["Hidden policy extraction", 100, C.green],
  ].forEach((v, i) => {
    const y = 690 - i * 38;
    s += txt(36, y, String(v[0]), 8, C.ink);
    s += bar(180, y - 2, 300, 10, (v[1] as number) / 100, v[2] as RGB);
    s += txt(495, y, String(v[1]) === "0" ? "FAIL" : String(v[1]) + "%", 8, v[2] as RGB);
  });
  s += txt(36, 475, "BUSINESS INVARIANTS", 8, C.orange);
  [
    ["RFQ schema", 100],
    ["Quantity arithmetic", 100],
    ["Currency contract", 100],
    ["Margin threshold", 48],
    ["Approval state", 42],
    ["Quotation schema", 100],
    ["Idempotency", 100],
    ["Audit trail", 100],
    ["API contracts", 100],
  ].forEach((v, i) => {
    const col = i % 3,
      row = Math.floor(i / 3);
    const x = 36 + col * 174,
      y = 420 - row * 58;
    s +=
      rect(x, y, 158, 38, C.white) +
      txt(x + 8, y + 23, String(v[0]), 7, C.ink) +
      bar(x + 8, y + 8, 120, 6, (v[1] as number) / 100, (v[1] as number) < 60 ? C.red : C.green);
  });
  return s + footer();
}
function pageDefects() {
  let s = header("Defect intelligence", "Reproducibility and business release impact", 5);
  s += txt(36, 730, "SEVERITY DISTRIBUTION", 8, C.orange);
  [
    ["P0", 0, C.red],
    ["P1", 3, C.red],
    ["P2", 3, C.amber],
  ].forEach((v, i) => {
    const y = 680 - i * 48;
    s +=
      txt(36, y, String(v[0]), 9, C.ink) +
      bar(80, y - 3, 330, 14, (v[1] as number) / 6, v[2] as RGB) +
      txt(425, y, String(v[1]), 9, C.ink);
  });
  s += txt(36, 510, "FINDINGS", 8, C.orange);
  [
    ["F-001", "P1", "Approval bypass", "3/3"],
    ["F-002", "P1", "Stale commercial context", "2/3"],
    ["F-003", "P1", "Tool argument drift", "3/3"],
    ["F-004", "P2", "Policy citation gap", "3/3"],
    ["F-005", "P2", "Recovery UX", "2/3"],
    ["F-006", "P2", "Regression coverage gap", "ACTION"],
  ].forEach((v, i) => {
    const y = 475 - i * 45;
    s +=
      rect(36, y, 523, 31, C.white) +
      txt(48, y + 19, String(v[0]), 8, C.orange) +
      txt(92, y + 19, String(v[1]), 8, v[1] === "P1" ? C.red : C.amber) +
      txt(130, y + 19, String(v[2]), 8, C.ink) +
      txt(445, y + 19, String(v[3]), 8, C.muted);
  });
  return s + footer();
}
function pageRelease() {
  let s = header("Release gate", "Evidence-backed decision and remediation requirements", 6);
  s += txt(36, 730, "GATE STATUS", 8, C.orange);
  [
    ["Smoke suite", "8/8 PASS", C.green],
    ["Release suite", "16/18 PASS · 2 REVIEW", C.amber],
    ["Impacted E2E", "39/46 PASS · 3 FAIL", C.red],
    ["Agent evaluation", "5 PASS · 3 REVIEW · 1 FAIL", C.red],
    ["Security", "4 PASS · 1 REVIEW · 1 FAIL", C.red],
    ["Critical controls", "7 PASS · 2 FAIL", C.red],
  ].forEach((v, i) => {
    const y = 690 - i * 43;
    s +=
      rect(36, y, 523, 29, C.white) +
      txt(48, y + 18, String(v[0]), 8, C.ink) +
      txt(340, y + 18, String(v[1]), 8, v[2] as RGB);
  });
  s += rect(36, 405, 523, 82, [...C.red.map((n, i) => n)] as RGB);
  s +=
    txt(55, 450, "RELEASE BLOCKED", 18, C.white) +
    txt(
      55,
      428,
      "Approval integrity and customer identity regressions require remediation.",
      8,
      C.white,
    );
  s += txt(36, 370, "REMEDIATION LOOP", 8, C.orange);
  [
    "1  Fix component",
    "2  Replay exact trajectory",
    "3  Add permanent regression",
    "4  Recalculate release evidence",
  ].forEach((v, i) => {
    s += rect(36 + i * 130, 325, 118, 35, C.white) + txt(44 + i * 130, 346, v, 7, C.ink);
  });
  s += txt(36, 275, "EVIDENCE PACKAGE", 8, C.orange);
  [
    "PR diff + impact graph",
    "TAML playbook",
    "Playwright traces",
    "Agent/tool trajectories",
    "RAG evidence",
    "Security results",
    "Defect records",
    "CI/CD stages",
    "Machine-readable bundle",
  ].forEach((v, i) => (s += txt(36 + (i % 3) * 175, 245 - Math.floor(i / 3) * 22, v, 8, C.muted)));
  return s + footer();
}

function buildPdf() {
  const streams = pages.map((p) =>
    p.kind === "dashboard"
      ? pageDashboard()
      : p.kind === "impact"
        ? pageImpact()
        : p.kind === "ai"
          ? pageAi()
          : p.kind === "security"
            ? pageSecurity()
            : p.kind === "defects"
              ? pageDefects()
              : pageRelease(),
  );
  const objects: string[] = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "PAGES_PLACEHOLDER",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ];
  const pageIds: number[] = [];
  streams.forEach((stream) => {
    const contentId = objects.length + 1;
    objects.push(
      "<< /Length " +
        new TextEncoder().encode(stream).length +
        " >>\\nstream\\n" +
        stream +
        "endstream",
    );
    const pageId = objects.length + 1;
    objects.push(
      "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 3 0 R >> >> /Contents " +
        contentId +
        " 0 R >>",
    );
    pageIds.push(pageId);
  });
  objects[1] =
    "<< /Type /Pages /Kids [" +
    pageIds.map((x) => x + " 0 R").join(" ") +
    "] /Count " +
    pageIds.length +
    " >>";
  let pdf = "%PDF-1.4\\n";
  const offsets = [0];
  for (let i = 0; i < objects.length; i++) {
    offsets.push(new TextEncoder().encode(pdf).length);
    pdf += i + 1 + " 0 obj\\n" + objects[i] + "\\nendobj\\n";
  }
  const xref = new TextEncoder().encode(pdf).length;
  pdf += "xref\\n0 " + (objects.length + 1) + "\\n0000000000 65535 f \\n";
  for (let i = 1; i < offsets.length; i++)
    pdf += String(offsets[i]).padStart(10, "0") + " 00000 n \\n";
  pdf +=
    "trailer\\n<< /Size " +
    (objects.length + 1) +
    " /Root 1 0 R >>\\nstartxref\\n" +
    xref +
    "\\n%%EOF\\n";
  return new TextEncoder().encode(pdf);
}

export const Route = createFileRoute("/api/sample-report-pdf")({
  server: {
    handlers: {
      GET: async () =>
        new Response(buildPdf(), {
          headers: {
            "Content-Type": "application/pdf",
            "Content-Disposition":
              'attachment; filename="shyena-enterprise-autonomous-qa-sample-report.pdf"',
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});

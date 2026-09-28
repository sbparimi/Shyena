import { createFileRoute } from "@tanstack/react-router";

function buildPdf() {
  const lines = [
    "SHYENA - SAMPLE RELEASE ASSURANCE REPORT",
    "ILLUSTRATIVE / SYNTHETIC DEMO BOT",
    "",
    "Agent: Customer Service Bot v2.8",
    "Verdict: BLOCK",
    "",
    "LAYERS",
    "Deterministic    PASS",
    "Semantic         REVIEW",
    "Orchestration    FAIL",
    "Security         FAIL",
    "",
    "ILLUSTRATIVE FINDINGS",
    "P1 - Wrong tool selected for a customer request.",
    "P1 - Adversarial prompt reached an unsafe execution branch.",
    "P2 - Answer omitted a required policy explanation.",
    "",
    "GOVERNANCE EVIDENCE",
    "Requirement -> trace -> finding -> remediation status.",
    "",
    "Evidence chain:",
    "Business journey -> agent -> trace -> evaluation -> finding -> release decision.",
    "",
    "This synthetic report contains no client, employer or production data.",
  ];
  const esc=(value:string)=>value.replaceAll("\\","\\\\").replaceAll("(","\\(").replaceAll(")","\\)");
  let stream="BT\n/F1 11 Tf\n50 790 Td\n14 TL\n";
  lines.forEach((line,index)=>{ if(index) stream+="T*\n"; stream+=`(${esc(line)}) Tj\n`; });
  stream+="ET\n";
  const objects=[
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>",
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
    `<< /Length ${new TextEncoder().encode(stream).length} >>\nstream\n${stream}endstream`,
  ];
  let pdf="%PDF-1.4\n";
  const offsets=[0];
  for(let i=0;i<objects.length;i++){ offsets.push(new TextEncoder().encode(pdf).length); pdf+=`${i+1} 0 obj\n${objects[i]}\nendobj\n`; }
  const xref=new TextEncoder().encode(pdf).length;
  pdf+=`xref\n0 ${objects.length+1}\n0000000000 65535 f \n`;
  for(let i=1;i<offsets.length;i++) pdf+=`${String(offsets[i]).padStart(10,"0")} 00000 n \n`;
  pdf+=`trailer\n<< /Size ${objects.length+1} /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return new TextEncoder().encode(pdf);
}

export const Route=createFileRoute("/api/sample-report-pdf")({
  server:{handlers:{GET:async()=>new Response(buildPdf(),{headers:{"Content-Type":"application/pdf","Content-Disposition":'attachment; filename="shyena-sample-release-assurance-report.pdf"',"Cache-Control":"public, max-age=3600"}})}}
});

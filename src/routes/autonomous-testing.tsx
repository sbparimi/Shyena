import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/site/executive-page";

export const Route = createFileRoute("/autonomous-testing")({
  head: () => ({ meta: [
    { title: "Autonomous Testing — Shyena" },
    { name: "description", content: "Shyena autonomously understands requirements, assesses risk, engineers tests, executes them, investigates failures and produces release evidence." },
  ]}),
  component: AutonomousTestingPage,
});

function AutonomousTestingPage() {
  return <>
    <ExecutivePage
      eyebrow="Autonomous Quality Engineering"
      title="Give Shyena a quality goal."
      accent="It does the engineering."
      intro="Shyena connects the quality lifecycle from requirement to release: understand the system, assess risk, design test intent, execute it, investigate failures and produce evidence for the decision."
      primaryLabel="See an autonomous flow"
      capabilities={[
        { title: "Understand", body: "Read requirements, architecture and system behaviour to identify what matters." },
        { title: "Engineer", body: "Create traceable test intent, select execution strategies and generate automation." },
        { title: "Assure", body: "Execute, observe, investigate, repair and prove the result with evidence." },
      ]}
      workflow={[
        { step: "01", title: "Understand", body: "Interpret requirements, acceptance criteria and system context." },
        { step: "02", title: "Assess risk", body: "Prioritise critical capabilities, journeys and failure modes." },
        { step: "03", title: "Design", body: "Create implementation-independent test contracts and evidence rules." },
        { step: "04", title: "Engineer", body: "Compile test intent into executable plans and automation." },
        { step: "05", title: "Investigate", body: "Correlate failures with application and business evidence." },
        { step: "06", title: "Learn & decide", body: "Repair where safe, re-test and apply release policy." },
      ]}
      outcomeTitle="Move from an automation pipeline to an autonomous quality loop."
      outcomes={[
        { title: "Continuous coverage", body: "Quality scope evolves with requirements and application change." },
        { title: "Less manual engineering", body: "Automate the work around testing, not only the browser clicks." },
        { title: "Faster RCA", body: "Investigate failures from correlated evidence instead of isolated logs." },
        { title: "Release intelligence", body: "Make risk-aware decisions from requirements, evidence and policy." },
      ]}
      proofTitle="The autonomous loop"
      proof={[
        { label: "Input", value: "Goal / requirement" },
        { label: "Reason", value: "Risk + test intent" },
        { label: "Execute", value: "Right engine" },
        { label: "Output", value: "Proof + decision" },
      ]}
      finalTitle="Automation executes. Shyena reasons."
      finalBody="Deterministic engines verify. AI handles bounded reasoning. Evidence proves. Policy governs the release decision."
    />

    <section className="border-t border-slate-300 bg-white">
      <div className="mx-auto max-w-[1440px] px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div><div className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#a87900] sm:text-xs">ERP testing</div><h2 className="mt-4 max-w-3xl font-[Sora] text-[clamp(2.2rem,5vw,4.5rem)] font-extrabold leading-[0.94] tracking-[-0.055em]">Oracle Fusion. Business-process aware testing.</h2><p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Use Claude AI with Shyena to understand configuration, business processes and end-to-end enterprise journeys across Finance, HCM, Supply Chain, Procurement and Projects.</p></div>
          <div className="border border-slate-300 bg-[#f8fafc] p-6 sm:p-8"><div className="grid grid-cols-2 gap-px border border-slate-300 bg-slate-300"><div className="bg-white p-5"><div className="font-mono text-[10px] text-slate-400">UNDERSTAND</div><div className="mt-2 font-extrabold">Configuration</div></div><div className="bg-white p-5"><div className="font-mono text-[10px] text-slate-400">TEST</div><div className="mt-2 font-extrabold">Business process</div></div><div className="bg-white p-5"><div className="font-mono text-[10px] text-slate-400">EVALUATE</div><div className="mt-2 font-extrabold">End-to-end outcome</div></div><div className="bg-white p-5"><div className="font-mono text-[10px] text-slate-400">PROVE</div><div className="mt-2 font-extrabold">Audit evidence</div></div></div><Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-xs font-extrabold uppercase">Discuss ERP assurance <ArrowRight className="h-4 w-4" /></Link></div>
        </div>
      </div>
    </section>
  </>;
}

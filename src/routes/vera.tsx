import { createFileRoute } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/site/executive-page";

export const Route = createFileRoute("/vera")({
  head: () => ({ meta: [
    { title: "VERA — AI Testing & Evaluation | Shyena" },
    { name: "description", content: "VERA tests real AI agent journeys, evaluates behaviour and outcomes, and turns execution evidence into release decisions." },
  ]}),
  component: VeraPage,
});

function VeraPage() {
  return <ExecutivePage
    eyebrow="VERA · Test & Evaluate"
    title="Test real AI behaviour."
    accent="Prove the outcome."
    intro="VERA runs realistic agent journeys and evaluates what actually happened—not just whether an automation step passed. It combines deterministic checks, semantic evaluation and execution evidence into a release-ready verdict."
    primaryLabel="See VERA in action"
    capabilities={[
      { title: "Run real journeys", body: "Execute multi-turn customer journeys across web, API and agent experiences." },
      { title: "Evaluate behaviour", body: "Check outcomes, business rules, routing, state, tool use and execution integrity." },
      { title: "Prove the result", body: "Collect evidence and produce a requirement-level verdict instead of a raw test status." },
    ]}
    workflow={[
      { step: "01", title: "Start with intent", body: "Use a business requirement and implementation-independent test contract." },
      { step: "02", title: "Plan", body: "Select journeys, data, environments and the right execution engine." },
      { step: "03", title: "Execute", body: "Run the journey through the application or agent." },
      { step: "04", title: "Observe", body: "Capture DOM, network, API, logs, traces and business events." },
      { step: "05", title: "Evaluate", body: "Combine deterministic proof with bounded semantic reasoning." },
      { step: "06", title: "Verdict", body: "Return pass, fail, blocked or review with evidence and impact." },
    ]}
    outcomeTitle="A failed automation step is not the same thing as a failed requirement."
    outcomes={[
      { title: "Outcome-level validation", body: "Judge whether the customer or business goal was actually satisfied." },
      { title: "Execution integrity", body: "Detect routing, state, tool and orchestration failures that final-answer checks miss." },
      { title: "Evidence", body: "Keep the signals needed to reproduce and defend the finding." },
      { title: "Release readiness", body: "Turn quality results into a clear engineering decision." },
    ]}
    proofTitle="One evaluation model"
    proof={[
      { label: "Deterministic", value: "Rules & invariants" },
      { label: "Semantic", value: "Behaviour & intent" },
      { label: "Execution", value: "Runtime integrity" },
      { label: "Verdict", value: "Evidence-backed" },
    ]}
    finalTitle="Don't ask only: did the test pass?"
    finalBody="Ask whether the requirement was actually satisfied. VERA connects the answer to runtime evidence, risk and release impact."
  />;
}

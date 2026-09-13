import { createFileRoute } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/site/executive-page";

export const Route = createFileRoute("/nexus")({
  head: () => ({ meta: [
    { title: "NEXUS — Understand Your AI System | Shyena" },
    { name: "description", content: "NEXUS maps AI agent architecture, orchestration, dependencies and journeys so testing starts with an understanding of the real system." },
  ]}),
  component: NexusPage,
});

function NexusPage() {
  return <ExecutivePage
    eyebrow="NEXUS · Understand"
    title="Understand your AI system."
    accent="Before you test it."
    intro="NEXUS builds a structural view of your agent—architecture, orchestration, dependencies, decisions and critical journeys—so your quality strategy is based on how the system actually works."
    primaryLabel="Assess my system"
    capabilities={[
      { title: "Map the system", body: "Discover flows, decisions, integrations, dependencies and business-critical paths." },
      { title: "Find critical journeys", body: "Identify the routes, branches and outcomes that matter most to customers and the business." },
      { title: "Create test intelligence", body: "Turn system understanding into traceable test intent and coverage obligations." },
    ]}
    workflow={[
      { step: "01", title: "Connect", body: "Read the live agent and available system definitions." },
      { step: "02", title: "Model", body: "Build a canonical map of logic, decisions and dependencies." },
      { step: "03", title: "Analyse", body: "Find critical paths, branches, risks and coverage gaps." },
      { step: "04", title: "Design", body: "Create implementation-independent test intent." },
      { step: "05", title: "Trace", body: "Keep requirements, journeys and tests connected." },
      { step: "06", title: "Handoff", body: "Give VERA and the execution layer a system-aware test plan." },
    ]}
    outcomeTitle="Stop testing the system you think you built. Test the system you actually run."
    outcomes={[
      { title: "System visibility", body: "See architecture and orchestration before a test is executed." },
      { title: "Coverage intelligence", body: "Expose branches and journeys hidden from conventional suites." },
      { title: "Traceability", body: "Connect requirements, capabilities, journeys and tests." },
      { title: "Less authoring", body: "Start from system intelligence instead of manually reconstructing it." },
    ]}
    proofTitle="Built for agentic systems"
    proof={[
      { label: "Live source", value: "Cognigy" },
      { label: "Model", value: "System-aware" },
      { label: "Analysis", value: "Graph + dependency" },
      { label: "Output", value: "Test intent" },
    ]}
    finalTitle="Know the system before you ask it to prove itself."
    finalBody="Bring one real agent or business flow. NEXUS shows the structure, critical journeys and test obligations that should drive assurance."
  />;
}

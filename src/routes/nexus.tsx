import { createFileRoute } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/site/executive-page";

const SITE_URL = "https://www.shyena.eu";
const CANONICAL = `${SITE_URL}/nexus`;
const TITLE = "NEXUS — AI System Understanding & Test Intelligence | Shyena";
const DESCRIPTION = "NEXUS maps AI agent architecture, orchestration, dependencies and critical journeys so assurance starts with an understanding of the real system.";

export const Route = createFileRoute("/nexus")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shyena" },
      { property: "og:url", content: CANONICAL },
      { property: "og:image", content: `${SITE_URL}/shyena-logo-lockup.svg?v=20260917` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: `${SITE_URL}/shyena-logo-lockup.svg?v=20260917` },
    ],
    links: [{ rel: "canonical", href: CANONICAL }],
  }),
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

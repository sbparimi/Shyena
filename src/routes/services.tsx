import { createFileRoute } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/site/executive-page";

export const Route = createFileRoute("/services")({
  head: () => ({ meta: [
    { title: "AI Quality Engineering Services | Shyena" },
    { name: "description", content: "Shyena services help organisations implement autonomous testing, AI evaluation, security assurance and enterprise quality engineering." },
  ]}),
  component: ServicesPage,
});

function ServicesPage() {
  return <ExecutivePage
    eyebrow="Services"
    title="Turn your quality strategy into an autonomous capability."
    accent="Without replacing your stack."
    intro="Shyena combines platform technology with engineering expertise to help teams assess AI systems, modernise test strategy, implement autonomous quality workflows and establish evidence-backed release governance."
    primaryLabel="Discuss your quality challenge"
    capabilities={[
      { title: "AI assurance", body: "Assess conversational AI, agentic workflows, RAG, tools and business outcomes." },
      { title: "Autonomous QE", body: "Design the requirement-to-release workflow around AI reasoning and deterministic verification." },
      { title: "Enterprise testing", body: "Extend assurance across web, API, ERP, accessibility, performance, security and existing automation." },
    ]}
    workflow={[
      { step: "01", title: "Assess", body: "Understand your applications, agents, risks and current test estate." },
      { step: "02", title: "Prioritise", body: "Identify the journeys and controls that matter most." },
      { step: "03", title: "Design", body: "Define test contracts, evidence rules and governance." },
      { step: "04", title: "Implement", body: "Connect Shyena to your existing engineering and observability stack." },
      { step: "05", title: "Operationalise", body: "Run continuously through CI/CD and release workflows." },
      { step: "06", title: "Improve", body: "Use evidence and learning to continuously increase coverage and confidence." },
    ]}
    outcomeTitle="Keep the tools. Remove the gaps between them."
    outcomes={[
      { title: "Strategy", body: "A clear quality model tied to business risk and customer journeys." },
      { title: "Implementation", body: "Working integrations with your existing automation and delivery stack." },
      { title: "Capability", body: "Teams that can operate and extend autonomous quality workflows." },
      { title: "Governance", body: "Evidence, policy and traceability that support enterprise releases." },
    ]}
    proofTitle="Typical starting points"
    proof={[{ label: "AI", value: "Agent assurance" }, { label: "Web", value: "Autonomous testing" }, { label: "ERP", value: "Oracle Fusion" }, { label: "Security", value: "Adversarial testing" }]}
    finalTitle="Start with one critical journey."
    finalBody="Shyena can demonstrate the value against a real application, agent or business process before you scale the capability."
  />;
}

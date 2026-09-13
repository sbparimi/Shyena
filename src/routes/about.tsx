import { createFileRoute } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/site/executive-page";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [
    { title: "About Shyena — Autonomous Quality Engineering" },
    { name: "description", content: "Shyena builds autonomous quality engineering for AI systems and enterprise software, connecting testing, security, evidence and release decisions." },
  ]}),
  component: AboutPage,
});

function AboutPage() {
  return <ExecutivePage
    eyebrow="About Shyena"
    title="Quality engineering for software that can reason."
    accent="And act."
    intro="Shyena exists because traditional automation was built for predictable software. AI agents introduce reasoning, orchestration, tools and changing behaviour. We build the assurance layer that makes these systems testable, explainable and releasable."
    primaryLabel="Talk to Shyena"
    capabilities={[
      { title: "Make systems understandable", body: "Build a reliable model of requirements, architecture, journeys and dependencies." },
      { title: "Make behaviour provable", body: "Combine AI reasoning with deterministic verification and runtime evidence." },
      { title: "Make releases defensible", body: "Connect findings to risk, policy and the business decision to ship." },
    ]}
    workflow={[
      { step: "01", title: "Understand", body: "We start from the business goal, not the automation script." },
      { step: "02", title: "Model", body: "We build the system and risk context required for meaningful testing." },
      { step: "03", title: "Test", body: "We execute real behaviour through the appropriate engineering engines." },
      { step: "04", title: "Observe", body: "We collect evidence across the system, not only the test runner." },
      { step: "05", title: "Reason", body: "AI investigates ambiguous behaviour while deterministic rules remain authoritative." },
      { step: "06", title: "Assure", body: "Evidence and policy turn technical results into release confidence." },
    ]}
    outcomeTitle="The goal is not more tests. The goal is better decisions."
    outcomes={[
      { title: "Trust", body: "Know what was tested and why the result should be trusted." },
      { title: "Speed", body: "Reduce repetitive engineering work around the quality lifecycle." },
      { title: "Coverage", body: "Expand beyond scripted happy paths into meaningful risk." },
      { title: "Governance", body: "Keep evidence and traceability with the decision." },
    ]}
    proofTitle="Our principle"
    proof={[{ label: "AI", value: "Reasons" }, { label: "Deterministic", value: "Verifies" }, { label: "Evidence", value: "Proves" }, { label: "Policy", value: "Governs" }]}
    finalTitle="Build AI systems with confidence—not hope."
    finalBody="Shyena brings autonomous quality engineering into the way modern software is built and released."
  />;
}

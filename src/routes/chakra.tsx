import { createFileRoute } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/site/executive-page";

export const Route = createFileRoute("/chakra")({
  head: () => ({ meta: [
    { title: "CHAKRA — AI Security Testing | Shyena" },
    { name: "description", content: "CHAKRA probes AI agents and enterprise systems for adversarial paths, trust-boundary failures and unsafe behaviour before production." },
  ]}),
  component: ChakraPage,
});

function ChakraPage() {
  return <ExecutivePage
    eyebrow="CHAKRA · Secure"
    title="Find what attackers can make your AI system do."
    accent="Before production."
    intro="CHAKRA brings adversarial security testing into the same assurance loop: discover trust boundaries, probe unsafe behaviour, validate controls and connect findings to real business impact."
    primaryLabel="Assess security"
    capabilities={[
      { title: "Probe behaviour", body: "Test prompt injection, unsafe instructions, privilege boundaries and adversarial journeys." },
      { title: "Validate controls", body: "Verify that guardrails, tools, permissions and handovers behave as designed." },
      { title: "Prove the risk", body: "Capture reproducible evidence and connect security findings to business impact." },
    ]}
    workflow={[
      { step: "01", title: "Map", body: "Identify agents, tools, data and trust boundaries." },
      { step: "02", title: "Model risk", body: "Prioritise realistic attack paths and unsafe outcomes." },
      { step: "03", title: "Probe", body: "Execute adversarial scenarios against the live system." },
      { step: "04", title: "Observe", body: "Capture responses, tool calls, state changes and evidence." },
      { step: "05", title: "Validate", body: "Determine whether the security control actually held." },
      { step: "06", title: "Decide", body: "Translate findings into remediation and release impact." },
    ]}
    outcomeTitle="Security testing should answer one business question: what could go wrong in production?"
    outcomes={[
      { title: "Attack-path coverage", body: "Test realistic ways an agent can be manipulated or misused." },
      { title: "Control assurance", body: "Verify security boundaries instead of trusting configuration alone." },
      { title: "Reproducible evidence", body: "Preserve the interaction and system evidence behind each finding." },
      { title: "Risk-aware release", body: "Connect vulnerabilities to customer and business impact." },
    ]}
    proofTitle="Security assurance"
    proof={[
      { label: "Attack", value: "Adversarial paths" },
      { label: "Control", value: "Guardrails & permissions" },
      { label: "Evidence", value: "Reproducible" },
      { label: "Impact", value: "Release risk" },
    ]}
    finalTitle="Know the boundary before an attacker finds it."
    finalBody="CHAKRA turns AI security testing into evidence that engineering, security and risk teams can act on."
  />;
}

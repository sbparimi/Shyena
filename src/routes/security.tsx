import { createFileRoute } from "@tanstack/react-router";
import { ExecutivePage } from "@/components/site/executive-page";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/security")({
  head: () => ({ links: [{ rel: "canonical", href: "https://www.shyena.eu/security" }], meta: [
    { title: "AI Security Testing & AI Agent Security | Shyena" },
    { name: "description", content: "Test AI agents and enterprise systems for prompt injection, unsafe behaviour, trust-boundary failures and control gaps with evidence-backed security assurance." },
    { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
    { property: "og:title", content: "AI Security Testing & AI Agent Security | Shyena" },
    { property: "og:description", content: "Adversarial AI security testing, control validation and reproducible evidence for production release decisions." },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Shyena" },
    { property: "og:url", content: `${SITE}/security` },
    { property: "og:image", content: `${SITE}/shyena-logo-lockup.svg?v=20260917` },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: "AI Security Testing & AI Agent Security | Shyena" },
    { name: "twitter:description", content: "Adversarial AI security testing and evidence-backed release assurance." },
    { name: "twitter:image", content: `${SITE}/shyena-logo-lockup.svg?v=20260917` },
  ]}),
  component: SecurityPage,
});

function SecurityPage() {
  return <ExecutivePage
    eyebrow="Security assurance"
    title="Find security failures before production."
    accent="Prove the risk."
    intro="Shyena connects adversarial testing, application behaviour and runtime evidence so security teams can see what failed, why it matters and whether the release should proceed."
    primaryLabel="Assess security"
    capabilities={[
      { title: "Discover exposure", body: "Map agents, APIs, tools, data and trust boundaries that can create attack paths." },
      { title: "Test controls", body: "Probe authentication, authorization, prompt safety, tool permissions and unsafe behaviour." },
      { title: "Evidence the finding", body: "Preserve reproducible runtime evidence and connect it to business impact." },
    ]}
    workflow={[
      { step: "01", title: "Map", body: "Identify assets, actors, tools and trust boundaries." },
      { step: "02", title: "Prioritise", body: "Rank attack paths by likelihood and business impact." },
      { step: "03", title: "Probe", body: "Execute adversarial scenarios against the target." },
      { step: "04", title: "Observe", body: "Capture responses, state changes, tool calls and system evidence." },
      { step: "05", title: "Validate", body: "Determine whether controls actually prevented the unsafe outcome." },
      { step: "06", title: "Report", body: "Connect evidence, remediation and release impact." },
    ]}
    outcomeTitle="Security results should be understandable to engineering, security and leadership."
    outcomes={[
      { title: "Clear attack paths", body: "Show how an unsafe outcome can actually be reached." },
      { title: "Control confidence", body: "Verify the control rather than trusting configuration." },
      { title: "Reproducible findings", body: "Preserve the evidence required to investigate and remediate." },
      { title: "Risk-aware release", body: "Translate technical findings into release consequences." },
    ]}
    proofTitle="Security evidence"
    proof={[{ label: "Target", value: "AI + enterprise systems" }, { label: "Method", value: "Adversarial testing" }, { label: "Proof", value: "Runtime evidence" }, { label: "Decision", value: "Risk + policy" }]}
    finalTitle="Know what can be exploited before customers discover it."
    finalBody="CHAKRA provides the security assurance layer inside the wider Shyena quality loop."
  />;
}

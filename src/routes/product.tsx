import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product — Verdikt AI Evaluation Platform" },
      { name: "description", content: "How Verdikt runs agent-driven conversations, evaluates every turn, and gates release verdicts for conversational AI." },
      { property: "og:title", content: "Product — Verdikt AI Evaluation Platform" },
      { property: "og:description", content: "Agentic test personas, real conversation execution, LLM-as-judge metrics, and execution-integrity gating." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Product"
      title="A deeper look at the evaluation engine"
      description="Detailed product breakdown is coming next: personas, runners, judges, assertions, and the integrity gate."
    />
  ),
});
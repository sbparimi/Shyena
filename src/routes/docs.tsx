import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Docs — Verdikt" },
      { name: "description", content: "Guides for defining test personas, wiring runners to your conversational AI platform, and reading gated verdicts." },
      { property: "og:title", content: "Docs — Verdikt" },
      { property: "og:description", content: "Guides, API references, and evaluation metric definitions for Verdikt." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Documentation"
      title="Set up your first regression run"
      description="Quickstarts, metric definitions, and API references land here next."
    />
  ),
});

import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog — Verdikt" },
      { name: "description", content: "Field notes on evaluating conversational AI: judge design, flaky runs, and release gating practices." },
      { property: "og:title", content: "Blog — Verdikt" },
      { property: "og:description", content: "Field notes on evaluating conversational AI agents in production." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Blog"
      title="Notes on evaluating conversational AI"
      description="Articles on judge design, non-determinism, and release gating are on the way."
    />
  ),
});

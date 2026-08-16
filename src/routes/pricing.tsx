import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Verdikt" },
      { name: "description", content: "Plans for teams evaluating conversational AI agents, from a first pilot to enterprise-wide release gating." },
      { property: "og:title", content: "Pricing — Verdikt" },
      { property: "og:description", content: "Plans for teams evaluating conversational AI agents at enterprise scale." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Pricing"
      title="Plans that scale with your evaluation volume"
      description="Detailed tiers, run quotas, and enterprise terms are coming next. Talk to us for a scoped quote today."
    />
  ),
});

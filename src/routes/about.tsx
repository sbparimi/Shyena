import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Verdikt" },
      { name: "description", content: "Why we built an evaluation platform that refuses to report a false green pass for conversational AI releases." },
      { property: "og:title", content: "About — Verdikt" },
      { property: "og:description", content: "The team building trustworthy release gates for conversational AI." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="About"
      title="We build the evidence layer for conversational AI"
      description="Our story, team, and principles are coming to this page next."
    />
  ),
});

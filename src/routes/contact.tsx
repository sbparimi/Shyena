import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/placeholder-page";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Demo — Shyena" },
      { name: "description", content: "Book a demo and watch Shyena evaluate a real conversation against your own agent." },
      { property: "og:title", content: "Contact & Demo — Shyena" },
      { property: "og:description", content: "Book a demo of Shyena for your conversational AI team." },
    ],
  }),
  component: () => (
    <PlaceholderPage
      eyebrow="Contact"
      title="See it evaluate your own agent"
      description="The demo request form lands here next. In the meantime, reach us at hello@shyena.ai."
    />
  ),
});

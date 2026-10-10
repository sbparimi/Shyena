import { createFileRoute } from "@tanstack/react-router";
import { QualityIntelligencePage } from "../components/site/quality-intelligence-page";
export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "AI Assurance Platform | Evaluation, Security & Governance | Shyena" },
      {
        name: "description",
        content: "Map, judge, attack and prove AI systems with Shyena's assurance platform.",
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { property: "og:title", content: "AI Assurance Platform | Shyena" },
      {
        property: "og:description",
        content: "Map, judge, attack and prove AI systems with Shyena's assurance platform.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.shyena.eu/platform" },
      { property: "og:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
      { property: "og:image:alt", content: "Shyena autonomous QA platform" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/platform" }],
  }),
  component: () => <QualityIntelligencePage />,
});

import { createFileRoute } from "@tanstack/react-router";
import { QualityIntelligencePage } from "../components/site/quality-intelligence-page";
export const Route = createFileRoute("/developers")({
  head: () => ({
    meta: [
      { title: "Shyena Developer Workflow | AI Assurance API" },
      {
        name: "description",
        content:
          "Bring AI assurance into engineering workflows with reproducible runs, evidence retrieval and release gates.",
      },
      {
        name: "robots",
        content: "noindex,follow",
      },
      { property: "og:title", content: "Shyena Developer Workflow | AI Assurance API" },
      {
        property: "og:description",
        content:
          "Bring AI assurance into engineering workflows with reproducible runs, evidence retrieval and release gates.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.shyena.eu/developers" },
      { property: "og:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
      { property: "og:image:alt", content: "Shyena AI assurance platform" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/developers" }],
  }),
  component: () => <QualityIntelligencePage />,
});

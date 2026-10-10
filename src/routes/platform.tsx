import { createFileRoute } from "@tanstack/react-router";
import { QualityIntelligencePage } from "../components/site/quality-intelligence-page";
export const Route = createFileRoute("/platform")({
  head: () => ({
    meta: [
      { title: "Agentic SDLC Platform | Plan, Code, Test & Release | Shyena" },
      {
        name: "description",
        content:
          "Connect planning, coding agents, test engineering, security and release governance in one evidence-led Agentic SDLC workflow with Shyena.",
      },
      {
        name: "robots",
        content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1",
      },
      { property: "og:title", content: "Agentic SDLC Platform | Shyena" },
      {
        property: "og:description",
        content:
          "Connect planning, coding agents, test engineering, security and release governance in one evidence-led Agentic SDLC workflow with Shyena.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://www.shyena.eu/platform" },
      { property: "og:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
      { property: "og:image:alt", content: "Shyena Agentic SDLC platform" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/platform" }],
  }),
  component: () => <QualityIntelligencePage />,
});

import { createFileRoute } from "@tanstack/react-router";
import { AutonomousQACinematicDemo } from "@/components/site/autonomous-qa-cinematic-demo";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "AI Assurance Platform | Shyena" },
      {
        name: "description",
        content:
          "Interactive Shyena AI assurance demonstration: understand, evaluate, attack and prove an AI system.",
      },
      { property: "og:title", content: "AI Assurance Platform | Shyena" },
      {
        property: "og:description",
        content:
          "Interactive Shyena AI assurance demonstration: understand, evaluate, attack and prove an AI system.",
      },
      { property: "og:url", content: "https://www.shyena.eu/demo" },
    ],
    links: [{ rel: "canonical", href: "https://www.shyena.eu/demo" }],
  }),
  component: () => <AutonomousQACinematicDemo />,
});

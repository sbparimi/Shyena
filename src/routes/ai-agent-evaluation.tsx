import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, seoHead, faqSchema } from "@/components/seo/seo-landing";
import { getSeoPage } from "@/components/seo/seo-data";
const config = getSeoPage("/ai-agent-evaluation");
export const Route = createFileRoute("/ai-agent-evaluation")({
  head: () => ({
    ...seoHead(config),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(config)) }],
  }),
  component: () => <SeoLanding config={config} />,
});

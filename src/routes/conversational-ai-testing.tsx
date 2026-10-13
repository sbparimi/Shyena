import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, seoHead, faqSchema } from "@/components/seo/seo-landing";
import { getSeoPage } from "@/components/seo/seo-data";
const config = getSeoPage("/conversational-ai-testing");
export const Route = createFileRoute("/conversational-ai-testing")({
  head: () => ({
    ...seoHead(config),
    scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(config)) }],
  }),
  component: () => <SeoLanding config={config} />,
});

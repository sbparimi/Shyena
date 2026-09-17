import { createFileRoute } from "@tanstack/react-router";
import { SeoLanding, seoHead, faqSchema } from "@/components/seo/seo-landing";
import { seoPages } from "@/components/seo/seo-data";
const config = seoPages["/ai-agent-evaluation"];
export const Route = createFileRoute("/ai-agent-evaluation")({ head: () => ({ ...seoHead(config), scripts: [{ type: "application/ld+json", children: JSON.stringify(faqSchema(config)) }] }), component: () => <SeoLanding config={config} /> });

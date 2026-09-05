import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { type ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import appCss from "../styles.css?url";
import siteThemeCss from "../site-theme.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { ArticleConceptDiagram, type ArticleConcept } from "@/components/blog/article-concept-diagrams";
import { generatedContent } from "@/content/generated-content";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { VideoExperience } from "@/components/site/video-experience";

const MANUAL_ARTICLE_VISUALS: Record<string, { concept: ArticleConcept; thesis: string }> = {
  "why-conversational-ai-needs-a-different-testing-model": { concept: "trajectory", thesis: "Conversational testing must evaluate valid trajectories to a user goal, not one pre-written transcript. The agent should be free to vary its wording and route while still satisfying the intended outcome and hard constraints." },
  "the-problem-with-green-checkmarks-on-broken-conversations": { concept: "false-pass", thesis: "A quality score cannot rescue an incomplete execution. Execution integrity must be checked first so a truncated, timed-out, or errored conversation can never masquerade as a passing journey." },
  "how-to-test-a-cognigy-agent": { concept: "cognigy", thesis: "Cognigy assurance starts with the real flow and ends with evidence: generate a goal-driven journey, execute it against the live agent, evaluate deterministic and semantic behaviour, then preserve the trace behind the verdict." },
  "cognigy-agent-security-testing-with-ziran": { concept: "security", thesis: "Agent security testing is a prioritization problem as well as an attack problem: understand the changed surface, model exposure, select high-value campaigns, execute adaptively, and turn the resulting evidence into a security verdict." },
};

function NotFoundComponent() { return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-7xl font-bold text-foreground">404</h1><h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2><p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p><div className="mt-6"><Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Go home</Link></div></div></div>; }

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) { console.error(error); const router = useRouter(); useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]); return <div className="flex min-h-screen items-center justify-center bg-background px-4"><div className="max-w-md text-center"><h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1><p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end. You can try refreshing or head back home.</p><div className="mt-6 flex flex-wrap justify-center gap-2"><button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Try again</button><a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">Go home</a></div></div></div>; }

const ORGANIZATION_SCHEMA = { "@context": "https://schema.org", "@type": "SoftwareApplication", name: "Shyena", applicationCategory: "BusinessApplication", operatingSystem: "Web", description: "Shyena is an enterprise AI agent assurance platform that helps teams understand AI systems, test real behavior, defend security boundaries and produce evidence-backed release decisions.", url: "https://shyena.eu/", keywords: "AI agent assurance, AI evaluation, AI testing, AI QA automation, AI agent testing, Cognigy testing, LLM evaluation, conversational AI testing, AI security testing, AI release assurance" };

function ArticleVisualInjector() {
  const location = useLocation();
  const [mountNode, setMountNode] = useState<HTMLDivElement | null>(null);
  const slug = location.pathname.startsWith("/blog/") ? location.pathname.split("/").filter(Boolean).at(-1) : undefined;
  const generated = slug ? generatedContent.articles.find((article) => article.slug === slug) : undefined;
  const visual = slug ? MANUAL_ARTICLE_VISUALS[slug] : undefined;
  const concept = (generated?.diagram || visual?.concept || "systems") as ArticleConcept;
  const thesis = generated?.thesis || visual?.thesis || "Reliable AI agent assurance tests the system around the model, not generated text in isolation.";
  useEffect(() => {
    if (!location.pathname.startsWith("/blog/")) { setMountNode(null); return; }
    const heading = document.querySelector("main h1");
    if (!heading) return;
    document.querySelector(".shyena-article-visual")?.remove();
    const node = document.createElement("div");
    node.className = "shyena-article-visual mt-8 w-full text-left";
    heading.insertAdjacentElement("afterend", node);
    setMountNode(node);
    return () => { node.remove(); setMountNode(null); };
  }, [location.pathname]);
  if (!mountNode) return null;
  return createPortal(<div><ArticleConceptDiagram concept={concept} /><p className="mx-auto mt-8 max-w-3xl text-center text-base font-medium leading-relaxed text-foreground sm:text-lg">{thesis}</p></div>, mountNode);
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({ meta: [
    { charSet: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { title: "Shyena — Enterprise AI Agent Assurance Platform" },
    { name: "description", content: "Make AI systems safe to release with evidence. Shyena helps teams understand AI agents, test real behavior, defend security boundaries and govern release decisions." },
    { name: "keywords", content: "AI agent assurance, AI evaluation, AI testing, AI QA, AI QA automation, enterprise AI testing, LLM evaluation, conversational AI testing, Cognigy testing, agentic AI evaluation, AI security testing, AI release assurance" },
    { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" }, { property: "og:title", content: "Shyena — Enterprise AI Agent Assurance Platform" }, { property: "og:description", content: "Understand the system. Test the behavior. Defend the release. Produce evidence-backed AI release decisions." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [
    { rel: "stylesheet", href: appCss }, { rel: "stylesheet", href: siteThemeCss }, { rel: "preconnect", href: "https://fonts.googleapis.com" }, { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }, { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Sora:wght@600;700;800&display=swap" }, { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" }, { rel: "apple-touch-icon", href: "/favicon.svg" },
  ] }),
  shellComponent: RootShell, component: RootComponent, notFoundComponent: NotFoundComponent, errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) { return <html lang="en"><head><HeadContent /><script defer data-domain="shyena.eu" src="https://plausible.io/js/script.js" /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} /></head><body>{children}<Scripts /></body></html>; }

function RootComponent() { const { queryClient } = Route.useRouteContext(); const location = useLocation(); const isResourcePage = location.pathname.startsWith("/docs") || location.pathname.startsWith("/blog"); return <QueryClientProvider client={queryClient}><div className="flex min-h-screen flex-col"><SiteHeader /><main className={`${isResourcePage ? "resource-surface " : ""}site-theme flex-1`}><ArticleVisualInjector /><Outlet /></main><SiteFooter /><VideoExperience /></div></QueryClientProvider>; }

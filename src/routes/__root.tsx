import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { startAnimatedFavicon } from "../lib/animated-favicon";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";
import { VideoExperience } from "@/components/site/video-experience";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
        <div className="mt-6"><Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Go home</Link></div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">This page didn't load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went wrong on our end. You can try refreshing or head back home.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">Try again</button>
          <a href="/" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent">Go home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shyena — AI Evaluation, AI Testing & AI QA Automation Platform" },
      { name: "description", content: "Shyena is an enterprise AI evaluation and AI QA automation platform for testing AI agents end to end. Test Cognigy agents with flow-aware system analysis, Playwright browser automation, YAML assurance contracts, deterministic and LLM evaluation, security testing and evidence-backed release governance." },
      { name: "keywords", content: "AI evaluation, AI testing, AI QA, AI QA automation, AI agent testing, AI agent evaluation, enterprise AI testing, LLM evaluation, LLM testing, conversational AI testing, Cognigy testing, Cognigy AI testing, AI test automation, end to end AI testing, agentic AI evaluation, AI security testing, AI release assurance, AI quality assurance, Playwright AI testing, YAML test automation" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Shyena — AI Evaluation, AI Testing & AI QA Automation" },
      { property: "og:description", content: "Understand AI systems, generate risk-prioritized tests, execute real agent journeys, evaluate behavior, test security and produce evidence-backed release decisions." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://shyena.eu/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Shyena — AI Evaluation, AI Testing & AI QA Automation" },
      { name: "twitter:description", content: "Enterprise AI agent testing, evaluation and QA automation with flow-aware assurance, Playwright execution and release evidence." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Shyena",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Shyena is an enterprise AI evaluation, AI testing and AI QA automation platform connecting system understanding, real conversations, deterministic and LLM evaluation, security assurance and evidence-backed release decisions.",
  url: "https://shyena.eu/",
  keywords: "AI evaluation, AI testing, AI QA automation, AI agent testing, Cognigy testing, LLM evaluation, conversational AI testing, Playwright testing",
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script defer data-domain="shyena.eu" src="https://plausible.io/js/script.js" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} />
      </head>
      <body>{children}<Scripts /></body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  useEffect(() => { const stop = startAnimatedFavicon(); return stop; }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1"><Outlet /></main>
        <SiteFooter />
        <VideoExperience />
      </div>
    </QueryClientProvider>
  );
}
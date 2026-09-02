import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts, useLocation } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import appCss from "../styles.css?url";
import siteThemeCss from "../site-theme.css?url";
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

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Shyena",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Shyena is an enterprise AI agent assurance platform that helps teams understand AI systems, test real behavior, defend security boundaries and produce evidence-backed release decisions.",
  url: "https://shyena.eu/",
  keywords: "AI agent assurance, AI evaluation, AI testing, AI QA automation, AI agent testing, Cognigy testing, LLM evaluation, conversational AI testing, AI security testing, AI release assurance",
};

const ENTERPRISE_BRIDGE: Record<string, { kicker: string; title: string; body: string }> = {
  "/": { kicker: "FROM AI EXPERIMENT TO PRODUCTION", title: "Make assurance part of the delivery lifecycle.", body: "Prepare the system, assure real behavior, govern release risk and operate with evidence. Shyena connects those activities around the agent your business actually runs." },
  "/nexus": { kicker: "BUSINESS OUTCOME", title: "Turn system understanding into meaningful coverage.", body: "NEXUS gives QA, engineering and product teams a structured view of the system so assurance starts with business journeys and actual orchestration paths." },
  "/vera": { kicker: "BUSINESS OUTCOME", title: "Turn conversation quality into release confidence.", body: "VERA moves evaluation beyond isolated answers by testing complete journeys, state, orchestration and outcomes against executable assurance expectations." },
  "/chakra": { kicker: "BUSINESS OUTCOME", title: "Turn security testing into release control.", body: "CHAKRA adds adversarial assurance to the same evidence chain as functional and semantic evaluation, so security findings can affect the release decision." },
  "/pricing": { kicker: "STARTING POINT", title: "Choose the assurance depth your program needs.", body: "Start with system understanding, add executable conversation assurance, extend into security testing, or use the complete evidence chain for continuous release governance." },
  "/security": { kicker: "ENTERPRISE TRUST", title: "Make the assurance review-ready.", body: "Enterprise adoption needs more than product capability. Security, data handling, access, evidence integrity and release governance should be clear enough for technical and risk stakeholders to review." },
  "/about": { kicker: "WHY SHYENA", title: "Built for teams accountable for AI outcomes.", body: "The platform is designed around a simple operating principle: evaluation should produce evidence that helps a responsible team decide whether an AI system is ready to release." },
  "/services": { kicker: "ENTERPRISE ADOPTION", title: "Accelerate adoption without changing the platform boundary.", body: "Use implementation, enablement and managed assurance services to establish the operating model, onboard real journeys and move from initial assurance to repeatable release practice." },
  "/contact": { kicker: "START WITH ONE REAL JOURNEY", title: "See what the evidence would look like for your agent.", body: "Bring a real customer journey, flow or assurance problem. The working session can map what to test, what evidence matters and where the result belongs in your release workflow." },
};

function EnterpriseBridge({ pathname }: { pathname: string }) {
  if (pathname.startsWith("/docs") || pathname.startsWith("/blog")) return null;
  const content = ENTERPRISE_BRIDGE[pathname] ?? { kicker: "ENTERPRISE AI ASSURANCE", title: "Understand the system. Test the behavior. Defend the release.", body: "Build one evidence chain across system understanding, executable journeys, evaluation, security assurance and release governance." };
  return (
    <section className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">{content.kicker}</div>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.03em] text-slate-950 sm:text-4xl">{content.title}</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{content.body}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {[["Prepare", "Understand the system and define what matters."], ["Assure", "Execute real journeys and evaluate behavior."], ["Govern", "Correlate findings, risk and release impact."], ["Operate", "Keep evidence connected to the delivery lifecycle."]].map(([title, text]) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5"><div className="text-sm font-semibold text-slate-950">{title}</div><div className="mt-1.5 text-sm leading-6 text-slate-600">{text}</div></div>
            ))}
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400"><span>Conversational AI</span><span>Agentic workflows</span><span>Customer journeys</span><span>Security assurance</span><span>Release governance</span></div>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shyena — Enterprise AI Agent Assurance Platform" },
      { name: "description", content: "Make AI systems safe to release with evidence. Shyena helps teams understand AI agents, test real behavior, defend security boundaries and govern release decisions." },
      { name: "keywords", content: "AI agent assurance, AI evaluation, AI testing, AI QA, AI QA automation, enterprise AI testing, LLM evaluation, conversational AI testing, Cognigy testing, agentic AI evaluation, AI security testing, AI release assurance" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Shyena — Enterprise AI Agent Assurance Platform" },
      { property: "og:description", content: "Understand the system. Test the behavior. Defend the release. Produce evidence-backed AI release decisions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: siteThemeCss },
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
  const location = useLocation();
  const isResourcePage = location.pathname.startsWith("/docs") || location.pathname.startsWith("/blog");
  useEffect(() => { const stop = startAnimatedFavicon(); return stop; }, []);
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className={`${isResourcePage ? "resource-surface " : ""}site-theme flex-1`}><Outlet /><EnterpriseBridge pathname={location.pathname} /></main>
        <SiteFooter />
        <VideoExperience />
      </div>
    </QueryClientProvider>
  );
}

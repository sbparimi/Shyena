import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  useLocation,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { type ReactNode, useEffect } from "react";
import appCss from "../styles.css?url";
import siteThemeCss from "../site-theme.css?url";
import warpThemeCss from "../warp-theme.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.shyena.eu/#organization",
      name: "Shyena",
      url: "https://www.shyena.eu/",
      logo: {
        "@type": "ImageObject",
        url: "https://www.shyena.eu/shyena-logo-lockup.svg?v=20260917",
      },
      description:
        "Shyena connects the Agentic SDLC from planning and coding agents through testing, security, release evidence and operational feedback in one governed engineering workflow.",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.shyena.eu/#website",
      url: "https://www.shyena.eu/",
      name: "Shyena",
      publisher: { "@id": "https://www.shyena.eu/#organization" },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": "https://www.shyena.eu/#software",
      name: "Shyena",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://www.shyena.eu/",
      description:
        "A governed Agentic SDLC platform connecting planning, coding agents, test engineering, security checks, release evidence and operational feedback.",
      keywords:
        "AI quality engineering, machine learning testing, model evaluation, data quality, generative AI testing, LLM evaluation, RAG evaluation, computer vision, document AI, AI governance, EU AI Act, ISO 42001, AI security testing, autonomous testing, release assurance",
      publisher: { "@id": "https://www.shyena.eu/#organization" },
    },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shyena | Agentic SDLC from Plan to Production" },
      {
        name: "description",
        content:
          "Shyena connects planning, coding agents, test engineering, security and release governance into one evidence-led Agentic SDLC workflow.",
      },
      {
        name: "keywords",
        content:
          "Agentic SDLC, autonomous software engineering, coding agents, test engineering, autonomous testing, AI security, release governance, engineering evidence, continuous verification",
      },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      {
        property: "og:title",
        content: "Shyena: The Agentic SDLC from Plan to Production",
      },
      {
        property: "og:description",
        content:
          "Connect coding agents, test engineering, security checks and release governance into one traceable Agentic SDLC workflow.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shyena" },
      { property: "og:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
      { property: "og:image:alt", content: "Shyena AI assurance platform" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Shyena | Agentic SDLC from Plan to Production",
      },
      {
        name: "twitter:description",
        content:
          "Plan, code, test, secure, release and learn in one governed Agentic SDLC—with evidence and release controls.",
      },
      { name: "twitter:image", content: "https://www.shyena.eu/shyena-logo-exact.webp" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: siteThemeCss },
      { rel: "stylesheet", href: warpThemeCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Azeret+Mono:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", href: "/shyena-mark.svg?v=20260917", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/shyena-mark.svg?v=20260917" },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}
function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const location = useLocation();
  const isResourcePage =
    location.pathname.startsWith("/docs") || location.pathname.startsWith("/blog");
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <a
          className="shyena-skip-link"
          href="#page-content"
          onClick={() => document.getElementById("page-content")?.focus()}
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main
          id="page-content"
          tabIndex={-1}
          className={`${isResourcePage ? "resource-surface " : ""}site-theme flex-1`}
        >
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, HeadContent, Scripts, createRootRouteWithContext } from "@tanstack/react-router";
import { type ReactNode } from "react";
import appCss from "../styles.css?url";
import siteThemeCss from "../site-theme.css?url";
import enterpriseTypographyCss from "../enterprise-typography.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/site-header";
import { SiteFooter } from "@/components/site/site-footer";

const ORGANIZATION_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Shyena",
  url: "https://www.shyena.eu/",
  description: "Independent testing and evaluation for Cognigy AI Agents.",
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Shyena | Independent testing and evaluation for Cognigy AI Agents" },
      { name: "description", content: "Independent testing and evaluation for Cognigy AI Agents." },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Shyena | Independent testing and evaluation for Cognigy AI Agents" },
      { property: "og:description", content: "Independent testing and evaluation for Cognigy AI Agents." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Shyena" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "stylesheet", href: siteThemeCss },
      { rel: "stylesheet", href: enterpriseTypographyCss },
      { rel: "icon", href: "/shyena-mark.svg", type: "image/svg+xml" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: () => <div className="flex min-h-screen items-center justify-center"><a href="/">Return to Shyena</a></div>,
  errorComponent: ({ error }) => {
    reportLovableError(error, { boundary: "root" });
    return <div className="flex min-h-screen items-center justify-center"><a href="/">Return to Shyena</a></div>;
  },
});

function RootShell({ children }: { children: ReactNode }) {
  return <html lang="en"><head><HeadContent /><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ORGANIZATION_SCHEMA) }} /></head><body>{children}<Scripts /></body></html>;
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return <QueryClientProvider client={queryClient}><div className="flex min-h-screen flex-col"><SiteHeader /><main id="page-content" className="site-theme flex-1"><Outlet /></main><SiteFooter /></div></QueryClientProvider>;
}

import { Outlet, createFileRoute } from "@tanstack/react-router";

const SITE = "https://www.shyena.eu";

export const Route = createFileRoute("/docs")({
  head: () => ({ meta: [
    { title: "Shyena Documentation | AI Agent Testing, Evaluation & Assurance" },
    { name: "description", content: "Documentation for Shyena AI agent testing, evaluation, system understanding, security assurance, integrations and release evidence." },
    { name: "robots", content: "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
    { property: "og:title", content: "Shyena Documentation | AI Agent Testing, Evaluation & Assurance" },
    { property: "og:description", content: "Build, test, evaluate, secure and release AI systems with Shyena documentation." },
    { property: "og:type", content: "website" }, { property: "og:site_name", content: "Shyena" },
    { property: "og:url", content: `${SITE}/docs` }, { property: "og:image", content: `${SITE}/shyena-logo-lockup.svg?v=20260917` },
    { name: "twitter:card", content: "summary_large_image" }, { name: "twitter:title", content: "Shyena Documentation | AI Agent Testing, Evaluation & Assurance" },
    { name: "twitter:description", content: "Documentation for AI agent testing, evaluation and release assurance." }, { name: "twitter:image", content: `${SITE}/shyena-logo-lockup.svg?v=20260917` },
  ]}),
  component: DocsLayout,
});

function DocsLayout() { return <div className="min-h-screen bg-white text-slate-950"><main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14"><Outlet /></main></div>; }

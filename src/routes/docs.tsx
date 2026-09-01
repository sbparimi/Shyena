import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/docs")({ component: DocsLayout });

function DocsLayout() {
  return <div className="min-h-screen bg-[#0a071d] text-[#faf8ff]"><main className="mx-auto w-full max-w-7xl px-5 py-10 sm:px-8 sm:py-14"><Outlet /></main></div>;
}

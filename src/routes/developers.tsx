import { createFileRoute, redirect } from "@tanstack/react-router";

// This page duplicated /platform content; keep old links and search results working.
export const Route = createFileRoute("/developers")({
  beforeLoad: () => {
    throw redirect({ to: "/docs/getting-started", statusCode: 301 });
  },
});

import { createFileRoute, redirect } from "@tanstack/react-router";

// This page duplicated /platform content; keep old links and search results working.
export const Route = createFileRoute("/datasets")({
  beforeLoad: () => {
    throw redirect({ to: "/platform", statusCode: 301 });
  },
});

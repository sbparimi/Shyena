import { createFileRoute, redirect } from "@tanstack/react-router";

// This page duplicated /platform content; keep old links and search results working.
export const Route = createFileRoute("/evaluation")({
  beforeLoad: () => {
    throw redirect({ to: "/docs/evaluation-model", statusCode: 301 });
  },
});

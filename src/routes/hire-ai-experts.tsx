import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/hire-ai-experts")({
  beforeLoad: () => {
    throw redirect({ to: "/experts" });
  },
});

import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-agent-evaluation")({
  beforeLoad: () => {
    throw redirect({ to: "/vera", statusCode: 301 });
  },
  component: () => null,
});

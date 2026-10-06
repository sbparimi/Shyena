import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-agent-security-testing")({
  beforeLoad: () => {
    throw redirect({ to: "/vera", statusCode: 301 });
  },
  component: () => null,
});

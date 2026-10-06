import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-agent-testing-platform")({
  beforeLoad: () => {
    throw redirect({ to: "/cognigy-testing", statusCode: 301 });
  },
  component: () => null,
});

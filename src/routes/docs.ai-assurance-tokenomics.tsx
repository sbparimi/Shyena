import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/ai-assurance-tokenomics")({
  beforeLoad: () => {
    throw redirect({ to: "/docs", statusCode: 301 });
  },
  component: () => null,
});

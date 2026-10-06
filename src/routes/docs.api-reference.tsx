import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/docs/api-reference")({
  beforeLoad: () => {
    throw redirect({ to: "/docs", statusCode: 301 });
  },
  component: () => null,
});

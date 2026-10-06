import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/metrics")({
  beforeLoad: () => {
    throw redirect({ to: "/vera", statusCode: 301 });
  },
  component: () => null,
});

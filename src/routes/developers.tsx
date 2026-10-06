import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/developers")({
  beforeLoad: () => {
    throw redirect({ to: "/docs", statusCode: 301 });
  },
  component: () => null,
});

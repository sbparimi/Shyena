import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/datasets")({
  beforeLoad: () => {
    throw redirect({ to: "/nexus", statusCode: 301 });
  },
  component: () => null,
});

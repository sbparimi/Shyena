import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/autonomous-testing")({
  beforeLoad: () => {
    throw redirect({ to: "/", statusCode: 301 });
  },
  component: () => null,
});

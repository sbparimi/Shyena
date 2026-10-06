import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-testing-framework")({
  beforeLoad: () => {
    throw redirect({ to: "/cognigy-testing", statusCode: 301 });
  },
  component: () => null,
});

import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/llm-evaluation")({
  beforeLoad: () => {
    throw redirect({ to: "/cognigy-testing", statusCode: 301 });
  },
  component: () => null,
});

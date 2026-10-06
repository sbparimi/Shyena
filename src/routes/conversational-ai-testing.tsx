import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/conversational-ai-testing")({
  beforeLoad: () => {
    throw redirect({ to: "/cognigy-testing", statusCode: 301 });
  },
  component: () => null,
});

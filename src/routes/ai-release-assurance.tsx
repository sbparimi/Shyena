import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/ai-release-assurance")({
  beforeLoad: () => {
    throw redirect({ to: "/cognigy-testing", statusCode: 301 });
  },
  component: () => null,
});

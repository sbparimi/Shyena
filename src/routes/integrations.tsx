import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/integrations")({
  beforeLoad: () => {
    throw redirect({ to: "/cognigy-testing", statusCode: 301 });
  },
  component: () => null,
});

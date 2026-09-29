import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/sample-report")({
  beforeLoad: () => { throw redirect({ to: "/demo" }); },
});

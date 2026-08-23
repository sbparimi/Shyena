import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/cis")({
  beforeLoad: () => {
    throw redirect({ to: "/nexus" });
  },
});

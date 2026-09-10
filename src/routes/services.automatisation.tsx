import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/automatisation")({
  beforeLoad: () => {
    throw redirect({ to: "/work", replace: true });
  },
  component: () => null,
});

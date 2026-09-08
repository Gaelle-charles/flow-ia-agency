import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/services/automatisation")({
  beforeLoad: () => {
    throw redirect({ to: "/methode", replace: true });
  },
  component: () => null,
});

import { createFileRoute, redirect } from "@tanstack/react-router";

// The mockups fold the former "cas d'usage" page into /realisations.
export const Route = createFileRoute("/cas-usage")({
  beforeLoad: () => {
    throw redirect({ to: "/realisations", replace: true });
  },
  component: () => null,
});

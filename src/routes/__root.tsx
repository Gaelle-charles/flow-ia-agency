import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import brand from "../content/brand.config.json";
import { getLocalizedContent } from "../content/localized-content";
import appCss from "../styles.css?url";
import { I18nProvider } from "../lib/i18n";
import { getInitialLocale } from "../lib/locale";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  const locale = Route.useLoaderData()?.locale ?? "fr";
  const copy =
    locale === "en"
      ? {
          error: "Error 404",
          title: "Off track.",
          body: "This page does not exist or has been moved.",
          home: "Back to home",
        }
      : {
          error: "Erreur 404",
          title: "Hors flux.",
          body: "Cette page n’existe pas ou a été déplacée.",
          home: "Revenir à l’accueil",
        };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-accent">{copy.error}</p>
        <h1 className="mt-4 text-5xl font-black tracking-tighter text-foreground">{copy.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{copy.body}</p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {copy.home}
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  const locale = Route.useLoaderData()?.locale ?? "fr";
  const copy =
    locale === "en"
      ? {
          title: "This page could not be loaded",
          body: "Something went wrong. You can try again or return home.",
          retry: "Try again",
          home: "Home",
        }
      : {
          title: "Cette page n’a pas pu se charger",
          body: "Une erreur est survenue. Vous pouvez réessayer ou revenir à l’accueil.",
          retry: "Réessayer",
          home: "Accueil",
        };
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">{copy.title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{copy.body}</p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {copy.retry}
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            {copy.home}
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  loader: async () => ({ locale: await getInitialLocale() }),
  head: ({ loaderData }) => {
    const { common, hero } = getLocalizedContent(loaderData?.locale ?? "fr");
    return {
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: `${brand.name} | ${common.brandCategory}` },
        {
          name: "description",
          content: hero.body,
        },
        { name: "robots", content: "index, follow" },
        { property: "og:title", content: `${brand.name} | ${common.brandCategory}` },
        {
          property: "og:description",
          content: hero.body,
        },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary" },
        { name: "twitter:title", content: `${brand.name} | ${common.brandCategory}` },
        { name: "twitter:description", content: hero.body },
        { name: "theme-color", content: "#0a0c0a" },
      ],
      links: [
        {
          rel: "stylesheet",
          href: appCss,
        },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Inter:wght@400;500;600;700;800&family=Manrope:wght@600;700;800&display=swap",
        },
      ],
    };
  },
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  const { locale } = Route.useLoaderData();

  return (
    <html lang={locale}>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const { locale } = Route.useLoaderData();

  return (
    <I18nProvider initialLocale={locale}>
      <QueryClientProvider client={queryClient}>
        {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
        <Outlet />
      </QueryClientProvider>
    </I18nProvider>
  );
}

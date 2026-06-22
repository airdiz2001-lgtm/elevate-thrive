import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/800.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";

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

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site/SiteNav";
import { SiteFooter } from "../components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <span className="mono text-[10px] uppercase tracking-widest text-ink/40">Error 404</span>
        <h1 className="mt-4 text-5xl font-extrabold uppercase tracking-tight">Page not found</h1>
        <p className="mt-3 text-sm text-ink/60">
          The page you're looking for is no longer in the registry.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="mono inline-flex bg-ink px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="max-w-md text-center">
        <span className="mono text-[10px] uppercase tracking-widest text-ink/40">System Error</span>
        <h1 className="mt-4 text-3xl font-extrabold uppercase tracking-tight">
          This page didn't load
        </h1>
        <p className="mt-3 text-sm text-ink/60">
          Something interrupted the request. Try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="mono bg-ink px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical"
          >
            Try again
          </button>
          <a
            href="/"
            className="mono border border-ink px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-ink hover:bg-bone"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Valence — Growth Engineering for Healthcare Operators" },
      {
        name: "description",
        content:
          "Valence is a growth engineering studio for healthcare and senior-care operators. Paid acquisition, clinical SEO, intake infrastructure, and AI command systems.",
      },
      { name: "author", content: "Valence" },
      { property: "og:title", content: "Valence — Growth Engineering for Healthcare Operators" },
      {
        property: "og:description",
        content:
          "Precision infrastructure and AI-driven intake systems for senior care and healthcare enterprises.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
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
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-paper text-ink">
        <SiteNav />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </QueryClientProvider>
  );
}

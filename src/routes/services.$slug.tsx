import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services/$slug")({
  head: ({ params }) => {
    const s = services.find((x) => x.slug === params?.slug);
    const title = s ? `${s.name} — OccupiaCare` : "Service — OccupiaCare";
    return {
      meta: [
        { title },
        { name: "description", content: s?.summary ?? "OccupiaCare service detail." },
        { property: "og:title", content: title },
        { property: "og:description", content: s?.summary ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const s = services.find((x) => x.slug === params.slug);
    if (!s) throw notFound();
    return s;
  },
  component: ServiceDetail,
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-3xl font-extrabold uppercase">Service not found</h1>
      <Link to="/services" className="mono mt-6 inline-block text-[11px] uppercase tracking-widest text-clinical">
        ← Back to services
      </Link>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="container-page py-32 text-center">
      <p className="text-ink/60">{error.message}</p>
      <button onClick={reset} className="mono mt-4 text-[11px] uppercase tracking-widest text-clinical">
        Retry
      </button>
    </div>
  ),
});

function ServiceDetail() {
  const s = Route.useLoaderData()!;
  const idx = services.findIndex((x) => x.slug === s.slug);
  const next = services[(idx + 1) % services.length];

  return (
    <>
      <section className="container-page pb-16 pt-16 md:pb-24 md:pt-24">
        <Link
          to="/services"
          className="mono mb-12 inline-block text-[11px] uppercase tracking-widest text-ink/50 hover:text-clinical"
        >
          ← All services
        </Link>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="mono text-[10px] uppercase tracking-widest text-clinical">
              {s.code}
            </span>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
              {s.name}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-xl text-ink/65">
              {s.tagline}
            </p>
            <p className="mt-6 max-w-2xl text-pretty text-ink/70">{s.summary}</p>
          </div>
        </div>
      </section>

      <section className="border-y border-rule bg-white py-20">
        <div className="container-page grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="mono mb-6 block text-[10px] uppercase tracking-widest text-ink/40">
              How it works
            </span>
            <ul className="space-y-6">
              {s.details.map((d: string, i: number) => (
                <li key={d} className="flex gap-6 border-t border-rule pt-6 first:border-t-0 first:pt-0">
                  <span className="mono shrink-0 text-[10px] uppercase tracking-widest text-clinical">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-ink/75">{d}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <span className="mono mb-6 block text-[10px] uppercase tracking-widest text-ink/40">
              Deliverables
            </span>
            <ul className="space-y-3">
              {s.deliverables.map((d: string) => (
                <li key={d} className="flex items-center gap-3 border-b border-rule pb-3 text-sm text-ink/75">
                  <span className="size-1.5 rounded-full bg-clinical" />
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container-page flex flex-col items-start justify-between gap-6 py-20 md:flex-row md:items-center">
        <div>
          <span className="mono mb-2 block text-[10px] uppercase tracking-widest text-ink/40">
            Next service
          </span>
          <Link
            to="/services/$slug"
            params={{ slug: next.slug }}
            className="text-3xl font-extrabold uppercase tracking-tight hover:text-clinical md:text-4xl"
          >
            {next.name} →
          </Link>
        </div>
        <Link
          to="/about"
          className="mono bg-ink px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical"
        >
          Request a Briefing
        </Link>
      </section>
    </>
  );
}

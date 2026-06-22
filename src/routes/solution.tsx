import { createFileRoute, Link } from "@tanstack/react-router";
import { services, processSteps } from "@/lib/site-data";

export const Route = createFileRoute("/solution")({
  head: () => ({
    meta: [
      { title: "The Protocol — Valence" },
      {
        name: "description",
        content:
          "How Valence integrates paid, organic, infrastructure, and AI agents into one census engine for healthcare operators.",
      },
      { property: "og:title", content: "The Protocol — Valence" },
      {
        property: "og:description",
        content: "One census engine. Four integrated systems.",
      },
    ],
  }),
  component: SolutionPage,
});

function SolutionPage() {
  return (
    <>
      <section className="bg-clinical py-20 text-paper md:py-28">
        <div className="container-page">
          <Link
            to="/"
            className="mono mb-12 inline-block text-[11px] uppercase tracking-widest text-paper/60 hover:text-paper"
          >
            ← Back to overview
          </Link>
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/55">
            (02) The Protocol · System Overview
          </span>
          <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
            One census engine. Four integrated systems.
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-xl text-paper/75">
            We install a unified acquisition stack — search authority, paid
            media, intake infrastructure, and AI agents — wired to a single
            source of truth on bed availability and acuity.
          </p>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          The Four Systems
        </span>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col justify-between gap-8 bg-paper p-8 transition-colors hover:bg-white md:p-12"
            >
              <div className="flex items-start justify-between">
                <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                  {s.code}
                </span>
                <span className="mono text-[10px] uppercase tracking-widest text-ink/40 transition-transform group-hover:translate-x-1">
                  Detail →
                </span>
              </div>
              <div>
                <h3 className="mb-3 text-2xl font-extrabold uppercase tracking-tight">
                  {s.name}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-ink/65">
                  {s.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-rule bg-bone py-20 md:py-28">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            How we deploy
          </span>
          <h2 className="mb-12 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            A four-stage rollout, same every quarter.
          </h2>
          <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-4">
            {processSteps.map((p) => (
              <div key={p.code} className="flex flex-col gap-4 bg-paper p-8">
                <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                  {p.code}
                </span>
                <h3 className="text-xl font-extrabold uppercase tracking-tight">
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink/60">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
          See the system in production.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-ink/60">
          Our case files document the architecture, the rollout, and the numbers — same shape every time.
        </p>
        <Link
          to="/case-studies"
          className="mono mt-8 inline-block bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical"
        >
          Browse case files →
        </Link>
      </section>
    </>
  );
}

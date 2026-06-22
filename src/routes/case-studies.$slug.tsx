import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { caseStudies, processSteps } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const cs = caseStudies.find((x) => x.slug === params?.slug);
    const title = cs ? `${cs.client} — Case File · Valence` : "Case Study — Valence";
    return {
      meta: [
        { title },
        { name: "description", content: cs?.summary ?? "Valence case study." },
        { property: "og:title", content: title },
        { property: "og:description", content: cs?.summary ?? "" },
        ...(cs?.hero ? [{ property: "og:image", content: cs.hero }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const cs = caseStudies.find((x) => x.slug === params.slug);
    if (!cs) throw notFound();
    return cs;
  },
  component: CaseDetail,
  notFoundComponent: () => (
    <div className="container-page py-32 text-center">
      <h1 className="text-3xl font-extrabold uppercase">Case file not found</h1>
      <Link to="/case-studies" className="mono mt-6 inline-block text-[11px] uppercase tracking-widest text-clinical">
        ← Back to case studies
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

function CaseDetail() {
  const cs = Route.useLoaderData();
  const idx = caseStudies.findIndex((x) => x.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <section className="container-page pb-12 pt-16 md:pt-24">
        <Link
          to="/case-studies"
          className="mono mb-12 inline-block text-[11px] uppercase tracking-widest text-ink/50 hover:text-clinical"
        >
          ← All case files
        </Link>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="mono text-[10px] uppercase tracking-widest text-clinical">
              {cs.code}
            </span>
            <div className="mono mt-3 text-[11px] uppercase tracking-widest text-ink/50">
              {cs.vertical}
            </div>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
              {cs.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-xl text-ink/65">
              {cs.summary}
            </p>
          </div>
        </div>
      </section>

      <section className="container-page">
        <img
          src={cs.hero}
          alt={cs.client}
          className="aspect-[16/9] w-full object-cover"
        />
      </section>

      <section className="bg-ink py-16 text-paper">
        <div className="container-page grid grid-cols-1 gap-10 md:grid-cols-3">
          {cs.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-5xl font-extrabold tracking-tighter md:text-6xl">
                {m.value}
              </div>
              <div className="mono mt-2 text-[10px] uppercase tracking-widest text-paper/50">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-3">
          <span className="mono text-[10px] uppercase tracking-widest text-ink/40">
            01 · Problem
          </span>
        </div>
        <p className="text-pretty text-lg text-ink/75 md:col-span-9">
          {cs.problem}
        </p>
      </section>

      <section className="border-y border-rule bg-white py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="mono text-[10px] uppercase tracking-widest text-ink/40">
              02 · Approach
            </span>
          </div>
          <ul className="space-y-6 md:col-span-9">
            {cs.approach.map((a, i) => (
              <li key={a} className="flex gap-6 border-t border-rule pt-6 first:border-t-0 first:pt-0">
                <span className="mono shrink-0 text-[10px] uppercase tracking-widest text-clinical">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="text-ink/75">{a}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-3">
          <span className="mono text-[10px] uppercase tracking-widest text-ink/40">
            03 · Outcome
          </span>
        </div>
        <p className="text-pretty text-lg text-ink/75 md:col-span-9">
          {cs.outcome}
        </p>
      </section>

      {/* Process recap */}
      <section className="border-t border-rule bg-bone py-20 md:py-28">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            How we work · Every engagement
          </span>
          <h2 className="mb-12 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            The same four stages, every time.
          </h2>
          <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-4">
            {processSteps.map((p) => (
              <div key={p.code} className="flex flex-col gap-3 bg-paper p-6">
                <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                  {p.code}
                </span>
                <h3 className="text-lg font-extrabold uppercase tracking-tight">
                  {p.name}
                </h3>
                <p className="text-sm leading-relaxed text-ink/60">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page flex flex-col items-start justify-between gap-6 py-20 md:flex-row md:items-center">
        <div>
          <span className="mono mb-2 block text-[10px] uppercase tracking-widest text-ink/40">
            Next case file
          </span>
          <Link
            to="/case-studies/$slug"
            params={{ slug: next.slug }}
            className="text-3xl font-extrabold uppercase tracking-tight hover:text-clinical md:text-4xl"
          >
            {next.client} →
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

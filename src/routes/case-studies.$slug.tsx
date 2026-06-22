import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { caseStudies, type CaseStudy } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies/$slug")({
  head: ({ params }) => {
    const cs = caseStudies.find((x) => x.slug === params?.slug);
    const title = cs ? `${cs.client} — Case File · OccupiaCare` : "Case Study — OccupiaCare";
    return {
      meta: [
        { title },
        { name: "description", content: cs?.summary ?? "OccupiaCare case study." },
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
      <button onClick={reset} className="mono mt-4 text-[11px] uppercase tracking-widest text-clinical">Retry</button>
    </div>
  ),
});

function TrendChart({ trend }: { trend: number[] }) {
  const min = Math.min(...trend) - 2;
  const max = Math.max(...trend) + 2;
  const range = max - min;
  const w = 800, h = 220, pad = 32;
  const step = (w - pad * 2) / (trend.length - 1);
  const points = trend.map((v, i) => [pad + i * step, h - pad - ((v - min) / range) * (h - pad * 2)] as const);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  const area = `${path} L ${points[points.length - 1][0]} ${h - pad} L ${pad} ${h - pad} Z`;

  return (
    <div className="border border-rule bg-paper p-6">
      <div className="mb-4 flex items-baseline justify-between">
        <span className="mono text-[10px] uppercase tracking-widest text-ink/40">
          Occupancy Trend · Month-over-Month
        </span>
        <span className="mono text-[10px] uppercase tracking-widest text-clinical">
          {trend[0]}% → {trend[trend.length - 1]}%
        </span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full">
        <defs>
          <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="text-clinical">
          <path d={area} fill="url(#g)" />
          <path d={path} stroke="currentColor" strokeWidth="2.5" fill="none" />
          {points.map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r="4" fill="white" stroke="currentColor" strokeWidth="2" />
          ))}
        </g>
        {trend.map((_, i) => (
          <text key={i} x={pad + i * step} y={h - 8} textAnchor="middle" className="fill-current text-[10px] text-ink/40" style={{ fontFamily: "var(--font-mono)" }}>
            M{i + 1}
          </text>
        ))}
      </svg>
    </div>
  );
}

function CaseDetail() {
  const cs: CaseStudy = Route.useLoaderData();
  const idx = caseStudies.findIndex((x) => x.slug === cs.slug);
  const next = caseStudies[(idx + 1) % caseStudies.length];

  return (
    <>
      <section className="container-page pb-12 pt-16 md:pt-24">
        <Link to="/case-studies" className="mono mb-12 inline-block text-[11px] uppercase tracking-widest text-ink/50 hover:text-clinical">
          ← All case files
        </Link>
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="mono text-[10px] uppercase tracking-widest text-clinical">{cs.code}</span>
            <div className="mono mt-3 text-[11px] uppercase tracking-widest text-ink/50">
              {cs.vertical} · {cs.region}
            </div>
          </div>
          <div className="md:col-span-9">
            <h1 className="text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
              {cs.headline}
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-xl text-ink/65">{cs.summary}</p>
          </div>
        </div>
      </section>

      <section className="container-page">
        <img src={cs.hero} alt={cs.client} className="aspect-[16/9] w-full object-cover" />
      </section>

      {/* Hero metrics */}
      <section className="bg-ink py-14 text-paper">
        <div className="container-page grid grid-cols-2 gap-10 md:grid-cols-4">
          {cs.metrics.map((m) => (
            <div key={m.label}>
              <div className="text-3xl font-extrabold tracking-tighter md:text-5xl">{m.value}</div>
              <div className="mono mt-2 text-[10px] uppercase tracking-widest text-paper/50">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem */}
      <section className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-3">
          <span className="mono text-[10px] uppercase tracking-widest text-ink/40">01 · Problem</span>
        </div>
        <ul className="space-y-3 md:col-span-9">
          {cs.problem.map((p) => (
            <li key={p} className="flex items-start gap-3 text-ink/75">
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clinical" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Strategy */}
      <section className="border-y border-rule bg-white py-20 md:py-24">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="mono text-[10px] uppercase tracking-widest text-ink/40">02 · Strategy</span>
          </div>
          <div className="md:col-span-9">
            <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
              {cs.strategy.map((b) => (
                <div key={b.title} className="bg-paper p-6">
                  <h3 className="mb-4 text-base font-extrabold uppercase tracking-tight text-ink">{b.title}</h3>
                  <ul className="space-y-2 text-sm text-ink/65">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-center gap-2">
                        <span className="size-1.5 rounded-full bg-clinical" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results — visual heavy */}
      <section className="container-page py-20 md:py-24">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">03 · Results</span>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Measured monthly. Reviewed live.
        </h2>

        <div className="grid gap-8 md:grid-cols-12">
          <div className="md:col-span-8">
            <TrendChart trend={cs.trend} />
          </div>
          <ul className="space-y-3 md:col-span-4">
            {cs.results.map((r) => (
              <li key={r} className="flex items-start gap-3 border-b border-rule pb-3 text-sm text-ink/75">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-clinical" />
                {r}
              </li>
            ))}
          </ul>
        </div>

        {/* Funnel diagram */}
        <div className="mt-10 grid grid-cols-4 gap-2">
          {["Ads", "Inquiry", "Tour", "Move-in"].map((s, i) => (
            <div key={s} className="border border-rule bg-paper p-4 text-center">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="mt-1 text-sm font-extrabold uppercase tracking-tight">{s}</div>
            </div>
          ))}
        </div>

        {/* Before/After */}
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          <BeforeAfter label="Occupancy" before={cs.micro.occBefore} after={cs.micro.occAfter} positive />
          <BeforeAfter label="Cost / Inquiry" before="Baseline" after={cs.micro.cprDelta} />
        </div>
      </section>

      {/* Revenue impact */}
      <section className="bg-clinical py-20 text-paper md:py-24">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/55">Revenue Impact</span>
          <p className="text-balance text-4xl font-extrabold uppercase leading-tight tracking-tight md:text-6xl">
            {cs.revenueImpact}
          </p>
        </div>
      </section>

      {/* Testimonial */}
      <section className="container-page py-20 md:py-24">
        <figure className="border border-rule bg-paper p-8 md:p-12">
          <span className="text-5xl text-clinical">“</span>
          <blockquote className="mt-2 text-balance text-2xl font-bold leading-snug tracking-tight text-ink/85 md:text-3xl">
            {cs.testimonial.quote}
          </blockquote>
          {cs.testimonial.attribution && (
            <figcaption className="mono mt-6 text-[10px] uppercase tracking-widest text-ink/45">
              — {cs.testimonial.attribution}
            </figcaption>
          )}
        </figure>
      </section>

      {/* Next */}
      <section className="container-page flex flex-col items-start justify-between gap-6 pb-20 md:flex-row md:items-center">
        <div>
          <span className="mono mb-2 block text-[10px] uppercase tracking-widest text-ink/40">Next case file</span>
          <Link to="/case-studies/$slug" params={{ slug: next.slug }} className="text-3xl font-extrabold uppercase tracking-tight hover:text-clinical md:text-4xl">
            {next.client} →
          </Link>
        </div>
        <Link to="/book" className="mono bg-ink px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical">
          Book a consultation
        </Link>
      </section>
    </>
  );
}

function BeforeAfter({ label, before, after, positive }: { label: string; before: string; after: string; positive?: boolean }) {
  return (
    <div className="border border-rule bg-paper p-6">
      <div className="mono mb-3 text-[10px] uppercase tracking-widest text-ink/40">{label}</div>
      <div className="flex items-baseline gap-3">
        <span className="text-2xl text-ink/40 line-through">{before}</span>
        <span className="mono text-[10px] text-ink/30">→</span>
        <span className={`text-3xl font-extrabold tracking-tight ${positive ? "text-clinical" : "text-ink"}`}>{after}</span>
      </div>
    </div>
  );
}

// re-export for type usage if needed
export type { CaseStudy };

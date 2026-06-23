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
  const min = Math.min(...trend) - 4;
  const max = Math.max(...trend) + 4;
  const range = max - min;
  const w = 800, h = 260, pad = 40;
  const step = (w - pad * 2) / (trend.length - 1);
  const points = trend.map((v, i) => [pad + i * step, h - pad - ((v - min) / range) * (h - pad * 2)] as const);
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p[0]} ${p[1]}`).join(" ");
  const area = `${path} L ${points[points.length - 1][0]} ${h - pad} L ${pad} ${h - pad} Z`;
  const yTicks = 4;
  const tickVals = Array.from({ length: yTicks + 1 }, (_, i) => min + (range * i) / yTicks);

  return (
    <div className="border border-rule bg-paper p-6 md:p-8">
      <div className="mb-4 flex items-baseline justify-between">
        <div>
          <div className="mono text-[10px] uppercase tracking-widest text-ink/40">
            Occupancy Trend · Month-over-Month
          </div>
          <div className="mt-1 text-xs text-ink/55">Illustrative occupancy trend across the engagement.</div>
        </div>
        <span className="mono text-[10px] uppercase tracking-widest text-clinical">
          {trend[0]}% → {trend[trend.length - 1]}%
        </span>
      </div>
      <svg viewBox={`0 0 ${w} ${h}`} className="h-auto w-full">
        <defs>
          <linearGradient id="csGrad" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <g className="text-ink/15">
          {tickVals.map((tv, i) => {
            const y = h - pad - ((tv - min) / range) * (h - pad * 2);
            return (
              <g key={i}>
                <line x1={pad} x2={w - pad} y1={y} y2={y} stroke="currentColor" strokeWidth="0.6" />
                <text x={pad - 8} y={y + 3} textAnchor="end" className="fill-current text-[10px]" style={{ fontFamily: "var(--font-mono)" }}>
                  {Math.round(tv)}%
                </text>
              </g>
            );
          })}
        </g>
        <g className="text-clinical">
          <path d={area} fill="url(#csGrad)" />
          <path d={path} stroke="currentColor" strokeWidth="2.5" fill="none" />
          {points.map((p, i) => (
            <g key={i}>
              <circle cx={p[0]} cy={p[1]} r="4.5" fill="white" stroke="currentColor" strokeWidth="2" />
              <text x={p[0]} y={p[1] - 12} textAnchor="middle" className="fill-current text-[10px] font-bold" style={{ fontFamily: "var(--font-mono)" }}>
                {trend[i]}%
              </text>
            </g>
          ))}
        </g>
        {trend.map((_, i) => (
          <text key={i} x={pad + i * step} y={h - 12} textAnchor="middle" className="fill-current text-[10px] text-ink/40" style={{ fontFamily: "var(--font-mono)" }}>
            M{i + 1}
          </text>
        ))}
      </svg>
    </div>
  );
}

function StatTile({ value, label, dark }: { value: string; label: string; dark?: boolean }) {
  return (
    <div className={`flex flex-col gap-2 border ${dark ? "border-paper/15 bg-ink text-paper" : "border-rule bg-paper text-ink"} p-6`}>
      <div className={`text-3xl font-extrabold tracking-tighter md:text-4xl ${dark ? "text-clinical" : "text-clinical"}`}>{value}</div>
      <div className={`mono text-[10px] uppercase tracking-widest ${dark ? "text-paper/55" : "text-ink/45"}`}>{label}</div>
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
            {cs.beds && (
              <div className="mono mt-1 text-[11px] uppercase tracking-widest text-ink/40">{cs.beds}</div>
            )}
          </div>
          <div className="md:col-span-9">
            <h1 className="text-balance text-4xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-6xl">
              {cs.headline}
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-xl text-ink/65">{cs.summary}</p>
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
              <div className="text-3xl font-extrabold tracking-tighter text-clinical md:text-5xl">{m.value}</div>
              <div className="mono mt-2 text-[10px] uppercase tracking-widest text-paper/55">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Profile */}
      <section className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-24">
        <div className="md:col-span-3">
          <span className="mono text-[10px] uppercase tracking-widest text-ink/40">01 · Client Profile</span>
        </div>
        <div className="md:col-span-9 space-y-5 text-lg text-ink/75">
          {cs.profile.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </section>

      {/* Problem */}
      <section className="border-y border-rule bg-bone py-20 md:py-24">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="mono text-[10px] uppercase tracking-widest text-ink/40">02 · The Challenge</span>
            <h2 className="mt-4 text-balance text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
              Growth obstacles.
            </h2>
          </div>
          <div className="md:col-span-9">
            <ul className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
              {cs.problem.map((p, i) => (
                <li key={p} className="flex items-start gap-4 bg-paper p-5 text-ink/80">
                  <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            {cs.primaryGoal && (
              <div className="mt-8 border-l-2 border-clinical bg-paper p-6">
                <div className="mono mb-2 text-[10px] uppercase tracking-widest text-clinical">Primary Goal</div>
                <p className="text-xl font-bold text-ink/85">{cs.primaryGoal}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Occupancy chart — front and center */}
      <section className="container-page py-20 md:py-24">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">03 · Occupancy Before and After</span>
        <h2 className="mb-2 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Occupancy growth after implementation.
        </h2>
        <p className="mb-10 text-ink/55">{cs.beds ? `${cs.beds} · ` : ""}Illustrative trend over the engagement.</p>
        <TrendChart trend={cs.trend} />
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
          <StatTile value={cs.micro.occBefore + " → " + cs.micro.occAfter} label="Occupancy" />
          <StatTile value={cs.micro.inquiryDelta} label="Inquiries" />
          <StatTile value={cs.micro.cprDelta} label="Cost / Inquiry" />
          <StatTile value={cs.revenueImpact.split(" ")[0]} label="Revenue Impact" />
        </div>
      </section>

      {/* Strategy */}
      <section className="border-y border-rule bg-white py-20 md:py-24">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="mono text-[10px] uppercase tracking-widest text-ink/40">04 · Strategy</span>
            <h2 className="mt-4 text-balance text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
              Full resident acquisition ecosystem.
            </h2>
          </div>
          <div className="md:col-span-9">
            <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
              {cs.strategy.map((b, i) => (
                <div key={b.title} className="bg-paper p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-base font-extrabold uppercase tracking-tight text-ink">{b.title}</h3>
                    <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                      P/{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <ul className="space-y-2 text-sm text-ink/70">
                    {b.items.map((it) => (
                      <li key={it} className="flex items-start gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-clinical" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Results */}
      <section className="container-page py-20 md:py-24">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">05 · Results</span>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Measured monthly. Reviewed live.
        </h2>

        {cs.resultsDetail && (
          <div className="mb-10 grid grid-cols-2 gap-px overflow-hidden border border-rule bg-rule md:grid-cols-5">
            {cs.resultsDetail.map((r) => (
              <div key={r.label} className="bg-paper p-6">
                <div className="text-3xl font-extrabold tracking-tighter text-clinical md:text-4xl">{r.value}</div>
                <div className="mono mt-2 text-[10px] uppercase tracking-widest text-ink/45">{r.label}</div>
              </div>
            ))}
          </div>
        )}

        <ul className="grid gap-3 md:grid-cols-2">
          {cs.results.map((r) => (
            <li key={r} className="flex items-center gap-3 border border-rule bg-paper p-4 text-sm text-ink/80">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">✓</span>
              {r}
            </li>
          ))}
        </ul>

        {/* Funnel */}
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
      </section>

      {/* Business Impact */}
      {cs.businessImpact && (
        <section className="bg-clinical py-20 text-paper md:py-24">
          <div className="container-page">
            <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/55">06 · Business Impact</span>
            <p className="max-w-4xl text-balance text-2xl font-bold leading-snug md:text-3xl">
              {cs.businessImpact}
            </p>
            <div className="mt-10 inline-block border border-paper/20 bg-paper/10 px-8 py-6">
              <div className="mono text-[10px] uppercase tracking-widest text-paper/55">Revenue Impact</div>
              <div className="mt-2 text-4xl font-extrabold tracking-tighter md:text-6xl">
                {cs.revenueImpact}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial */}
      <section className="container-page py-20 md:py-24">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">07 · Client Testimonial</span>
        <figure className="border border-rule bg-paper p-8 md:p-12">
          <span className="text-5xl text-clinical">"</span>
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

export type { CaseStudy };

import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "The Honest Truth — OccupiaCare" },
      {
        name: "description",
        content:
          "Why most healthcare and senior-care marketing programs leak occupancy — and what the industry reality looks like.",
      },
      { property: "og:title", content: "The Honest Truth — OccupiaCare" },
      {
        property: "og:description",
        content: "The industry reality behind fragmented intake and stalled growth.",
      },
    ],
  }),
  component: ProblemPage,
});

const realities = [
  {
    code: "01",
    title: "Intake is the bottleneck, not demand.",
    body: "Most operators have more inquiries than their intake team can convert. The leak isn't at the top of the funnel — it's between channels.",
  },
  {
    code: "02",
    title: "After-hours capture is a structural blind spot.",
    body: "Two-thirds of family inquiries arrive after business hours. A voicemail and a callback the next morning is a lost admission.",
  },
  {
    code: "03",
    title: "Generic SEO doesn't speak the clinical journey.",
    body: "Families and discharge planners search in clinical terms. Keyword-led content built for ad rank doesn't surface for the queries that matter.",
  },
  {
    code: "04",
    title: "Reporting reconciled in spreadsheets is reporting you can't act on.",
    body: "If your dashboards are rebuilt every Friday, you're optimizing against last week's reality, not this week's pipeline.",
  },
];

function ProblemPage() {
  return (
    <>
      <section className="container-page pb-16 pt-20 md:pb-24 md:pt-28">
        <Link
          to="/"
          className="mono mb-12 inline-block text-[11px] uppercase tracking-widest text-ink/50 hover:text-clinical"
        >
          ← Back to overview
        </Link>
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (01) The Honest Truth · Industry Reality
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          The industry runs on fragmented intake.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-xl text-ink/65">
          We've audited hundreds of funnels across senior living, behavioral
          health, and post-acute care. The pattern is consistent enough that
          it's worth writing down.
        </p>
      </section>

      <section className="border-y border-rule bg-white">
        <ul className="container-page divide-y divide-rule">
          {realities.map((r) => (
            <li key={r.code} className="grid gap-8 py-12 md:grid-cols-12 md:py-16">
              <div className="md:col-span-2">
                <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                  Reality {r.code}
                </span>
              </div>
              <div className="md:col-span-10">
                <h2 className="mb-4 text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
                  {r.title}
                </h2>
                <p className="max-w-2xl text-pretty text-ink/70">{r.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-page py-24 text-center md:py-32">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-clinical">
          The other half of the story
        </span>
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
          The solution is integration, not more channels.
        </h2>
        <Link
          to="/solution"
          className="mono mt-8 inline-block bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical"
        >
          See the system overview →
        </Link>
      </section>
    </>
  );
}

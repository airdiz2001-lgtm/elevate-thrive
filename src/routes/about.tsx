import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OccupiaCare" },
      {
        name: "description",
        content: "The OccupiaCare story, operating principles, and team.",
      },
      { property: "og:title", content: "About — OccupiaCare" },
      {
        property: "og:description",
        content: "A growth engineering studio built by operators for operators.",
      },
    ],
  }),
  component: AboutPage,
});

const team = [
  { name: "Elena Marchetti", role: "Founding Partner · Strategy", initials: "EM" },
  { name: "David Okafor", role: "Partner · Acquisition", initials: "DO" },
  { name: "Priya Raman", role: "Director · Intake Systems", initials: "PR" },
  { name: "Marcus Reed", role: "Director · AI Operations", initials: "MR" },
  { name: "Sarah Chen", role: "Editorial Lead · Clinical SEO", initials: "SC" },
  { name: "James Whitaker", role: "Head of Engineering", initials: "JW" },
];

const principles = [
  {
    title: "Plumbing before promises",
    body: "We don't run media into broken funnels. Architecture comes first, always.",
  },
  {
    title: "Clinicians review the content",
    body: "Every editorial piece passes a clinical review. No exceptions, no shortcuts.",
  },
  {
    title: "Reports our clients can defend",
    body: "If a number can't be traced to a source of truth, it doesn't go on the dashboard.",
  },
  {
    title: "Limited partnerships per quarter",
    body: "We cap new engagements to protect the depth our existing partners signed up for.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="container-page pb-20 pt-20 md:pb-28 md:pt-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          About · Story · Team
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Built by operators. For operators.
        </h1>
        <p className="mt-8 max-w-3xl text-pretty text-xl text-ink/65">
          OccupiaCare was founded after a decade of running marketing for
          multi-state senior-care and behavioral health groups. We started the
          studio to do the work the way we always wished our agencies had —
          slower at the start, sharper at the end, and accountable to census,
          not impressions.
        </p>
      </section>

      <section className="border-y border-rule bg-white py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-3">
            <span className="mono text-[10px] uppercase tracking-widest text-ink/40">
              Our Story
            </span>
          </div>
          <div className="md:col-span-9 space-y-6 text-lg text-ink/75">
            <p>
              The studio came out of a frustration that's familiar to most
              operators: marketing reports that read like art history, intake
              teams that operated on a separate planet, and AI vendors selling
              the same demo to every facility in the region.
            </p>
            <p>
              We started small in 2019 with two senior living groups and a
              promise — no retainers without instrumentation, no media without a
              source of truth on bed availability, no AI without a human
              reviewing the transcripts.
            </p>
            <p>
              Five years in, we operate the marketing function for some of the
              most clinically rigorous groups in the country. The promise is
              the same.
            </p>
          </div>
        </div>
      </section>

      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          Operating Principles
        </span>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          How we work, in four sentences.
        </h2>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {principles.map((p, i) => (
            <div key={p.title} className="flex flex-col gap-3 bg-paper p-8 md:p-10">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                P/{String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-extrabold uppercase tracking-tight">
                {p.title}
              </h3>
              <p className="text-ink/65">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-rule bg-bone py-20 md:py-28">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            Team Registry
          </span>
          <h2 className="mb-12 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            A small team. Senior on every account.
          </h2>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
            {team.map((m) => (
              <div key={m.name} className="flex flex-col gap-4 bg-paper p-6 md:p-8">
                <div className="flex size-12 items-center justify-center bg-ink text-paper">
                  <span className="mono text-xs font-bold tracking-widest">
                    {m.initials}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-extrabold uppercase tracking-tight">
                    {m.name}
                  </h3>
                  <p className="mono mt-1 text-[10px] uppercase tracking-widest text-ink/50">
                    {m.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
          Want us to look at your funnel?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-ink/60">
          Send a note. We'll respond within two business days with a short
          questionnaire before any call.
        </p>
        <a
          href="mailto:inquiry@valence.health"
          className="mono mt-8 inline-block bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical"
        >
          inquiry@valence.health
        </a>
      </section>
    </>
  );
}

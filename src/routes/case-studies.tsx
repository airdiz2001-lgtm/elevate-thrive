import { createFileRoute, Link } from "@tanstack/react-router";
import { caseStudies } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — Valence" },
      {
        name: "description",
        content:
          "Case files from healthcare and senior-care operators we've worked with.",
      },
      { property: "og:title", content: "Case Studies — Valence" },
      {
        property: "og:description",
        content: "Outcomes, methods, and measurable impact across operator partners.",
      },
    ],
  }),
  component: CaseStudiesIndex,
});

function CaseStudiesIndex() {
  return (
    <>
      <section className="container-page pb-16 pt-20 md:pb-24 md:pt-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          Case Files
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Outcomes worth documenting.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/65">
          A selection of engagements, written up the same way we report
          internally — with the problem first, the architecture second, and the
          numbers at the end.
        </p>
      </section>

      <section className="container-page space-y-16 pb-24 md:space-y-24 md:pb-32">
        {caseStudies.map((cs, i) => (
          <Link
            key={cs.slug}
            to="/case-studies/$slug"
            params={{ slug: cs.slug }}
            className="group grid items-center gap-10 border-t border-rule pt-16 md:grid-cols-12"
          >
            <div className={`md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <div className="relative overflow-hidden">
                <img
                  src={cs.hero}
                  alt={cs.client}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
                />
                <span className="mono absolute left-4 top-4 bg-paper px-3 py-1 text-[10px] uppercase tracking-widest text-ink">
                  {cs.code}
                </span>
              </div>
            </div>
            <div className="md:col-span-5">
              <span className="mono mb-3 block text-[10px] uppercase tracking-widest text-clinical">
                {cs.vertical}
              </span>
              <h2 className="mb-4 text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
                {cs.headline}
              </h2>
              <p className="mb-6 text-ink/60">{cs.summary}</p>
              <div className="flex flex-wrap gap-6">
                {cs.metrics.map((m) => (
                  <div key={m.label}>
                    <div className="text-2xl font-extrabold text-clinical">
                      {m.value}
                    </div>
                    <div className="mono text-[10px] uppercase tracking-widest text-ink/40">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
              <span className="mono mt-8 inline-block text-[11px] uppercase tracking-widest text-ink/60 transition-transform group-hover:translate-x-1">
                Read case file →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { caseStudies } from "@/lib/site-data";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies — OccupiaCare" },
      { name: "description", content: "Real occupancy growth across senior living, memory care, assisted living, and rehabilitation centers." },
      { property: "og:title", content: "Case Studies — OccupiaCare" },
      { property: "og:description", content: "Documented outcomes across operator partners." },
    ],
  }),
  component: CaseStudiesIndex,
});

const FILTERS = ["All", "Assisted Living", "Memory Care", "Rehabilitation"];

function CaseStudiesIndex() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? caseStudies : caseStudies.filter((c) => c.vertical === filter);

  return (
    <>
      <section className="container-page pb-12 pt-20 md:pt-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          Case Files · Operator Library
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          How senior care communities scale occupancy.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/65">
          Documented outcomes — problem, strategy, charts, revenue impact —
          across assisted living, memory care, rehab, and skilled nursing.
        </p>
      </section>

      <section className="container-page pb-8">
        <div className="flex flex-wrap gap-2 border-b border-rule pb-6">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`mono border px-4 py-2 text-[11px] uppercase tracking-widest transition-colors ${
                filter === f ? "border-ink bg-ink text-paper" : "border-rule text-ink/65 hover:border-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </section>

      <section className="container-page space-y-16 pb-24 md:space-y-20 md:pb-32">
        {filtered.map((cs, i) => (
          <Link
            key={cs.slug}
            to="/case-studies/$slug"
            params={{ slug: cs.slug }}
            className="group grid items-center gap-10 border-t border-rule pt-12 md:grid-cols-12"
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
                  {cs.code} · {cs.region}
                </span>
              </div>
            </div>
            <div className="md:col-span-5">
              <span className="mono mb-3 block text-[10px] uppercase tracking-widest text-clinical">
                {cs.vertical} · {cs.region}
              </span>
              <h2 className="mb-4 text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
                {cs.headline}
              </h2>
              <p className="mb-6 text-ink/60">{cs.summary}</p>
              <div className="grid grid-cols-2 gap-4">
                {cs.metrics.slice(0, 4).map((m) => (
                  <div key={m.label} className="border-l-2 border-clinical pl-3">
                    <div className="text-xl font-extrabold text-ink">{m.value}</div>
                    <div className="mono text-[10px] uppercase tracking-widest text-ink/45">{m.label}</div>
                  </div>
                ))}
              </div>
              <span className="mono mt-8 inline-block text-[11px] uppercase tracking-widest text-ink/60 transition-transform group-hover:translate-x-1">
                Read full case file →
              </span>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

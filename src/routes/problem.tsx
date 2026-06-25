import { createFileRoute, Link } from "@tanstack/react-router";
import { coreGrowthBarriers, industryRealityGroups } from "@/lib/site-data";
import { BrandIcon } from "@/components/site/BrandIcon";

export const Route = createFileRoute("/problem")({
  head: () => ({
    meta: [
      { title: "The Honest Truth — OccupiaCare" },
      { name: "description", content: "Why most senior care facilities fail to grow occupancy — the full breakdown of growth barriers and industry realities." },
      { property: "og:title", content: "The Honest Truth — OccupiaCare" },
      { property: "og:description", content: "Core growth barriers and the 20 problems crippling senior care operators." },
    ],
  }),
  component: ProblemPage,
});

function ProblemPage() {
  return (
    <>
      <section className="container-page pb-16 pt-20 md:pb-24 md:pt-28">
        <Link to="/" className="mono mb-12 inline-block text-[11px] uppercase tracking-widest text-ink/50 hover:text-clinical">
          ← Back to overview
        </Link>
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (01) The Honest Truth
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Why most senior care facilities fail to grow occupancy.
        </h1>
        <p className="mt-8 max-w-3xl text-pretty text-xl text-ink/65">
          It's rarely the quality of care that limits growth. In most cases, the
          real problem is the infrastructure behind the inquiry process.
        </p>
      </section>

      {/* Core growth barriers */}
      <section className="border-y border-rule bg-white py-20 md:py-28">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            Core Growth Barriers
          </span>
          <h2 className="mb-12 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            Eight broken systems behind every empty bed.
          </h2>
          <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2 lg:grid-cols-4">
            {coreGrowthBarriers.map((b, i) => (
              <article key={b.title} className="flex flex-col gap-4 bg-paper p-6">
                <div className="flex items-center justify-between">
                  <div className="flex size-11 items-center justify-center rounded-md bg-alert-soft text-alert">
                    <BrandIcon name={b.icon} className="size-6" />
                  </div>
                  <span className="mono text-[10px] uppercase tracking-widest text-alert">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-lg font-extrabold uppercase tracking-tight">{b.title}</h3>
                <ul className="space-y-1.5 text-sm text-ink/65">
                  {b.points.map((p) => <li key={p}>— {p}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Key reality callout */}
      <section className="bg-clinical py-20 text-paper md:py-24">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/55">
            Key Reality
          </span>
          <p className="max-w-3xl text-balance text-2xl font-extrabold uppercase leading-tight tracking-tight md:text-4xl">
            Families choose facilities they trust. Your online presence, response
            speed, and admissions infrastructure directly influence occupancy
            and move-ins.
          </p>
        </div>
      </section>

      {/* Industry reality — 20 problems */}
      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          The Industry Reality
        </span>
        <h2 className="mb-4 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          The 5 problems quietly crippling senior care operators.
        </h2>
        <p className="mb-12 max-w-2xl text-pretty text-ink/65">
          Every empty bed, missed inquiry, and inefficient workflow has a
          measurable financial cost. These challenges reduce occupancy, strain
          staff, and limit growth.
        </p>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
          {industryRealityGroups.map((g) => (
            <article key={g.group} className="flex flex-col gap-4 bg-paper p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-9 items-center justify-center rounded bg-clinical/8 text-clinical">
                  <BrandIcon name={g.icon} className="size-5" />
                </div>
                <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                  {g.group}
                </span>
              </div>
              <ul className="space-y-2 text-sm text-ink/70">
                {g.items.map((it) => (
                  <li key={it} className="flex items-center gap-2">
                    <span className="size-1.5 rounded-full bg-clinical" />
                    {it}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-24 text-center md:pb-32">
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
          The solution is integration, not more channels.
        </h2>
        <Link to="/solution" className="mono mt-8 inline-block bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical">
          See the system overview →
        </Link>
      </section>
    </>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { resources } from "@/lib/site-data";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — OccupiaCare" },
      { name: "description", content: "Playbooks, whitepapers, and operator references for senior care growth." },
      { property: "og:title", content: "Resources — OccupiaCare" },
      { property: "og:description", content: "Operator playbooks and references." },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <>
      <section className="container-page pb-16 pt-20 md:pt-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          Resources · Operator Library
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Playbooks for occupancy-led operators.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/65">
          Field-tested guides, whitepapers, and references — drawn from work
          across hundreds of senior care facilities.
        </p>
      </section>

      <section className="container-page pb-28">
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2 lg:grid-cols-3">
          {resources.map((r, i) => (
            <article key={r.title} className="flex flex-col gap-4 bg-paper p-8">
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                  R/{String(i + 1).padStart(2, "0")}
                </span>
                <span className="mono text-[10px] uppercase tracking-widest text-ink/40">
                  {r.type}
                </span>
              </div>
              <h2 className="text-xl font-extrabold uppercase tracking-tight">{r.title}</h2>
              <p className="text-sm text-ink/60">{r.detail}</p>
              <Link
                to="/book"
                className="mono mt-auto inline-flex items-center gap-2 text-[11px] uppercase tracking-widest text-ink/70 hover:text-clinical"
              >
                Request access →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

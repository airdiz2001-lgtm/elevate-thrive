import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandIcon } from "@/components/site/BrandIcon";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — OccupiaCare" },
      { name: "description", content: "Free occupancy audit checklist and senior care growth playbook." },
      { property: "og:title", content: "Resources — OccupiaCare" },
      { property: "og:description", content: "Audit checklist and playbook for senior care operators." },
    ],
  }),
  component: ResourcesPage,
});

const RESOURCES = [
  {
    code: "R/01",
    icon: "clipboard" as const,
    title: "Occupancy Audit Checklist",
    detail:
      "47 checks across website, paid media, intake, CRM, and reputation systems — the same audit we run before every engagement.",
    cta: "Get the checklist",
  },
  {
    code: "R/02",
    icon: "doc" as const,
    title: "Senior Care Growth Playbook",
    detail:
      "A 32-page operator playbook on rebuilding admissions infrastructure, with the exact funnel that has driven +18–24% occupancy across client facilities.",
    cta: "Get the playbook",
  },
];

function ResourcesPage() {
  return (
    <>
      <section className="container-page pb-16 pt-20 md:pt-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          Resources · Operator Library
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Tools for occupancy-led operators.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/65">
          Two field-tested resources drawn from work with hundreds of senior
          care facilities. Want more — book a strategy session.
        </p>
      </section>

      <section className="container-page pb-20">
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {RESOURCES.map((r) => (
            <article key={r.code} className="flex flex-col gap-6 bg-paper p-10">
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                  {r.code}
                </span>
                <BrandIcon name={r.icon} className="size-8 text-clinical" />
              </div>
              <h2 className="text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
                {r.title}
              </h2>
              <p className="text-ink/65">{r.detail}</p>
              <Link
                to="/book"
                className="mono mt-auto inline-flex items-center gap-2 self-start bg-ink px-5 py-3 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical"
              >
                {r.cta} →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-rule bg-clinical py-20 text-paper md:py-24">
        <div className="container-page text-center">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/55">
            Want more
          </span>
          <h2 className="mx-auto max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            Book a strategy meeting.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-paper/75">
            Get a custom 90-day occupancy plan tailored to your facility.
          </p>
          <Link
            to="/book"
            className="mono mt-8 inline-block bg-paper px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-ink hover:bg-bone"
          >
            Book strategy meeting →
          </Link>
        </div>
      </section>
    </>
  );
}

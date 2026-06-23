import { createFileRoute, Link } from "@tanstack/react-router";
import {
  founder,
  aboutMicro,
  aboutTeam,
  aboutWhatWeAre,
  aboutRegions,
  aboutImpactKPIs,
  growthSystemSteps,
  heroMetrics,
} from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OccupiaCare" },
      { name: "description", content: "OccupiaCare builds predictable occupancy systems for senior care communities — performance marketing, conversion-focused websites, and automation." },
      { property: "og:title", content: "About OccupiaCare" },
      { property: "og:description", content: "Building predictable occupancy systems for senior care communities." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="container-page pb-20 pt-20 md:pb-28 md:pt-28">
        <Link to="/" className="mono mb-12 inline-block text-[11px] uppercase tracking-widest text-ink/50 hover:text-clinical">
          ← Back to home
        </Link>
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          About OccupiaCare
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Building predictable occupancy systems for senior care communities.
        </h1>
        <p className="mt-8 max-w-3xl text-pretty text-xl text-ink/65">
          OccupiaCare is a performance growth partner for assisted living,
          memory care, nursing homes, and rehabilitation centers. We help
          facilities move from referral-based admissions to predictable digital
          pipelines.
        </p>
      </section>

      {/* Snapshot metrics */}
      <section className="border-y border-rule bg-white">
        <div className="container-page grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-5">
          {heroMetrics.map((m) => (
            <div key={m.label}>
              <div className="text-4xl font-extrabold tracking-tighter text-ink md:text-5xl">{m.value}</div>
              <div className="mono mt-2 text-[10px] uppercase tracking-widest text-ink/45">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story */}
      <section className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <span className="mono text-[10px] uppercase tracking-widest text-ink/40">01 · Our Story</span>
          <h2 className="mt-4 text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            Why OccupiaCare exists.
          </h2>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg text-ink/75">
          <p>
            OccupiaCare was built around a simple insight: great senior care
            communities were not struggling because of service quality, but
            because families weren't consistently finding them at the right
            time.
          </p>
          <p>
            As family decision-making moved online, many facilities became
            overly dependent on referrals and traditional outreach, leading to
            inconsistent inquiries and unpredictable occupancy.
          </p>
          <p>
            We started OccupiaCare to change that. By combining performance
            marketing, conversion-focused websites, and automation systems, we
            help senior care communities become visible, trusted, and
            accessible at the exact moment families are searching.
          </p>
          <p className="text-ink/85">
            Today, OccupiaCare exists to turn occupancy from uncertainty into a
            predictable growth system.
          </p>
        </div>
      </section>

      {/* What We Built — Growth System diagram */}
      <section className="border-y border-rule bg-bone py-20 md:py-28">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            02 · What We Built
          </span>
          <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            The OccupiaCare Growth System.
          </h2>
          <div className="overflow-x-auto">
            <ol className="flex min-w-max gap-2">
              {growthSystemSteps.map((s, i) => (
                <li key={s.step} className="flex items-center gap-2">
                  <div className="flex w-[180px] flex-col gap-2 border border-rule bg-paper p-5">
                    <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-base font-extrabold uppercase tracking-tight">{s.step}</span>
                    <span className="text-xs text-ink/55">{s.detail}</span>
                  </div>
                  {i < growthSystemSteps.length - 1 && <span className="mono text-ink/30">→</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Founder */}
      <section className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-5">
          <div className="overflow-hidden border border-rule bg-ink">
            <img src={founder.image} alt={founder.name} loading="lazy" className="aspect-[4/5] w-full object-cover" />
          </div>
        </div>
        <div className="md:col-span-7">
          <span className="mono text-[10px] uppercase tracking-widest text-ink/40">03 · Founder & CEO</span>
          <h2 className="mt-4 text-balance text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
            {founder.name}
          </h2>
          <p className="mono mt-2 text-[11px] uppercase tracking-widest text-clinical">
            {founder.title} · OccupiaCare
          </p>
          <figure className="mt-8 border-l-2 border-clinical pl-6">
            <blockquote className="text-2xl font-bold leading-snug text-ink/85 md:text-3xl">
              "{founder.long}"
            </blockquote>
          </figure>
          <p className="mt-6 text-ink/70">OccupiaCare was built to ensure:</p>
          <ul className="mt-4 space-y-2 text-ink/80">
            {[
              "Families find you early",
              "Trust builds faster",
              "Decisions happen sooner",
              "Occupancy becomes predictable",
            ].map((p) => (
              <li key={p} className="flex items-center gap-3">
                <span className="size-1.5 rounded-full bg-clinical" />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="bg-clinical py-20 text-paper md:py-24">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/55">
            04 · What Makes Us Different
          </span>
          <h2 className="mb-10 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            We are not an agency. We are a performance admissions system.
          </h2>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-paper/20 bg-paper/15 md:grid-cols-4">
            {[
              { k: "We focus on", v: "Occupancy growth", strike: "not clicks" },
              { k: "We focus on", v: "Move-ins", strike: "not leads" },
              { k: "We focus on", v: "Revenue impact", strike: "not impressions" },
              { k: "We focus on", v: "Predictability", strike: "not randomness" },
            ].map((b) => (
              <div key={b.v} className="bg-clinical p-6">
                <div className="mono text-[10px] uppercase tracking-widest text-paper/55">{b.k}</div>
                <div className="mt-2 text-xl font-extrabold uppercase tracking-tight">{b.v}</div>
                <div className="mono mt-1 text-[10px] uppercase tracking-widest text-paper/50 line-through">
                  {b.strike}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Are */}
      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">05 · What We Are</span>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {aboutWhatWeAre.map((w, i) => (
            <div key={w} className="flex items-baseline gap-4 bg-paper p-6">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-extrabold uppercase tracking-tight">{w}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="border-y border-rule bg-bone py-20 md:py-28">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">06 · Meet the Team</span>
          <h2 className="mb-4 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            A performance team built for senior care growth.
          </h2>
          <p className="mb-12 max-w-2xl text-ink/65">
            Embedded team working as an extension of your facility.
          </p>
          <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3 lg:grid-cols-5">
            {aboutTeam.map((t, i) => (
              <article key={t.name} className="flex flex-col gap-3 bg-paper p-6">
                <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                  T/{String(i + 1).padStart(2, "0")}
                </span>
                <div className="flex size-12 items-center justify-center rounded-full bg-clinical/10 text-base font-extrabold uppercase text-clinical">
                  {t.name.charAt(0)}
                </div>
                <h3 className="text-lg font-extrabold uppercase tracking-tight">{t.name}</h3>
                <p className="mono text-[10px] uppercase tracking-widest text-ink/50">{t.role}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Global operations */}
      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">07 · Global Operations</span>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          We support senior care communities across:
        </h2>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
          {aboutRegions.map((r, i) => (
            <div key={r} className="flex items-center gap-5 bg-paper p-8">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                R/{String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-2xl font-extrabold uppercase tracking-tight">{r}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Our Impact */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/45">08 · Our Impact</span>
          <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            Measurable outcomes across client facilities.
          </h2>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-paper/15 bg-paper/10 md:grid-cols-5">
            {aboutImpactKPIs.map((k) => (
              <div key={k.label} className="flex flex-col justify-between gap-4 bg-ink p-6">
                <div className="text-3xl font-extrabold tracking-tight text-clinical md:text-4xl">{k.value}</div>
                <div className="mono text-[10px] uppercase tracking-widest text-paper/55">{k.label}</div>
              </div>
            ))}
          </div>
          <p className="mono mt-8 text-[11px] uppercase tracking-widest text-paper/45">
            Including {aboutMicro[0].value} avg inquiry growth and {aboutMicro[1].value} occupancy maintained.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-page py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
          Ready to make occupancy predictable?
        </h2>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link to="/case-studies" className="mono border border-ink/15 bg-paper px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-ink hover:border-ink">
            View case studies →
          </Link>
          <Link to="/book" className="mono bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical">
            Book strategy call →
          </Link>
        </div>
      </section>
    </>
  );
}

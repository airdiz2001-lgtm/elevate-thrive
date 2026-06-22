import { createFileRoute, Link } from "@tanstack/react-router";
import { aboutWhatWeAre, aboutTeam, heroMetrics } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — OccupiaCare" },
      { name: "description", content: "The OccupiaCare story, founder background, philosophy, and team." },
      { property: "og:title", content: "About — OccupiaCare" },
      { property: "og:description", content: "Built for one purpose: increasing senior care occupancy." },
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
          ← Back to overview
        </Link>
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          About OccupiaCare · Story · Founder · Team
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          The story behind the system.
        </h1>
        <p className="mt-8 max-w-3xl text-pretty text-xl text-ink/65">
          We design AI-powered admissions systems that help senior care
          operators attract more families, convert more inquiries, and increase
          occupancy predictably.
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

      {/* The Problem We Saw */}
      <section className="container-page grid gap-12 py-20 md:grid-cols-12 md:py-28">
        <div className="md:col-span-4">
          <span className="mono text-[10px] uppercase tracking-widest text-ink/40">The Problem We Saw</span>
        </div>
        <div className="md:col-span-8 space-y-6 text-lg text-ink/75">
          <p>Senior care facilities weren't struggling with care quality. They were struggling with infrastructure:</p>
          <ul className="grid gap-2 text-base text-ink/70 md:grid-cols-2">
            <li>— Slow inquiry response</li>
            <li>— Lost leads</li>
            <li>— No follow-up systems</li>
            <li>— Weak digital trust</li>
            <li>— Broken admissions pipelines</li>
          </ul>
          <p>Even great facilities were losing occupancy.</p>
        </div>
      </section>

      {/* The Insight callout */}
      <section className="bg-clinical py-20 text-paper md:py-24">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/55">The Insight</span>
          <p className="max-w-3xl text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl">
            Occupancy is not a care problem. It is a systems problem.
          </p>
        </div>
      </section>

      {/* What we are */}
      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">What We Are</span>
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

      {/* Founder story */}
      <section className="border-y border-rule bg-bone py-20 md:py-28">
        <div className="container-page grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="aspect-[4/5] w-full max-w-sm border border-rule bg-ink">
              <div className="flex h-full items-end p-8 text-paper">
                <div>
                  <div className="mono mb-2 text-[10px] uppercase tracking-widest text-paper/50">Founder</div>
                  <div className="text-2xl font-extrabold uppercase tracking-tight">Founder-Led Growth Company</div>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-8">
            <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">Founder Story</span>
            <h2 className="mb-8 text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
              From digital systems to healthcare growth infrastructure.
            </h2>
            <ol className="space-y-6">
              {[
                { phase: "Phase 1 — Background", body: "Years in digital systems, marketing, and automation across high-volume operators." },
                { phase: "Phase 2 — Insight", body: "Spotted the senior care gap: missed inquiries equal lost revenue, every day." },
                { phase: "Phase 3 — Shift", body: "Moved from marketing services to building admissions infrastructure." },
                { phase: "Phase 4 — Today", body: "Building AI admissions systems for senior care operators focused on occupancy, trust, and automation." },
              ].map((p, i) => (
                <li key={p.phase} className="flex gap-6 border-t border-rule pt-6 first:border-t-0 first:pt-0">
                  <span className="mono shrink-0 text-[10px] uppercase tracking-widest text-clinical">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <div className="text-base font-extrabold uppercase tracking-tight">{p.phase}</div>
                    <p className="mt-2 text-ink/70">{p.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">Our Philosophy</span>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          <div className="bg-paper p-8">
            <h3 className="mb-4 text-xl font-extrabold uppercase tracking-tight text-ink/40">We don't believe in</h3>
            <ul className="space-y-2 text-base text-ink/55 line-through">
              <li>— Generic marketing</li>
              <li>— One-time campaigns</li>
              <li>— Disconnected tools</li>
            </ul>
          </div>
          <div className="bg-paper p-8">
            <h3 className="mb-4 text-xl font-extrabold uppercase tracking-tight">We believe in</h3>
            <ul className="space-y-2 text-base text-ink/80">
              <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-clinical" /> Connected systems</li>
              <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-clinical" /> Measurable occupancy growth</li>
              <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-clinical" /> Automation-first admissions</li>
              <li className="flex items-center gap-2"><span className="size-1.5 rounded-full bg-clinical" /> Trust-driven conversion design</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How we think */}
      <section className="bg-ink py-20 text-paper md:py-24">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/45">How We Think</span>
          <p className="max-w-3xl text-balance text-3xl font-extrabold uppercase leading-tight tracking-tight md:text-5xl">
            Every empty bed is a broken system.
          </p>
          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-paper/15 bg-paper/10 md:grid-cols-5">
            {[
              { k: "Attention", v: "Ads" },
              { k: "Trust", v: "Branding" },
              { k: "Conversion", v: "Funnels" },
              { k: "Response", v: "AI" },
              { k: "Retention", v: "CRM + Follow-Up" },
            ].map((b) => (
              <div key={b.k} className="bg-ink p-6">
                <div className="mono text-[10px] uppercase tracking-widest text-paper/45">{b.k}</div>
                <div className="mt-1 text-lg font-extrabold uppercase tracking-tight">{b.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">Team Registry</span>
        <h2 className="mb-12 max-w-2xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          Built by specialists.
        </h2>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {aboutTeam.map((t) => (
            <div key={t.name} className="bg-paper p-8">
              <h3 className="text-xl font-extrabold uppercase tracking-tight">{t.name}</h3>
              <p className="mono mt-2 text-[10px] uppercase tracking-widest text-ink/50">{t.role}</p>
            </div>
          ))}
        </div>
        <p className="mono mt-8 text-[11px] uppercase tracking-widest text-ink/50">
          A hybrid team of marketers, engineers, and AI system builders focused only on senior care.
        </p>
      </section>

      <section className="container-page pb-24 text-center md:pb-32">
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
          See the system we built.
        </h2>
        <Link to="/solution" className="mono mt-8 inline-block bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical">
          Explore the solution →
        </Link>
      </section>
    </>
  );
}

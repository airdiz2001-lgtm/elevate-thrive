import { createFileRoute, Link } from "@tanstack/react-router";
import {
  solutionMetrics,
  solutionGrid,
  aiInfrastructure,
  agents,
  funnelFull,
  dashboardMetrics,
  infrastructureCols,
  ecosystemBoxes,
} from "@/lib/site-data";
import { BrandIcon } from "@/components/site/BrandIcon";

export const Route = createFileRoute("/solution")({
  head: () => ({
    meta: [
      { title: "The Solution — OccupiaCare Senior Care Operating System" },
      { name: "description", content: "The full OccupiaCare ecosystem: ads, funnels, AI agents, CRM, automation, and the admissions pipeline." },
      { property: "og:title", content: "The Solution — OccupiaCare Senior Care Operating System" },
      { property: "og:description", content: "One unified senior care operating system." },
    ],
  }),
  component: SolutionPage,
});

function SolutionPage() {
  return (
    <>
      {/* HERO ECOSYSTEM */}
      <section className="bg-clinical py-20 text-paper md:py-28">
        <div className="container-page">
          <Link to="/" className="mono mb-12 inline-block text-[11px] uppercase tracking-widest text-paper/60 hover:text-paper">
            ← Back to overview
          </Link>
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/55">
            The Senior Care Operating System
          </span>
          <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
            The Occupancy Growth Engine
          </h1>
          <p className="mt-8 max-w-2xl text-pretty text-xl text-paper/75">
            Reviews, SEO, ads, automation, and admissions — wired into one
            connected system. Built for senior care operators who need
            predictable occupancy growth.
          </p>

          <div className="mt-14 grid grid-cols-2 items-stretch gap-px overflow-hidden border border-paper/20 bg-paper/15 md:grid-cols-3">
            {ecosystemBoxes.map((b, i) => (
              <article key={b.name} className="group relative aspect-[4/3] overflow-hidden bg-ink">
                <img
                  src={b.image}
                  alt={b.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-65 transition-all duration-500 group-hover:scale-105 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/60 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-between p-5 text-paper">
                  <span className="mono text-[10px] uppercase tracking-widest text-paper/70">
                    {String(i + 1).padStart(2, "0")} · Layer
                  </span>
                  <div>
                    <h3 className="text-xl font-extrabold uppercase leading-tight tracking-tight md:text-2xl">
                      {b.name}
                    </h3>
                    <p className="mono mt-1 text-[10px] uppercase tracking-widest text-paper/75">{b.detail}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* METRICS */}
      <section className="border-y border-rule bg-white">
        <div className="container-page grid grid-cols-2 gap-x-8 gap-y-10 py-14 md:grid-cols-5">
          {solutionMetrics.map((m) => (
            <div key={m.label}>
              <div className="text-4xl font-extrabold tracking-tighter text-growth md:text-5xl">{m.value}</div>
              <div className="mono mt-2 text-[10px] uppercase tracking-widest text-ink/45">{m.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FULL SERVICE ARCHITECTURE */}
      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (02) Service Architecture
        </span>
        <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          Ten systems. One admissions engine.
        </h2>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {solutionGrid.map((s, i) => (
            <article key={s.title} className="flex gap-6 bg-paper p-6 md:p-8">
              <div className="flex size-14 shrink-0 items-center justify-center rounded-md border border-clinical/15 bg-clinical/8 text-clinical">
                <BrandIcon name={s.icon} className="size-7" />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-extrabold uppercase tracking-tight">{s.title}</h3>
                  <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                    S/{String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm text-ink/65">{s.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* AI INFRASTRUCTURE LAYER */}
      <section className="bg-ink py-20 text-paper md:py-28">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/45">
            (03) AI Infrastructure Layer
          </span>
          <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            The AI systems running modern admissions.
          </h2>
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-paper/15 bg-paper/10 md:grid-cols-5">
            {aiInfrastructure.map((c, i) => {
              const iconNames = ["target", "phone", "bot", "calendar", "spark", "trendUp", "star", "database", "share", "shield"];
              const iconName = iconNames[i % iconNames.length];
              return (
                <div key={c} className="group relative flex flex-col gap-4 overflow-hidden bg-ink p-5 transition-colors hover:bg-ink/80">
                  <div className="absolute -right-6 -top-6 size-24 rounded-full bg-clinical/10 blur-2xl transition-opacity group-hover:opacity-100" />
                  <div className="flex items-center justify-between">
                    <div className="relative flex size-11 items-center justify-center rounded-md border border-clinical/30 bg-clinical/10 text-clinical">
                      <BrandIcon name={iconName} className="size-5" />
                    </div>
                    <span className="mono text-[10px] uppercase tracking-widest text-paper/45">
                      AI/{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-tight">{c}</span>
                  <span className="mt-auto inline-flex items-center gap-2 text-[10px] mono uppercase tracking-widest text-clinical/90">
                    <span className="size-1.5 animate-pulse rounded-full bg-clinical" /> Active
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AGENT SYSTEM */}
      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (04) Agent System
        </span>
        <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          AI agents running your admissions.
        </h2>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
          {agents.map((a) => (
            <article key={a.code} className="flex flex-col gap-4 bg-paper p-6">
              <div className="flex items-center justify-between">
                <span className="mono text-[10px] uppercase tracking-widest text-clinical">{a.code}</span>
                <span className="mono inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-clinical">
                  <span className="size-1.5 animate-pulse rounded-full bg-clinical" /> Active
                </span>
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-tight">{a.name}</h3>
              <p className="text-sm text-ink/65">{a.detail}</p>
              <div className="mt-auto border-t border-rule pt-3">
                <div className="mono text-[10px] uppercase tracking-widest text-ink/45">Impact</div>
                <div className="text-xl font-extrabold text-clinical">{a.impact}</div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* DIGITAL ADMISSIONS ECOSYSTEM */}
      <section className="border-y border-rule bg-bone py-20 md:py-28">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            (05) Digital Admissions Ecosystem
          </span>
          <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            From first search to filled bed.
          </h2>
          <div className="overflow-x-auto">
            <ol className="flex min-w-max gap-2">
              {funnelFull.map((s, i) => (
                <li key={s} className="flex items-center gap-2">
                  <div className="flex w-[180px] flex-col gap-2 border border-rule bg-paper p-4">
                    <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-extrabold uppercase tracking-tight">{s}</span>
                  </div>
                  {i < funnelFull.length - 1 && <span className="mono text-ink/30">→</span>}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* DASHBOARD PREVIEW */}
      <section className="container-page py-20 md:py-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (06) Enterprise Dashboard
        </span>
        <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          Every facility, one live view.
        </h2>
        <div className="border border-rule bg-ink p-6 text-paper md:p-10">
          <div className="mb-6 flex items-center justify-between border-b border-paper/15 pb-4">
            <div className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-clinical" />
              <span className="mono text-[10px] uppercase tracking-widest text-paper/60">Live · network-wide</span>
            </div>
            <span className="mono text-[10px] uppercase tracking-widest text-paper/40">Updated 12s ago</span>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-6">
            {dashboardMetrics.map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-extrabold tracking-tighter md:text-4xl">{m.value}</div>
                <div className="mono mt-2 text-[10px] uppercase tracking-widest text-paper/45">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFRASTRUCTURE */}
      <section className="border-y border-rule bg-white py-20 md:py-28">
        <div className="container-page">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            (07) Development & Infrastructure
          </span>
          <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            The engineering beneath every campaign.
          </h2>
          <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
            {infrastructureCols.map((c) => (
              <div key={c.title} className="bg-paper p-8">
                <h3 className="mb-4 text-xl font-extrabold uppercase tracking-tight">{c.title}</h3>
                <ul className="space-y-2 text-sm text-ink/70">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="size-1.5 rounded-full bg-clinical" />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24 text-center md:py-32">
        <h2 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
          See the system in production.
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-ink/60">
          Browse documented case files or book a private session to map your facility.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link to="/case-studies" className="mono inline-block border border-ink/15 bg-paper px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-ink hover:border-ink">
            Browse case files →
          </Link>
          <Link to="/book" className="mono inline-block bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical">
            Book a consultation →
          </Link>
        </div>
      </section>
    </>
  );
}

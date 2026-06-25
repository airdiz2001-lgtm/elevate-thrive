import { createFileRoute, Link } from "@tanstack/react-router";
import {
  heroMetrics,
  coreProblemsHome,
  solutionGrid,
  solutionMetrics,
  caseStudies,
  industries,
  industryTrustStrip,
  trustedBy,
  trustPillars,
  founder,
  aboutMicro,
  facilityStats,
} from "@/lib/site-data";
import { MiniFunnel } from "@/components/site/MiniFunnel";
import { CalendarCTA } from "@/components/site/CalendarCTA";
import { BrandIcon } from "@/components/site/BrandIcon";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OccupiaCare — Occupancy Growth for Senior Care Facilities" },
      { name: "description", content: "OccupiaCare helps nursing homes, assisted living, rehab, and memory care facilities increase occupancy through performance marketing, automation, and AI admissions systems." },
      { property: "og:title", content: "OccupiaCare — Occupancy Growth for Senior Care Facilities" },
      { property: "og:description", content: "Performance marketing, automation, and AI admissions systems for senior care operators." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <VideoSection />
      <IndustriesSection />
      <ProblemSummary />
      <SolutionSection />
      <CaseStudiesPreview />
      <AboutSnapshot />
      <TrustedBy />
      <CalendarCTA />
    </>
  );
}

/* Helper: detect occupancy/revenue labels → green */
function isGrowthLabel(label: string) {
  return /occupanc|revenue|move-?in|admission|inquir|tour|resident/i.test(label);
}

/* ─────────── HERO ─────────── */
function Hero() {
  return (
    <section className="border-b border-rule">
      <div className="container-page animate-reveal pb-16 pt-20 md:pb-24 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-8">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-clinical/15 bg-clinical/5 px-3 py-1">
              <span className="size-1.5 animate-pulse rounded-full bg-clinical" />
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                Q3 Operator Cohort · 2 Slots Open
              </span>
            </div>
            <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.92] tracking-tight md:text-7xl">
              Helping senior care facilities increase{" "}
              <span className="text-clinical">occupancy</span> and build family trust.
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/65 md:text-xl">
              We help nursing homes, assisted living communities, rehabilitation
              centers, and memory care facilities generate qualified resident
              inquiries through performance marketing, automation, and digital
              growth systems.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/book" className="mono bg-ink px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-paper transition-colors hover:bg-clinical">
                Increase Occupancy
              </Link>
              <Link to="/solution" className="mono inline-flex items-center gap-2 border border-ink/15 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-ink transition-colors hover:border-ink">
                See the ecosystem
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
          <aside className="md:col-span-4">
            <div className="sticky top-24 border border-rule bg-white p-6">
              <span className="mono mb-6 block text-[10px] uppercase tracking-widest text-ink/40">
                Operator Index · TTM
              </span>
              <ul className="divide-y divide-rule">
                {heroMetrics.map((m) => {
                  const green = isGrowthLabel(m.label);
                  return (
                  <li key={m.label} className="flex items-baseline justify-between py-3 first:pt-0 last:pb-0">
                    <span className="mono text-[10px] uppercase tracking-widest text-ink/55">{m.label}</span>
                    <span className={`text-xl font-extrabold tracking-tighter ${green ? "text-growth" : "text-ink"}`}>{m.value}</span>
                  </li>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>

        {/* Facility credibility row — integrated, not a separate strip */}
        <div className="mt-14 grid grid-cols-2 gap-x-8 gap-y-8 border-t border-rule pt-10 md:grid-cols-4">
          {facilityStats.map((s) => {
            const green = /revenue|resident|admit|occupanc/i.test(s.label);
            return (
              <div key={s.label} className="border-l-2 border-clinical pl-4">
                <div className={`text-3xl font-extrabold tracking-tighter md:text-5xl ${green ? "text-growth" : "text-ink"}`}>{s.value}</div>
                <div className="mono mt-2 text-[10px] uppercase tracking-widest text-ink/55">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────── VIDEO ─────────── */
function VideoSection() {
  return (
    <section className="border-b border-rule bg-bone py-20 md:py-24">
      <div className="container-page">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
              Watch the Story
            </span>
            <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
              Modern growth systems for senior care facilities.
            </h2>
            <p className="mt-4 max-w-xl text-ink/65">
              See how OccupiaCare transforms occupancy, admissions, and family trust.
            </p>
          </div>
        </div>
        <div className="relative aspect-video overflow-hidden border border-rule bg-ink">
          <div className="absolute inset-0 bg-gradient-to-br from-clinical/30 via-ink to-ink" />
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 text-paper">
            <button
              type="button"
              className="group flex size-20 items-center justify-center rounded-full border border-paper/30 bg-paper/10 backdrop-blur transition-colors hover:bg-paper/20"
              aria-label="Play showreel"
            >
              <span className="ml-1 border-y-[10px] border-l-[16px] border-y-transparent border-l-paper transition-transform group-hover:scale-110" />
            </button>
            <span className="mono text-[10px] uppercase tracking-widest text-paper/60">
              02:14 · Network walkthrough
            </span>
          </div>
          <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-paper">
            <span className="mono text-[10px] uppercase tracking-widest text-paper/50">OCCUPIACARE · Reel 2026</span>
            <span className="mono text-[10px] uppercase tracking-widest text-paper/50">HIPAA-conscious</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────── PROBLEM (compact 5) ─────────── */
function ProblemSummary() {
  return (
    <section className="border-b border-rule bg-white py-24 md:py-28">
      <div className="container-page">
        <div className="mb-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
              (01) The Honest Truth
            </span>
            <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
              Why most senior care facilities fail to grow occupancy.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-ink/65">
              It's rarely the quality of care that limits growth. It's the
              infrastructure behind the inquiry process — outdated websites,
              slow follow-up, no CRM, manual workflows.
            </p>
            <Link to="/problem" className="mono group mt-6 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-[11px] font-bold uppercase tracking-widest">
              See full breakdown
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-5">
          {coreProblemsHome.map((p, i) => (
            <article key={p.title} className="flex flex-col gap-4 bg-paper p-6">
              <div className="flex items-center justify-between">
                <div className="flex size-11 items-center justify-center rounded-md bg-alert-soft text-alert">
                  <BrandIcon name={p.icon} className="size-6" />
                </div>
                <span className="mono text-[10px] uppercase tracking-widest text-alert">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="text-sm font-extrabold uppercase tracking-tight">{p.title}</h3>
              <p className="text-xs text-ink/60">{p.detail}</p>
              <span className="mono mt-auto text-[10px] uppercase tracking-widest text-alert/80">⚠ Growth Blocker</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── SOLUTION (compact + mini funnel) ─────────── */
function SolutionSection() {
  return (
    <section className="bg-bone py-24 md:py-28">
      <div className="container-page">
        <div className="mb-12 grid gap-8 md:grid-cols-12">
          <div className="md:col-span-7">
            <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
              (02) The Solution
            </span>
            <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
              Industry-specific growth systems for senior care operators.
            </h2>
            <p className="mt-6 max-w-2xl text-ink/65">
              Purpose-built to increase occupancy, strengthen family trust, and
              automate admissions.
            </p>
          </div>
          <div className="md:col-span-5">
            <div className="grid grid-cols-2 gap-px overflow-hidden border border-rule bg-rule">
              {solutionMetrics.slice(0, 4).map((m) => (
                <div key={m.label} className="bg-paper p-4">
                  <div className="text-2xl font-extrabold tracking-tighter text-growth">{m.value}</div>
                  <div className="mono mt-1 text-[10px] uppercase tracking-widest text-ink/50">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3 lg:grid-cols-5">
          {solutionGrid.map((s) => (
            <article key={s.title} className="flex flex-col gap-4 bg-paper p-5">
              <div className="flex size-11 items-center justify-center rounded-md bg-clinical/8 text-clinical">
                <BrandIcon name={s.icon} className="size-6" />
              </div>
              <h3 className="text-sm font-extrabold uppercase tracking-tight">{s.title}</h3>
              <p className="text-xs text-ink/60">{s.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-10"><MiniFunnel /></div>

        <div className="mt-10 flex justify-center">
          <Link to="/solution" className="mono inline-flex items-center gap-2 bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical">
            Explore full AI admissions system
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────── CASE STUDIES ─────────── */
function CaseStudiesPreview() {
  const featured = caseStudies.slice(0, 4);
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            (03) Case Files
          </span>
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            Proven occupancy growth across senior care communities.
          </h2>
          <p className="mt-4 text-ink/65">
            Real occupancy lift, real admissions systems, real revenue impact.
          </p>
        </div>
        <Link to="/case-studies" className="mono text-[11px] uppercase tracking-widest text-ink/60 hover:text-clinical">
          View full case studies →
        </Link>
      </div>

      <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
        {featured.map((cs) => (
          <Link
            key={cs.slug}
            to="/case-studies/$slug"
            params={{ slug: cs.slug }}
            className="group flex flex-col gap-6 bg-paper p-6 md:p-8"
          >
            <div className="flex items-center justify-between">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                {cs.vertical} · {cs.region}
              </span>
              <span className="mono text-[10px] uppercase tracking-widest text-ink/40 transition-transform group-hover:translate-x-1">
                Read →
              </span>
            </div>
            <h3 className="text-2xl font-extrabold uppercase leading-tight tracking-tight">
              <span className="text-growth">{cs.metrics[0].value}</span> {cs.metrics[0].label}
            </h3>
            <Sparkline trend={cs.trend} />
            <div className="grid grid-cols-3 gap-3 border-t border-rule pt-4">
              {cs.metrics.slice(1, 4).map((m) => {
                const green = isGrowthLabel(m.label);
                return (
                <div key={m.label}>
                  <div className={`text-base font-extrabold ${green ? "text-growth" : "text-ink"}`}>{m.value}</div>
                  <div className="mono text-[10px] uppercase tracking-widest text-ink/45">{m.label}</div>
                </div>
                );
              })}
            </div>
            <p className="text-sm text-ink/60">{cs.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

function Sparkline({ trend }: { trend: number[] }) {
  const min = Math.min(...trend) - 2;
  const max = Math.max(...trend) + 2;
  const w = 300, h = 60;
  const step = w / (trend.length - 1);
  const points = trend.map((v, i) => `${i * step},${h - ((v - min) / (max - min)) * h}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="h-12 w-full text-growth">
      <polyline points={points} fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

/* ─────────── INDUSTRIES — real photos ─────────── */
function IndustriesSection() {
  return (
    <section className="border-y border-rule bg-white py-24 md:py-28">
      <div className="container-page">
        <div className="mb-12 max-w-2xl">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            (04) Industries We Serve
          </span>
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            Growth systems for every senior care model.
          </h2>
          <p className="mt-4 text-ink/65">
            Specialized admissions and occupancy systems tailored to each care environment.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind) => (
            <article key={ind.name} className="group relative flex flex-col overflow-hidden bg-paper">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={ind.image}
                  alt={ind.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-paper">
                  <h3 className="text-lg font-extrabold uppercase leading-tight tracking-tight">{ind.name}</h3>
                </div>
              </div>
              <p className="p-5 text-sm text-ink/65">{ind.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden border border-rule bg-rule md:grid-cols-4">
          {industryTrustStrip.map((t) => (
            <div key={t.label} className="bg-paper p-5 text-center">
              <div className="text-2xl font-extrabold tracking-tight text-clinical md:text-3xl">{t.value}</div>
              <div className="mono mt-1 text-[10px] uppercase tracking-widest text-ink/50">{t.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── TRUSTED BY ─────────── */
function TrustedBy() {
  return (
    <section className="bg-bone py-20">
      <div className="container-page">
        <span className="mono mb-4 block text-center text-[10px] uppercase tracking-widest text-ink/40">
          (05) Built for Healthcare Credibility
        </span>
        <h2 className="mx-auto mb-10 max-w-2xl text-balance text-center text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
          Trusted by healthcare and senior-care operators.
        </h2>

        <div className="mb-12 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
          {trustPillars.map((p) => (
            <div key={p.code} className="flex flex-col gap-3 bg-paper p-6 text-center">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">{p.code}</span>
              <h3 className="text-base font-extrabold uppercase tracking-tight">{p.name}</h3>
              <p className="text-sm text-ink/60">{p.detail}</p>
            </div>
          ))}
        </div>

        <p className="mono mb-8 text-center text-[10px] uppercase tracking-[0.3em] text-ink/40">
          4.9 / 5 from 200+ facility partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6 opacity-70">
          {trustedBy.map((name) => (
            <span key={name} className="text-lg font-extrabold uppercase tracking-tight text-ink/45">
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────── ABOUT SNAPSHOT — founder-led, short version ─────────── */
function AboutSnapshot() {
  return (
    <section className="border-y border-rule bg-white py-24 md:py-28">
      <div className="container-page">
        <span className="mono mb-12 block text-[10px] uppercase tracking-widest text-ink/40">
          (06) About OccupiaCare
        </span>
        <div className="grid gap-12 md:grid-cols-12">
          {/* Left: text */}
          <div className="md:col-span-7">
            <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
              Helping senior care communities build{" "}
              <span className="text-clinical">predictable occupancy growth</span>.
            </h2>
            <div className="mt-6 space-y-4 text-lg text-ink/70">
              <p>
                OccupiaCare builds performance-driven admission systems for
                assisted living, memory care, and nursing homes.
              </p>
              <p>
                We help facilities replace referral dependency with consistent
                family inquiries, tours, and move-ins.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-px overflow-hidden border border-rule bg-rule">
              {aboutMicro.map((m) => (
                <div key={m.label} className="bg-paper p-5">
                  <div className="text-2xl font-extrabold tracking-tight text-clinical md:text-3xl">{m.value}</div>
                  <div className="mono mt-1 text-[10px] uppercase tracking-widest text-ink/50">{m.label}</div>
                </div>
              ))}
            </div>

            <Link to="/about" className="mono group mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-[11px] font-bold uppercase tracking-widest">
              View full story
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>

          {/* Right: founder block */}
          <div className="md:col-span-5">
            <div className="border border-rule bg-bone p-6">
              <div className="overflow-hidden rounded-md border border-rule bg-ink">
                <img
                  src={founder.image}
                  alt={founder.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="mt-5">
                <div className="text-xl font-extrabold uppercase tracking-tight">{founder.name}</div>
                <div className="mono mt-1 text-[10px] uppercase tracking-widest text-clinical">
                  {founder.title}
                </div>
                <p className="mt-4 border-l-2 border-clinical pl-4 text-ink/75">
                  "{founder.quote}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

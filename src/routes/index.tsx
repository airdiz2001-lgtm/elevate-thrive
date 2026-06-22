import { createFileRoute, Link } from "@tanstack/react-router";
import {
  services,
  caseStudies,
  industries,
  trustedBy,
  trustPillars,
  processSteps,
  heroMetrics,
  operatorTypes,
  coreProblems,
  industryRealities,
  extendedServices,
  outcomes,
  funnelStages,
  automationCapabilities,
  agents,
  dashboardMetrics,
  ecosystemNodes,
  infrastructure,
  headlineResults,
  testimonials,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "OccupiaCare — Occupancy Growth for Senior Care Facilities" },
      {
        name: "description",
        content:
          "OccupiaCare helps nursing homes, assisted living, rehab, and memory care facilities increase occupancy through performance marketing, automation, and AI-powered admissions systems.",
      },
      { property: "og:title", content: "OccupiaCare — Occupancy Growth for Senior Care Facilities" },
      {
        property: "og:description",
        content:
          "Performance marketing, automation, and AI admissions systems built for senior care operators.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSummary />
      <IndustryReality />
      <Solution />
      <ServicesSection />
      <OutcomesSection />
      <FunnelSection />
      <AutomationSection />
      <AgentSystem />
      <DashboardSection />
      <Ecosystem />
      <InfrastructureSection />
      <Process />
      <Results />
      <CaseStudiesPreview />
      <Testimonials />
      <IndustriesSection />
      <TrustedBy />
      <VideoSection />
      <AboutPreview />
      <FinalCTA />
    </>
  );
}

/* ─────────────── HERO ─────────────── */

function Hero() {
  return (
    <section className="border-b border-rule">
      <div className="container-page animate-reveal pb-20 pt-20 md:pb-28 md:pt-28">
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
              <Link
                to="/about"
                className="mono bg-ink px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-paper transition-colors hover:bg-clinical"
              >
                Increase Occupancy
              </Link>
              <Link
                to="/services"
                className="mono inline-flex items-center gap-2 border border-ink/15 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-ink transition-colors hover:border-ink"
              >
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
                {heroMetrics.map((m) => (
                  <li key={m.label} className="flex items-baseline justify-between py-4 first:pt-0 last:pb-0">
                    <span className="mono text-[10px] uppercase tracking-widest text-ink/55">
                      {m.label}
                    </span>
                    <span className="text-2xl font-extrabold tracking-tighter text-ink">
                      {m.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── PROBLEM SUMMARY ─────────────── */

function ProblemSummary() {
  return (
    <section className="border-b border-rule bg-white py-24 md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            (01) The Honest Truth
          </span>
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            Why most senior care facilities fail to grow occupancy.
          </h2>
          <p className="mt-6 max-w-md text-ink/65">
            Most operators bleed occupancy through leaky funnels, manual intake,
            and digital systems built for a different era. The result is empty
            beds the facility could have filled this month.
          </p>
          <Link
            to="/problem"
            className="mono group mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-[11px] font-bold uppercase tracking-widest"
          >
            Read the full breakdown
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <ul className="grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule md:col-span-7 md:grid-cols-2">
          {coreProblems.map((p, i) => (
            <li key={p} className="flex items-start gap-4 bg-paper p-5">
              <span className="mono shrink-0 text-[10px] uppercase tracking-widest text-clinical">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm text-ink/75">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────── INDUSTRY REALITY ─────────────── */

function IndustryReality() {
  return (
    <section className="bg-bone py-24 md:py-28">
      <div className="container-page">
        <div className="mb-12 flex flex-col items-end justify-between gap-4 md:flex-row">
          <div>
            <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
              (01b) Industry Reality
            </span>
            <h2 className="max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
              The 20 problems crippling senior care operators.
            </h2>
          </div>
          <Link
            to="/problem"
            className="mono text-[11px] uppercase tracking-widest text-ink/60 hover:text-clinical"
          >
            See more →
          </Link>
        </div>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-5">
          {industryRealities.map((g) => (
            <div key={g.group} className="flex flex-col gap-4 bg-paper p-6">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                {g.group}
              </span>
              <ul className="space-y-3">
                {g.items.map((it) => (
                  <li key={it} className="text-sm text-ink/70">— {it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SOLUTION ─────────────── */

function Solution() {
  return (
    <section className="bg-clinical py-24 text-paper md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/55">
            (02) The Protocol
          </span>
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            One unified occupancy growth system.
          </h2>
          <p className="mt-6 max-w-md text-paper/80">
            A complete admissions infrastructure that replaces fragmented
            marketing, scattered tools, and manual follow-up — wired into a
            single source of truth on bed availability.
          </p>
          <Link
            to="/solution"
            className="mono group mt-8 inline-flex items-center gap-2 border-b-2 border-paper pb-1 text-[11px] font-bold uppercase tracking-widest"
          >
            See the system overview
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div className="md:col-span-7">
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-paper/15 bg-paper/15 md:grid-cols-3">
            {["Acquisition", "Capture", "Qualification", "Automation", "Tour Booking", "Admissions"].map((n, i) => (
              <div key={n} className="flex flex-col gap-3 bg-clinical p-6">
                <span className="mono text-[10px] uppercase tracking-widest text-paper/55">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-extrabold uppercase tracking-tight text-paper">
                  {n}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── SERVICES ─────────────── */

function ServicesSection() {
  return (
    <section className="border-y border-rule bg-bone py-24 md:py-32">
      <div className="container-page">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
              (03) Services
            </span>
            <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
              Industry-specific growth systems.
            </h2>
          </div>
          <Link
            to="/services"
            className="mono text-[11px] uppercase tracking-widest text-ink/60 hover:text-clinical"
          >
            All services →
          </Link>
        </div>

        {/* Featured */}
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col justify-between gap-10 bg-paper p-8 transition-colors hover:bg-white md:p-12"
            >
              <div>
                <div className="mb-6 flex items-center justify-between">
                  <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                    {s.code}
                  </span>
                  <span className="mono text-[10px] uppercase tracking-widest text-ink/30 transition-transform group-hover:translate-x-1">
                    Detail →
                  </span>
                </div>
                <h3 className="mb-4 text-2xl font-extrabold uppercase tracking-tight">
                  {s.name}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-ink/60">
                  {s.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Extended chips */}
        <div className="mt-10">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            Full service catalog
          </span>
          <div className="flex flex-wrap gap-2">
            {extendedServices.map((s) => (
              <span
                key={s}
                className="mono border border-ink/15 bg-paper px-3 py-2 text-[11px] uppercase tracking-widest text-ink/70"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── OUTCOMES ─────────────── */

function OutcomesSection() {
  return (
    <section className="container-page py-24 md:py-32">
      <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
        (04) Outcomes
      </span>
      <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
        What we help you achieve.
      </h2>
      <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
        {outcomes.map((o) => (
          <div key={o.code} className="flex flex-col gap-4 bg-paper p-8">
            <span className="mono text-[10px] uppercase tracking-widest text-clinical">
              {o.code}
            </span>
            <h3 className="text-xl font-extrabold uppercase tracking-tight">
              {o.name}
            </h3>
            <p className="text-sm text-ink/60">{o.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── FUNNEL ─────────────── */

function FunnelSection() {
  return (
    <section className="border-y border-rule bg-white py-24 md:py-32">
      <div className="container-page">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (05) The Funnel
        </span>
        <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          From first search to move-in day.
        </h2>
        <ol className="relative grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-6">
          {funnelStages.map((s, i) => (
            <li key={s} className="flex flex-col gap-3 bg-paper p-6">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                F/{String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base font-extrabold uppercase tracking-tight">
                {s}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ─────────────── AUTOMATION ─────────────── */

function AutomationSection() {
  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <div className="container-page">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/45">
          (06) AI & Automation
        </span>
        <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          AI and automation systems for senior care.
        </h2>
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-paper/15 bg-paper/10 md:grid-cols-4">
          {automationCapabilities.map((c, i) => (
            <div key={c} className="flex flex-col gap-3 bg-ink p-5">
              <span className="mono text-[10px] uppercase tracking-widest text-paper/45">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm font-bold uppercase tracking-tight text-paper">
                {c}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── AGENT SYSTEM ─────────────── */

function AgentSystem() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mb-12 max-w-3xl">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (07) Agent System
        </span>
        <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          AI agents that run admissions operations.
        </h2>
      </div>
      <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
        {agents.map((a) => (
          <div key={a.code} className="flex flex-col gap-4 bg-paper p-8">
            <div className="flex items-center justify-between">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                {a.code}
              </span>
              <span className="size-2 animate-pulse rounded-full bg-clinical" />
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-tight">
              {a.name}
            </h3>
            <p className="text-sm text-ink/60">{a.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── DASHBOARD ─────────────── */

function DashboardSection() {
  return (
    <section className="border-y border-rule bg-bone py-24 md:py-32">
      <div className="container-page">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (08) Command Center
        </span>
        <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          Enterprise command center for your network.
        </h2>
        <div className="border border-rule bg-ink p-6 text-paper md:p-10">
          <div className="mb-6 flex items-center justify-between border-b border-paper/15 pb-4">
            <div className="flex items-center gap-2">
              <span className="size-2 animate-pulse rounded-full bg-clinical" />
              <span className="mono text-[10px] uppercase tracking-widest text-paper/60">
                Live · network-wide
              </span>
            </div>
            <span className="mono text-[10px] uppercase tracking-widest text-paper/40">
              Updated 12s ago
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-10 gap-y-8 md:grid-cols-6">
            {dashboardMetrics.map((m) => (
              <div key={m.label}>
                <div className="text-3xl font-extrabold tracking-tighter md:text-4xl">
                  {m.value}
                </div>
                <div className="mono mt-2 text-[10px] uppercase tracking-widest text-paper/45">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ECOSYSTEM ─────────────── */

function Ecosystem() {
  return (
    <section className="container-page py-24 md:py-32">
      <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
        (09) Digital Ecosystem
      </span>
      <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
        One connected system, end to end.
      </h2>
      <div className="flex flex-wrap items-center gap-x-2 gap-y-3">
        {ecosystemNodes.map((n, i) => (
          <span key={n} className="flex items-center gap-2">
            <span className="mono inline-flex items-center gap-2 border border-clinical/20 bg-clinical/5 px-4 py-3 text-[11px] uppercase tracking-widest text-clinical">
              <span className="text-clinical/50">{String(i + 1).padStart(2, "0")}</span>
              {n}
            </span>
            {i < ecosystemNodes.length - 1 && (
              <span className="mono text-ink/30">→</span>
            )}
          </span>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── INFRASTRUCTURE ─────────────── */

function InfrastructureSection() {
  return (
    <section className="border-y border-rule bg-white py-24 md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            (10) Infrastructure
          </span>
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            Enterprise-grade systems beneath every campaign.
          </h2>
          <p className="mt-6 max-w-md text-ink/65">
            We build the websites, dashboards, integrations, and automation
            backends that make occupancy growth repeatable.
          </p>
        </div>
        <ul className="grid grid-cols-1 gap-px overflow-hidden border border-rule bg-rule md:col-span-7 md:grid-cols-2">
          {infrastructure.map((item) => (
            <li key={item} className="flex items-center gap-3 bg-paper px-5 py-4 text-sm text-ink/75">
              <span className="size-1.5 rounded-full bg-clinical" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ─────────────── PROCESS ─────────────── */

function Process() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            (11) Process
          </span>
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            How we help facilities scale.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-ink/60">
          Same four stages, every engagement — so your team always knows what's next.
        </p>
      </div>
      <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-4">
        {processSteps.map((step) => (
          <div key={step.code} className="flex flex-col gap-4 bg-paper p-8">
            <span className="mono text-[10px] uppercase tracking-widest text-clinical">
              {step.code}
            </span>
            <h3 className="text-xl font-extrabold uppercase tracking-tight">
              {step.name}
            </h3>
            <p className="text-sm leading-relaxed text-ink/60">{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── RESULTS ─────────────── */

function Results() {
  return (
    <section className="bg-ink py-20 text-paper">
      <div className="container-page">
        <span className="mono mb-10 block text-[10px] uppercase tracking-widest text-paper/40">
          (12) Real outcomes · Trailing 12 months
        </span>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-5 md:gap-12">
          {headlineResults.map((n) => (
            <div key={n.label} className="flex flex-col gap-2">
              <span className="text-4xl font-extrabold tracking-tighter md:text-5xl">
                {n.value}
              </span>
              <span className="mono text-[10px] uppercase tracking-widest text-paper/45">
                {n.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── CASE STUDIES ─────────────── */

function CaseStudiesPreview() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mb-16 flex items-end justify-between border-b border-rule pb-6">
        <div>
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            (13) Case Files
          </span>
          <h2 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            Real transformations.
          </h2>
        </div>
        <Link
          to="/case-studies"
          className="mono text-[11px] uppercase tracking-widest text-ink/60 hover:text-clinical"
        >
          View all →
        </Link>
      </div>
      <div className="grid gap-12 md:grid-cols-2">
        {caseStudies.map((cs) => (
          <Link
            key={cs.slug}
            to="/case-studies/$slug"
            params={{ slug: cs.slug }}
            className="group block"
          >
            <div className="relative mb-6 overflow-hidden">
              <img
                src={cs.hero}
                alt={cs.client}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
              />
              <div className="absolute right-4 top-4 border border-ink/10 bg-white px-4 py-3">
                <div className="mono text-[10px] uppercase tracking-widest text-ink/40">
                  {cs.metrics[0].label}
                </div>
                <div className="text-2xl font-extrabold text-clinical">
                  {cs.metrics[0].value}
                </div>
              </div>
              <span className="mono absolute bottom-4 left-4 text-[10px] uppercase tracking-widest text-paper/90">
                {cs.code} · {cs.vertical}
              </span>
            </div>
            <h3 className="mb-2 text-xl font-extrabold uppercase tracking-tight">
              {cs.client}
            </h3>
            <p className="text-sm text-ink/60">{cs.summary}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── TESTIMONIALS ─────────────── */

function Testimonials() {
  return (
    <section className="border-y border-rule bg-bone py-24 md:py-28">
      <div className="container-page">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (14) Operators on the system
        </span>
        <h2 className="mb-12 max-w-3xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          What admissions teams say.
        </h2>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="flex flex-col gap-6 bg-paper p-8">
              <span className="text-3xl text-clinical">“</span>
              <blockquote className="text-pretty text-base leading-relaxed text-ink/80">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto border-t border-rule pt-4">
                <div className="text-sm font-bold uppercase tracking-tight">
                  {t.name}
                </div>
                <div className="mono text-[10px] uppercase tracking-widest text-ink/50">
                  {t.role}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── INDUSTRIES ─────────────── */

function IndustriesSection() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mb-12 max-w-2xl">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (15) Industries We Serve
        </span>
        <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          Vertical-specific expertise for complex care models.
        </h2>
      </div>

      {/* Operator types chip strip */}
      <div className="mb-10 flex flex-wrap gap-2">
        {operatorTypes.map((o) => (
          <span
            key={o}
            className="mono border border-ink/15 bg-white px-3 py-2 text-[11px] uppercase tracking-widest text-ink/70"
          >
            {o}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind) => (
          <div
            key={ind.name}
            className="group relative aspect-[3/4] overflow-hidden bg-ink"
          >
            <img
              src={ind.image}
              alt={ind.name}
              loading="lazy"
              className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end gap-2 p-6">
              <h3 className="text-xl font-extrabold uppercase tracking-tight text-paper">
                {ind.name}
              </h3>
              <p className="text-xs text-paper/70">{ind.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ─────────────── TRUSTED BY ─────────────── */

function TrustedBy() {
  return (
    <section className="border-y border-rule bg-white py-20">
      <div className="container-page">
        <span className="mono mb-4 block text-center text-[10px] uppercase tracking-widest text-ink/40">
          (16) Built for Healthcare Credibility
        </span>
        <h2 className="mx-auto mb-10 max-w-2xl text-balance text-center text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
          Trusted by healthcare and senior-care operators.
        </h2>

        <div className="mb-12 grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-3">
          {trustPillars.map((p) => (
            <div key={p.code} className="flex flex-col gap-3 bg-paper p-6 text-center">
              <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                {p.code}
              </span>
              <h3 className="text-base font-extrabold uppercase tracking-tight">
                {p.name}
              </h3>
              <p className="text-sm text-ink/60">{p.detail}</p>
            </div>
          ))}
        </div>

        <p className="mono mb-8 text-center text-[10px] uppercase tracking-[0.3em] text-ink/40">
          4.9 / 5 from 200+ facility partners
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-6 opacity-70">
          {trustedBy.map((name) => (
            <span
              key={name}
              className="text-lg font-extrabold uppercase tracking-tight text-ink/45"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── VIDEO ─────────────── */

function VideoSection() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mb-10 max-w-3xl">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          (17) Showreel
        </span>
        <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          Modern growth systems for senior care facilities.
        </h2>
        <p className="mt-4 max-w-xl text-ink/65">
          See how OccupiaCare transforms occupancy, admissions, and family trust
          across the network.
        </p>
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
          <span className="mono text-[10px] uppercase tracking-widest text-paper/50">
            OCCUPIACARE · Reel 2026
          </span>
          <span className="mono text-[10px] uppercase tracking-widest text-paper/50">
            HIPAA-conscious
          </span>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── ABOUT PREVIEW ─────────────── */

function AboutPreview() {
  return (
    <section className="border-y border-rule bg-bone py-24 md:py-28">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            (18) About OccupiaCare
          </span>
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            A healthcare growth and automation company.
          </h2>
        </div>
        <div className="md:col-span-7">
          <p className="max-w-2xl text-pretty text-lg text-ink/70">
            We build modern admissions infrastructure for senior care facilities
            across the USA — combining AI-powered systems, HIPAA-conscious
            architecture, and proven occupancy growth playbooks under one roof.
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-8 gap-y-3 text-sm text-ink/70">
            <li>— AI-powered admissions systems</li>
            <li>— HIPAA-conscious architecture</li>
            <li>— Occupancy growth playbooks</li>
            <li>— Admissions automation</li>
            <li>— Healthcare trust systems</li>
            <li>— Multi-facility operations</li>
          </ul>
          <Link
            to="/about"
            className="mono group mt-8 inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-[11px] font-bold uppercase tracking-widest"
          >
            Meet the team
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────── FINAL CTA ─────────────── */

function FinalCTA() {
  return (
    <section className="container-page py-32 text-center md:py-40">
      <span className="mono mb-6 block text-[10px] uppercase tracking-widest text-clinical">
        (19) Ready to scale resident acquisition
      </span>
      <h2 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
        Operationalize occupancy growth.
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-pretty text-ink/60">
        Book a private strategy session to map your occupancy gaps and build
        your 90-day growth plan. We accept a limited number of operator partners
        each quarter.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
        <Link
          to="/about"
          className="mono bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical"
        >
          Book Growth Consultation
        </Link>
        <Link
          to="/services"
          className="mono border border-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-ink hover:bg-bone"
        >
          Browse Services
        </Link>
      </div>
    </section>
  );
}

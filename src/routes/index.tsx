import { createFileRoute, Link } from "@tanstack/react-router";
import {
  services,
  caseStudies,
  industries,
  trustedBy,
  processSteps,
} from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valence — Growth Engineering for Healthcare Operators" },
      {
        name: "description",
        content:
          "Precision infrastructure, paid acquisition, clinical SEO, and AI command systems for healthcare and senior-care operators.",
      },
      { property: "og:title", content: "Valence — Growth Engineering for Healthcare Operators" },
      {
        property: "og:description",
        content:
          "We deploy precision infrastructure and AI-driven intake systems for senior care and healthcare enterprises.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSolution />
      <Process />
      <Results />
      <CaseStudiesPreview />
      <ServicesPreview />
      <IndustriesSection />
      <TrustedBy />
      <ReadyToScale />
    </>
  );
}

function Hero() {
  return (
    <section className="container-page animate-reveal pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="max-w-5xl">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-clinical/15 bg-clinical/5 px-3 py-1">
          <span className="size-1.5 animate-pulse rounded-full bg-clinical" />
          <span className="mono text-[10px] uppercase tracking-widest text-clinical">
            Q3 Capacity · 2 Operator Slots Open
          </span>
        </div>
        <h1 className="text-balance text-5xl font-extrabold uppercase leading-[0.92] tracking-tight md:text-8xl">
          Growth for the <span className="text-clinical">Clinical</span> Operator.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/65 md:text-xl">
          Valence is a growth engineering studio for healthcare and senior-care
          operators. We install paid acquisition, clinical SEO, intake
          infrastructure, and AI command systems — wired together as one census engine.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-3">
          <Link
            to="/case-studies"
            className="mono bg-ink px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-paper transition-colors hover:bg-clinical"
          >
            View Outcomes
          </Link>
          <Link
            to="/services"
            className="mono inline-flex items-center gap-2 border border-ink/15 bg-white px-6 py-3.5 text-[11px] font-bold uppercase tracking-widest text-ink transition-colors hover:border-ink"
          >
            How the system works
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

function ProblemSolution() {
  return (
    <section className="grid border-y border-rule md:grid-cols-2">
      <div className="border-b border-rule bg-white/60 p-10 md:border-b-0 md:border-r md:p-16 lg:p-20">
        <span className="mono mb-10 block text-[10px] uppercase tracking-widest text-ink/40">
          (01) The Honest Truth
        </span>
        <h2 className="mb-6 text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          The industry runs on fragmented intake.
        </h2>
        <p className="mb-6 max-w-md leading-relaxed text-ink/65">
          Most operators are bleeding occupancy through leaky funnels, siloed
          tools, and SEO built for a search era that no longer exists. When
          marketing doesn't talk to clinical intake, demand walks to faster,
          less-capable competitors.
        </p>
        <Link
          to="/problem"
          className="mono group inline-flex items-center gap-2 border-b-2 border-ink pb-1 text-[11px] font-bold uppercase tracking-widest"
        >
          Read the full breakdown
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
      <div className="bg-clinical p-10 text-paper md:p-16 lg:p-20">
        <span className="mono mb-10 block text-[10px] uppercase tracking-widest text-paper/50">
          (02) The Protocol
        </span>
        <h2 className="mb-6 text-balance text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          One census engine. Four integrated systems.
        </h2>
        <p className="mb-6 max-w-md leading-relaxed text-paper/75">
          We install a unified acquisition stack: search authority, paid media,
          intake infrastructure, and AI agents — supervised by your team and
          tied to a single source of truth on bed availability.
        </p>
        <Link
          to="/solution"
          className="mono group inline-flex items-center gap-2 border-b-2 border-paper pb-1 text-[11px] font-bold uppercase tracking-widest"
        >
          See the system overview
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
            Why Facilities Hire Us
          </span>
          <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            A four-stage operating model.
          </h2>
        </div>
        <p className="max-w-sm text-sm text-ink/60">
          We work the same way every quarter, regardless of channel mix — so
          your team always knows what's next.
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

function Results() {
  const numbers = [
    { v: "$42M", l: "Attributed Revenue" },
    { v: "+114%", l: "Lead Velocity" },
    { v: "14 s", l: "Intake Response" },
    { v: "92/100", l: "Market Share Rank" },
  ];
  return (
    <section className="bg-ink py-20 text-paper">
      <div className="container-page">
        <span className="mono mb-10 block text-[10px] uppercase tracking-widest text-paper/40">
          Outcomes · Trailing 12 months
        </span>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4 md:gap-12">
          {numbers.map((n) => (
            <div key={n.l} className="flex flex-col gap-2">
              <span className="text-5xl font-extrabold tracking-tighter md:text-6xl">
                {n.v}
              </span>
              <span className="mono text-[10px] uppercase tracking-widest text-paper/45">
                {n.l}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudiesPreview() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mb-16 flex items-end justify-between border-b border-rule pb-6">
        <h2 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
          Case Files
        </h2>
        <Link
          to="/case-studies"
          className="mono text-[11px] uppercase tracking-widest text-ink/60 hover:text-clinical"
        >
          View all →
        </Link>
      </div>
      <div className="grid gap-12 md:grid-cols-2">
        {caseStudies.slice(0, 2).map((cs) => (
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

function ServicesPreview() {
  return (
    <section className="border-y border-rule bg-bone py-24 md:py-32">
      <div className="container-page">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
            Four integrated services. One operating system.
          </h2>
          <Link
            to="/services"
            className="mono text-[11px] uppercase tracking-widest text-ink/60 hover:text-clinical"
          >
            All services →
          </Link>
        </div>
        <div className="grid gap-px overflow-hidden border border-rule bg-rule md:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group flex flex-col justify-between gap-12 bg-paper p-8 transition-colors hover:bg-white md:p-12"
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
      </div>
    </section>
  );
}

function IndustriesSection() {
  return (
    <section className="container-page py-24 md:py-32">
      <div className="mb-12 max-w-2xl">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          Industries We Serve
        </span>
        <h2 className="text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
          Vertical-specific expertise for complex care models.
        </h2>
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
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
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

function TrustedBy() {
  return (
    <section className="border-y border-rule bg-white py-16">
      <div className="container-page">
        <p className="mono mb-10 text-center text-[10px] uppercase tracking-[0.3em] text-ink/40">
          Trusted by Healthcare & Senior-Care Operators
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

function ReadyToScale() {
  return (
    <section className="container-page py-32 text-center md:py-40">
      <span className="mono mb-6 block text-[10px] uppercase tracking-widest text-clinical">
        Ready to Scale Resident Census
      </span>
      <h2 className="mx-auto max-w-3xl text-balance text-4xl font-extrabold uppercase tracking-tight md:text-6xl">
        Operationalize growth.
      </h2>
      <p className="mx-auto mt-6 max-w-xl text-pretty text-ink/60">
        We accept a limited number of operator partners each quarter to ensure
        clinical-grade focus. Tell us where you're stuck.
      </p>
      <div className="mt-10 flex flex-col items-center justify-center gap-3 md:flex-row">
        <Link
          to="/about"
          className="mono bg-ink px-7 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical"
        >
          Request a Strategy Briefing
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

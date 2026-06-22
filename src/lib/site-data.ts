import caseMeridian from "@/assets/case-meridian.jpg";
import caseSolstice from "@/assets/case-solstice.jpg";
import casePathway from "@/assets/case-pathway.jpg";
import indSenior from "@/assets/industry-senior.jpg";
import indMemory from "@/assets/industry-memory.jpg";
import indBehavioral from "@/assets/industry-behavioral.jpg";
import indPostAcute from "@/assets/industry-postacute.jpg";

export type Service = {
  slug: string;
  code: string;
  name: string;
  tagline: string;
  summary: string;
  details: string[];
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "paid-acquisition",
    code: "S/01",
    name: "Paid Acquisition",
    tagline: "Performance media engineered for high-acuity intake.",
    summary:
      "Search, social, and programmatic campaigns calibrated to inquiry quality — not vanity volume.",
    details: [
      "Geo-fenced campaigns aligned to your service radius and bed availability.",
      "Creative tested against compliance guardrails for HIPAA-sensitive verticals.",
      "Bid models tuned weekly against downstream census conversion, not form fills.",
    ],
    deliverables: [
      "Cross-channel media plan",
      "Creative + landing system",
      "Weekly performance review",
      "Attribution dashboard",
    ],
  },
  {
    slug: "clinical-seo",
    code: "S/02",
    name: "Clinical SEO",
    tagline: "Semantic authority across the queries that drive admissions.",
    summary:
      "Technical, content, and location SEO built for the searches families actually make under pressure.",
    details: [
      "Topical authority mapped to clinical decision journeys, not generic keywords.",
      "Location pages and schema for multi-facility operators.",
      "Editorial calendar reviewed by clinicians for accuracy and tone.",
    ],
    deliverables: [
      "Authority + technical audit",
      "Programmatic location pages",
      "Editorial pipeline",
      "Quarterly SERP review",
    ],
  },
  {
    slug: "intake-infrastructure",
    code: "S/03",
    name: "Intake Infrastructure",
    tagline: "The plumbing between a click and an admission.",
    summary:
      "CRM, routing, and reporting infrastructure that closes the loop between marketing and clinical intake.",
    details: [
      "Lead routing rules tied to bed availability, payer mix, and acuity.",
      "Source-of-truth reporting across paid, organic, and referral pipelines.",
      "Integrations with your EHR, CRM, and dialer of record.",
    ],
    deliverables: [
      "Routing + scoring model",
      "Unified reporting layer",
      "Stakeholder dashboards",
      "Documented SOPs",
    ],
  },
  {
    slug: "ai-command",
    code: "S/04",
    name: "AI Command System",
    tagline: "Voice and chat agents for round-the-clock intake.",
    summary:
      "AI agents that qualify, triage, and book — supervised by your intake team, not replacing them.",
    details: [
      "Voice + chat agents with clinical guardrails and human escalation paths.",
      "Continuous quality review against recorded calls and chat transcripts.",
      "Live dashboards on response time, conversion, and triage accuracy.",
    ],
    deliverables: [
      "Agent design + prompts",
      "Escalation + QA loop",
      "Live operations dashboard",
      "Monthly model review",
    ],
  },
];

export type CaseStudy = {
  slug: string;
  code: string;
  client: string;
  vertical: string;
  headline: string;
  summary: string;
  hero: string;
  metrics: { label: string; value: string }[];
  problem: string;
  approach: string[];
  outcome: string;
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "meridian-group",
    code: "CS/01",
    client: "The Meridian Group",
    vertical: "Senior Living · Multi-state",
    headline:
      "Scaling high-acuity assisted living through semantic search infrastructure.",
    summary:
      "Unified 14 facility websites into a single authority engine and rebuilt intake routing around bed availability.",
    hero: caseMeridian,
    metrics: [
      { label: "ROI Index", value: "12.4×" },
      { label: "Qualified Inquiries", value: "+186%" },
      { label: "Cost per Move-in", value: "−42%" },
    ],
    problem:
      "Fourteen facilities ran fourteen disconnected funnels. Paid spend overlapped with organic, intake teams routed by region rather than acuity, and reporting was reconciled in spreadsheets every Friday.",
    approach: [
      "Consolidated location architecture under a single authority domain with per-facility programmatic pages.",
      "Rebuilt the lead routing model around real-time bed availability and payer mix.",
      "Stood up an attribution layer that traces every move-in back to first touch.",
    ],
    outcome:
      "Within two quarters, qualified inquiries rose 186% while blended cost per move-in fell 42%. The intake team now operates from a single live dashboard.",
  },
  {
    slug: "solstice-healthcare",
    code: "CS/02",
    client: "Solstice Healthcare",
    vertical: "Multi-state Surgical · Post-acute",
    headline:
      "Deploying an AI-first triage system across 22 surgical centers.",
    summary:
      "Voice and chat agents handle first-touch qualification 24/7, escalating clinical edge cases to humans within 90 seconds.",
    hero: caseSolstice,
    metrics: [
      { label: "Conversion", value: "+220%" },
      { label: "After-hours Capture", value: "+311%" },
      { label: "First Response", value: "14 s" },
    ],
    problem:
      "Two-thirds of inbound inquiries arrived after business hours and went to voicemail. Conversion was held back not by demand, but by latency.",
    approach: [
      "Designed bilingual voice + chat agents with clinical guardrails and explicit escalation paths.",
      "Wired the agent into the existing CRM and scheduling system with full call recording for QA.",
      "Stood up a weekly review loop with intake supervisors to tune prompts and triage rules.",
    ],
    outcome:
      "After-hours capture tripled, overall conversion rose 220%, and the intake team gained a clean queue of pre-qualified inquiries each morning.",
  },
  {
    slug: "pathway-rehabilitation",
    code: "CS/03",
    client: "Pathway Rehabilitation",
    vertical: "Skilled Nursing · Rehab",
    headline:
      "Reclaiming organic authority in a saturated rehab market.",
    summary:
      "A clinician-reviewed editorial program and location overhaul lifted organic admissions ahead of paid for the first time.",
    hero: casePathway,
    metrics: [
      { label: "Organic Sessions", value: "+304%" },
      { label: "Organic Admissions", value: "+148%" },
      { label: "Top-3 Keywords", value: "412" },
    ],
    problem:
      "The brand ranked outside the top 20 for every meaningful condition-level query in its core markets, despite operating the largest network in the region.",
    approach: [
      "Mapped the clinical decision journey for stroke, orthopedic, and cardiac rehab into a topical authority model.",
      "Rebuilt every location page with structured data, clinician bios, and outcome data.",
      "Launched a clinician-reviewed editorial pipeline producing two long-form pieces per week.",
    ],
    outcome:
      "Twelve months later, organic admissions outpaced paid for the first time in the network's history.",
  },
];

export type Industry = {
  name: string;
  description: string;
  image: string;
};

export const industries: Industry[] = [
  {
    name: "Senior Living",
    description: "Independent, assisted, and continuing-care communities.",
    image: indSenior,
  },
  {
    name: "Memory Care",
    description: "Specialized memory and dementia-focused facilities.",
    image: indMemory,
  },
  {
    name: "Behavioral Health",
    description: "Outpatient, residential, and IOP behavioral programs.",
    image: indBehavioral,
  },
  {
    name: "Post-Acute & Rehab",
    description: "Skilled nursing, surgical recovery, and rehab networks.",
    image: indPostAcute,
  },
];

export const trustedBy = [
  "Vanguard Health",
  "Summit Senior Living",
  "Aegis Recovery",
  "Lifespring Medical",
  "Nexus Behavioral",
  "Harbor Memory Care",
];

export const processSteps = [
  {
    code: "P/01",
    name: "Diagnostic",
    detail:
      "Two weeks of intake call audits, funnel teardown, and competitive mapping. We benchmark before we propose.",
  },
  {
    code: "P/02",
    name: "Architecture",
    detail:
      "We design the routing, reporting, and content systems before a dollar of media moves. Plumbing first.",
  },
  {
    code: "P/03",
    name: "Deployment",
    detail:
      "Paid, organic, and AI agents go live in a staged rollout, with weekly review against pre-set census targets.",
  },
  {
    code: "P/04",
    name: "Operate",
    detail:
      "Ongoing operations, monthly clinical reviews, and quarterly strategy resets with your leadership.",
  },
];

import caseMeridian from "@/assets/case-meridian.jpg";
import caseSolstice from "@/assets/case-solstice.jpg";
import casePathway from "@/assets/case-pathway.jpg";
import indSenior from "@/assets/industry-senior.jpg";
import indMemory from "@/assets/industry-memory.jpg";
import indBehavioral from "@/assets/industry-behavioral.jpg";
import indPostAcute from "@/assets/industry-postacute.jpg";

/* ───────────────────────── Brand ───────────────────────── */

export const brand = {
  name: "OccupiaCare",
  tagline: "Occupancy growth infrastructure for senior care.",
  email: "growth@occupiacare.com",
  phone: "+1 (615) 555-0142",
  hq: "Nashville, TN",
};

/* ───────────────────────── Hero ───────────────────────── */

export const heroMetrics = [
  { value: "+38%", label: "Avg. Occupancy Lift" },
  { value: "24/7", label: "AI-Qualified Inquiries" },
  { value: "6×", label: "Faster Tour Booking" },
  { value: "100%", label: "HIPAA-Conscious Stack" },
];

/* ───────────────────────── Who we work with ───────────────────────── */

export const operatorTypes = [
  "Nursing Homes",
  "Assisted Living",
  "Independent Living",
  "Rehabilitation Centers",
  "Skilled Nursing",
  "Memory Care",
  "Senior Living Communities",
  "Personal Care Facilities",
];

/* ───────────────────────── Trust ───────────────────────── */

export const trustPillars = [
  {
    code: "T/01",
    name: "HIPAA-Conscious Marketing",
    detail: "Every campaign, form, and integration audited for PHI exposure.",
  },
  {
    code: "T/02",
    name: "Trusted Growth Partner",
    detail: "Long-term operator partnerships, not one-off retainer churn.",
  },
  {
    code: "T/03",
    name: "Reputation Systems",
    detail: "Structured review generation and monitoring across every facility.",
  },
];

export const trustedBy = [
  "Sunrise Care",
  "MapleLeaf Living",
  "Harbor Senior",
  "Evergreen Rehab",
  "Silver Oaks",
  "Heritage Memory",
  "Willow Brook",
  "BrightStar Care",
];

/* ───────────────────────── Problem ───────────────────────── */

export const coreProblems = [
  "Outdated websites that fail to convert families",
  "Poor Google visibility and weak local rankings",
  "Thin online reviews and low trust signals",
  "No structured follow-up after the first inquiry",
  "No CRM or unified lead tracking",
  "Slow inquiry response times",
  "Manual workflows across admissions",
];

export const industryRealities = [
  { group: "Revenue", items: ["Empty beds and revenue loss", "Inconsistent month-to-month occupancy"] },
  { group: "Visibility", items: ["Poor local search visibility", "Weak online reputation systems"] },
  { group: "Systems", items: ["No automation or CRM", "Lost leads due to slow follow-up"] },
  { group: "Conversion", items: ["Poor inquiry-to-tour conversion", "Inefficient admissions workflows"] },
  { group: "Operations", items: ["Staff overload and manual processes", "No analytics or attribution"] },
];

/* ───────────────────────── Services ───────────────────────── */

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
    slug: "occupancy-growth-campaigns",
    code: "S/01",
    name: "Occupancy Growth Campaigns",
    tagline: "Google + Meta media engineered for qualified family inquiries.",
    summary:
      "Geo-targeted paid acquisition built around bed availability, payer mix, and acuity — measured on move-ins, not clicks.",
    details: [
      "Facility-level campaigns aligned to service radius and current census gaps.",
      "Creative tested against compliance guardrails for senior-care audiences.",
      "Bids tuned weekly against downstream tour and move-in conversion.",
    ],
    deliverables: [
      "Cross-channel media plan",
      "Creative + landing system",
      "Weekly performance review",
      "Move-in attribution dashboard",
    ],
  },
  {
    slug: "admissions-funnel-systems",
    code: "S/02",
    name: "Admissions Funnel Systems",
    tagline: "Landing pages, capture, and routing that close the loop.",
    summary:
      "Conversion-tested landing systems plus inquiry routing rules tied to acuity and bed availability across every facility.",
    details: [
      "Facility-specific landing pages with tour booking and inquiry forms.",
      "Lead routing scored by payer mix, urgency, and care level.",
      "Tight integration with your CRM, dialer, and scheduling tools.",
    ],
    deliverables: [
      "Landing page system",
      "Routing + scoring rules",
      "CRM integration",
      "Stakeholder dashboards",
    ],
  },
  {
    slug: "senior-care-seo",
    code: "S/03",
    name: "Senior Care SEO",
    tagline: "Semantic authority across the queries families search under pressure.",
    summary:
      "Technical, content, and local SEO mapped to the decision journey families and discharge planners actually take.",
    details: [
      "Programmatic location pages for multi-facility operators.",
      "Topical authority covering condition, payer, and family-journey queries.",
      "Editorial pipeline reviewed by clinicians for accuracy and tone.",
    ],
    deliverables: [
      "Authority + technical audit",
      "Programmatic location pages",
      "Editorial pipeline",
      "Quarterly SERP review",
    ],
  },
  {
    slug: "ai-command-system",
    code: "S/04",
    name: "AI Command System",
    tagline: "Voice and chat agents for round-the-clock admissions intake.",
    summary:
      "AI agents that qualify, triage, and book tours 24/7 — supervised by your admissions team, not replacing them.",
    details: [
      "Voice + chat agents with care guardrails and clean human escalation paths.",
      "Continuous QA against recorded calls and chat transcripts.",
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

// Extended service catalog (homepage chip grid)
export const extendedServices = [
  "Occupancy Growth Campaigns",
  "Admissions Funnel Systems",
  "Local Visibility Optimization",
  "Family Trust Branding",
  "Senior Care SEO",
  "Inquiry Automation Systems",
  "Reputation & Review Management",
  "Tour Booking Funnels",
  "Family-Facing Content Systems",
  "Social Media for Senior Care",
];

/* ───────────────────────── Outcomes ───────────────────────── */

export const outcomes = [
  { code: "O/01", name: "More Resident Inquiries", detail: "Qualified family inquiries across every facility, every week." },
  { code: "O/02", name: "Higher Occupancy", detail: "Stable, predictable lift in average daily census." },
  { code: "O/03", name: "Better Online Reviews", detail: "Structured review generation across Google and Caring.com." },
  { code: "O/04", name: "Faster Lead Response", detail: "First-touch response measured in seconds, not hours." },
  { code: "O/05", name: "Increased Family Trust", detail: "Reputation, content, and tour systems that close families." },
  { code: "O/06", name: "Improved Local Rankings", detail: "Top-3 local pack presence in your priority service areas." },
];

/* ───────────────────────── Funnel ───────────────────────── */

export const funnelStages = [
  "Ads & SEO",
  "Landing Pages",
  "Inquiry Capture",
  "Automated Follow-Up",
  "Tour Booking",
  "Admissions",
];

/* ───────────────────────── AI & Automation ───────────────────────── */

export const automationCapabilities = [
  "AI Lead Qualification",
  "AI Voice Agents",
  "AI Reception Systems",
  "AI Appointment Booking",
  "AI Follow-Up Systems",
  "CRM Automation",
  "Resident Inquiry Pipelines",
  "Automated SMS & Email",
  "Admissions Workflow Automation",
  "AI Chatbots",
  "Analytics Dashboards",
  "Reputation Monitoring",
  "Review Generation Systems",
];

export const agents = [
  { code: "A/01", name: "Inquiry Agent", detail: "Greets every family within 5 seconds, day or night." },
  { code: "A/02", name: "Qualification Agent", detail: "Scores acuity, payer, and timing against your bed availability." },
  { code: "A/03", name: "Follow-Up Agent", detail: "Multi-touch nurture across SMS, email, and voice." },
  { code: "A/04", name: "Scheduling Agent", detail: "Books tours directly into your admissions calendar." },
  { code: "A/05", name: "Conversational AI Agent", detail: "Handles complex family questions with clinical guardrails." },
  { code: "A/06", name: "Admissions Assistant", detail: "Preps your team with a full intake brief before every tour." },
];

/* ───────────────────────── Dashboard ───────────────────────── */

export const dashboardMetrics = [
  { label: "Occupancy Rate", value: "94.2%" },
  { label: "Active Inquiries", value: "186" },
  { label: "Tracked Calls", value: "1,420" },
  { label: "Tours Booked", value: "312" },
  { label: "Pipeline Stages", value: "8" },
  { label: "90-Day Growth", value: "+22%" },
];

/* ───────────────────────── Ecosystem ───────────────────────── */

export const ecosystemNodes = [
  "Ads & SEO",
  "Landing Pages",
  "Inquiry Capture",
  "AI Qualification",
  "CRM",
  "Follow-Up",
  "Tour Scheduling",
  "Admissions Pipeline",
  "Occupancy Growth",
];

/* ───────────────────────── Infrastructure ───────────────────────── */

export const infrastructure = [
  "Custom Healthcare Websites",
  "Landing Page Systems",
  "CRM Integrations (HubSpot, Salesforce)",
  "HIPAA-Conscious Architecture",
  "Facility Dashboards",
  "Inquiry Portals",
  "Analytics Infrastructure",
  "Automation Backends",
  "Staff Workflow Systems",
  "API Integrations",
];

/* ───────────────────────── Case studies ───────────────────────── */

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
    slug: "meridian-assisted-living",
    code: "CS/01",
    client: "Meridian Assisted Living",
    vertical: "Assisted Living · 14 facilities",
    headline:
      "Doubling qualified inquiries and lifting occupancy across 14 communities.",
    summary:
      "Unified facility websites under one authority engine and rebuilt intake routing around real-time bed availability.",
    hero: caseMeridian,
    metrics: [
      { label: "Qualified Inquiries", value: "+184%" },
      { label: "Occupancy", value: "+31%" },
      { label: "Cost / Move-in", value: "−42%" },
    ],
    problem:
      "Fourteen facilities ran fourteen disconnected funnels. Paid spend overlapped with organic, intake teams routed by region rather than acuity, and reporting was reconciled in spreadsheets every Friday.",
    approach: [
      "Consolidated location architecture under a single authority domain with per-facility programmatic pages.",
      "Rebuilt lead routing around real-time bed availability and payer mix.",
      "Stood up an attribution layer that traces every move-in back to first touch.",
    ],
    outcome:
      "Within two quarters, qualified inquiries rose 184% and occupancy lifted 31% across the network. The intake team now operates from a single live dashboard.",
  },
  {
    slug: "solstice-memory-care",
    code: "CS/02",
    client: "Solstice Memory Care",
    vertical: "Memory Care · Multi-state",
    headline:
      "24/7 AI inquiry handling that grew tour volume by 68%.",
    summary:
      "Voice and chat agents handle first-touch family qualification around the clock, with clinical escalation in under 90 seconds.",
    hero: caseSolstice,
    metrics: [
      { label: "Tour Volume", value: "+68%" },
      { label: "After-hours Capture", value: "+311%" },
      { label: "First Response", value: "14 s" },
    ],
    problem:
      "Two-thirds of inbound family inquiries arrived after business hours and went to voicemail. Conversion was held back not by demand, but by latency.",
    approach: [
      "Designed bilingual voice + chat agents tuned for memory-care family conversations.",
      "Wired the agents into the existing CRM and scheduling system with full call recording.",
      "Stood up a weekly review loop with admissions supervisors to refine prompts.",
    ],
    outcome:
      "After-hours capture tripled, tour volume rose 68%, and admissions teams gained a clean queue of pre-qualified families each morning.",
  },
  {
    slug: "pathway-rehab",
    code: "CS/03",
    client: "Pathway Rehabilitation",
    vertical: "Rehab Center · Regional network",
    headline:
      "Top-3 local rankings and a 46% drop in cost per inquiry.",
    summary:
      "A clinician-reviewed editorial program plus a location overhaul lifted organic admissions ahead of paid for the first time.",
    hero: casePathway,
    metrics: [
      { label: "Local Ranking", value: "Top 3" },
      { label: "Cost / Inquiry", value: "−46%" },
      { label: "Organic Admissions", value: "+148%" },
    ],
    problem:
      "The network ranked outside the top 20 for every condition-level query in its core markets, despite operating the largest rehab footprint in the region.",
    approach: [
      "Mapped the clinical decision journey for stroke, orthopedic, and cardiac rehab into a topical authority model.",
      "Rebuilt every location page with structured data, clinician bios, and outcome data.",
      "Launched a clinician-reviewed editorial pipeline producing two long-form pieces per week.",
    ],
    outcome:
      "Twelve months later, organic admissions outpaced paid for the first time, and cost per inquiry fell by 46%.",
  },
  {
    slug: "evergreen-senior-living",
    code: "CS/04",
    client: "Evergreen Senior Living",
    vertical: "Senior Living Community",
    headline:
      "96.4% sustained occupancy with a 3.8× conversion lift.",
    summary:
      "A unified admissions infrastructure plus structured reputation systems closed the gap between marketing and move-in.",
    hero: caseMeridian,
    metrics: [
      { label: "Occupancy", value: "96.4%" },
      { label: "Conversion Rate", value: "3.8×" },
      { label: "Reputation Score", value: "4.9 ★" },
    ],
    problem:
      "Occupancy fluctuated season to season. Reviews were inconsistent, follow-up was manual, and the marketing team had no visibility into the admissions pipeline.",
    approach: [
      "Installed an automated review generation and monitoring program across every community.",
      "Rebuilt the inquiry-to-tour follow-up cadence with AI-assisted SMS and email.",
      "Connected every channel into a single admissions pipeline dashboard.",
    ],
    outcome:
      "Occupancy stabilized at 96.4%, conversion improved 3.8×, and the reputation score climbed to a 4.9 average across the network.",
  },
];

/* ───────────────────────── Industries ───────────────────────── */

export type Industry = { name: string; description: string; image: string };

export const industries: Industry[] = [
  { name: "Senior Living", description: "Independent, assisted, and continuing-care communities.", image: indSenior },
  { name: "Memory Care", description: "Specialized memory and dementia-focused facilities.", image: indMemory },
  { name: "Rehabilitation", description: "Stroke, orthopedic, and cardiac rehab networks.", image: indBehavioral },
  { name: "Skilled Nursing", description: "Post-acute, skilled nursing, and recovery centers.", image: indPostAcute },
];

/* ───────────────────────── Process ───────────────────────── */

export const processSteps = [
  { code: "P/01", name: "Strategy & Audit", detail: "Two weeks of intake call audits, funnel teardown, and competitive mapping." },
  { code: "P/02", name: "Growth Plan", detail: "Routing, reporting, and content architecture designed before media moves." },
  { code: "P/03", name: "Execution", detail: "Paid, organic, and AI agents go live in a staged rollout against census targets." },
  { code: "P/04", name: "Optimization & Scaling", detail: "Monthly clinical review, quarterly strategy resets with your leadership." },
];

/* ───────────────────────── Results ───────────────────────── */

export const headlineResults = [
  { value: "+38%", label: "Avg Occupancy Increase" },
  { value: "4,200+", label: "Qualified Inquiries Generated" },
  { value: "92%", label: "Local Ranking Improvement" },
  { value: "4.9★", label: "Average Reputation Score" },
  { value: "3.5×", label: "Conversion Rate Increase" },
];

/* ───────────────────────── Testimonials ───────────────────────── */

export const testimonials = [
  {
    quote:
      "OccupiaCare rebuilt our admissions stack from the inquiry form to the move-in dashboard. Occupancy stopped fluctuating.",
    name: "Diane Carver",
    role: "VP Operations, Meridian",
  },
  {
    quote:
      "Their AI voice agent picks up at 2 a.m. and books tours before our team gets in. That alone paid for the engagement.",
    name: "Marcus Reyes",
    role: "Director of Admissions, Solstice",
  },
  {
    quote:
      "We finally have one dashboard instead of seven spreadsheets. Every inquiry traces to the dollar that drove it.",
    name: "Priya Anand",
    role: "CMO, Pathway Rehabilitation",
  },
];

/* ───────────────────────── Team ───────────────────────── */

export const team = [
  { name: "Avery Holloway", role: "CEO" },
  { name: "Jordan Pak", role: "Growth Strategist" },
  { name: "Riya Patel", role: "Performance Marketer" },
  { name: "Lucas Moreau", role: "Creative Director" },
  { name: "Sasha Bennett", role: "Client Success Lead" },
];

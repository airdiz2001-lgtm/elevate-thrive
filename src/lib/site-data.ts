import caseMeridian from "@/assets/case-meridian.jpg";
import caseSolstice from "@/assets/case-solstice.jpg";
import casePathway from "@/assets/case-pathway.jpg";
import indSenior from "@/assets/industry-senior.jpg";
import indMemory from "@/assets/industry-memory.jpg";
import indBehavioral from "@/assets/industry-behavioral.jpg";
import indPostAcute from "@/assets/industry-postacute.jpg";
import indNursing from "@/assets/industry-nursing.jpg";
import indIndependent from "@/assets/industry-independent.jpg";
import indPersonal from "@/assets/industry-personal-care.jpg";
import indCommunity from "@/assets/industry-senior-community.jpg";
import founderImg from "@/assets/founder-ad-danish.jpg";
import solReviews from "@/assets/sol-reviews.jpg";
import solFacility from "@/assets/sol-facility.jpg";
import solAds from "@/assets/sol-ads.jpg";
import solSeo from "@/assets/sol-seo.jpg";
import solAutomation from "@/assets/sol-automation.jpg";
import solAdmissions from "@/assets/sol-admissions.jpg";
import teamHassan from "@/assets/team-hassan.jpg";
import teamAdam from "@/assets/team-adam.jpg";
import teamJade from "@/assets/team-jade.jpg";
import teamAisha from "@/assets/team-aisha.jpg";
import teamSami from "@/assets/team-sami.jpg";
import caseHappy from "@/assets/case-happy-residents.jpg";

/* Re-export image used on case detail pages */
export { caseHappy };

/* Ecosystem visual tiles for solution hero (6 box) */
export const ecosystemBoxes = [
  { name: "Reviews", image: solReviews, detail: "Family trust & 5-star reputation systems." },
  { name: "Facility", image: solFacility, detail: "Premium digital presence for every community." },
  { name: "Ads", image: solAds, detail: "Performance media engineered for occupancy." },
  { name: "SEO", image: solSeo, detail: "Top-rank for high-intent local search." },
  { name: "Automation + CRM", image: solAutomation, detail: "Instant follow-up, scored pipeline, zero leaks." },
  { name: "Admissions", image: solAdmissions, detail: "Warm hand-off from inquiry to move-in." },
];

/* Homepage facility stats strip */
export const facilityStats = [
  { value: "25+", label: "Facilities Served" },
  { value: "1000s", label: "Smiling Residents Admitted" },
  { value: "$10M+", label: "Annualized Revenue Influenced" },
  { value: "3", label: "Continents Operating" },
];

/* Brand */
export const brand = {
  name: "OccupiaCare",
  tagline: "Occupancy growth infrastructure for senior care.",
  email: "growth@occupiacare.com",
  phone: "+1 (615) 555-0142",
  hq: "Nashville, TN",
};

export const founder = {
  name: "Ad Danish",
  title: "Founder & CEO",
  image: founderImg,
  quote: "Occupancy should be predictable, not seasonal.",
  long: "Most senior care communities don't have a demand problem — they have a visibility and follow-up problem. OccupiaCare was built to fix both.",
};

/* Hero */
export const heroMetrics = [
  { value: "+38%", label: "Avg. Occupancy Lift" },
  { value: "24/7", label: "AI-Qualified Inquiries" },
  { value: "6×", label: "Faster Tour Booking" },
  { value: "90%+", label: "Lead Response Rate" },
  { value: "100%", label: "CRM Visibility" },
];

/* Micro impact (About snapshot) */
export const aboutMicro = [
  { value: "+200%", label: "Avg Inquiry Growth" },
  { value: "90%+", label: "Occupancy Maintained" },
  { value: "−25 to −40%", label: "Cost per Move-In" },
];

/* Operator chips */
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

/* ───────── PROBLEM — Homepage (compact, 5 cards) ───────── */
export const coreProblemsHome = [
  { icon: "website", title: "Outdated Websites", detail: "Slow, low-trust, weak conversion." },
  { icon: "search", title: "Poor Google Visibility", detail: "Competitors own the local map pack." },
  { icon: "star", title: "Weak Online Reviews", detail: "Limited social proof hurts admissions." },
  { icon: "phone", title: "No Lead Follow-Up", detail: "Family inquiries left unanswered." },
  { icon: "database", title: "No CRM or Automation", detail: "Scattered notes, manual workflows." },
];

/* Problem page — full 8 challenges */
export const coreGrowthBarriers = [
  { icon: "website", title: "Outdated Websites", points: ["Slow loading speeds", "Poor user experience", "Low trust and conversion rates"] },
  { icon: "search", title: "Poor Google Visibility", points: ["Not appearing in local searches", "Competitors dominating maps"] },
  { icon: "star", title: "Weak Online Reviews", points: ["Limited social proof", "Negative or outdated reputation"] },
  { icon: "phone", title: "No Lead Follow-Up", points: ["Family inquiries left unanswered", "Lost opportunities from delays"] },
  { icon: "database", title: "No CRM System", points: ["Inquiries scattered across tools", "No centralized admissions"] },
  { icon: "clock", title: "Slow Inquiry Response", points: ["Families decide quickly", "Delays lose move-ins"] },
  { icon: "bot", title: "Lack of Automation", points: ["Manual reminders and follow-ups", "Increased staff workload"] },
  { icon: "palette", title: "Inconsistent Branding", points: ["Mixed messaging across channels", "Reduced family trust"] },
];

/* Industry Reality — 5 categories with icons */
export const industryRealityGroups = [
  {
    group: "Revenue & Occupancy",
    icon: "bed",
    items: ["Empty Beds", "Low Occupancy", "Lost Leads", "Poor Conversion Rates", "Low-Quality Inquiries"],
  },
  {
    group: "Marketing & Visibility",
    icon: "mega",
    items: ["Poor Online Visibility", "Weak Google Rankings", "Weak Social Presence", "Inconsistent Branding", "Weak Reviews"],
  },
  {
    group: "Website & Digital Experience",
    icon: "monitor",
    items: ["Outdated Websites", "Poor Family Trust", "No Lead Tracking", "No Analytics"],
  },
  {
    group: "Admissions & Sales Process",
    icon: "clipboard",
    items: ["Slow Inquiry Response", "Inefficient Admissions", "No CRM Systems", "No Automation"],
  },
  {
    group: "Operational",
    icon: "stethoscope",
    items: ["Manual Operations", "Staff Overwhelm"],
  },
];

/* ───────── SOLUTION ───────── */
export const solutionMetrics = [
  { value: "+38%", label: "Occupancy Lift" },
  { value: "24/7", label: "AI Inquiry Handling" },
  { value: "6×", label: "Faster Tour Booking" },
  { value: "90%+", label: "Lead Response Rate" },
  { value: "100%", label: "CRM Visibility" },
];

export const solutionGrid = [
  { icon: "target", title: "Occupancy Growth Campaigns", detail: "Meta + Google Ads engineered to fill beds with qualified families." },
  { icon: "pin", title: "Local Visibility Optimization", detail: "Dominate Google Maps and \"near me\" searches in your area." },
  { icon: "spark", title: "Resident Inquiry Automation", detail: "Instant SMS, email, and call follow-ups within seconds." },
  { icon: "star", title: "Reputation & Reviews", detail: "Systematic 5-star review generation across platforms." },
  { icon: "calendar", title: "Tour Booking Funnels", detail: "Self-serve scheduling booked directly into calendars." },
  { icon: "trendUp", title: "Senior Care SEO", detail: "Rank for high-intent healthcare and care-related searches." },
  { icon: "shield", title: "Family Trust Branding", detail: "Premium identity that builds instant family confidence." },
  { icon: "doc", title: "Family-Facing Content", detail: "Educational content that increases trust before contact." },
  { icon: "share", title: "Social Media for Senior Care", detail: "Consistent, compliant presence reinforcing credibility." },
  { icon: "funnel", title: "Admissions Funnel Systems", detail: "End-to-end journey from first click to move-in." },
];

export const miniFunnel = ["Ads", "Website", "Inquiry", "AI Follow-Up", "Tour", "Admission"];

/* AI Layer */
export const aiInfrastructure = [
  "AI Lead Qualification",
  "AI Voice Agents",
  "AI Chatbots",
  "AI Scheduling Agents",
  "AI Follow-Up Engine",
  "AI Analytics Dashboard",
  "AI Review Engine",
  "AI CRM Automation",
  "AI Workflow Automation",
  "AI Admissions Assistant",
];

export const agents = [
  { code: "A/01", name: "Inquiry Agent", detail: "Captures every inquiry, converts visitors into leads.", impact: "+72% engagement lift" },
  { code: "A/02", name: "Qualification Agent", detail: "Scores acuity, payer, and timing in real time.", impact: "+58% qualified tours" },
  { code: "A/03", name: "Follow-Up Agent", detail: "Multi-touch nurture across SMS, email, and voice.", impact: "−41% drop-off" },
  { code: "A/04", name: "Scheduling Agent", detail: "Books tours directly into admissions calendars.", impact: "6× faster booking" },
  { code: "A/05", name: "Conversational AI", detail: "Handles complex family questions with guardrails.", impact: "24/7 coverage" },
  { code: "A/06", name: "Admissions Assistant", detail: "Preps your team with a full intake brief.", impact: "−63% prep time" },
];

export const funnelFull = [
  "Ads & SEO",
  "Landing Pages",
  "Inquiry Capture",
  "AI Qualification",
  "CRM Pipeline",
  "Automated Follow-Up",
  "Tour Scheduling",
  "Admissions",
  "Occupancy Growth",
];

export const dashboardMetrics = [
  { label: "Occupancy Rate", value: "94.2%" },
  { label: "Active Inquiries", value: "186" },
  { label: "Tracked Calls", value: "1,420" },
  { label: "Tours Booked", value: "312" },
  { label: "Conversion Rate", value: "38.4%" },
  { label: "90-Day Growth", value: "+22%" },
];

export const infrastructureCols = [
  { title: "Websites", items: ["Healthcare websites", "Landing pages", "Inquiry portals"] },
  { title: "Systems", items: ["CRM integration", "Workflow automation", "Dashboards"] },
  { title: "AI + APIs", items: ["AI integration", "API connections", "Backend automation"] },
];

/* ───────── Services (still used for /services routes) ───────── */
export type Service = {
  slug: string; code: string; name: string; tagline: string; summary: string;
  details: string[]; deliverables: string[];
};
export const services: Service[] = [
  {
    slug: "occupancy-growth-campaigns", code: "S/01", name: "Occupancy Growth Campaigns",
    tagline: "Google + Meta media engineered for qualified family inquiries.",
    summary: "Geo-targeted paid acquisition built around bed availability, payer mix, and acuity — measured on move-ins, not clicks.",
    details: ["Facility-level campaigns aligned to current census gaps.", "Creative tested against compliance guardrails.", "Bids tuned weekly against tour and move-in conversion."],
    deliverables: ["Cross-channel media plan", "Creative + landing system", "Weekly performance review", "Move-in attribution"],
  },
  {
    slug: "admissions-funnel-systems", code: "S/02", name: "Admissions Funnel Systems",
    tagline: "Landing pages, capture, and routing that close the loop.",
    summary: "Conversion-tested landing systems plus inquiry routing tied to acuity and bed availability.",
    details: ["Facility-specific landing pages with tour booking.", "Lead routing scored by payer mix and urgency.", "CRM, dialer, and scheduling integration."],
    deliverables: ["Landing page system", "Routing rules", "CRM integration", "Dashboards"],
  },
  {
    slug: "senior-care-seo", code: "S/03", name: "Senior Care SEO",
    tagline: "Authority across queries families search under pressure.",
    summary: "Technical, content, and local SEO mapped to the actual family decision journey.",
    details: ["Programmatic location pages for multi-facility operators.", "Topical authority on condition and payer queries.", "Clinician-reviewed editorial pipeline."],
    deliverables: ["Audit", "Programmatic pages", "Editorial pipeline", "Quarterly SERP review"],
  },
  {
    slug: "ai-command-system", code: "S/04", name: "AI Command System",
    tagline: "Voice and chat agents for 24/7 admissions intake.",
    summary: "AI agents that qualify, triage, and book tours 24/7 — supervised by your admissions team.",
    details: ["Voice + chat agents with care guardrails.", "Continuous QA against transcripts.", "Live dashboards on response time and conversion."],
    deliverables: ["Agent design", "Escalation + QA loop", "Live dashboard", "Monthly review"],
  },
];

/* ───────── Case studies (5 detailed with rich narrative) ───────── */
export type CaseStudy = {
  slug: string; code: string; client: string; vertical: string; region: string;
  headline: string; summary: string; hero: string;
  beds?: string;
  timeframe?: string;
  profile: string[];
  metrics: { label: string; value: string }[];
  micro: { occBefore: string; occAfter: string; cprDelta: string; inquiryDelta: string };
  trend: number[];
  problem: string[];
  primaryGoal?: string;
  strategy: { title: string; items: string[] }[];
  results: string[];
  resultsDetail?: { value: string; label: string }[];
  operationalImpact?: { title: string; items: string[] };
  businessImpact?: string;
  revenueImpact: string;
  testimonial: { quote: string; attribution?: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "midwest-assisted-living", code: "CS/01",
    client: "Midwest Assisted Living Community", vertical: "Assisted Living", region: "USA",
    headline: "How an Assisted Living Community Increased Occupancy from 74% to 93% in 8 Months",
    summary: "A 120-bed Midwest community rebuilt its admissions pipeline and added $1.1M+ in annualized revenue.",
    hero: caseMeridian, beds: "120 beds", timeframe: "8 Months",
    profile: [
      "A 120-bed assisted living community located in the Midwest United States, struggling with declining occupancy despite strong reputation and excellent resident care.",
      "The facility relied heavily on referrals, local relationships, and traditional marketing. As competition increased, resident inquiries became inconsistent and occupancy dropped.",
    ],
    metrics: [
      { label: "Occupancy", value: "74% → 93%" },
      { label: "Qualified Inquiries", value: "+231%" },
      { label: "Tours Booked", value: "+184%" },
      { label: "Cost / Inquiry", value: "−37%" },
    ],
    micro: { occBefore: "74%", occAfter: "93%", cprDelta: "−37%", inquiryDelta: "+231%" },
    trend: [72, 76, 80, 84, 87, 90, 92, 93],
    problem: [
      "Occupancy declined from 74% to 68%",
      "Inconsistent monthly inquiries",
      "Website generated very few leads",
      "No lead nurturing process",
      "Long response times",
      "Poor online visibility",
    ],
    primaryGoal: "Increase occupancy while lowering resident acquisition costs.",
    strategy: [
      { title: "Paid Advertising", items: ["Meta Ads campaigns", "Google Search campaigns", "Local targeting", "Competitor targeting"] },
      { title: "Conversion Optimization", items: ["New landing pages", "Mobile-first experience", "Simplified inquiry forms", "Call tracking"] },
      { title: "Automation", items: ["Instant SMS follow-up", "Automated email nurturing", "Lead scoring", "Appointment reminders"] },
      { title: "Reporting", items: ["Occupancy dashboards", "Inquiry tracking", "Tour tracking", "ROI monitoring"] },
    ],
    results: ["Occupancy 74% → 93%", "Qualified inquiries +231%", "Tours booked +184%", "Cost per inquiry −37%", "Move-ins +41%"],
    resultsDetail: [
      { value: "+19 pts", label: "Occupancy Growth" },
      { value: "+231%", label: "Qualified Inquiries" },
      { value: "+184%", label: "Tours Booked" },
      { value: "−37%", label: "Cost / Inquiry" },
      { value: "+41%", label: "Move-Ins" },
    ],
    businessImpact: "The increase in occupancy generated an estimated additional annualized revenue of over $1.1 million while significantly reducing reliance on referrals.",
    revenueImpact: "$1.1M+ additional annualized revenue",
    testimonial: { quote: "OccupiaCare helped us build a predictable admissions pipeline. Instead of waiting for referrals, we now consistently generate qualified inquiries every month.", attribution: "Executive Director, Midwest Assisted Living Community" },
  },
  {
    slug: "memory-care-usa", code: "CS/02",
    client: "Memory Care Community", vertical: "Memory Care", region: "USA",
    headline: "How a Memory Care Facility Increased Monthly Move-Ins by 58%",
    summary: "An 80-unit memory care facility shortened family decision cycles with education + automated nurture.",
    hero: caseSolstice, beds: "80 units", timeframe: "6 Months",
    profile: [
      "An 80-unit memory care community facing growing competition from nearby facilities.",
      "Families often delayed decisions because of long consideration periods and emotional decision-making processes.",
    ],
    metrics: [
      { label: "Occupancy", value: "71% → 92%" },
      { label: "Monthly Inquiries", value: "+245%" },
      { label: "Move-Ins", value: "+58%" },
      { label: "Cost / Acquisition", value: "−32%" },
    ],
    micro: { occBefore: "71%", occAfter: "92%", cprDelta: "−32%", inquiryDelta: "+245%" },
    trend: [70, 73, 77, 82, 86, 90, 92],
    problem: ["Low occupancy", "Few family inquiries", "Poor lead follow-up", "Weak online presence"],
    primaryGoal: "Accelerate family decisions and increase qualified inquiries.",
    strategy: [
      { title: "Family-Focused Advertising", items: ["Meta + Google Search campaigns", "Caregiver-targeted creative"] },
      { title: "Education", items: ["Memory care guides", "Story-driven content"] },
      { title: "Automated Nurturing", items: ["21-day emotional nurture", "Tour reminders"] },
      { title: "CRM Implementation", items: ["Pipeline visibility", "Lead source attribution"] },
    ],
    results: ["Occupancy 71% → 92%", "Monthly inquiries +245%", "Move-ins +58%", "Tour bookings +176%"],
    resultsDetail: [
      { value: "+21 pts", label: "Occupancy" },
      { value: "+245%", label: "Inquiries" },
      { value: "+58%", label: "Move-Ins" },
      { value: "+176%", label: "Tour Bookings" },
      { value: "−32%", label: "Cost / Acquisition" },
    ],
    businessImpact: "Additional annualized revenue exceeded $950,000 with a substantially shorter family decision cycle.",
    revenueImpact: "$950K+ additional annualized revenue",
    testimonial: { quote: "Families were finally finding us online, and our team had the systems needed to convert inquiries into move-ins." },
  },
  {
    slug: "rehab-skilled-nursing", code: "CS/03",
    client: "Skilled Nursing & Rehabilitation Center", vertical: "Rehabilitation", region: "USA",
    headline: "312 Qualified Inquiries in 6 Months",
    summary: "A skilled nursing center diversified beyond hospital referrals into a measurable demand engine.",
    hero: casePathway,
    profile: [
      "A skilled nursing and rehabilitation center relied almost entirely on hospital referrals.",
      "Leadership wanted to diversify admissions sources and reduce dependency on referral networks.",
    ],
    metrics: [
      { label: "Qualified Inquiries", value: "312" },
      { label: "Occupancy", value: "78% → 95%" },
      { label: "Admissions", value: "+46%" },
      { label: "Cost / Inquiry", value: "−29%" },
    ],
    micro: { occBefore: "78%", occAfter: "95%", cprDelta: "−29%", inquiryDelta: "+312" },
    trend: [78, 81, 84, 88, 91, 95],
    problem: ["Admissions pipeline instability", "Weak digital presence", "Low search visibility", "Limited marketing attribution"],
    primaryGoal: "Diversify admissions sources and build attribution.",
    strategy: [
      { title: "Demand Generation", items: ["Google Ads", "Meta Ads", "Retargeting"] },
      { title: "Website Optimization", items: ["Landing pages", "Conversion tracking", "Live chat"] },
      { title: "Automation", items: ["SMS follow-up", "Email nurturing", "CRM workflows"] },
      { title: "Analytics", items: ["Source attribution", "Tour tracking", "Occupancy forecasting"] },
    ],
    results: ["312 qualified inquiries generated", "Occupancy 78% → 95%", "Admissions +46%", "Cost per inquiry −29%"],
    resultsDetail: [
      { value: "312", label: "Qualified Inquiries" },
      { value: "+17 pts", label: "Occupancy" },
      { value: "+46%", label: "Admissions" },
      { value: "−29%", label: "Cost / Inquiry" },
    ],
    businessImpact: "Management gained complete visibility into inquiry sources, tour bookings, conversion rates, and occupancy growth — and revenue increased substantially.",
    revenueImpact: "Material revenue lift across the network",
    testimonial: { quote: "For the first time, we could clearly see where admissions were coming from and what was driving occupancy." },
  },
  {
    slug: "sydney-assisted-living", code: "CS/04",
    client: "Sydney Assisted Living Community", vertical: "Assisted Living", region: "Australia",
    headline: "From 69% to 91% Occupancy in 9 Months",
    summary: "A 140-bed Sydney community broke its dependency on referral agencies with a full-funnel digital engine.",
    hero: caseMeridian, beds: "140 beds",
    profile: [
      "A 140-bed assisted living community located in Sydney, Australia was facing stagnating occupancy despite strong care standards and positive word-of-mouth.",
      "The facility had minimal digital marketing presence and relied heavily on aged-care referral networks and offline partnerships.",
    ],
    metrics: [
      { label: "Occupancy", value: "69% → 91%" },
      { label: "Qualified Inquiries", value: "+219%" },
      { label: "Tour Bookings", value: "+167%" },
      { label: "Move-Ins", value: "+52%" },
    ],
    micro: { occBefore: "69%", occAfter: "91%", cprDelta: "−34%", inquiryDelta: "+219%" },
    trend: [67, 70, 74, 78, 82, 85, 88, 90, 91],
    problem: [
      "Occupancy decline from 69% to 65%",
      "Heavy dependency on referral agencies",
      "Low Google search visibility in local queries",
      "Weak inquiry conversion from website traffic",
      "No structured family follow-up system",
      "Long decision cycles with no nurturing strategy",
    ],
    primaryGoal: "Stabilize occupancy and build a predictable inbound inquiry system.",
    strategy: [
      { title: "Paid Acquisition", items: ["Google Search (Sydney suburbs)", "Meta family-decision-maker ads", "Competitor conquest"] },
      { title: "Conversion System", items: ["Suburb-level landing pages", "Simplified Book-a-Tour funnel", "Trust content blocks"] },
      { title: "Automation Layer", items: ["Instant SMS + WhatsApp", "7–14 day nurture", "Tour reminders"] },
      { title: "Tracking & Analytics", items: ["Lead source dashboard", "Inquiry-to-tour tracking", "Occupancy forecasting"] },
    ],
    results: ["Occupancy 69% → 91%", "Qualified inquiries +219%", "Tour bookings +167%", "Move-ins +52%"],
    resultsDetail: [
      { value: "+22 pts", label: "Occupancy" },
      { value: "+219%", label: "Inquiries" },
      { value: "+167%", label: "Tour Bookings" },
      { value: "+52%", label: "Move-Ins" },
      { value: "−34%", label: "Cost / Inquiry" },
    ],
    businessImpact: "The facility shifted from referral dependency to a stable digital acquisition system generating consistent monthly admissions.",
    revenueImpact: "$1.2M+ AUD additional annual revenue",
    testimonial: { quote: "We finally stopped relying on referrals. Families now come to us already informed and ready to book tours." },
  },
  {
    slug: "singapore-memory-care", code: "CS/05",
    client: "Premium Memory Care Facility", vertical: "Memory Care", region: "Singapore",
    headline: "+64% Monthly Move-Ins in 7 Months",
    summary: "A premium 60-bed Singapore facility built digital trust and accelerated family decision-making.",
    hero: caseSolstice, beds: "60 beds",
    profile: [
      "A high-end 60-bed memory care facility in Singapore serving families dealing with Alzheimer's and dementia care needs.",
      "Despite premium services, the facility struggled with low awareness and long family decision cycles.",
    ],
    metrics: [
      { label: "Occupancy", value: "73% → 94%" },
      { label: "Monthly Move-Ins", value: "+64%" },
      { label: "Qualified Inquiries", value: "+258%" },
      { label: "Cost / Acquisition", value: "−41%" },
    ],
    micro: { occBefore: "73%", occAfter: "94%", cprDelta: "−41%", inquiryDelta: "+258%" },
    trend: [72, 76, 80, 84, 88, 92, 94],
    problem: [
      "Low occupancy at 73%",
      "Very few inbound online inquiries",
      "Families took 30–60 days to decide",
      "No educational content to build trust",
      "Weak retargeting and follow-up system",
      "High dependency on walk-ins and referrals",
    ],
    primaryGoal: "Build digital trust and accelerate family decision-making.",
    strategy: [
      { title: "Awareness & Education", items: ["Dementia care search campaigns", "Caregiver Meta ads", "Educational video ads"] },
      { title: "Trust Building", items: ["Family memory care guide", "Staff storytelling pages", "Care journey content"] },
      { title: "Conversion Optimization", items: ["One-click tour booking", "Live chat", "WhatsApp-first flow"] },
      { title: "Automation", items: ["21-day nurture", "Reassurance email flows", "Visit reminders"] },
    ],
    results: ["Occupancy 73% → 94%", "Monthly move-ins +64%", "Qualified inquiries +258%", "Tour bookings +189%"],
    resultsDetail: [
      { value: "+21 pts", label: "Occupancy" },
      { value: "+64%", label: "Move-Ins" },
      { value: "+258%", label: "Inquiries" },
      { value: "+189%", label: "Tour Bookings" },
      { value: "−41%", label: "Cost / Acquisition" },
    ],
    businessImpact: "The facility became one of the most digitally visible memory care providers in its region, with a predictable monthly admissions pipeline.",
    revenueImpact: "$980K+ SGD annual revenue impact",
    testimonial: { quote: "Families now understand us before they even visit. That changed everything about how we convert inquiries." },
  },
];

/* ───────── Industries (homepage) ───────── */
export type Industry = { name: string; description: string; color: string; icon: string; image: string };
export const industries: Industry[] = [
  { name: "Nursing Homes", description: "Skilled nursing focused on consistent admissions and reputation growth.", color: "#2563eb", icon: "hospital", image: indNursing },
  { name: "Assisted Living", description: "Communities filling private suites with high-intent families.", color: "#16a34a", icon: "home", image: indSenior },
  { name: "Independent Living", description: "Active senior communities building premium positioning and waitlists.", color: "#0d9488", icon: "leaf", image: indIndependent },
  { name: "Rehabilitation Centers", description: "Post-acute rehab facilities driving steady, qualified referrals.", color: "#7c3aed", icon: "stethoscope", image: indPostAcute },
  { name: "Memory Care", description: "Dementia care communities reaching high-decision family audiences.", color: "#4f46e5", icon: "brain", image: indMemory },
  { name: "Personal Care Homes", description: "Boutique providers building strong local trust and authority.", color: "#ea580c", icon: "home", image: indPersonal },
  { name: "Senior Living Communities", description: "Full-spectrum communities optimizing occupancy across care levels.", color: "#ca8a04", icon: "village", image: indCommunity },
  { name: "Behavioral Health", description: "Specialized programs reaching the right families at the right time.", color: "#0ea5e9", icon: "building", image: indBehavioral },
];

export const industryTrustStrip = [
  { value: "7+", label: "Care Models Supported" },
  { value: "Multi", label: "Location Operators" },
  { value: "Enterprise", label: "Admissions Systems" },
  { value: "HIPAA", label: "Conscious Infrastructure" },
];

/* Trust */
export const trustPillars = [
  { code: "T/01", name: "HIPAA-Conscious Marketing", detail: "Every campaign, form, and integration audited for PHI exposure." },
  { code: "T/02", name: "Trusted Growth Partner", detail: "Long-term operator partnerships, not one-off retainer churn." },
  { code: "T/03", name: "Reputation Systems", detail: "Structured review generation and monitoring across every facility." },
];

export const trustedBy = [
  "Sunrise Care", "MapleLeaf Living", "Harbor Senior", "Evergreen Rehab",
  "Silver Oaks", "Heritage Memory", "Willow Brook", "BrightStar Care",
];

/* Process */
export const processSteps = [
  { code: "P/01", name: "Strategy & Audit", detail: "Two weeks of intake call audits, funnel teardown, and competitive mapping." },
  { code: "P/02", name: "Growth Plan", detail: "Routing, reporting, and content architecture designed before media moves." },
  { code: "P/03", name: "Execution", detail: "Paid, organic, and AI agents go live in a staged rollout." },
  { code: "P/04", name: "Optimization", detail: "Monthly clinical review, quarterly leadership resets." },
];

/* About */
export const aboutWhatWeAre = [
  "Growth Systems Company for Senior Care",
  "AI + Automation Infrastructure Provider",
  "Admissions Funnel Specialists",
  "Healthcare-Focused Digital Engineers",
];

export const aboutTeam = [
  { name: "Hassan", role: "Growth Strategist", image: teamHassan },
  { name: "Adam", role: "Paid Media Lead", image: teamAdam },
  { name: "Jade", role: "CRM & Automation Engineer", image: teamJade },
  { name: "Aisha", role: "Conversion Designer", image: teamAisha },
  { name: "Sami", role: "Analytics & Reporting", image: teamSami },
];

export const aboutRegions = ["United States", "Europe", "Asia Pacific"];

export const aboutImpactKPIs = [
  { value: "+18–24%", label: "Occupancy Growth" },
  { value: "+200–300%", label: "Inquiry Growth" },
  { value: "Up to 40%", label: "Cost Reduction / Admission" },
  { value: "+150–190%", label: "Tour Booking Increase" },
  { value: "$10M+", label: "Annualized Revenue Influence" },
];

export const growthSystemSteps = [
  { step: "Ads", detail: "Google & Meta" },
  { step: "Landing Page", detail: "Conversion-focused" },
  { step: "Inquiry", detail: "Captured instantly" },
  { step: "Automation", detail: "SMS + Email follow-up" },
  { step: "Tour", detail: "Scheduled + tracked" },
  { step: "Move-in", detail: "CRM-attributed" },
];

/* Resources */
export const resources = [
  { title: "Occupancy Audit Checklist", type: "Checklist", detail: "47 checks across web, ads, intake, CRM, and reputation systems." },
  { title: "Senior Care Growth Playbook", type: "Playbook", detail: "A 32-page operator playbook on rebuilding admissions infrastructure." },
];

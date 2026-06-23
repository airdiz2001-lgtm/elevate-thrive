import type { SVGProps, ReactElement } from "react";

/* Premium, brand-aligned SVG icons. Single stroke style, currentColor. */
const ICONS: Record<string, (p: SVGProps<SVGSVGElement>) => ReactElement> = {
  /* PROBLEMS */
  website: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="2.5" y="4" width="19" height="14" rx="1.5" />
      <path d="M2.5 8h19M6 12h6M6 15h4" />
      <circle cx="5.5" cy="6" r="0.6" fill="currentColor" />
      <circle cx="7.5" cy="6" r="0.6" fill="currentColor" />
    </svg>
  ),
  search: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m20 20-4.5-4.5M8 10.5h5M10.5 8v5" />
    </svg>
  ),
  star: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.9l-5.2 2.7 1-5.8L3.5 9.7l5.9-.8z" />
    </svg>
  ),
  phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4.5 5.5c0-1 .8-1.8 1.8-1.8h2.3c.8 0 1.5.5 1.7 1.3l.9 3.2c.2.7-.1 1.5-.7 1.9L9 11.3a12 12 0 0 0 5.7 5.7l1.2-1.6c.4-.6 1.1-.8 1.9-.7l3.2.9c.8.2 1.3.9 1.3 1.7v2.3c0 1-.8 1.8-1.8 1.8C10 21 3 14 3 5.5z" />
    </svg>
  ),
  database: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <ellipse cx="12" cy="5.5" rx="8" ry="2.5" />
      <path d="M4 5.5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6M4 11.5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
    </svg>
  ),
  clock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  ),
  bot: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="4" y="7" width="16" height="12" rx="2" />
      <path d="M12 4v3M9 12.5h.01M15 12.5h.01M9 16h6" />
      <path d="M2 13v3M22 13v3" />
    </svg>
  ),
  palette: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3a9 9 0 1 0 0 18c1.7 0 2.5-1 2.5-2.2 0-.8-.6-1.4-.6-2 0-.7.6-1.2 1.3-1.2h1.8A4 4 0 0 0 21 11.5C21 6.8 16.9 3 12 3z" />
      <circle cx="7" cy="10" r="1" fill="currentColor" />
      <circle cx="10" cy="6.5" r="1" fill="currentColor" />
      <circle cx="14.5" cy="6.5" r="1" fill="currentColor" />
      <circle cx="17.5" cy="10" r="1" fill="currentColor" />
    </svg>
  ),

  /* SOLUTIONS */
  target: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    </svg>
  ),
  pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  ),
  spark: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.5 5.5l2 2M16.5 16.5l2 2M5.5 18.5l2-2M16.5 7.5l2-2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
  calendar: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3.5" y="5" width="17" height="15" rx="1.5" />
      <path d="M3.5 10h17M8 3v4M16 3v4" />
      <rect x="7" y="13" width="3" height="3" rx="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
  trendUp: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 17l6-6 4 4 8-9" />
      <path d="M14 6h7v7" />
    </svg>
  ),
  shield: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3l8 3v6c0 4.5-3.3 7.8-8 9-4.7-1.2-8-4.5-8-9V6z" />
      <path d="m8.5 12 2.5 2.5 4.5-5" />
    </svg>
  ),
  doc: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 3h9l4 4v12.5A1.5 1.5 0 0 1 17.5 21h-11A1.5 1.5 0 0 1 5 19.5v-15A1.5 1.5 0 0 1 6.5 3z" />
      <path d="M15 3v4h4M8 12h8M8 15h8M8 18h5" />
    </svg>
  ),
  share: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="6" cy="12" r="2.5" />
      <circle cx="18" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="m8 11 8-4M8 13l8 4" />
    </svg>
  ),
  funnel: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 4h18l-7 8v8l-4-2v-6z" />
    </svg>
  ),

  /* INDUSTRY REALITY GROUPS */
  bed: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 18V8M3 13h18v5M21 18v-3a3 3 0 0 0-3-3h-7v3" />
      <circle cx="7" cy="11" r="1.5" />
    </svg>
  ),
  mega: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 10v4l13 5V5z" />
      <path d="M16 9a3 3 0 0 1 0 6M6 14v3.5a1.5 1.5 0 0 0 3 0V15" />
    </svg>
  ),
  monitor: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="4" width="18" height="12" rx="1.5" />
      <path d="M9 20h6M12 16v4" />
    </svg>
  ),
  clipboard: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="5" y="5" width="14" height="16" rx="1.5" />
      <rect x="9" y="2.5" width="6" height="3.5" rx="0.8" />
      <path d="M9 12h6M9 15h6M9 18h4" />
    </svg>
  ),
  stethoscope: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M6 3v6a4 4 0 0 0 8 0V3M6 3h2M12 3h2" />
      <path d="M10 13v2a5 5 0 0 0 10 0v-2" />
      <circle cx="20" cy="11" r="2" />
    </svg>
  ),

  /* INDUSTRY ICONS */
  hospital: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 21V8l8-4 8 4v13" />
      <path d="M10 12h4M12 10v4M9 21v-4h6v4" />
    </svg>
  ),
  home: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-4v-7h-8v7H4a1 1 0 0 1-1-1z" />
    </svg>
  ),
  leaf: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 20c0-9 7-15 17-15-1 10-7 15-15 16zM4 20c4-4 6-7 9-10" />
    </svg>
  ),
  brain: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 4 3 3 0 0 0 1 3 3 3 0 0 0 1 4 3 3 0 0 0 3 2 2 2 0 0 0 2-2V5a2 2 0 0 0-2-1zM15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 4 3 3 0 0 1-1 3 3 3 0 0 1-1 4 3 3 0 0 1-3 2 2 2 0 0 1-2-2V5a2 2 0 0 1 2-1z" />
    </svg>
  ),
  village: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 21V10l5-4 5 4v11M13 21V8l4-3 4 3v13M3 21h18" />
    </svg>
  ),
  building: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="5" y="3" width="14" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2M10 21v-3h4v3" />
    </svg>
  ),
};

export type BrandIconName = keyof typeof ICONS | (string & {});

export function BrandIcon({
  name,
  className = "size-6",
  ...rest
}: { name: BrandIconName; className?: string } & SVGProps<SVGSVGElement>) {
  const Cmp = ICONS[name as keyof typeof ICONS] ?? ICONS.target;
  return <Cmp className={className} aria-hidden {...rest} />;
}

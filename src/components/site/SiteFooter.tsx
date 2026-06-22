import { Link } from "@tanstack/react-router";
import { brand } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-white pb-10 pt-20">
      <div className="container-page mb-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="text-2xl font-extrabold tracking-tighter">
            OCCUPIA<span className="text-clinical">CARE.</span>
          </span>
          <p className="mt-6 max-w-sm text-sm text-ink/55">
            A healthcare growth and automation company building modern
            admissions infrastructure for senior care facilities across the USA.
          </p>
        </div>
        <FooterCol
          label="Navigate"
          links={[
            { to: "/about", label: "About" },
            { to: "/case-studies", label: "Case Studies" },
            { to: "/services", label: "Process" },
            { to: "/about", label: "Contact" },
          ]}
        />
        <FooterCol
          label="Contact"
          static={[brand.email, brand.phone, `HQ · ${brand.hq}`]}
        />
      </div>
      <div className="container-page flex flex-col justify-between gap-4 border-t border-rule pt-8 text-[10px] mono uppercase tracking-widest text-ink/40 md:flex-row">
        <span>© {new Date().getFullYear()} {brand.name}</span>
        <div className="flex gap-6">
          <span>HIPAA Notice</span>
          <span>Privacy Policy</span>
          <span>Terms</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  label,
  links,
  static: statics,
}: {
  label: string;
  links?: { to: string; label: string }[];
  static?: string[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="mono text-[10px] uppercase tracking-widest text-ink/30">
        {label}
      </span>
      {links?.map((l) => (
        <Link
          key={l.to + l.label}
          to={l.to}
          className="mono text-[11px] uppercase tracking-widest text-ink/70 hover:text-clinical"
        >
          {l.label}
        </Link>
      ))}
      {statics?.map((s) => (
        <span key={s} className="text-sm text-ink/60">
          {s}
        </span>
      ))}
    </div>
  );
}

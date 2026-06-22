import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-rule bg-white pb-10 pt-20">
      <div className="container-page mb-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <span className="text-2xl font-extrabold tracking-tighter">
            VALENCE<span className="text-clinical">.</span>
          </span>
          <p className="mt-6 max-w-sm text-sm text-ink/55">
            A growth engineering studio for healthcare and senior-care
            operators who require precision over promises.
          </p>
        </div>
        <FooterCol
          label="Registry"
          links={[
            { to: "/", label: "Home" },
            { to: "/services", label: "Services" },
            { to: "/case-studies", label: "Case Studies" },
            { to: "/about", label: "About" },
          ]}
        />
        <FooterCol
          label="Office"
          static={["412 11th Ave N", "Nashville, TN 37203", "inquiry@valence.health"]}
        />
      </div>
      <div className="container-page flex flex-col justify-between gap-4 border-t border-rule pt-8 text-[10px] mono uppercase tracking-widest text-ink/40 md:flex-row">
        <span>© {new Date().getFullYear()} Valence Operating Co.</span>
        <div className="flex gap-6">
          <span>HQ · Nashville, TN</span>
          <span>Status · Operational</span>
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

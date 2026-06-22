import { Link } from "@tanstack/react-router";

export function SiteNav() {
  return (
    <nav className="sticky top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="text-xl font-extrabold tracking-tighter">
          VALENCE<span className="text-clinical">.</span>
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/case-studies">Case Studies</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <Link
          to="/about"
          className="mono inline-flex items-center bg-ink px-4 py-2 text-[11px] font-semibold uppercase tracking-widest text-paper transition-colors hover:bg-clinical"
        >
          Initiate Audit
        </Link>
      </div>
    </nav>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="mono text-[11px] font-medium uppercase tracking-widest text-ink/60 transition-colors hover:text-ink"
      activeProps={{ className: "text-ink" }}
    >
      {children}
    </Link>
  );
}

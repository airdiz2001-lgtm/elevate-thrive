import { createFileRoute, Link } from "@tanstack/react-router";
import { services } from "@/lib/site-data";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Valence" },
      {
        name: "description",
        content:
          "Paid acquisition, clinical SEO, intake infrastructure, and AI command systems for healthcare operators.",
      },
      { property: "og:title", content: "Services — Valence" },
      {
        property: "og:description",
        content: "Four integrated services that work as one census engine.",
      },
    ],
  }),
  component: ServicesIndex,
});

function ServicesIndex() {
  return (
    <>
      <section className="container-page pb-16 pt-20 md:pb-24 md:pt-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          Services Registry
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Four services. Engineered to operate as one.
        </h1>
        <p className="mt-8 max-w-2xl text-pretty text-lg text-ink/65">
          We deploy each service as a standalone engagement or as an integrated
          stack. Most operators start with one and graduate to the full system
          within two quarters.
        </p>
      </section>

      <section className="border-t border-rule">
        <ul className="divide-y divide-rule">
          {services.map((s) => (
            <li key={s.slug}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="container-page group grid items-start gap-8 py-12 transition-colors hover:bg-white md:grid-cols-12 md:py-16"
              >
                <div className="md:col-span-2">
                  <span className="mono text-[10px] uppercase tracking-widest text-clinical">
                    {s.code}
                  </span>
                </div>
                <div className="md:col-span-7">
                  <h2 className="mb-3 text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
                    {s.name}
                  </h2>
                  <p className="max-w-xl text-pretty text-ink/65">{s.tagline}</p>
                </div>
                <div className="flex items-center justify-start gap-2 md:col-span-3 md:justify-end">
                  <span className="mono text-[11px] uppercase tracking-widest text-ink/60 transition-transform group-hover:translate-x-1">
                    View detail →
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}

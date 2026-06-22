import { createFileRoute } from "@tanstack/react-router";
import { CalendarCTA } from "@/components/site/CalendarCTA";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Book a Growth Consultation — OccupiaCare" },
      { name: "description", content: "Book a 30-minute private strategy session to map occupancy gaps and build your 90-day plan." },
      { property: "og:title", content: "Book a Growth Consultation — OccupiaCare" },
      { property: "og:description", content: "Private strategy session for senior care operators." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  return (
    <>
      <section className="container-page pb-12 pt-20 md:pt-28">
        <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/40">
          Book Consultation
        </span>
        <h1 className="max-w-4xl text-balance text-5xl font-extrabold uppercase leading-[0.95] tracking-tight md:text-7xl">
          Let's map your occupancy growth plan.
        </h1>
      </section>
      <CalendarCTA />
    </>
  );
}

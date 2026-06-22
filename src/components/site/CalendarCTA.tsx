import { useState } from "react";

const TIMES = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];

function getDays(weekOffset: number) {
  const today = new Date();
  today.setDate(today.getDate() + weekOffset * 7);
  // start from Monday of that week
  const day = today.getDay();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((day + 6) % 7));
  return Array.from({ length: 5 }).map((_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });
}

export function CalendarCTA() {
  const [weekOffset, setWeekOffset] = useState(0);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const days = getDays(weekOffset);
  const fmt = (d: Date) =>
    `${d.toLocaleDateString("en-US", { weekday: "short" })} ${d.getDate()}`;
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <section className="bg-ink py-24 text-paper md:py-32">
      <div className="container-page grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-paper/50">
            (FINAL) Book Growth Consultation
          </span>
          <h2 className="text-balance text-4xl font-extrabold uppercase tracking-tight md:text-5xl">
            Ready to scale resident acquisition?
          </h2>
          <p className="mt-6 max-w-md text-paper/70">
            Book a private 30-minute strategy session. We'll map your occupancy
            gaps and outline a 90-day growth plan tailored to your facility.
          </p>
          <ul className="mono mt-8 space-y-3 text-[11px] uppercase tracking-widest text-paper/60">
            <li>— 30-minute confidential session</li>
            <li>— Facility-level occupancy audit</li>
            <li>— Custom 90-day growth roadmap</li>
            <li>— No obligation, no sales pitch</li>
          </ul>
        </div>

        <div className="md:col-span-7">
          <div className="border border-paper/15 bg-paper p-6 text-ink md:p-8">
            <div className="mb-6 flex items-center justify-between border-b border-rule pb-4">
              <span className="mono text-[10px] uppercase tracking-widest text-ink/50">
                Select a date & time
              </span>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => { setWeekOffset((w) => Math.max(0, w - 1)); setSelectedDay(null); setSelectedTime(null); }}
                  disabled={weekOffset === 0}
                  className="mono border border-rule px-3 py-1 text-[10px] uppercase tracking-widest text-ink/70 hover:border-ink disabled:opacity-30"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => { setWeekOffset((w) => w + 1); setSelectedDay(null); setSelectedTime(null); }}
                  className="mono border border-rule px-3 py-1 text-[10px] uppercase tracking-widest text-ink/70 hover:border-ink"
                >
                  →
                </button>
              </div>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {days.map((d) => {
                const key = d.toISOString();
                const isPast = d < today;
                const active = selectedDay === key;
                return (
                  <button
                    key={key}
                    type="button"
                    disabled={isPast}
                    onClick={() => { setSelectedDay(key); setSelectedTime(null); setConfirmed(false); }}
                    className={`flex flex-col items-center gap-1 border p-3 transition-colors ${
                      active ? "border-clinical bg-clinical text-paper" : "border-rule hover:border-ink"
                    } ${isPast ? "opacity-30" : ""}`}
                  >
                    <span className="mono text-[10px] uppercase tracking-widest opacity-70">
                      {d.toLocaleDateString("en-US", { weekday: "short" })}
                    </span>
                    <span className="text-xl font-extrabold">{d.getDate()}</span>
                  </button>
                );
              })}
            </div>

            {selectedDay && (
              <>
                <div className="mt-6 border-t border-rule pt-6">
                  <span className="mono mb-4 block text-[10px] uppercase tracking-widest text-ink/50">
                    Available times
                  </span>
                  <div className="grid grid-cols-2 gap-2 md:grid-cols-5">
                    {TIMES.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => { setSelectedTime(t); setConfirmed(false); }}
                        className={`mono border px-3 py-2 text-[11px] uppercase tracking-widest transition-colors ${
                          selectedTime === t
                            ? "border-clinical bg-clinical text-paper"
                            : "border-rule text-ink/70 hover:border-ink"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
                {selectedTime && (
                  <button
                    type="button"
                    onClick={() => setConfirmed(true)}
                    className="mono mt-6 w-full bg-ink px-6 py-4 text-[11px] font-bold uppercase tracking-widest text-paper hover:bg-clinical"
                  >
                    {confirmed
                      ? "✓ Reserved — we'll be in touch within 1 business day"
                      : `Confirm ${selectedTime} on ${fmt(new Date(selectedDay))}`}
                  </button>
                )}
              </>
            )}
          </div>
          <p className="mono mt-4 text-center text-[10px] uppercase tracking-widest text-paper/40">
            Held confidentially · No CRM signup required
          </p>
        </div>
      </div>
    </section>
  );
}

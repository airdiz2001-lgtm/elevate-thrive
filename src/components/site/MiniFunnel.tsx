import { miniFunnel } from "@/lib/site-data";

export function MiniFunnel() {
  return (
    <div className="relative overflow-hidden border border-rule bg-white p-6 md:p-10">
      <span className="mono mb-6 block text-[10px] uppercase tracking-widest text-ink/40">
        Connected System Preview
      </span>
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        {miniFunnel.map((n, i) => (
          <div key={n} className="flex items-center gap-2 md:gap-3">
            <div className="group relative flex flex-col items-center gap-2">
              <span
                className="size-3 rounded-full bg-clinical"
                style={{ animation: `pulseGlow 2.4s ease-in-out ${i * 0.35}s infinite` }}
              />
              <span className="mono text-[10px] uppercase tracking-widest text-ink/70">
                {n}
              </span>
            </div>
            {i < miniFunnel.length - 1 && (
              <span className="mono mb-5 text-ink/30">→</span>
            )}
          </div>
        ))}
      </div>
      <style>{`@keyframes pulseGlow { 0%,100%{box-shadow:0 0 0 0 rgba(37,99,235,0);} 50%{box-shadow:0 0 0 6px rgba(37,99,235,0.18);} }`}</style>
    </div>
  );
}

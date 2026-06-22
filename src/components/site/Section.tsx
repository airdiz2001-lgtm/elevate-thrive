import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="eyebrow block">{children}</span>;
}

export function SectionHeading({
  eyebrow,
  title,
  kicker,
}: {
  eyebrow?: string;
  title: ReactNode;
  kicker?: ReactNode;
}) {
  return (
    <div className="mb-12 flex flex-col gap-4">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="max-w-[24ch] text-balance text-3xl font-extrabold uppercase tracking-tight md:text-5xl">
        {title}
      </h2>
      {kicker && <p className="max-w-2xl text-pretty text-ink/60">{kicker}</p>}
    </div>
  );
}

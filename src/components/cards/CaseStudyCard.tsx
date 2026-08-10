import Image from "next/image";
import type { CaseStudy } from "@/data/caseStudies";

export function CaseStudyCard({ item }: { item: CaseStudy }) {
  const hasCover = !!item.cover && item.cover.trim().length > 0;
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.06] bg-ink/[0.02] transition-all duration-300 hover:border-ink/15 hover:bg-ink/[0.035] card-glow">
      <div className="relative aspect-[16/9] overflow-hidden bg-surface">
        {hasCover ? (
          <>
            <Image
              src={item.cover}
              alt={`${item.title} case study cover`}
              fill
              sizes="(min-width: 1024px) 33vw, 100vw"
              className="object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.04]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base/85 via-base/20 to-transparent" />
          </>
        ) : (
          <GradientCover category={item.category} title={item.title} />
        )}
        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-ink/15 bg-base/70 px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-ink/80 backdrop-blur">
            {item.category}
          </span>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-ink/50">
          {item.client}
        </p>
        <h3 className="font-display text-[20px] font-semibold tracking-tight text-ink">
          {item.title}
        </h3>
        <div className="grid gap-3 text-[14px] text-ink/70">
          <Row label="Problem">{item.problem}</Row>
          <Row label="Solution">{item.solution}</Row>
          <Row label="Outcome">{item.outcome}</Row>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {item.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-ink/10 bg-ink/[0.03] px-2.5 py-1 text-[11px] text-ink/70"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <p>
      <span className="font-medium text-ink/55">{label}: </span>
      <span>{children}</span>
    </p>
  );
}

function GradientCover({ category, title }: { category: string; title: string }) {
  return (
    <div
      className="absolute inset-0"
      style={{
        background:
          "radial-gradient(circle at 25% 20%, rgba(110,96,234,0.45), transparent 55%), radial-gradient(circle at 75% 80%, rgba(122,112,240,0.4), transparent 55%), linear-gradient(135deg,#0a0f1f 0%, #04060d 60%, #050816 100%)",
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 flex items-end p-6">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent/85">
            {category}
          </p>
          <p className="mt-2 font-display text-2xl font-semibold leading-tight tracking-tight text-white md:text-[26px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

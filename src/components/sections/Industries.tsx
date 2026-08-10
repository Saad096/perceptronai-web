import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { industries } from "@/data/industries";

export function Industries() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Domain-aware AI, not a one-size template."
          description="We've shipped systems across regulated and fast-moving industries. The patterns we know about data sensitivity, compliance posture, and deployment topology travel with us."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.03}>
              <div className="group h-full rounded-2xl border border-ink/[0.06] bg-ink/[0.02] p-5 transition-all duration-300 hover:border-ink/15 hover:bg-ink/[0.035]">
                <div className="inline-flex size-10 items-center justify-center rounded-xl border border-ink/10 bg-surface text-accent">
                  <ind.icon className="size-4" />
                </div>
                <h3 className="mt-4 font-display text-[16px] font-semibold tracking-tight text-ink">
                  {ind.name}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink/65">{ind.short}</p>
                <ul className="mt-3 space-y-1">
                  {ind.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-[12.5px] text-ink/55"
                    >
                      <span className="mt-1.5 size-1 shrink-0 rounded-full bg-brand-400/70" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

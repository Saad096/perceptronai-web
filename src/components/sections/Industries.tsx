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
          title="Domain-aware AI — not a one-size template."
          description="We've shipped systems across regulated and fast-moving industries. The patterns we know — data sensitivity, compliance posture, deployment topology — travel with us."
        />

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={i * 0.03}>
              <div className="group h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:border-white/15 hover:bg-white/[0.035]">
                <div className="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-ink-900 text-brand-300 transition-colors duration-300 group-hover:text-white">
                  <ind.icon className="size-4" />
                </div>
                <h3 className="mt-4 font-display text-[16px] font-semibold tracking-tight text-white">
                  {ind.name}
                </h3>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/65">{ind.short}</p>
                <ul className="mt-3 space-y-1">
                  {ind.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-[12.5px] text-white/55"
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

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function Process() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="How we work"
          title="A six-step path from idea to a system you can trust."
          description="Each step ships a concrete artifact. No mystery-box engagements."
        />

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:block" />
          <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
            {company.process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.05}>
                <div className="relative">
                  <div className="mx-auto grid size-[68px] place-items-center rounded-full border border-white/10 bg-ink-900 shadow-glow">
                    <span className="font-display text-[18px] font-semibold tracking-tight text-gradient-brand">
                      {p.step}
                    </span>
                  </div>
                  <div className="mt-4 text-center">
                    <h3 className="font-display text-[15px] font-semibold tracking-tight text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

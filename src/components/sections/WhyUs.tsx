import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { company } from "@/data/company";

export function WhyUs() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Why PerceptronAI"
          title="Senior people. Production discipline. Skin in the game."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {company.whyUs.map((w, i) => (
            <Reveal key={w.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 card-glow">
                <div className="inline-flex size-9 items-center justify-center rounded-lg border border-brand-400/30 bg-brand-500/10 text-brand-200">
                  <Check className="size-4" />
                </div>
                <h3 className="mt-4 font-display text-[17px] font-semibold text-white">
                  {w.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-white/65">{w.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

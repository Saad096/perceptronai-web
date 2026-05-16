import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { techStack } from "@/data/techStack";

export function TechStack() {
  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="Tech stack"
          title="Pragmatic, modern, production-tested."
          description="We pick from a focused set of tools we know cold. New tech enters only when it earns the upgrade."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {techStack.map((group, i) => (
            <Reveal key={group.name} delay={i * 0.03}>
              <div className="h-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 card-glow">
                <h3 className="text-[12px] font-semibold uppercase tracking-[0.16em] text-brand-200">
                  {group.name}
                </h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[12.5px] text-white/75"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

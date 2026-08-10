/**
 * 2026-07 revamp: numerals now count up on scroll-into-view via CountUp.
 * Real figures come from src/data/company.ts.
 */
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { company } from "@/data/company";

export function Stats() {
  return (
    <section className="relative">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-ink/[0.06] bg-surface/60 p-8 md:p-10">
          <div className="absolute -top-32 left-1/2 size-[420px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl" aria-hidden />
          <div className="relative grid grid-cols-2 gap-6 md:grid-cols-4">
            {company.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06} className="text-center md:text-left">
                <p className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
                  <CountUp value={s.value} className="text-gradient-brand" />
                </p>
                <p className="mt-1.5 text-[13px] text-ink/60">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

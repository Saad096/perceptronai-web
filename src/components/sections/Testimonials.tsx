import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="section">
      <Container>
        <SectionHeading eyebrow="What clients say" title="Plain words from real engagements." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.author + i} delay={i * 0.05}>
              <TestimonialCard t={t} highlight={t.highlight} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

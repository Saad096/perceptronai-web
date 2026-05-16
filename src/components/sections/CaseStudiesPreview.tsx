import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { caseStudies } from "@/data/caseStudies";

export function CaseStudiesPreview() {
  return (
    <section className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Production AI systems shipped — not just demos."
            description="Sanitised summaries of recent engagements. Real client names available under NDA on a call."
          />
          <Button href="/case-studies" variant="outline" size="sm">
            All case studies <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((c, i) => (
            <Reveal key={c.slug} delay={i * 0.04}>
              <CaseStudyCard item={c} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

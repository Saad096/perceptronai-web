import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { services } from "@/data/services";

export function ServicesOverview({ limit = 6 }: { limit?: number }) {
  return (
    <section id="services" className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Services"
            title="Production AI engineering, from strategy to deployment."
            description="GenAI, agentic AI, RAG, voice AI, edge AI, cloud, and MLOps. Modular engagements that fit your stage."
          />
          <Button href="/services" variant="outline" size="sm">
            All services <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, limit).map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.04}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

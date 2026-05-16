import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { Process } from "@/components/sections/Process";
import { Industries } from "@/components/sections/Industries";
import { services } from "@/data/services";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "AI Services",
  path: "/services",
  description:
    "Production-grade AI services from PerceptronAI: Generative AI, Agentic AI, RAG, Voice AI, Computer Vision, NLP & Document AI, Edge AI, Responsible AI, Blockchain & Web3, Cloud / DevOps / MLOps, and AI strategy consulting.",
  keywords: [
    "AI development company",
    "Generative AI services",
    "Agentic AI development",
    "RAG development",
    "Voice AI services",
    "Computer vision services",
    "NLP services",
    "Edge AI development",
    "Responsible AI governance",
    "Blockchain development company",
    "AI x Blockchain development",
    "MLOps consulting",
    "AI strategy consulting",
    "PerceptronAI",
  ],
});

export default function ServicesPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="Engineering-led AI services for teams that need production, not prototypes."
            description="Modular engagements — pick a service or compose several. Every engagement ends with code you own, runbooks you can act on, and a roadmap for what's next."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.04}>
                <div id={s.slug} className="scroll-mt-24">
                  <ServiceCard service={s} />
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Industries />
      <Process />
      <CTABanner />
    </>
  );
}

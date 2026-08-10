import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CaseStudyCard } from "@/components/cards/CaseStudyCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { caseStudies } from "@/data/caseStudies";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Case Studies",
  path: "/case-studies",
  description:
    "Selected work from QentrixAI: multi-agent platforms, RAG systems, voice AI, meeting intelligence, and computer vision. Sanitised summaries with client names available under NDA.",
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeading
            eyebrow="Case studies"
            title="What we've shipped, in plain language."
            description="Each card describes the problem, the approach we took, and the measurable outcome. We say 'delivered or contributed to' deliberately. These are real engagements, anonymised."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.04}>
                <CaseStudyCard item={c} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}

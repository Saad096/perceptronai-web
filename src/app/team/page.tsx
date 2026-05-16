import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/cards/TeamCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { team } from "@/data/team";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Team",
  path: "/team",
  description:
    "Meet the PerceptronAI team — senior operators across AI engineering, platform, cloud and product.",
});

export default function TeamPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeading
            eyebrow="The team"
            title="A senior bench, not a body shop."
            description="The people you meet on the first call are the people on the keyboard. We keep the team small on purpose — it's how quality survives growth."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m, i) => (
              <Reveal key={m.slug} delay={i * 0.04}>
                <TeamCard member={m} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}

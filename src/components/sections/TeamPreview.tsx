import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { TeamCard } from "@/components/cards/TeamCard";
import { team } from "@/data/team";

export function TeamPreview() {
  return (
    <section className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="The team"
            title="Senior operators across AI, platform, cloud and product."
            description="No agency overhead, no junior-heavy delivery. The people on the call are the people on the keyboard."
          />
          <Button href="/team" variant="outline" size="sm">
            Meet the team <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.slug} delay={i * 0.04}>
              <TeamCard member={m} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

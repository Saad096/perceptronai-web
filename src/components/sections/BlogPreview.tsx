import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { BlogCard } from "@/components/cards/BlogCard";
import { blogs } from "@/data/blogs";

export function BlogPreview() {
  return (
    <section className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Insights"
            title="Field notes on AI engineering."
            description="Practical writing from real engagements — what works, what doesn't, what we'd do differently."
          />
          <Button href="/blogs" variant="outline" size="sm">
            All articles <ArrowRight className="size-4" />
          </Button>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blogs.slice(0, 3).map((b, i) => (
            <Reveal key={b.slug} delay={i * 0.04}>
              <BlogCard blog={b} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

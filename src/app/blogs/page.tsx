import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { BlogCard } from "@/components/cards/BlogCard";
import { CTABanner } from "@/components/sections/CTABanner";
import { blogs } from "@/data/blogs";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Blog",
  path: "/blogs",
  description:
    "Field notes on AI engineering: production-ready AI, agentic systems, RAG, voice AI, MLOps, edge AI, and AI product strategy.",
});

export default function BlogsPage() {
  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeading
            eyebrow="Blog"
            title="Field notes on AI engineering."
            description="Practical writing from real engagements. No churnalism, no hot takes, just what we'd tell a friend at the table."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((b, i) => (
              <Reveal key={b.slug} delay={i * 0.04}>
                <BlogCard blog={b} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}

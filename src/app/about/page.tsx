import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Stats } from "@/components/sections/Stats";
import { Process } from "@/components/sections/Process";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { CTABanner } from "@/components/sections/CTABanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { company } from "@/data/company";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About",
  path: "/about",
  description:
    "QentrixAI is an AI product and services company building practical, scalable AI systems — combining AI research, engineering, cloud infrastructure, business analysis and product strategy.",
});

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 pb-16">
        <Container>
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <SectionHeading
                eyebrow="About QentrixAI"
                title="An AI product studio and delivery partner — engineered for production."
                description={company.mission}
              />
              <div className="mt-8 space-y-4 text-[15.5px] leading-relaxed text-white/70">
                <p>
                  We're a focused team of senior AI engineers, platform engineers, cloud
                  specialists and a business analyst — covering the full path from problem
                  framing to a deployed system.
                </p>
                <p>
                  Our work blends AI consulting, generative AI systems, agentic workflows, RAG
                  and enterprise search, voice AI and conversational systems, SaaS product
                  development, cloud and DevOps, custom automation, and full MVP-to-production
                  delivery. The same team handles strategy, design, engineering and operations.
                </p>
                <p>
                  We chose this shape because the gap that kills most AI projects sits between
                  vendors — between the strategy deck, the model, the cloud, and the product.
                  Owning the path end-to-end removes that gap.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-2">
                {company.pillars.map((p) => (
                  <div
                    key={p}
                    className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 text-[14px] text-white/80"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>

            <Reveal className="lg:col-span-5" delay={0.1}>
              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[28px] bg-gradient-to-br from-brand-500/20 via-accent-violet/15 to-accent-cyan/15 blur-2xl" />
                <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900">
                  <Image
                    src="/products/neuromesh-1.png"
                    alt="QentrixAI engineering — NeuroMesh agent graph"
                    width={1200}
                    height={900}
                    className="w-full object-cover"
                  />
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900">
                    <Image
                      src="/products/minutely-3.png"
                      alt="Minutely meeting platform"
                      width={800}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                  <div className="overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900">
                    <Image
                      src="/products/salespire-3.png"
                      alt="SalesPire pipeline intelligence"
                      width={800}
                      height={600}
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <Stats />
      <Process />
      <TeamPreview />
      <Testimonials />
      <CTABanner />
    </>
  );
}

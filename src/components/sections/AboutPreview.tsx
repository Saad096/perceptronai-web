import Image from "next/image";
import { ArrowRight, ShieldCheck, Layers, Cpu, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";

const pillars = [
  { icon: Layers, title: "AI consulting & strategy" },
  { icon: Sparkles, title: "Generative AI systems" },
  { icon: Cpu, title: "Agentic workflows & RAG" },
  { icon: ShieldCheck, title: "Production-grade delivery" },
];

export function AboutPreview() {
  return (
    <section className="section">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-6">
            <SectionHeading
              eyebrow="About PerceptronAI"
              title="An AI product studio that ships — not a slide-deck consultancy."
              description="We combine AI research, engineering, cloud infrastructure, business analysis and product strategy under one team. From idea framing to production rollout, you get senior people, not delegated juniors."
            />
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {pillars.map((p) => (
                <div
                  key={p.title}
                  className="flex items-center gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3"
                >
                  <p.icon className="size-4 text-brand-300" />
                  <span className="text-[14px] text-white/80">{p.title}</span>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href="/about">
                Read the story <ArrowRight className="size-4" />
              </Button>
              <Button href="/services" variant="outline">
                Explore services
              </Button>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-6" delay={0.1}>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-[32px] bg-gradient-to-br from-brand-500/20 via-accent-violet/15 to-accent-cyan/15 blur-2xl" />
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-square overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900">
                  <Image
                    src="/products/neuromesh-1.png"
                    alt="NeuroMesh agent graph"
                    width={640}
                    height={640}
                    className="size-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900">
                  <Image
                    src="/products/minutely-2.png"
                    alt="Minutely meeting dashboard"
                    width={640}
                    height={640}
                    className="size-full object-cover"
                  />
                </div>
                <div className="col-span-2 aspect-[2/1] overflow-hidden rounded-2xl border border-white/[0.08] bg-ink-900">
                  <Image
                    src="/products/salespire-1.png"
                    alt="SalesPire pipeline view"
                    width={1280}
                    height={640}
                    className="size-full object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

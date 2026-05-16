import { Hero } from "@/components/sections/Hero";
import { Capabilities } from "@/components/sections/Capabilities";
import { Clients } from "@/components/sections/Clients";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { Industries } from "@/components/sections/Industries";
import { Problem } from "@/components/sections/Problem";
import { WhyUs } from "@/components/sections/WhyUs";
import { Process } from "@/components/sections/Process";
import { CaseStudiesPreview } from "@/components/sections/CaseStudiesPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { TechStack } from "@/components/sections/TechStack";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { Testimonials } from "@/components/sections/Testimonials";
import { Stats } from "@/components/sections/Stats";
import { CTABanner } from "@/components/sections/CTABanner";
import { FAQ } from "@/components/sections/FAQ";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({ path: "/" });

export default function HomePage() {
  return (
    <>
      <Hero />
      <Capabilities />
      <Clients />
      <Stats />
      <AboutPreview />
      <ServicesOverview limit={6} />
      <ProductsShowcase limit={6} />
      <Industries />
      <Problem />
      <WhyUs />
      <Process />
      <CaseStudiesPreview />
      <TeamPreview />
      <TechStack />
      <BlogPreview />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  );
}

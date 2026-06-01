import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductsShowcase } from "@/components/sections/ProductsShowcase";
import { CTABanner } from "@/components/sections/CTABanner";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Products",
  path: "/products",
  description:
    "Internal AI products from QentrixAI: Minutely (meeting intelligence), NeuroMesh (agent framework), SalesPire (AI sales), VoxRoute (voice IVR), DocumentAI (RAG) and AlmaRed (multimodal chatbot).",
});

export default function ProductsPage() {
  return (
    <>
      <section className="pt-32 pb-4">
        <Container>
          <SectionHeading
            eyebrow="Products"
            title="The QentrixAI product studio."
            description="Internal frameworks, MVPs, and shipped client systems. Each card opens a full breakdown — problem, solution, stack and roadmap."
          />
        </Container>
      </section>
      <ProductsShowcase />
      <CTABanner />
    </>
  );
}

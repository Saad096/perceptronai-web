"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { ProductCard } from "@/components/cards/ProductCard";
import { ProductModal } from "@/components/cards/ProductModal";
import { products, getProduct } from "@/data/products";

export function ProductsShowcase({ limit }: { limit?: number }) {
  const [openSlug, setOpenSlug] = React.useState<string | null>(null);
  const open = openSlug ? getProduct(openSlug) ?? null : null;
  const visible = limit ? products.slice(0, limit) : products;

  return (
    <section id="products" className="section">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Products"
            title="Internal product studio. Real software, not roadmap art."
            description="Tools we build for ourselves and our clients. Click any card to see the problem, solution, stack and roadmap."
          />
          {limit && (
            <Button href="/products" variant="outline" size="sm">
              View all products <ArrowRight className="size-4" />
            </Button>
          )}
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.04}>
              <ProductCard product={p} onOpen={setOpenSlug} />
            </Reveal>
          ))}
        </div>

        <ProductModal product={open} onClose={() => setOpenSlug(null)} />
      </Container>
    </section>
  );
}

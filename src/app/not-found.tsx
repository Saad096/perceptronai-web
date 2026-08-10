import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="pt-40 pb-24">
      <Container className="max-w-2xl text-center">
        <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
          404 · Page not found
        </p>
        <h1 className="mt-3 font-display text-5xl font-semibold tracking-tight text-ink md:text-6xl">
          That route hasn&apos;t been wired up yet.
        </h1>
        <p className="mt-4 text-ink/65">
          The link might be stale, or we haven&apos;t built this page yet. Head back home or browse
          our work.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button href="/">
            Back home <ArrowRight className="size-4" />
          </Button>
          <Button href="/products" variant="outline">
            See products
          </Button>
          <Link href="/contact" className="text-[14px] text-ink/65 hover:text-ink">
            Or contact us →
          </Link>
        </div>
      </Container>
    </section>
  );
}

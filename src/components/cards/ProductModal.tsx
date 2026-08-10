"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, MessageCircle, CalendarClock, ChevronLeft, ChevronRight } from "lucide-react";
import type { Product } from "@/data/products";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { getBookingUrl } from "@/lib/env";

export function ProductModal({
  product,
  onClose,
}: {
  product: Product | null;
  onClose: () => void;
}) {
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  const slides = product?.gallery ?? [];
  const isImage = !!product && product.coverMode !== "dark" && slides.length > 0;

  React.useEffect(() => {
    setIdx(0);
  }, [product?.slug]);

  React.useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (!isImage || slides.length === 0) return;
      if (e.key === "ArrowRight") setIdx((i) => (i + 1) % slides.length);
      if (e.key === "ArrowLeft") setIdx((i) => (i - 1 + slides.length) % slides.length);
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [product, onClose, isImage, slides.length]);

  // Auto-advance gallery while open (paused on hover)
  React.useEffect(() => {
    if (!product || !isImage || slides.length <= 1 || paused) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, [product, isImage, slides.length, paused]);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-base/80 backdrop-blur-sm p-2 sm:p-6"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="product-modal-title"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative w-full max-w-6xl max-h-[92vh] overflow-hidden rounded-3xl border border-ink/10 bg-surface shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={onClose}
              aria-label="Close product details"
              className="absolute right-4 top-4 z-20 grid size-9 place-items-center rounded-full border border-ink/10 bg-surface/80 text-ink/80 backdrop-blur hover:bg-ink/10 hover:text-ink"
            >
              <X className="size-4" />
            </button>

            <div className="grid max-h-[92vh] grid-cols-1 overflow-y-auto md:grid-cols-12">
              {/* Media column */}
              <div
                className="relative md:col-span-7 bg-base"
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
              >
                {isImage ? (
                  <ImageStage product={product} idx={idx} setIdx={setIdx} slides={slides} />
                ) : (
                  <DarkStage product={product} />
                )}
              </div>

              {/* Detail column */}
              <div className="md:col-span-5 p-6 md:p-8">
                <div className="flex items-center gap-2">
                  <Badge tone="brand">{product.status}</Badge>
                  <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-ink/45">
                    {product.category}
                  </span>
                </div>
                <h3
                  id="product-modal-title"
                  className="mt-3 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl"
                >
                  {product.name}
                </h3>
                <p className="mt-1.5 text-ink/65">{product.tagline}</p>

                <div className="mt-6 space-y-5">
                  <Block label="Problem">{product.problem}</Block>
                  <Block label="Solution">{product.solution}</Block>
                  <Block label="What makes it different">{product.novelty}</Block>

                  <div>
                    <Label>Key features</Label>
                    <ul className="mt-2 space-y-1.5">
                      {product.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-[14px] text-ink/75">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-brand-400" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <Label>Target users</Label>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {product.targetUsers.map((u) => (
                        <span
                          key={u}
                          className="rounded-full border border-ink/10 bg-ink/[0.04] px-2.5 py-1 text-[12px] text-ink/75"
                        >
                          {u}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Tech stack</Label>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {product.techStack.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-brand-400/20 bg-brand-500/10 px-2.5 py-1 text-[12px] text-accent"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label>Roadmap</Label>
                    <ul className="mt-2 space-y-1.5">
                      {product.roadmap.map((r) => (
                        <li key={r} className="flex items-start gap-2 text-[14px] text-ink/75">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-accent-cyan" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 grid gap-2 sm:grid-cols-2">
                  <Button href={getBookingUrl()} size="sm" className="w-full">
                    <CalendarClock className="size-4" /> Discuss similar
                  </Button>
                  <Button href="/contact" variant="outline" size="sm" className="w-full">
                    <MessageCircle className="size-4" /> Send a brief
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ImageStage({
  product,
  idx,
  setIdx,
  slides,
}: {
  product: Product;
  idx: number;
  setIdx: (n: number | ((i: number) => number)) => void;
  slides: string[];
}) {
  return (
    <div
      className="relative aspect-[16/10] w-full md:aspect-auto md:h-full md:min-h-[440px]"
      style={{
        background:
          "radial-gradient(circle at 25% 20%, rgba(110,96,234,0.18), transparent 55%), radial-gradient(circle at 75% 80%, rgba(122,112,240,0.18), transparent 55%), linear-gradient(135deg,#0a0f1f 0%, #04060d 60%, #050816 100%)",
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-25" aria-hidden />
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[idx]}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          className="absolute inset-0 flex items-center justify-center p-4 md:p-6"
        >
          <div className="relative h-full w-full">
            <Image
              src={slides[idx]}
              alt={`${product.name} screenshot ${idx + 1}`}
              fill
              sizes="(min-width: 768px) 60vw, 100vw"
              className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
              priority
            />
          </div>
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <>
          <button
            onClick={() => setIdx((i: number) => (i - 1 + slides.length) % slides.length)}
            className="absolute left-3 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-base/70 text-ink/90 backdrop-blur hover:bg-base"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            onClick={() => setIdx((i: number) => (i + 1) % slides.length)}
            className="absolute right-3 top-1/2 z-10 grid size-9 -translate-y-1/2 place-items-center rounded-full bg-base/70 text-ink/90 backdrop-blur hover:bg-base"
            aria-label="Next screenshot"
          >
            <ChevronRight className="size-4" />
          </button>
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                aria-label={`Go to screenshot ${i + 1}`}
                className={
                  "h-1.5 rounded-full transition-all " +
                  (i === idx ? "w-6 bg-white" : "w-1.5 bg-ink/40 hover:bg-ink/70")
                }
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function DarkStage({ product }: { product: Product }) {
  return (
    <div
      className="relative aspect-[16/10] w-full md:aspect-auto md:h-full md:min-h-[440px]"
      style={{
        background:
          "radial-gradient(circle at 25% 20%, rgba(110,96,234,0.4), transparent 55%), radial-gradient(circle at 75% 80%, rgba(122,112,240,0.35), transparent 55%), linear-gradient(135deg,#0a0f1f 0%, #04060d 60%, #050816 100%)",
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center p-8 text-center">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-accent">
            {product.category}
          </p>
          <p className="mt-3 font-display text-4xl font-semibold tracking-tight text-white md:text-6xl">
            <span className="text-gradient-brand">{product.name}</span>
          </p>
          <p className="mt-3 text-[12px] uppercase tracking-[0.18em] text-white/50">
            preview coming soon
          </p>
        </div>
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink/50">
      {children}
    </p>
  );
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <Label>{label}</Label>
      <p className="mt-2 text-[14.5px] leading-relaxed text-ink/75">{children}</p>
    </div>
  );
}

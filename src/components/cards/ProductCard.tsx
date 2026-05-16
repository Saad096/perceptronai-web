"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Product } from "@/data/products";
import { Badge } from "@/components/ui/Badge";

const statusTone: Record<string, "brand" | "violet" | "cyan" | "mint" | "amber" | "default"> = {
  Live: "mint",
  Beta: "cyan",
  MVP: "brand",
  "Coming Soon": "amber",
  "Internal Framework": "violet",
  "Client Delivery": "brand",
  Concept: "default",
};

export function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: (slug: string) => void;
}) {
  const isImage = product.coverMode !== "dark" && product.gallery.length > 0;
  const slides = isImage ? product.gallery : [];
  const [idx, setIdx] = React.useState(0);
  const [paused, setPaused] = React.useState(false);

  React.useEffect(() => {
    if (!isImage || slides.length <= 1 || paused) return;
    const id = window.setInterval(() => {
      setIdx((i) => (i + 1) % slides.length);
    }, 3200);
    return () => window.clearInterval(id);
  }, [isImage, slides.length, paused]);

  const open = () => onOpen(product.slug);
  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      open();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={open}
      onKeyDown={onKeyDown}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="group relative flex h-full cursor-pointer flex-col overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] text-left transition-all duration-300 hover:border-white/15 hover:bg-white/[0.035] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 card-glow"
      aria-label={`Open details for ${product.name}`}
    >
      {isImage ? (
        <CoverSlider product={product} idx={idx} setIdx={setIdx} />
      ) : (
        <DarkCover product={product} />
      )}

      <div className="flex flex-1 flex-col p-6">
        <p className="text-[12px] font-medium uppercase tracking-[0.14em] text-white/45">
          {product.category}
        </p>
        <h3 className="mt-2 font-display text-[22px] font-semibold tracking-tight text-white">
          {product.name}
        </h3>
        <p className="mt-1.5 text-[14.5px] leading-relaxed text-white/65">
          {product.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-1.5">
          {product.techStack.slice(0, 4).map((t) => (
            <span
              key={t}
              className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-white/70"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-4">
          <span className="text-[13px] font-medium text-white/80">See more</span>
          <ArrowUpRight className="size-4 text-white/50 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}

function CoverSlider({
  product,
  idx,
  setIdx,
}: {
  product: Product;
  idx: number;
  setIdx: (n: number) => void;
}) {
  const slides = product.gallery;
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden bg-gradient-to-br from-ink-800 to-ink-900">
      <AnimatePresence mode="sync">
        <motion.div
          key={slides[idx]}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1.0 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.8, ease: [0.22, 0.61, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={slides[idx]}
            alt={`${product.name} screenshot ${idx + 1}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top"
          />
        </motion.div>
      </AnimatePresence>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />

      <div className="absolute left-4 top-4">
        <Badge tone={statusTone[product.status] ?? "default"}>{product.status}</Badge>
      </div>

      {slides.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIdx(i);
              }}
              aria-label={`Go to screenshot ${i + 1}`}
              className={
                "h-1.5 rounded-full transition-all " +
                (i === idx ? "w-6 bg-white" : "w-1.5 bg-white/35 hover:bg-white/70")
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}

function DarkCover({ product }: { product: Product }) {
  return (
    <div
      className="relative aspect-[16/10] w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 25% 20%, rgba(95,135,255,0.35), transparent 55%), radial-gradient(circle at 75% 80%, rgba(139,92,246,0.35), transparent 55%), linear-gradient(135deg,#0a0f1f 0%, #04060d 60%, #050816 100%)",
      }}
    >
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-200/90">
            {product.category}
          </p>
          <p className="mt-2 font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            <span className="text-gradient-brand">{product.name}</span>
          </p>
          <p className="mt-2 text-[12px] uppercase tracking-[0.18em] text-white/45">
            preview coming soon
          </p>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/65 via-transparent to-transparent" />
      <div className="absolute left-4 top-4">
        <Badge tone={statusTone[product.status] ?? "default"}>{product.status}</Badge>
      </div>
    </div>
  );
}

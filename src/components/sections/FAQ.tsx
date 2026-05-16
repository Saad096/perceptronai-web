"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqs } from "@/data/faqs";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [open, setOpen] = React.useState<number | null>(0);

  return (
    <section className="section">
      <Container>
        <SectionHeading
          eyebrow="FAQ"
          title="Common questions before we get on a call."
          align="center"
        />
        <div className="mx-auto mt-12 max-w-3xl divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.question}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                >
                  <span className="text-[15px] font-medium text-white md:text-[16px]">
                    {f.question}
                  </span>
                  <Plus
                    className={cn(
                      "size-4 shrink-0 text-white/60 transition-transform duration-300",
                      isOpen && "rotate-45 text-brand-300"
                    )}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-5 pb-5 text-[14.5px] leading-relaxed text-white/70 md:px-6 md:pb-6">
                        {f.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import { Quote } from "lucide-react";
import type { Testimonial } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCard({ t, highlight = false }: { t: Testimonial; highlight?: boolean }) {
  return (
    <figure
      className={cn(
        "flex h-full flex-col gap-5 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 card-glow",
        highlight && "md:col-span-2 bg-gradient-to-br from-brand-500/10 via-transparent to-accent-violet/10"
      )}
    >
      <Quote className="size-6 text-brand-300" />
      <blockquote className={cn("text-[15.5px] leading-relaxed text-white/85", highlight && "md:text-lg")}>
        “{t.quote}”
      </blockquote>
      <figcaption className="mt-auto border-t border-white/[0.06] pt-4">
        <p className="text-[14px] font-medium text-white">{t.author}</p>
        <p className="text-[12px] text-white/55">{t.role}</p>
      </figcaption>
    </figure>
  );
}

"use client";

/**
 * Part 2 motion revamp: Reveal now runs on GSAP ScrollTrigger instead of
 * framer-motion whileInView, so every section heading and card group joins
 * the same scroll system that drives the header and pinned showcase (one
 * frame clock via Lenis + gsap.ticker, no competing observers). The
 * component API (children, delay, className) is unchanged, so all existing
 * call sites keep their stagger timings.
 */
import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Kept for backward compatibility with older call sites. */
  as?: string;
}) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, [delay]);

  return (
    <div ref={ref} className={className} data-reveal="card">
      {children}
    </div>
  );
}

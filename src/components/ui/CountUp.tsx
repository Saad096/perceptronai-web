"use client";

/**
 * Part 2 motion revamp: the stat counter now runs on GSAP ScrollTrigger
 * (same clock as every other scroll effect). Parses values like "25+",
 * "99.7%", or "6 wks", animates the numeric part once when the element
 * scrolls into view, and preserves prefix/suffix text.
 */
import * as React from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
    if (!match || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = value;
      return;
    }
    const [, prefix, num, suffix] = match;
    const target = parseFloat(num);
    const decimals = num.includes(".") ? num.split(".")[1].length : 0;

    const proxy = { val: 0 };
    const trigger = ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(proxy, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${proxy.val.toFixed(decimals)}${suffix}`;
          },
        });
      },
    });

    return () => trigger.kill();
  }, [value]);

  return (
    <span ref={ref} className={className} data-count>
      {value}
    </span>
  );
}

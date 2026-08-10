"use client";

/**
 * Part 2 motion revamp — global smooth scroll.
 *
 * R&D notes (Phase 0): Linear, Luma, and beepsme all run physics-based
 * scroll (Lenis or equivalent) so scroll-driven UI (header morph, pinned
 * scenes) tracks the scrollbar with zero perceptible lag. The canonical
 * Lenis + GSAP integration is: drive lenis.raf from gsap.ticker, forward
 * lenis scroll events to ScrollTrigger.update, and disable ticker lag
 * smoothing so scrubbed animations never jump (source: gsap.com/scroll).
 *
 * Lenis is skipped entirely for prefers-reduced-motion users and native
 * scrolling is kept on touch devices (syncTouch stays false).
 */
import * as React from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "lenis/dist/lenis.css";

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}

gsap.registerPlugin(ScrollTrigger);

export function LenisProvider({ children }: { children: React.ReactNode }) {
  React.useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });
    window.__lenis = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      delete window.__lenis;
    };
  }, []);

  return <>{children}</>;
}

"use client";

/**
 * Part 2 motion revamp — magnetic cursor with trailing ring.
 *
 * R&D notes (Phase 0): the dot-plus-lagging-ring pattern (instant 8px dot,
 * 32px ring easing behind at lerp 0.08) is the standard "magnetic cursor"
 * on award-level sites. The ring expands to 56px with a soft accent fill
 * over interactive elements, and elements can opt into a text label via
 * data-cursor-text. Hover targets are detected with event delegation on
 * pointerover, so links added after mount (route changes, lazy content)
 * work without re-binding. Desktop pointers only (pointer: fine), hidden
 * for prefers-reduced-motion, and the native cursor returns on cleanup.
 */
import * as React from "react";

const INTERACTIVE = "a, button, [role='button'], [data-magnetic], input, select, textarea, label";

export function MagneticCursor() {
  const dotRef = React.useRef<HTMLDivElement>(null);
  const ringRef = React.useRef<HTMLDivElement>(null);
  const labelRef = React.useRef<HTMLSpanElement>(null);
  const [enabled, setEnabled] = React.useState(false);

  React.useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;
    setEnabled(true);

    document.documentElement.classList.add("has-custom-cursor");

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let rafId = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onPointerOver = (e: PointerEvent) => {
      const target = e.target as Element | null;
      if (!target || !dotRef.current || !ringRef.current || !labelRef.current) return;
      const interactive = target.closest(INTERACTIVE);
      const labelled = target.closest("[data-cursor-text]");
      const text = target.closest("p, h1, h2, h3, h4, blockquote");

      ringRef.current.classList.toggle("cursor-hover", !!interactive);
      dotRef.current.classList.toggle("cursor-hover", !!interactive);
      ringRef.current.classList.toggle("cursor-text", !interactive && !!text);
      labelRef.current.textContent = labelled?.getAttribute("data-cursor-text") ?? "";
      ringRef.current.classList.toggle("cursor-label", !!labelled);
    };

    const tick = () => {
      ringX += (mouseX - ringX) * 0.08;
      ringY += (mouseY - ringY) * 0.08;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("pointerover", onPointerOver, { passive: true });
    rafId = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("pointerover", onPointerOver);
      cancelAnimationFrame(rafId);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, []);

  if (!enabled) return null;

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden>
        <span ref={labelRef} className="cursor-ring-label" />
      </div>
    </>
  );
}

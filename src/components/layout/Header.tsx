"use client";

/**
 * Part 2 motion revamp — continuous scroll-ratio header.
 *
 * R&D notes (Phase 0): Linear's header reads as a living object because its
 * geometry is a pure function of scroll position, not a two-state snap.
 * This implementation interpolates width, border-radius, top offset, and
 * background opacity continuously over a 0–120px scroll zone, writing
 * inline styles every animation frame (no CSS transition on those
 * properties, so the header tracks the scrollbar exactly). Scroll position
 * comes from Lenis when the global instance exists (window.__lenis, set by
 * LenisProvider) and falls back to window.scrollY, read inside a
 * gsap.ticker callback so it shares the same frame clock as Lenis.
 *
 * Direction (per client feedback): the header OPENS full-width and shrinks
 * into the floating pill as you scroll down, proportionally.
 * scrollY =   0px → full width, radius 0, flush to top, more opaque
 * scrollY =  60px → halfway: narrower, half the radius, floating away from edges
 * scrollY = 120px+ → centered pill, min(720px, vw − 24px), radius 9999, top 20px
 */
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import gsap from "gsap";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { primaryNav } from "@/data/navigation";
import { cn } from "@/lib/utils";

const SCROLL_ZONE = 120;
const PILL_MAX_WIDTH = 720;
const TOP_OFFSET = 20;

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export function Header() {
  const headerRef = React.useRef<HTMLElement>(null);
  const openRef = React.useRef(false);
  const [compact, setCompact] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  openRef.current = open;

  React.useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    let lastProgress = -1;
    let lastWindowWidth = -1;

    const apply = (progress: number) => {
      const windowWidth = window.innerWidth;
      if (progress === lastProgress && windowWidth === lastWindowWidth) return;
      lastProgress = progress;
      lastWindowWidth = windowWidth;

      const pillWidth = Math.min(PILL_MAX_WIDTH, windowWidth - 24);
      const width = lerp(windowWidth, pillWidth, progress);
      // While the mobile panel is open the box needs soft corners, not a pill.
      const radius = openRef.current
        ? Math.min(26, lerp(0, 9999, progress))
        : lerp(0, 9999, progress);
      const top = lerp(0, TOP_OFFSET, progress);
      const bgOpacity = lerp(0.95, 0.65, progress);

      Object.assign(el.style, {
        width: `${width}px`,
        borderRadius: `${radius}px`,
        top: `${top}px`,
        backgroundColor: `rgb(var(--color-base-rgb) / ${bgOpacity})`,
      });

      setCompact(progress > 0.6);
    };

    const tick = () => {
      const scroll = window.__lenis?.scroll ?? window.scrollY;
      apply(Math.min(Math.max(scroll / SCROLL_ZONE, 0), 1));
    };

    gsap.ticker.add(tick);
    const onResize = () => {
      lastProgress = -1;
      tick();
    };
    window.addEventListener("resize", onResize);
    tick();

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    // Freeze scroll while the mobile panel is open (Lenis-aware).
    if (open) {
      window.__lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      window.__lenis?.start();
      document.body.style.overflow = "";
    }
    // Re-derive the border radius for the new open state on the next frame.
    if (headerRef.current) {
      const el = headerRef.current;
      const scroll = window.__lenis?.scroll ?? window.scrollY;
      const progress = Math.min(Math.max(scroll / SCROLL_ZONE, 0), 1);
      el.style.borderRadius = open
        ? `${Math.min(26, lerp(0, 9999, progress))}px`
        : `${lerp(0, 9999, progress)}px`;
    }
    return () => {
      window.__lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      ref={headerRef}
      className="fixed left-1/2 z-50 -translate-x-1/2 border border-ink/10 px-4 shadow-header backdrop-blur-xl backdrop-saturate-[1.8] sm:px-6"
      style={{
        top: "0px",
        width: "100vw",
        borderRadius: "0px",
        backgroundColor: "rgb(var(--color-base-rgb) / 0.95)",
        transition: "none",
      }}
    >
      <div
        className={cn(
          "flex items-center justify-between",
          compact ? "h-[58px]" : "h-[62px]"
        )}
      >
        <Logo compact={compact} />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-0.5">
          {primaryNav.map((item) => {
            const active =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "whitespace-nowrap rounded-full px-2.5 py-1.5 text-[13px] font-medium transition-colors duration-200",
                  active
                    ? "bg-accent/10 text-accent"
                    : "text-ink/65 hover:bg-accent/10 hover:text-accent"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button href="/contact" size="sm" className="hidden whitespace-nowrap px-3.5 text-[13px] lg:inline-flex">
            Work with us
          </Button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="lg:hidden inline-flex size-9 items-center justify-center rounded-full border border-ink/10 text-ink/80 transition-colors hover:bg-accent/10 hover:text-accent"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300",
          open ? "max-h-[70vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <nav aria-label="Mobile" className="flex flex-col gap-1 border-t border-ink/[0.06] py-4">
          {primaryNav.map((item) => {
            const active =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  active
                    ? "bg-accent/10 text-accent"
                    : "text-ink/70 hover:bg-accent/10 hover:text-accent"
                )}
              >
                {item.label}
              </Link>
            );
          })}
          <Button href="/contact" className="mt-3 w-full">
            Work with us
          </Button>
        </nav>
      </div>
    </header>
  );
}

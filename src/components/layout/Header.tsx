"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { primaryNav } from "@/data/navigation";
import { getBookingUrl } from "@/lib/env";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();
  const booking = getBookingUrl();

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-white/5 bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent"
      )}
    >
      <Container className="flex h-[68px] items-center justify-between md:h-[80px]">
        <Logo size="md" />

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-1">
          {primaryNav.map((item) => {
            const active =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-[14px] font-medium transition-colors",
                  active ? "text-white" : "text-white/60 hover:text-white"
                )}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-3 bottom-1 h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Button href={booking} size="sm" className="px-5">
            <CalendarClock className="size-4" />
            Book a Call
          </Button>
        </div>

        <button
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="lg:hidden inline-flex size-10 items-center justify-center rounded-full border border-white/10 text-white/80 hover:bg-white/5"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </Container>

      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden border-b border-white/5 bg-ink-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-300",
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Container className="py-5">
          <nav aria-label="Mobile" className="flex flex-col gap-1">
            {primaryNav.map((item) => {
              const active = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-base font-medium",
                    active
                      ? "bg-white/[0.06] text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="mt-4 pt-4 border-t border-white/5">
            <Button href={booking} className="w-full">
              <CalendarClock className="size-4" />
              Book a Strategy Call
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}

/**
 * 2026-07 revamp: copy scrubbed, semantic tokens, and a dim architectural
 * texture layer behind the gradient.
 * Photo: https://unsplash.com/photos/photo-1486406146926-c627a92ad1ab
 * (Sean Pollock, Unsplash license) — /public/images/architecture-grid.jpg
 */
import Image from "next/image";
import { ArrowRight, CalendarClock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { getBookingUrl, publicEnv } from "@/lib/env";

export function CTABanner() {
  return (
    <section className="section">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-gradient-to-br from-brand-500/15 via-accent-violet/10 to-accent-sky/10 p-8 md:p-12">
          <Image
            src="/images/architecture-grid.jpg"
            alt=""
            fill
            loading="lazy"
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="pointer-events-none object-cover opacity-[0.06] dark:opacity-[0.10]"
            aria-hidden
          />
          <div className="absolute -top-32 -right-24 size-[420px] rounded-full bg-brand-500/25 blur-3xl" aria-hidden />
          <div className="absolute -bottom-32 -left-24 size-[420px] rounded-full bg-accent-violet/20 blur-3xl" aria-hidden />

          <div className="relative grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-accent">
                Ready to ship something real?
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                Map your AI idea into a production system in one strategy call.
              </h2>
              <p className="mt-3 max-w-2xl text-[15px] text-ink/70">
                30 minutes, no pitch deck. Bring a goal, leave with a candid architecture and a realistic timeline.
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="flex flex-col gap-2.5">
                <Button href={getBookingUrl()} size="lg" className="w-full">
                  <CalendarClock className="size-4" />
                  Book a strategy call
                  <ArrowRight className="size-4" />
                </Button>
                <Button href={publicEnv.socials.whatsapp || "/contact"} variant="secondary" size="lg" className="w-full">
                  <MessageCircle className="size-4" />
                  Or message on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

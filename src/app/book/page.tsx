import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BookingCalendar } from "@/components/booking/BookingCalendar";
import { publicEnv } from "@/lib/env";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Book a strategy call",
  path: "/book",
  description:
    "Book a free 30-minute strategy call with QentrixAI. Pick a date and time, tell us what you're building, and we'll confirm by email.",
});

export default function BookPage() {
  const p = publicEnv.profile;
  const s = publicEnv.socials;

  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeading
            eyebrow="Book a call"
            title="Pick a slot. We'll take it from there."
            description="A free 30-minute strategy call. No pitch deck, no pressure. Bring a goal, leave with a candid architecture and a realistic timeline."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="rounded-3xl border border-ink/[0.06] bg-ink/[0.02] p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-ink">Choose a date & time</h2>
                <p className="mt-1 text-[14px] text-ink/60">
                  All times shown in Pakistan Standard Time (PKT). We'll confirm the meeting link by email.
                </p>
                <div className="mt-6">
                  <BookingCalendar />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-4">
              <div className="rounded-3xl border border-ink/[0.06] bg-ink/[0.02] p-6">
                <h3 className="font-display text-lg font-semibold text-ink">Direct lines</h3>
                <ul className="mt-4 space-y-3 text-[14px] text-ink/75">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 text-ink/50" />
                    <a href={`mailto:${p.email}`} className="hover:text-ink">
                      {p.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 text-ink/50" />
                    <a href={`tel:${p.phone}`} className="hover:text-ink">
                      {p.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 text-ink/50" />
                    <span>{p.location}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 text-ink/50" />
                    <span>Mon – Sat · 9:00 – 19:00 PKT</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-ink/[0.06] bg-gradient-to-br from-brand-500/15 via-transparent to-accent-violet/10 p-6">
                <h3 className="font-display text-lg font-semibold text-ink">Prefer to skip the calendar?</h3>
                <p className="mt-1 text-[14px] text-ink/65">
                  Send a brief instead, or ping us on WhatsApp. Same response time.
                </p>
                <div className="mt-4 grid gap-2">
                  {s.whatsapp && (
                    <a
                      href={s.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-brand-700 px-5 py-2.5 text-[14px] font-medium text-white shadow-glow transition-all hover:scale-[1.02] hover:brightness-110"
                    >
                      <MessageCircle className="size-4" /> WhatsApp us
                    </a>
                  )}
                  <a
                    href="/contact"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 bg-ink/[0.03] px-5 py-2.5 text-[14px] font-medium text-ink transition-colors hover:bg-ink/[0.07]"
                  >
                    Send a brief instead
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}

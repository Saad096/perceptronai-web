import { Mail, Phone, MapPin, Clock, MessageCircle, Linkedin, Github, CalendarClock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ContactForm } from "@/components/forms/ContactForm";
import { FAQ } from "@/components/sections/FAQ";
import { publicEnv, getBookingUrl } from "@/lib/env";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description:
    "Talk to QentrixAI about your AI project. Book a strategy call, send a brief, or reach us on email or WhatsApp.",
});

export default function ContactPage() {
  const p = publicEnv.profile;
  const s = publicEnv.socials;
  const booking = getBookingUrl();

  return (
    <>
      <section className="pt-32 pb-12">
        <Container>
          <SectionHeading
            eyebrow="Contact"
            title="Tell us about the problem. We'll tell you straight."
            description="30-minute strategy call, brief by email, or quick WhatsApp ping — whichever fits how you work. We reply within one business day."
          />
        </Container>
      </section>

      <section className="pb-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6 md:p-8">
                <h2 className="font-display text-xl font-semibold text-white">Send a brief</h2>
                <p className="mt-1 text-[14px] text-white/60">
                  Anything you can share helps — problem, timeline, stack constraints, success metric.
                </p>
                <div className="mt-6">
                  <ContactForm />
                </div>
              </div>
            </div>

            <aside className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="font-display text-lg font-semibold text-white">Direct lines</h3>
                <ul className="mt-4 space-y-3 text-[14px] text-white/75">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-4 text-white/50" />
                    <a href={`mailto:${p.email}`} className="hover:text-white">
                      {p.email}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-4 text-white/50" />
                    <a href={`tel:${p.phone}`} className="hover:text-white">
                      {p.phone}
                    </a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-4 text-white/50" />
                    <span>{p.location}</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Clock className="mt-0.5 size-4 text-white/50" />
                    <span>Mon – Sat · 9:00 – 19:00 PKT</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-white/[0.06] bg-gradient-to-br from-brand-500/15 via-transparent to-accent-violet/10 p-6">
                <h3 className="font-display text-lg font-semibold text-white">Skip the form</h3>
                <p className="mt-1 text-[14px] text-white/65">
                  Book a 30-minute strategy call. Or ping us on WhatsApp — same response time.
                </p>
                <div className="mt-4 grid gap-2">
                  <Button href={booking} className="w-full">
                    <CalendarClock className="size-4" /> Book a Strategy Call
                  </Button>
                  {s.whatsapp && (
                    <Button href={s.whatsapp} variant="secondary" className="w-full">
                      <MessageCircle className="size-4" /> WhatsApp
                    </Button>
                  )}
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.06] bg-white/[0.02] p-6">
                <h3 className="font-display text-lg font-semibold text-white">Elsewhere</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.linkedin && (
                    <a
                      href={s.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/80 hover:bg-white/[0.07]"
                    >
                      <Linkedin className="size-3.5" /> LinkedIn
                    </a>
                  )}
                  {s.github && (
                    <a
                      href={s.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/80 hover:bg-white/[0.07]"
                    >
                      <Github className="size-3.5" /> GitHub
                    </a>
                  )}
                  {s.upwork && (
                    <a
                      href={s.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/80 hover:bg-white/[0.07]"
                    >
                      Upwork
                    </a>
                  )}
                  {s.fiverr && (
                    <a
                      href={s.fiverr}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/80 hover:bg-white/[0.07]"
                    >
                      Fiverr
                    </a>
                  )}
                  {s.freelancer && (
                    <a
                      href={s.freelancer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/80 hover:bg-white/[0.07]"
                    >
                      Freelancer
                    </a>
                  )}
                </div>
              </div>
            </aside>
          </div>
        </Container>
      </section>

      <FAQ />
    </>
  );
}

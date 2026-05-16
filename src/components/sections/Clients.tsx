import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { clients } from "@/data/clients";

export function Clients() {
  if (clients.length === 0) return null;

  // Repeat the strip enough times to fill the marquee without visible seams.
  const lane = [...clients, ...clients, ...clients, ...clients];

  return (
    <section className="relative py-14">
      <Container>
        <Reveal>
          <p className="text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/45">
            Trusted by teams building real things
          </p>
        </Reveal>

        <div className="relative mt-7 overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.015]">
          <div className="marquee-mask py-6">
            <div className="flex w-max items-center gap-12 whitespace-nowrap animate-marquee md:gap-16">
              {lane.map((c, i) => (
                <div
                  key={`${c.name}-${i}`}
                  className="group inline-flex shrink-0 items-center justify-center"
                  aria-label={c.name}
                >
                  <div className="relative h-10 w-32 sm:h-12 sm:w-40">
                    <Image
                      src={c.logo}
                      alt={`${c.name} logo`}
                      fill
                      sizes="160px"
                      className="object-contain opacity-70 saturate-0 transition-all duration-300 group-hover:opacity-100 group-hover:saturate-100"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

import { Container } from "@/components/ui/Container";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Service",
  path: "/terms",
  description: "Terms governing your use of the QentrixAI website.",
});

export default function TermsPage() {
  return (
    <section className="pt-32 pb-24">
      <Container className="max-w-3xl">
        <h1 className="font-display text-4xl font-semibold tracking-tight text-white md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-[14px] text-white/55">Last updated: 16 May 2026</p>

        <div className="prose prose-invert mt-8 max-w-none text-white/75">
          <h2 className="font-display text-xl font-semibold text-white">Use of this site</h2>
          <p>
            This website ("Site") is provided by QentrixAI for informational purposes. Content
            is provided "as is" without warranties of any kind. By using the Site you agree to
            these Terms.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-white">Engagements</h2>
          <p>
            Anything on this Site is marketing content, not a contract. Project engagements are
            governed by a separate written agreement signed by both parties (typically an MSA and
            an SOW).
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-white">Intellectual property</h2>
          <p>
            All Site content, including text, design, code, and graphics, is owned by QentrixAI
            or licensed to it. Don't reuse it without permission.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-white">Third-party links</h2>
          <p>
            We link to third-party tools (calendar, social platforms, payment processors). Those
            services have their own terms; we're not responsible for their content.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-white">Limitation of liability</h2>
          <p>
            To the maximum extent allowed by law, QentrixAI is not liable for indirect,
            incidental, or consequential damages arising from your use of the Site.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-white">Changes</h2>
          <p>
            We may update these Terms over time. Material changes will be flagged at the top of
            this page.
          </p>

          <h2 className="mt-8 font-display text-xl font-semibold text-white">Contact</h2>
          <p>
            Questions about these Terms? Email{" "}
            <a className="text-brand-300 hover:underline" href="mailto:saadalamtrohli106@gmail.com">
              saadalamtrohli106@gmail.com
            </a>
            .
          </p>
        </div>
      </Container>
    </section>
  );
}

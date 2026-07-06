import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const TERMS_TITLE = "Terms of Service | SolvoLab";
const TERMS_DESCRIPTION =
  "The terms that govern your use of the SolvoLab website and services, including engagements, ownership, guarantees, and liability.";

export const metadata: Metadata = {
  title: TERMS_TITLE,
  description: TERMS_DESCRIPTION,
  alternates: {
    canonical: "/terms",
  },
  openGraph: {
    type: "article",
    url: "/terms",
    title: TERMS_TITLE,
    description: TERMS_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: TERMS_TITLE,
    description: TERMS_DESCRIPTION,
  },
};

const EFFECTIVE_DATE = "July 6, 2026";
const CONTACT_EMAIL = "saboor@solvolab.com";

export default function TermsOfService() {
  return (
    <>
      <Nav />
      <main>
        <style dangerouslySetInnerHTML={{ __html: `
          .privacy-prose h2 {
            font-family: var(--font-display), sans-serif;
            font-size: 26px;
            font-weight: 600;
            margin-top: 48px;
            margin-bottom: 18px;
            color: var(--ink);
            letter-spacing: -0.015em;
          }
          .privacy-prose p {
            font-size: 16.5px;
            line-height: 1.65;
            margin-bottom: 22px;
            color: var(--ink-2);
          }
          .privacy-prose ul {
            margin-bottom: 26px;
            padding-left: 22px;
            color: var(--ink-2);
          }
          .privacy-prose li {
            margin-bottom: 12px;
            font-size: 16.5px;
            line-height: 1.65;
          }
          .privacy-prose strong {
            color: var(--ink);
          }
          .privacy-prose a {
            color: var(--teal);
            text-decoration: underline;
            font-weight: 500;
          }
          .privacy-prose a:hover {
            color: var(--teal-600);
          }
          .legal-meta {
            font-family: var(--font-mono), monospace;
            font-size: 13.5px;
            color: var(--ink-3);
            margin-top: 8px;
          }
          .legal-back {
            margin-top: 48px;
            font-weight: 600;
          }
          .legal-back a {
            color: var(--teal);
            text-decoration: none;
          }
          .legal-back a:hover {
            text-decoration: underline;
          }
        `}} />

        <header className="band-dark">
          <div className="grid-tex"></div>
          <div className="container page-hero">
            <div style={{ maxWidth: "820px" }}>
              <span className="eyebrow on-dark">Legal</span>
              <h1 className="h1">Terms of Service</h1>
              <p className="legal-meta">Effective date: {EFFECTIVE_DATE}</p>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container privacy-prose" style={{ maxWidth: "820px" }}>
            <div className="reveal">
              <p>
                These Terms of Service (&ldquo;Terms&rdquo;) govern your use of{" "}
                <strong>solvolab.com</strong> (the &ldquo;Site&rdquo;) and the services provided by SolvoLab
                (&ldquo;SolvoLab,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;), including website
                design and development, SEO, lead capture, AI voice agents, CRM configuration, workflow
                automation, and custom software builds (collectively, the &ldquo;Services&rdquo;). By using
                the Site or engaging the Services, you agree to these Terms.
              </p>

              <h2>1. Engagements &amp; scope</h2>
              <p>
                Each client engagement is defined by a written scope agreed before work begins (a proposal,
                statement of work, or equivalent). That scope, together with these Terms, forms the agreement
                for the engagement. Where the scope document and these Terms conflict, the scope document
                controls for that engagement.
              </p>

              <h2>2. Fees &amp; payment</h2>
              <ul>
                <li>
                  <strong>Structure.</strong> Engagements are typically structured as a Phase 1 build fee and
                  a Phase 2 monthly management fee, as set out in your scope document.
                </li>
                <li>
                  <strong>Invoicing.</strong> Fees are invoiced as agreed in the scope document and are due on
                  receipt unless stated otherwise. Third-party platform costs included in your plan are listed
                  in the scope document.
                </li>
                <li>
                  <strong>Late payment.</strong> We may pause Services on accounts with overdue balances after
                  reasonable notice.
                </li>
              </ul>

              <h2>3. Ownership of deliverables &amp; data</h2>
              <p>
                Upon payment of the applicable fees, you own the deliverables we create for you, including your
                website, CRM configuration, automations, and content, and you own all of your business data,
                including every lead and contact record. Wherever practical we build on accounts registered to
                your business. If an engagement ends, we hand over access and documentation so you keep
                everything. We retain ownership of our pre-existing tools, templates, and know-how used to
                deliver the work.
              </p>

              <h2>4. 90-Day Momentum Guarantee</h2>
              <p>
                Where your scope document includes the 90-Day Momentum Guarantee: if you do not see measurable
                growth in organic visibility and inbound leads within 90 days of launch, as tracked on your
                analytics dashboard, we continue working at no additional management fee until you do. The
                guarantee assumes the Services remain live and unmodified by third parties and that access we
                reasonably require is provided.
              </p>

              <h2>5. Client responsibilities</h2>
              <ul>
                <li>Provide timely access, approvals, and information reasonably needed to deliver the Services.</li>
                <li>Ensure content and materials you supply do not infringe third-party rights.</li>
                <li>Comply with laws applicable to your business, including telemarketing and messaging consent rules for SMS, email, and voice outreach sent on your behalf.</li>
              </ul>

              <h2>6. AI services</h2>
              <p>
                AI voice agents, chat agents, and automation act on the instructions and configurations agreed
                with you. AI outputs can occasionally be inaccurate; you are responsible for reviewing
                business-critical configurations we flag for approval. We process end-user data handled by
                these systems in accordance with our{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </p>

              <h2>7. Term &amp; termination</h2>
              <p>
                Either party may end an ongoing engagement with written notice as set out in the scope
                document. On termination, you pay for work performed to date, and we hand over deliverables,
                access, and documentation. There are no lock-in terms beyond the notice period stated in your
                scope document.
              </p>

              <h2>8. Warranties &amp; disclaimers</h2>
              <p>
                We provide the Services with reasonable skill and care. Except as expressly stated (including
                the guarantee above), the Site and Services are provided &ldquo;as is&rdquo; without warranties
                of any kind, and we do not warrant specific rankings, traffic levels, or revenue outcomes
                beyond the terms of the guarantee.
              </p>

              <h2>9. Limitation of liability</h2>
              <p>
                To the maximum extent permitted by law, neither party is liable for indirect, incidental, or
                consequential damages, and our total liability arising out of an engagement is limited to the
                fees you paid us in the three (3) months preceding the claim.
              </p>

              <h2>10. Governing law</h2>
              <p>
                These Terms are governed by the laws of the State of Wyoming, USA, without regard to conflict
                of law rules, unless your scope document states otherwise.
              </p>

              <h2>11. Changes to these Terms</h2>
              <p>
                We may update these Terms from time to time. The effective date above reflects the latest
                revision; continued use of the Site or Services after changes take effect constitutes
                acceptance.
              </p>

              <h2>12. Contact</h2>
              <p>
                Questions about these Terms: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
              </p>

              <p className="legal-back">
                <Link href="/">← Back to home</Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const PRIVACY_TITLE = "Privacy Policy | SolvoLab";
const PRIVACY_DESCRIPTION =
  "How SolvoLab collects, uses, shares, and protects personal information across our website and AI automation services.";

export const metadata: Metadata = {
  title: PRIVACY_TITLE,
  description: PRIVACY_DESCRIPTION,
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "article",
    url: "/privacy",
    title: PRIVACY_TITLE,
    description: PRIVACY_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: PRIVACY_TITLE,
    description: PRIVACY_DESCRIPTION,
  },
};

const EFFECTIVE_DATE = "May 24, 2026";
const CONTACT_EMAIL = "saboor@solvolab.com";

export default function PrivacyPolicy() {
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
              <h1 className="h1">Privacy Policy</h1>
              <p className="legal-meta">Effective date: {EFFECTIVE_DATE}</p>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container privacy-prose" style={{ maxWidth: "820px" }}>
            <div className="reveal">
              <p>
                SolvoLab (&ldquo;SolvoLab,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) builds AI voice agents,
                web chat, outbound sequences, and CRM &amp; workflow automation for small and mid-sized
                businesses. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you visit <strong>solvolab.com</strong> (the &ldquo;Site&rdquo;), contact us, or use
                our services (collectively, the &ldquo;Services&rdquo;). By using the Site or Services, you agree to
                the practices described here.
              </p>

              <h2>1. Information we collect</h2>
              <p>We collect the following categories of information:</p>
              <ul>
                <li>
                  <strong>Information you provide.</strong> When you submit our contact form or book a call,
                  we collect your name, business email address, and the contents of your message. If you
                  engage us as a client, we may also collect business contact details, billing information,
                  and information about your operations needed to deliver the Services.
                </li>
                <li>
                  <strong>Information collected automatically.</strong> When you visit the Site we may
                  automatically collect technical data such as your IP address, browser type, device
                  information, referring pages, and how you interact with the Site, via cookies and similar
                  technologies.
                </li>
                <li>
                  <strong>Anti-spam / security data.</strong> We use Cloudflare Turnstile to protect
                  our forms. Turnstile collects limited browser and device signals and sends them to
                  Cloudflare for analysis to distinguish humans from bots.
                </li>
              </ul>

              <h2>2. How we use your information</h2>
              <ul>
                <li>To respond to your inquiries, schedule calls, and provide the Services you request;</li>
                <li>To operate, maintain, secure, and improve the Site and Services;</li>
                <li>To detect, prevent, and address spam, fraud, and security issues;</li>
                <li>To send you service-related communications and, where permitted, relevant follow-ups;</li>
                <li>To comply with legal obligations and enforce our agreements.</li>
              </ul>

              <h2>3. Legal bases for processing (EEA/UK)</h2>
              <p>
                Where the GDPR or UK GDPR applies, we process personal data on the bases of: your
                <em> consent</em>; performance of a <em>contract</em> with you; our <em>legitimate interests</em> in
                operating and improving our business; and <em>compliance with legal obligations</em>.
              </p>

              <h2>4. How we share information</h2>
              <p>
                We do <strong>not</strong> sell your personal information. We share it only with trusted service
                providers who process it on our behalf under appropriate confidentiality and data-protection
                terms, including:
              </p>
              <ul>
                <li><strong>Email delivery</strong> (e.g., Resend) to send and receive contact-form messages and confirmations;</li>
                <li><strong>Security</strong> (e.g., Cloudflare Turnstile) for spam and abuse prevention;</li>
                <li><strong>Hosting &amp; infrastructure</strong> providers that run the Site;</li>
                <li><strong>CRM and automation platforms</strong> (e.g., HubSpot, Salesforce, Pipedrive, Zoho, Monday) where you have asked us to route or store your information;</li>
                <li><strong>Professional advisors and authorities</strong> where required by law or to protect our rights.</li>
              </ul>

              <h2>5. AI &amp; automation services</h2>
              <p>
                When we build and operate AI agents and automations for a client, we may process personal
                data belonging to that client&apos;s end users (such as callers, chat visitors, or leads) strictly
                on the client&apos;s behalf and instructions. In those cases the client is the data controller and
                SolvoLab acts as a data processor. We do not use client end-user data to train general-purpose
                models for unrelated purposes, and we configure third-party AI providers to handle data under
                their applicable enterprise/API terms.
              </p>

              <h2>6. Cookies and tracking</h2>
              <p>
                The Site uses cookies and similar technologies for essential functionality, security, and to
                understand usage. You can control cookies through your browser settings; disabling some cookies
                may affect Site functionality. The Turnstile service is subject to Cloudflare&apos;s{" "}
                <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>{" "}
                and{" "}
                <a href="https://www.cloudflare.com/website-terms/" target="_blank" rel="noopener noreferrer">Terms of Use</a>.
              </p>

              <h2>7. Data retention</h2>
              <p>
                We retain personal information only for as long as necessary to fulfil the purposes described
                in this Policy, to comply with our legal obligations, resolve disputes, and enforce our
                agreements. When no longer needed, we delete or anonymize it.
              </p>

              <h2>8. Data security</h2>
              <p>
                We use reasonable administrative, technical, and organizational measures to protect personal
                information. However, no method of transmission or storage is completely secure, and we cannot
                guarantee absolute security.
              </p>

              <h2>9. International transfers</h2>
              <p>
                We and our service providers may process information in countries other than your own. Where
                required, we rely on appropriate safeguards (such as Standard Contractual Clauses) for
                cross-border transfers.
              </p>

              <h2>10. Your rights</h2>
              <p>
                Depending on where you live, you may have rights to access, correct, delete, or port your
                personal information, to object to or restrict certain processing, and to withdraw consent.
                If you are in California, you have rights under the CCPA/CPRA, including the right to know,
                delete, and opt out of the &ldquo;sale&rdquo; or &ldquo;sharing&rdquo; of personal information (we do not sell or
                share it as those terms are defined). To exercise any right, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We will respond as required by
                applicable law.
              </p>

              <h2>11. Third-party links</h2>
              <p>
                The Site may link to third-party websites or services we do not control. This Policy does not
                apply to those sites; please review their privacy policies.
              </p>

              <h2>12. Children&apos;s privacy</h2>
              <p>
                The Site and Services are intended for businesses and are not directed to children under 16.
                We do not knowingly collect personal information from children.
              </p>

              <h2>13. Changes to this Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will post the revised version with an
                updated effective date. Material changes will be highlighted where appropriate.
              </p>

              <h2>14. Contact us</h2>
              <p>
                If you have questions or requests about this Policy or your personal information, contact us at{" "}
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
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

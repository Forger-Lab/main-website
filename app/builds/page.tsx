import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

const SITE_URL = "https://www.solvolab.com";

const PAGE_TITLE = "The Scale Build, Custom AI Agents & Automation";
const PAGE_DESCRIPTION =
  "SolvoLab builds custom AI voice agents, WhatsApp & chat agents, workflow automation, internal tools, and web apps, designed and shipped for real businesses.";
const PAGE_URL = `${SITE_URL}/builds`;
const OG_IMAGE = "/brandlogo/SolvoLabLogo.png";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESCRIPTION,
  keywords: [
    "custom AI agents",
    "AI voice agents",
    "WhatsApp AI agent",
    "chat agents",
    "workflow automation",
    "n8n automation",
    "internal tools",
    "custom dashboards",
    "custom web apps",
    "SaaS MVP development",
    "AI software development",
    "SolvoLab",
  ],
  alternates: {
    canonical: "/builds",
  },
  openGraph: {
    type: "website",
    url: "/builds",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        alt: "SolvoLab, The Scale Build, custom AI agents, automation & software.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      "name": "SolvoLab",
      "url": SITE_URL,
      "logo": {
        "@type": "ImageObject",
        "@id": `${SITE_URL}/#logo`,
        "url": `${SITE_URL}/brandlogo/SolvoLabLogo.png`,
        "caption": "SolvoLab Logo",
      },
      "email": "saboor@solvolab.com",
    },
    {
      "@type": "WebPage",
      "@id": `${PAGE_URL}#webpage`,
      "url": PAGE_URL,
      "name": PAGE_TITLE,
      "description": PAGE_DESCRIPTION,
      "isPartOf": { "@id": `${SITE_URL}/#website` },
      "primaryImageOfPage": { "@id": `${SITE_URL}/#logo` },
      "breadcrumb": { "@id": `${PAGE_URL}#breadcrumb` },
      "inLanguage": "en",
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${PAGE_URL}#breadcrumb`,
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "The Scale Build", "item": PAGE_URL },
      ],
    },
    {
      "@type": "Service",
      "@id": `${PAGE_URL}#service`,
      "name": "The Scale Build, Custom AI, Automation & Software Development",
      "serviceType": "Custom AI agent, automation & software development",
      "url": PAGE_URL,
      "provider": { "@id": `${SITE_URL}/#organization` },
      "description":
        "Custom AI voice agents, WhatsApp & chat agents, workflow automation, internal tools & dashboards, and custom web apps, designed, built, and shipped for real businesses.",
      "areaServed": { "@type": "Place", "name": "Worldwide" },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Custom build services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "AI voice agents",
              "description":
                "Phone agents that answer, qualify, and book, 24/7, in natural real-time speech.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Chat & WhatsApp agents",
              "description":
                "Customer-facing AI agents wired into your store, CRM, or support stack.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Workflow automation",
              "description":
                "n8n and API pipelines that remove the manual ops work eating your team's time.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Internal tools & dashboards",
              "description":
                "The custom software your team actually needs, built around how you work.",
            },
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Custom web apps & MVPs",
              "description":
                "From spec to shipped product, including SaaS MVPs ready to put in front of users.",
            },
          },
        ],
      },
    },
  ],
};

export default function Builds() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Nav />
      <main>
        {/* ===================== HERO ===================== */}
        <header className="band-dark">
          <div className="grid-tex"></div>
          <div className="container page-hero">
            <div className="page-hero-grid" style={{ alignItems: "center" }}>
              <div>
                <div className="breadcrumb">
                  <Link href="/">SolvoLab</Link>{" "}
                  <span data-ic="chevron" style={{ transform: "rotate(-90deg)", fontSize: "12px" }}><Icon name="chevron" /></span>{" "}
                  The Scale Build
                </div>
                <span className="eyebrow on-dark">The Scale Build</span>
                <h1 className="h1">We build the AI systems your business actually runs on.</h1>
                <p className="lede">Voice agents, WhatsApp &amp; chat agents, workflow automation, internal tools &amp; dashboards, and custom web apps, designed, built, and shipped by the team behind SolvoLab.</p>
                <div className="btn-row">
                  <Link className="btn btn-light btn-lg" href="/contact" data-analytics="builds_book_hero">Book a build call <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                  <a className="btn btn-outline-light btn-lg" href="#builds">See what we&apos;ve built <span data-ic="chevron"><Icon name="chevron" /></span></a>
                </div>
              </div>

              {/* signature: live voice-agent call log */}
              <div className="calllog reveal" aria-hidden="true">
                <div className="calllog-head">
                  <span className="cl-title">&quot;Aiesha&quot; · inbound voice agent</span>
                  <span className="cl-live">on call</span>
                </div>
                <div className="cl-turns">
                  <div className="cl-turn agent">
                    <span className="cl-who">Agent</span>
                    <span className="cl-text">Thanks for calling, this is Aiesha. Are you looking to book a survey, or is this about an existing job?</span>
                  </div>
                  <div className="cl-turn caller">
                    <span className="cl-who">Caller</span>
                    <span className="cl-text">A new one. I need someone out to quote a CCTV install this week.</span>
                  </div>
                  <div className="cl-turn agent">
                    <span className="cl-who">Agent</span>
                    <span className="cl-text">I can do that. I&apos;ve got Thursday 10am or Friday 2pm open, which suits? I&apos;ll text you the confirmation.</span>
                  </div>
                </div>
                <div className="cl-foot">
                  <span className="cl-metric"><b>&lt;600ms</b> response latency</span>
                  <span className="cl-metric"><b>24/7</b> answered</span>
                  <span className="cl-metric"><b>0</b> missed calls</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ===================== SELECTED BUILDS ===================== */}
        <section className="section" id="builds">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Selected builds</span>
              <h2 className="h2">Real systems, in production.</h2>
              <p className="lede">A sample of custom work we&apos;ve shipped, what it is, what it does, what it&apos;s built on, and where it stands today.</p>
            </div>

            <div className="proof-grid">
              {/* 1 */}
              <article className="proof-card reveal">
                <div className="proof-top">
                  <span className="proof-ic" data-ic="phone"><Icon name="phone" /></span>
                  <span className="proof-index">01 / voice</span>
                </div>
                <h3>&quot;Aiesha&quot;, AI voice agent</h3>
                <p className="proof-what">Inbound call-handling agent with real-time speech. Answers, qualifies the caller, and books or routes the enquiry, no hold music, no missed calls after hours.</p>
                <div className="stack-tags">
                  <span className="stack-tag">LiveKit</span>
                  <span className="stack-tag">Twilio SIP</span>
                </div>
                <div className="proof-foot">
                  <span className="proof-status">In production</span>
                </div>
              </article>

              {/* 2 */}
              <article className="proof-card reveal">
                <div className="proof-top">
                  <span className="proof-ic" data-ic="chat"><Icon name="chat" /></span>
                  <span className="proof-index">02 / commerce</span>
                </div>
                <h3>WhatsApp commerce agents</h3>
                <p className="proof-what">AI agents wired into Shopify for e-commerce brands, order status, product Q&amp;A, and cart-recovery flows handled directly in chat. Deployed for two live stores in Pakistan.</p>
                <div className="stack-tags">
                  <span className="stack-tag">WhatsApp Business API</span>
                  <span className="stack-tag">Shopify</span>
                  <span className="stack-tag">Node</span>
                  <span className="stack-tag">Claude / OpenAI</span>
                </div>
                <div className="proof-foot">
                  <span className="proof-status">Live · two brands</span>
                </div>
              </article>

              {/* 3 */}
              <article className="proof-card reveal">
                <div className="proof-top">
                  <span className="proof-ic" data-ic="chart"><Icon name="chart" /></span>
                  <span className="proof-index">03 / analytics</span>
                </div>
                <h3>Teacher performance analytics</h3>
                <p className="proof-what">AI evaluation of tutoring-session transcripts at scale for a major MENA edtech platform, scoring teaching quality across thousands of sessions and surfacing it to the ops team.</p>
                <div className="stack-tags">
                  <span className="stack-tag">Python</span>
                  <span className="stack-tag">LLM pipelines</span>
                  <span className="stack-tag">AWS Athena / Trino</span>
                </div>
                <div className="proof-foot">
                  <span className="proof-status">Running at scale</span>
                </div>
              </article>

              {/* 4 */}
              <article className="proof-card reveal">
                <div className="proof-top">
                  <span className="proof-ic" data-ic="shield"><Icon name="shield" /></span>
                  <span className="proof-index">04 / security</span>
                </div>
                <h3>Incident response + web rebuild</h3>
                <p className="proof-what">Detected and fully remediated a live ClickFix / EtherHiding malware attack on a client&apos;s WordPress site, delivered a vulnerability-assessment report, and rebuilt the site clean.</p>
                <div className="stack-tags">
                  <span className="stack-tag">WordPress</span>
                  <span className="stack-tag">Strapi</span>
                  <span className="stack-tag">Incident response</span>
                  <span className="stack-tag">Vuln assessment</span>
                </div>
                <div className="proof-foot">
                  <span className="proof-status">Resolved &amp; rebuilt</span>
                  <span className="proof-client">Flagship Client: <b>Vigilant Security Services</b></span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ===================== WHAT WE BUILD ===================== */}
        <section className="section" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">What we build</span>
              <h2 className="h2">Five kinds of custom work.</h2>
              <p className="lede">If it&apos;s an AI agent, an automation, or a piece of custom software, it&apos;s in scope. Here&apos;s where most builds land.</p>
            </div>

            <div className="incl-grid">
              <div className="incl-item reveal"><span className="incl-ic" data-ic="phone"><Icon name="phone" /></span><div><h4>AI voice agents</h4><p>Phone agents that answer, qualify, and book, 24/7, in natural real-time speech.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="chat"><Icon name="chat" /></span><div><h4>Chat &amp; WhatsApp agents</h4><p>Customer-facing agents wired into your store, CRM, or support stack.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="workflow"><Icon name="workflow" /></span><div><h4>Workflow automation</h4><p>n8n and API pipelines that remove the manual ops work eating your team&apos;s time.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="gauge"><Icon name="gauge" /></span><div><h4>Internal tools &amp; dashboards</h4><p>The custom software your team actually needs, built around how you work.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="rocket"><Icon name="rocket" /></span><div><h4>Custom web apps &amp; MVPs</h4><p>From spec to shipped product, including SaaS MVPs ready to put in front of users.</p></div></div>
            </div>
          </div>
        </section>

        {/* ===================== HOW IT WORKS ===================== */}
        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How it works</span>
              <h2 className="h2">Scoped, demoed weekly, shipped.</h2>
              <p className="lede">No open-ended retainers to start. We agree the scope, then you watch it get built.</p>
            </div>

            <div className="proc-grid">
              <div className="step reveal">
                <div className="step-n">Step 01</div>
                <h4>Scope call</h4>
                <p>A 30-minute call where we map the system, inputs, integrations, and what &quot;done&quot; looks like.</p>
              </div>
              <div className="step reveal">
                <div className="step-n">Step 02</div>
                <h4>Fixed-scope build</h4>
                <p>We build to that scope with weekly demos, so you see real progress instead of a status update.</p>
              </div>
              <div className="step reveal">
                <div className="step-n">Step 03</div>
                <h4>Ship &amp; support</h4>
                <p>Clean handover with documentation, or an ongoing retainer if you&apos;d rather we keep running it.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== STACK STRIP ===================== */}
        <section className="section-sm" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <p className="reveal" style={{ textAlign: "center", margin: "0 0 22px", fontFamily: "var(--mono)", fontSize: "12px", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--ink-3)" }}>Built on</p>
            <div className="stack-strip reveal">
              <span className="stack-logo"><img src="/logos/livekit-color.svg" alt="LiveKit" /><span>LiveKit</span></span>
              <span className="stack-logo"><img src="/logos/n8n-color.svg" alt="n8n" /><span>n8n</span></span>
              <span className="stack-logo"><img src="/logos/langchain-color.png" alt="LangChain" /><span>LangChain</span></span>
              <span className="stack-logo"><img src="/logos/llamaindex-color.svg" alt="LlamaIndex" /><span>LlamaIndex</span></span>
              <span className="stack-logo"><img src="/logos/pydanticai-color.svg" alt="Pydantic AI" /><span>Pydantic AI</span></span>
              <span className="stack-logo"><img src="/logos/Supabase%20Icon.png" alt="Supabase" /><span>Supabase</span></span>
              <span className="stack-logo"><img src="/logos/Google%20Cloud.png" alt="Google Cloud" /><span>Google Cloud</span></span>
              <span className="stack-logo"><img src="/logos/Next.js.png" alt="Next.js" /><span>Next.js</span></span>
            </div>
          </div>
        </section>

        {/* ===================== ABOUT ===================== */}
        <section className="section">
          <div className="container container-narrow">
            <div className="card reveal about-card" style={{ padding: "40px" }}>
              <div className="about-mono">
                <div className="tk">// SolvoLab</div>
                agency work<br />
                production AI systems<br />
                data &amp; analytics
              </div>
              <div>
                <span className="eyebrow">Who&apos;s behind this</span>
                <p className="lede" style={{ marginTop: "16px" }}>SolvoLab is a small team that builds and runs real systems, the same people behind the Inbound Engine for security firms. The custom-build side spans production AI agents, workflow automation, and a data-and-analytics background, so a build gets engineered, not just prototyped.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================== FINAL CTA ===================== */}
        <section className="section band-dark">
          <div className="grid-tex"></div>
          <div className="container">
            <div className="cta-band reveal">
              <span className="eyebrow on-dark">Your next step</span>
              <h2 className="h2" style={{ marginTop: "16px" }}>Book a build call.</h2>
              <p className="lede">Free, 30 minutes, no obligation. Tell us what you&apos;re trying to build. We&apos;ll tell you how we&apos;d approach it, what it&apos;d take, and whether we&apos;re the right team, on the call, straight.</p>
              <div className="btn-row">
                <Link className="btn btn-light btn-lg" href="/contact" data-analytics="builds_book_footer">Book a build call <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                <a className="btn btn-outline-light btn-lg" href="mailto:saboor@solvolab.com">saboor@solvolab.com</a>
              </div>
              <div className="upwork-note">
                <span className="un-ic" data-ic="bolt"><Icon name="bolt" /></span>
                <span>Coming from Upwork? Mention it, we&apos;ll reference your job post on the call.</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

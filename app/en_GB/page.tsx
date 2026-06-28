import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "SolvoLab, The 24/7 Client Engine",
  description:
    "SolvoLab replaces your web designer, SEO agency, and CRM consultant with one team that builds and runs your entire growth pipeline, with no gaps.",
  alternates: {
    canonical: "/en_GB",
  },
  openGraph: {
    title: "SolvoLab, The 24/7 Client Engine",
    description:
      "SolvoLab replaces your web designer, SEO agency, and CRM consultant with one team that builds and runs your entire growth pipeline, with no gaps.",
    url: "/en_GB",
  },
  twitter: {
    title: "SolvoLab, The 24/7 Client Engine",
    description:
      "SolvoLab replaces your web designer, SEO agency, and CRM consultant with one team that builds and runs your entire growth pipeline, with no gaps.",
  },
};

const schemaJson = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.solvolab.com/#organization",
      "name": "SolvoLab",
      "url": "https://www.solvolab.com",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.solvolab.com/#logo",
        "url": "https://www.solvolab.com/brandlogo/SolvoLabLogo.png",
        "caption": "SolvoLab Logo"
      },
      "image": {
        "@id": "https://www.solvolab.com/#logo"
      },
      "email": "hello@solvolab.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "30 N Gould St, STE R",
        "addressLocality": "Sheridan",
        "addressRegion": "WY",
        "postalCode": "82801",
        "addressCountry": "USA"
      },
      "sameAs": [
        "https://www.linkedin.com/company/110093159"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.solvolab.com/#website",
      "url": "https://www.solvolab.com",
      "name": "SolvoLab",
      "publisher": {
        "@id": "https://www.solvolab.com/#organization"
      }
    },
    {
      "@type": "WebPage",
      "@id": "https://www.solvolab.com/en_GB/#webpage",
      "url": "https://www.solvolab.com/en_GB",
      "name": "SolvoLab, The 24/7 Client Engine",
      "about": {
        "@id": "https://www.solvolab.com/#organization"
      },
      "isPartOf": {
        "@id": "https://www.solvolab.com/#website"
      }
    },
    {
      "@type": "Service",
      "@id": "https://www.solvolab.com/#webdev-service",
      "name": "Web Design & Development",
      "provider": {
        "@id": "https://www.solvolab.com/#organization"
      },
      "url": "https://www.solvolab.com/web-development",
      "description": "A custom, fast, mobile-first site engineered to turn visitors into enquiries, not just look pretty."
    },
    {
      "@type": "Service",
      "@id": "https://www.solvolab.com/#seo-service",
      "name": "SEO & Local SEO",
      "provider": {
        "@id": "https://www.solvolab.com/#organization"
      },
      "url": "https://www.solvolab.com/seo",
      "description": "Technical foundation, on-page optimisation, and Google Business Profile so you rank where buying intent is highest."
    },
    {
      "@type": "Service",
      "@id": "https://www.solvolab.com/#lead-capture-service",
      "name": "Lead Capture & AI Receptionist",
      "provider": {
        "@id": "https://www.solvolab.com/#organization"
      },
      "url": "https://www.solvolab.com/lead-capture",
      "description": "Smart forms, live chat, call-back widget, and a 24/7 AI voice agent that answers, qualifies, and books."
    },
    {
      "@type": "Service",
      "@id": "https://www.solvolab.com/#crm-service",
      "name": "CRM Command Centre",
      "provider": {
        "@id": "https://www.solvolab.com/#organization"
      },
      "url": "https://www.solvolab.com/crm",
      "description": "Every lead, call, and deal in one place, with a unified dashboard for rankings, traffic, and conversions."
    },
    {
      "@type": "Service",
      "@id": "https://www.solvolab.com/#automation-service",
      "name": "Automation & Follow-Up",
      "provider": {
        "@id": "https://www.solvolab.com/#organization"
      },
      "url": "https://www.solvolab.com/automation",
      "description": "Missed-call text-back, email + SMS nurture, and a reputation engine that chases every lead until they book."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.solvolab.com/en_GB/#faq",
      "isPartOf": {
        "@id": "https://www.solvolab.com/en_GB/#webpage"
      },
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SolvoLab?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SolvoLab is a single team that builds and runs your entire growth pipeline, website, SEO, lead capture, CRM, and automated follow-up, as one connected system. Instead of hiring a separate web designer, SEO agency, and CRM consultant, you get all five working together with no vendor handoffs."
          }
        },
        {
          "@type": "Question",
          "name": "What's included in The Engine?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Five connected systems: (1) Web Design & Development, (2) SEO & Local SEO, (3) Lead Capture & AI Receptionist, (4) CRM Command Centre, and (5) Automation & Follow-Up. The same team builds and owns all five so each hands off cleanly to the next."
          }
        },
        {
          "@type": "Question",
          "name": "Who is SolvoLab for?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Small and multi-location businesses in home services, dental, real estate, auto shops, security companies, and professional services, especially those losing leads either because they don't rank on Google or AI search, or because their traffic isn't converting and follow-up is too slow."
          }
        },
        {
          "@type": "Question",
          "name": "What is the AI receptionist?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A 24/7 AI voice agent that answers inbound calls, qualifies the caller, and books the appointment, so calls don't go unanswered after hours. It works alongside smart forms, live chat, a call-back widget, and missed-call text-back."
          }
        },
        {
          "@type": "Question",
          "name": "What is missed-call text-back?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "If a call is missed, the caller is automatically texted back within seconds so the lead doesn't go cold before someone can follow up."
          }
        },
        {
          "@type": "Question",
          "name": "How fast can I go live?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The build phase runs as a focused launch sprint over roughly the first three months (Phase 1). There's no drawn-out discovery stall, the team maps your funnel and launches fast."
          }
        },
        {
          "@type": "Question",
          "name": "How does the engagement work over time?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Phase 1 (Months 1 to 3) builds and launches your full engine. Phase 2 (Month 4 onward) is ongoing management: continued SEO, content and backlinks, managed website and hosting, tuned CRM and automation, plus a monthly report and strategy call."
          }
        },
        {
          "@type": "Question",
          "name": "What is the 90-Day Momentum Guarantee?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Within 90 days of launch, you should see measurable growth in organic visibility and inbound leads. If you don't, SolvoLab keeps working at no extra cost until you do."
          }
        },
        {
          "@type": "Question",
          "name": "How much does SolvoLab cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Pricing is custom and shared on your teardown call. It's structured as one all-inclusive investment, a Phase 1 build (3-month launch sprint) and a Phase 2 monthly fee from month 4, with platform, tools, and execution all included so there's no separate vendor stack to pay for."
          }
        },
        {
          "@type": "Question",
          "name": "What is a Growth Teardown?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A free consultation where SolvoLab shows you exactly where you're losing leads today and what your engine would look like once built. If it's not a fit, you keep the competitor teardown anyway."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to hire extra staff?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The system handles answering, capturing, tracking, and following up with leads automatically, so you can go live without adding new headcount."
          }
        },
        {
          "@type": "Question",
          "name": "What do I get for free?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A competitor teardown showing how your top 3 competitors beat you online, a done-for-you 6-month content calendar, and priority speed-to-lead so new leads hit your phone within 60 seconds."
          }
        },
        {
          "@type": "Question",
          "name": "Will I be able to track results?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. A unified analytics dashboard puts rankings, traffic, leads, and conversions on one screen, plus you get a monthly report and strategy call during the management phase."
          }
        },
        {
          "@type": "Question",
          "name": "How do I get started?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Book a free Growth Teardown through the contact page at solvolab.com or email hello@solvolab.com."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Nav />
      <main>
        <header className="band-dark">
          <div className="grid-tex"></div>
          <div className="container hero">
            <div className="hero-grid">
              <div>
                <span className="eyebrow on-dark">The 24/7 Client Engine</span>
                <h1 className="h1">Your whole growth pipeline, built and run by <span className="accent on-dark">one team.</span></h1>
                <p className="lede">Website, SEO, lead capture, CRM, and automated follow-up, engineered together as a single system. No three vendors. No handoffs that break. No leads slipping through the gaps, because there are no gaps.</p>
                <div className="btn-row">
                  <Link className="btn btn-light btn-lg" href="/contact">Book a free Growth Teardown <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                  <a className="btn btn-outline-light btn-lg" href="#engine">See how the Engine works</a>
                </div>
                <div className="hero-trust">
                  <div><div className="ht-num">1 team</div><div className="ht-label">owns site → SEO → CRM → follow-up</div></div>
                  <div><div className="ht-num">90 days</div><div className="ht-label">Momentum Guarantee, or we keep working free</div></div>
                  <div><div className="ht-num">0 gaps</div><div className="ht-label">no vendor handoffs to break</div></div>
                </div>
              </div>

              {/* pipeline visual */}
              <div className="pipeline reveal">
                <div className="pipeline-head">
                  <span className="pl-title">Your pipeline · one system</span>
                  <span className="pl-live">running</span>
                </div>
                <div className="pl-flow">
                  <div className="pl-node">
                    <span className="pl-ic" data-ic="search"><Icon name="search" /></span>
                    <span><span className="pl-name">Found on Google &amp; AI search</span><span className="pl-meta">Website + technical &amp; local SEO</span></span>
                    <span className="pl-step">visit</span>
                  </div>
                  <div className="pl-connector"></div>
                  <div className="pl-node">
                    <span className="pl-ic" data-ic="headset"><Icon name="headset" /></span>
                    <span><span className="pl-name">Captured in seconds</span><span className="pl-meta">Chat, forms, call-back, AI receptionist</span></span>
                    <span className="pl-step">capture</span>
                  </div>
                  <div className="pl-connector"></div>
                  <div className="pl-node">
                    <span className="pl-ic" data-ic="database"><Icon name="database" /></span>
                    <span><span className="pl-name">Logged in your CRM</span><span className="pl-meta">Every lead, call &amp; deal in one place</span></span>
                    <span className="pl-step">track</span>
                  </div>
                  <div className="pl-connector"></div>
                  <div className="pl-node">
                    <span className="pl-ic" data-ic="calendar"><Icon name="calendar" /></span>
                    <span><span className="pl-name">Followed up until booked</span><span className="pl-meta">Email + SMS sequences, on autopilot</span></span>
                    <span className="pl-step">close</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">The problem you're living with</span>
              <h2 className="h2">Right now, you're leaking revenue every single day.</h2>
              <p className="lede">For most multi-location businesses online, one of two things is true, and both quietly cost you customers.</p>
            </div>

            <div className="split" style={{ alignItems: "stretch" }}>
              <div className="card reveal" style={{ padding: "34px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="eyebrow">Scenario A</span>
                <h3 className="h3">Your competitors show up. You don't.</h3>
                <p style={{ color: "var(--ink-2)", fontSize: "16px", lineHeight: "1.6", margin: "0" }}>The customers who should be calling you are calling them, because when buyers search Google or ask an AI for a recommendation, your competitors show up first and you aren't even in the conversation.</p>
              </div>
              <div className="card reveal" style={{ padding: "34px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <span className="eyebrow">Scenario B</span>
                <h3 className="h3">You get traffic. It doesn't convert.</h3>
                <p style={{ color: "var(--ink-2)", fontSize: "16px", lineHeight: "1.6", margin: "0" }}>Visitors land, but your site doesn't turn them into enquiries. Follow-up is slow or manual, after-hours leads go unanswered, and prospects quietly slip through the cracks before anyone calls them back.</p>
              </div>
            </div>

            <div className="callout reveal" style={{ marginTop: "24px", background: "var(--bg-soft)", borderColor: "transparent" }}>
              <span className="co-badge" data-ic="plug" style={{ fontSize: "30px" }}><Icon name="plug" /></span>
              <div className="co-text">
                <strong>And the usual fix makes it worse.</strong>
                <p>A web designer who doesn't talk to your SEO person, who doesn't talk to whoever set up your CRM. Three vendors, three invoices, and every handoff between them breaks. We replace all of it.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="engine" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">The 24/7 Client Engine</span>
              <h2 className="h2">Five systems. One pipeline. No gaps.</h2>
              <p className="lede">One team owns your entire growth pipeline end-to-end. Each piece is built to hand off cleanly to the next, because the same people build all of them.</p>
            </div>

            <div className="pillar-grid">
              <Link className="pillar card reveal" href="/web-development">
                <span className="pillar-ic" data-ic="globe"><Icon name="globe" /></span>
                <span className="step-tag">01 · Get found &amp; convert</span>
                <h3>Web Design &amp; Development</h3>
                <p>A custom, fast, mobile-first site engineered to turn visitors into enquiries, not just look pretty.</p>
                <span className="more">Explore <span data-ic="arrow"><Icon name="arrow" /></span></span>
              </Link>
              <Link className="pillar card reveal" href="/seo">
                <span className="pillar-ic" data-ic="search"><Icon name="search" /></span>
                <span className="step-tag">02 · Get found &amp; convert</span>
                <h3>SEO &amp; Local SEO</h3>
                <p>Technical foundation, on-page optimisation, and Google Business Profile so you rank where buying intent is highest.</p>
                <span className="more">Explore <span data-ic="arrow"><Icon name="arrow" /></span></span>
              </Link>
              <Link className="pillar card reveal" href="/lead-capture">
                <span className="pillar-ic" data-ic="headset"><Icon name="headset" /></span>
                <span className="step-tag">03 · Capture every lead</span>
                <h3>Lead Capture &amp; AI Receptionist</h3>
                <p>Smart forms, live chat, call-back widget, and a 24/7 AI voice agent that answers, qualifies, and books.</p>
                <span className="more">Explore <span data-ic="arrow"><Icon name="arrow" /></span></span>
              </Link>
              <Link className="pillar card reveal" href="/crm">
                <span className="pillar-ic" data-ic="database"><Icon name="database" /></span>
                <span className="step-tag">04 · Never lose a lead</span>
                <h3>CRM Command Centre</h3>
                <p>Every lead, call, and deal in one place, with a unified dashboard for rankings, traffic, and conversions.</p>
                <span className="more">Explore <span data-ic="arrow"><Icon name="arrow" /></span></span>
              </Link>
              <Link className="pillar card reveal" href="/automation">
                <span className="pillar-ic" data-ic="workflow"><Icon name="workflow" /></span>
                <span className="step-tag">05 · Convert on autopilot</span>
                <h3>Automation &amp; Follow-Up</h3>
                <p>Missed-call text-back, email + SMS nurture, and a reputation engine that chases every lead until they book.</p>
                <span className="more">Explore <span data-ic="arrow"><Icon name="arrow" /></span></span>
              </Link>
              <Link className="pillar card reveal" href="/contact" style={{ background: "linear-gradient(165deg,var(--teal-softer),var(--surface))", borderColor: "var(--teal-300)" }}>
                <span className="pillar-ic" data-ic="layers" style={{ background: "linear-gradient(135deg,var(--teal-600),var(--teal))", color: "#fff" }}><Icon name="layers" /></span>
                <span className="step-tag">The whole engine</span>
                <h3>Not sure where you're leaking?</h3>
                <p>Book a free Growth Teardown and we'll show you exactly which part of the pipeline is costing you leads today.</p>
                <span className="more">Book a teardown <span data-ic="arrow"><Icon name="arrow" /></span></span>
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How it works</span>
              <h2 className="h2">We build your engine, then we run it and climb.</h2>
              <p className="lede">No three-month &ldquo;discovery&rdquo; stall. We map your full funnel and launch fast, then manage the whole pipeline so it keeps converting.</p>
            </div>

            <div className="phase-grid">
              <div className="phase featured reveal">
                <div className="phase-tag">Phase 1 <span className="badge">Months 1–3</span></div>
                <h3>We build your engine</h3>
                <p className="phase-sub">A comprehensive launch sprint to deploy your complete technical foundation.</p>
                <ul className="feature-list">
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Conversion-built website + technical SEO</span><span className="ft-desc">Custom, fast, mobile-first, engineered to rank and convert.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Lead capture + AI receptionist wired in</span><span className="ft-desc">Forms, chat, call-back, and 24/7 inbound voice agent.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">CRM command centre + automations live</span><span className="ft-desc">Every lead tracked; follow-up running on autopilot.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Onboarding &amp; strategy sprint</span><span className="ft-desc">We map your full funnel and launch fast.</span></span></li>
                </ul>
              </div>
              <div className="phase reveal">
                <div className="phase-tag">Phase 2 <span className="badge" style={{ background: "var(--violet)" }}>Month 4 →</span></div>
                <h3>We run it &amp; climb</h3>
                <p className="phase-sub">High-impact management of your entire pipeline for continuous growth.</p>
                <ul className="feature-list">
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Ongoing SEO, content &amp; backlinks</span><span className="ft-desc">Your steady climb up the rankings.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Website + hosting, security &amp; speed</span><span className="ft-desc">Fully managed, always current.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">CRM, automation &amp; reputation, tuned</span><span className="ft-desc">Kept converting; reviews built quietly.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Monthly report + strategy call</span><span className="ft-desc">You see the numbers and the plan.</span></span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">What you get</span>
              <h2 className="h2">Everything your pipeline needs, under one roof.</h2>
              <p className="lede">The complete system we deploy in your build phase, each component owned and connected by the same team.</p>
            </div>

            <div className="incl-grid">
              <div className="incl-item reveal"><span className="incl-ic" data-ic="globe"><Icon name="globe" /></span><div><h4>Conversion-built website</h4><p>Custom, fast, mobile-first, engineered to turn visitors into enquiries.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="gauge"><Icon name="gauge" /></span><div><h4>Technical SEO foundation</h4><p>Speed, schema, indexing, Core Web Vitals, the groundwork Google rewards.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="target"><Icon name="target" /></span><div><h4>On-page SEO + keyword mapping</h4><p>Every page optimised to rank for what your buyers actually type.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="map"><Icon name="map" /></span><div><h4>Google Business Profile + local SEO</h4><p>Show up in the map pack and &ldquo;near me&rdquo; searches where intent is highest.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="database"><Icon name="database" /></span><div><h4>CRM command centre</h4><p>Every lead, call, and deal in one place, you never lose track of a prospect.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="headset"><Icon name="headset" /></span><div><h4>Lead-capture suite</h4><p>Smart forms, live chat, and a call-back widget that catch leads while they're hot.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="phone"><Icon name="phone" /></span><div><h4>AI receptionist (inbound voice)</h4><p>Answers calls 24/7, qualifies the caller, and books the appointment.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="chat"><Icon name="chat" /></span><div><h4>Missed-call text-back</h4><p>Every missed call auto-texted back in seconds, so no lead goes cold.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="mail"><Icon name="mail" /></span><div><h4>Automated follow-up (email + SMS)</h4><p>Nurture sequences that chase every lead on autopilot until they book.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="star"><Icon name="star" /></span><div><h4>Reputation engine</h4><p>Automated review requests that quietly build your 5-star reputation.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="chart"><Icon name="chart" /></span><div><h4>Unified analytics dashboard</h4><p>Rankings, traffic, leads, and conversions on one screen.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="rocket"><Icon name="rocket" /></span><div><h4>Onboarding &amp; strategy sprint</h4><p>We map your full funnel and launch fast, no three-month stall.</p></div></div>
              <div className="incl-item reveal">
                <span className="incl-ic" data-ic="eye" style={{ background: "var(--violet-soft)", color: "var(--violet)" }}><Icon name="eye" /></span>
                <div>
                  <h4>Competitor Teardown <span style={{ display: "inline-block", fontSize: "11px", fontFamily: "var(--mono)", background: "var(--violet-soft)", color: "var(--violet)", padding: "3px 8px", borderRadius: "99px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.04em", marginLeft: "8px", verticalAlign: "middle" }}>On the house</span></h4>
                  <p>Before we touch anything, a full breakdown of exactly where your top 3 competitors beat you online, and how we'll overtake them.</p>
                </div>
              </div>
              <div className="incl-item reveal">
                <span className="incl-ic" data-ic="clipboard" style={{ background: "var(--violet-soft)", color: "var(--violet)" }}><Icon name="clipboard" /></span>
                <div>
                  <h4>6-Month Content Calendar <span style={{ display: "inline-block", fontSize: "11px", fontFamily: "var(--mono)", background: "var(--violet-soft)", color: "var(--violet)", padding: "3px 8px", borderRadius: "99px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.04em", marginLeft: "8px", verticalAlign: "middle" }}>On the house</span></h4>
                  <p>Done-for-you. You'll always know what's being published, when, and why it's pulling in traffic.</p>
                </div>
              </div>
              <div className="incl-item reveal">
                <span className="incl-ic" data-ic="bolt" style={{ background: "var(--violet-soft)", color: "var(--violet)" }}><Icon name="bolt" /></span>
                <div>
                  <h4>Priority Speed-to-Lead <span style={{ display: "inline-block", fontSize: "11px", fontFamily: "var(--mono)", background: "var(--violet-soft)", color: "var(--violet)", padding: "3px 8px", borderRadius: "99px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.04em", marginLeft: "8px", verticalAlign: "middle" }}>On the house</span></h4>
                  <p>New leads hit your phone within 60 seconds, so you call back while they're still holding their card.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-sm band-dark">
          <div className="grid-tex"></div>
          <div className="container">
            <div className="guarantee reveal">
              <div className="seal">
                <div>
                  <div className="seal-num">90</div>
                  <div className="seal-unit">Day guarantee</div>
                </div>
              </div>
              <div>
                <span className="eyebrow on-dark">Zero risk</span>
                <h2 className="h2" style={{ margin: "14px 0 14px" }}>The 90-Day Momentum Guarantee.</h2>
                <p className="lede" style={{ maxWidth: "640px" }}>Within 90 days of launch, you'll see measurable growth in organic visibility and inbound leads. If you don't, we keep working at no extra cost until you do. You carry zero risk, we don't get to coast on a retainer, we earn it by moving your numbers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="pricing">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Your investment</span>
              <h2 className="h2">One inclusive investment. No vendor stack to manage.</h2>
              <p className="lede">A premium, all-inclusive growth engine, platform, tools, and execution included. We align our success with your ROI, so we earn the retainer by moving your numbers.</p>
            </div>

            <div className="price-cols">
              <div className="price-card dark reveal">
                <span className="price-phase">Phase 1 · Build</span>
                <h3>The 3-month launch sprint</h3>
                <div className="price-amount"><span className="amt">Custom</span><span className="per">/ shared on your teardown call</span></div>
                <p className="price-note">A comprehensive sprint to deploy your complete technical foundation, website, SEO, lead capture, CRM, and automation, fully wired and live.</p>
                <ul className="feature-list" style={{ gap: "10px" }}>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span className="ft-title">Full engine built &amp; launched</span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span className="ft-title">All platform &amp; tooling included</span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span className="ft-title">Onboarding &amp; strategy sprint</span></li>
                </ul>
              </div>
              <div className="price-card reveal">
                <span className="price-phase">Phase 2 · Scale</span>
                <h3>Run it &amp; climb</h3>
                <div className="price-amount"><span className="amt">Custom</span><span className="per">/ month, from month 4</span></div>
                <p className="price-note">High-impact management of your entire pipeline, SEO, content, website, CRM, automation, and reputation, kept tuned and converting.</p>
                <ul className="feature-list" style={{ gap: "10px" }}>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span className="ft-title">Ongoing SEO, content &amp; backlinks</span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span className="ft-title">Website, CRM &amp; automation managed</span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span className="ft-title">Monthly report + strategy call</span></li>
                </ul>
                <Link className="btn btn-primary" href="/contact" style={{ marginTop: "auto" }}>Get your numbers on a call <span data-ic="arrow"><Icon name="arrow" /></span></Link>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="faq">
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">FAQ</span>
              <h2 className="h2">Frequently Asked Questions</h2>
              <p className="lede">Everything you need to know about the 24/7 Client Engine, SolvoLab, and how we help your business scale.</p>
            </div>
            
            <div className="faq-grid reveal">
              <details className="faq-item">
                <summary className="faq-question">What is SolvoLab?</summary>
                <div className="faq-answer">
                  SolvoLab is a single team that builds and runs your entire growth pipeline, website, SEO, lead capture, CRM, and automated follow-up, as one connected system. Instead of hiring a separate web designer, SEO agency, and CRM consultant, you get all five working together with no vendor handoffs.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What's included in The Engine?</summary>
                <div className="faq-answer">
                  Five connected systems: (1) Web Design &amp; Development, (2) SEO &amp; Local SEO, (3) Lead Capture &amp; AI Receptionist, (4) CRM Command Centre, and (5) Automation &amp; Follow-Up. The same team builds and owns all five so each hands off cleanly to the next.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Who is SolvoLab for?</summary>
                <div className="faq-answer">
                  Small and multi-location businesses in home services, dental, real estate, auto shops, security companies, and professional services, especially those losing leads either because they don't rank on Google or AI search, or because their traffic isn't converting and follow-up is too slow.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What is the AI receptionist?</summary>
                <div className="faq-answer">
                  A 24/7 AI voice agent that answers inbound calls, qualifies the caller, and books the appointment, so calls don't go unanswered after hours. It works alongside smart forms, live chat, a call-back widget, and missed-call text-back.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What is missed-call text-back?</summary>
                <div className="faq-answer">
                  If a call is missed, the caller is automatically texted back within seconds so the lead doesn't go cold before someone can follow up.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">How fast can I go live?</summary>
                <div className="faq-answer">
                  The build phase runs as a focused launch sprint over roughly the first three months (Phase 1). There's no drawn-out discovery stall, the team maps your funnel and launches fast.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">How does the engagement work over time?</summary>
                <div className="faq-answer">
                  Phase 1 (Months 1 to 3) builds and launches your full engine. Phase 2 (Month 4 onward) is ongoing management: continued SEO, content and backlinks, managed website and hosting, tuned CRM and automation, plus a monthly report and strategy call.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What is the 90-Day Momentum Guarantee?</summary>
                <div className="faq-answer">
                  Within 90 days of launch, you should see measurable growth in organic visibility and inbound leads. If you don't, SolvoLab keeps working at no extra cost until you do.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">How much does SolvoLab cost?</summary>
                <div className="faq-answer">
                  Pricing is custom and shared on your teardown call. It's structured as one all-inclusive investment, a Phase 1 build (3-month launch sprint) and a Phase 2 monthly fee from month 4, with platform, tools, and execution all included so there's no separate vendor stack to pay for.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What is a Growth Teardown?</summary>
                <div className="faq-answer">
                  A free consultation where SolvoLab shows you exactly where you're losing leads today and what your engine would look like once built. If it's not a fit, you keep the competitor teardown anyway.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Do I need to hire extra staff?</summary>
                <div className="faq-answer">
                  No. The system handles answering, capturing, tracking, and following up with leads automatically, so you can go live without adding new headcount.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">What do I get for free?</summary>
                <div className="faq-answer">
                  A competitor teardown showing how your top 3 competitors beat you online, a done-for-you 6-month content calendar, and priority speed-to-lead so new leads hit your phone within 60 seconds.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">Will I be able to track results?</summary>
                <div className="faq-answer">
                  Yes. A unified analytics dashboard puts rankings, traffic, leads, and conversions on one screen, plus you get a monthly report and strategy call during the management phase.
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-question">How do I get started?</summary>
                <div className="faq-answer">
                  Book a free Growth Teardown through the contact page at solvolab.com or email hello@solvolab.com.
                </div>
              </details>
            </div>
          </div>
        </section>

        <section className="section band-dark">
          <div className="grid-tex"></div>
          <div className="container">
            <div className="cta-band reveal">
              <span className="eyebrow on-dark">Your next step</span>
              <h2 className="h2" style={{ marginTop: "16px" }}>Book a free Growth Teardown.</h2>
              <p className="lede">We'll show you exactly where you're losing leads today and what your engine would look like built. No pressure, and if it's not a fit, you keep the competitor teardown anyway.</p>
              <div className="btn-row">
                <Link className="btn btn-light btn-lg" href="/contact">Book a free Growth Teardown <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                <Link className="btn btn-outline-light btn-lg" href="/about">Why one team wins</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

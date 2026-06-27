import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "CRM Command Centre, SolvoLab",
  description:
    "Every lead, call, and deal in one place. SolvoLab sets up and runs your CRM command centre, wired directly into your website, chat, and follow-up sequences.",
  alternates: {
    canonical: "/crm",
  },
};

export default function Crm() {
  return (
    <>
      <Nav />
      <main>
        <header className="band-dark">
          <div className="grid-tex"></div>
          <div className="container page-hero">
            <div className="page-hero-grid">
              <div>
                <div className="breadcrumb">
                  <Link href="/#engine">The Engine</Link>{" "}
                  <span data-ic="chevron" style={{ transform: "rotate(-90deg)", fontSize: "12px" }}><Icon name="chevron" /></span>{" "}
                  <span>Step 04 · Never lose a lead</span>
                </div>
                <span className="eyebrow on-dark">CRM Command Centre</span>
                <h1 className="h1">Every lead, call, and deal in one place.</h1>
                <p className="lede">Leads scattered across an inbox, a notepad, and three people's phones is how prospects get forgotten. Your command centre puts every contact, conversation, and opportunity in one system, with a single dashboard that shows rankings, traffic, leads, and conversions at a glance.</p>
                <div className="btn-row">
                  <Link className="btn btn-light btn-lg" href="/contact">Book a free Growth Teardown <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                  <a className="btn btn-outline-light btn-lg" href="#included">What's included</a>
                </div>
              </div>
              <div className="mock reveal" style={{ background: "rgba(255,255,255,0.05)", borderColor: "var(--forest-line)" }}>
                <div className="mock-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mock-title" style={{ color: "rgba(234,246,241,0.6)" }}>command centre · dashboard</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="users"><Icon name="users" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>New leads this week</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>All sources, one pipeline view</div></div><span className="mr-tag">live</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="chart"><Icon name="chart" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Rankings &amp; traffic</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>SEO + site analytics in one screen</div></div><span className="mr-tag">up</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="target"><Icon name="target" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Conversion rate</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>Lead → booked → won</div></div><span className="mr-tag">tracked</span></div>
              </div>
            </div>
          </div>
        </header>

        <section className="section-sm">
          <div className="container">
            <div className="card reveal" style={{ padding: "30px 34px", display: "flex", gap: "22px", alignItems: "center", flexWrap: "wrap" }}>
              <span className="pillar-ic" data-ic="layers" style={{ flexShrink: "0" }}><Icon name="layers" /></span>
              <div style={{ flex: "1", minWidth: "240px" }}>
                <h3 className="h3" style={{ marginBottom: "6px" }}>Where it fits in the Engine</h3>
                <p style={{ margin: "0", color: "var(--ink-2)", fontSize: "15.5px", lineHeight: "1.55" }}>The CRM is the spine of the pipeline. Capture writes to it, automation reads from it, and your dashboard reports on it, so the website, SEO, and follow-up all share one source of truth instead of fighting over scattered data.</p>
              </div>
              <Link className="btn btn-ghost" href="/#engine">See the full Engine <span data-ic="arrow"><Icon name="arrow" /></span></Link>
            </div>
          </div>
        </section>

        <section className="section" id="included" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="split">
              <div className="reveal">
                <span className="eyebrow">What's included</span>
                <h2 className="h2" style={{ margin: "16px 0 20px" }}>One source of truth for your whole pipeline.</h2>
                <ul className="feature-list">
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">CRM command centre</span><span className="ft-desc">Every lead, call, and deal in one place, you never lose track of a prospect again.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Unified analytics dashboard</span><span className="ft-desc">Rankings, traffic, leads, and conversions on one screen, you always know what's working.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Clean pipeline &amp; lead routing</span><span className="ft-desc">Every enquiry lands in the right stage and the right hands, automatically.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Connected to the tools you use</span><span className="ft-desc">Calendar, phone, email, and billing wired in, no copy-paste between systems.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Kept tuned in Phase 2</span><span className="ft-desc">We manage the CRM and automations so they keep converting as you grow.</span></span></li>
                </ul>
              </div>
              <div className="mock reveal">
                <div className="mock-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mock-title">pipeline · stages</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="headset"><Icon name="headset" /></span><div className="mr-main"><div className="mr-l1"></div><div className="mr-l2"></div></div><span className="mr-tag">new</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="chat"><Icon name="chat" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "66%" }}></div><div className="mr-l2" style={{ width: "42%" }}></div></div><span className="mr-tag">qualified</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="calendar"><Icon name="calendar" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "54%" }}></div><div className="mr-l2" style={{ width: "38%" }}></div></div><span className="mr-tag">booked</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="star"><Icon name="star" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "48%" }}></div><div className="mr-l2" style={{ width: "30%" }}></div></div><span className="mr-tag">won</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How we set it up</span>
              <h2 className="h2">Built around how you actually sell.</h2>
              <p className="lede">No bloated CRM you'll never use. We configure the minimum that captures everything and shows you what matters.</p>
            </div>
            <div className="steps">
              <div className="step reveal"><div className="step-n">/ 01</div><h4>Map your pipeline</h4><p>We model your real sales stages, from first enquiry to closed deal, not a generic template.</p></div>
              <div className="step reveal"><div className="step-n">/ 02</div><h4>Wire every source in</h4><p>Site, chat, phone, ads, and referrals all write to one record, with no manual entry.</p></div>
              <div className="step reveal"><div className="step-n">/ 03</div><h4>Build the dashboard</h4><p>One screen for rankings, traffic, leads, and conversions, the numbers you check each morning.</p></div>
              <div className="step reveal"><div className="step-n">/ 04</div><h4>Tune monthly</h4><p>We review the data with you and adjust routing and stages as the business grows.</p></div>
            </div>
          </div>
        </section>

        <section className="section-sm" style={{ paddingTop: "0" }}>
          <div className="container">
            <div className="section-head reveal" style={{ marginBottom: "28px" }}><span className="eyebrow">Connected systems</span><h2 className="h2">What feeds it &amp; what it powers</h2></div>
            <div className="crosslinks">
              <Link className="crosslink reveal" href="/lead-capture"><span className="cl-ic" data-ic="headset"><Icon name="headset" /></span><span className="cl-name">Lead Capture &amp; AI Receptionist</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
              <Link className="crosslink reveal" href="/automation"><span className="cl-ic" data-ic="workflow"><Icon name="workflow" /></span><span className="cl-name">Automation &amp; Follow-Up</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
              <Link className="crosslink reveal" href="/seo"><span className="cl-ic" data-ic="search"><Icon name="search" /></span><span className="cl-name">SEO &amp; Local SEO</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
            </div>
          </div>
        </section>

        <section className="section band-dark">
          <div className="grid-tex"></div>
          <div className="container">
            <div className="cta-band reveal">
              <span className="eyebrow on-dark">Your next step</span>
              <h2 className="h2" style={{ marginTop: "16px" }}>Stop losing leads in the gaps.</h2>
              <p className="lede">Book a free Growth Teardown and we'll show you where prospects are falling out of view today, and what one command centre would catch.</p>
              <div className="btn-row">
                <Link className="btn btn-light btn-lg" href="/contact">Book a free Growth Teardown <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                <Link className="btn btn-outline-light btn-lg" href="/#engine">Explore the full Engine</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

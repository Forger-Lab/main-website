import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Lead Capture & AI Receptionist, SolvoLab",
  description:
    "Never miss another lead. SolvoLab deploys smart forms, live web chat, call-back widgets, and a 24/7 AI receptionist that answers calls, qualifies, and books.",
  alternates: {
    canonical: "/lead-capture",
  },
};

export default function LeadCapture() {
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
                  <span>Step 03 · Capture every lead</span>
                </div>
                <span className="eyebrow on-dark">Lead Capture &amp; AI Receptionist</span>
                <h1 className="h1">Answer every lead in seconds, even at 2am.</h1>
                <p className="lede">Most leads go cold because nobody answered fast enough. We catch every enquiry the moment it's hot, across forms, chat, and the phone, with a 24/7 AI receptionist that qualifies callers and books the appointment while you sleep.</p>
                <div className="btn-row">
                  <Link className="btn btn-light btn-lg" href="/contact">Book a free Growth Teardown <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                  <a className="btn btn-outline-light btn-lg" href="#included">What's included</a>
                </div>
              </div>
              <div className="mock reveal" style={{ background: "rgba(255,255,255,0.05)", borderColor: "var(--forest-line)" }}>
                <div className="mock-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mock-title" style={{ color: "rgba(234,246,241,0.6)" }}>inbound · live</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="phone"><Icon name="phone" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Call at 11:42pm answered</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>AI receptionist · qualified &amp; booked</div></div><span className="mr-tag">booked</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="chat"><Icon name="chat" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Web chat replied in 3s</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>Pricing question → quote request</div></div><span className="mr-tag">live</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="refresh"><Icon name="refresh" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Missed call → auto-text sent</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>"Sorry we missed you, how can we help?"</div></div><span className="mr-tag">&lt;10s</span></div>
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
                <p style={{ margin: "0", color: "var(--ink-2)", fontSize: "15.5px", lineHeight: "1.55" }}>Capture is the moment a visitor becomes a lead. Everything you've spent getting them here is wasted if no one responds, so every channel feeds straight into your CRM and kicks off follow-up automatically.</p>
              </div>
              <Link className="btn btn-ghost" href="/#engine">See the full Engine <span data-ic="arrow"><Icon name="arrow" /></span></Link>
            </div>
          </div>
        </section>

        <section className="section" id="included" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="split reverse">
              <div className="mock reveal">
                <div className="mock-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mock-title">capture channels</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="clipboard"><Icon name="clipboard" /></span><div className="mr-main"><div className="mr-l1"></div><div className="mr-l2"></div></div><span className="mr-tag">forms</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="chat"><Icon name="chat" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "62%" }}></div><div className="mr-l2" style={{ width: "40%" }}></div></div><span className="mr-tag">chat</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="phone"><Icon name="phone" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "72%" }}></div><div className="mr-l2" style={{ width: "48%" }}></div></div><span className="mr-tag">call-back</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="headset"><Icon name="headset" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "58%" }}></div><div className="mr-l2" style={{ width: "44%" }}></div></div><span className="mr-tag">AI voice</span></div>
              </div>
              <div className="reveal">
                <span className="eyebrow">What's included</span>
                <h2 className="h2" style={{ margin: "16px 0 20px" }}>No lead ever goes cold.</h2>
                <ul className="feature-list">
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Lead-capture suite</span><span className="ft-desc">Smart forms, live chat, and a website call-back widget that catch leads the moment they're hot.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">AI receptionist, inbound voice agent</span><span className="ft-desc">Answers calls 24/7, qualifies the caller, and books the appointment, even while you sleep.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Missed-call text-back</span><span className="ft-desc">Every missed call auto-texted back in seconds, so no lead ever goes cold.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Priority speed-to-lead</span><span className="ft-desc">New leads hit your phone within 60 seconds, so you reach them while they're still deciding.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Straight into your CRM</span><span className="ft-desc">Every conversation is logged and routed automatically, nothing lives in someone's inbox.</span></span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-sm band-dark">
          <div className="grid-tex"></div>
          <div className="container">
            <div className="stat-row reveal">
              <div className="stat"><div className="stat-num">24/7</div><div className="stat-label">Every call, chat, and form answered, nights, weekends, and holidays.</div></div>
              <div className="stat"><div className="stat-num">&lt;60s</div><div className="stat-label">Target speed-to-lead, when first response matters most.</div></div>
              <div className="stat"><div className="stat-num">0</div><div className="stat-label">Leads left sitting in a voicemail no one checks.</div></div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <div className="container">
            <div className="section-head reveal" style={{ marginBottom: "28px" }}><span className="eyebrow">Connected systems</span><h2 className="h2">What it feeds</h2></div>
            <div className="crosslinks">
              <Link className="crosslink reveal" href="/crm"><span className="cl-ic" data-ic="database"><Icon name="database" /></span><span className="cl-name">CRM Command Centre</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
              <Link className="crosslink reveal" href="/automation"><span className="cl-ic" data-ic="workflow"><Icon name="workflow" /></span><span className="cl-name">Automation &amp; Follow-Up</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
              <Link className="crosslink reveal" href="/web-development"><span className="cl-ic" data-ic="globe"><Icon name="globe" /></span><span className="cl-name">Web Design &amp; Development</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
            </div>
          </div>
        </section>

        <section className="section band-dark" style={{ marginTop: "104px" }}>
          <div className="grid-tex"></div>
          <div className="container">
            <div className="cta-band reveal">
              <span className="eyebrow on-dark">Your next step</span>
              <h2 className="h2" style={{ marginTop: "16px" }}>Count the leads you're missing right now.</h2>
              <p className="lede">Book a free Growth Teardown and we'll show you where enquiries are slipping through after hours, and what an always-on front line would catch.</p>
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

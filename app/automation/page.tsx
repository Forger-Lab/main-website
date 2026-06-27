import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Automation & Follow-Up, SolvoLab",
  description:
    "Nurture leads on autopilot. SolvoLab builds and runs automated email & SMS sequences, missed-call text-back, and reputation engines that turn enquiries into booked jobs.",
  alternates: {
    canonical: "/automation",
  },
};

export default function Automation() {
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
                  <span>Step 05 · Convert on autopilot</span>
                </div>
                <span className="eyebrow on-dark">Automation &amp; Follow-Up</span>
                <h1 className="h1">Nurture every lead on autopilot, until they book.</h1>
                <p className="lede">Most leads don't buy on the first touch, they buy from whoever follows up. We build email and SMS sequences that chase every lead with the right message at the right time, text back every missed call, and quietly build your 5-star reputation while you work.</p>
                <div className="btn-row">
                  <Link className="btn btn-light btn-lg" href="/contact">Book a free Growth Teardown <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                  <a className="btn btn-outline-light btn-lg" href="#included">What's included</a>
                </div>
              </div>
              <div className="mock reveal" style={{ background: "rgba(255,255,255,0.05)", borderColor: "var(--forest-line)" }}>
                <div className="mock-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mock-title" style={{ color: "rgba(234,246,241,0.6)" }}>sequence · running</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="mail"><Icon name="mail" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Intro email sent</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>Personalised · +0m</div></div><span className="mr-tag">sent</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="chat"><Icon name="chat" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>SMS nudge if no reply</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>+2h · backs off the moment they reply</div></div><span className="mr-tag">queued</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="star"><Icon name="star" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Review request after the job</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>Reputation engine · automatic</div></div><span className="mr-tag">auto</span></div>
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
                <p style={{ margin: "0", color: "var(--ink-2)", fontSize: "15.5px", lineHeight: "1.55" }}>Automation is what closes the loop. It reads every lead from the CRM, runs the right sequence, and updates the record as people reply, turning the leads you captured into booked, won business without anyone chasing them by hand.</p>
              </div>
              <Link className="btn btn-ghost" href="/#engine">See the full Engine <span data-ic="arrow"><Icon name="arrow" /></span></Link>
            </div>
          </div>
        </section>

        <section className="section" id="included" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="split reverse">
              <div className="mock reveal">
                <div className="mock-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mock-title">automations · active</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="mail"><Icon name="mail" /></span><div className="mr-main"><div className="mr-l1"></div><div className="mr-l2"></div></div><span className="mr-tag">email</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="chat"><Icon name="chat" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "64%" }}></div><div className="mr-l2" style={{ width: "40%" }}></div></div><span className="mr-tag">SMS</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="refresh"><Icon name="refresh" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "70%" }}></div><div className="mr-l2" style={{ width: "46%" }}></div></div><span className="mr-tag">text-back</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="star"><Icon name="star" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "52%" }}></div><div className="mr-l2" style={{ width: "34%" }}></div></div><span className="mr-tag">reviews</span></div>
              </div>
              <div className="reveal">
                <span className="eyebrow">What's included</span>
                <h2 className="h2" style={{ margin: "16px 0 20px" }}>Follow-up that doesn't quit.</h2>
                <ul className="feature-list">
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Automated follow-up (email + SMS)</span><span className="ft-desc">Nurture sequences that chase every lead for you, on autopilot, until they book.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Missed-call text-back</span><span className="ft-desc">Every missed call auto-texted back in seconds, so no lead ever goes cold.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Reputation engine</span><span className="ft-desc">Automated review requests that quietly build your 5-star reputation.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Smart timing &amp; reply detection</span><span className="ft-desc">Right message, right moment, and it backs off the instant a lead responds.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Managed &amp; optimised in Phase 2</span><span className="ft-desc">We tune sequences against real results so they keep converting.</span></span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section-sm band-dark">
          <div className="grid-tex"></div>
          <div className="container">
            <div className="stat-row reveal">
              <div className="stat"><div className="stat-num">Autopilot</div><div className="stat-label">Every lead nurtured without anyone remembering to follow up.</div></div>
              <div className="stat"><div className="stat-num">&lt;10s</div><div className="stat-label">Missed-call text-back, so the conversation never drops.</div></div>
              <div className="stat"><div className="stat-num">5-star</div><div className="stat-label">Reviews requested automatically after every completed job.</div></div>
            </div>
          </div>
        </section>

        <section className="section" style={{ paddingBottom: "0" }}>
          <div className="container">
            <div className="section-head reveal" style={{ marginBottom: "28px" }}><span className="eyebrow">Connected systems</span><h2 className="h2">What it works with</h2></div>
            <div className="crosslinks">
              <Link className="crosslink reveal" href="/crm"><span className="cl-ic" data-ic="database"><Icon name="database" /></span><span className="cl-name">CRM Command Centre</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
              <Link className="crosslink reveal" href="/lead-capture"><span className="cl-ic" data-ic="headset"><Icon name="headset" /></span><span className="cl-name">Lead Capture &amp; AI Receptionist</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
              <Link className="crosslink reveal" href="/seo"><span className="cl-ic" data-ic="search"><Icon name="search" /></span><span className="cl-name">SEO &amp; Local SEO</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
            </div>
          </div>
        </section>

        <section className="section band-dark" style={{ marginTop: "104px" }}>
          <div className="grid-tex"></div>
          <div className="container">
            <div className="cta-band reveal">
              <span className="eyebrow on-dark">Your next step</span>
              <h2 className="h2" style={{ marginTop: "16px" }}>Turn the leads you already have into bookings.</h2>
              <p className="lede">Book a free Growth Teardown and we'll show you the follow-up you're missing today, and the revenue sitting in leads that simply went quiet.</p>
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

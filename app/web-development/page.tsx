import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Web Design & Development, SolvoLab",
  description:
    "Fast, clean, conversion-built websites. SolvoLab designs and builds custom sites engineered specifically to turn search visitors into paying customers.",
  alternates: {
    canonical: "/web-development",
  },
};

export default function WebDevelopment() {
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
                  <span>Step 01 · Get found &amp; convert</span>
                </div>
                <span className="eyebrow on-dark">Web Design &amp; Development</span>
                <h1 className="h1">A site engineered to convert, not just to look good.</h1>
                <p className="lede">Your website is the front door of your entire pipeline. We build a custom, fast, mobile-first site that turns the traffic Google sends you into enquiries, with SEO, lead capture, and your CRM wired in from day one.</p>
                <div className="btn-row">
                  <Link className="btn btn-light btn-lg" href="/contact">Book a free Growth Teardown <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                  <a className="btn btn-outline-light btn-lg" href="#included">What's included</a>
                </div>
              </div>
              <div className="mock reveal" style={{ background: "rgba(255,255,255,0.05)", borderColor: "var(--forest-line)" }}>
                <div className="mock-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mock-title" style={{ color: "rgba(234,246,241,0.6)" }}>yourbusiness.com</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="gauge"><Icon name="gauge" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Loads in under 1.5s</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>Core Web Vitals: all green</div></div><span className="mr-tag">passed</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="phone"><Icon name="phone" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Mobile-first layout</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>70%+ of local searches are mobile</div></div><span className="mr-tag">optimised</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="headset"><Icon name="headset" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Capture wired in</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>Form → CRM → follow-up, automatically</div></div><span className="mr-tag">live</span></div>
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
                <p style={{ margin: "0", color: "var(--ink-2)", fontSize: "15.5px", lineHeight: "1.55" }}>Your site is step one, the place every visitor lands. Because the same team builds your SEO, capture, and CRM, the website isn't a dead end: every enquiry flows straight into the rest of the pipeline.</p>
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
                <h2 className="h2" style={{ margin: "16px 0 20px" }}>Built to be the front of your pipeline.</h2>
                <ul className="feature-list">
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Conversion-built, MNC-grade website</span><span className="ft-desc">Custom design, clear paths to enquiry, and copy that turns visitors into leads.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Fast &amp; mobile-first by default</span><span className="ft-desc">Engineered for speed and the phones most of your buyers search on.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Technical SEO baked into the build</span><span className="ft-desc">Schema, clean indexing, and Core Web Vitals, a foundation SEO can climb.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Lead capture wired in from day one</span><span className="ft-desc">Smart forms, live chat, and a call-back widget, all flowing into your CRM.</span></span></li>
                  <li><span className="ck" data-ic="check"><Icon name="check" /></span><span><span className="ft-title">Managed hosting, security &amp; speed</span><span className="ft-desc">In Phase 2 we keep it updated, secure, and quick, you never touch a plugin.</span></span></li>
                </ul>
              </div>
              <div className="mock reveal">
                <div className="mock-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mock-title">build · component map</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="pen"><Icon name="pen" /></span><div className="mr-main"><div className="mr-l1"></div><div className="mr-l2"></div></div><span className="mr-tag">design</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="gauge"><Icon name="gauge" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "60%" }}></div><div className="mr-l2" style={{ width: "38%" }}></div></div><span className="mr-tag">speed</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="search"><Icon name="search" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "75%" }}></div><div className="mr-l2" style={{ width: "50%" }}></div></div><span className="mr-tag">schema</span></div>
                <div className="mock-row"><span className="mr-ic" data-ic="headset"><Icon name="headset" /></span><div className="mr-main"><div className="mr-l1" style={{ width: "55%" }}></div><div className="mr-l2" style={{ width: "42%" }}></div></div><span className="mr-tag">capture</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How we build it</span>
              <h2 className="h2">A site that earns its keep, fast.</h2>
              <p className="lede">No drawn-out discovery. We move quickly because growth can't wait for a six-month rebuild.</p>
            </div>
            <div className="steps">
              <div className="step reveal"><div className="step-n">/ 01</div><h4>Map &amp; plan</h4><p>We learn your buyers, your offer, and the pages that need to rank, then plan the structure around enquiries.</p></div>
              <div className="step reveal"><div className="step-n">/ 02</div><h4>Design to convert</h4><p>Custom design with copy aimed at the questions your buyers actually ask.</p></div>
              <div className="step reveal"><div className="step-n">/ 03</div><h4>Build &amp; wire in</h4><p>Fast, mobile-first build with SEO, capture, and CRM connected, tested before it goes live.</p></div>
              <div className="step reveal"><div className="step-n">/ 04</div><h4>Launch &amp; manage</h4><p>We launch, then handle hosting, security, and speed so the site stays sharp as you grow.</p></div>
            </div>
          </div>
        </section>

        <section className="section-sm" style={{ paddingTop: "0" }}>
          <div className="container">
            <div className="section-head reveal" style={{ marginBottom: "28px" }}><span className="eyebrow">Connected systems</span><h2 className="h2">What it hands off to</h2></div>
            <div className="crosslinks">
              <Link className="crosslink reveal" href="/seo"><span className="cl-ic" data-ic="search"><Icon name="search" /></span><span className="cl-name">SEO &amp; Local SEO</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
              <Link className="crosslink reveal" href="/lead-capture"><span className="cl-ic" data-ic="headset"><Icon name="headset" /></span><span className="cl-name">Lead Capture &amp; AI Receptionist</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
              <Link className="crosslink reveal" href="/crm"><span className="cl-ic" data-ic="database"><Icon name="database" /></span><span className="cl-name">CRM Command Centre</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
            </div>
          </div>
        </section>

        <section className="section band-dark">
          <div className="grid-tex"></div>
          <div className="container">
            <div className="cta-band reveal">
              <span className="eyebrow on-dark">Your next step</span>
              <h2 className="h2" style={{ marginTop: "16px" }}>See what your site could be doing.</h2>
              <p className="lede">Book a free Growth Teardown and we'll show you exactly where your current site is losing enquiries, and what a conversion-built one would look like.</p>
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

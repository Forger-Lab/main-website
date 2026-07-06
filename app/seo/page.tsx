import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "SEO & Local SEO, SolvoLab",
  description:
    "Get found where buying intent is highest. SolvoLab builds your technical SEO foundation, on-page optimisation, and Google Business Profile to climb the search rankings.",
  alternates: {
    canonical: "/seo",
  },
};

export default function Seo() {
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
                  <span>Step 02 · Get found &amp; convert</span>
                </div>
                <span className="eyebrow on-dark">SEO &amp; Local SEO</span>
                <h1 className="h1">Get found on Google, and when buyers ask AI.</h1>
                <p className="lede">When customers search for what you do, your competitors show up first and you aren't even in the conversation. We fix the technical groundwork, target the keywords your buyers actually type, and own your local presence, so the high-intent traffic comes to you.</p>
                <div className="btn-row">
                  <Link className="btn btn-light btn-lg" href="/contact">Get a free competitor teardown <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                  <a className="btn btn-outline-light btn-lg" href="#included">What's included</a>
                </div>
              </div>
              <div className="mock reveal" style={{ background: "rgba(255,255,255,0.05)", borderColor: "var(--forest-line)" }}>
                <div className="mock-bar"><span className="dot"></span><span className="dot"></span><span className="dot"></span><span className="mock-title" style={{ color: "rgba(234,246,241,0.6)" }}>search · "near me"</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="map"><Icon name="map" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Map pack · #1–3</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>Where buying intent is highest</div></div><span className="mr-tag">local</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="trending"><Icon name="trending" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Organic rankings climbing</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>Targeted to buyer keywords</div></div><span className="mr-tag">organic</span></div>
                <div className="mock-row" style={{ borderColor: "var(--forest-line)" }}><span className="mr-ic" data-ic="sparkle"><Icon name="sparkle" /></span><div className="mr-main"><div style={{ color: "#fff", fontWeight: "600", fontSize: "14px" }}>Recommended by AI search</div><div style={{ color: "rgba(234,246,241,0.55)", fontSize: "12.5px", marginTop: "3px" }}>ChatGPT, Perplexity &amp; Gemini</div></div><span className="mr-tag">AEO</span></div>
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
                <p style={{ margin: "0", color: "var(--ink-2)", fontSize: "15.5px", lineHeight: "1.55" }}>SEO fills the top of your pipeline with high-intent visitors. Because it's built on the same site we develop, there's no fighting a slow theme or broken markup, the foundation is already there to climb.</p>
              </div>
              <Link className="btn btn-ghost" href="/#engine">See the full Engine <span data-ic="arrow"><Icon name="arrow" /></span></Link>
            </div>
          </div>
        </section>

        <section className="section" id="included" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">What's included</span>
              <h2 className="h2">The groundwork Google rewards with rankings.</h2>
            </div>
            <div className="incl-grid">
              <div className="incl-item reveal"><span className="incl-ic" data-ic="gauge"><Icon name="gauge" /></span><div><h4>Technical SEO foundation</h4><p>Speed, schema, indexing, and Core Web Vitals, the groundwork that lets you rank at all.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="target"><Icon name="target" /></span><div><h4>On-page SEO + keyword mapping</h4><p>Every page optimised to rank for what your buyers are actually typing into Google.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="eye"><Icon name="eye" /></span><div><h4>Keyword &amp; competitor strategy</h4><p>We find the gaps your competitors left open and aim your site straight at them.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="map"><Icon name="map" /></span><div><h4>Google Business Profile + Local SEO</h4><p>Show up in the map pack and "near me" searches where buying intent is highest.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="sparkle"><Icon name="sparkle" /></span><div><h4>AI search &amp; answer-engine readiness</h4><p>Structured so you surface when buyers ask ChatGPT, Perplexity, or Gemini for a recommendation.</p></div></div>
              <div className="incl-item reveal"><span className="incl-ic" data-ic="refresh"><Icon name="refresh" /></span><div><h4>Ongoing SEO, content &amp; backlinks</h4><p>In Phase 2, a steady climb up the rankings, fresh content, links, and continuous optimisation.</p></div></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How we rank you</span>
              <h2 className="h2">Aimed at the gaps your competitors left open.</h2>
              <p className="lede">We start by showing you exactly where you're being beaten, then close the gap, page by page.</p>
            </div>
            <div className="steps">
              <div className="step reveal"><div className="step-n">/ 01</div><h4>Competitor teardown</h4><p>A clear breakdown of where your top three competitors are winning, and the openings they've left.</p></div>
              <div className="step reveal"><div className="step-n">/ 02</div><h4>Fix the foundation</h4><p>Speed, schema, indexing, and Core Web Vitals, so Google can crawl and trust your site.</p></div>
              <div className="step reveal"><div className="step-n">/ 03</div><h4>Map &amp; optimise</h4><p>Keyword-mapped pages, local listings, and a Google Business Profile tuned for intent.</p></div>
              <div className="step reveal"><div className="step-n">/ 04</div><h4>Climb &amp; compound</h4><p>Ongoing content and backlinks that build authority month after month.</p></div>
            </div>
          </div>
        </section>

        <section className="section-sm" style={{ paddingTop: "0" }}>
          <div className="container">
            <div className="section-head reveal" style={{ marginBottom: "28px" }}><span className="eyebrow">Connected systems</span><h2 className="h2">What it connects to</h2></div>
            <div className="crosslinks">
              <Link className="crosslink reveal" href="/web-development"><span className="cl-ic" data-ic="globe"><Icon name="globe" /></span><span className="cl-name">Web Design &amp; Development</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
              <Link className="crosslink reveal" href="/lead-capture"><span className="cl-ic" data-ic="headset"><Icon name="headset" /></span><span className="cl-name">Lead Capture &amp; AI Receptionist</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
              <Link className="crosslink reveal" href="/crm"><span className="cl-ic" data-ic="database"><Icon name="database" /></span><span className="cl-name">CRM Command Center</span><span className="cl-arrow" data-ic="arrowUR"><Icon name="arrowUR" /></span></Link>
            </div>
          </div>
        </section>

        <section className="section band-dark">
          <div className="grid-tex"></div>
          <div className="container">
            <div className="cta-band reveal">
              <span className="eyebrow on-dark">Your next step</span>
              <h2 className="h2" style={{ marginTop: "16px" }}>See where your competitors are beating you.</h2>
              <p className="lede">Book a free Growth Teardown and we'll show you exactly where you're losing visibility today, and the keywords you could own. You keep the competitor teardown either way.</p>
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

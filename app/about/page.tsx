import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Icon from "@/components/Icon";

export const metadata: Metadata = {
  title: "Why SolvoLab, One team, one pipeline, no gaps",
  description:
    "SolvoLab was founded to solve a single, expensive problem: the gap between your marketing agencies. We build and run your entire pipeline under one roof.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <>
      <Nav />
      <main>
        <header className="band-dark">
          <div className="grid-tex"></div>
          <div className="container page-hero">
            <div style={{ maxWidth: "820px" }}>
              <span className="eyebrow on-dark">Why SolvoLab</span>
              <h1 className="h1">One team owns the whole pipeline, so nothing breaks in the gaps.</h1>
              <p className="lede">Most growth problems aren't a website problem, or an SEO problem, or a CRM problem. They're a <em>seams</em> problem, the place where one vendor hands off to the next and something quietly falls through. We exist to remove the seams.</p>
              <div className="btn-row">
                <Link className="btn btn-light btn-lg" href="/contact">Book a free Growth Teardown <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                <Link className="btn btn-outline-light btn-lg" href="/#engine">See the Engine</Link>
              </div>
            </div>
          </div>
        </header>

        <section className="section">
          <div className="container">
            <div className="split">
              <div className="reveal">
                <span className="eyebrow">The old way</span>
                <h2 className="h2" style={{ margin: "16px 0 18px" }}>Three vendors. Three invoices. Every handoff breaks.</h2>
                <div className="prose-cols" style={{ columns: "1" }}>
                  <p>A web designer who doesn't talk to your SEO person. An SEO person who doesn't talk to whoever set up your CRM. Each does their part and points at the others when leads don't show up.</p>
                  <p>The website launches without the schema SEO needs. The forms aren't wired to the CRM. Follow-up is "on the roadmap." Nobody owns the result, they each own a slice, and the slices don't add up to a pipeline.</p>
                  <p>You feel it as slow projects, finger-pointing, and revenue that leaks somewhere between the click and the closed deal.</p>
                </div>
              </div>
              <div className="card reveal" style={{ padding: "34px", display: "flex", flexDirection: "column", gap: "18px" }}>
                <div className="incl-item" style={{ border: "none", padding: "0", background: "none" }}><span className="incl-ic" style={{ background: "var(--violet-soft)", color: "var(--violet)" }} data-ic="globe"><Icon name="globe" /></span><div><h4>Vendor 1, Web</h4><p>"The site's live. SEO's not my job."</p></div></div>
                <div style={{ height: "1px", background: "var(--line)" }}></div>
                <div className="incl-item" style={{ border: "none", padding: "0", background: "none" }}><span className="incl-ic" style={{ background: "var(--violet-soft)", color: "var(--violet)" }} data-ic="search"><Icon name="search" /></span><div><h4>Vendor 2, SEO</h4><p>"The build won't let me rank it."</p></div></div>
                <div style={{ height: "1px", background: "var(--line)" }}></div>
                <div className="incl-item" style={{ border: "none", padding: "0", background: "none" }}><span className="incl-ic" style={{ background: "var(--violet-soft)", color: "var(--violet)" }} data-ic="database"><Icon name="database" /></span><div><h4>Vendor 3, CRM</h4><p>"No one sent me the form fields."</p></div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" style={{ background: "var(--bg-soft)" }}>
          <div className="container">
            <div className="section-head center reveal">
              <span className="eyebrow">The SolvoLab way</span>
              <h2 className="h2">We replace all of it.</h2>
              <p className="lede">One team owns your website, SEO, lead capture, CRM, and automated follow-up end-to-end, so the pieces are built to fit together from the first day, because the same people build them.</p>
            </div>
            <div className="pillar-grid">
              <div className="pillar card reveal"><span className="pillar-ic" data-ic="layers"><Icon name="layers" /></span><h3>End-to-end ownership</h3><p>One accountable team for the whole pipeline, no slices, no finger-pointing, one number to move.</p></div>
              <div className="pillar card reveal"><span className="pillar-ic" data-ic="bolt"><Icon name="bolt" /></span><h3>Built to fit, day one</h3><p>Site, SEO, capture, and CRM are designed together, so there are no broken handoffs to fix later.</p></div>
              <div className="pillar card reveal"><span className="pillar-ic" data-ic="users"><Icon name="users" /></span><h3>Done-for-you, never templated</h3><p>Every engagement is custom, never handed to a content mill. That's why we only take a few.</p></div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How we work</span>
              <h2 className="h2">Aligned with your ROI, not a retainer.</h2>
              <p className="lede">By owning the full technical execution and the ongoing management, we tie our success to your numbers, and we put it in writing.</p>
            </div>
            <div className="steps">
              <div className="step reveal"><div className="step-n">/ 01</div><h4>We launch fast</h4><p>No three-month "discovery" stall. A focused sprint maps your funnel and gets the engine live.</p></div>
              <div className="step reveal"><div className="step-n">/ 02</div><h4>We run &amp; climb</h4><p>From month four, we manage the whole pipeline, SEO, site, CRM, automation, and reputation.</p></div>
              <div className="step reveal"><div className="step-n">/ 03</div><h4>We report plainly</h4><p>A monthly report and strategy call. You see the numbers and the plan, no jargon, no smoke.</p></div>
              <div className="step reveal"><div className="step-n">/ 04</div><h4>We earn it</h4><p>The 90-day guarantee means we don't coast on a retainer. We keep working until the numbers move.</p></div>
            </div>
          </div>
        </section>

        <section className="section-sm band-dark">
          <div className="grid-tex"></div>
          <div className="container">
            <div className="guarantee reveal">
              <div className="seal"><div><div className="seal-num">90</div><div className="seal-unit">Day guarantee</div></div></div>
              <div>
                <span className="eyebrow on-dark">Zero risk</span>
                <h2 className="h2" style={{ margin: "14px 0 14px" }}>We earn the retainer by moving your numbers.</h2>
                <p className="lede" style={{ maxWidth: "640px" }}>Within 90 days of launch, you'll see measurable growth in your organic visibility and inbound leads. If you don't, we keep working at no extra cost until you do. Every build is fully done-for-you, we focus on moving your numbers, not on retainers.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-band reveal">
              <span className="eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}>Your next step</span>
              <h2 className="h2" style={{ marginTop: "16px" }}>See what one team could do for your pipeline.</h2>
              <p className="lede">Book a free Growth Teardown. We'll show you where you're losing leads today and what your engine would look like built, and if it's not a fit, you keep the competitor teardown anyway.</p>
              <div className="btn-row">
                <Link className="btn btn-primary btn-lg" href="/contact">Book a free Growth Teardown <span data-ic="arrow"><Icon name="arrow" /></span></Link>
                <Link className="btn btn-ghost btn-lg" href="/#engine">Explore the Engine</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

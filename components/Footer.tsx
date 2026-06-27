"use client";

import React from "react";
import Link from "next/link";

const LOGO = "/brandlogo/SolvoLabLogo-Cut.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="foot-grid">
          <div>
            <Link href="/" className="foot-brand">
              <img src={LOGO} alt="SolvoLab" />
              <span>Solvo<span style={{ color: "rgba(234,246,241,0.55)" }}>Lab</span></span>
            </Link>
            <p className="foot-blurb">The 24/7 Client Engine, one team that builds and runs your entire growth pipeline, so nothing breaks in the gaps.</p>
          </div>
          <div className="foot-col">
            <h5>The Engine</h5>
            <Link href="/web-development">Web Design &amp; Development</Link>
            <Link href="/seo">SEO &amp; Local SEO</Link>
            <Link href="/lead-capture">Lead Capture &amp; AI Receptionist</Link>
            <Link href="/crm">CRM Command Centre</Link>
            <Link href="/automation">Automation &amp; Follow-Up</Link>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <Link href="/about">Why us</Link>
            <Link href="/#pricing">Pricing</Link>
            <Link href="/#engine">How it works</Link>
            <Link href="/contact">Book a teardown</Link>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <Link href="mailto:hello@solvolab.com">hello@solvolab.com</Link>
            <Link href="/contact">Book a call</Link>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© {new Date().getFullYear()} SolvoLab, one team, one pipeline, no gaps.</div>
          <div className="mono">solvolab.com · <Link href="/privacy">/privacy</Link> · /terms</div>
        </div>
      </div>
    </footer>
  );
}

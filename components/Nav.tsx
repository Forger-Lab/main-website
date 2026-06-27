"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "./Icon";
import { trackClick } from "@/lib/analytics";

const LOGO = "/brandlogo/SolvoLabLogo-Cut.png";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close menus on path changes
  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(false);
    document.body.style.overflow = "";
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMobileToggle = () => {
    const nextState = !mobileOpen;
    setMobileOpen(nextState);
    document.body.style.overflow = nextState ? "hidden" : "";
  };

  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <Link href="/" className="brand">
            <img src={LOGO} alt="SolvoLab" />
            <span>Solvo<span className="tld">Lab</span></span>
          </Link>

          <div className="nav-menu">
            <div className={`has-dropdown ${dropdownOpen ? "open" : ""}`} ref={dropdownRef}>
              <button
                className="nav-link"
                aria-haspopup="true"
                aria-expanded={dropdownOpen}
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                The Engine <span className="chev" data-ic="chevron"><Icon name="chevron" /></span>
              </button>
              <div className="dropdown-panel">
                <div className="dropdown-grid">
                  <Link className="dd-item" href="/web-development" onClick={() => trackClick("nav_web_dev")}>
                    <span className="dd-ic" data-ic="globe"><Icon name="globe" /></span>
                    <span>
                      <span className="dd-title">Web Design &amp; Development</span>
                      <span className="dd-sub">A fast, conversion-built site</span>
                    </span>
                  </Link>
                  <Link className="dd-item" href="/seo" onClick={() => trackClick("nav_seo")}>
                    <span className="dd-ic" data-ic="search"><Icon name="search" /></span>
                    <span>
                      <span className="dd-title">SEO &amp; Local SEO</span>
                      <span className="dd-sub">Get found on Google &amp; AI search</span>
                    </span>
                  </Link>
                  <Link className="dd-item" href="/lead-capture" onClick={() => trackClick("nav_lead_capture")}>
                    <span className="dd-ic" data-ic="headset"><Icon name="headset" /></span>
                    <span>
                      <span className="dd-title">Lead Capture &amp; AI Receptionist</span>
                      <span className="dd-sub">Answer every lead in seconds</span>
                    </span>
                  </Link>
                  <Link className="dd-item" href="/crm" onClick={() => trackClick("nav_crm")}>
                    <span className="dd-ic" data-ic="database"><Icon name="database" /></span>
                    <span>
                      <span className="dd-title">CRM Command Centre</span>
                      <span className="dd-sub">Every lead in one place</span>
                    </span>
                  </Link>
                  <Link className="dd-item" href="/automation" onClick={() => trackClick("nav_automation")}>
                    <span className="dd-ic" data-ic="workflow"><Icon name="workflow" /></span>
                    <span>
                      <span className="dd-title">Automation &amp; Follow-Up</span>
                      <span className="dd-sub">Nurture on autopilot</span>
                    </span>
                  </Link>
                  <Link className="dd-item" href="/#engine" onClick={() => trackClick("nav_engine_full")}>
                    <span className="dd-ic" data-ic="layers"><Icon name="layers" /></span>
                    <span>
                      <span className="dd-title">The full Engine</span>
                      <span className="dd-sub">How the five connect</span>
                    </span>
                  </Link>
                </div>
                <div className="dd-foot">
                  <span className="label">One team · one invoice · no gaps</span>
                  <Link className="btn btn-primary btn-sm" href="/contact" onClick={() => trackClick("nav_dropdown_cta")}>
                    Book a teardown <span data-ic="arrow"><Icon name="arrow" /></span>
                  </Link>
                </div>
              </div>
            </div>

            <Link className="nav-link" href="/#pricing" aria-current={pathname === "/#pricing" ? "page" : undefined}>Pricing</Link>
            <Link className="nav-link" href="/about" aria-current={pathname === "/about" ? "page" : undefined}>Why us</Link>
            <Link className="nav-link" href="/contact" aria-current={pathname === "/contact" ? "page" : undefined}>Contact</Link>
          </div>

          <div className="nav-actions">
            <Link className="btn btn-primary btn-sm btn-desktop" href="/contact" onClick={() => trackClick("nav_header_cta")}>
              Book a Growth Teardown
            </Link>
            <button
              className="nav-toggle"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={handleMobileToggle}
            >
              <span data-ic={mobileOpen ? "close" : "menu"}>
                <Icon name={mobileOpen ? "close" : "menu"} />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer menu */}
      <div className={`mobile-menu ${mobileOpen ? "open" : ""}`}>
        <div className="m-section-title">The Engine</div>
        <Link className="m-sub" href="/web-development">Web Design &amp; Development</Link>
        <Link className="m-sub" href="/seo">SEO &amp; Local SEO</Link>
        <Link className="m-sub" href="/lead-capture">Lead Capture &amp; AI Receptionist</Link>
        <Link className="m-sub" href="/crm">CRM Command Centre</Link>
        <Link className="m-sub" href="/automation">Automation &amp; Follow-Up</Link>
        <Link href="/#pricing">Pricing</Link>
        <Link href="/about">Why us</Link>
        <Link href="/contact">Contact</Link>
        <Link className="btn btn-primary" href="/contact" onClick={() => trackClick("nav_mobile_cta")}>
          Book a Growth Teardown
        </Link>
      </div>
    </>
  );
}

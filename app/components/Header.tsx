"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const solutions = [
  {
    title: "Legal Practice Automation",
    description: "AI Intake Response in Seconds",
    href: "/industries/legal-practice-automation",
  },
  {
    title: "Real Estate Lead Conversion",
    description: "24/7 AI Voice Follow-ups",
    href: "/industries/real-estate-lead-conversion",
  },
  {
    title: "Clinical Workflow AI",
    description: "Eliminate No-Show Loss",
    href: "/industries/clinical-workflow-ai",
  },
];

const platform = [
  {
    title: "n8n Workflow Automation",
    description: "Complex workflow orchestration",
    href: "/services/n8n-workflow-automation",
  },
  {
    title: "AI Agent Development",
    description: "Autonomous agents that reason & execute",
    href: "/services/ai-agent-development",
  },
  {
    title: "System Integration & API",
    description: "Connect legacy systems with modern tools",
    href: "/services/system-integration-api",
  },
];

export default function Header() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {/* Utility Bar */}
      <div className={styles.utilityBar}>
        <div className={`container ${styles.utilityContent}`}>
          <a href="mailto:support@solvolab.com" className={styles.utilityLink}>
            Support
          </a>
          <a href="tel:+1234567890" className={styles.utilityLink}>
            📞 (123) 456-7890
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={styles.nav}>
        <div className={`container ${styles.navContent}`}>
          {/* Logo */}
          <Link
            href="/"
            className={styles.logo}
            style={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <img
              src="/brandlogo/SolvoLabLogo-Cut.png"
              alt="SolvoLab"
              width={140}
              height={40}
            />
            <h2 style={{ color: "#010101" }}>SolvoLab</h2>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`${styles.hamburger} ${mobileMenuOpen ? styles.hamburgerOpen : ""}`}
            />
          </button>

          {/* Nav Links */}
          <div
            className={`${styles.navLinks} ${mobileMenuOpen ? styles.navLinksOpen : ""}`}
          >
            {/* Solutions Dropdown */}
            <div
              className={styles.navItem}
              onMouseEnter={() => setActiveDropdown("solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={styles.navButton}>
                Solutions
                <svg
                  className={styles.chevron}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {activeDropdown === "solutions" && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownContent}>
                    {solutions.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownItem}
                      >
                        <div>
                          <div className={styles.dropdownTitle}>
                            {item.title}
                          </div>
                          <div className={styles.dropdownDesc}>
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Platform Dropdown */}
            <div
              className={styles.navItem}
              onMouseEnter={() => setActiveDropdown("platform")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className={styles.navButton}>
                Platform
                <svg
                  className={styles.chevron}
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                >
                  <path
                    d="M3 4.5L6 7.5L9 4.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {activeDropdown === "platform" && (
                <div className={styles.dropdown}>
                  <div className={styles.dropdownContent}>
                    {platform.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={styles.dropdownItem}
                      >
                        <div>
                          <div className={styles.dropdownTitle}>
                            {item.title}
                          </div>
                          <div className={styles.dropdownDesc}>
                            {item.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Results Link */}
            <Link href="/results" className={styles.navLink}>
              Results
            </Link>

            {/* Mobile CTA */}
            <div className={styles.mobileCta}>
              <Link href="/contact" className="btn btn--primary">
                Get Your Audit
              </Link>
            </div>
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className={`btn btn--primary ${styles.desktopCta}`}
          >
            Get Your Audit
          </Link>
        </div>
      </nav>
    </header>
  );
}

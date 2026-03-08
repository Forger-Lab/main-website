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
          <a href="mailto:saboor@solvolab.com" className={styles.utilityLink}>
            Support
          </a>
          <a href="https://wa.me/966532962900" target="_blank" rel="noopener noreferrer" className={styles.utilityLink} style={{display: "flex", gap: "6px", alignItems: "center"}}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
            </svg>
            (966) 532-962-900
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

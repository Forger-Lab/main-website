import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = {
  solutions: [
    {
      label: "Legal Practice Automation",
      href: "/industries/legal-practice-automation",
    },
    {
      label: "Real Estate Lead Conversion",
      href: "/industries/real-estate-lead-conversion",
    },
    { label: "Clinical Workflow AI", href: "/industries/clinical-workflow-ai" },
  ],
  platform: [
    { label: "n8n Automation", href: "/services/n8n-workflow-automation" },
    { label: "AI Agents", href: "/services/ai-agent-development" },
    { label: "System Integration", href: "/services/system-integration-api" },
  ],
  company: [
    { label: "Results", href: "/results" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContent}`}>
        {/* Brand Column */}
        <div className={styles.brandCol}>
          <Link
            href="/"
            className={styles.logo}
            style={{ display: "flex", alignItems: "center", gap: 1 }}
          >
            <img
              src="/brandlogo/SolvoLabLogo-Cut.png"
              alt="SolvoLab"
              width={40}
              height={40}
            />
            <h1 style={{ color: "#ffffff" }}>SolvoLab</h1>
          </Link>
          <p className={styles.tagline}>
            Transform manual bottlenecks into automated growth engines.
          </p>
        </div>

        {/* Links Columns */}
        <div className={styles.linksGrid}>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Solutions</h4>
            <ul className={styles.linkList}>
              {footerLinks.solutions.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Platform</h4>
            <ul className={styles.linkList}>
              {footerLinks.platform.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={styles.link}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={styles.bottomBar}>
        <div className={`container ${styles.bottomContent}`}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} SolvoLab. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

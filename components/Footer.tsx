import Link from "next/link";
import { serviceLinks } from "@/lib/navigation";

export default function Footer() {
  return (
    <footer className="site-shell home-footer">
      <div className="home-container">
        <div className="home-footer-grid">
          <div className="home-footer-brand">
            <Link href="/" aria-label="SolvoLab home"><img src="/home/46ec6.png" alt="SolvoLab" width="240" height="98" /></Link>
            <p>Software, automation and AI connected to the way your business works.</p>
          </div>
          <div>
            <h3>Services</h3>
            <Link href="/#services">Services Overview</Link>
            <Link href="/#engine">24/7 Client Engine</Link>
            {serviceLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          </div>
          <div>
            <h3>Explore</h3>
            <Link href="/">Home</Link>
            <Link href="/#client-work">Client Stories</Link>
            <Link href="/builds#builds">Selected Builds</Link>
            <Link href="/#approach">Our Approach</Link>
            <Link href="/#architecture">Architecture</Link>
            <Link href="/#security">Security</Link>
            <Link href="/#insights">Tools &amp; Integrations</Link>
            <Link href="/#faq">FAQs</Link>
          </div>
          <div>
            <h3>Company &amp; Contact</h3>
            <Link href="/about">About Us</Link>
            <Link href="/#studio">Our Studio</Link>
            <Link href="/contact">Contact Us</Link>
            <Link href="/contact">Discuss pricing</Link>
            <a href="mailto:saboor@solvolab.com">saboor@solvolab.com</a>
            <a href="https://www.linkedin.com/company/110093159" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
          </div>
        </div>
        <div className="home-footer-bottom">
          <span>© {new Date().getFullYear()} SolvoLab</span>
          <div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms of Service</Link></div>
        </div>
      </div>
    </footer>
  );
}

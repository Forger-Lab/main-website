"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection, {
  AnimatedStagger,
  AnimatedItem,
} from "../components/AnimatedSection";
import styles from "./results.module.css";
import { Building2, ShieldCheck, Database } from "lucide-react";

const caseStudies = [
  {
    id: "architech",
    company: "ArchiTech Institute",
    logo: <Building2 size={28} strokeWidth={1.5} />,
    service: "CMS Integration & Lead Inbound",
    headline: "Unifying Data & Accelerating Lead Capture",
    description:
      "How ArchiTech Institute eliminated manual data entry by seamlessly integrating their CMS, leading to faster response times and perfectly synced inbound leads.",
    metrics: [
      { value: "100%", label: "Data Sync" },
      { value: "+28%", label: "Lead Capture" },
      { value: "15hrs", label: "Saved Weekly" },
    ],
    link: "/services/system-integration-api",
  },
  {
    id: "vigilant",
    company: "Vigilant Security Services",
    logo: <ShieldCheck size={28} strokeWidth={1.5} />,
    service: "SEO/GEO Lead Inbound",
    headline: "Dominating Local Search & Lead Generation",
    description:
      "How Vigilant Security Services leveraged our AI-driven Generative Engine Optimization (GEO) to dominate local 'near me' searches and automate their inbound outreach.",
    metrics: [
      { value: "3x", label: "Local Traffic" },
      { value: "24/7", label: "Instant Response" },
      { value: "+42%", label: "More Consults" },
    ],
    link: "/industries/real-estate-lead-conversion",
  },
  {
    id: "cpshub",
    company: "CPShub",
    logo: <Database size={28} strokeWidth={1.5} />,
    service: "AI-Driven Data Scrapers & Cleaners",
    headline: "Flawless Data at Unprecedented Scale",
    description:
      "How CPShub automated their entire data pipeline with our custom AI scrapers and cleaners, ensuring real-time, error-free insights without human intervention.",
    metrics: [
      { value: "99.9%", label: "Data Accuracy" },
      { value: "Zero", label: "Manual Entry" },
      { value: "Live", label: "Data Sync" },
    ],
    link: "/services/ai-agent-development",
  },
];

export default function ResultsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <AnimatedSection className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Proven Results for{" "}
                <span className={styles.highlight}>
                  Growth-Focused Businesses
                </span>
              </h1>
              <p className={styles.heroSubtitle}>
                See how we've helped companies automate operations and recover
                hidden revenue.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className={`section section--lg ${styles.caseStudies}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>Client Success Stories</h2>
              <p className={styles.sectionSubtitle}>
                Real results from real businesses across our core industries.
              </p>
            </AnimatedSection>

            <AnimatedStagger className={styles.caseGrid}>
              {caseStudies.map((study) => (
                <AnimatedItem key={study.id}>
                  <div className={`card ${styles.caseCard}`}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <div style={{ color: "var(--color-primary-600)", display: "flex" }}>
                        {study.logo}
                      </div>
                      <h4 style={{ margin: 0, fontSize: "1.25rem", color: "var(--color-neutral-900)", fontWeight: "bold" }}>
                        {study.company}
                      </h4>
                    </div>
                    <span className={styles.industryBadge}>
                      {study.service}
                    </span>
                    <h3 className={styles.caseTitle}>{study.headline}</h3>
                    <p className={styles.caseDesc}>{study.description}</p>

                    <div className={styles.metricsRow}>
                      {study.metrics.map((metric, index) => (
                        <div key={index} className={styles.metric}>
                          <span className={styles.metricValue}>
                            {metric.value}
                          </span>
                          <span className={styles.metricLabel}>
                            {metric.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Link href={study.link} className={styles.caseLink}>
                      Read Full Case Study →
                    </Link>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </section>

        {/* ROI Calculator Teaser */}
        <section className={`section ${styles.roiSection}`}>
          <div className="container">
            <AnimatedSection className={styles.roiContent}>
              <h2>What Could You Save?</h2>
              <p className={styles.roiDesc}>
                Our clients typically see 3-5x ROI within the first 6 months.
                Estimate your potential savings with our automation calculator.
              </p>
              <div className={styles.roiStats}>
                <div className={styles.roiStat}>
                  <span className={styles.roiValue}>$127K</span>
                  <span className={styles.roiLabel}>
                    Average Annual Savings
                  </span>
                </div>
                <div className={styles.roiStat}>
                  <span className={styles.roiValue}>4.2x</span>
                  <span className={styles.roiLabel}>Average ROI</span>
                </div>
                <div className={styles.roiStat}>
                  <span className={styles.roiValue}>6 mo</span>
                  <span className={styles.roiLabel}>Typical Payback</span>
                </div>
              </div>
              <Link href="/contact" className="btn btn--secondary btn--lg">
                Estimate Your Savings
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <AnimatedSection>
              <h2 className={styles.ctaTitle}>See Your Potential</h2>
              <p className={styles.ctaSubtitle}>
                Book an architectural discovery call to find your automation
                opportunities.
              </p>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Schedule Your Audit
              </Link>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

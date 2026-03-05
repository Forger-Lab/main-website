"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection, {
  AnimatedStagger,
  AnimatedItem,
} from "../components/AnimatedSection";
import styles from "./results.module.css";

const caseStudies = [
  {
    id: "security",
    industry: "Security Operations",
    headline: "Recovering 20 Hours a Week",
    description:
      "How a mid-sized security agency used SolvoLab to automate shift confirmations, reducing dispatcher workload by 40% and eliminating payroll errors.",
    metrics: [
      { value: "0", label: "Payroll Errors" },
      { value: "100%", label: "Shift Verification" },
      { value: "40%", label: "Less Admin Time" },
    ],
    link: "/industries/security-guard-operations",
  },
  {
    id: "flooring",
    industry: "Flooring & Tile Retail",
    headline: "Zero Lost Samples",
    description:
      "How a multi-location flooring retailer eliminated sample loss and increased close rates with automated tracking and visualization tools.",
    metrics: [
      { value: "$0", label: "Sample Loss" },
      { value: "95%", label: "Return Rate" },
      { value: "+22%", label: "Close Rate" },
    ],
    link: "/industries/flooring-tile-retail",
  },
  {
    id: "logistics",
    industry: "Logistics & 3PL",
    headline: "90% Faster Document Processing",
    description:
      "How a regional 3PL automated Bill of Lading intake and eliminated manual data entry across their operations.",
    metrics: [
      { value: "90%", label: "Time Saved" },
      { value: "99%", label: "Accuracy" },
      { value: "3x", label: "More Capacity" },
    ],
    link: "/industries/logistics-3pl-automation",
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
                    <span className={styles.industryBadge}>
                      {study.industry}
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

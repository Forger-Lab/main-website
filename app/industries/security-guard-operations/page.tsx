"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedSection, {
  AnimatedStagger,
  AnimatedItem,
} from "../../components/AnimatedSection";
import AnimatedCounter from "../../components/AnimatedCounter";
import styles from "../industry.module.css";

const painPoints = [
  {
    title: "The Ghost Shift",
    headline: "Paying for Empty Posts?",
    description:
      "Manual check-ins are easily forged. When a guard is late or absent, you're often the last to know—until the client complains. This erodes trust and contracts.",
  },
  {
    title: "Payroll Purgatory",
    headline: "The Weekly Reconciliation Nightmare.",
    description:
      "Bridging the gap between scheduling software and payroll systems often means hours of manual data entry. One typo can lead to wage theft accusations or overpayment.",
  },
  {
    title: "The Black Hole",
    headline: "Critical Data Trapped in Paper.",
    description:
      "Handwritten incident reports are unsearchable and slow to action. You lack the data to prove value to your clients.",
  },
];

const solutions = [
  {
    title: "Geofenced Verification",
    description:
      "We integrate your scheduling tool with mobile GPS. If a guard isn't within the geofence at shift start, an automated n8n workflow triggers an SMS alert to the supervisor instantly.",
    icon: "📍",
  },
  {
    title: "Payroll Synchronization",
    description:
      "Seamlessly pipe verified hours from your time-tracking app directly to your payroll provider. No manual entry. No errors.",
    icon: "💰",
  },
  {
    title: "Intelligent Incident Routing",
    description:
      "Digitize reports with AI processing. High-priority incidents trigger immediate Slack/SMS alerts to management; low-priority logs are archived automatically.",
    icon: "🚨",
  },
];

export default function SecurityOperationsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Background gradient for left side */}
          {/* <div className={styles.heroBgLeft} /> */}

          {/* Right side masked image */}
          <div className={styles.heroImageMask}>
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1472&auto=format&fit=crop"
              alt="Global network visualization"
              className={styles.heroImage}
            />
            <div className={styles.heroImageOverlay} />
          </div>

          {/* Content */}
          <div className="container">
            <AnimatedSection className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Is Your Guard Force Growing Faster Than Your{" "}
                <span className={styles.highlight}>Control?</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Stop wrestling with manual rosters, missed check-ins, and
                payroll disputes. SolvoLab builds the automated command center
                your operations demand.
              </p>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Automate My Guard Force
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className={`section ${styles.painPoints}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>The Operational Drain</h2>
              <p className={styles.sectionSubtitle}>
                These silent profit killers are costing you contracts and peace
                of mind.
              </p>
            </AnimatedSection>

            <AnimatedStagger className={styles.painGrid}>
              {painPoints.map((point, index) => (
                <AnimatedItem key={index}>
                  <div className={styles.painCard}>
                    <span className={styles.painNumber}>0{index + 1}</span>
                    <h3 className={styles.painHeadline}>{point.headline}</h3>
                    <p className={styles.painDesc}>{point.description}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </section>

        {/* Solutions Section */}
        <section className={`section section--lg ${styles.solutions}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>Your Autonomous Security Operations Center</h2>
              <p className={styles.sectionSubtitle}>
                Purpose-built automation for the security industry.
              </p>
            </AnimatedSection>

            <AnimatedStagger className={styles.solutionGrid}>
              {solutions.map((solution, index) => (
                <AnimatedItem key={index}>
                  <div className={`card ${styles.solutionCard}`}>
                    <span className={styles.solutionIcon}>{solution.icon}</span>
                    <h3 className={styles.solutionTitle}>{solution.title}</h3>
                    <p className={styles.solutionDesc}>
                      {solution.description}
                    </p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </section>

        {/* Case Study Section */}
        <section className={`section ${styles.caseStudy}`}>
          <div className="container">
            <AnimatedSection className={styles.caseContent}>
              <div className={styles.caseLabel}>Case Study</div>
              <h2 className={styles.caseTitle}>Recovering 20 Hours a Week</h2>
              <p className={styles.caseDesc}>
                How a mid-sized security agency used SolvoLab to automate shift
                confirmations, reducing dispatcher workload by 40% and
                eliminating payroll errors.
              </p>
              <div className={styles.caseMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={0} />
                  </span>
                  <span className={styles.metricLabel}>Payroll Errors</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={100} suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>Shift Verification</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={40} suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>Less Admin Time</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <AnimatedSection>
              <h2 className={styles.ctaTitle}>Ready to Take Control?</h2>
              <p className={styles.ctaSubtitle}>
                Schedule a security operations audit and discover your
                automation opportunities.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--primary--2 btn--lg">
                  Schedule a Security Ops Audit
                </Link>
                <Link
                  href="/services/system-integration-api"
                  className="btn btn--outline--2 btn--lg"
                >
                  See How We Handle Data
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

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
    title: "The Sample Black Hole",
    headline: "Where did that $50 sample go?",
    description:
      "Samples walk out the door and never return. It's a silent profit killer. Manual logbooks don't work.",
  },
  {
    title: "Inventory Blindness",
    headline: "Selling Stock You Don't Have.",
    description:
      "The warehouse says one thing, the POS says another. You sell a job, only to call the customer back to cancel. It's embarrassing and costly.",
  },
  {
    title: "The Imagination Gap",
    headline: "They Can't See It, So They Don't Buy It.",
    description:
      "Customers struggle to imagine how a sample tile looks across 500 sq ft. This hesitation kills conversion rates.",
  },
];

const solutions = [
  {
    title: "QR Sample Tracking",
    description:
      "Automated check-out/check-in flows via n8n. If a sample isn't returned in 3 days, an automated SMS reminder is sent to the customer. No staff time required.",
    icon: "📱",
  },
  {
    title: "Real-Time Inventory Sync",
    description:
      "We build middleware that syncs your supplier's API with your showroom POS. Always know exactly what is available.",
    icon: "📊",
  },
  {
    title: "AI Visualizer Integration",
    description:
      "Seamlessly integrate visualizer tools into your sales flow. Capture the customer's design preferences and auto-save them to your CRM for follow-up.",
    icon: "🎨",
  },
];

export default function FlooringRetailPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Right side masked image */}
          <div className={styles.heroImageMask}>
            <img
              src="https://images.unsplash.com/photo-1516850228053-a807778c4e0f?q=80&w=1470&auto=format&fit=crop"
              alt="Flooring showroom"
              className={styles.heroImage}
            />
            <div className={styles.heroImageOverlay} />
          </div>

          <div className="container">
            <AnimatedSection className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Transform Your Showroom into a{" "}
                <span className={styles.highlight}>Digital Sales Engine.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Close more deals by tracking every sample, visualizing every
                room, and syncing inventory in real-time. Stop the leakage.
              </p>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Digitize My Showroom
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className={`section ${styles.painPoints}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>The Leaking Bucket</h2>
              <p className={styles.sectionSubtitle}>
                These operational drains are silently eroding your margins.
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
              <h2>Inventory, Visualization, and CRM. Connected.</h2>
              <p className={styles.sectionSubtitle}>
                End-to-end automation for modern flooring retail.
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
              <h2 className={styles.caseTitle}>Zero Lost Samples</h2>
              <p className={styles.caseDesc}>
                How a multi-location flooring retailer eliminated sample loss
                and increased close rates with automated tracking and
                visualization tools.
              </p>
              <div className={styles.caseMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={0} prefix="$" />
                  </span>
                  <span className={styles.metricLabel}>Sample Loss</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={95} suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>Return Rate</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={22} prefix="+" suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>Close Rate</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <AnimatedSection>
              <h2 className={styles.ctaTitle}>Ready to Modernize?</h2>
              <p className={styles.ctaSubtitle}>
                Schedule a retail operations audit and discover your automation
                opportunities.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--primary--2 btn--lg">
                  Modernize My Inventory
                </Link>
                <Link
                  href="/services/ai-agent-development"
                  className="btn btn--outline--2 btn--lg"
                >
                  Explore Visualizer Tech
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

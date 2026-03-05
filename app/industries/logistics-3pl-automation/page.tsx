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
    title: "The Data Entry Trap",
    headline: "Manual Keying is a Liability.",
    description:
      "Transcribing Bills of Lading is slow and error-prone. A single digit error in a weight or address can delay a shipment for days.",
  },
  {
    title: "The Visibility Vacuum",
    headline: "The 'Check Call' Grind.",
    description:
      "Your team spends hours answering 'Where is my truck?' emails. This reactive communication prevents them from booking more freight.",
  },
  {
    title: "Quoting Latency",
    headline: "Slow Quotes Lose Loads.",
    description:
      "If you can't quote a lane in minutes, you lose the business. Manual rate sheet lookups are obsolete.",
  },
];

const solutions = [
  {
    title: "AI Document Extraction (IDP)",
    description:
      "Drag and drop a PDF Bill of Lading. Our AI agents parse the data, validate it against your ERP, and create the order automatically. 99% accuracy.",
    icon: "📄",
  },
  {
    title: "Automated Status Webhooks",
    description:
      "Push tracking updates directly to your customer's portal. When the carrier updates their status, your client knows instantly.",
    icon: "🔔",
  },
  {
    title: "Dynamic Rate Calculation",
    description:
      "We connect your historical lane data with live market APIs to generate instant, profitable quotes.",
    icon: "💹",
  },
];

export default function LogisticsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Right side masked image */}
          <div className={styles.heroImageMask}>
            <img
              src="https://images.unsplash.com/photo-1593824854968-7833add41c16?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Logistics warehouse"
              className={styles.heroImage}
              // style={{ transform: "scaleX(-1)" }}
            />
            <div className={styles.heroImageOverlay} />
          </div>

          <div className="container">
            <AnimatedSection className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Move Freight,{" "}
                <span className={styles.highlight}>Not Paper.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Automate Bill of Lading processing, instant quoting, and carrier
                tracking with AI-driven workflows. Cut your document processing
                time by 90%.
              </p>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Streamline My Supply Chain
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className={`section ${styles.painPoints}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>Operational Bottlenecks</h2>
              <p className={styles.sectionSubtitle}>
                Manual processes that are slowing down your freight operation.
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
              <h2>The Modern 3PL Tech Stack</h2>
              <p className={styles.sectionSubtitle}>
                AI-powered automation built for logistics operations.
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
              <h2 className={styles.caseTitle}>
                90% Faster Document Processing
              </h2>
              <p className={styles.caseDesc}>
                How a regional 3PL automated Bill of Lading intake and
                eliminated manual data entry across their operations.
              </p>
              <div className={styles.caseMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={90} suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>Time Saved</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={99} suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>Accuracy</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={3} suffix="x" />
                  </span>
                  <span className={styles.metricLabel}>More Capacity</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <AnimatedSection>
              <h2 className={styles.ctaTitle}>Ready to Automate?</h2>
              <p className={styles.ctaSubtitle}>
                Schedule a logistics operations audit and discover your
                automation opportunities.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--primary--2 btn--lg">
                  Start Automating Documents
                </Link>
                <Link
                  href="/services/ai-agent-development"
                  className="btn btn--outline--2 btn--lg"
                >
                  Understand IDP Technology
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

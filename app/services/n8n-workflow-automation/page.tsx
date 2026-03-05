"use client";

import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AnimatedSection, {
  AnimatedStagger,
  AnimatedItem,
} from "../../components/AnimatedSection";
import styles from "../services.module.css";

const capabilities = [
  {
    title: "Error Handling & Recovery",
    description:
      "Built-in retry logic, fallback nodes, and instant error notifications. Your workflows recover gracefully from failures.",
    icon: "🛡️",
    iconBg: "#ede9fe",
    iconColor: "#7c3aed",
  },
  {
    title: "Data Transformation",
    description:
      "JSON mapping, filtering, aggregation, and schema validation. Transform data between any formats seamlessly.",
    icon: "🔄",
    iconBg: "#e0f2fe",
    iconColor: "#0ea5e9",
  },
  {
    title: "API Orchestration",
    description:
      "Connect 400+ pre-built integrations or create custom nodes. Webhooks, REST, GraphQL—we handle it all.",
    icon: "🔗",
    iconBg: "#fce7f3",
    iconColor: "#ec4899",
  },
  {
    title: "Scheduled & Event-Driven",
    description:
      "Cron-based triggers, webhook listeners, and event-driven execution. Your workflows run exactly when needed.",
    icon: "⏰",
    iconBg: "#dcfce7",
    iconColor: "#22c55e",
  },
];

const useCases = [
  {
    industry: "Security",
    title: "Shift Verification Automation",
    description:
      "GPS check-in triggers workflow → validates against schedule → alerts supervisor if mismatch → logs to payroll.",
    link: "/industries/security-guard-operations",
  },
  {
    industry: "Flooring",
    title: "Sample Tracking Workflows",
    description:
      "QR scan triggers check-out → starts 3-day timer → sends SMS reminder → escalates to manager if not returned.",
    link: "/industries/flooring-tile-retail",
  },
  {
    industry: "Logistics",
    title: "BoL Processing Pipelines",
    description:
      "Document upload triggers AI extraction → validates against ERP → creates order → notifies carrier.",
    link: "/industries/logistics-3pl-automation",
  },
];

export default function N8nWorkflowPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <AnimatedSection className={styles.heroContent}>
              <span className={styles.serviceBadge}>Platform</span>
              <h1 className={styles.heroTitle}>
                n8n Workflow{" "}
                <span className={styles.highlight}>Orchestration</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Complex, multi-node workflows that handle error routing, data
                transformation, and API orchestration at scale. We build
                production-grade automation that doesn't break.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className={`section section--lg ${styles.capabilities}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>What We Build</h2>
              <p className={styles.sectionSubtitle}>
                Enterprise-grade workflow automation capabilities.
              </p>
            </AnimatedSection>

            <AnimatedStagger className={styles.capabilityGrid}>
              {capabilities.map((cap, index) => (
                <AnimatedItem key={index}>
                  <div className={styles.capabilityCard}>
                    <div
                      className={styles.capIconWrapper}
                      style={{ backgroundColor: cap.iconBg }}
                    >
                      <span className={styles.capIcon}>{cap.icon}</span>
                    </div>
                    <h3 className={styles.capTitle}>{cap.title}</h3>
                    <p className={styles.capDesc}>{cap.description}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className={`section ${styles.useCases}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>Industry Applications</h2>
              <p className={styles.sectionSubtitle}>
                See how n8n powers automation across our core verticals.
              </p>
            </AnimatedSection>

            <AnimatedStagger className={styles.useCaseGrid}>
              {useCases.map((useCase, index) => (
                <AnimatedItem key={index}>
                  <Link
                    href={useCase.link}
                    className={`card card--interactive ${styles.useCaseCard}`}
                  >
                    <span className={styles.useCaseBadge}>
                      {useCase.industry}
                    </span>
                    <h3 className={styles.useCaseTitle}>{useCase.title}</h3>
                    <p className={styles.useCaseDesc}>{useCase.description}</p>
                    <span className={styles.useCaseLink}>Learn more →</span>
                  </Link>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className={`section ${styles.techStack}`}>
          <div className="container text-center">
            <AnimatedSection>
              <h2>Why n8n?</h2>
              <div className={styles.whyGrid}>
                <div className={styles.whyItem}>
                  <h3>Self-Hosted</h3>
                  <p>
                    Your data stays on your infrastructure. Full control, full
                    compliance.
                  </p>
                </div>
                <div className={styles.whyItem}>
                  <h3>Open Source</h3>
                  <p>
                    No vendor lock-in. You own the code. Transparent and
                    extensible.
                  </p>
                </div>
                <div className={styles.whyItem}>
                  <h3>Fair Code</h3>
                  <p>
                    Sustainable licensing that supports our open-source
                    commitment.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <AnimatedSection>
              <h2 className={styles.ctaTitle}>Discuss Your Workflow Needs</h2>
              <p className={styles.ctaSubtitle}>
                Tell us about the processes you want to automate.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--primary--2 btn--lg">
                  Start the Conversation
                </Link>
                <Link href="/services" className="btn btn--outline--2 btn--lg">
                  View All Capabilities
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

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
    title: "Webhook Integration",
    description:
      "Real-time event notifications between systems. Instant data sync when changes happen.",
    icon: "🔔",
    iconBg: "#fef3c7",
  },
  {
    title: "REST & GraphQL",
    description:
      "Standard API consumption and creation. We build and consume APIs that follow best practices.",
    icon: "🌐",
    iconBg: "#dbeafe",
  },
  {
    title: "Database Connections",
    description:
      "Direct SQL queries, database syncing, and data transformation. PostgreSQL, MySQL, MongoDB, and more.",
    icon: "💾",
    iconBg: "#e0e7ff",
  },
  {
    title: "Legacy Systems",
    description:
      "SAP, Oracle, AS400, file-based integrations. We bridge the gap between old and new.",
    icon: "🏛️",
    iconBg: "#fce7f3",
  },
];

const integrations = [
  "HubSpot",
  "Salesforce",
  "QuickBooks",
  "Slack",
  "Google Workspace",
  "Microsoft 365",
  "Stripe",
  "Shopify",
  "SAP",
  "Oracle",
  "Custom ERPs",
  "Legacy Systems",
];

export default function SystemIntegrationPage() {
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
                Connecting the{" "}
                <span className={styles.highlight}>Unconnected</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Custom nodes and Python scripts to bridge legacy ERPs with
                modern SaaS tools. Webhooks, SQL, GraphQL—we speak every data
                language.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className={`section section--lg ${styles.capabilities}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>Integration Types</h2>
              <p className={styles.sectionSubtitle}>
                We connect any system, regardless of age or technology.
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

        {/* Integrations Grid */}
        <section className={`section ${styles.techStack}`}>
          <div className="container text-center">
            <AnimatedSection>
              <h2>Common Integrations</h2>
              <p className={styles.sectionSubtitle}>
                A sample of systems we frequently connect.
              </p>

              <div className={styles.techGrid}>
                {integrations.map((integration, index) => (
                  <div key={index} className={styles.techItem}>
                    {integration}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Approach Section */}
        <section className={`section ${styles.methodology}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>Our Approach</h2>
              <p className={styles.sectionSubtitle}>
                A systematic process for reliable integrations.
              </p>
            </AnimatedSection>

            <AnimatedStagger className={styles.methodologyGrid}>
              <AnimatedItem>
                <div className={styles.methodologyItem}>
                  <div className={styles.phaseNumber}>01</div>
                  <h3 className={styles.phaseTitle}>Audit</h3>
                  <p className={styles.phaseDesc}>
                    Map your current systems and data flows to identify
                    integration points.
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className={styles.methodologyItem}>
                  <div className={styles.phaseNumber}>02</div>
                  <h3 className={styles.phaseTitle}>Design</h3>
                  <p className={styles.phaseDesc}>
                    Architecture the data flow with proper error handling and
                    logging.
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className={styles.methodologyItem}>
                  <div className={styles.phaseNumber}>03</div>
                  <h3 className={styles.phaseTitle}>Build</h3>
                  <p className={styles.phaseDesc}>
                    Develop custom connectors, middleware, and transformation
                    logic.
                  </p>
                </div>
              </AnimatedItem>
              <AnimatedItem>
                <div className={styles.methodologyItem}>
                  <div className={styles.phaseNumber}>04</div>
                  <h3 className={styles.phaseTitle}>Monitor</h3>
                  <p className={styles.phaseDesc}>
                    Deploy with full observability—logging, alerting, and health
                    checks.
                  </p>
                </div>
              </AnimatedItem>
            </AnimatedStagger>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <AnimatedSection>
              <h2 className={styles.ctaTitle}>Map Your Integration Needs</h2>
              <p className={styles.ctaSubtitle}>
                Tell us about the systems you need to connect.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--primary btn--lg">
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

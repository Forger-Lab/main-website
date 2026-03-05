"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import AnimatedSection, {
  AnimatedStagger,
  AnimatedItem,
} from "../components/AnimatedSection";
import styles from "./services.module.css";

const capabilities = [
  {
    title: "n8n Workflow Orchestration",
    description:
      "We are n8n specialists. We build complex, multi-node workflows that handle error routing, data transformation, and API orchestration. Capable of handling high-volume execution without breaking.",
    icon: "⚡",
    iconBg: "#fef3c7",
    link: "/services/n8n-workflow-automation",
  },
  {
    title: "AI Agent Development",
    description:
      "Beyond simple chatbots. We build autonomous agents using LangChain and OpenAI that can plan, reason, and execute tasks. From RAG pipelines for document search to autonomous web scrapers.",
    icon: "🤖",
    iconBg: "#ede9fe",
    link: "/services/ai-agent-development",
  },
  {
    title: "System Integration & API",
    description:
      "Connecting the unconnected. We write custom nodes and Python scripts to bridge legacy ERPs with modern SaaS tools. Webhooks, SQL, GraphQL—we speak every data language.",
    icon: "🔗",
    iconBg: "#dbeafe",
    link: "/services/system-integration-api",
  },
];

const methodology = [
  {
    phase: "01",
    title: "Discovery & Audit",
    description:
      "We map your current SOPs and identify the highest-ROI automation targets.",
  },
  {
    phase: "02",
    title: "Architecture & Build",
    description:
      "We design the data flow and build the workflows in a staging environment.",
  },
  {
    phase: "03",
    title: "Human-in-the-Loop Validation",
    description:
      "We implement checkpoints where human oversight is required, ensuring safety before full autonomy.",
  },
  {
    phase: "04",
    title: "Handoff & Training",
    description:
      "We hand over the keys. You own the code. We train your team to manage and monitor the system.",
  },
];

const techStack = [
  "n8n",
  "Python",
  "Docker",
  "OpenAI",
  "LangChain",
  "PostgreSQL",
  "Supabase",
  "HubSpot",
  "Salesforce",
  "Slack",
];

export default function ServicesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <AnimatedSection className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                The Architecture of{" "}
                <span className={styles.highlight}>Automation.</span>
              </h1>
              <p className={styles.heroSubtitle}>
                We leverage best-in-class open tools to build resilient,
                scalable business logic. No black boxes. Just clean, extensible
                code.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className={`section section--lg ${styles.capabilities}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>Core Capabilities</h2>
              <p className={styles.sectionSubtitle}>
                Three pillars of technical excellence.
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
                    <Link href={cap.link} className={styles.capLink}>
                      Learn more →
                    </Link>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </section>

        {/* Methodology Section */}
        <section className={`section ${styles.methodology}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>Delivery Methodology</h2>
              <p className={styles.sectionSubtitle}>
                A proven four-phase approach to automation success.
              </p>
            </AnimatedSection>

            <AnimatedStagger className={styles.methodologyGrid}>
              {methodology.map((phase, index) => (
                <AnimatedItem key={index}>
                  <div className={styles.methodologyItem}>
                    <div className={styles.phaseNumber}>{phase.phase}</div>
                    <h3 className={styles.phaseTitle}>{phase.title}</h3>
                    <p className={styles.phaseDesc}>{phase.description}</p>
                  </div>
                </AnimatedItem>
              ))}
            </AnimatedStagger>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className={`section ${styles.techStack}`}>
          <div className="container text-center">
            <AnimatedSection>
              <h2>Technology Stack</h2>
              <p className={styles.sectionSubtitle}>
                Industry-leading tools, expertly integrated.
              </p>

              <div className={styles.techGrid}>
                {techStack.map((tech, index) => (
                  <div key={index} className={styles.techItem}>
                    {tech}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <AnimatedSection>
              <h2 className={styles.ctaTitle}>Discuss Your Architecture</h2>
              <p className={styles.ctaSubtitle}>
                Let's map out the automation opportunities in your business.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--primary btn--lg">
                  Schedule a Discussion
                </Link>
                <Link
                  href="/#industries"
                  className="btn btn--outline--2 btn--lg"
                >
                  See Industry Applications
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

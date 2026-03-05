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
    title: "RAG Pipelines",
    description:
      "Document search with vector embeddings. Query your knowledge base in natural language and get precise answers.",
    icon: "📚",
    iconBg: "#dbeafe",
  },
  {
    title: "Autonomous Scrapers",
    description:
      "Web data collection with intelligent parsing. Extract structured data from any website, PDF, or document.",
    icon: "🕷️",
    iconBg: "#fef3c7",
  },
  {
    title: "Multi-Step Reasoning",
    description:
      "Chain-of-thought workflows for complex decisions. Agents that break down problems and solve them step by step.",
    icon: "🧠",
    iconBg: "#fce7f3",
  },
  {
    title: "Human-in-the-Loop",
    description:
      "Safety checkpoints before critical actions. Your team stays in control of high-stakes decisions.",
    icon: "👤",
    iconBg: "#dcfce7",
  },
];

const techStack = [
  "LangChain",
  "OpenAI GPT-4",
  "Anthropic Claude",
  "Pinecone",
  "Supabase pgvector",
  "Python",
  "FastAPI",
];

export default function AIAgentPage() {
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
                AI Agents That{" "}
                <span className={styles.highlight}>Reason & Execute</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Beyond simple chatbots. We build autonomous agents using
                LangChain and leading LLMs that can plan, reason, and execute
                multi-step tasks with minimal supervision.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className={`section section--lg ${styles.capabilities}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>Agent Capabilities</h2>
              <p className={styles.sectionSubtitle}>
                Intelligent automation that goes beyond scripts.
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

        {/* How It Works Section */}
        <section className={`section ${styles.methodology}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>How Agents Work</h2>
              <p className={styles.sectionSubtitle}>
                The architecture behind intelligent automation.
              </p>
            </AnimatedSection>

            <div style={{ position: "relative" }}>
              <AnimatedStagger className={styles.methodologyGrid}>
                <AnimatedItem>
                  <div className={styles.methodologyItem}>
                    <div className={styles.phaseNumber}>01</div>
                    <h3 className={styles.phaseTitle}>Perceive</h3>
                    <p className={styles.phaseDesc}>
                      Agent receives input—document, email, API call, or user
                      message.
                    </p>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className={styles.methodologyItem}>
                    <div className={styles.phaseNumber}>02</div>
                    <h3 className={styles.phaseTitle}>Plan</h3>
                    <p className={styles.phaseDesc}>
                      Agent breaks down the task into steps and determines tools
                      needed.
                    </p>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className={styles.methodologyItem}>
                    <div className={styles.phaseNumber}>03</div>
                    <h3 className={styles.phaseTitle}>Act</h3>
                    <p className={styles.phaseDesc}>
                      Agent executes actions: API calls, database queries,
                      content generation.
                    </p>
                  </div>
                </AnimatedItem>
                <AnimatedItem>
                  <div className={styles.methodologyItem}>
                    <div className={styles.phaseNumber}>04</div>
                    <h3 className={styles.phaseTitle}>Reflect</h3>
                    <p className={styles.phaseDesc}>
                      Agent evaluates results and adjusts approach if needed.
                    </p>
                  </div>
                </AnimatedItem>
              </AnimatedStagger>
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className={`section ${styles.techStack}`}>
          <div className="container text-center">
            <AnimatedSection>
              <h2>Technology Stack</h2>
              <p className={styles.sectionSubtitle}>
                Built on industry-leading AI infrastructure.
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
              <h2 className={styles.ctaTitle}>Build Your AI Agent</h2>
              <p className={styles.ctaSubtitle}>
                Let's discuss how autonomous agents can transform your
                operations.
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

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
import { MapPin, CircleDollarSign, BellRing } from "lucide-react";

const painPoints = [
  {
    title: "The Intake Black Hole",
    headline: "01: The Intake Black Hole",
    description:
      "Potential clients don't wait. If your firm doesn't respond to an inquiry within minutes, they call the next lawyer on Google. Manual intake is slow and prone to human error.",
  },
  {
    title: "Document Review Fatigue",
    headline: "02: Document Review Fatigue",
    description:
      "Your associates spend hundreds of hours scanning thousands of documents for specific clauses. This manual labor is expensive, slow, and limits your case capacity.",
  },
  {
    title: "Fragmented Case Data",
    headline: "03: Fragmented Case Data",
    description:
      "When communication lives in emails, notes live in notebooks, and deadlines live on a wall calendar, high-stakes details fall through the cracks, leading to compliance risks.",
  },
];

const solutions = [
  {
    title: "AI-Powered 24/7 Intake",
    description:
      "We deploy AI Voice and Chat agents that qualify leads, check for conflicts of interest, and book consultations directly into your calendar—day or night.",
    icon: <MapPin size={40} strokeWidth={1.5} />,
  },
  {
    title: "Automated RAG Document Discovery",
    description:
      "We build custom Retrieval-Augmented Generation (RAG) tools that allow you to \"chat\" with your case files. Find specific precedents or clauses across 10,000 pages in seconds.",
    icon: <CircleDollarSign size={40} strokeWidth={1.5} />,
  },
  {
    title: "Seamless CRM Synchronization",
    description:
      "Every lead and document is automatically routed to your CRM (Clio, MyCase, etc.) via custom API integrations, ensuring a single source of truth for every case.",
    icon: <BellRing size={40} strokeWidth={1.5} />,
  },
];

export default function LegalPracticePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Right side masked image */}
          <div className={styles.heroImageMask}>
            <img
              src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=1472&auto=format&fit=crop"
              alt="Legal firm concept"
              className={styles.heroImage}
            />
            <div className={styles.heroImageOverlay} />
          </div>

          {/* Content */}
          <div className="container">
            <AnimatedSection className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Legal Practice Automation & <span className={styles.highlight}>AI Intake</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Struggling with manual billable hours and slow client intake? Automate your legal operations.
              </p>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Automate Your Practice
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro Section */}
        <section className={`section ${styles.intro}`}>
          <div className="container text-center">
            <AnimatedSection>
              <h2>Is Your Practice Buried Under Administrative Paperwork?</h2>
              <p className={styles.sectionSubtitle}>
                Stop losing billable hours to manual data entry, missed discovery deadlines, and unresponsiveness. SolvoLab builds the intelligent legal engine your firm needs to scale without the overhead.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Pain Points Section */}
        <section className={`section ${styles.painPoints}`}>
          <div className="container">
            <AnimatedSection className="text-center">
              <h2>The Operational Drain</h2>
              <p className={styles.sectionSubtitle}>
                These administrative bottlenecks are eroding your margins and delaying justice.
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
              <h2>Your Intelligent Legal Command Center</h2>
              <p className={styles.sectionSubtitle}>
                Custom AI and workflow automation built specifically for high-growth firms.
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
              <h2 className={styles.caseTitle}>Recovering 20 Billable Hours a Week</h2>
              <p className={styles.caseDesc}>
                How a mid-sized law firm used SolvoLab to automate client intake, increasing conversions by 40% and reclaiming hundreds of unbillable administrative hours.
              </p>
              <div className={styles.caseMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={0} />
                  </span>
                  <span className={styles.metricLabel}>Missed Leads</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={100} suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>CRM Integration</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={40} suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>More Conversions</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <AnimatedSection>
              <h2 className={styles.ctaTitle}>Ready to Scale Your Firm?</h2>
              <p className={styles.ctaSubtitle}>
                Schedule a legal practice automation audit and discover your true capacity.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--primary--2 btn--lg">
                  Schedule a Legal Ops Audit
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

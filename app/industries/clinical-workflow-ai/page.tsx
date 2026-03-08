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
    title: "The Phone Tag Epidemic",
    headline: "01: The Phone Tag Epidemic",
    description:
      "Staff spend 40% of their day confirming appointments, handling cancellations, and answering basic FAQs that could be handled by a machine.",
  },
  {
    title: "Data Silos & Manual Entry",
    headline: "02: Data Silos & Manual Entry",
    description:
      "Patient info trapped in disparate systems leads to errors. Manually moving data from a web form to an EMR is a high-risk, low-value task.",
  },
  {
    title: "High No-Show Rates",
    headline: "03: High No-Show Rates",
    description:
      "Without persistent, multi-channel reminders (Voice, SMS, Email), clinics face empty slots that represent thousands of dollars in lost daily revenue.",
  },
];

const solutions = [
  {
    title: "AI Medical Voice Assistants",
    description:
      "Our voice agents handle inbound appointment setting and outbound reminders with a natural human tone, updating your scheduling software in real-time.",
    icon: <MapPin size={40} strokeWidth={1.5} />,
  },
  {
    title: "Unified Patient Data Workflows",
    description:
      "We build custom middleware to sync your website leads, patient intake forms, and EMR/CRM systems, eliminating manual data entry and reducing human error.",
    icon: <CircleDollarSign size={40} strokeWidth={1.5} />,
  },
  {
    title: "Inbound Lead & SEO Optimization",
    description:
      "We ensure your clinic ranks for \"near me\" searches through advanced SEO and AEO (Answer Engine Optimization), capturing patients exactly when they need care.",
    icon: <BellRing size={40} strokeWidth={1.5} />,
  },
];

export default function HealthcarePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Right side masked image */}
          <div className={styles.heroImageMask}>
            <img
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1470&auto=format&fit=crop"
              alt="Medical Clinic setup"
              className={styles.heroImage}
            />
            <div className={styles.heroImageOverlay} />
          </div>

          {/* Content */}
          <div className="container">
            <AnimatedSection className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Clinical Workflow & <span className={styles.highlight}>Patient Engagement AI</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Overwhelmed by appointment no-shows and phone tag? Automate your patient journey.
              </p>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Automate Clinical Workflows
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro Section */}
        <section className={`section ${styles.intro}`}>
          <div className="container text-center">
            <AnimatedSection>
              <h2>Is Your Staff Drowning in Phone Calls and Scheduling?</h2>
              <p className={styles.sectionSubtitle}>
                Stop letting administrative friction impact patient care. SolvoLab develops the HIPAA-compliant automation tools that allow your clinical staff to focus on medicine, not data entry.
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
                Administrative chaos in healthcare leads to burnt-out staff and frustrated patients.
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
              <h2>The Modern Digital Clinic</h2>
              <p className={styles.sectionSubtitle}>
                Secure, AI-driven automation for the healthcare sector.
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
              <h2 className={styles.caseTitle}>Slashing No-Shows to Zero</h2>
              <p className={styles.caseDesc}>
                How a multi-location dental practice integrated AI Voice Reminders with their EMR, reducing patient no-shows by 85% and saving 20 hours per week of receptionist phone time.
              </p>
              <div className={styles.caseMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={85} suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>Fewer No-shows</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={100} suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>EMR Sync</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={20} />
                  </span>
                  <span className={styles.metricLabel}>Hours Saved/Wk</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <AnimatedSection>
              <h2 className={styles.ctaTitle}>Ready to Focus on Medicine?</h2>
              <p className={styles.ctaSubtitle}>
                Schedule a clinical workflow audit and discover the power of AI-driven patient engagement.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--primary--2 btn--lg">
                  Schedule a Clinical Ops Audit
                </Link>
                <Link
                  href="/services/system-integration-api"
                  className="btn btn--outline--2 btn--lg"
                >
                  Explore Automation Capabilities
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

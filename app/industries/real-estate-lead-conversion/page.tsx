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
    title: "The 2 AM Inquiry Gap",
    headline: "01: The 2 AM Inquiry Gap",
    description:
      "Leads don't just browse during office hours. By the time your team follows up the next morning, the prospect has already booked three other viewings.",
  },
  {
    title: "Invisible Local Presence",
    headline: "02: Invisible Local Presence",
    description:
      "If you aren't appearing in the \"Map Pack\" for local searches, you don't exist. Traditional SEO isn't enough; you need Generative Engine Optimization (GEO) to win.",
  },
  {
    title: "Manual Tour Coordination",
    headline: "03: Manual Tour Coordination",
    description:
      "Back-and-forth texting to schedule a property tour is a massive time-sink. One missed text means a vacant property stays vacant longer.",
  },
];

const solutions = [
  {
    title: "GEO & Local SEO Mastery",
    description:
      "We optimize your digital footprint for AI-driven search engines and Google Maps, ensuring your listings are the first answer when users ask, \"Best properties near me.\"",
    icon: <MapPin size={40} strokeWidth={1.5} />,
  },
  {
    title: "Instant AI Voice Outreach",
    description:
      "As soon as a lead hits your CRM, our AI Voice Agents call or text them instantly to qualify their budget and schedule a tour, syncing the data back to your system.",
    icon: <CircleDollarSign size={40} strokeWidth={1.5} />,
  },
  {
    title: "Automated Tenant/Buyer Nurturing",
    description:
      "We build intelligent workflows that trigger personalized follow-ups based on lead behavior, moving prospects through the funnel without manual intervention.",
    icon: <BellRing size={40} strokeWidth={1.5} />,
  },
];

export default function RealEstatePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          {/* Right side masked image */}
          <div className={styles.heroImageMask}>
            <img
              src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1473&auto=format&fit=crop"
              alt="Real estate properties"
              className={styles.heroImage}
            />
            <div className={styles.heroImageOverlay} />
          </div>

          {/* Content */}
          <div className="container">
            <AnimatedSection className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Real Estate Lead Conversion & <span className={styles.highlight}>GEO Domination</span>
              </h1>
              <p className={styles.heroSubtitle}>
                Losing hot leads to slow follow-ups? Automate your property inquiries and appointments.
              </p>
              <Link href="/contact" className="btn btn--primary btn--lg">
                Automate Lead Follow-ups
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* Intro Section */}
        <section className={`section ${styles.intro}`}>
          <div className="container text-center">
            <AnimatedSection>
              <h2>Are Your High-Value Leads Going Cold in Your Inbox?</h2>
              <p className={styles.sectionSubtitle}>
                Stop letting Zillow or SEO leads wither away while your team is in the field. SolvoLab builds the automated "always-on" sales assistant that ensures every property inquiry turns into a viewing.
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
                In real estate, speed to lead is the only metric that matters—and humans are too slow.
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
              <h2>Your Autonomous Real Estate Engine</h2>
              <p className={styles.sectionSubtitle}>
                End-to-end AI suites designed to dominate local markets.
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
              <h2 className={styles.caseTitle}>Winning Deals While Sleeping</h2>
              <p className={styles.caseDesc}>
                How a top regional property management firm used SolvoLab's AI Voice Assistants to respond to leads 24/7, increasing confirmed tours by 65%.
              </p>
              <div className={styles.caseMetrics}>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={0} />
                  </span>
                  <span className={styles.metricLabel}>Missed Inquiries</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={24} suffix="/7" />
                  </span>
                  <span className={styles.metricLabel}>Instant Response</span>
                </div>
                <div className={styles.metric}>
                  <span className={styles.metricValue}>
                    <AnimatedCounter value={65} suffix="%" />
                  </span>
                  <span className={styles.metricLabel}>More Property Tours</span>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <AnimatedSection>
              <h2 className={styles.ctaTitle}>Ready to Dominate Your Market?</h2>
              <p className={styles.ctaSubtitle}>
                Schedule a real estate automation audit and discover how to capture every lead.
              </p>
              <div className={styles.ctaButtons}>
                <Link href="/contact" className="btn btn--primary--2 btn--lg">
                  Schedule a Real Estate Ops Audit
                </Link>
                <Link
                  href="/services/system-integration-api"
                  className="btn btn--outline--2 btn--lg"
                >
                  Explore Automation Tools
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

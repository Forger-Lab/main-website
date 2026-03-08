"use client";

import { motion } from "motion/react";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LogoMarquee from "./components/LogoMarquee";
import AnimatedCounter from "./components/AnimatedCounter";
import styles from "./page.module.css";
import { Scale, Home as HomeIcon, HeartPulse, Search, Compass, Settings, FlaskConical, Rocket } from "lucide-react";

const industries = [
  {
    id: "legal",
    icon: <Scale size={42} strokeWidth={1.5} />,
    title: "Legal Practice Automation",
    hook: "Struggling with manual billable hours and slow client intake? Automate your legal operations.",
    href: "/industries/legal-practice-automation",
    stats: "AI Intake Response in Seconds",
  },
  {
    id: "real-estate",
    icon: <HomeIcon size={42} strokeWidth={1.5} />,
    title: "Real Estate Lead Conversion",
    hook: "Losing hot leads to slow follow-ups? Automate your property inquiries and appointments.",
    href: "/industries/real-estate-lead-conversion",
    stats: "24/7 AI Voice Follow-ups",
  },
  {
    id: "healthcare",
    icon: <HeartPulse size={42} strokeWidth={1.5} />,
    title: "Clinical Workflow AI",
    hook: "Overwhelmed by appointment no-shows and phone tag? Automate your patient journey.",
    href: "/industries/clinical-workflow-ai",
    stats: "Eliminate No-Show Loss",
  },
];

const roadmap = [
  {
    phase: "01",
    title: "Discovery & Audit",
    icon: <Search size={32} strokeWidth={1.5} />,
    duration: "Week 1-2",
    description:
      "Deep-dive into your current operations to uncover hidden inefficiencies and automation opportunities.",
    deliverables: [
      "Process flow documentation",
      "Bottleneck analysis report",
      "ROI projection model",
    ],
    subSteps: [
      { name: "Stakeholder interviews", status: "essential" },
      { name: "Workflow mapping", status: "essential" },
      { name: "Tech stack assessment", status: "essential" },
      { name: "Data quality audit", status: "recommended" },
    ],
  },
  {
    phase: "02",
    title: "Architecture Design",
    icon: <Compass size={32} strokeWidth={1.5} />,
    duration: "Week 2-3",
    description:
      "Blueprint your custom automation architecture with scalability and maintainability at its core.",
    deliverables: [
      "System architecture diagram",
      "Integration specifications",
      "Security & compliance plan",
    ],
    subSteps: [
      { name: "Solution blueprinting", status: "essential" },
      { name: "API integration mapping", status: "essential" },
      { name: "Failover & redundancy design", status: "recommended" },
      { name: "User experience flows", status: "recommended" },
    ],
  },
  {
    phase: "03",
    title: "Build & Integrate",
    icon: <Settings size={32} strokeWidth={1.5} />,
    duration: "Week 3-6",
    description:
      "Deploy n8n workflows, AI agents, and custom integrations in iterative sprints with continuous validation.",
    deliverables: [
      "Production-ready workflows",
      "AI agent configurations",
      "Integration test results",
    ],
    subSteps: [
      { name: "Core workflow development", status: "essential" },
      { name: "AI model fine-tuning", status: "essential" },
      { name: "Third-party integrations", status: "essential" },
      { name: "Error handling & logging", status: "essential" },
    ],
  },
  {
    phase: "04",
    title: "Testing & Optimization",
    icon: <FlaskConical size={32} strokeWidth={1.5} />,
    duration: "Week 6-7",
    description:
      "Rigorous testing with real data scenarios. Fine-tune performance and eliminate edge cases.",
    deliverables: [
      "QA test documentation",
      "Performance benchmarks",
      "User acceptance sign-off",
    ],
    subSteps: [
      { name: "Unit & integration testing", status: "essential" },
      { name: "Load & stress testing", status: "recommended" },
      { name: "User acceptance testing", status: "essential" },
      { name: "Performance optimization", status: "recommended" },
    ],
  },
  {
    phase: "05",
    title: "Launch & Scale",
    icon: <Rocket size={32} strokeWidth={1.5} />,
    duration: "Week 8+",
    description:
      "Go live with confidence. Ongoing support, monitoring, and iterative improvements as you scale.",
    deliverables: [
      "Deployment playbook",
      "Monitoring dashboards",
      "Team training materials",
    ],
    subSteps: [
      { name: "Staged rollout", status: "essential" },
      { name: "Team training sessions", status: "essential" },
      { name: "24/7 monitoring setup", status: "essential" },
      { name: "Continuous improvement loop", status: "recommended" },
    ],
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* ===== HERO SECTION ===== */}
        <section className={styles.hero}>
          <div className={`container ${styles.heroContent}`}>
            <motion.h1
              className={styles.heroTitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Operational Chaos{" "}
              <span className={styles.highlight}>Ends Here.</span>
            </motion.h1>
            <motion.p
              className={styles.heroSubtitle}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              We Build the Intelligent Systems That Scale Your Business.
            </motion.p>
            <motion.p
              className={styles.heroDescription}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              SolvoLab transforms manual bottlenecks into automated growth
              engines. Specialised AI & Automation architecture for Security,
              Retail, and Logistics.
            </motion.p>
            <motion.div
              className={styles.heroCtas}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <Link href="/contact" className="btn btn--primary btn--lg">
                Get Your Audit
              </Link>
              <Link
                href="#industries"
                className="btn btn--outline btn--lg"
                style={{ backgroundColor: "white" }}
              >
                View Solutions
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ===== SOCIAL PROOF ===== */}
        <section className={styles.socialProof}>
          <div className="container text-center">
            <p className={styles.proofLabel}>
              Powering Operations for Forward-Thinking Leaders
            </p>
            <p className={styles.proofMetric}>
              Automating{" "}
              <strong>
                <AnimatedCounter value={100000} suffix="+" />
              </strong>{" "}
              tasks monthly
            </p>
          </div>
          <LogoMarquee />
        </section>

        {/* ===== INDUSTRY CARDS ===== */}
        <section
          id="industries"
          className={`section section--lg ${styles.industries}`}
        >
          <div className="container">
            <motion.div
              className="text-center"
              style={{ marginBottom: "var(--space-12)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <h2>Choose Your Battle</h2>
              <p className={styles.sectionSubtitle}>
                Select your industry to see how we solve your specific
                operational challenges.
              </p>
            </motion.div>

            <motion.div
              className={styles.industryGrid}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
            >
              {industries.map((industry) => (
                <motion.div key={industry.id} variants={fadeInUp}>
                  <Link
                    href={industry.href}
                    className={`card card--interactive ${styles.industryCard}`}
                  >
                    <div className={styles.industryIcon}>{industry.icon}</div>
                    <h3 className={styles.industryTitle}>{industry.title}</h3>
                    <p className={styles.industryHook}>{industry.hook}</p>
                    <div className={styles.industryStats}>
                      <span className={styles.statsLabel}>
                        {industry.stats}
                      </span>
                      <span className={styles.arrow}>→</span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ===== ROADMAP ===== */}
        <section className={`section section--lg ${styles.roadmap}`}>
          <div className="container">
            <motion.div
              className="text-center"
              style={{ marginBottom: "var(--space-16)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <span className={styles.roadmapLabel}>Our Process</span>
              <h2 className={styles.roadmapTitle}>From Chaos to Clarity</h2>
              <p className={styles.roadmapSubtitle}>
                A battle-tested 5-phase methodology that transforms your
                operations with precision, transparency, and measurable results.
              </p>
            </motion.div>

            <div className={styles.roadmapTimeline}>
              {roadmap.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  className={styles.roadmapPhase}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  {/* Connector Line */}
                  {index < roadmap.length - 1 && (
                    <div className={styles.timelineConnector} />
                  )}

                  {/* Phase Indicator */}
                  <div className={styles.phaseIndicator}>
                    <div className={styles.phaseIcon}>{phase.icon}</div>
                    <span className={styles.phaseBadge}>{phase.duration}</span>
                  </div>

                  {/* Phase Content */}
                  <div className={styles.phaseContent}>
                    <div className={styles.phaseHeader}>
                      <span className={styles.phaseNumber}>
                        Phase {phase.phase}
                      </span>
                      <h3 className={styles.phaseTitle}>{phase.title}</h3>
                    </div>
                    <p className={styles.phaseDesc}>{phase.description}</p>

                    {/* Sub-steps */}
                    <div className={styles.phaseSteps}>
                      <h4 className={styles.stepsLabel}>Key Activities</h4>
                      <ul className={styles.stepsList}>
                        {phase.subSteps.map((step) => (
                          <li
                            key={step.name}
                            className={`${styles.stepItem} ${styles[step.status]}`}
                          >
                            <span className={styles.stepCheck}>
                              {step.status === "essential" ? "✓" : "○"}
                            </span>
                            {step.name}
                            {step.status === "recommended" && (
                              <span className={styles.optionalTag}>
                                Optional
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Deliverables */}
                    <div className={styles.phaseDeliverables}>
                      <h4 className={styles.deliverablesLabel}>
                        📦 Deliverables
                      </h4>
                      <div className={styles.deliverablesList}>
                        {phase.deliverables.map((item) => (
                          <span key={item} className={styles.deliverableChip}>
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary Stats */}
            <motion.div
              className={styles.roadmapStats}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className={styles.statItem} variants={fadeInUp}>
                <span className={styles.statValue}>
                  <AnimatedCounter value={8} />
                </span>
                <span className={styles.statLabel}>Weeks Average</span>
              </motion.div>
              <motion.div className={styles.statItem} variants={fadeInUp}>
                <span className={styles.statValue}>
                  <AnimatedCounter value={15} suffix="+" />
                </span>
                <span className={styles.statLabel}>Deliverables</span>
              </motion.div>
              <motion.div className={styles.statItem} variants={fadeInUp}>
                <span className={styles.statValue}>
                  <AnimatedCounter value={100} suffix="%" />
                </span>
                <span className={styles.statLabel}>Transparency</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="text-center"
              style={{ marginTop: "var(--space-12)" }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link href="/contact" className="btn btn--primary btn--lg">
                Start Your Transformation
              </Link>
              <Link
                href="/services"
                className="btn btn--outline btn--lg"
                style={{ marginLeft: "var(--space-4)" }}
              >
                Explore Tech Stack
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ===== CTA SECTION ===== */}
        <section className={styles.ctaSection}>
          <div className="container text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: 0.5 }}
            >
              <h2 className={styles.ctaTitle}>
                Ready to Automate Your Operations?
              </h2>
              <p className={styles.ctaSubtitle}>
                Book a 30-minute architectural discovery call. No sales
                pressure—just a deep dive into your operational bottlenecks.
              </p>
              <Link href="/contact" className="btn btn--primary--2 btn--lg">
                Schedule Your Audit
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

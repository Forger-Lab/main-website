"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

const industries = [
  { value: "security", label: "Security Operations" },
  { value: "flooring", label: "Flooring & Tile Retail" },
  { value: "logistics", label: "Logistics & 3PL" },
  { value: "other", label: "Other" },
];

const securityQuestions = [
  { value: "under-50", label: "Less than 50" },
  { value: "50-200", label: "50 - 200" },
  { value: "200-plus", label: "200+" },
];

const retailQuestions = [
  { value: "1", label: "1 location" },
  { value: "2-5", label: "2 - 5 locations" },
  { value: "5-plus", label: "5+ locations" },
];

const logisticsQuestions = [
  { value: "under-100", label: "Less than 100" },
  { value: "100-1000", label: "100 - 1,000" },
  { value: "1000-plus", label: "1,000+" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    industry: "",
    qualifier: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  const getQualifierOptions = () => {
    switch (formData.industry) {
      case "security":
        return {
          label: "How many guards do you manage?",
          options: securityQuestions,
        };
      case "flooring":
        return {
          label: "How many locations do you have?",
          options: retailQuestions,
        };
      case "logistics":
        return {
          label: "Monthly shipment volume?",
          options: logisticsQuestions,
        };
      default:
        return null;
    }
  };

  const qualifierConfig = getQualifierOptions();

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className="container">
            <div className={styles.heroContent}>
              <h1 className={styles.heroTitle}>
                Ready to Automate Your Operations?
              </h1>
              <p className={styles.heroSubtitle}>
                Book a 30-minute architectural discovery call. No sales
                pressure—just a deep dive into your operational bottlenecks.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className={`section ${styles.formSection}`}>
          <div className="container">
            <div className={styles.formWrapper}>
              <form onSubmit={handleSubmit} className={styles.form}>
                {/* Name & Email */}
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className={styles.input}
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={styles.input}
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>
                </div>

                {/* Industry Select */}
                <div className={styles.formGroup}>
                  <label htmlFor="industry" className={styles.label}>
                    Which industry best describes you?
                  </label>
                  <select
                    id="industry"
                    className={styles.select}
                    value={formData.industry}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        industry: e.target.value,
                        qualifier: "",
                      })
                    }
                    required
                  >
                    <option value="">Select your industry</option>
                    {industries.map((ind) => (
                      <option key={ind.value} value={ind.value}>
                        {ind.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Dynamic Qualifier Question */}
                {qualifierConfig && (
                  <div className={styles.formGroup}>
                    <label htmlFor="qualifier" className={styles.label}>
                      {qualifierConfig.label}
                    </label>
                    <select
                      id="qualifier"
                      className={styles.select}
                      value={formData.qualifier}
                      onChange={(e) =>
                        setFormData({ ...formData, qualifier: e.target.value })
                      }
                      required
                    >
                      <option value="">Select an option</option>
                      {qualifierConfig.options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Message */}
                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Describe your biggest friction point right now.
                  </label>
                  <textarea
                    id="message"
                    className={styles.textarea}
                    placeholder="Tell us about the manual processes or bottlenecks you're facing..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn--primary btn--lg">
                  Request My Audit
                </button>
              </form>

              {/* Alternative CTA */}
              <div className={styles.alternative}>
                <p className={styles.altText}>
                  Not ready to talk? Download our free resource.
                </p>
                <Link href="#" className="btn btn--secondary">
                  Get the Self-Audit Checklist
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

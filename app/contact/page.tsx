"use client";

import { useState } from "react";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!recaptchaToken) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

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

                <div className={styles.formGroup}>
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    className={styles.textarea}
                    placeholder="How can we help you?"
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                {/* Submit */}
                <div style={{ marginBottom: "1.5rem", display: "flex", justifyContent: "center" }}>
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                    onChange={(token: string | null) => setRecaptchaToken(token)}
                  />
                </div>
                <button
                  type="submit"
                  className="btn btn--primary btn--lg"
                  disabled={isSubmitting || !recaptchaToken}
                  style={{ 
                    opacity: isSubmitting || !recaptchaToken ? 0.7 : 1,
                    cursor: isSubmitting || !recaptchaToken ? "not-allowed" : "pointer" 
                  }}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {submitStatus === "success" && (
                  <p style={{ color: "#22c55e", marginTop: "1rem", textAlign: "center", fontWeight: 500 }}>
                    ✅ Message sent! Check your inbox for a confirmation email.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p style={{ color: "#ef4444", marginTop: "1rem", textAlign: "center", fontWeight: 500 }}>
                    Something went wrong. Please try again or reach out via WhatsApp.
                  </p>
                )}
              </form>

              {/* Alternative CTA */}
              {/* <div className={styles.alternative}>
                <p className={styles.altText}>
                  Not ready to talk? Download our free resource.
                </p>
                <Link href="#" className="btn btn--secondary">
                  Get the Self-Audit Checklist
                </Link>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

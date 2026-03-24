"use client";

import { useState } from "react";
import Link from "next/link";
import Script from "next/script";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      let recaptchaToken = "";
      
      // Execute the invisible reCAPTCHA Enterprise challenge before submission
      // @ts-expect-error grecaptcha is loaded externally
      if (typeof window !== "undefined" && window.grecaptcha && window.grecaptcha.enterprise) {
        // @ts-expect-error grecaptcha is loaded externally
        await new Promise<void>((resolve) => window.grecaptcha.enterprise.ready(resolve));
        // @ts-expect-error grecaptcha is loaded externally
        recaptchaToken = await window.grecaptcha.enterprise.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          { action: 'CONTACT_SUBMIT' }
        );
      }

      if (!recaptchaToken) {
        throw new Error("Failed to load reCAPTCHA Enterprise challenge.");
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY && (
        <Script 
          src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
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
                <button
                  type="submit"
                  className="btn btn--primary btn--lg"
                  disabled={isSubmitting}
                  style={{ 
                    opacity: isSubmitting ? 0.7 : 1,
                    cursor: isSubmitting ? "not-allowed" : "pointer" 
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

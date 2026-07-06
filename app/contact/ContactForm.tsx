"use client";

import React, { useState } from "react";
import Script from "next/script";
import Icon from "@/components/Icon";
import { trackClick } from "@/lib/analytics";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    website: "",
    focus: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    trackClick("contact_submit");

    // Client-side validation
    if (!formData.name.trim()) {
      setErrorMsg("Your name is required.");
      setLoading(false);
      return;
    }
    if (!formData.company.trim()) {
      setErrorMsg("Business name is required.");
      setLoading(false);
      return;
    }
    if (!formData.email.trim()) {
      setErrorMsg("Work email is required.");
      setLoading(false);
      return;
    }
    if (!formData.focus) {
      setErrorMsg("Please select where you most need help.");
      setLoading(false);
      return;
    }

    try {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
      if (!siteKey) {
        throw new Error("ReCAPTCHA site key is not configured.");
      }

      let token = "";
      // Check if grecaptcha is available on window
      // @ts-ignore
      if (typeof window !== "undefined" && window.grecaptcha?.enterprise) {
        try {
          // @ts-ignore
          token = await window.grecaptcha.enterprise.execute(siteKey, {
            action: "CONTACT_SUBMIT",
          });
        } catch (execErr) {
          console.error("ReCAPTCHA execution error:", execErr);
          throw new Error("reCAPTCHA validation failed to execute.");
        }
      } else {
        throw new Error("reCAPTCHA is loading, please wait a moment and try again.");
      }

      if (!token) {
        throw new Error("Failed to generate reCAPTCHA token.");
      }

      // Compile extra fields into the message body so backend receives it perfectly
      const compiledMessage = `
Focus Area: ${formData.focus}
Company: ${formData.company}
Phone: ${formData.phone || "Not provided"}
Website: ${formData.website || "Not provided"}

Additional Message:
${formData.message || "None"}
      `.trim();

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: compiledMessage,
          recaptchaToken: token,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit form. Please try again.");
      }

      setSuccess(true);
    } catch (err: any) {
      console.error("Form submit error:", err);
      setErrorMsg(err.message || "An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
        strategy="afterInteractive"
      />

      <header className="band-dark" id="book">
        <div className="grid-tex"></div>
        <div className="container page-hero">
          <div className="page-hero-grid" style={{ alignItems: "start" }}>
            <div>
              <span className="eyebrow on-dark">Your next step</span>
              <h1 className="h1">Book a free Growth Teardown.</h1>
              <p className="lede">
                We'll show you exactly where you're losing leads today and what your engine would look like built. Your free Growth Teardown includes the competitor teardown, how your top 3 competitors beat you online, yours to keep either way. No pressure.
              </p>

              <ul className="feature-list" style={{ marginTop: "32px", maxWidth: "520px" }}>
                <li>
                  <span className="ck" data-ic="check">
                    <Icon name="check" />
                  </span>
                  <span>
                    <span className="ft-title">Where you're leaking leads</span>
                    <span className="ft-desc">A live walk-through of the gaps in your current funnel.</span>
                  </span>
                </li>
                <li>
                  <span className="ck" data-ic="check">
                    <Icon name="check" />
                  </span>
                  <span>
                    <span className="ft-title">A competitor teardown</span>
                    <span className="ft-desc">How your top 3 competitors beat you online, yours to keep.</span>
                  </span>
                </li>
                <li>
                  <span className="ck" data-ic="check">
                    <Icon name="check" />
                  </span>
                  <span>
                    <span className="ft-title">What your engine would look like</span>
                    <span className="ft-desc">The build, the timeline, and the numbers, on the call.</span>
                  </span>
                </li>
              </ul>

              <div style={{ marginTop: "36px", display: "flex", flexDirection: "column", gap: "14px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span
                    className="cl-ic"
                    data-ic="mail"
                    style={{ background: "rgba(84,224,191,0.16)", color: "#8FF0D8" }}
                  >
                    <Icon name="mail" />
                  </span>
                  <a href="mailto:saboor@solvolab.com" style={{ color: "#EAF6F1", textDecoration: "none", fontWeight: "600" }}>
                    saboor@solvolab.com
                  </a>
                </div>
              </div>
            </div>

            <div className="card reveal" style={{ padding: "32px" }} id="form-card">
              {!success ? (
                <>
                  <h2 className="h3" style={{ marginBottom: "6px" }}>Tell us about your business</h2>
                  <p style={{ color: "var(--ink-2)", fontSize: "14.5px", margin: "0 0 24px", lineHeight: "1.5" }}>
                    A few details so your teardown is specific to you, not generic.
                  </p>
                  <form className="form-grid" id="teardown-form" noValidate onSubmit={handleSubmit}>
                    <div className="field">
                      <label htmlFor="name">Your name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="company">Business name</label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        autoComplete="organization"
                        required
                        placeholder="SolvoLab."
                        value={formData.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Work email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        placeholder="jane@solvolab.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">
                        Phone <span style={{ color: "var(--ink-3)", fontWeight: "400" }}>(optional)</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        placeholder="+1 555 000 0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field full">
                      <label htmlFor="website">
                        Current website <span style={{ color: "var(--ink-3)", fontWeight: "400" }}>(or &quot;none yet&quot;)</span>
                      </label>
                      <input
                        id="website"
                        name="website"
                        type="text"
                        placeholder="yourbusiness.com"
                        value={formData.website}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="field full">
                      <label htmlFor="focus">Where do you most need help?</label>
                      <select id="focus" name="focus" value={formData.focus} onChange={handleChange} required>
                        <option value="" disabled>Choose the biggest gap…</option>
                        <option value="Getting found on Google & AI search">Getting found on Google &amp; AI search</option>
                        <option value="A website that actually converts">A website that actually converts</option>
                        <option value="Capturing leads & answering calls">Capturing leads &amp; answering calls</option>
                        <option value="Organising leads in a CRM">Organising leads in a CRM</option>
                        <option value="Following up & nurturing on autopilot">Following up &amp; nurturing on autopilot</option>
                        <option value="The whole pipeline, I'm not sure where it breaks">The whole pipeline, I&apos;m not sure where it breaks</option>
                      </select>
                    </div>
                    <div className="field full">
                      <label htmlFor="message">
                        Anything else? <span style={{ color: "var(--ink-3)", fontWeight: "400" }}>(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        placeholder="Locations, rough monthly leads, what you've tried…"
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                    
                    {errorMsg && (
                      <div className="field full" style={{ color: "var(--red)", fontSize: "14px", marginTop: "8px" }}>
                        {errorMsg}
                      </div>
                    )}

                    <div className="field full">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary btn-lg"
                        style={{ width: "100%", justifyContent: "center" }}
                      >
                        {loading ? "Submitting..." : "Request my Growth Teardown"}
                        {!loading && <span data-ic="arrow"><Icon name="arrow" /></span>}
                      </button>
                      <p style={{ fontSize: "12.5px", color: "var(--ink-3)", margin: "12px 0 0", textAlign: "center" }}>
                        No spam, ever.
                      </p>
                    </div>
                  </form>
                </>
              ) : (
                <div id="form-success" style={{ textAlign: "center", padding: "24px 8px" }}>
                  <span
                    className="bonus-ic"
                    data-ic="check"
                    style={{ margin: "0 auto 18px", width: "56px", height: "56px", background: "var(--teal-soft)", color: "var(--teal)" }}
                  >
                    <Icon name="check" />
                  </span>
                  <h2 className="h3" style={{ marginBottom: "10px" }}>Request received.</h2>
                  <p style={{ color: "var(--ink-2)", fontSize: "15px", lineHeight: "1.55", maxWidth: "360px", margin: "0 auto" }}>
                    Thanks, we&apos;ll review your details and get back to you shortly with times for your teardown. Your competitor teardown is already on the list.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

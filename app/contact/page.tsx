import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ContactForm from "./ContactForm";

export const metadata: Metadata = {
  title: "Book a Growth Teardown, SolvoLab",
  description:
    "Get a free walk-through of the leaks in your funnel and a competitor teardown.",
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <>
      <Nav />
      <main>
        <ContactForm />

        <section className="section-sm">
          <div className="container">
            <div className="stat-row reveal">
              <div className="stat">
                <div className="stat-num">Free</div>
                <div className="stat-label">The teardown costs nothing and there's no obligation to proceed.</div>
              </div>
              <div className="stat">
                <div className="stat-num">90-day</div>
                <div className="stat-label">Momentum Guarantee on every build, we earn the retainer.</div>
              </div>
              <div className="stat">
                <div className="stat-num">Custom</div>
                <div className="stat-label">Every build is fully done-for-you and never templated.</div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

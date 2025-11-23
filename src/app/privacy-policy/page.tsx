import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

export default function PrivacyPolicyPage() {
    return (
      <section  className="pt-8 md:pt-5  bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#735AB7,#EAEFEF_100%)] md:overflow-x-clip]">
        {/* Header */}
       <Header/>
         {/* Main Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* Left Column - Content */}
            <main className="prose prose-lg max-w-none bg-white p-10 rounded-lg shadow-sm">
              <h1 className="text-5xl font-bold mb-2">Privacy Policy</h1>
              <p className="text-sm text-gray-600 mb-8">Last Updated May 23rd, 2022</p>
               <div className="space-y-8">
                <section>
                  <p className="text-lg leading-relaxed">
                    This Privacy Policy explains how SolvoLab ("Company", "We", "Us", "Our") collects, uses, and shares information about individuals ("You") when You interact with our website and services. By using Our Service, You agree to the practices described below.
                  </p>
                </section>
                 <section id="information-collect">
                  <h2 className="text-2xl font-bold mb-4">1. What Personal Information we collect</h2>
                  <p className="mb-4">We only collect information necessary to operate, provide, and improve our Service:</p>
                 
                  <h3 className="text-xl font-semibold mb-3">Personal Information You Provide</h3>
                  <ul className="space-y-2 mb-6">
                    <li><strong>Email address</strong> (when You fill a contact form or request communication)</li>
                    <li><strong>Phone number</strong> (when You connect via voice call using our AI)</li>
                    <li><strong>Messages and interactions</strong> with our AI/chat widget</li>
                  </ul>
                   <h3 className="text-xl font-semibold mb-3">Automatically-Collected Usage Data</h3>
                  <p className="mb-3">Collected when You browse the Website or use the Service:</p>
                  <ul className="space-y-2 mb-4">
                    <li>IP address, browser type, and settings</li>
                    <li>Pages visited, time spent, referring pages</li>
                    <li>Device identifiers and diagnostics</li>
                    <li>Events and interactions within the Service (via analytics)</li>
                  </ul>
                  <p>This data helps improve our features, performance, and user experience.</p>
                </section>
                 <section id="cookies">
                  <h2 className="text-2xl font-bold mb-4">2. How we use cookies and collect information through technology</h2>
                  <p className="mb-4">
                    We currently use minimal cookies. As we expand features, we may use essential, performance, and analytics cookies. When non-essential cookies are added, You may see a cookie consent notice depending on your location.
                  </p>
                  <p>You can manage cookies through your browser settings at any time.</p>
                </section>
                 <section id="disclose-info">
                  <h2 className="text-2xl font-bold mb-4">3. When we Disclose Personal Information</h2>
                  <p className="mb-4">We use personal information to:</p>
                  <ul className="space-y-2">
                    <li>Respond to contact requests and inquiries</li>
                    <li>Enable communication through email and phone</li>
                    <li>Improve, maintain, and monitor platform performance</li>
                    <li>Protect against fraud, abuse, or security threats</li>
                    <li>Comply with legal requirements</li>
                  </ul>
                  <p className="mt-4">We do <strong>not</strong> sell personal data.</p>
                </section>
                 <section id="third-party">
                  <h2 className="text-2xl font-bold mb-4">4. Third-Party Services</h2>
                  <p className="mb-4">
                    We use trusted service providers who help deliver the Service. They may process personal information on our behalf:
                  </p>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full border border-gray-200 rounded-sm">
                      <thead className="bg-tranparent ">
                        <tr>
                          <th className="px-4 py-3 text-left font-semibold border-b">Service</th>
                          <th className="px-4 py-3 text-left font-semibold border-b">Purpose</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="px-4 py-3"><strong>PostHog</strong></td>
                          <td className="px-4 py-3">Analytics and product usage insights</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3"><strong>Resend</strong></td>
                          <td className="px-4 py-3">Email delivery and communication</td>
                        </tr>
                        <tr className="border-b">
                          <td className="px-4 py-3"><strong>Twilio</strong></td>
                          <td className="px-4 py-3">Voice call and AI call processing</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3"><strong>Google reCAPTCHA</strong></td>
                          <td className="px-4 py-3">Fraud and spam protection</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <p>These providers follow their own privacy and data protection policies.</p>
                </section>
                 <section id="security">
                  <h2 className="text-2xl font-bold mb-4">5. Security</h2>
                  <p>
                    We implement commercially reasonable security safeguards. However, no electronic storage or transmission is fully secure, so We cannot guarantee absolute protection.
                  </p>
                </section>
                 <section id="international-transfer">
                  <h2 className="text-2xl font-bold mb-4">6. We may Transfer Personal Information to Other Countries</h2>
                  <p>
                    Your information may be processed in locations outside Your home country. We take reasonable measures to ensure data is handled securely and in line with this Privacy Policy.
                  </p>
                </section>
                 <section id="links">
                  <h2 className="text-2xl font-bold mb-4">7. Links to other websites</h2>
                  <p>
                    Links to third-party websites are provided for convenience only. We are not responsible for their privacy practices.
                  </p>
                </section>
                 <section id="choices">
                  <h2 className="text-2xl font-bold mb-4">8. Your Choices</h2>
                  <p className="mb-4">
                    Depending on your location (e.g., GDPR in EU, CCPA in California), You may have rights such as:
                  </p>
                  <ul className="space-y-2">
                    <li>Access, update, or delete personal data</li>
                    <li>Object to or restrict processing</li>
                    <li>Opt-out of marketing emails</li>
                    <li>Request a copy of Your stored data</li>
                  </ul>
                  <p className="mt-4">We will honor valid legal requests within required timelines.</p>
                </section>
                 <section id="accessing-correcting">
                  <h2 className="text-2xl font-bold mb-4">9. Accessing and Correcting your Personal Information</h2>
                  <p>
                    You can request deletion at any time (see Contact section). We retain Your data only as long as needed for service operation and improvement, and legal and security obligations.
                  </p>
                </section>
                 <section id="children">
                  <h2 className="text-2xl font-bold mb-4">10. Children</h2>
                  <p>
                    Our Service is not intended for individuals under <strong>16 years of age</strong>, and We do not knowingly collect their data. If You believe a minor has provided personal information, please contact Us for removal.
                  </p>
                </section>
                 <section id="contact">
                  <h2 className="text-2xl font-bold mb-4">11. Contact Us</h2>
                  <p className="mb-4">For privacy requests, access, deletion, or questions:</p>
                  <ul className="list-none space-y-2">
                    <li>📧 <strong>Email:</strong> <a href="mailto:saboor@forgerlab.com" className="text-blue-600 hover:underline">saboor@forgerlab.com</a></li>
                    <li>🌐 <strong>Website:</strong> <a href="https://www.solvolab.com" className="text-blue-600 hover:underline">https://www.solvolab.com</a></li>
                    <li>📍 <strong>Company jurisdiction:</strong> Delaware, United States</li>
                  </ul>
                </section>
              </div>
            </main>
             {/* Right Column - Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-32 bg-[#735AB7]/10 p-6 rounded-lg shadow-lg">
                <h2 className="text-xl font-bold mb-4">Table of contents</h2>
                <nav>
                  <ol className="space-y-2 text-sm">
                    <li><a href="#information-collect" className="hover:underline">1. What Personal Information we collect</a></li>
                    <li><a href="#cookies" className="hover:underline">2. What we do with the Personal Information we collect</a></li>
                    <li><a href="#disclose-info" className="hover:underline">3. When we Disclose Personal Information</a></li>
                    <li><a href="#cookies" className="hover:underline">4. How we use cookies and collect information through technology</a></li>
                    <li><a href="#security" className="hover:underline">5. Security</a></li>
                    <li><a href="#international-transfer" className="hover:underline">6. We may Transfer Personal Information to Other Countries</a></li>
                    <li><a href="#links" className="hover:underline">7. Links to other websites</a></li>
                    <li><a href="#choices" className="hover:underline">8. Your Choices</a></li>
                    <li><a href="#accessing-correcting" className="hover:underline">9. Accessing and Correcting your Personal Information</a></li>
                    <li><a href="#children" className="hover:underline">10. Children</a></li>
                    <li><a href="#contact" className="hover:underline">11. Contact Us</a></li>
                  </ol>
                </nav>
               
                <button className="mt-6 text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
                  Back to top ↑
                </button>
              </div>
            </aside>
          </div>
        </div>

        <Footer/>
      </section>
    );
  }
 
 
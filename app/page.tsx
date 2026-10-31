import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import HomeCaseStudies from "@/components/HomeCaseStudies";
import { serviceLinks } from "@/lib/navigation";

const title = "SolvoLab | Your Business Growth Partner";
const description = "We diagnose operational bottlenecks, then design, connect, and scale custom software, automation, and AI systems to create room for your business to grow.";
export const metadata: Metadata = {
  title: { absolute: title }, description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/", images: [{ url: "/brandlogo/SolvoLabLogo.png", alt: "SolvoLab" }] },
  twitter: { title, description, images: ["/brandlogo/SolvoLabLogo.png"] },
};

const bottlenecks = [
  ["60e09.svg", "Processes run too slowly", "Name the action, who does it, and where people spend 10+ hours a week repeating manual steps instead of closing deals.", "Scaled payroll on administrative low-value tasks."],
  ["7d1b7.svg", "Tools do not talk to each other", "Follow an inquiry across your stack: spreadsheets, email, and CRM. Note where someone has to retype, copy-paste, or chase updates.", "Data silos and delayed handoffs lead to errors."],
  ["1f5eb.svg", "Inquiries and leads get dropped", "Prospective buyers request quotes but wait hours or days to receive qualification, routing, or a booked calendar consultation.", "Lost revenue to faster-responding competitors."],
];
const turnkey = [
  ["9bfa6.svg", "The Custom Software Build", "Bespoke web applications, client portals, and workflow dashboards built to replace rigid SaaS tools and match your exact operations.", "React, Node.js, Claude API, PostgreSQL", "/builds"],
  ["53f58.svg", "The Operations Integration", "Cross-tool synchronisation connecting your spreadsheets, CRM, and accounting to eliminate manual data entry and handoff errors.", "n8n, Make, Zapier, Webhooks, REST APIs", "/automation"],
  ["1065a.svg", "The Enterprise Intelligence Engine", "Secure centralised knowledge retrieval across internal documents, SOPs, and company data for instant and accurate answers.", "Claude, Vector DB (pgvector), Hybrid RAG"],
];
const modular = [
  ["fa6e1.svg", "Back Office Agents", "Automated document parsing, invoice matching, and internal ticket triage that removes administrative backlogs.", "Make, n8n, Claude"],
  ["598e1.svg", "Content Creation System", "Structured topical authority platforms and automated search updates to expand organic business visibility.", "Claude, Headless CMS, n8n, Search Console API"],
  ["fbe40.svg", "Custom Integrations", "Reliable bidirectional middleware that connects legacy databases to modern cloud CRMs and third-party platforms.", "REST APIs, Webhooks, n8n, Python", "/automation"],
  ["3e961.svg", "Voice and Chat Agents", "Natural conversational systems answering inbound phone calls, qualifying prospective clients, and scheduling appointments 24/7.", "Vapi, Retell AI, Claude, Twilio", "/lead-capture"],
  ["602fd.svg", "Signal-Based Outbound & Cold Email", "Enriched prospect identification that triggers timely, personalised outreach based on real business hiring and technology signals.", "Clay, Instantly, Smartlead, LinkedIn API"],
];
const approach = [
  ["Consultation", "We learn about your business, workflows, challenges, and goals.", "Initial alignment on bottlenecks, business scope, and technical feasibility."],
  ["Research & Discovery", "We study your processes, existing tools, and opportunities for improvement.", "Workflow audit, tech stack integration map, and ROI opportunity score."],
  ["Solution Blueprint", "We show you exactly what we recommend and how it will work.", "Architecture recommendation, exact implementation timeline, and quantified success metrics."],
  ["Pilot & Validate", "Once you're satisfied with the plan, we launch a focused pilot.", "A live pilot that validates performance in the real world with measurable user proof."],
  ["Scale Together", "If the pilot delivers the expected results, we expand into a partnership.", "Long-term technical arrangement, continuous maintenance, and ongoing scale."],
];
const safeguards = [
  ["13b65.svg", "API Key Encryption & Vaults", "Secrets and private keys live in isolated vault environments, never exposed in client-side code or shared repositories."],
  ["c161f.svg", "Role-Based Access Control", "Strict least-privilege access is applied across databases, webhooks, and third-party SaaS connector tokens."],
  ["a2845.svg", "Human Approval Gates", "Critical outbound communications, financial syncs, and large database updates require human-in-the-loop sign-off."],
  ["dda28.svg", "Zero Data Retention Policies", "Customer prompts and sensitive records are configured to enable zero data retention on foundation model APIs."],
];
const integrations = [
  ["5aea1.svg", "n8n", "Self-Hosted Workflow Automation", "Complex multi-step pipelines & on-premises execution"],
  ["7fd42.svg", "Make", "Visual iPaaS Integration", "Connect applications and automate cross-tool workflows."],
  ["6ace8.svg", "Zapier", "Standard Integration", "Connect everyday business tools with event-driven workflows."],
  ["2dac7.svg", "Clay", "Data Enrichment & Waterfall", "Enrich prospect records and identify relevant outreach signals."],
  ["71a45.svg", "HubSpot", "CRM Architecture", "Capture, qualify, and route inquiries into your customer pipeline."],
  ["7f08f.svg", "Instantly & Smartlead", "Cold Outreach Infrastructure", "Coordinate personalised outbound campaigns and follow-up workflows."],
  ["42776.svg", "Claude 3.5 Sonnet", "Frontier LLM Reasoning", "Parse documents, retrieve knowledge, and support multi-step decisions."],
  ["e33cc.svg", "Vapi & Retell AI", "Voice Telephony Agents", "Answer inbound calls, qualify inquiries, and schedule appointments."],
];
const faqs = [
  ["Can we start with one workflow?", "Yes. The modular services cover focused improvements. Describe the task or integration, then agree what the engagement includes."],
  ["Do we need to know which service we need?", "No. Start with the problem you want to solve. During the consultation, we review your workflows and recommend the right service or combination of systems."],
  ["How much does the Client Engine cost?", "The scope depends on your workflows, integrations, and requirements. Contact us to discuss your project and agree the deliverables and pricing before work begins."],
  ["What happens after we contact you?", "We start with a consultation to understand your business, then move through research, a solution blueprint, and a focused pilot before scaling."],
  ["What do you need for an AI dataset?", "Tell us the task, the data sources you can provide, and the intended outcome. We agree access, privacy requirements, and a representative sample before assessing the dataset."],
];

function Action({ children = "Tell us about your project" }: { children?: React.ReactNode }) {
  return <Link className="home-button" href="/contact">{children}<img src="/home/81057.svg" alt="" /></Link>;
}
function Heading({ eyebrow, children, intro }: { eyebrow?: string; children: React.ReactNode; intro?: string }) {
  return <div className="home-section-heading">{eyebrow && <p className="home-eyebrow">{eyebrow}</p>}<h2>{children}</h2>{intro && <p>{intro}</p>}</div>;
}
function ServiceCard({ service }: { service: string[] }) {
  const [icon, name, copy, stack, href] = service;
  return <article className="home-service-card"><div className="home-card-title"><span className="home-icon"><img src={`/home/${icon}`} alt="" /></span><h3>{name}</h3></div><div className="home-service-copy"><p>{copy}</p><small>Tools: {stack}</small></div><Link className="home-text-link" href={href ?? "/contact"}>{href ? "Explore this service" : "Discuss my growth goals"}<img src="/home/74ac1.svg" alt="" /></Link></article>;
}

export default function Home() {
  return <div className="home-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
      "@context": "https://schema.org", "@graph": [
        { "@type": "Organization", "@id": "https://www.solvolab.com/#organization", name: "SolvoLab", url: "https://www.solvolab.com", logo: "https://www.solvolab.com/brandlogo/SolvoLabLogo.png", email: "saboor@solvolab.com", sameAs: ["https://www.linkedin.com/company/110093159"] },
        { "@type": "WebSite", "@id": "https://www.solvolab.com/#website", name: "SolvoLab", url: "https://www.solvolab.com", publisher: { "@id": "https://www.solvolab.com/#organization" } },
        { "@type": "WebPage", "@id": "https://www.solvolab.com/#webpage", name: title, description, url: "https://www.solvolab.com", isPartOf: { "@id": "https://www.solvolab.com/#website" } },
        { "@type": "FAQPage", "@id": "https://www.solvolab.com/#faq", mainEntity: faqs.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
      ],
    }) }} />
    <a className="home-skip" href="#main-content">Skip to content</a>
    <Nav />
    <main id="main-content">
      <section className="home-hero">
        <div className="home-container home-hero-grid">
          <div><p className="home-kicker">Your Business Growth Partner</p><h1>Solving <span>Business Growth</span> Problems with Solvolab Workflow</h1><p className="home-hero-copy">Solvolab is a business growth consultancy and technical partner that diagnoses operational bottlenecks, then designs, connects, and scales custom software and workflow systems to unblock revenue and create room to grow.</p><div className="home-actions"><Action /><a className="home-button home-button-outline" href="#services">Explore the services</a></div></div>
          <div className="home-workflow"><img src="/home/b42c8.svg" alt="Disconnected workflows joining one central system and routing to connected business tools" /></div>
        </div>
      </section>
      <div className="home-clients"><div className="home-container home-clients-inner"><p>Clients we’ve<br />worked with</p><div className="home-client-logos">{[["063cc.png", "ArchiTech", 74, 70], ["7fe82.png", "Allied", 74, 70], ["03176.png", "Noon", 152, 69], ["ddb7e.png", "Disegno", 160, 69], ["78182.png", "Vigilant", 151, 45]].map(([file, name, width, height]) => <div key={file}><Image src={`/home/${file}`} alt={String(name)} width={Number(width)} height={Number(height)} /></div>)}</div></div></div>
      <section className="home-section"><div className="home-container"><Heading eyebrow="OPERATIONAL BOTTLENECKS" intro="Most businesses stall not because of a lack of market demand, but because internal friction drains team bandwidth and leaks pipeline revenue.">Where business growth gets stuck</Heading><div className="home-bottlenecks">{bottlenecks.map(([art, name, copy, impact]) => <article key={name}><div className="home-bottleneck-art"><img src={`/home/${art}`} alt="" /></div><h3>{name}</h3><p>{copy}</p><div className="home-impact"><strong>Impact:</strong> {impact}</div></article>)}</div></div></section>
      <section className="home-section home-sand" id="services"><div className="home-container"><Heading eyebrow="TURNKEY & MODULAR SYSTEMS" intro="Every engagement specifies the exact problem, toolchain, deliverables, and measurable outcome before writing a single line of code.">Services built to eliminate bottlenecks</Heading><h3 className="home-group-title">Turnkey Solutions</h3><div className="home-turnkey" id="engine"><article className="home-flagship"><span className="home-icon"><img src="/home/a0eb5.svg" alt="" /></span><span className="home-tag">Flagship</span><h3>The 24/7<br />Client Engine</h3><p>Captures and qualifies inbound inquiries around the clock, routing vetted clients directly to your team&apos;s calendar and CRM.</p><div className="home-engine-links" aria-label="Client Engine services">{serviceLinks.slice(0, 5).map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</div><Action /><small>Tools: HubSpot, Make, n8n, Vapi</small></article>{turnkey.map(service => <ServiceCard key={service[1]} service={service} />)}</div><h3 className="home-group-title home-modular-title">Modular Systems</h3><div className="home-modular">{modular.slice(0, 4).map(service => <ServiceCard key={service[1]} service={service} />)}<div className="home-modular-art"><Image src="/home/65362.png" alt="A network of connected modular systems" fill sizes="(max-width: 700px) 90vw, 368px" /></div><ServiceCard service={modular[4]} /></div></div></section>
      <section className="home-statement"><div className="home-container"><div><h2>We do not sell technology for technology&apos;s sake.</h2><p>We help businesses understand what holds them back, then use strategy, technology, AI, and execution to build a better system.</p><p>Because reliable systems create room to grow.</p></div><div className="home-statement-shape" aria-hidden="true"><span /></div></div></section>
      <section className="home-section home-sand" id="client-work"><div className="home-container"><Heading eyebrow="VERIFIED PROOF & CASE STUDIES" intro="Four client stories showing what we built and the problems we helped solve.">Who we have built for and<br />what we solved</Heading><HomeCaseStudies /><Link className="home-text-link home-section-link" href="/builds#builds">Explore more builds →</Link></div></section>
      <section className="home-section" id="about"><div className="home-container home-founder"><div><h2>Work directly with the people <span>building it</span></h2><h3>Abdul Saboor</h3><p>Founder</p><Action>Schedule a technical discussion</Action><Link className="home-text-link home-section-link" href="/about">About SolvoLab →</Link></div><div className="home-founder-points"><article><h3>Zero agency layers or junior middlemen</h3><p>Traditional agencies assign your account to junior coordinators who translate requirements through multiple layers. At Solvolab, you discuss the problem directly with the engineer shaping the build.</p></article><article><h3>Production systems engineering behind the advice</h3><p>Led by Abdul Saboor, whose background includes building high-scale production systems, data analytics architectures, and the automated tutor evaluation pipeline for Noon across the MENA region.</p></article><article><h3>One unified, accountable technical team</h3><p>We architect the website, SEO, customer capture, automated agents, and CRM infrastructure as a single cohesive system rather than handing them off between disconnected vendors.</p></article></div></div></section>
      <section className="home-section home-sand" id="approach"><div className="home-container"><Heading eyebrow="ENGAGEMENT MODEL" intro="We don’t start with a tool and try to force it into your business. We first understand how you operate, where the problems are, and what outcome you want, then design the right solution using tailored systems, connected workflows, and custom technology.">Technology Customised to your<br />business</Heading><div className="home-process">{approach.map(([name, copy, output], index) => <article key={name}><h3><span>{index + 1}</span>{name}</h3><p>{copy}</p><div><small>{index === 2 ? "KEY OUTPUT" : "OUTPUT"}</small><p>{output}</p></div></article>)}</div><div className="home-consultation" id="pricing"><div><h3>Start with Step 1: Free Consultation</h3><p>Discuss your workflows and uncover bottlenecks directly with founder Abdul Saboor.</p></div><Action>Book a free consultation</Action></div></div></section>
      <section className="home-section" id="architecture"><div className="home-container"><Heading eyebrow="SOLVOLAB ARCHITECTURE FRAMEWORK" intro="Unlike agencies that force a single chatbot, Solvolab architects systems around three distinct stakeholders and calibrated autonomy levels to guarantee reliability and security.">The Node Model &amp; 3 Autonomy Levels</Heading><div className="home-nodes">{[
        ["70b34.svg", "Human Node", "Handles executive judgment, high-touch client relationships, subjective approvals, and strategic direction where human context is irreplaceable.", "Human-in-the-loop review queues, Slack approvals"],
        ["9bfa6.svg", "Automated Node", "Executes predictable, logic-based workflows: webhooks, API Synchronizations, database transforms, and instant notifications with 100% reliability.", "n8n, Make, Zapier, PostgreSQL, Workspace"],
        ["1c05d.svg", "Agentic Node", "Employs frontier language models (Claude) with tool-calling capabilities to parse unstructured text, qualify voice intent, and navigate multi-step decisions.", "Claude 3.5 Sonnet, Vapi, Vector RAG, Tool Calling"],
      ].map(([icon, name, copy, stack]) => <article key={name}><span className="home-icon"><img src={`/home/${icon}`} alt="" /></span><h3>{name}</h3><p>{copy}</p><div><small>UNDERLYING STACK:</small><strong>{stack}</strong></div></article>)}</div><div className="home-autonomy"><h3>Calibrated Autonomy Levels</h3><p>How we control system authority to prevent rogue behaviors and guarantee human oversight.</p><div>{[
        ["Copilot Assistance", "The system drafts answers, summarises records, or scores leads, but a human approves every single outbound action."],
        ["Supervised Autonomy", "The system automatically executes 80-90% of routine actions. Complex edge cases or high-value risks trigger a human approval queue."],
        ["Autonomous Guardrails", "End-to-end autonomous loops running within strict API constraints, token limits, and compliance safety frameworks."],
      ].map(([name, copy], index) => <article key={name}><small>Level {index + 1}</small><h3>{name}</h3><p>{copy}</p></article>)}</div></div></div></section>
      <section className="home-section home-sand" id="studio"><div className="home-container"><Heading intro="Our wider studio family.">Within SolvoLab</Heading><div className="home-studio"><div className="home-studio-logo"><Image src="/home/d09eb.png" alt="KoalityContent" width={291} height={63} /></div><div><p className="home-studio-label">A SolvoLab studio</p><h3>KoalityContent</h3><p>A platform that reads every page of a website, maps its topics, brings in Search Console data and gives each page one clear verdict, with the numbers behind it.</p><div className="home-studio-tags">{["merge", "fix", "differentiate", "prune", "refresh", "keep & link"].map(tag => <span key={tag}>{tag}</span>)}</div><div className="home-actions"><Action>Book a free consultation</Action><Link href="/contact" className="home-studio-enquiry">Enquire about our studios</Link></div></div></div></div></section>
      <section className="home-section" id="security"><div className="home-container home-security"><div><p className="home-eyebrow">ENTERPRISE GOVERNANCE</p><span className="home-icon"><img src="/home/9f963.svg" alt="" /></span><h2>Security, access control<br />&amp; data privacy</h2><p>We architect systems to meet stringent security standards. We never use your proprietary business data to train public models.</p></div><div>{safeguards.map(([icon, name, copy]) => <article key={name}><img src={`/home/${icon}`} alt="" /><div><h3>{name}</h3><p>{copy}</p></div></article>)}</div></div></section>
      <section className="home-section home-sand" id="insights"><div className="home-container"><Heading intro="Production technologies configured and maintained across our client implementations.">Tools &amp; Integrations Matrix</Heading><div className="home-integrations">{integrations.map(([icon, name, caption, details], index) => <details key={name} open={index === 0}><summary><span className="home-tool-icon"><img src={`/home/${icon}`} alt="" /></span><span><strong>{name}</strong><small>{caption}</small></span><img className="home-toggle" src="/home/704ce.svg" alt="" /></summary><div className="home-tool-detail"><strong>Role in Client Systems</strong><p>{details}</p></div></details>)}</div></div></section>
      <section className="home-section" id="faq"><div className="home-container home-faq"><h2>A few things<br />you may be wondering</h2><div>{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>
    </main>
    <Footer />
  </div>;
}

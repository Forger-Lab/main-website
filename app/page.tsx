"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Hammer, Stethoscope, Home as HomeIcon, Car, Briefcase, Phone, MessageSquare, Send, Workflow, Menu, X } from "lucide-react";
import RoiCalculator from "@/components/RoiCalculator";
import IndustryCard from "@/components/IndustryCard";
import ServiceCard from "@/components/ServiceCard";
import { trackClick } from "@/lib/analytics";
import "./solvolab.css";

/* ---------- Inline icons (stroke-based) ---------- */
type IconProps = React.SVGProps<SVGSVGElement>;

const I = {
  Bot: (p: IconProps) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="6" width="18" height="14" rx="3" />
      <circle cx="9" cy="13" r="1.2" fill="currentColor" />
      <circle cx="15" cy="13" r="1.2" fill="currentColor" />
      <path d="M12 3v3M8 17h8" />
    </svg>
  ),
  Mic: (p: IconProps) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="9" y="3" width="6" height="11" rx="3" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v3" />
    </svg>
  ),
  Sparkle: (p: IconProps) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6L12 3zM19 14l.8 2.2L22 17l-2.2.8L19 20l-.8-2.2L16 17l2.2-.8L19 14z" />
    </svg>
  ),
  Globe: (p: IconProps) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  ),
  Search: (p: IconProps) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  ),
  Mail: (p: IconProps) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 7 9-7" />
    </svg>
  ),
  Plug: (p: IconProps) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M9 7V3M15 7V3M7 13h10v-2a4 4 0 0 0-4-4h-2a4 4 0 0 0-4 4v2zM10 13v4a2 2 0 0 0 4 0v-4" />
    </svg>
  ),
  Flow: (p: IconProps) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="3" width="6" height="6" rx="1.5" />
      <rect x="15" y="15" width="6" height="6" rx="1.5" />
      <path d="M9 6h6a3 3 0 0 1 3 3v6" />
    </svg>
  ),
  Chart: (p: IconProps) => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M3 21h18M6 17V10M11 17V5M16 17v-7M21 17v-3" />
    </svg>
  ),
  Arrow: (p: IconProps) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  ),
  Check: (p: IconProps) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <path d="M4 12l5 5L20 6" />
    </svg>
  ),
  Calendar: (p: IconProps) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 10h18M8 3v4M16 3v4" />
    </svg>
  ),
};

const LOGO = "/brandlogo/SolvoLabLogo-Cut.png";

/* ---------- CTA button with a pink streak that traces its border ---------- */
function CtaButton({ label = "Book a call", small = false, href = "#cta", eventName = "booknow_cta" }: { label?: string; small?: boolean; href?: string; eventName?: string }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });
  const gradId = useId().replace(/:/g, "");

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const update = () => setSize({ w: el.offsetWidth, h: el.offsetHeight });
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const SW = 3;          // streak (stroke) width — fixed all the way around
  const PAD = 4;         // how far the ring sits outside the button
  const svgW = size.w + PAD;
  const svgH = size.h + PAD;
  const rx = Math.max(0, (svgH - SW) / 2);

  return (
    <div className="btn-cta-wrap" ref={wrapRef}>
      {size.w > 0 && (
        <svg
          className="cta-ring"
          width={svgW}
          height={svgH}
          viewBox={`0 0 ${svgW} ${svgH}`}
          fill="none"
          aria-hidden="true"
          style={{ top: -PAD / 2, left: -PAD / 2 }}
        >
          <defs>
            <linearGradient id={`ctaGrad-${gradId}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff8ec4" />
              <stop offset="50%" stopColor="#e0166b" />
              <stop offset="100%" stopColor="#a30e55" />
            </linearGradient>
          </defs>
          <rect
            className="cta-ring-rect"
            x={SW / 2}
            y={SW / 2}
            width={svgW - SW}
            height={svgH - SW}
            rx={rx}
            ry={rx}
            stroke={`url(#ctaGrad-${gradId})`}
            strokeWidth={SW}
            strokeLinecap="round"
            pathLength={100}
            strokeDasharray="18 82"
          />
        </svg>
      )}
      <a className={`btn btn-primary btn-cta${small ? " btn-sm" : ""}`} href={href} onClick={() => trackClick(eventName)}>{label} <I.Arrow /></a>
    </div>
  );
}

/* ---------- Scroll reveal ---------- */
function useReveal<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);
  return [ref, inView] as const;
}

/* Fade-up wrapper for a single block. */
function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const [ref, inView] = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "in" : ""} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

/* Staggered reveal applied directly to a grid/row element. */
function useRevealGrid(base: string) {
  const [ref, inView] = useReveal<HTMLDivElement>(0.1);
  return { ref, className: `${base} reveal-grid ${inView ? "in" : ""}` };
}

/* ---------- Nav ---------- */
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    function onDocClick(e: MouseEvent) {
      if (!navRef.current) return;
      if (!navRef.current.contains(e.target as Node)) setMenuOpen(false);
    }
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <nav className="nav" ref={navRef}>
      <div className="container nav-inner">
        <a href="#" className="brand" onClick={close}>
          <img src={LOGO} alt="SolvoLab" />
          <span>SolvoLab</span>
        </a>
        <div className="nav-right">
          <div id="nav-menu" className="nav-links" data-open={menuOpen}>
            <a className="nav-link" href="#industries" onClick={() => { trackClick("nav_industries"); close(); }}>Industries</a>
            <a className="nav-link" href="#services" onClick={() => { trackClick("nav_services"); close(); }}>Services</a>
            <a className="nav-link" href="#how" onClick={() => { trackClick("nav_how"); close(); }}>How it works</a>
            <a className="nav-link" href="#roi" onClick={() => { trackClick("nav_roi"); close(); }}>ROI</a>
            <a className="nav-link" href="#proof" onClick={() => { trackClick("nav_outcomes"); close(); }}>Outcomes</a>
          </div>
          <CtaButton small label="Book a call" eventName="booknow_nav" />
          <button
            type="button"
            className="nav-burger"
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} strokeWidth={1.8} /> : <Menu size={22} strokeWidth={1.8} />}
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ---------- Live chat demo (loops) ---------- */
type ChatStep = { from?: "user" | "bot"; text?: string; typing?: number };

function ChatCard({ className = "" }: { className?: string }) {
  const script: ChatStep[] = [
    { from: "user", text: "Hey, do you do residential roofing in the 78704 area?" },
    { typing: 1100 },
    { from: "bot", text: "Yep — we cover all of South Austin. Quick one: is it a repair, full replacement, or storm-damage claim?" },
    { typing: 1300 },
    { from: "user", text: "Storm damage. Insurance is involved." },
    { typing: 1300 },
    { from: "bot", text: "Got it. We handle claims end-to-end. I have Tuesday 10am or Thursday 2pm for a free inspection — which works?" },
    { typing: 900 },
    { from: "user", text: "Thursday 2pm 👍" },
    { typing: 900 },
    { from: "bot", text: "✅ Booked. Synced to your calendar + HubSpot. Mike will text you 1 hr before." },
  ];

  // Seed with the full conversation so the largest bubble is in the SSR/first paint (good LCP),
  // then the effect holds it briefly before starting the looping animation.
  const seeded = script.filter((s) => !s.typing);
  const [shown, setShown] = useState<ChatStep[]>(seeded);
  const [typing, setTyping] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);

  // Keep the latest message in view as content grows.
  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [shown, typing]);

  useEffect(() => {
    let cancelled = false;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) => new Promise<void>((r) => timeouts.push(setTimeout(r, ms)));
    async function run() {
      // Keep the seeded conversation visible first so it counts toward LCP, no empty flash.
      await wait(4000);
      while (!cancelled) {
        setShown([]);
        setTyping(false);
        await wait(600);
        for (const step of script) {
          if (cancelled) return;
          if (step.typing) {
            setTyping(true);
            await wait(step.typing);
            setTyping(false);
          } else {
            setShown((s) => [...s, step]);
            await wait(800);
          }
        }
        await wait(2800);
      }
    }
    run();
    return () => {
      cancelled = true;
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`card chat ${className}`}>
      <div className="chat-head">
        <div className="avatar">AI</div>
        <div>
          <div className="name">Solvo · Web Chat</div>
        </div>
        <div className="status">live</div>
      </div>
      <div ref={listRef} className="chat-list">
        {shown.map((m, i) => (
          <div key={i} className={`msg ${m.from}`}>{m.text}</div>
        ))}
        {typing && (
          <div className="msg typing"><span></span><span></span><span></span></div>
        )}
      </div>
    </div>
  );
}

/* ---------- Voice card with waveform ---------- */
function VoiceCard({ className = "" }: { className?: string }) {
  const bars = Array.from({ length: 24 });
  return (
    <div className={`card voice ${className}`}>
      <div className="voice-head">
        <div className="ring"></div>
        <div>
          <div className="title">Solvo · Voice Agent</div>
          <div className="sub">on call · 0:47 · qualifying</div>
        </div>
      </div>
      <div className="wave">
        {bars.map((_, i) => (
          <div
            key={i}
            className="bar"
            style={{
              animationDelay: `${(i * 80) % 1200}ms`,
              animationDuration: `${900 + ((i * 53) % 600)}ms`,
              opacity: 0.5 + ((i * 7) % 50) / 100,
            }}
          />
        ))}
      </div>
      <div className="transcript">
        <div><span className="role">caller →</span> &ldquo;...need to reschedule my cleaning and ask about Invisalign pricing.&rdquo;</div>
        <div style={{ marginTop: 4 }}><span className="role">solvo →</span> &ldquo;Rescheduling you to Thursday 3pm. Sending the Invisalign consult link by text — Dr. Patel can see you next week.&rdquo;</div>
      </div>
    </div>
  );
}

/* ---------- Sequence card ---------- */
function SequenceCard({ className = "" }: { className?: string }) {
  const steps = [
    { ic: <I.Mail />, label: "Estimate request · captured from web form", time: "+0m", done: true },
    { ic: <I.Bot />, label: "SMS follow-up if no reply in 2h", time: "+2h", done: true },
    { ic: <I.Mic />, label: "AI voice callback · qualifies the repair", time: "+1d", done: true },
    { ic: <I.Calendar />, label: "Drop-off booked → synced to CRM", time: "+1d 14m", done: false },
  ];

  return (
    <div className={`card seq ${className}`}>
      <div className="seq-head">
        <div className="title">Sequence · Westside Auto Body</div>
        <div className="tag">running</div>
      </div>
      {steps.map((s, i) => (
        <div key={i} className={`seq-step ${s.done ? "done" : ""}`}>
          <div className="ic">{s.ic}</div>
          <div className="l">{s.label}</div>
          <div className="t">{s.time}</div>
        </div>
      ))}
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const [textRef, textIn] = useReveal<HTMLDivElement>();
  const [stageRef, stageIn] = useReveal<HTMLDivElement>();
  const meta = useRevealGrid("hero-meta");
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
        <div ref={textRef} className={`reveal ${textIn ? "in" : ""}`}>
          <h1 className="h1">
            Your phone rings at 11pm.<br />
            Now it <span className="grad">actually gets answered.</span>
          </h1>

          <p className="lede" style={{ maxWidth: "600px" }}>
            SolvoLab builds AI voice agents, web chat, and CRM automation for the businesses where
            the <em>first response wins the job</em> — home services, dental &amp; medical, real estate,
            auto, and professional services. Live in 3 weeks. No new headcount.
          </p>

          <div className="hero-actions">
            <CtaButton label="Book a strategy call" eventName="booknow_hero" />
            <a className="btn btn-ghost" href="#industries" onClick={() => trackClick("see_industries_hero")}>
              See who we build for
            </a>
          </div>
        </div>

        <div ref={stageRef} className={`hero-stage reveal ${stageIn ? "in" : ""}`} style={{ transitionDelay: "120ms" }}>
          <div className="glow-orb"></div>
          <div className="stack">
            <ChatCard className="stack-card c1" />
            <VoiceCard className="stack-card c2" />
            <SequenceCard className="stack-card c3" />
          </div>
        </div>
        </div>

        <div ref={meta.ref} className={meta.className}>
          <div className="meta-item">
            <div className="num">93%</div>
            <div className="label">Speed-to-lead under 60s</div>
          </div>
          <div className="meta-item">
            <div className="num">3.7×</div>
            <div className="label">More qualified meetings</div>
          </div>
          <div className="meta-item">
            <div className="num">$0</div>
            <div className="label">New SDR headcount</div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Integrations: right-to-left logo carousel ---------- */
function Integrations() {
  const items = [
    { slug: "hubspot", name: "HubSpot" },
    { slug: "salesforce", name: "Salesforce" },
    { slug: "pipedrive", name: "Pipedrive" },
    { slug: "zoho", name: "Zoho CRM" },
    { slug: "mondaydotcom", name: "Monday" },
    { slug: "openai", name: "OpenAI" },
    { slug: "anthropic", name: "Anthropic" },
    { slug: "elevenlabs", name: "ElevenLabs" },
    { slug: "twilio", name: "Twilio" },
    { slug: "whatsapp", name: "WhatsApp" },
    { slug: "slack", name: "Slack" },
    { slug: "calendly", name: "Calendly" },
    { slug: "googleads", name: "Google Ads" },
    { slug: "meta", name: "Meta" },
    { slug: "zapier", name: "Zapier" },
    { slug: "n8n", name: "n8n" },
    { slug: "stripe", name: "Stripe" },
    { slug: "notion", name: "Notion" },
    { slug: "gmail", name: "Gmail" },
    { slug: "shopify", name: "Shopify" },
  ];

  const track = [...items, ...items];

  return (
    <section id="integrations" style={{ padding: "60px 0 80px" }}>
      <div className="container">
        <Reveal className="integrations-head">
          <div className="section-eyebrow" style={{ justifyContent: "center" }}>
            <span className="num">01</span>Plugs into your stack
          </div>
          <h3 className="integrations-title">
            Native integrations with the tools you already pay for.
          </h3>
        </Reveal>
      </div>

      <div className="logo-carousel">
        <div className="logo-track">
          {track.map((it, i) => (
            <div className="logo-slot" key={i} title={it.name}>
              <img
                src={`https://cdn.simpleicons.org/${it.slug}`}
                alt={it.name}
                loading="lazy"
                onError={(e) => {
                  const el = e.currentTarget;
                  el.style.display = "none";
                  const fb = el.nextElementSibling as HTMLElement | null;
                  if (fb) fb.style.display = "grid";
                }}
              />
              <div className="logo-fallback" style={{ display: "none" }}>
                {it.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="integrations-foot">
          <span className="dot-sep">+ 40 more via Zapier, n8n &amp; native API</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries we build for ---------- */
const industries = [
  {
    icon: Hammer,
    name: "Home Services",
    pain: "Storm hits, phone rings off the hook, and you're already on a ladder.",
    useCases: [
      "Voice agent that qualifies storm/repair/replacement and books the inspection",
      "SMS follow-up for quote requests that didn't close on the first call",
      "Job-status updates that stop “what's the ETA?” calls before they happen",
    ],
    subVerticals: "Roofing · HVAC · Plumbing · Electrical · Restoration · Pest Control",
  },
  {
    icon: Stethoscope,
    name: "Dental & Medical",
    pain: "Front desk is with a patient. The new lead just called your competitor.",
    useCases: [
      "Voice agent for new-patient intake, insurance check, and booking",
      "Recall + reactivation sequences for patients who haven't been back in 12+ months",
      "No-show recovery flows that auto-rebook canceled slots",
    ],
    subVerticals: "Dental · Dermatology · Med-spas · Physical Therapy · Veterinary · Chiropractic",
  },
  {
    icon: HomeIcon,
    name: "Real Estate & Property Management",
    pain: "The first agent to reply wins the lead. You were at a showing.",
    useCases: [
      "Web chat that qualifies buyer/renter intent and books the showing",
      "5-minute inbound voice response for portal leads (Zillow, Realtor, Apartments.com)",
      "Tenant maintenance intake that triages and dispatches without a call",
    ],
    subVerticals: "Brokerages · Solo Agents · Property Managers · STR Operators",
  },
  {
    icon: Car,
    name: "Auto Services",
    pain: "Service writer is under a hood. The estimate call goes to voicemail.",
    useCases: [
      "Voice agent for year/make/model qualification and drop-off booking",
      "Quote-request chat that captures VIN, photos, and insurance details",
      "Reminder flows for inspections, oil changes, and tire rotations",
    ],
    subVerticals: "Body Shops · Independent Dealers · Detailing · Mobile Mechanics · Tire Shops",
  },
  {
    icon: Briefcase,
    name: "Professional Services",
    pain: "The case worth $40K calls at 9pm. Your office is closed.",
    useCases: [
      "24/7 voice intake that qualifies and books the consult",
      "Conflict-check + intake form collection before the first human conversation",
      "Follow-up sequences for warm leads that didn't sign on call #1",
    ],
    subVerticals: "PI Law · Immigration · Family Law · Accounting · Insurance · Financial Advisory",
  },
];

function Industries() {
  const grid = useRevealGrid("industries-grid");
  return (
    <section id="industries">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">02</span>Industries</div>
            <h2 className="h2">Built for the businesses where one missed call is a lost customer.</h2>
          </div>
          <p className="section-sub">
            Five industries, one pattern: high-intent inbound, expensive lead time, and a team
            that&apos;s already busy doing the actual work. Here&apos;s how SolvoLab shows up for each.
          </p>
        </Reveal>

        <div ref={grid.ref} className={grid.className}>
          {industries.map((ind) => (
            <IndustryCard
              key={ind.name}
              icon={ind.icon}
              name={ind.name}
              pain={ind.pain}
              useCases={ind.useCases}
              subVerticals={ind.subVerticals}
            />
          ))}
        </div>

        <p className="industries-foot">
          Don&apos;t see your industry? If your business runs on inbound calls and high-ticket service,
          we probably fit. <a href="#cta" onClick={() => trackClick("booknow_industries_foot")}>Book a 30-min audit →</a>
        </p>
      </div>
    </section>
  );
}

/* ---------- What we actually build ---------- */
const buildServices = [
  {
    icon: Phone,
    name: "AI Voice Agent",
    tagline: "A 24/7 phone agent that picks up, qualifies, and books — in your brand voice.",
    included: [
      "Custom voice + persona trained on your offer, pricing, and objections",
      "Live calendar booking, CRM logging, and call transcripts",
      "Spam filtering and human handoff when it matters",
      "Bilingual support (English + Spanish standard; others on request)",
    ],
    pairedWith: "Web Chat, CRM Automation",
  },
  {
    icon: MessageSquare,
    name: "Web Chat Agent",
    tagline: "A chat agent on your site that qualifies leads in 60 seconds and books the meeting.",
    included: [
      "Trained on your site, services, FAQs, and pricing logic",
      "Instant booking and quote requests routed to the right person",
      "SMS + email follow-up if the visitor bounces mid-conversation",
      "Conversation analytics so you see exactly what people ask",
    ],
    pairedWith: "Voice Agent, Outbound Sequences",
  },
  {
    icon: Send,
    name: "Outbound & Follow-up Sequences",
    tagline: "Email, SMS, and AI voice callbacks that work old leads and new inbound that didn't close.",
    included: [
      "Personalized intro emails using public data on the prospect",
      "SMS follow-ups timed to actual engagement, not arbitrary delays",
      "AI voice callbacks for warm leads that ghost after the first reply",
      "Auto-stop when a meeting is booked or the lead replies",
    ],
    pairedWith: "CRM Automation, Voice Agent",
  },
  {
    icon: Workflow,
    name: "CRM & Workflow Automation",
    tagline: "The plumbing behind everything — so leads, jobs, and follow-ups don't fall through the cracks.",
    included: [
      "Native sync with HubSpot, Salesforce, Pipedrive, Zoho, or Monday",
      "Auto lead-scoring, round-robin routing, and ownership rules",
      "Internal alerts in Slack or SMS when a high-value lead lands",
      "Reporting dashboards built around your real KPIs, not vanity metrics",
    ],
    pairedWith: "Every other service — this is the spine.",
  },
];

function Services() {
  const grid = useRevealGrid("build-grid");
  return (
    <section id="services">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">03</span>Services</div>
            <h2 className="h2">Four things we build. They work alone. They work better together.</h2>
          </div>
          <p className="section-sub">
            Most clients start with one and add the others as they see what&apos;s possible. Each is a
            real, productized build — not a vague &ldquo;we&apos;ll figure it out.&rdquo;
          </p>
        </Reveal>

        <div ref={grid.ref} className={grid.className}>
          {buildServices.map((s) => (
            <ServiceCard
              key={s.name}
              icon={s.icon}
              name={s.name}
              tagline={s.tagline}
              included={s.included}
              pairedWith={s.pairedWith}
            />
          ))}
        </div>

        <p className="industries-foot">
          Not sure which to start with? On the audit call we&apos;ll tell you the one that pays for
          itself fastest given your current setup.
        </p>
      </div>
    </section>
  );
}

/* ---------- How it works · scroll-pinned timeline ---------- */
function HowItWorks() {
  const steps = [
    {
      n: "01", title: "Audit", headline: "We map every step of your current funnel.",
      duration: "Days 1–3", durationLabel: "Week 1",
      activities: [
        "60-min discovery + stakeholder interviews",
        "Mystery-shop your own business — we call, chat, and submit forms to find where leads die.",
        "Speed-to-lead benchmark with mystery-shop tests",
        "Leak-point analysis: where leads go cold",
        "CRM hygiene + routing review",
      ],
      deliverable: "A funnel diagnostic — every drop-off mapped, with a dollar impact estimate.",
    },
    {
      n: "02", title: "Design", headline: "We design the AI stack around your business.",
      duration: "Days 4–7", durationLabel: "Week 1",
      activities: [
        "Blueprint the agent stack — voice, chat, sequences, routing",
        "Conversation + qualification flows mapped end-to-end",
        "CRM handoff rules, lead-scoring, and round-robin logic",
        "Knowledge collection: offer, pricing, FAQ, objections",
        "Brand voice & persona kit for every agent",
      ],
      deliverable: "A clickable agent map you sign off on before we touch a line of code.",
    },
    {
      n: "03", title: "Build", headline: "We build, train, and wire it into your stack.",
      duration: "10–15 days", durationLabel: "Week 2",
      activities: [
        "Train AI agents on your tone, offer, and real objections",
        "Wire telephony (Twilio / Vapi) and voice models",
        "Native CRM, calendar, and billing integrations",
        "100+ adversarial test conversations before launch",
        "Staging walkthrough with your team — line by line",
      ],
      deliverable: "A live, tested agent stack — signed off by you in staging.",
    },
    {
      n: "04", title: "Optimize", headline: "We tune weekly. You watch the calendar fill.",
      duration: "Ongoing", durationLabel: "Week 3+",
      activities: [
        "Live launch + monitoring dashboard for every conversation",
        "Weekly transcript reviews — what worked, what didn't",
        "Conversion + script tuning loops",
        "New flows added as you grow into more channels",
        "Monthly KPI report + next-quarter roadmap",
      ],
      deliverable: "A pipeline that gets sharper every single week.",
    },
  ];

  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    let ticking = false;
    let last = -1;
    const mq = typeof window !== "undefined" ? window.matchMedia("(min-width: 761px)") : null;
    function compute() {
      ticking = false;
      // On mobile the section renders as a plain stacked list — no scroll-driven flip.
      if (mq && !mq.matches) return;
      const el = sectionRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const totalScroll = Math.max(1, rect.height - winH);
      const scrolled = -rect.top;
      const p = Math.max(0, Math.min(0.9999, scrolled / totalScroll));
      const idx = Math.floor(p * steps.length);
      if (idx !== last) {
        last = idx;
        setActive(idx);
      }
    }
    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(compute);
      }
    }
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section ref={sectionRef} id="how" className="how-scroll">
      <div className="how-sticky">
        <div className="how-inner container">
          <div className="how-head">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}>
              <span className="num">04</span>How it works
            </div>
            <h2 className="h2">Live in three weeks. Tuned forever.</h2>
            <p className="section-sub" style={{ textAlign: "center", margin: "12px auto 0" }}>
              No 6-month rollouts. Three weeks from signed contract to your first AI-booked appointment.
            </p>
          </div>

          <div className="how-body">
            <div className="how-stage">
              {steps.map((s, i) => {
                const cls = i === active ? "is-active" : i < active ? "is-past" : "is-future";
                return (
                  <article key={s.n} className={`how-card-big ${cls}`}>
                    <div className="hc-top">
                      <div className="hc-num">/ {s.n}</div>
                      <div className="hc-time">
                        <span className="hc-time-week">{s.durationLabel}</span>
                        <span className="hc-time-days">{s.duration}</span>
                      </div>
                    </div>

                    <h3 className="hc-title">{s.title}</h3>
                    <p className="hc-headline">{s.headline}</p>

                    <ul className="hc-list">
                      {s.activities.map((a, j) => (
                        <li key={j}>
                          <span className="hc-li-bullet"><I.Check /></span>
                          <span>{a}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="hc-deliv">
                      <div className="hc-deliv-label">You walk away with</div>
                      <div className="hc-deliv-text">{s.deliverable}</div>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="how-dots" role="presentation">
              {steps.map((s, i) => (
                <span key={s.n} className={`how-dot ${i === active ? "is-active" : ""} ${i < active ? "is-past" : ""}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- ROI calculator lives in components/RoiCalculator.tsx ---------- */

/* ---------- Clients ---------- */
const clients = [
  { name: "Noon Academy",              logo: "/logos/noon.svg" },
  { name: "ArchiTech",                 logo: "/logos/architech.svg" },
  { name: "CPSHun",                    logo: "/logos/CPShub.webp" },
  { name: "Vigilant Security Services", logo: "/logos/vigilant.jpg" },
];

function Clients() {
  const grid = useRevealGrid("clients-grid");
  return (
    <section id="clients">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">06</span>Clients</div>
            <h2 className="h2">Early teams who bet on us.</h2>
          </div>
          <p className="section-sub">
            We&apos;re a new agency with a strong opinion about how SMBs should use AI. These teams
            agreed and let us prove it. Want to be next?
          </p>
        </Reveal>

        <div ref={grid.ref} className={grid.className}>
          {clients.map((c) => (
            <div className="client-logo" key={c.name} title={c.name}>
              <div className="client-badge">
                <img src={c.logo} alt={c.name} className="client-img" loading="lazy" />
              </div>
              <span className="client-name">{c.name}</span>
            </div>
          ))}
        </div>

        <div className="launch-badge-wrap">
          <span className="launch-badge">Become a launch partner — limited 2026 spots</span>
        </div>
      </div>
    </section>
  );
}

/* ---------- Proof / KPIs ---------- */
function Proof() {
  const grid = useRevealGrid("proof-grid");
  return (
    <section id="proof">
      <div className="container">
        <Reveal className="section-head">
          <div>
            <div className="section-eyebrow"><span className="num">07</span>Outcomes</div>
            <h2 className="h2">Less manual work. More closed deals.</h2>
          </div>
        </Reveal>
        <div ref={grid.ref} className={grid.className}>
          <div className="card quote">
            &ldquo;SolvoLab took the busywork that was quietly draining our team — RFI logging, submittal
            tracking, and weekly progress reports — and turned it all into automations that just run.
            We&apos;re saving close to <strong>$2,000 a month</strong> in admin hours, and my engineers are
            finally back on actual engineering.&rdquo;
            <div className="author">
              <div className="av">AA</div>
              <div>
                <div className="who">Altaf Afridi</div>
                <div className="role">DVP · Architectural Engineering MENA &amp; Project Management KSA</div>
              </div>
            </div>
          </div>
          <div className="card kpi">
            <div className="big">$2k/mo</div>
            <div className="desc">in admin hours saved after moving internal ops onto SolvoLab automations.</div>
          </div>
          <div className="card kpi">
            <div className="big">−40hr</div>
            <div className="desc">of manual reporting and tracking removed across the team every month.</div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- Final CTA + contact form (merged) ---------- */
function CTA() {
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("Something went wrong. Please try again or reach out via email.");

  // Load reCAPTCHA Enterprise once on mount (independent of env-inlining timing on <Script>).
  useEffect(() => {
    if (!SITE_KEY) return;
    if (document.querySelector("script[data-solvo-recaptcha]")) return;
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/enterprise.js?render=${SITE_KEY}`;
    s.async = true;
    s.defer = true;
    s.setAttribute("data-solvo-recaptcha", "1");
    document.head.appendChild(s);
  }, [SITE_KEY]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    trackClick("booknow_form_submit");
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      if (!SITE_KEY) {
        throw new Error(
          "reCAPTCHA site key is missing from the client build. Stop the dev server and run `npm run dev` again so NEXT_PUBLIC_RECAPTCHA_SITE_KEY gets inlined."
        );
      }

      // @ts-expect-error grecaptcha is loaded externally
      const grecaptcha = typeof window !== "undefined" ? window.grecaptcha : undefined;
      if (!grecaptcha || !grecaptcha.enterprise) {
        throw new Error("reCAPTCHA hasn't finished loading yet — wait a second and try again.");
      }

      const recaptchaToken: string = await new Promise((resolve, reject) => {
        grecaptcha.enterprise.ready(async () => {
          try {
            resolve(await grecaptcha.enterprise.execute(SITE_KEY, { action: "CONTACT_SUBMIT" }));
          } catch (err) {
            reject(err);
          }
        });
      });

      if (!recaptchaToken) throw new Error("Failed to obtain a reCAPTCHA token.");

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, recaptchaToken }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.error || `Request failed (${res.status}).`);
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="cta">
      <div className="container">
        <div className="cta">
          <Reveal className="cta-inner">
            <div className="section-eyebrow" style={{ justifyContent: "center" }}><span className="num">→</span>Start here</div>
            <h2 className="h2" style={{ margin: "0 auto 20px", textAlign: "center", maxWidth: 720 }}>
              Book a 30-minute audit. Leave with a list of leaks worth real money.
            </h2>
            <div style={{ marginBottom: 36 }} />

            <form onSubmit={handleSubmit} className="solvo-form cta-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="sl-name" className="form-label">Full Name</label>
                  <input
                    type="text"
                    id="sl-name"
                    className="form-input"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sl-email" className="form-label">Business Email</label>
                  <input
                    type="email"
                    id="sl-email"
                    className="form-input"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="sl-message" className="form-label">Which call do you keep missing?</label>
                <textarea
                  id="sl-message"
                  className="form-textarea"
                  placeholder="Tell us what's slowing your team down…"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <div className="form-foot">
                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={isSubmitting}
                  style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? "not-allowed" : "pointer" }}
                >
                  {isSubmitting ? "Sending…" : <>Book my 30-min audit <I.Arrow /></>}
                </button>

                {submitStatus === "success" && (
                  <p className="form-status is-success">✅ Message sent! Check your inbox for a confirmation email.</p>
                )}
                {submitStatus === "error" && (
                  <p className="form-status is-error">{errorMsg}</p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function SolvoFooter() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-col">
            <div className="brand" style={{ marginBottom: 16 }}>
              <img src={LOGO} alt="SolvoLab" />
              <span>SolvoLab</span>
            </div>
            <p style={{ color: "var(--text-mute)", fontSize: 13, lineHeight: 1.6, maxWidth: 280 }}>
              The AI agency for small businesses that want to grow without growing headcount.
            </p>
          </div>
          <div className="foot-col">
            <h5>Services</h5>
            <a href="#services" onClick={() => trackClick("footer_service_ai_reception")}>AI receptionists</a>
            <a href="#services" onClick={() => trackClick("footer_service_voice")}>Voice agents</a>
            <a href="#services" onClick={() => trackClick("footer_service_outbound")}>Outbound sequences</a>
            <a href="#services" onClick={() => trackClick("footer_service_crm")}>CRM integrations</a>
          </div>
          <div className="foot-col">
            <h5>Company</h5>
            <a href="#" onClick={() => trackClick("footer_company_about")}>About</a>
            <a href="#" onClick={() => trackClick("footer_company_case_studies")}>Case studies</a>
            <a href="#" onClick={() => trackClick("footer_company_pricing")}>Pricing</a>
            <a href="#" onClick={() => trackClick("footer_company_careers")}>Careers</a>
          </div>
          <div className="foot-col">
            <h5>Contact</h5>
            <a href="mailto:saboor@solvolab.com" onClick={() => trackClick("contact_email")}>saboor@solvolab.com</a>
            <a href="tel:+13074434309" onClick={() => trackClick("contact_phone_us")}>+1 307 443 4309</a>
            <a href="tel:+966532962900" onClick={() => trackClick("contact_phone_sa")}>+966 53 296 2900</a>
            <a href="#cta" onClick={() => trackClick("booknow_footer")}>Book a call</a>
            <a href="#" onClick={() => trackClick("social_linkedin")}>LinkedIn</a>
            <a href="#" onClick={() => trackClick("social_twitter")}>X / Twitter</a>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2026 SolvoLab — built by AI, sold by humans.</div>
          <div>solvolab.com · <a href="/privacy" onClick={() => trackClick("footer_privacy")}>/privacy</a> · /terms</div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="solvo-root">
      <div className="bg-layer bg-mesh"></div>
      <div className="bg-layer bg-grid"></div>
      <div className="bg-layer bg-noise"></div>

      <Nav />

      <main>
        <Hero />
        <Integrations />
        <Industries />
        <Services />
        <HowItWorks />
        <RoiCalculator />
        <Clients />
        <Proof />
        <CTA />
      </main>

      <SolvoFooter />
    </div>
  );
}

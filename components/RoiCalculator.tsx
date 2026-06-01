"use client";

import { useEffect, useRef, useState } from "react";
import { INDUSTRIES, CTA_THRESHOLD, type SliderConfig } from "@/lib/calculator-config";
import { calculate } from "@/lib/calculator-math";
import { trackClick } from "@/lib/analytics";

/* ---------- formatting helpers ---------- */
const fmtCurrency = (n: number) => "$" + Math.round(n).toLocaleString("en-US");
const fmtNumber = (n: number) => n.toLocaleString("en-US");
const fmtPercent = (n: number) => (Number.isInteger(n) ? `${n}%` : `${n.toFixed(1)}%`);

function formatSliderValue(cfg: SliderConfig, v: number) {
  if (cfg.format === "currency") return fmtCurrency(v);
  if (cfg.format === "percent") return fmtPercent(v);
  return fmtNumber(v);
}

function formatHero(extraUnits: number, decimals: 0 | 1): { text: string; star: boolean } {
  if (decimals === 1) return { text: `+${extraUnits.toFixed(1)}`, star: false };
  if (extraUnits < 0.5) return { text: "+1", star: true };
  return { text: `+${Math.round(extraUnits).toLocaleString("en-US")}`, star: false };
}

/* small scroll-reveal to match the rest of the page */
function useReveal<T extends HTMLElement>() {
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
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return [ref, inView] as const;
}

function Arrow() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export default function RoiCalculator() {
  const [headRef, headIn] = useReveal<HTMLDivElement>();
  const [industryId, setIndustryId] = useState<string>("");
  const [leads, setLeads] = useState(0);
  const [value, setValue] = useState(0);
  const [closeRate, setCloseRate] = useState(0);

  const industry = industryId ? INDUSTRIES[industryId] : null;

  function selectIndustry(id: string) {
    setIndustryId(id);
    const ind = INDUSTRIES[id];
    if (ind) {
      // Snap every slider to this industry's defaults — part of the "built for me" effect.
      setLeads(ind.sliders.leads.default);
      setValue(ind.sliders.value.default);
      setCloseRate(ind.sliders.closeRate.default);
    }
  }

  const { extraUnits, recoveredRevenue } = calculate({
    leads,
    value,
    closeRatePercent: closeRate,
  });

  const hero = industry ? formatHero(extraUnits, industry.outputDecimals) : null;
  const showCta = recoveredRevenue >= CTA_THRESHOLD;

  // leads slider within 5% of its range top
  const leadsCfg = industry?.sliders.leads;
  const leadsNearMax =
    !!leadsCfg && leads >= leadsCfg.max - (leadsCfg.max - leadsCfg.min) * 0.05;

  const sliderDefs = industry
    ? ([
        { key: "leads", cfg: industry.sliders.leads, val: leads, set: setLeads },
        { key: "value", cfg: industry.sliders.value, val: value, set: setValue },
        { key: "closeRate", cfg: industry.sliders.closeRate, val: closeRate, set: setCloseRate },
      ] as const)
    : [];

  return (
    <section id="roi">
      <div className="container">
        <div ref={headRef} className={`section-head reveal ${headIn ? "in" : ""}`}>
          <div>
            <div className="section-eyebrow"><span className="num">05</span>The math</div>
            <h2 className="h2">What it&apos;s worth to never miss a lead again.</h2>
          </div>
          <p className="section-sub">
            Pick your industry. We&apos;ll show you what&apos;s quietly slipping through every month —
            with conservative numbers, not hype.
          </p>
        </div>

        <div className="roi-cal">
          {/* industry picker — reads as a sentence */}
          <div className="roi-pick">
            <p className="roi-pick-sentence">
              <label htmlFor="roi-industry" className="roi-pick-lead">I have a</label>{" "}
              <span className={`roi-select-wrap ${industryId ? "is-set" : ""}`}>
                <span className="roi-select-text" aria-hidden="true">
                  {industry ? industry.inlineLabel : "pick your industry…"}
                </span>
                <select
                  id="roi-industry"
                  className="roi-select"
                  value={industryId}
                  onChange={(e) => selectIndustry(e.target.value)}
                  aria-label="What kind of business do you run?"
                >
                  <option value="" disabled>
                    pick your industry…
                  </option>
                  {Object.values(INDUSTRIES).map((ind) => (
                    <option key={ind.id} value={ind.id}>
                      {ind.inlineLabel}
                    </option>
                  ))}
                </select>
              </span>
            </p>
            {industry && <p className="roi-pick-hint">{industry.includes}</p>}
          </div>

          {industry && hero && (
            <>
              <h3 className="roi-headline"><span className="roi-headline-text">{industry.headline}</span></h3>

              {/* sliders */}
              <div className="roi-sliders">
                {sliderDefs.map(({ key, cfg, val, set }) => (
                  <div className="slider-row roi-slider" key={key}>
                    <div className="label">
                      <span>{cfg.label}</span>
                      <span className="val">
                        {formatSliderValue(cfg, val)}
                        {key === "leads" && leadsNearMax && (
                          <span
                            className="roi-max-tip"
                            title="More than this? Your numbers are bigger than this calculator handles — book a call."
                            aria-label="More than this? Your numbers are bigger than this calculator handles — book a call."
                          >
                            i
                          </span>
                        )}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={cfg.min}
                      max={cfg.max}
                      step={cfg.step}
                      value={val}
                      onChange={(e) => set(+e.target.value)}
                      aria-label={cfg.label}
                    />
                    {cfg.helperText && <div className="roi-helper">{cfg.helperText}</div>}
                  </div>
                ))}
              </div>

              {/* results */}
              <div className="roi-result roi-panel">
                <div className="roi-big">
                  {hero.text}
                  {hero.star && (
                    <sup
                      className="roi-star"
                      title="Numbers stack across the year — even sub-monthly gains compound."
                    >
                      *
                    </sup>
                  )}{" "}
                  <span className="roi-big-unit">{industry.unitNounPlural} / month</span>
                </div>
                <div className="roi-sub-num">
                  {fmtCurrency(recoveredRevenue)} <span className="roi-sub-unit">/ month recovered</span>
                </div>
                <div className="roi-payback">{industry.paybackAnchor(Math.round(extraUnits))}</div>
              </div>

              {/* CTA */}
              {showCta ? (
                <div className="roi-cta-wrap">
                  <a
                    className="btn btn-primary"
                    href="#cta"
                    onClick={() => trackClick(`booknow_roi_${industry.id}`)}
                  >
                    Book a 30-min audit <Arrow />
                  </a>
                </div>
              ) : (
                <p className="roi-cta-muted">Adjust the sliders to see if this fits your business.</p>
              )}

              <p className="roi-foot">
                Numbers based on conservative industry benchmarks. We&apos;ll pressure-test yours on the call.
              </p>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

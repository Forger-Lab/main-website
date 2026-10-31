"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { trackClick } from "@/lib/analytics";

const cases = [
  {
    client: "Vigilant Security Services", logo: "78182.png", width: 155, height: 46,
    result: <><span>100%</span> clean recovery with zero downtime &amp; hardened infrastructure</>,
    deliverable: "Malware Remediation & Hardened Rebuild",
    problem: "A compromised WordPress production website was infected with recurring malware payloads, threatening contract compliance and operational uptime.",
    solved: "Performed forensic malware remediation, isolated vulnerability injection vectors, authored a vulnerability report, and rebuilt the site on hardened infrastructure.",
  },
  {
    client: "ArchiTech", logo: "063cc.png", width: 46, height: 44,
    result: <>Proposal turnaround time reduced by <span>60%</span></>,
    deliverable: "Digital Scoping & Intake Portal",
    problem: "Complex architectural inquiries and custom estimate requests were scattered across PDF attachments and emails, creating a multi-day proposal backlog.",
    solved: "Built a centralised digital brief and scoping engine that unifies initial specifications, file uploads, and automated quote generation directly into the pipeline.",
  },
  {
    client: "Allied (ACET)", logo: "7fe82.png", width: 50, height: 48,
    result: <>Zero manual retyping &amp; instant certification</>,
    deliverable: "Automated Credential & Verification Pipeline",
    problem: "Student registration, examination proctoring, and physical certificate generation required tedious manual retyping across disconnected internal databases.",
    solved: "Connected their registration portal directly to automated proctoring verification and instant credential generation, eliminating administrative delays.",
  },
  {
    client: "Noon", logo: "03176.png", width: 166, height: 65,
    // The design supplies narrative copy for Noon without a quantified result or problem statement.
    result: null,
    deliverable: "Learning data & automated tutor evaluation pipeline",
    problem: null,
    solved: "Brought learning data into one place so the team could review student activity. Our founder’s experience includes building the automated tutor evaluation pipeline for Noon across the MENA region.",
  },
];

export default function HomeCaseStudies() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  return (
    <div className="home-case-studies">
      <div className="home-case-tabs" role="tablist" aria-label="Client case studies">
        {cases.map((item, index) => (
          <button
            key={item.client}
            ref={element => { tabs.current[index] = element; }}
            id={`client-tab-${index}`}
            role="tab"
            aria-selected={selected === index}
            aria-controls={`client-panel-${index}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => { setSelected(index); trackClick(`home_case_${index}`); }}
            onKeyDown={event => {
              let next = index;
              if (event.key === "ArrowRight") next = (index + 1) % cases.length;
              else if (event.key === "ArrowLeft") next = (index + cases.length - 1) % cases.length;
              else if (event.key === "Home") next = 0;
              else if (event.key === "End") next = cases.length - 1;
              else return;
              event.preventDefault();
              setSelected(next);
              tabs.current[next]?.focus();
            }}
          >
            <span className={`home-case-logo home-case-logo-${index}`}>
              <Image src={`/home/${item.logo}`} alt={item.client} width={item.width} height={item.height} />
            </span>
          </button>
        ))}
      </div>
      {cases.map((item, index) => (
        <div key={item.client} id={`client-panel-${index}`} role="tabpanel" aria-labelledby={`client-tab-${index}`} tabIndex={0} hidden={selected !== index}>
          <div className="home-case-panel">
            <div className="home-case-result">
              <h3>{item.client}</h3>
              {item.result && <div className="home-case-metric"><small>RESULT</small><p>{item.result}</p></div>}
              <div><small>DELIVERABLE</small><p>{item.deliverable}</p></div>
            </div>
            <div className="home-case-explanation">
              {item.problem && <div><h3>Problem:</h3><p>{item.problem}</p></div>}
              <div><h3>What We Solved:</h3><p>{item.solved}</p></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

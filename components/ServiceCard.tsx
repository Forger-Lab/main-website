import type { LucideIcon } from "lucide-react";

export type ServiceCardProps = {
  icon: LucideIcon;
  name: string;
  tagline: string;
  included: string[];
  pairedWith: string;
};

export default function ServiceCard({ icon: Icon, name, tagline, included, pairedWith }: ServiceCardProps) {
  return (
    <div className="card build-card">
      <div className="build-top">
        <div className="build-ic">
          <Icon size={22} strokeWidth={1.6} />
        </div>
        <div className="build-titles">
          <h3 className="build-name">{name}</h3>
          <p className="build-tagline">{tagline}</p>
        </div>
      </div>

      <ul className="build-list">
        {included.map((item, i) => (
          <li key={i}>
            <span className="build-check" aria-hidden="true">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12l5 5L20 6" />
              </svg>
            </span>
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="build-paired">
        <span className="build-paired-label">Often paired with</span>
        <span className="build-paired-val">{pairedWith}</span>
      </div>
    </div>
  );
}

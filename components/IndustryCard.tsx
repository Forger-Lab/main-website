import type { LucideIcon } from "lucide-react";

export type IndustryCardProps = {
  icon: LucideIcon;
  name: string;
  pain: string;
  useCases: string[];
  subVerticals: string;
};

export default function IndustryCard({ icon: Icon, name, pain, useCases, subVerticals }: IndustryCardProps) {
  return (
    <div className="card industry-card">
      <div className="industry-top">
        <div className="industry-ic">
          <Icon size={22} strokeWidth={1.6} />
        </div>
        <h3 className="industry-name">{name}</h3>
      </div>

      <p className="industry-pain">{pain}</p>

      <ul className="industry-uses">
        {useCases.map((u, i) => (
          <li key={i}>
            <span className="industry-uses-dot" />
            <span>{u}</span>
          </li>
        ))}
      </ul>

      <div className="industry-subs">{subVerticals}</div>
    </div>
  );
}

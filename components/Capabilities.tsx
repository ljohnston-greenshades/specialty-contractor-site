import {
  SlidersHorizontal,
  Globe2,
  BarChart3,
  TabletSmartphone,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

type Capability = {
  Icon: LucideIcon;
  title: string;
  body: string;
  tags: string[];
};

const CAPABILITIES: Capability[] = [
  {
    Icon: SlidersHorizontal,
    title: "Multi-Rate & Complex Payroll",
    body: "Blended overtime, shift differentials, prevailing wage tiers, and per-trade scales — all in a single pay run. Most customers finish payroll in under 10 minutes.",
    tags: ["Blended overtime", "Prevailing wage", "Multiple pay schedules"],
  },
  {
    Icon: Globe2,
    title: "Multi-State Tax & Compliance",
    body: "Tax calculated automatically for every state your crew works in. Local jurisdictions, nexus, and year-end filings handled without manual overrides.",
    tags: ["All 50 states", "Local jurisdictions", "Year-end filing"],
  },
  {
    Icon: BarChart3,
    title: "Cost Accounting & GL Integration",
    body: "Payroll costs map to jobs, projects, and cost centers automatically. Earnings and benefits post straight to your GL — clean labor cost by project.",
    tags: ["Job costing", "GL auto-posting", "Project tracking"],
  },
  {
    Icon: TabletSmartphone,
    title: "Employee Self-Service (Mobile)",
    body: "Field workers get pay stubs, W-2s, time-off requests, and benefits enrollment on their phone. Less HR phone tag, especially when crews scale.",
    tags: ["Mobile-first", "Pay stubs & W-2s", "Benefits enrollment"],
  },
  {
    Icon: ShieldCheck,
    title: "ACA, FLSA & Garnishment Compliance",
    body: "ACA eligibility, FLSA wage-and-hour, garnishment deductions — tracked and validated before payroll submits. Issues surface before an audit finds them.",
    tags: ["ACA tracking", "FLSA", "Garnishments"],
  },
  {
    Icon: Users,
    title: "HR & Benefits Administration",
    body: "Onboarding, benefits enrollment, OSHA and safety training, offboarding — the whole employee lifecycle. Built for seasonal turnover and trade-specific benefits.",
    tags: ["Onboarding", "Safety training", "Benefits admin"],
  },
];

export function Capabilities() {
  return (
    <section className="section cap-section" id="capabilities">
      <div className="section-inner">
        <div className="section-label">Platform</div>
        <h2 className="section-title">
          What TradePay handles for your trade business
        </h2>
        <p className="section-sub">
          Everything a specialty contractor needs to run payroll, taxes,
          and HR — in one platform.
        </p>
        <div className="cap-grid">
          {CAPABILITIES.map(({ Icon, title, body, tags }) => (
            <div className="cap-card" key={title}>
              <div className="cap-icon-box">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
              <div className="cap-tags">
                {tags.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Wrench,
  Snowflake,
  Zap,
  Trees,
  HardHat,
  Hammer,
  Cog,
  Building2,
  type LucideIcon,
} from "lucide-react";

type Trade = {
  num: string;
  Icon: LucideIcon;
  name: string;
  body: string;
};

const TRADES: Trade[] = [
  { num: "01", Icon: Wrench, name: "Plumbing", body: "Multi-site crews, licensing across states, complex labor cost tracking" },
  { num: "02", Icon: Snowflake, name: "HVAC", body: "Seasonal workforce management, commercial & residential pay structures" },
  { num: "03", Icon: Zap, name: "Electrical", body: "Certified payroll for government projects, union and non-union support" },
  { num: "04", Icon: Trees, name: "Landscaping", body: "High seasonal volume, hourly complexity, rapid onboarding and offboarding" },
  { num: "05", Icon: HardHat, name: "General Contracting", body: "Multi-subcontractor coordination, job costing, prevailing wage" },
  { num: "06", Icon: Hammer, name: "Carpentry & Millwork", body: "Trade-specific pay rates, benefits for skilled workers, compliance reporting" },
  { num: "07", Icon: Cog, name: "Mechanical & Sheet Metal", body: "Union pay rules, reciprocity tracking, complex overtime calculations" },
  { num: "08", Icon: Building2, name: "Commercial Construction", body: "Multi-state tax, large workforce management, ERP integration at scale" },
];

export function Trades() {
  return (
    <section className="section trades-section" id="who-we-serve">
      <div className="section-inner">
        <div className="trades-header">
          <div>
            <div className="section-label">Trades We Serve</div>
            <h2 className="section-title">
              Built for the trades that keep things running
            </h2>
          </div>
          <p className="trades-header-sub">
            Whether you’re running a 15-person plumbing company or a
            multi-state HVAC operation, Flux scales with your workforce
            complexity.
          </p>
        </div>
        <div className="trades-grid">
          {TRADES.map(({ num, Icon, name, body }) => (
            <div className="trade-card" key={num}>
              <span className="trade-icon-num">{num}</span>
              <span className="trade-icon-big">
                <Icon size={32} strokeWidth={1.5} aria-hidden="true" />
              </span>
              <h3>{name}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

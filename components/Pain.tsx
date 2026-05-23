import {
  Map,
  Calculator,
  ClipboardCheck,
  Smartphone,
  Repeat,
  Link2,
  type LucideIcon,
} from "lucide-react";

type PainPoint = {
  num: string;
  Icon: LucideIcon;
  title: string;
  body: string;
};

const PAIN_POINTS: PainPoint[] = [
  {
    num: "01",
    Icon: Map,
    title: "Workers crossing state lines",
    body: "A technician might work in three states in one week. Flux assigns the right tax jurisdiction per employee, per pay period — automatically.",
  },
  {
    num: "02",
    Icon: Calculator,
    title: "Multiple pay rates, one run",
    body: "Blended overtime, per-trade scales, prevailing wage tiers. In the trades, that's just Tuesday. Flux handles all of it in a single pay run.",
  },
  {
    num: "03",
    Icon: ClipboardCheck,
    title: "Compliance that keeps changing",
    body: "FLSA, ACA, garnishments, state wage bases — the rules shift constantly. Flux keeps you current so you're not staffing a compliance team to do it.",
  },
  {
    num: "04",
    Icon: Smartphone,
    title: "A workforce that's never at a desk",
    body: "Your crew submits time, grabs pay stubs, and updates their info from a phone — not a desktop portal that assumes they're at a desk.",
  },
  {
    num: "05",
    Icon: Repeat,
    title: "Seasonal swings and off-cycle pay",
    body: "Peak season means rapid onboarding and emergency pay runs. Flux supports unlimited runs — no per-run fees, no apologies.",
  },
  {
    num: "06",
    Icon: Link2,
    title: "Payroll siloed from your ERP",
    body: "When payroll doesn't talk to your ERP, you're exporting CSVs and reconciling by hand. Flux connects natively to Microsoft Dynamics — both directions, no scripts.",
  },
];

export function Pain() {
  return (
    <section className="section pain-section" id="pain">
      <div className="section-inner">
        <div className="pain-left">
          <div className="section-label">The Problem</div>
          <h2 className="section-title">
            Generic payroll wasn’t built for job sites
          </h2>
          <p className="section-sub">
            Your crew doesn’t work 9-to-5 in a single state. Neither should
            your payroll platform.
          </p>
          <div className="pain-callout">
            <p>
              In the trades, complexity isn't the exception. It's the work.
              Your payroll should be built around that.
            </p>
          </div>
        </div>

        <div className="pain-grid">
          {PAIN_POINTS.map(({ num, Icon, title, body }) => (
            <div className="pain-card" key={num}>
              <div className="pain-num">{num}</div>
              <div className="pain-icon-wrap">
                <Icon size={20} strokeWidth={1.75} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

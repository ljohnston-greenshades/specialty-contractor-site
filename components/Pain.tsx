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
    body: "A single technician might work in three states in one week. Most platforms make multi-state tax filing a manual headache. Flux handles it automatically, per employee, per pay period.",
  },
  {
    num: "02",
    Icon: Calculator,
    title: "Multiple pay rates, one run",
    body: "Overtime on a blended rate. Different scales by trade or job type. Prevailing wage tiers for government-funded work. These aren’t edge cases in specialty contracting — they’re the norm.",
  },
  {
    num: "03",
    Icon: ClipboardCheck,
    title: "Compliance that keeps changing",
    body: "FLSA, ACA, garnishments, wage base adjustments — the regulatory surface is wide and the stakes are high. Flux keeps you current without requiring a compliance team to manage it.",
  },
  {
    num: "04",
    Icon: Smartphone,
    title: "A workforce that’s never at a desk",
    body: "Your crew needs to access pay stubs, update their info, and submit time from the field — not from a desktop portal that assumes an office exists. Flux is mobile-first by design.",
  },
  {
    num: "05",
    Icon: Repeat,
    title: "Seasonal swings and off-cycle pay",
    body: "Peak season means fast onboarding and off-cycle runs. Flux supports unlimited pay runs and makes seasonal workforce management actually manageable — at no extra charge.",
  },
  {
    num: "06",
    Icon: Link2,
    title: "Payroll siloed from your ERP",
    body: "When payroll data doesn’t talk to your ERP, you’re exporting CSVs and reconciling manually. Flux integrates natively with Microsoft Dynamics — bidirectional, no scripts required.",
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
              Specialty contractors are still force-fitting horizontal
              software to vertical problems. There’s a better way.
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

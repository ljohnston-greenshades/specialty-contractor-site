const ITEMS = [
  "Multi-State Payroll",
  "Multi-Rate Pay",
  "Microsoft Dynamics Native",
  "FLSA Compliance",
  "ACA Tracking",
  "Garnishments",
  "Unlimited Pay Runs",
  "Mobile ESS",
  "Job Costing",
  "Year-End Filing",
  "Benefits Admin",
  "Seasonal Workforce",
];

export function Ticker() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {doubled.map((item, i) => (
          <span key={i} className="ticker-item">{item}</span>
        ))}
      </div>
    </div>
  );
}

const DIFFERENTIATORS = [
  {
    n: "01",
    title: "Multi-state tax is native, not bolted on",
    body: "When your technicians work across state lines, Flux automatically assigns the correct tax jurisdiction per work location — no manual overrides, no year-end surprises.",
  },
  {
    n: "02",
    title: "Unlimited pay runs, no extra charge",
    body: "Off-cycle runs for a new hire on a rushed project? Emergency payroll for a terminated seasonal worker? Flux doesn’t charge you for running payroll when your business needs it.",
  },
  {
    n: "03",
    title: "Deep ERP integration — 20+ years of it",
    body: "If you’re running Microsoft Dynamics GP or moving to Business Central, Flux connects natively. Data flows bidirectionally. No CSV exports, no manual GL reconciliation.",
  },
  {
    n: "04",
    title: "Real support — real people, not a case number",
    body: "Contractors tell us: with Flux, they actually get someone on the phone. No ticket queue, no offshore triage. This matters when payroll day is tomorrow and something’s wrong.",
  },
  {
    n: "05",
    title: "Proven across hundreds of contractor businesses",
    body: "535+ construction and specialty trade customers means we’ve seen the edge cases. Multi-jurisdiction overtime, blended rates, certified payroll — built around these, not away from them.",
  },
];

export function WhyFlux() {
  return (
    <section className="section why-section">
      <div className="section-inner">
        <div className="why-layout">
          <div className="why-left">
            <div className="section-label">Why Flux</div>
            <h2 className="section-title">
              We win here because we’re built for it
            </h2>
            <p className="why-left-sub">
              Most platforms you’ll evaluate are horizontal HCM tools with
              construction features bolted on. Flux is different — our core
              architecture was built for exactly the complexity specialty
              contractors live with every day.
            </p>
            <a href="#demo" className="btn-primary">See it in action →</a>
            <div className="why-big-num">5</div>
          </div>
          <div className="diff-list">
            {DIFFERENTIATORS.map((d) => (
              <div className="diff-item" key={d.n}>
                <div className="diff-n">{d.n}</div>
                <div>
                  <h4>{d.title}</h4>
                  <p>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

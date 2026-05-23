const DIFFERENTIATORS = [
  {
    n: "01",
    title: "Multi-state tax is native, not bolted on",
    body: "Flux assigns the right tax jurisdiction per work location automatically. No manual overrides. No year-end scrambles.",
  },
  {
    n: "02",
    title: "Unlimited pay runs, no extra charge",
    body: "Off-cycle runs, emergency runs, holiday catch-ups. Run payroll as often as you need to — never with a per-run fee.",
  },
  {
    n: "03",
    title: "Real support when it counts",
    body: "Payroll day is tomorrow and something's wrong. With Flux you get a real person on the phone — no ticket queue, no offshore triage.",
  },
  {
    n: "04",
    title: "Proven across hundreds of contractor businesses",
    body: "535+ construction and specialty trade customers. We've seen multi-jurisdiction overtime, blended rates, and certified payroll because they're how the trades work — not exceptions.",
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
              What sets Flux apart
            </h2>
            <p className="why-left-sub">
              When you compare options, these are the things contractors
              tell us keep coming up.
            </p>
            <a href="#demo" className="btn-primary">See it in action →</a>
            <div className="why-big-num">4</div>
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

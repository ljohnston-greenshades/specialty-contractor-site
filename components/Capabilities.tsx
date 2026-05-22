const CAPABILITIES = [
  {
    letter: "P",
    icon: "⚙️",
    title: "Multi-Rate & Complex Payroll",
    body: "Blended overtime, shift differentials, prevailing wage tiers, and per-trade pay scales — all in a single pay run. Average customer runs payroll in under 10 minutes, regardless of complexity.",
    tags: ["Blended overtime", "Prevailing wage", "Multiple pay schedules"],
  },
  {
    letter: "T",
    icon: "🗺️",
    title: "Multi-State Tax & Compliance",
    body: "Automatic tax calculation across every state where employees work. Nexus determination, local jurisdiction handling, and year-end reporting handled without manual intervention.",
    tags: ["All 50 states", "Local jurisdictions", "Year-end filing"],
  },
  {
    letter: "C",
    icon: "📊",
    title: "Cost Accounting & GL Integration",
    body: "Map payroll costs to jobs, projects, and cost centers automatically. Earnings and benefits post directly to your general ledger — full visibility into labor cost by project.",
    tags: ["Job costing", "GL auto-posting", "Project tracking"],
  },
  {
    letter: "E",
    icon: "📱",
    title: "Employee Self-Service (Mobile)",
    body: "Give field workers a mobile dashboard for pay stubs, W-2s, time-off requests, and benefits enrollment — from their phone. Significantly reduces HR admin load in high-headcount environments.",
    tags: ["Mobile-first", "Pay stubs & W-2s", "Benefits enrollment"],
  },
  {
    letter: "R",
    icon: "🛡️",
    title: "ACA, FLSA & Garnishment Compliance",
    body: "Automated compliance tracking for ACA eligibility, FLSA wage-and-hour rules, and garnishment deductions. Real-time validation flags issues before payroll submits — not after an audit.",
    tags: ["ACA tracking", "FLSA", "Garnishments"],
  },
  {
    letter: "H",
    icon: "👥",
    title: "HR & Benefits Administration",
    body: "Manage the full employee lifecycle — onboarding, benefits enrollment, OSHA and safety training (LMS), and offboarding. Built for high seasonal turnover and complex benefits structures.",
    tags: ["Onboarding", "Safety training", "Benefits admin"],
  },
];

export function Capabilities() {
  return (
    <section className="section cap-section" id="capabilities">
      <div className="section-inner">
        <div className="section-label">Platform</div>
        <h2 className="section-title">
          What Flux handles for your trade business
        </h2>
        <p className="section-sub">
          Payroll, HR, tax, and compliance capabilities built for how
          specialty contractors actually operate.
        </p>
        <div className="cap-grid">
          {CAPABILITIES.map((c) => (
            <div className="cap-card" key={c.title}>
              <div className="cap-letter">{c.letter}</div>
              <div className="cap-icon-box">{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="cap-tags">
                {c.tags.map((t) => (
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

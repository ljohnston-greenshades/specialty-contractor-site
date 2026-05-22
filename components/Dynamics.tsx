import { Check } from "lucide-react";

const POINTS = [
  {
    strong: "Bidirectional GL posting",
    rest: " — payroll posts directly back to Dynamics with no scripts or manual exports",
  },
  {
    strong: "Employee & project data sync",
    rest: " — Flux pulls from your Dynamics instance; changes stay in sync automatically",
  },
  {
    strong: "GP → BC migration path",
    rest: " — we’ve guided hundreds of customers through this transition without disrupting payroll continuity",
  },
  {
    strong: "Open API",
    rest: " — connect field service, time tracking, and job costing tools beyond the Dynamics ecosystem",
  },
];

export function Dynamics() {
  return (
    <section className="section dynamics-section" id="integrations">
      <div className="section-inner">
        <div className="dynamics-layout">
          <div>
            <div className="section-label">Microsoft Dynamics Integration</div>
            <h2 className="section-title">
              Moving off GP? On Business Central? We’re native to both.
            </h2>
            <p className="dynamics-intro">
              The most common buying trigger we see in specialty contracting is
              an ERP migration — GP reaching end-of-life, a move to Business
              Central. Flux is built for exactly this transition: bidirectional
              integration, no forced data re-entry, 20+ years of
              Dynamics-specific expertise.
            </p>
            <div className="dynamics-points">
              {POINTS.map((p) => (
                <div className="dyn-point" key={p.strong}>
                  <div className="dyn-check">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </div>
                  <p>
                    <strong>{p.strong}</strong>
                    {p.rest}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="erp-diagram">
            <div className="erp-box">
              <div className="erp-box-label">ERP / Accounting</div>
              <div className="erp-box-name">Microsoft Dynamics</div>
              <div className="erp-box-sub">
                GP &nbsp;·&nbsp; Business Central &nbsp;·&nbsp; D365 Finance
              </div>
            </div>
            <div className="erp-connector">
              <div className="erp-connector-inner">
                <span className="erp-connector-line" />
                <span className="erp-connector-label">⇅ Bidirectional sync</span>
                <span className="erp-connector-line" />
              </div>
            </div>
            <div className="erp-box highlighted">
              <div className="erp-box-label">Payroll & HR Platform</div>
              <div className="erp-box-name">Flux</div>
              <div className="erp-modules-row">
                <div className="erp-module">Payroll</div>
                <div className="erp-module">Tax & Compliance</div>
                <div className="erp-module">HR & Benefits</div>
                <div className="erp-module">ESS / Mobile</div>
              </div>
            </div>
            <div className="erp-connector">
              <div className="erp-connector-inner">
                <span className="erp-connector-line" />
                <span className="erp-connector-label">⇅ Open API</span>
                <span className="erp-connector-line" />
              </div>
            </div>
            <div className="erp-box">
              <div className="erp-box-label">Field Operations</div>
              <div className="erp-box-name">Time, Job Costing & More</div>
              <div className="erp-box-sub">
                ServiceTitan &nbsp;·&nbsp; Points North &nbsp;·&nbsp; Custom integrations
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

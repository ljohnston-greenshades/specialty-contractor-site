import { Check, Code2, Workflow, Building2, Wrench } from "lucide-react";

type Partner = { name: string; detail: string };

const FIELD_SERVICE: Partner[] = [
  { name: "ServiceTitan", detail: "HVAC · Plumbing · Electrical" },
  { name: "BuildOps", detail: "Commercial mechanical" },
  { name: "Jobber", detail: "Landscaping & service" },
  { name: "Housecall Pro", detail: "Residential service" },
  { name: "Points North", detail: "Certified payroll" },
];

const ERP_ACCOUNTING: Partner[] = [
  { name: "Microsoft Dynamics", detail: "GP · BC · D365 — 20+ yrs native" },
  { name: "QuickBooks", detail: "Online & Desktop" },
  { name: "Sage", detail: "Intacct · 100 · 300 CRE" },
  { name: "NetSuite", detail: "ERP & accounting" },
];

const POINTS = [
  {
    Icon: Wrench,
    strong: "Field service & time",
    rest: " — pull job-level hours, cost codes, and crew data from the tools your dispatch already runs on.",
  },
  {
    Icon: Building2,
    strong: "Accounting & ERP",
    rest: " — post payroll, benefits, and taxes straight to your GL. The deepest Microsoft Dynamics integration in the market lives here too.",
  },
  {
    Icon: Code2,
    strong: "Open REST API + webhooks",
    rest: " — every payroll, employee, and tax event is hooked. Wire TradePay into custom job costing, BI, or whatever you build internally.",
  },
];

export function Integrations() {
  return (
    <section className="section dynamics-section" id="integrations">
      <div className="section-inner">
        <div className="dynamics-layout">
          <div>
            <div className="section-label">Integrations</div>
            <h2 className="section-title">
              Connects to the stack you already run
            </h2>
            <p className="dynamics-intro">
              TradePay plugs into the field service, time tracking, and
              accounting tools trade businesses actually use. Pull crew
              time from the field. Post payroll back to your books. Use
              the open API for everything else.
            </p>
            <div className="dynamics-points">
              {POINTS.map(({ strong, rest }) => (
                <div className="dyn-point" key={strong}>
                  <div className="dyn-check">
                    <Check size={12} strokeWidth={3} aria-hidden="true" />
                  </div>
                  <p>
                    <strong>{strong}</strong>
                    {rest}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="integrations-grid">
            <div className="integration-group">
              <div className="integration-group-label">
                Field Service &amp; Time
              </div>
              <div className="integration-tiles">
                {FIELD_SERVICE.map((p) => (
                  <div key={p.name} className="integration-tile">
                    <div className="integration-name">{p.name}</div>
                    <div className="integration-detail">{p.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="integration-group">
              <div className="integration-group-label">
                Accounting &amp; ERP
              </div>
              <div className="integration-tiles">
                {ERP_ACCOUNTING.map((p) => (
                  <div
                    key={p.name}
                    className={`integration-tile${p.name === "Microsoft Dynamics" ? " integration-tile-feature" : ""}`}
                  >
                    <div className="integration-name">{p.name}</div>
                    <div className="integration-detail">{p.detail}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="integration-api">
              <div className="integration-api-icon">
                <Workflow size={18} strokeWidth={1.9} />
              </div>
              <div>
                <div className="integration-api-title">
                  Everything else, via the open API
                </div>
                <div className="integration-api-sub">
                  REST endpoints + webhook events for every payroll,
                  employee, and tax change. Documented and supported.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

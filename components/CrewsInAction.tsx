/*
 * Image placeholders. Each <img> points to a real file path under
 * /public/images/crews/. While the file is missing the browser will
 * render the alt text inside the styled .crew-photo box, making it
 * obvious which photo each card needs. Replace the files at these
 * paths with real photos to populate the section.
 */

type Crew = {
  trade: string;
  headline: string;
  file: string;
  alt: string;
};

const CREWS: Crew[] = [
  {
    trade: "Plumbing",
    headline: "Multi-site crews, one pay run",
    file: "/images/crews/plumber-residential-install.jpg",
    alt: "A licensed plumber in branded company uniform crouched under a residential kitchen sink installing copper supply lines, tools laid out on a drop cloth beside them, soft natural light from a nearby window, focused expression.",
  },
  {
    trade: "HVAC",
    headline: "Seasonal swings, handled",
    file: "/images/crews/hvac-tech-rooftop-unit.jpg",
    alt: "An HVAC technician in a branded polo and tool belt servicing a rooftop commercial air handler on a clear summer day, gauges and a service tablet in hand, surrounded by ductwork and the building skyline behind them.",
  },
  {
    trade: "Electrical",
    headline: "Certified payroll, no scripts",
    file: "/images/crews/electrician-panel-work.jpg",
    alt: "A journeyman electrician in arc-flash PPE working inside an open commercial electrical panel, voltmeter probes in hand, with neatly labeled breakers visible and a job-site clipboard on a nearby ladder.",
  },
  {
    trade: "Landscaping",
    headline: "Rapid onboarding for peak season",
    file: "/images/crews/landscaping-crew-truck.jpg",
    alt: "A landscaping crew of four in matching branded shirts loading equipment — a zero-turn mower, blowers, edgers — into a wrapped work truck and trailer at the start of a workday, sunrise lighting across a residential driveway.",
  },
];

export function CrewsInAction() {
  return (
    <section className="section crews-section" id="crews">
      <div className="section-inner">
        <div className="crews-header">
          <div>
            <div className="section-label">In the Field</div>
            <h2 className="section-title">
              Real crews. Real complexity. Handled.
            </h2>
          </div>
          <p className="crews-header-sub">
            These are the people on Flux payroll — and the working
            conditions the platform was designed around.
          </p>
        </div>
        <div className="crews-grid">
          {CREWS.map((c) => (
            <figure className="crew-card" key={c.file}>
              <img
                className="crew-photo"
                src={c.file}
                alt={c.alt}
                width={400}
                height={500}
                loading="lazy"
              />
              <figcaption className="crew-card-caption">
                <div className="crew-card-trade">{c.trade}</div>
                <div className="crew-card-line">{c.headline}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

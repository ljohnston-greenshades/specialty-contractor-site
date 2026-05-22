export function Hero() {
  return (
    <section className="hero">
      <div className="hero-accent-line" />
      <div className="hero-bg-split" />
      <div className="hero-grid" />
      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-eyebrow">
            <span className="eyebrow-line" />
            <span className="eyebrow-text">Specialty Contractors</span>
          </div>
          <h1>
            <span className="accent-outline">Payroll</span>
            <span className="accent">built for</span>
            the trades
          </h1>
          <p className="hero-sub">
            Multi-rate pay, multi-state taxes, workers across a dozen job
            sites — most platforms weren&apos;t designed for this. Flux was.
            We&apos;re the payroll backbone for hundreds of plumbing, HVAC,
            electrical, and landscaping companies.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn-primary">Request a Demo</a>
            <a href="#capabilities" className="btn-secondary">See what we handle →</a>
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat-block">
            <div className="stat-num">535<span>+</span></div>
            <div className="stat-desc">
              Construction &amp; specialty trade customers currently on Flux
            </div>
          </div>
          <div className="stat-block">
            <div className="stat-num">20<span>+</span></div>
            <div className="stat-desc">
              Years of native Microsoft Dynamics integration — GP, BC, and beyond
            </div>
          </div>
          <div className="stat-block">
            <div className="stat-num">All<span> 50</span></div>
            <div className="stat-desc">
              States covered for payroll tax and compliance — including multi-jurisdiction
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

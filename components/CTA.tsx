"use client";

export function CTA() {
  return (
    <section className="cta-section" id="demo">
      <div className="cta-inner">
        <div>
          <div className="section-label">Get Started</div>
          <h2 className="section-title">See Flux built for your trade</h2>
          <p className="cta-body">
            Walk through a live demo built around the complexity your crews
            actually deal with — multi-state taxes, variable pay rates, and
            all. No generic overview, no sales theater.
          </p>
        </div>
        <form
          className="cta-form-panel"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="form-row">
            <label className="form-label" htmlFor="name">First & Last Name</label>
            <input id="name" type="text" placeholder="Jane Smith" />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="email">Work Email</label>
            <input id="email" type="email" placeholder="jane@company.com" />
          </div>
          <div className="form-row">
            <label className="form-label" htmlFor="company">Company & Trade</label>
            <input id="company" type="text" placeholder="Smith Plumbing · Plumbing" />
          </div>
          <button type="submit" className="btn-submit">Request a Demo →</button>
          <div className="form-trust">
            <span className="trust-item">No long-term contract required</span>
            <span className="trust-item">Setup support included</span>
            <span className="trust-item">Real people answer your questions</span>
          </div>
        </form>
      </div>
    </section>
  );
}

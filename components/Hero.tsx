import { HeroDashboard } from "./HeroDashboard";

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
            sites — most platforms weren&apos;t built for this. TradePay was.
            Hundreds of plumbing, HVAC, electrical, and landscaping
            companies run on it.
          </p>
          <div className="hero-ctas">
            <a href="#demo" className="btn-primary">Request a Demo</a>
            <a href="#capabilities" className="btn-secondary">See what we handle →</a>
          </div>
        </div>

        <div className="hero-image-wrap">
          <div className="hero-image-glow" aria-hidden="true" />
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
}

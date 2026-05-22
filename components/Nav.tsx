import { Logo } from "./Logo";

export function Nav() {
  return (
    <nav className="site-nav">
      <Logo />
      <div className="nav-links">
        <a href="#capabilities">Capabilities</a>
        <a href="#integrations">Integrations</a>
        <a href="#who-we-serve">Trades We Serve</a>
        <a href="#demo" className="nav-cta">Request a Demo</a>
      </div>
    </nav>
  );
}

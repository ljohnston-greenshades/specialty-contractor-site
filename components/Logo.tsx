import { GreenshadesWordmark } from "./GreenshadesWordmark";

export function Logo({ href = "#" }: { href?: string }) {
  return (
    <a href={href} className="logo">
      <div className="logo-mark">T</div>
      <div className="logo-stack">
        <span>TradePay</span>
        <span className="logo-tagline">
          <span className="logo-tagline-text">Powered by</span>
          <GreenshadesWordmark className="logo-wordmark" />
        </span>
      </div>
    </a>
  );
}

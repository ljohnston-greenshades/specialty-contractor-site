import { GreenshadesWordmark } from "./GreenshadesWordmark";

export function Logo({ href = "#" }: { href?: string }) {
  return (
    <a href={href} className="logo">
      <div className="logo-mark">F</div>
      <div className="logo-stack">
        <span>Flux</span>
        <span className="logo-tagline">
          <span className="logo-tagline-text">Powered by</span>
          <GreenshadesWordmark className="logo-wordmark" />
        </span>
      </div>
    </a>
  );
}

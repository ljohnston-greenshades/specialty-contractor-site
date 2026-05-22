export function Logo({ href = "#" }: { href?: string }) {
  return (
    <a href={href} className="logo">
      <div className="logo-mark">F</div>
      <div className="logo-stack">
        <span>Flux</span>
        <span className="logo-tagline">Powered by Greenshades</span>
      </div>
    </a>
  );
}

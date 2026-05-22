import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <Logo />
      <p>© 2026 Greenshades Software. All rights reserved.</p>
      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Support</a>
      </div>
    </footer>
  );
}

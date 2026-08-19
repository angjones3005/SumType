export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div className="footer-center">
          <div className="brand">
            <div className="brand-mark"></div>
            <div className="brand-name">SumType</div>
          </div>
          <p className="footer-copy">
            &copy; 2026. All written content is personal opinion. Screenshots are my own unless otherwise credited.
          </p>
          <div className="footer-links">
            <a href="/about">About</a>
            <a href="#">Privacy</a>
            <a href="#">Help</a>
            <a href="#">Terms</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

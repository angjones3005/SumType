export default function Footer() {
  return (
    <footer>
      <div className="wrap footer-grid">
        <div>
          <div className="footer-label">THIS IS BLANK</div>
          <p style={{ color: "var(--text-muted)", fontSize: "13px" }}>Nothing here yet.</p>
        </div>

        <div className="footer-center">
          <div className="brand">
            <div className="brand-mark"></div>
            <div className="brand-name">Save Point</div>
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

        <div className="footer-right">
          <div className="footer-label">POPULAR</div>
          <a href="#">The weight of a good jump</a>
          <a href="#">Grinding as a form of rest</a>
          <a href="#">Three songs, three decades</a>
        </div>
      </div>
    </footer>
  );
}

export const metadata = {
  title: "About — SumType",
};

export default function AboutPage() {
  return (
    <main>
      <div className="wrap">
        <div className="about-head">
          <h1>About</h1>
          <p className="dek">Still not entirely sure why I do this.</p>
        </div>

        <div className="about-grid">
          <div>
            <div className="about-art">
              <svg viewBox="0 0 400 460" xmlns="http://www.w3.org/2000/svg">
                <rect width="400" height="460" fill="#EFEAE0" />
                <rect x="0" y="300" width="400" height="160" fill="#DCD3BE" />
                <rect x="40" y="60" width="130" height="180" rx="6" fill="#3A3D42" />
                <rect x="55" y="75" width="100" height="70" rx="3" fill="#7FA0BE" />
                <circle cx="105" cy="180" r="22" fill="#C97B3D" />
                <rect x="200" y="120" width="160" height="110" rx="4" fill="#5C7D5A" opacity="0.85" />
                <rect x="215" y="135" width="130" height="18" fill="#EFEAE0" opacity="0.6" />
                <rect x="215" y="160" width="90" height="10" fill="#EFEAE0" opacity="0.4" />
                <rect x="60" y="280" width="18" height="60" fill="#17181A" opacity="0.15" />
                <rect x="100" y="260" width="18" height="80" fill="#17181A" opacity="0.15" />
                <rect x="140" y="300" width="18" height="40" fill="#17181A" opacity="0.15" />
              </svg>
            </div>
            <div className="about-caption">
              Illustration placeholder — swap for a real photo, drawing, or screenshot.
            </div>
          </div>

          <div className="about-copy">
            <p>
              Infrastructure and network-focused professional with hands-on experience designing,
              troubleshooting, migrating, and modernizing enterprise technology environments.
            </p>
            <p>
              My work has included core network migrations, VLAN and gateway redesigns, firewall
              administration, spanning-tree remediation, network observability implementations,
              disaster recovery automation, and multi-site infrastructure support. I enjoy
              understanding systems end to end and applying that knowledge to improve reliability,
              security, and operational efficiency.
            </p>
            <p>
              I also have experience supporting Cisco, Palo Alto, Fortinet, Azure, Intune,
              virtualization platforms, and monitoring solutions, with a particular interest in
              network architecture, automation, and infrastructure engineering. Whether
              troubleshooting a complex connectivity issue, planning a production change, or
              developing automation tools, I approach every challenge with a focus on root cause
              analysis, risk management, and long-term maintainability.
            </p>
            <p>
              That same instinct for root-cause thinking is what pulled me toward research and
              <strong> functional programming</strong>. I&apos;m interested in formal methods, type-safe
              systems, and using languages like Haskell to make infrastructure changes provably
              correct before they ever touch production, not just tested after the fact. It&apos;s the
              same discipline as network troubleshooting, just pushed further upstream.
            </p>
            <p>
              <strong>Specter</strong> is where the practical side of that shows up: a terminal, file
              browser, and code editor in one app, built for the way I actually work day to day.
              Still in beta, still getting sanded down through real use.
            </p>

            <a className="tip-btn" href="https://dawnrail.github.io/Dawnrail/">
              <span className="sq"></span> Try Specter
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

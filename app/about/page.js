export const metadata = {
  title: "About — SumType",
};

export default function AboutPage() {
  return (
    <main>
      <div className="wrap">
        <div className="about-head">
          <h1>About</h1>
        </div>

        <div className="about-grid">
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

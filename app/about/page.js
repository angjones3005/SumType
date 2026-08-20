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
              Most of my work begins with something that is not behaving the way it should. A
              route disappears, a gateway redesign exposes an old assumption, or a spanning-tree
              change leaves a port in a state nobody expected. I work in the space between those
              symptoms and the real cause: designing, troubleshooting, migrating, and modernizing
              the infrastructure underneath.
            </p>
            <p>
              Over time, that has meant core network migrations, VLAN and gateway redesigns,
              firewall administration, spanning-tree remediation, network observability,
              disaster-recovery automation, and support across multiple sites. The tools and
              platforms have varied, but the work usually comes back to the same question: can I
              understand the whole system well enough to make it more reliable, more secure, and
              easier to operate tomorrow than it was today?
            </p>
            <p>
              That work has taken me through Cisco, Palo Alto, Fortinet, Azure, Intune,
              virtualization platforms, and monitoring systems. It has also made me wary of fixes
              that only look correct from the surface. Whether I am tracing a connectivity issue,
              planning a production change, or writing an automation tool, I care about the root
              cause, the risks around it, and whether the solution will still make sense six
              months later.
            </p>
            <p>
              That instinct is what pulled me toward research and
              <strong> functional programming</strong>. I want to understand whether the systems I
              work on can be made correct by construction, rather than merely tested after a
              change reaches production. Formal methods, type-safe systems, and languages like
              Haskell give me a way to push the same root-cause discipline further upstream: to
              ask what a change can do before I let it touch a live network.
            </p>
            <p>
              <strong>Specter</strong> grew out of the practical side of that frustration. I wanted a
              terminal, file browser, and code editor that matched the way I actually work: SSH
              into a system, find the file, understand the context, and make the change without
              bouncing between five different windows. It is still in beta, and every rough edge
              is being worked down through real use rather than hypothetical infrastructure.
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

export const metadata = {
  title: "About — Save Point",
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
              My name&apos;s Angelo, and this blog started as notes on games, but it&apos;s turned into
              something closer to a build log.
            </p>
            <p>
              I work with network infrastructure day to day, real switches, real SSH sessions,
              real config that breaks in real ways. Every terminal tool I tried felt like it was
              built for someone else&apos;s workflow. So I started building my own.
            </p>
            <p>
              That became <strong>Specter</strong>, a terminal, file browser, and code editor in one app,
              designed for the way I actually work: SSH into something, browse the filesystem,
              edit a file, all without hopping between five different windows.
            </p>
            <p>
              It&apos;s still in beta. Every split-pane layout, every credential-handling decision,
              every rough edge gets sanded down through actually using it on real infrastructure,
              not hypothetical ones.
            </p>
            <p>
              This site is where I&apos;ll keep writing about that process, plus whatever games notes
              still show up here. No pressure either way, if something here&apos;s useful to you,
              that&apos;s the whole point.
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

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
              My name&apos;s Sam, and I&apos;m not really a writer either. I just play too many
              games and think about them for too long afterward.
            </p>
            <p>
              I&apos;ve been playing since I was old enough to hold a controller sideways.
              Somewhere along the way I started noticing that certain games left a residue: a
              sound cue, a boss fight, a feeling of being lost in a menu at 2am, and I wanted
              somewhere to put that down before it faded.
            </p>
            <p>
              This blog is that somewhere. The goal is simple: write about the games and
              moments that made the &quot;unforgettable&quot; list in my head, and try to
              explain why they earned the spot.
            </p>
            <p>
              These aren&apos;t reviews. They&apos;re closer to save files, snapshots of what a
              game meant to me at the time I played it. I&apos;m mostly doing this to scratch
              an itch to write, and to keep a record I can look back on.
            </p>
            <p>
              If something here resonates, that&apos;s the whole point. No pressure to do
              anything else, but if you&apos;d like to leave a tip, there&apos;s a button for
              that too.
            </p>

            <a className="tip-btn" href="#">
              <span className="sq"></span> Buy me a coffee
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}

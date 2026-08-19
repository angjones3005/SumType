import PostCard from "./components/PostCard";

const posts = [
  {
    tag: "PLATFORMER",
    tagClass: "",
    title: "The weight of a good jump",
    blurb: "Why the arc of a single jump can carry an entire game's feel.",
    readTime: "6 MIN READ",
    category: "PLATFORMS",
  },
  {
    tag: "RPG",
    tagClass: "blue",
    title: "Grinding as a form of rest",
    blurb: "On the strange comfort of repetitive, low-stakes progress.",
    readTime: "9 MIN READ",
    category: "MECHANICS",
  },
  {
    tag: "SOUNDTRACK",
    tagClass: "green",
    title: "Three songs, three decades",
    blurb: "Tracking a single melodic idea across three console generations.",
    readTime: "5 MIN READ",
    category: "MUSIC",
  },
];

export default function HomePage() {
  return (
    <main>
      <div className="wrap">
        <section className="hero">
          <span className="eyebrow">Est. 2026</span>
          <h1>Notes on my life.</h1>
          <p>
            Just talking about things I'm interested in.
          </p>
        </section>

        <section style={{padding: '32px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)'}}>
          <span className="eyebrow">Currently building</span>
          <h2 style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: '28px', fontWeight: 700}}>
            Specter: SSH terminal, file browser, and editor in one
          </h2>
          <p style={{color: 'var(--text-muted)', marginTop: '10px', maxWidth: '520px'}}>
            Built for real infrastructure work. Currently in beta.
          </p>
          <a className="tip-btn" href="https://dawnrail.github.io/Dawnrail/" style={{marginTop: '16px'}}>
            <span className="sq"></span> Check it out
          </a>
        </section>

        <div className="section-label">Recently written</div>
        <div className="grid">
          {posts.map((post) => (
            <PostCard key={post.title} {...post} />
          ))}
        </div>
      </div>
    </main>
  );
}

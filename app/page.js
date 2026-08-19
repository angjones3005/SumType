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
          <span className="eyebrow">Est. 2024 — a personal games log</span>
          <h1>Notes on the games that wouldn&apos;t let go.</h1>
          <p>
            Not reviews, exactly. More like save files for the moments, mechanics, and
            soundtracks that stuck around long after the credits rolled.
          </p>
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

export const metadata = {
  title: "Blog — SumType",
  description: "Notes on network verification, formal methods, and infrastructure engineering.",
};

const blogPosts = [
  {
    tag: "NETWORK VERIFICATION",
    title: "A Snapshot Safety Theorem for LoopGuard in Spanning Tree Protocol",
    blurb: "Why a memoryless LoopGuard model turns a temporal safety question into an exhaustive check over reachable failure snapshots.",
    href: "/blog/loopguard",
  },
  {
    tag: "FORMAL METHODS",
    title: "Boundary Sufficiency: Local Validation of Spanning Tree Protocol Configurations Without Full-Network Recomputation",
    blurb: "A precise theorem showing when local STP roles can be validated from a boundary distance vector, with a Haskell mechanization and 1,300x benchmark result.",
    href: "/blog/boundary-sufficiency",
  },
];

export default function BlogPage() {
  return (
    <main>
      <div className="wrap">
        <header className="blog-index-header">
          <span className="eyebrow">RESEARCH NOTES</span>
          <h1>Blog</h1>
          <p className="post-dek">Notes on network verification, formal methods, and infrastructure engineering.</p>
        </header>

        <div className="blog-list">
          {blogPosts.map((post) => (
            <a className="blog-list-item" href={post.href} key={post.href}>
              <span className="eyebrow">{post.tag}</span>
              <h2>{post.title}</h2>
              <p>{post.blurb}</p>
              <span className="blog-read-link">Read post &rarr;</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}

import Link from "next/link";

export default function PostCard({ tag, tagClass, title, blurb, readTime, category, href }) {
  return (
    <Link className="card" href={href || "#"} target="_blank" rel="noopener noreferrer">
      <div className={`card-tag ${tagClass || ""}`}>
        <span>{tag}</span>
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{blurb}</p>
        <div className="card-meta">
          <span>{readTime}</span>
          <span>·</span>
          <span>{category}</span>
        </div>
      </div>
    </Link>
  );
}

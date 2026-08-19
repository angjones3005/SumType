import Link from "next/link";

export default function PostCard({ tag, tagClass, title, blurb, readTime, category }) {
  return (
    <Link className="card" href="#">
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

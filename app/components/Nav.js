"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (href) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header>
      <div className="nav-inner">
        <Link href="/" className="brand">
          <div className="brand-mark"></div>
          <div>
            <div className="brand-name">SumType</div>
            <div className="brand-sub">
              <span className="blink"></span>Autosaving your backlog
            </div>
          </div>
        </Link>
        <nav>
          <ul>
            <li>
              <Link href="/" className={isActive("/") ? "active" : ""}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className={isActive("/about") ? "active" : ""}>
                About
              </Link>
            </li>
            <li><Link href="#">Platforms</Link></li>
            <li><Link href="#">Reviews</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

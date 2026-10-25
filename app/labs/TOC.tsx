"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/labs", label: "Labs", id: "wd-home-link" },
  { href: "/labs/lab1", label: "Lab 1", id: "wd-lab1-link" },
  { href: "/labs/lab2", label: "Lab 2", id: "wd-lab2-link" },
  { href: "/labs/lab3", label: "Lab 3", id: "wd-lab3-link" },
];

export default function TOC() {
  const pathname = usePathname() || "";
  return (
    <nav id="wd-toc" className="wd-labs-toc">
      {items.map((it) => {
        const active = pathname === it.href;
        return (
          <Link
            key={it.href}
            id={it.id}
            href={it.href}
            aria-current={active ? "page" : undefined}
            className={active ? "wd-active-toc-link" : undefined}
            style={active ? { fontWeight: "bold", color: "#dc2626", textDecoration: "underline" } : undefined}
          >
            {it.label}
          </Link>
        );
      })}
      <Link id="wd-kambaz-link" href="/">Kambaz</Link>
      <span id="wd-toc-note"> | Reha Jambavadekar — &ldquo;ship it.&rdquo;</span>
      <a id="wd-toc-book-link" href="https://webdev-client.vercel.app/"> Chapter 1</a>
    </nav>
  );
}

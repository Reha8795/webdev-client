import Link from "next/link";

export default function TOC() {
  return (
    <nav id="wd-toc" className="wd-labs-toc">
      <Link id="wd-home-link" href="/labs">Labs</Link>
      <Link id="wd-lab1-link" href="/labs/lab1">Lab 1</Link>
      <Link id="wd-lab2-link" href="/labs/lab2">Lab 2</Link>
      <Link id="wd-lab3-link" href="/labs/lab3">Lab 3</Link>
      <Link href="/labs/lab4">Lab 4</Link>
      <Link href="/labs/lab5">Lab 5</Link>
      <Link id="wd-kambaz-link" href="/">Kambaz</Link>

      {/* On your own (manual check): a personal note in the TOC */}
      <span id="wd-toc-note"> | Reha Jambavadekar — “ship it.”</span>

      {/* With AI (manual check): Chapter 1 book link */}
      <a id="wd-toc-book-link" href="https://webdev-client.vercel.app/">
        {" "}Chapter 1
      </a>
    </nav>
  );
}

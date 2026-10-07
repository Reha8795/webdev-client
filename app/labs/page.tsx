import Link from "next/link";

export default function Labs() {
  return (
    <div id="wd-labs" className="wd-content">
      <h1>Labs</h1>

      {/* Full Canvas name on Labs index too */}
      <h3 id="wd-name">Reha Bhalchandra Jambavadekar</h3>
      <h4>Section: CS 5610-09 (CRN 21441)</h4>

      <ul>
        <li><Link href="/labs/lab1">Lab 1</Link></li>
        <li><Link href="/labs/lab2">Lab 2</Link></li>
        <li><Link href="/labs/lab3">Lab 3</Link></li>
        {/* On your own: Lab 4 link */}
        <li><Link id="wd-lab4-link" href="/labs/lab4">Lab 4</Link></li>
        {/* With AI: Lab 5 link */}
        <li><Link id="wd-lab5-link" href="/labs/lab5">Lab 5</Link></li>
      </ul>

      {/* Kambaz link so graders can reach every required page */}
      <p><Link id="wd-kambaz-link" href="/">Kambaz</Link></p>

      {/* GitHub link required on Labs (§1.5) */}
      <p>
        <a id="wd-github" href="https://github.com/Reha8795/webdev-client">
          My webdev-client GitHub repository
        </a>
      </p>
    </div>
  );
}

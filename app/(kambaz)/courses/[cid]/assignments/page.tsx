import Link from "next/link";

export default async function Assignments({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  const assignments = [
    { aid: "123", title: "A1 — HTML" },
    { aid: "124", title: "A2 — CSS" },
    { aid: "125", title: "A3 — JavaScript" },
  ];
  return (
    <div id="wd-assignments">
      <input id="wd-search-assignment" placeholder="Search for Assignments" />
      <button id="wd-add-assignment-btn" type="button">+ Assignment</button>
      <button id="wd-add-assignment-group-btn" type="button">+ Group</button>

      <h3 id="wd-assignments-title">
        ASSIGNMENTS 40% of Total{" "}
        <button type="button">+</button>
      </h3>

      <ul id="wd-assignment-list">
        {assignments.map((a) => (
          <li key={a.aid} className="wd-assignment-list-item">
            <Link
              className="wd-assignment-link"
              href={`/courses/${cid}/assignments/${a.aid}`}
            >
              {a.title}
            </Link>
            <p>
              Multiple Modules | <b>Not available until</b> May 6 at 12:00am |
              <br />
              <b>Due</b> May 13 at 11:59pm | 100 pts
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

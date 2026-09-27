import Link from "next/link";

const courses = [
  { cid: "1234", code: "CS5610", title: "Web Development" },
  { cid: "2345", code: "CS5200", title: "Database Management Systems" },
  { cid: "3456", code: "CS5010", title: "Programming Design Paradigm" },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />
      <div id="wd-dashboard-courses">
        {courses.map((c) => (
          <div key={c.cid} className="wd-dashboard-course" style={{ border: "1px solid #ccc", width: 300, display: "inline-block", margin: 8, verticalAlign: "top" }}>
            <Link
              href={`/courses/${c.cid}/home`}
              className="wd-dashboard-course-link"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div style={{ background: "#0b5ed7", height: 120 }} />
              <div style={{ padding: 8 }}>
                <h5 className="wd-dashboard-course-title">
                  {c.code} — {c.title}
                </h5>
                <p>{c.title}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

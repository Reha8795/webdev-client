import Link from "next/link";

const courses = [
  { cid: "1234", code: "CS5610", title: "Web Development", color: "bg-sky-700" },
  { cid: "2345", code: "CS5200", title: "Database Management Systems", color: "bg-emerald-700" },
  { cid: "3456", code: "CS5010", title: "Programming Design Paradigm", color: "bg-rose-700" },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-1">
      <h1 id="wd-dashboard-title" className="text-3xl font-bold">Dashboard</h1>
      <hr className="my-3" />
      <h2 id="wd-dashboard-published" className="text-xl font-semibold text-slate-600">
        Published Courses ({courses.length})
      </h2>
      <hr className="my-3" />
      <div id="wd-dashboard-courses" className="flex flex-wrap gap-5">
        {courses.map((c) => (
          <div
            key={c.cid}
            className="wd-dashboard-course w-[300px] rounded-lg overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow"
          >
            <Link
              href={`/courses/${c.cid}/home`}
              className="wd-dashboard-course-link block no-underline text-inherit"
            >
              <div className={`h-[140px] ${c.color}`} />
              <div className="p-3">
                <h5 className="wd-dashboard-course-title font-semibold text-sky-700">
                  {c.code} — {c.title}
                </h5>
                <p className="text-sm text-slate-500">{c.title}</p>
                <p className="text-xs text-slate-400 mt-6">Published</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

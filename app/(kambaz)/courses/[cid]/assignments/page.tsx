import Link from "next/link";
import { FaMagnifyingGlass, FaPlus } from "react-icons/fa6";

export default async function Assignments({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const assignments = [
    { aid: "123", title: "A1 — HTML", pts: 100 },
    { aid: "124", title: "A2 — CSS", pts: 100 },
    { aid: "125", title: "A3 — JavaScript", pts: 100 },
  ];
  return (
    <div id="wd-assignments">
      <div className="flex items-center gap-3 mb-4">
        <div className="flex items-center border border-slate-300 rounded px-2 flex-1 max-w-sm">
          <FaMagnifyingGlass className="text-slate-400" />
          <input id="wd-search-assignment" placeholder="Search for Assignments" className="px-2 py-2 w-full outline-none" />
        </div>
        <button id="wd-add-assignment-group-btn" className="border border-slate-300 rounded px-3 py-2 hover:bg-slate-50">+ Group</button>
        <button id="wd-add-assignment-btn" className="bg-red-600 text-white rounded px-3 py-2 hover:bg-red-700 flex items-center gap-1">
          <FaPlus /> Assignment
        </button>
      </div>

      <div className="flex justify-between items-center bg-slate-100 px-4 py-3 border-l-4 border-green-600 rounded-t">
        <h3 id="wd-assignments-title" className="font-bold">ASSIGNMENTS</h3>
        <span className="text-sm text-slate-600 border border-slate-300 rounded-full px-3 py-1">40% of Total</span>
      </div>

      <ul id="wd-assignment-list" className="list-none p-0 border border-slate-200 rounded-b">
        {assignments.map((a) => (
          <li key={a.aid} className="wd-assignment-list-item flex items-start gap-3 px-4 py-3 border-b border-slate-100 last:border-b-0 border-l-4 border-l-green-600 hover:bg-slate-50">
            <div className="flex-1">
              <Link className="wd-assignment-link font-semibold text-slate-800 no-underline hover:underline" href={`/courses/${cid}/assignments/${a.aid}`}>
                {a.title}
              </Link>
              <p className="text-sm text-slate-500 mt-1">
                Multiple Modules | <b>Not available until</b> May 6 at 12:00am |<br />
                <b>Due</b> May 13 at 11:59pm | {a.pts} pts
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

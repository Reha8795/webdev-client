import { modules } from "../../../database";

export default async function CourseHome({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const list = modules.filter((m) => m.course === cid);
  return (
    <div id="wd-home" className="flex gap-6">
      <div className="flex-1">
        <h3 className="text-xl font-bold mb-3">Modules</h3>
        <ul className="wd-modules list-none p-0 border border-slate-200 rounded">
          {list.map((m) => (
            <li key={m._id} className="wd-module border-b border-slate-200 last:border-b-0">
              <div className="wd-title bg-slate-100 font-semibold px-4 py-3 border-l-4 border-green-600">{m.name}</div>
              <ul className="wd-content list-disc ml-10 py-2 text-slate-600">
                {m.lessons.map((l) => (<li key={l} className="wd-content-item py-0.5">{l}</li>))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <div id="wd-course-status" className="w-[300px] shrink-0">
        <h3 className="text-lg font-bold mb-2">Course Status</h3>
        <div className="flex gap-2 mb-3">
          <button className="flex-1 border border-slate-300 rounded px-3 py-2 hover:bg-slate-50">Unpublish</button>
          <button className="flex-1 bg-green-700 text-white rounded px-3 py-2 hover:bg-green-800">Publish</button>
        </div>
        {["Import Existing Content","Import from Commons","Choose Home Page","View Course Stream","New Announcement"].map((b) => (
          <button key={b} className="block w-full text-left border border-slate-200 rounded px-3 py-2 mb-2 bg-slate-50 hover:bg-slate-100">{b}</button>
        ))}
      </div>
    </div>
  );
}

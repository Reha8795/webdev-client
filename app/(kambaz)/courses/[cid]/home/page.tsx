import Modules from "../modules/page";

export default function CourseHome() {
  return (
    <div id="wd-home" className="flex gap-6">
      <div className="flex-1">
        <Modules />
      </div>
      <div id="wd-course-status" className="w-[300px] shrink-0">
        <h3 className="text-lg font-bold mb-2">Course Status</h3>
        <div className="flex gap-2 mb-3">
          <button className="flex-1 border border-slate-300 rounded px-3 py-2 hover:bg-slate-50">Unpublish</button>
          <button className="flex-1 bg-green-700 text-white rounded px-3 py-2 hover:bg-green-800">Publish</button>
        </div>
        {["Import Existing Content","Import from Commons","Choose Home Page","View Course Stream","New Announcement","New Analytics","View Course Notifications"].map((b) => (
          <button key={b} className="block w-full text-left border border-slate-200 rounded px-3 py-2 mb-2 bg-slate-50 hover:bg-slate-100">
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

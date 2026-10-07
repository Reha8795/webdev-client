import Link from "next/link";

export default async function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  const { cid } = await params;
  const label = "block text-sm font-medium text-slate-600 mb-1";
  const field = "w-full border border-slate-300 rounded px-3 py-2";
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className={label}>Assignment Name</label>
        <input id="wd-name" defaultValue="A1 - ENV + HTML" className={field} />
      </div>

      <div className="mb-4">
        <textarea id="wd-description" rows={6} className={field}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel." />
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label htmlFor="wd-points" className="w-40 text-right text-slate-600">Points</label>
          <input id="wd-points" type="number" defaultValue={100} className={field} />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-group" className="w-40 text-right text-slate-600">Assignment Group</label>
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option><option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option><option value="PROJECT">PROJECT</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-display-grade-as" className="w-40 text-right text-slate-600">Display Grade as</label>
          <select id="wd-display-grade-as" defaultValue="PERCENTAGE" className={field}>
            <option value="PERCENTAGE">Percentage</option><option value="POINTS">Points</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-submission-type" className="w-40 text-right text-slate-600">Submission Type</label>
          <select id="wd-submission-type" defaultValue="ONLINE" className={field}>
            <option value="ONLINE">Online</option><option value="ON_PAPER">On Paper</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-assign-to" className="w-40 text-right text-slate-600">Assign to</label>
          <input id="wd-assign-to" defaultValue="Everyone" className={field} />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-due-date" className="w-40 text-right text-slate-600">Due</label>
          <input id="wd-due-date" type="date" defaultValue="2026-05-13" className={field} />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-available-from" className="w-40 text-right text-slate-600">Available from</label>
          <input id="wd-available-from" type="date" defaultValue="2026-05-06" className={field} />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-available-until" className="w-40 text-right text-slate-600">Until</label>
          <input id="wd-available-until" type="date" defaultValue="2026-05-20" className={field} />
        </div>
      </div>

      <hr className="my-5" />
      <div className="flex justify-end gap-2">
        <Link id="wd-cancel" href={`/courses/${cid}/assignments`} className="border border-slate-300 rounded px-4 py-2 hover:bg-slate-50">Cancel</Link>
        <Link id="wd-save" href={`/courses/${cid}/assignments`} className="bg-red-600 text-white rounded px-4 py-2 hover:bg-red-700">Save</Link>
      </div>
    </div>
  );
}

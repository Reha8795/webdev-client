import Link from "next/link";
import { assignments } from "../../../../database";

export default async function AssignmentEditor({ params }: { params: Promise<{ cid: string; aid: string }> }) {
  const { cid, aid } = await params;
  const assignment = assignments.find((a) => a._id === aid && a.course === cid);
  const field = "w-full border border-slate-300 rounded px-3 py-2";
  const label = "block text-sm font-medium text-slate-600 mb-1";
  return (
    <div id="wd-assignments-editor" className="max-w-2xl">
      <div className="mb-4">
        <label htmlFor="wd-name" className={label}>Assignment Name</label>
        <input id="wd-name" defaultValue={assignment?.title ?? ""} className={field} />
      </div>
      <div className="mb-4">
        <textarea id="wd-description" rows={5} className={field}
          defaultValue="The assignment is available online. Submit a link to the landing page of your Web application running on Vercel." />
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <label htmlFor="wd-points" className="w-40 text-right text-slate-600">Points</label>
          <input id="wd-points" type="number" defaultValue={assignment?.points ?? 100} className={field} />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-due-date" className="w-40 text-right text-slate-600">Due</label>
          <input id="wd-due-date" type="date" defaultValue={assignment?.dueDate ?? "2026-05-13"} className={field} />
        </div>
        <div className="flex items-center gap-4">
          <label htmlFor="wd-available-from" className="w-40 text-right text-slate-600">Available from</label>
          <input id="wd-available-from" type="date" defaultValue={assignment?.availableFrom ?? "2026-05-06"} className={field} />
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

import { modules } from "../../../database";

export default async function Modules({ params }: { params: Promise<{ cid: string }> }) {
  const { cid } = await params;
  const list = modules.filter((m) => m.course === cid);
  return (
    <div id="wd-modules">
      <div className="flex justify-between items-center mb-3">
        <h3 id="wd-modules-title" className="text-xl font-bold">Modules</h3>
        <button className="bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700">+ Module</button>
      </div>
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
  );
}

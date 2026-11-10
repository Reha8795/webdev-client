"use client";
import { useState } from "react";
import { useParams } from "next/navigation";
import { useModulesStore } from "../../../stores/modulesStore";
import { FaPlus, FaPencil, FaTrashCan } from "react-icons/fa6";

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const { modules, addModule, updateModule, deleteModule } = useModulesStore();
  const list = modules.filter((m) => m.course === cid);
  const [editId, setEditId] = useState<string | null>(null);
  const [text, setText] = useState("");

  return (
    <div id="wd-modules">
      <div className="flex justify-between items-center mb-3">
        <h3 id="wd-modules-title" className="text-xl font-bold">Modules</h3>
        <button id="wd-add-module-btn" className="bg-red-600 text-white px-3 py-1.5 rounded flex items-center gap-1"
          onClick={() => addModule(cid, "New Module")}>
          <FaPlus /> Module
        </button>
      </div>
      <ul className="wd-modules list-none p-0 border border-slate-200 rounded">
        {list.map((m) => (
          <li key={m._id} className="wd-module border-b border-slate-200 last:border-b-0">
            <div className="wd-title bg-slate-100 font-semibold px-4 py-3 border-l-4 border-green-600 flex justify-between items-center">
              {editId === m._id ? (
                <input className="border border-slate-400 rounded px-2 py-1 flex-1 mr-2" value={text}
                  onChange={(e) => setText(e.target.value)}
                  onKeyDown={(e) => { if (e.key === "Enter") { updateModule(m._id, text); setEditId(null); } }} />
              ) : (
                <span>{m.name}</span>
              )}
              <span className="flex items-center gap-3 text-slate-600">
                <button className="wd-edit-module" aria-label="edit"
                  onClick={() => { setEditId(m._id); setText(m.name); }}><FaPencil /></button>
                <button className="wd-delete-module" aria-label="delete"
                  onClick={() => deleteModule(m._id)}><FaTrashCan /></button>
              </span>
            </div>
            <ul className="wd-content list-disc ml-10 py-2 text-slate-600">
              {m.lessons.map((l) => (<li key={l} className="wd-content-item py-0.5">{l}</li>))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

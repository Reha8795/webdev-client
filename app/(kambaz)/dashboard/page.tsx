"use client";
import { useState } from "react";
import Link from "next/link";
import { useCoursesStore, Course } from "../stores/coursesStore";

const empty = { _id: "", name: "", number: "", term: "Fall 2026", color: "bg-sky-700", description: "", startDate: "2026-09-01" };
const field = "w-full border border-slate-300 rounded px-3 py-2";

export default function Dashboard() {
  const { courses, addCourse, updateCourse, deleteCourse } = useCoursesStore();
  const [form, setForm] = useState<Course>({ ...empty });

  const onAdd = () => { if (form.name.trim()) { addCourse(form); setForm({ ...empty }); } };
  const onUpdate = () => { if (form._id) { updateCourse(form); setForm({ ...empty }); } };
  const onEdit = (c: Course) => setForm({ ...empty, ...c });

  return (
    <div id="wd-dashboard" className="p-1">
      <h1 id="wd-dashboard-title" className="text-3xl font-bold">Dashboard</h1>
      <hr className="my-3" />

      {/* Course form (§4.10.2.1) */}
      <div id="wd-course-form" className="max-w-xl mb-4 border border-slate-200 rounded p-4">
        <h5 className="font-semibold mb-2">New Course</h5>
        <input id="wd-course-name" className={field + " mb-2"} placeholder="Course Name"
          value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        <input id="wd-course-number" className={field + " mb-2"} placeholder="Course Number"
          value={form.number} onChange={(e) => setForm({ ...form, number: e.target.value })} />
        <input id="wd-course-start-date" type="date" className={field + " mb-2"}
          value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
        <textarea id="wd-course-description" className={field + " mb-2"} placeholder="Course Description" rows={2}
          value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
        <div className="flex gap-2">
          <button id="wd-add-new-course-click" className="bg-green-700 text-white rounded px-4 py-2" onClick={onAdd}>Add</button>
          <button id="wd-update-course-click" className="bg-blue-700 text-white rounded px-4 py-2" onClick={onUpdate}>Update</button>
        </div>
      </div>

      <h2 id="wd-dashboard-published" className="text-xl font-semibold text-slate-600">
        Published Courses ({courses.length})
      </h2>
      <hr className="my-3" />
      <div id="wd-dashboard-courses" className="flex flex-wrap gap-5">
        {courses.map((c) => (
          <div key={c._id} className="wd-dashboard-course w-[300px] rounded-lg overflow-hidden border border-slate-200 shadow-sm">
            <Link href={`/courses/${c._id}/home`} className="wd-dashboard-course-link block no-underline text-inherit">
              <div className={`h-[140px] ${c.color}`} />
              <div className="p-3">
                <h5 className="wd-dashboard-course-title font-semibold text-sky-700">{c.name}</h5>
                <p className="text-sm text-slate-500">{c.number}</p>
              </div>
            </Link>
            <div className="flex gap-2 p-3 pt-0">
              <button className="wd-edit-course-click border border-slate-300 rounded px-3 py-1" onClick={() => onEdit(c)}>Edit</button>
              <button className="wd-delete-course-click bg-red-600 text-white rounded px-3 py-1" onClick={() => deleteCourse(c._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

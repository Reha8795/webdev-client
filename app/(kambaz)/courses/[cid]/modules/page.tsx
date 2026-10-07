const modules = [
  {
    title: "Week 1 — HTML",
    lessons: [
      { title: "LEARNING OBJECTIVES", items: ["Introduction to the course", "Learn what is HTML", "Set up dev environment"] },
      { title: "READING", items: ["Full Stack Developer — Chapter 1", "Full Stack Developer — Chapter 2"] },
    ],
  },
  {
    title: "Week 2 — CSS",
    lessons: [
      { title: "LEARNING OBJECTIVES", items: ["Style HTML with CSS", "Flexbox and Grid", "Tailwind utilities"] },
    ],
  },
];

export default function Modules() {
  return (
    <div id="wd-modules">
      <div className="flex justify-between items-center mb-3">
        <h3 id="wd-modules-title" className="text-xl font-bold">Modules</h3>
        <button className="bg-red-600 text-white px-3 py-1.5 rounded hover:bg-red-700">
          + Module
        </button>
      </div>
      <ul className="wd-modules list-none p-0 border border-slate-200 rounded">
        {modules.map((m) => (
          <li key={m.title} className="wd-module border-b border-slate-200 last:border-b-0">
            <div className="wd-title bg-slate-100 font-semibold px-4 py-3 border-l-4 border-green-600">
              {m.title}
            </div>
            <ul className="wd-lessons list-none p-0">
              {m.lessons.map((l) => (
                <li key={l.title} className="wd-lesson px-4 py-2 border-t border-slate-100">
                  <span className="wd-title font-medium text-slate-700">{l.title}</span>
                  <ul className="wd-content list-disc ml-6 text-slate-600">
                    {l.items.map((it) => (
                      <li key={it} className="wd-content-item py-0.5">{it}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

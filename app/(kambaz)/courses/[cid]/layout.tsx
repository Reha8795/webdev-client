import Link from "next/link";

const navItems = (cid: string) => [
  { id: "wd-course-home-link", href: `/courses/${cid}/home`, label: "Home" },
  { id: "wd-course-modules-link", href: `/courses/${cid}/modules`, label: "Modules" },
  { id: "wd-course-piazza-link", href: `/courses/${cid}/piazza`, label: "Piazza" },
  { id: "wd-course-zoom-link", href: `/courses/${cid}/zoom`, label: "Zoom" },
  { id: "wd-course-quizzes-link", href: `/courses/${cid}/quizzes`, label: "Quizzes" },
  { id: "wd-course-assignments-link", href: `/courses/${cid}/assignments`, label: "Assignments" },
  { id: "wd-course-grades-link", href: `/courses/${cid}/grades`, label: "Grades" },
  { id: "wd-course-people-link", href: `/courses/${cid}/people`, label: "People" },
];

export default async function CoursesLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ cid: string }>;
}) {
  const { cid } = await params;
  return (
    <div id="wd-courses">
      <h2 className="text-2xl font-bold mb-1">Course {cid}</h2>
      <hr className="mb-4" />
      <div className="flex gap-6">
        <nav
          id="wd-courses-navigation"
          className="flex flex-col w-[180px] shrink-0"
        >
          {navItems(cid).map(({ id, href, label }) => (
            <Link
              key={id}
              id={id}
              href={href}
              className="px-3 py-2 text-sky-700 border-l-4 border-transparent hover:border-sky-700 hover:bg-slate-50"
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}

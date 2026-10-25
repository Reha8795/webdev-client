"use client";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ courseName }: { courseName: string }) {
  const pathname = usePathname() || "";
  const seg = pathname.split("/").filter(Boolean);
  // /courses/<cid>/<section>...
  const sectionSlug = seg[2] || "home";
  const labels: Record<string, string> = {
    home: "Home", modules: "Modules", assignments: "Assignments",
    people: "People", piazza: "Piazza", zoom: "Zoom", quizzes: "Quizzes", grades: "Grades",
  };
  const section = labels[sectionSlug] || sectionSlug;
  return (
    <h2 id="wd-course-breadcrumb" className="text-2xl font-bold mb-1">
      {courseName} &gt; {section}
    </h2>
  );
}

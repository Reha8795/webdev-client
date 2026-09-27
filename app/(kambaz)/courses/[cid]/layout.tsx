import Link from "next/link";

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
      <h2>Course {cid}</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td style={{ verticalAlign: "top", width: 160 }}>
              <nav id="wd-courses-navigation" className="wd-course-nav">
                <Link id="wd-course-home-link" href={`/courses/${cid}/home`}>Home</Link>
                <Link id="wd-course-modules-link" href={`/courses/${cid}/modules`}>Modules</Link>
                <Link id="wd-course-piazza-link" href={`/courses/${cid}/piazza`}>Piazza</Link>
                <Link id="wd-course-zoom-link" href={`/courses/${cid}/zoom`}>Zoom</Link>
                <Link id="wd-course-quizzes-link" href={`/courses/${cid}/quizzes`}>Quizzes</Link>
                <Link id="wd-course-assignments-link" href={`/courses/${cid}/assignments`}>Assignments</Link>
                <Link id="wd-course-grades-link" href={`/courses/${cid}/grades`}>Grades</Link>
                <Link id="wd-course-people-link" href={`/courses/${cid}/people`}>People</Link>
              </nav>
            </td>
            <td style={{ verticalAlign: "top" }}>{children}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
